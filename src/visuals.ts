import { esc } from './dom';
import { icon, CHAPTER_ICONS } from './art';
import type { VisualModel, VisualItem, LessonSection } from './types';
/* Concise, interactive companions to the complete source material. */
const token=(text: string,role: string='verb')=>({text,role});
const sample=(label: string,sentence: string,formula: string,meaning='',cue=''): VisualItem=>({label,parts:sentence.split('|').map((s,i)=>token(s,['subject','verb','object','extra'][i]||'extra')),formula,meaning,cue});
const lab=(note: string,kind: string,items: VisualItem[]): VisualModel=>({note,kind,items});
export const VISUALS: Record<string, VisualModel> = {
's1-1':lab('Susun pelaku, tindakan, lalu objek.','sentence',[
 sample('Tindakan','She|reads|a book.','Subject + Verb + Object','Dia membaca sebuah buku.'),sample('Keadaan','They|are|students.','Subject + be + Complement','Mereka adalah siswa.'),sample('Sifat','My brother|is|happy.','Subject + be + Complement','Saudara laki-laki saya bahagia.')]),
's1-2':lab('Subject pronoun = pengganti pelaku.','people',[
 sample('I','I|study|English.','I = saya','Saya belajar Bahasa Inggris.'),sample('You','You|look|happy.','You = kamu / kalian','Kamu terlihat bahagia.'),sample('We','We|play|football.','We = kami / kita'),sample('They','They|work|here.','They = mereka'),sample('He','He|reads|a book.','He = dia (laki-laki)'),sample('She','She|writes|a letter.','She = dia (perempuan)'),sample('It','It|looks|beautiful.','It = benda / hewan / hal')]),
's1-3':lab('Object pronoun menerima tindakan.','people',[
 sample('me','She|helps|me.','I → me','Dia membantu saya.'),sample('you','I|call|you.','You → you'),sample('us','They|invite|us.','We → us'),sample('them','I|know|them.','They → them'),sample('him','We|meet|him.','He → him'),sample('her','I|help|her.','She → her'),sample('it','Please|move|it.','It → it')]),
's1-4':lab('Bentuk kata kerja berubah sesuai pola.','forms',[
 sample('write','write|wrote|written|writing','V1 → V2 → V3 → V-ing','menulis'),sample('go','go|went|gone|going','V1 → V2 → V3 → V-ing','pergi'),sample('play','play|played|played|playing','Regular: V2 dan V3 berakhiran -ed','bermain'),sample('study','study|studied|studied|studying','study → studied: y berubah menjadi i','belajar')]),
's1-5':lab('Cocokkan subject dengan to be.','people',[
 sample('I · kini','I|am|a student.','I + am','Saya seorang siswa.'),sample('She · kini','She|is|tired.','He / She / It + is','Dia lelah.'),sample('They · kini','They|are|at school.','You / We / They + are'),sample('He · dulu','He|was|sick yesterday.','I / He / She / It + was'),sample('We · dulu','We|were|busy last week.','You / We / They + were')]),
's1-6':lab('Sesudah do, does, atau did: kembali ke V1.','sentence',[
 sample('do','Do they|study|English?','Do + S + V1?','Apakah mereka belajar Bahasa Inggris?'),sample('does','She|does not like|coffee.','Does + not + V1, bukan likes'),sample('did','They|did not go|home.','Did + not + V1, bukan went'),sample('has','She|has finished|her work.','Has + V3'),sample('have','They|have finished|their work.','Have + V3')]),
's1-7':lab('Ada tindakan? Verbal. Menghubungkan keadaan? Nominal.','sentence',[
 sample('Verbal','She|plays|badminton.','Subject + action verb','Dia bermain bulu tangkis.'),sample('Nominal','She|is|a student.','Subject + be + complement','Dia seorang siswa.'),sample('Tanya nominal','Is she|happy?','Be + subject + complement?','Tidak memakai does she be.')]),
's1-8':lab('He, she, it: tambahkan -s/-es pada kalimat positif.','people',[
 sample('They','They|play|football.','I / You / We / They + V1'),sample('She','She|plays|football.','He / She / It + V1(s/es)'),sample('Study','She|studies|English.','study → studies'),sample('Have','My brother|has|a bicycle.','have → has')]),
's2-5':lab('Pilih makna, bukan hanya penanda waktu.','now',[
 sample('Kebiasaan','She|studies|every day.','Simple Present'),sample('Sedang','She|is studying|now.','Present Continuous'),sample('Sudah','She|has finished|her work.','Present Perfect'),sample('Durasi','She|has been studying|for two hours.','Present Perfect Continuous')]),
's3-5':lab('Empat sudut pandang pada masa lalu.','past',[
 sample('Selesai','She|studied|yesterday.','Simple Past'),sample('Sedang saat itu','She|was studying|at 8 p.m.','Past Continuous'),sample('Lebih dahulu','She|had studied|before dinner.','Past Perfect'),sample('Durasi sebelumnya','She|had been studying|for an hour before dinner.','Past Perfect Continuous')]),
's4-5':lab('Rencana masa depan dilihat dari masa lalu.','past',[
 sample('Would','She|said|she would help us.','would + V1','Dia mengatakan bahwa dia akan membantu kami.'),sample('Was going to','I|was going to study,|but I fell asleep.','was / were + going to + V1','Saya tadinya akan belajar, tetapi tertidur.')]),
's4-6':lab('Pilih apa yang akan terjadi dan bagaimana prosesnya.','future',[
 sample('Akan','She|will study|tomorrow.','will + V1'),sample('Akan sedang','She|will be studying|at 8 p.m.','will + be + V-ing'),sample('Akan sudah','She|will have finished|by Friday.','will + have + V3'),sample('Durasi','She|will have been studying|for two hours by 9 p.m.','will + have + been + V-ing')]),
's5-1':lab('Passive menyorot penerima tindakan.','passive',[
 sample('Active','The teacher|explains|the lesson.','Pelaku → tindakan → penerima','Guru menjelaskan pelajaran.'),sample('Passive','The lesson|is explained|by the teacher.','Penerima → be + V3 → by pelaku','Pelajaran dijelaskan oleh guru.')]),
's5-2':lab('Inti passive: be + V3.','passive',[
 sample('Present','The room|is cleaned|every day.','am / is / are + V3'),sample('Past','The room|was cleaned|yesterday.','was / were + V3'),sample('Future','The room|will be cleaned|tomorrow.','will + be + V3')]),
's5-3':lab('Pindahkan objek, sesuaikan be, gunakan V3.','passive',[
 sample('01 · Active','They|clean|the room.','Subject + V1 + Object'),sample('02 · Pindah objek','The room|←|They clean the room.','Objek menjadi subject passive'),sample('03 · Passive','The room|is cleaned|by them.','S + is + V3 + by + object pronoun')]),
's5-4':lab('Tense menentukan bentuk be; kata kerja utama tetap V3.','passive',[
 sample('Continuous','The road|is being repaired|now.','am / is / are + being + V3'),sample('Perfect','The work|has been finished.','has / have + been + V3'),sample('Past perfect','The work|had been finished.','had + been + V3'),sample('Future','The letter|will be sent|tomorrow.','will + be + V3')]),
's5-5':lab('Tiga pola passive yang paling umum.','passive',[
 sample('Present','English|is spoken|here.','am / is / are + V3'),sample('Past','The letter|was written|yesterday.','was / were + V3'),sample('Future','The documents|will be sent|tomorrow.','will + be + V3')]),
's5-6':lab('Modal tidak berubah; tambahkan be + V3.','passive',[
 sample('must','The rules|must be followed.','must + be + V3','Aturan harus dipatuhi.'),sample('should','The room|should be cleaned.','should + be + V3'),sample('can','The problem|can be solved.','can + be + V3')]),
's5-7':lab('Pelaku boleh dihilangkan jika tidak penting atau tidak diketahui.','passive',[
 sample('Dengan pelaku','The room|is cleaned|by the staff.','by + pelaku','Fokus tambahan: siapa yang membersihkan.'),sample('Tanpa pelaku','The room|is cleaned|every day.','be + V3; by bersifat opsional','Fokus: ruangan dan tindakannya.')]),
's5-8':lab('Passive memerlukan objek dari kalimat aktif.','sentence',[
 sample('Ada objek','They|clean|the room.','✓ the room dapat menjadi subject passive'),sample('Tanpa objek','He|sleeps.','Tidak dapat dipasifkan langsung: tidak ada objek.'),sample('Tanpa objek','She|arrived|early.','Tidak dapat dipasifkan langsung: tidak ada objek.')]),
's5-9':lab('Sesudah by, pakai object pronoun.','people',[
 sample('he → him','The letter|is written|by him.','he → him'),sample('she → her','The room|is cleaned|by her.','she → her'),sample('they → them','The work|is done|by them.','they → them'),sample('we → us','The project|is completed|by us.','we → us')]),
's6-1':lab('Saran menawarkan tindakan, bukan memerintah.','chat',[
 sample('Masalah','I|am|tired.','A · menyampaikan keadaan','Saya lelah.'),sample('Saran','You|should take|a rest.','B · memberi saran','Kamu sebaiknya beristirahat.')]),
's6-2':lab('Minta ide atau tindakan yang sebaiknya dilakukan.','chat',[
 sample('What should…','What|should I do?','Meminta saran','Apa yang sebaiknya saya lakukan?'),sample('Suggest','What|do you suggest?','Meminta ide','Apa saranmu?'),sample('Advice','Can you|give me|some advice?','advice: uncountable','Bisakah kamu memberi saya nasihat?')]),
's6-3':lab('Pilih ungkapan saran sesuai situasi.','chat',[
 sample('Should','You|should study|harder.','should + V1','Kamu sebaiknya belajar lebih giat.'),sample('Could','You|could ask|your teacher.','could + V1'),sample('Why don’t…',"Why don't you|try|again?","Why don't you + V1?"),sample('How about…','How about|taking|a break?','How about + V-ing?')]),
's6-4':lab('Perhatikan bentuk kata kerja setelah ungkapan saran.','chat',[
 sample('Should','You|should drink|more water.','should + V1'),sample('How about','How about|studying|together?','How about + V-ing?'),sample('Let’s',"Let's|review|the lesson.","Let's + V1"),sample('Suggest','I|suggest taking|a taxi.','suggest + V-ing')]),
's6-5':lab('Menerima saran dengan jelas dan sopan.','chat',[
 sample('Setuju',"That|is|a good idea.",'Menerima ide','Itu ide yang bagus.'),sample('Bersedia',"I'll|try|that.",'Menerima tindakan','Saya akan mencobanya.'),sample('Ayo',"Let's|do|that.",'Menyetujui ajakan','Mari kita lakukan itu.')]),
's6-6':lab('Berterima kasih, lalu sampaikan penolakan dengan sopan.','chat',[
 sample('Rencana lain','Thanks,|but I have|another plan.','Thanks + alasan','Terima kasih, tetapi saya punya rencana lain.'),sample('Kurang cocok',"I|don't think|that will work.",'Menolak dengan sopan','Saya rasa itu tidak akan berhasil.')]),
's6-7':lab('Masalah → saran → tanggapan.','chat',[
 sample('01 · A','I|have difficulty|understanding the lesson.','MASALAH','Saya kesulitan memahami pelajaran.'),sample('02 · B',"Why don't you|ask|your teacher for help?",'SARAN','Mengapa tidak meminta bantuan guru?'),sample('03 · A',"That|is|a good idea.",'TANGGAPAN','Itu ide yang bagus.')]),
's6-8':lab('Ungkapan saran memakai beberapa pola, bukan satu tense.','chat',[
 sample('Modal','You|should study|more.','should + V1'),sample('V-ing','How about|studying|together?','How about + V-ing'),sample('Conditional','If I were you,|I would talk|to the teacher.','If I were you, I would + V1')]),
's7-1':lab('Procedure text menunjukkan cara melakukan atau membuat sesuatu.','steps',[
 sample('Goal','How to Make|a Cup of Tea','GOAL · tujuan'),sample('Materials','Tea bag|hot water|cup','MATERIALS · bahan / alat'),sample('Steps','Put|pour|wait|serve','STEPS · urutan tindakan')]),
's7-2':lab('Tujuannya: pembaca dapat mengikuti langkahnya.','steps',[
 sample('Membuat','How to Make|a Fruit Salad','Membuat sesuatu'),sample('Menggunakan','How to Use|a Printer','Menggunakan alat'),sample('Melakukan','How to Wash|Your Hands','Melakukan kegiatan')]),
's7-3':lab('Tiga bagian utama, dibaca berurutan.','steps',[
 sample('01 · Goal','How to Make|a Cup of Tea','Apa yang akan dibuat?'),sample('02 · Materials','A tea bag|hot water|a cup','Apa yang diperlukan?'),sample('03 · Steps','Put|pour|wait|serve','Bagaimana caranya?')]),
's7-4':lab('Gunakan perintah, kata kerja tindakan, dan urutan yang jelas.','steps',[
 sample('Imperative','Add|some sugar.','V1 + object · tanpa subject you'),sample('Sequence','First,|boil|the water.','First → next → then → finally'),sample('Adverb','Stir|the tea|slowly.','slowly = cara melakukan'),sample('Quantity','Add|two teaspoons|of sugar.','Ukuran / jumlah yang jelas')]),
's7-5':lab('Langkah memakai imperative; penjelasan umum sering Simple Present.','steps',[
 sample('Instruksi','Turn off|the computer.','Imperative: V1 + object'),sample('Fakta umum','The computer|turns off|automatically.','Simple Present: S + V1(s/es)'),sample('Passive','The ingredients|are mixed.','Simple Present Passive: be + V3')]),
's7-6':lab('Ikuti urutan membuat secangkir teh.','tea',[
 sample('01 · Put','Put|the tea bag|into a cup.','FIRST','Masukkan kantong teh ke cangkir.'),sample('02 · Pour','Pour|hot water|into the cup.','NEXT','Tuang air panas ke cangkir.'),sample('03 · Wait','Wait|for three minutes.','THEN','Tunggu tiga menit.'),sample('04 · Serve','Finally,|remove the tea bag|and serve the tea.','FINALLY','Angkat kantong teh, lalu sajikan.')]),
's7-7':lab('Tujuan jelas, bahan lengkap, langkah berurutan.','steps',[
 sample('Tujuan','Goal|jelas','01 · tentukan hasil akhir'),sample('Bahan','Materials|lengkap','02 · sertakan alat dan bahan'),sample('Langkah','Steps|berurutan','03 · satu tindakan utama per langkah'),sample('Kata kerja','Use|imperatives','04 · V1: add, pour, stir, serve')]),
's8-1':lab('Periksa konteks sebelum memilih rumus.','steps',[
 sample('01 · Waktu','Past|present|future','Kapan tindakannya terjadi?'),sample('02 · Makna','Habit|process|result|duration','Bagaimana tindakan dipandang?'),sample('03 · Bentuk','Active|passive|question','Bagaimana bentuk kalimatnya?'),sample('04 · Cocokkan','Subject|verb form','Periksa agreement dan V1 / V2 / V3 / V-ing')]),
's8-2':lab('Kalimat mirip, sudut pandangnya berbeda.','now',[
 sample('Kebiasaan','She|studies|every day.','Simple Present'),sample('Sedang','She|is studying|now.','Present Continuous'),sample('Sudah','She|has finished|her work.','Present Perfect'),sample('Sebelumnya','She|had studied|before dinner.','Past Perfect')]),
's8-3':lab('Bandingkan pola yang sering tertukar.','sentence',[
 sample('V2','I|saw|him yesterday.','Simple Past: waktu lampau spesifik'),sample('have + V3','I|have seen|him before.','Present Perfect: pengalaman'),sample('be + V-ing','She|is writing|a report.','Continuous aktif'),sample('be + V3','The report|is written|by her.','Passive')])
};
const TENSES: string[][] = [
['s2-1','Kebiasaan, fakta, atau jadwal tetap.','now','She|studies|English every day.','She|does not study|English every day.','Does she|study|English every day?','S + V1(s/es)','S + do/does + not + V1','Do/Does + S + V1?','setiap hari'],
['s2-2','Tindakan sedang berlangsung sekarang.','now','They|are playing|football now.','They|are not playing|football now.','Are they|playing|football now?','S + am/is/are + V-ing','S + am/is/are + not + V-ing','Am/Is/Are + S + V-ing?','sekarang'],
['s2-3','Kejadian lampau yang berkaitan dengan sekarang.','now','She|has finished|her work.','She|has not finished|her work.','Has she|finished|her work?','S + have/has + V3','S + have/has + not + V3','Have/Has + S + V3?','hasilnya sekarang'],
['s2-4','Durasi aktivitas sampai sekarang.','duration','She|has been studying|for two hours.','She|has not been studying|for two hours.','Has she|been studying|for two hours?','S + have/has + been + V-ing','S + have/has + not + been + V-ing','Have/Has + S + been + V-ing?','dua jam → sekarang'],
['s3-1','Tindakan selesai pada masa lalu.','past','They|visited|the museum yesterday.','They|did not visit|the museum yesterday.','Did they|visit|the museum yesterday?','S + V2','S + did + not + V1','Did + S + V1?','kemarin'],
['s3-2','Tindakan sedang berlangsung pada waktu lampau.','past','She|was reading|at 8 p.m.','She|was not reading|at 8 p.m.','Was she|reading|at 8 p.m.?','S + was/were + V-ing','S + was/were + not + V-ing','Was/Were + S + V-ing?','pukul 8 saat itu'],
['s3-3','Sudah selesai sebelum kejadian lampau lain.','past','They|had left|before I arrived.','They|had not left|before I arrived.','Had they|left|before I arrived?','S + had + V3','S + had + not + V3','Had + S + V3?','selesai lebih dahulu'],
['s3-4','Durasi aktivitas sebelum kejadian lampau lain.','duration','She|had been studying|for two hours before dinner.','She|had not been studying|for two hours before dinner.','Had she|been studying|for two hours before dinner?','S + had + been + V-ing','S + had + not + been + V-ing','Had + S + been + V-ing?','dua jam → waktu lampau'],
['s4-1','Tindakan yang akan terjadi.','future','She|will visit|her aunt tomorrow.','She|will not visit|her aunt tomorrow.','Will she|visit|her aunt tomorrow?','S + will + V1','S + will + not + V1','Will + S + V1?','besok'],
['s4-2','Akan sedang berlangsung pada waktu mendatang.','future','She|will be studying|at 8 p.m.','She|will not be studying|at 8 p.m.','Will she|be studying|at 8 p.m.?','S + will + be + V-ing','S + will + not + be + V-ing','Will + S + be + V-ing?','pukul 8 mendatang'],
['s4-3','Akan sudah selesai sebelum batas waktu mendatang.','future','They|will have completed|the project by June.','They|will not have completed|the project by June.','Will they|have completed|the project by June?','S + will + have + V3','S + will + not + have + V3','Will + S + have + V3?','selesai sebelum Juni'],
['s4-4','Durasi aktivitas sampai batas waktu mendatang.','duration','He|will have been studying|for four hours by 9 p.m.','He|will not have been studying|for four hours by 9 p.m.','Will he|have been studying|for four hours by 9 p.m.?','S + will + have + been + V-ing','S + will + not + have + been + V-ing','Will + S + have + been + V-ing?','empat jam → pukul 9 mendatang']
];
for(const [id,note,kind,pos,neg,ask,pf,nf,qf,cue]of TENSES){VISUALS[id]=lab(note,kind,[sample('+ Positif',pos,pf,'',cue),sample('− Negatif',neg,nf,'',cue),sample('? Pertanyaan',ask,qf,'',cue)]);VISUALS[id].timePosition=id.startsWith('s3')?22:id.startsWith('s4')?78:50}
function labDiagram(v: VisualModel,index: number): string{const i=v.items[index],pos=v.timePosition??(v.kind==='past'?22:v.kind==='future'?78:50);
 if(['past','now','future','duration'].includes(v.kind))return `<div class="time-diagram" style="--event:${pos}%;--start:${Math.max(5,pos-30)}%;--duration:${pos-Math.max(5,pos-30)}%" aria-label="Diagram waktu"><div class="time-axis"><span>PAST</span><span>NOW</span><span>FUTURE</span></div><div class="time-rail"><i class="time-now"></i>${v.kind==='duration'?'<span class="time-duration"></span>':''}<span class="time-event" style="--event:${pos}%">${icon('clock')}</span></div><p>${esc(i.cue||i.label)}</p></div>`;
 if(v.kind==='forms')return `<div class="forms-diagram">${['V1','V2','V3','V-ing'].map((x,j)=>`<span><b>${x}</b><i>${['base','past','participle','continuous'][j]}</i></span>`).join('<em>→</em>')}</div>`;
 if(v.kind==='passive')return `<div class="voice-diagram"><span class="voice-person">${icon('device')}<small>PELAKU</small></span><span class="voice-flow">${icon('arrow')}<i>tindakan</i></span><span class="voice-target">${icon('book')}<small>PENERIMA</small></span></div>`;
 if(v.kind==='chat')return `<div class="chat-diagram"><span class="chat-avatar">A</span><div class="chat-bubble">${icon('chat')}<i>${i.formula}</i><span></span><span></span><span></span></div><span class="chat-avatar other">B</span></div>`;
 if(v.kind==='tea')return `<div class="tea-diagram step-${index}"><svg viewBox="0 0 280 125" fill="none" aria-hidden="true"><ellipse cx="142" cy="112" rx="75" ry="8" fill="#b9a3ce" opacity=".15"/><path d="M90 41h90v48c0 29-90 29-90 0Z" fill="#fff9eb" stroke="#cbb5db" stroke-width="2"/><path d="M181 50c48-7 41 47 0 39" stroke="#ccb6db" stroke-width="9"/><ellipse cx="135" cy="41" rx="45" ry="10" fill="#dac89c"/><path class="tea-water" d="M94 60h82v27c0 23-82 23-82 0Z" fill="#d2ab66" opacity=".7"/><path class="tea-string" d="M140 9v65h17" stroke="#a286b6" stroke-width="2"/><rect class="tea-bag" x="120" y="59" width="28" height="28" rx="5" fill="#b49a83"/><path class="tea-steam" d="M108 26c-11-15 12-12 2-26m25 26c-11-15 12-12 2-26m25 26c-11-15 12-12 2-26" stroke="#c4afce" stroke-width="2" stroke-linecap="round"/></svg></div>`;
 if(v.kind==='steps')return `<div class="step-diagram">${v.items.map((it,j)=>`<span class="${j===index?'current':j<index?'passed':''}"><b>${j<index?'✓':String(j+1).padStart(2,'0')}</b><i>${it.label.replace(/^\d+ · /,'')}</i></span>`).join('')}</div>`;
 if(v.kind==='people')return `<div class="people-diagram"><span class="person-bust"><i></i><b></b></span><span class="person-link">→</span><div class="pronoun-bubble">${esc(i.parts[0].text)}</div><span class="mini-book">${icon('book')}</span></div>`;
 return `<div class="syntax-diagram"><span>S<small>SUBJECT</small></span><i>→</i><span>V<small>VERB</small></span><i>→</i><span>O / C<small>OBJECT / COMPLEMENT</small></span></div>`;
}
export function labStageHTML(v: VisualModel,index: number){const i=v.items[index],labels=v.kind==='forms'?['V1','V2','V3','V-ing']:safelyLabels(v);return `${labDiagram(v,index)}<div class="sentence-pieces" lang="en">${i.parts.map((p,j)=>`<div class="sentence-piece piece-${p.role}"><b>${esc(p.text)}</b><small>${labels[j]||'KETERANGAN'}</small></div>`).join('')}</div><div class="lab-bottom"><div class="lab-formula">${icon('layers')}<span>${esc(i.formula)}</span></div>${i.meaning?`<p>${esc(i.meaning)}</p>`:''}</div>`}
export function visualHTML(s: LessonSection,chapterId: number){const v=VISUALS[s.id];return `<div class="visual-lab" data-lab="${s.id}" data-index="0"><div class="lab-caption"><span>${icon(CHAPTER_ICONS[chapterId-1])} ${esc(v.note)}</span><b>INTERAKTIF</b></div><div class="lab-controls" role="group" aria-label="Contoh ${esc(s.title)}">${v.items.map((it,i)=>`<button class="${i===0?'selected':''}" data-lab-choice="${i}" aria-pressed="${i===0}">${esc(it.label)}</button>`).join('')}</div><div class="lab-stage" aria-live="polite">${labStageHTML(v,0)}</div><div class="lab-pagination"><span>01 <i>/ ${String(v.items.length).padStart(2,'0')}</i></span><button data-lab-next>Contoh berikutnya ${icon('arrow')}</button></div></div>`}

function safelyLabels(v: VisualModel): string[]{return v===VISUALS['s1-1']?['SUBJECT','VERB','OBJECT / COMPLEMENT','KETERANGAN']:['AWAL','INTI','PELENGKAP','KETERANGAN']}
