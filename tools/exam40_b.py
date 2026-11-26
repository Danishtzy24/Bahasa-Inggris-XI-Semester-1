# -*- coding: utf-8 -*-
"""Bank UAS — nomor 21–40 (PGK 21–32, Benar/Salah 33–40). chapter=10, group=10."""


def M(qid, prompt, opts, cis, expl):
    o = []
    for i, t in enumerate(opts):
        letter = "ABCDE"[i]
        o.append({"id": f"{qid}-{letter}", "html": f"<p>{t}</p>", "text": t})
    correct = ",".join(f"{qid}-{'ABCDE'[i]}" for i in sorted(cis))
    return {"id": qid, "chapter": 10, "group": 10, "type": "multi", "prompt": f"<p>{prompt}</p>",
            "options": o, "correct": correct, "explanation": f"<p>{expl}</p>"}


def TF(qid, statement, truth, expl):
    opts = [{"id": f"{qid}-T", "html": "<p><strong>Benar</strong></p>", "text": "Benar"},
            {"id": f"{qid}-F", "html": "<p><strong>Salah</strong></p>", "text": "Salah"}]
    return {"id": qid, "chapter": 10, "group": 10, "type": "tf",
            "prompt": f"<p>{statement}</p>", "options": opts,
            "correct": f"{qid}-{'T' if truth else 'F'}", "explanation": f"<p>{expl}</p>"}


EXAM_21_40 = [
    # 21 — PGK Suggestion: ungkapan saran tepat & membangun
    M("U21", "Select ALL expressions that give a helpful, constructive suggestion.",
      ["You should back up your files before updating the laptop.", "Why don’t you ask the teacher for extra examples?",
       "Just give up; the test is too hard.", "How about practicing ten questions every night?"],
      [0, 1, 3],
      "‘Should + V1’, ‘Why don’t you + V1’, dan ‘How about + V-ing’ adalah pola saran yang membangun. ‘Give up’ justru tidak membantu."),
    # 22 — PGK Suggestion: grammar benar setelah pola saran
    M("U22", "Select ALL grammatically correct suggestions.",
      ["You should to check the answer twice.", "You should check the answer twice.", "How about to join the contest?",
       "How about joining the contest?", "I suggest calling the help desk."],
      [1, 3, 4],
      "Setelah ‘should’ memakai V1 (bukan ‘to check’); setelah ‘How about’ memakai V-ing (bukan ‘to join’); ‘I suggest + V-ing’ benar."),
    # 23 — PGK Suggestion: struktur benar untuk masalah nyata
    M("U23", "Select ALL correctly structured responses to the problem: “My phone battery drains in two hours.”",
      ["You’d better close the unused apps because they keep running in the background.", "How about lowering the screen brightness? It saves a lot of power.",
       "You’d better to carry a power bank.", "I suggest to buy a new phone now."],
      [0, 1],
      "‘You’d better + V1’ (tanpa ‘to’) dan ‘How about + V-ing’ benar. ‘You’d better to carry’ dan ‘I suggest to buy’ salah strukturnya."),
    # 24 — PGK Suggestion: menolak saran dengan sopan
    M("U24", "Select ALL polite ways to decline a suggestion with a reason.",
      ["Thanks for the idea, but I have to finish my duty roster tonight.", "No way. Your ideas never work.",
       "I’d love to, but my budget is tight this month.", "That is the worst suggestion I have ever heard."],
      [0, 2],
      "Penolakan sopan diawali terima kasih/lawan kata ‘but’ lalu alasan. Pilihan lain kasar dan tanpa alasan."),
    # 25 — PGK Passive: berbagai tense
    M("U25", "Select ALL correct passive sentences.",
      ["The letters are delivered every morning.", "The letters were delivered yesterday.", "The letters have been delivered since noon.",
       "The letters will delivered tomorrow."],
      [0, 1, 2],
      "Present passive (are + V3), past passive (were + V3), present perfect passive (have been + V3) benar. ‘Will delivered’ kehilangan ‘be’."),
    # 26 — PGK Passive: menemukan kesalahan to be + V3
    M("U26", "Select ALL sentences that contain an error in the passive form.",
      ["The cake was ate by the children.", "The window was broken by the ball.", "The documents was signed by the manager.",
       "The email has send by the secretary."],
      [0, 2, 3],
      "‘Was ate’ seharusnya ‘was eaten’ (V3 irregular); ‘documents was’ seharusnya ‘were’ (jamak); ‘has send’ seharusnya ‘has been sent’. ‘Was broken’ benar."),
    # 27 — PGK Passive: laporan ilmiah objektif
    M("U27", "Select ALL sentences suitable for the procedure section of a scientific report.",
      ["The solution was heated to 80°C.", "We thought the experiment was fun.", "Two drops of iodine were added to the sample.",
       "I hope the result will be perfect."],
      [0, 2],
      "Bagian proses harus objektif dan fokus pada tindakan: memakai passive tanpa subjek personal (I/we). Pilihan B dan D memakai sudut pandang pribadi."),
    # 28 — PGK Passive: syarat bisa dipasifkan
    M("U28", "Select ALL statements that are TRUE about making passive sentences.",
      ["A sentence can be passive only if it has an object (transitive verb).", "Intransitive verbs such as sleep and arrive cannot be made passive directly.",
       "Any sentence, even without an object, can be changed to passive.", "The object of the active sentence becomes the subject of the passive sentence."],
      [0, 1, 3],
      "Passive memerlukan objek (verb transitif); verb intransitif (sleep, arrive) tak punya objek; objek aktif menjadi subjek pasif."),
    # 29 — PGK Report: memahami isi teks
    M("U29", "Read: “The orangutan is a great ape found on Borneo and Sumatra. It spends most of its life in trees and eats fruits, leaves, and bark. Forest fires destroy its habitat every dry season.” Select ALL statements that match the text.",
      ["The orangutan is a tree-dwelling animal.", "It eats only meat.", "Its habitat is threatened by forest fires.", "It lives in Africa."],
      [0, 2],
      "Teks menyebut ‘spends most of its life in trees’ dan ‘forest fires destroy its habitat’. Tidak ada penyebutan daging sebagai makanan utama maupun Afrika."),
    # 30 — PGK Report: report vs recount
    M("U30", "Select ALL correct comparisons between report text and recount text.",
      ["Report aims to describe something generally; recount retells personal experiences.", "Report mostly uses simple present; recount mostly uses simple past.",
       "Report follows general classification and description; recount follows orientation, events, and reorientation.", "Both texts use the same structure and tense."],
      [0, 1, 2],
      "Ketiga perbandingan pertama benar. Struktur dan tense keduanya berbeda — jadi pilihan terakhir salah."),
    # 31 — PGK Report: revisi menjadi report
    M("U31", "Select ALL changes needed to turn this diary text into a report text: “Yesterday I saw a beautiful bird. I think it was the prettiest bird ever. It was sitting on a branch.”",
      ["Change the verbs to simple present.", "Remove personal experience (‘I saw’).", "Replace the opinion with factual description.",
       "Add more feelings such as ‘I was amazed’."],
      [0, 1, 2],
      "Revisi report: simple present, hilangkan pengalaman pribadi, ganti opini dengan fakta. Menambah perasaan justru menjauhkannya dari report."),
    # 32 — PGK Report: pernyataan didukung teks
    M("U32", "Read: “Sea turtles are reptiles that lay eggs on sandy beaches. They can live for more than fifty years. Pollution and illegal hunting reduce their population.” Select ALL statements supported by the text.",
      ["Sea turtles lay eggs on beaches.", "Sea turtles are mammals.", "Human activities threaten sea turtles.", "Sea turtles usually die before turning one year old."],
      [0, 2],
      "Kalimat pertama dan ketiga teks mendukung A dan C. ‘Mammals’ bertentangan dengan ‘reptiles’; umur lebih dari 50 tahun bertentangan dengan D."),
    # 33 — TF Opinion: konsistensi respons dialog
    TF("U33", "Dialogue — A: “I think we should cancel the picnic.” B: “I agree with you, but let’s keep the budget for next week.” B’s response is consistent: B agrees with the cancellation and adds a new plan.", True,
       "B menyatakan persetujuan lalu memberi alternatif penggunaan anggaran — konsisten dengan pendapatnya sendiri."),
    # 34 — TF Opinion: peran alasan
    TF("U34", "An opinion becomes more convincing when it is supported by a logical reason or a specific example.", True,
       "Alasan logis dan contoh spesifik menunjukkan dasar pikiran sehingga opini lebih meyakinkan daripada sekadar klaim."),
    # 35 — TF Suggestion: bentuk verb setelah How about
    TF("U35", "The sentence “How about to discuss this with the teacher?” uses the correct verb form after ‘How about’.", False,
       "‘How about’ harus diikuti V-ing: ‘How about discussing this with the teacher?’ — bukan infinitive ‘to discuss’."),
    # 36 — TF Suggestion: peran alasan
    TF("A suggestion becomes more persuasive when it includes a clear reason.", True) if False else TF(
       "U36", "A suggestion becomes more persuasive when it includes a clear reason.", True,
       "Alasan menjelaskan manfaat saran sehingga ajakan lebih meyakinkan dan terasa membantu."),
    # 37 — TF Passive: makna sama, fokus beda
    TF("U37", "“The technician repaired the laptop” and “The laptop was repaired by the technician” have the same meaning but different focus.", True,
       "Kedua kalimat menyatakan peristiwa yang sama; aktif menonjolkan pelaku, pasif menonjolkan penerima tindakan."),
    # 38 — TF Passive: future passive
    TF("U38", "The sentence “The results will be announced on Monday” is a correct future passive sentence and has the same meaning as “The committee will announce the results on Monday.”", True,
       "‘Will be + V3’ adalah future passive yang benar, dan maknanya sama dengan kalimat aktifnya."),
    # 39 — TF Report: bagian struktur paragraf
    TF("U39", "In the paragraph “The honeybee is a social insect. It lives in colonies and produces honey.”, the first sentence is the general classification and the second sentence belongs to the description.", True,
       "Kalimat pertama memperkenalkan jenis (GC); kalimat kedua menguraikan ciri dan kebiasaan (description)."),
    # 40 — TF Report: ciri bahasa
    TF("U40", "A good description in a report text may contain subjective opinions such as “this animal is the cutest” and calls to action such as “you must protect it now.”", False,
       "Bahasa report bersifat faktual dan objektif. Opini subjektif dan ajakan tidak cocok untuk bagian description."),
]
