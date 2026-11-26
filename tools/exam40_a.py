# -*- coding: utf-8 -*-
"""Bank UAS — nomor 1–20 (PG 1–16, PGK 17–20). chapter=10, group=10."""


def S(qid, prompt, opts, ci, expl):
    o = []
    for i, t in enumerate(opts):
        letter = "ABCDE"[i]
        o.append({"id": f"{qid}-{letter}", "html": f"<p>{t}</p>", "text": t})
    return {"id": qid, "chapter": 10, "group": 10, "type": "single", "prompt": f"<p>{prompt}</p>".replace(chr(10), "<br>"),
            "options": o, "correct": f"{qid}-{'ABCD'[ci]}", "explanation": f"<p>{expl}</p>"}


def M(qid, prompt, opts, cis, expl):
    o = []
    for i, t in enumerate(opts):
        letter = "ABCDE"[i]
        o.append({"id": f"{qid}-{letter}", "html": f"<p>{t}</p>", "text": t})
    correct = ",".join(f"{qid}-{'ABCDE'[i]}" for i in sorted(cis))
    return {"id": qid, "chapter": 10, "group": 10, "type": "multi", "prompt": f"<p>{prompt}</p>".replace(chr(10), "<br>"),
            "options": o, "correct": correct, "explanation": f"<p>{expl}</p>"}


EXAM_1_20 = [
    # 1 — Opinion PG: menolak sopan (apresiasi dulu, lalu keraguan beralasan)
    S("U01", "You disagree with your friend’s plan to hold the class party outdoors. Which response is the most polite way to refuse?",
      ["That idea will definitely fail.", "The idea sounds fun, but I am afraid it will rain, so let’s book the hall instead.",
       "No, I do not like parties.", "You always come up with bad ideas."], 1,
      "Penolakan sopan dimulai dengan apresiasi (‘The idea sounds fun’), lalu keraguan dengan alasan (‘it will rain’), dan ditutup alternatif. Pilihan lain menyerang orang atau tanpa alasan."),
    # 2 — Opinion PG: maksud “I see your point, but...”
    S("U02", "In a dialogue, B says: “I see your point, but don’t you think we should check the budget first?” What does B mean?",
      ["B fully agrees with A.", "B completely rejects A’s idea.", "B partly agrees and raises another consideration.", "B does not understand A at all."], 2,
      "‘I see your point, but…’ berarti setuju sebagian lalu mengajukan pertimbangan lain — dalam kasus ini soal anggaran."),
    # 3 — Opinion PG: opini meyakinkan vs selera
    S("U03", "Which statement is the most convincing opinion?",
      ["I think math is boring.", "In my opinion, the story is nice.", "I believe the library should extend its hours because students often finish assignments late.", "Everyone knows that this song is the best."], 2,
      "Opini yang meyakinkan punya alasan logis dan spesifik (‘because students often finish assignments late’), bukan sekadar selera atau klaim umum."),
    # 4 — Opinion PG: respons lengkap (tidak setuju sopan + opini + alasan)
    S("U04", "Complete this response: “____, I think we should postpone the trip because several students are still sick.”",
      ["I am sorry", "You are wrong", "I’m afraid I disagree", "That is stupid"], 2,
      "Respons lengkap memakai ungkapan ketidaksetujuan yang sopan (‘I’m afraid I disagree’) + opini (‘I think we should…’) + alasan (‘because…’)."),
    # 5 — Suggestion PG: saran konstruktif + alasan
    S("U05", "Your friend has not started the group report and the deadline is close. Which is the most constructive suggestion?",
      ["You are so lazy.", "Why don’t you start with the introduction tonight? It is the easiest part, so you will gain momentum.",
       "Do it yourself; I do not care.", "Maybe you should not do it at all."], 1,
      "Saran konstruktif memakai pola yang benar (‘Why don’t you + V1’) dan disertai alasan yang membantu — bukan kritik atau ajakan menyerah."),
    # 6 — Suggestion PG: must vs might want to consider
    S("U06", "Which sentence shows a softer, more polite suggestion?",
      ["You must revise this essay now.", "You might want to consider revising the first paragraph before submitting.",
       "You have to fix every word today.", "You must not submit this draft."], 1,
      "‘Might want to consider’ jauh lebih halus daripada ‘must’ yang kuat dan langsung. ‘Must not’ bahkan berarti larangan, bukan saran."),
    # 7 — Suggestion PG: saran realistis sesuai anggaran + Why don’t you
    S("U07", "The class wants to decorate the hall, but the budget is only Rp100.000. Which suggestion fits the situation?",
      ["Why don’t you hire a professional decorator? It will look perfect.",
       "Why don’t you use recycled paper and leftover paint? They cost almost nothing and still look creative.",
       "You’d better buy imported lights to impress everyone.",
       "Let’s cancel everything because the budget is too small."], 1,
      "Saran yang baik realistis sesuai kondisi (anggaran terbatas) dan memakai pola benar: ‘Why don’t you + V1’ + alasan."),
    # 8 — Suggestion PG: respons saran lengkap (saran + alasan + alternatif)
    S("U08", "Which response gives a complete suggestion — advice, reason, and an alternative?",
      ["Just sleep early.", "You should see a doctor because your cough has lasted a week; if you prefer, you can try a warm drink first and check again tomorrow.",
       "I do not know what to say.", "Maybe. Or maybe not."], 1,
      "Respons lengkap: saran (‘should see a doctor’) + alasan (‘because your cough…’) + alternatif (‘if you prefer… warm drink first’)."),
    # 9 — Passive PG: future passive
    S("U09", "Change to passive: “The committee will announce the results tomorrow.”",
      ["The results will announce by the committee tomorrow.", "The results will be announced by the committee tomorrow.",
       "The results are being announced by the committee tomorrow.", "The results were announced by the committee tomorrow."], 1,
      "Future passive = will + be + V3: ‘will be announced’. Pilihan C adalah present continuous passive, D adalah past passive."),
    # 10 — Passive PG: mengenali present continuous passive
    S("U10", "The sentence “The road is being repaired now” is in …",
      ["simple present passive", "present continuous passive", "future passive", "past perfect passive"], 1,
      "Bentuk ‘is/are being + V3’ = present continuous passive; kata ‘now’ menegaskan sedang berlangsung."),
    # 11 — Passive PG: kapan passive tepat dipakai
    S("U11", "When is passive voice the best choice?",
      ["When we want to emphasize who performed the action.", "When the doer is unknown or unimportant, and the focus is on the object or action.",
       "When the sentence has two objects and no verb.", "When we are telling a funny story."], 1,
      "Passive tepat saat pelaku tidak diketahui/tidak penting dan fokus pada objek atau tindakannya — bukan untuk menonjolkan pelaku."),
    # 12 — Passive PG: passive dalam laporan ilmiah/prosedur
    S("U12", "In the procedure section of a scientific report, which sentence is written correctly?",
      ["The mixture was heated for ten minutes.", "The mixture heated for ten minutes.", "The mixture was heat for ten minutes.", "The mixture is heated yesterday."], 0,
      "Prosedur ilmiah memakai passive agar proses menjadi fokus: to be lampau (‘was’) + V3 (‘heated’) — dan ‘for ten minutes’ menunjukkan durasi proses."),
    # 13 — Report PG: kalimat pembuka yang tepat
    S("U13", "Which is the best opening (general classification) of a report about honeybees?",
      ["I think honeybees are amazing insects because I saw them last holiday.",
       "The honeybee is a social insect that lives in colonies and produces honey.",
       "Yesterday my class visited a bee farm and bought honey.",
       "You should keep bees because they help plants."], 1,
      "General classification memperkenalkan subjek secara umum dengan simple present dan tanpa opini/pengalaman pribadi."),
    # 14 — Report PG: membedakan general classification dan description
    S("U14", "Read: “The tarsier is a small primate with enormous eyes. It hunts insects at night and sleeps on tree branches.” Which sentence is the general classification?",
      ["The second sentence.", "The first sentence.", "Both sentences are descriptions.", "Neither sentence."], 1,
      "Kalimat pertama menjelaskan ‘what it is’ (klasifikasi umum); kalimat kedua menguraikan ciri dan kebiasaan = description."),
    # 15 — Report PG: mengenali report text
    S("U15", "Which paragraph is a report text?",
      ["Last Sunday, we went to the beach and built a sandcastle.",
       "First, cut the bread. Then spread the butter on it.",
       "The clownfish is a small fish that lives among sea anemones. It lays eggs and feeds on plankton.",
       "Suddenly the hero woke up and realized it was all a dream."], 2,
      "Report text menggambarkan hal yang umum secara faktual dengan simple present. A = recount, B = procedure, D = narrative."),
    # 16 — Report PG: struktur report vs teks lain
    S("U16", "Which statement about text structures is correct?",
      ["Report text consists of general classification and description; recount uses a sequence of past events.",
       "Report text tells a story with a conflict; procedure explains events in order.", "Recount uses simple present throughout; report uses simple past.",
       "Report and persuasive texts have the same purpose: to entertain."], 0,
      "Report = GC + description (fakta, simple present); recount = urutan kejadian lampau (simple past) dari pengalaman penulis."),
    # 17 — PGK: meminta vs memberi pendapat
    M("U17", "Select ALL expressions used to ASK for someone’s opinion.",
      ["What do you think about the new rule?", "Do you think the plan is safe?", "In my view, the plan is safe.", "How do you feel about studying from home?"],
      [0, 1, 3],
      "Yang meminta pendapat berupa pertanyaan (What do you think…, Do you think…, How do you feel about…). ‘In my view’ justru MEMBERI pendapat."),
    # 18 — PGK: analisis peran dialog
    M("U18", "Read the dialogue. Select the correct analysis of each speaker.\nA: “The trip should be postponed.”\nB: “I see your point, but the exam schedule has not been released.”\nC: " + "“Are you sure? The agency already booked the bus.”",
      ["A gives an opinion.", "B partly agrees with A.", "C doubts B’s statement.", "B fully rejects A."],
      [0, 1, 2],
      "A menyatakan opini; B setuju sebagian (‘I see your point, but…’); C meragukan (‘Are you sure?’). B tidak menolak total — hanya menambah pertimbangan."),
    # 19 — PGK: ketidaksetujuan sopan vs kasar
    M("U19", "Select ALL polite ways to disagree with a reason.",
      ["I’m afraid I disagree because the data is incomplete.", "That is a stupid idea.", "I see your point, however we have no time to try it.", "You are totally wrong."],
      [0, 2],
      "Yang sopan memberi apresiasi/keraguan + alasan (‘because…’, ‘however…’). ‘Stupid idea’ dan ‘totally wrong’ menyerang tanpa alasan."),
    # 20 — PGK: ciri opini kuat
    M("U20", "Select ALL features of a STRONG opinion.",
      ["It contains an opinion phrase such as ‘In my view’ or ‘I believe’.", "It is supported by a logical reason or a specific example.",
       "It uses general claims like ‘everyone knows’ without evidence.", "It only states a personal taste with no explanation."],
      [0, 1],
      "Opini kuat = ungkapan opini + alasan logis/contoh spesifik. Klaim umum tanpa bukti dan selera tanpa penjelasan adalah opini lemah."),
]
