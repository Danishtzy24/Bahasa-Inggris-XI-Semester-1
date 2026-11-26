# -*- coding: utf-8 -*-
"""Regen content.ts Bahasa Inggris v2: 10 bab, bank soal campuran PG/PGK/TF.

Sumber: content.ts lama (bab 1–5, Suggestions, Procedure) + data baru
(ch6_opinion, ch8_report, ch10_uas, practice_new, exam40_a/b).
"""
import json
import re
import importlib.util
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'src' / 'content.ts'


def load(mod_name, path):
    spec = importlib.util.spec_from_file_location(mod_name, str(ROOT / path))
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def strip_html(s: str) -> str:
    s = re.sub(r'<br\s*/?>', ' ', s)
    s = re.sub(r'<[^>]+>', ' ', s)
    s = s.replace('&nbsp;', ' ').replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
    s = re.sub(r'[\u2018\u2019]', "'", s)
    return re.sub(r'\s+', ' ', s).strip()


def norm_details(sec):
    det = sec.get('details', [])
    sec['details'] = [{'title': d[0], 'html': d[1]} if isinstance(d, (tuple, list)) else d for d in det]


def build_search(sec) -> str:
    norm_details(sec)
    parts = [sec['number'], sec['title'], strip_html(sec.get('lead', ''))]
    for d in sec.get('details', []):
        parts.append(d['title'])
        parts.append(strip_html(d['html']))
    return ' '.join(parts).lower()


TITLE_ID = {
    'Grammar foundations': 1, 'Present tenses': 2, 'Past tenses': 3, 'Future tenses': 4,
    'Passive voice': 5, 'Asking & giving opinion': 6, 'Suggestions': 7, 'Report text': 8,
    'Procedure text': 9, 'UAS practice': 10,
}
ORDER = ['Grammar foundations', 'Present tenses', 'Past tenses', 'Future tenses', 'Passive voice',
         'Asking & giving opinion', 'Suggestions', 'Report text', 'Procedure text', 'UAS practice']


def main():
    t = SRC.read_text(encoding='utf-8')
    data = json.loads(t[t.index('{"chapters"'):t.rindex('};') + 1])
    questions = data['questions']
    assert len(questions) == 123, f'bank soal berubah: {len(questions)}'
    types = {}
    for q in questions:
        types[q.get('type', 'single')] = types.get(q.get('type', 'single'), 0) + 1
    assert types == {'single': 93, 'multi': 22, 'tf': 8}, types

    by_title = {}
    for c in data['chapters']:
        by_title[c['title']] = c
    assert set(by_title) == set(TITLE_ID), set(TITLE_ID) - set(by_title)

    chapters = []
    for title in ORDER:
        c = by_title[title]
        c['id'] = TITLE_ID[title]
        c['questions'] = []
        chapters.append(c)

    by_ch = {}
    for q in questions:
        by_ch.setdefault(q['chapter'], []).append(q['id'])
    for c in chapters:
        ids = by_ch.get(c['id'], [])
        assert ids, f'bab {c["id"]} ({c["title"]}) tanpa soal'
        c['questions'] = ids

    for c in chapters:
        for sec in c['sections']:
            sec['search'] = build_search(sec)

    summary = ('<p><strong>Grammar</strong> (pronouns, verb forms, auxiliaries) menjadi fondasi, '
               'lalu <strong>tenses</strong> — present, past, future — dilatih lewat konteks. '
               'Materi inti: <strong>asking &amp; giving opinion</strong>, <strong>asking &amp; giving suggestion</strong>, '
               '<strong>passive voice</strong> (semua tense, termasuk pelaporan ilmiah), dan <strong>report text</strong> '
               '(general classification + description). Bab <strong>procedure text</strong> melengkapi keterampilan teks, '
               'dan bab <strong>UAS practice</strong> menguji semuanya lewat 40 soal bervariasi: '
               'pilihan ganda, pilihan ganda kompleks, dan benar/salah.</p>')
    counts = {'chapters': len(chapters),
              'sections': sum(len(c['sections']) for c in chapters),
              'questions': len(questions)}
    course = {'chapters': chapters, 'questions': questions, 'summary': summary, 'counts': counts}
    js = ("import type { Course } from './types';\n"
          'export const COURSE: Course = '
          + json.dumps(course, ensure_ascii=False, separators=(',', ':')) + ';\n')
    SRC.write_text(js, encoding='utf-8')
    print(f'content.ts ditulis: {len(js):,} char | bab={counts["chapters"]} '
          f'sections={counts["sections"]} soal={counts["questions"]}')
    for c in chapters:
        tt = {}
        for q in questions:
            if q['chapter'] == c['id']:
                k = q.get('type', 'single')
                tt[k] = tt.get(k, 0) + 1
        print(f'  {c["id"]:2d}. {c["title"][:34]:36s} sec={len(c["sections"]):2d} '
              f'soal={len(c["questions"]):2d} {tt}')


if __name__ == '__main__':
    main()
