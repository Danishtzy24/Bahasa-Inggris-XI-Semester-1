# -*- coding: utf-8 -*-
"""Latihan bab baru: Opinion (10), Suggestions +2 PGK, Report (10)."""


def S(ch, qid, prompt, opts, ci, expl):
    o = []
    for i, t in enumerate(opts):
        letter = "ABCDE"[i]
        o.append({"id": f"{qid}-{letter}", "html": f"<p>{t}</p>", "text": t})
    return {"id": qid, "chapter": ch, "group": ch, "type": "single", "prompt": f"<p>{prompt}</p>",
            "options": o, "correct": f"{qid}-{'ABCDE'[ci]}", "explanation": f"<p>{expl}</p>"}


def M(ch, qid, prompt, opts, cis, expl):
    o = []
    for i, t in enumerate(opts):
        letter = "ABCDE"[i]
        o.append({"id": f"{qid}-{letter}", "html": f"<p>{t}</p>", "text": t})
    correct = ",".join(f"{qid}-{'ABCDE'[i]}" for i in sorted(cis))
    return {"id": qid, "chapter": ch, "group": ch, "type": "multi", "prompt": f"<p>{prompt}</p>",
            "options": o, "correct": correct, "explanation": f"<p>{expl}</p>"}


PRACTICE_NEW = [
    # ===== Bab 6 — Asking & Giving Opinion (8 PG + 2 PGK) =====
    S(6, "O6-01", "Which sentence ASKS for an opinion?",
      ["What do you think about the new school rule?", "I think the new school rule is fair.", "The rule was made last year.", "Everyone follows the rule."], 0,
      "‘What do you think about…’ adalah pertanyaan yang meminta pendapat; ‘I think…’ justru menyampaikan pendapat."),
    S(6, "O6-02", "Complete the opinion: “In my view, cycling to school is healthy ____ it keeps our body fit.”",
      ["but", "because", "although", "so that they"], 1,
      "Opini yang baik ditutup alasan: ‘because it keeps our body fit’ menjawab mengapa opini itu dipegang."),
    S(6, "O6-03", "Which is the most convincing opinion?",
      ["I think this song is nice.", "In my opinion, group study works because students can explain difficult topics to each other.",
       "Everyone likes group study.", "Group study is obviously the best."], 1,
      "Opini kuat punya alasan logis dan spesifik — bukan selera atau klaim umum tanpa bukti."),
    S(6, "O6-04", "You disagree with your friend. Which response is polite?",
      ["You are completely wrong.", "That is a ridiculous idea.", "I see your point, but I think we should ask the teacher first because she knows the material better.",
       "No. Never."], 2,
      "Pola sopan: apresiasi ‘I see your point’, penanda perbedaan ‘but’, opini, lalu alasan."),
    S(6, "O6-05", "B says: “I agree with you, but we should change the location.” What does B express?",
      ["Full agreement", "Partial agreement", "Complete disagreement", "A question"], 1,
      "‘I agree…, but…’ = setuju sebagian: menerima ide inti, menambah pertimbangan lain."),
    S(6, "O6-06", "Which response is the best answer to “What is your opinion about online exams?”",
      ["It was held yesterday.", "In my opinion, online exams are practical because students can review their answers easily.",
       "The exam has forty questions.", "Our teacher is kind."], 1,
      "Respons opini = ungkapan opini + alasan; pilihan lain adalah fakta yang tidak menjawab pertanyaan."),
    S(6, "O6-07", "Which sentence shows a WEAK opinion?",
      ["I believe the break time should be longer because students need time to pray and eat.",
       "In my view, the canteen menu should be varied.", "The break time should be longer. Everyone knows that.",
       "From my point of view, the schedule needs a small change because the last class is too long."], 2,
      "‘Everyone knows that’ adalah klaim umum tanpa alasan — tanda opini lemah."),
    S(6, "O6-08", "In a dialogue, A: “The trip should be postponed.” B: “Are you sure? The tickets are already booked.” B is …",
      ["giving an opinion", "asking for an opinion", "expressing doubt", "fully agreeing"], 2,
      "‘Are you sure?’ menandai keraguan terhadap pernyataan penutur sebelumnya."),
    M(6, "O6-09", "Select ALL expressions that GIVE an opinion.",
      ["I think the uniform policy is unnecessary.", "Do you think the policy is unnecessary?", "To my mind, the policy wastes time.",
       "What do you think of the policy?"], [0, 2],
      "‘I think…’ dan ‘To my mind…’ menyampaikan pendapat; ‘Do you think…’ dan ‘What do you think…’ meminta pendapat."),
    M(6, "O6-10", "Select ALL components of a complete, polite disagreement.",
      ["An appreciating opener such as “That sounds interesting”.", "A difference marker such as “but” or “however”.",
       "An insult toward the speaker.", "Your own opinion supported by a reason."], [0, 1, 3],
      "Respons lengkap: apresiasi → penanda perbedaan → opini + alasan. Hinaan tidak pernah menjadi bagian yang sopan."),

    # ===== Bab 7 — Suggestions (+2 PGK, bank lama 8 PG dipertahankan) =====
    S(7, "B7-09", "Which sentence is the softest suggestion?",
      ["You must finish this today.", "You might want to consider taking a short break before you continue.",
       "You have to stop working now.", "You had better never skip breakfast."], 1,
      "‘Might want to consider’ adalah saran paling halus; ‘must’ dan ‘have to’ terdengar seperti perintah."),
    M(7, "B7-10", "Select ALL grammatically correct suggestions.",
      ["Why don’t we start the project earlier?", "How about reading the text again?", "I suggest to check the spelling.",
       "You’d better to bring an umbrella."], [0, 1],
      "‘Why don’t we + V1’ dan ‘How about + V-ing’ benar. ‘I suggest to check’ dan ‘You’d better to bring’ salah — memakai V1 tanpa ‘to’."),
    M(7, "B7-11", "Select ALL polite ways to decline a suggestion.",
      ["Thanks for the idea, but I have a test tomorrow morning.", "I’d love to, but I do not have enough budget this week.",
       "Your suggestions are always useless.", "No. I hate that."], [0, 1],
      "Penolakan sopan diawali terima kasih atau kesediaan, lalu ‘but’ + alasan yang jujur."),

    # ===== Bab 8 — Report Text (8 PG + 2 PGK) =====
    S(8, "R8-01", "Which is the best general classification of a report about the Komodo dragon?",
      ["Yesterday I saw a giant lizard at the zoo.", "The Komodo dragon is the largest lizard in the world and lives on several Indonesian islands.",
       "I think the Komodo dragon is the most amazing animal.", "You should visit Komodo Island soon."], 1,
      "General classification memperkenalkan subjek secara umum dengan simple present, faktual, tanpa opini atau pengalaman pribadi."),
    S(8, "R8-02", "Read: “The honeybee lives in colonies. It produces honey and wax.” The first sentence is …",
      ["description", "general classification", "reorientation", "personal experience"], 1,
      "Kalimat pertama menjelaskan ‘what it is’ = general classification; kalimat berikutnya menguraikan ciri = description."),
    S(8, "R8-03", "Which paragraph is a report text?",
      ["Last weekend, my family and I visited Borobudur temple. We took many photos.",
       "First, wash the rice. Second, boil the water. Finally, mix them.", "Suddenly the monster appeared behind the hero.",
       "The rhinoceros is a large herbivore with thick skin. It feeds on grass and leaves."], 3,
      "Hanya D yang menggambarkan hal yang umum secara faktual dengan simple present. A recount, B procedure, C narrative."),
    S(8, "R8-04", "What is the main difference between a report and a recount?",
      ["Report describes something generally; recount retells personal past experiences.", "Report uses simple past; recount uses simple present.",
       "Report tells stories; recount gives instructions.", "There is no difference."], 0,
      "Report = hal umum + fakta + simple present; recount = pengalaman penulis + kejadian lampau + simple past."),
    S(8, "R8-05", "Which sentence is a correct general classification?",
      ["The sea turtle is a reptile that lays eggs on sandy beaches.", "I believe sea turtles are beautiful creatures.",
       "Last year we watched sea turtles on the beach.", "You must protect sea turtles now."], 0,
      "GC yang benar: simple present, generic noun, fakta umum — tanpa ‘I’, kejadian lampau, atau ajakan."),
    S(8, "R8-06", "In “The tarsier is a small primate. It has enormous eyes and hunts insects at night.”, which sentence belongs to the description?",
      ["The first sentence only.", "The second sentence.", "Both are general classification.", "Neither."], 1,
      "Kalimat kedua menguraikan ciri fisik dan kebiasaan = description; kalimat pertama = klasifikasi."),
    S(8, "R8-07", "Which text type explains how to do or make something step by step?",
      ["Report text", "Procedure text", "Recount text", "Persuasive text"], 1,
      "Procedure text memberi langkah (imperative) untuk melakukan/membuat sesuatu; report menggambarkan hal umum."),
    S(8, "R8-08", "A paragraph about an animal contains: “In my opinion, this is the cutest animal in the forest.” This sentence …",
      ["fits the description because it adds feeling", "does not fit report text because it is a subjective opinion",
       "is the general classification", "is a correct factual statement"], 1,
      "Report text bersifat faktual dan objektif — opini subjektif tidak cocok, terutama di bagian description."),
    M(8, "R8-09", "Read: “The coral reef is an underwater ecosystem. It supports thousands of marine species. Rising sea temperatures damage it.” Select ALL statements supported by the text.",
      ["The coral reef is a habitat for many species.", "Coral reefs are found in deserts.", "Warm seas can harm coral reefs.", "The reef was discovered last year."], [0, 2],
      "Kalimat kedua dan ketiga teks mendukung A dan C. Gurun dan tahun penemuan tidak disebut dalam teks."),
    M(8, "R8-10", "Select ALL correct ways to revise a diary text into a report text.",
      ["Use simple present tense throughout.", "Remove first-person experiences such as ‘I’ and ‘we’.", "Turn opinions into factual descriptions.",
       "Add more personal feelings to make it lively."], [0, 1, 2],
      "Revisi report: simple present, hilangkan pengalaman pribadi, opini → fakta. Menambah perasaan justru menjauhkannya dari report."),
]
