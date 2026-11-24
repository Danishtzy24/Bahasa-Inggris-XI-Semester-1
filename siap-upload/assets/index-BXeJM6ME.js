(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function i(e,a=document){const t=a.querySelector(e);if(!t)throw new Error(`Element tidak ditemukan: ${e}`);return t}function j(e,a=document){return Array.from(a.querySelectorAll(e))}const y=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),w={chapters:[{id:1,title:"Grammar foundations",fullTitle:"Dasar-Dasar Grammar dan Bentuk Kata Kerja",subtitle:"Pronouns · verb forms · auxiliaries",intro:"",example:"She writes a letter.",translation:"Dia menulis sebuah surat.",sections:[{id:"s1-1",number:"1.1",title:"Apa itu grammar?",lead:`<p>Grammar adalah aturan yang mengatur cara menyusun kata menjadi frasa dan kalimat yang dapat dipahami. Dalam bahasa Inggris, susunan kalimat dasar yang sering digunakan adalah:</p>
<p><strong>Subject + Verb + Object/Complement</strong></p>
<p>Contoh:</p>
<ul>
<li><strong>She</strong> reads <strong>a book</strong>. — Dia membaca sebuah buku.</li>
<li><strong>They</strong> are <strong>students</strong>. — Mereka adalah siswa.</li>
<li><strong>My brother</strong> is <strong>happy</strong>. — Saudara laki-laki saya bahagia.</li>
</ul>
<p>Subject adalah orang atau hal yang dibicarakan. Verb menyatakan tindakan atau keadaan. Object menerima tindakan, sedangkan complement melengkapi informasi tentang subject atau object.</p>
`,details:[],search:"1.1 apa itu grammar? grammar adalah aturan yang mengatur cara menyusun kata menjadi frasa dan kalimat yang dapat dipahami. dalam bahasa inggris, susunan kalimat dasar yang sering digunakan adalah: subject + verb + object/complement contoh: she reads a book . — dia membaca sebuah buku. they are students . — mereka adalah siswa. my brother is happy . — saudara laki-laki saya bahagia. subject adalah orang atau hal yang dibicarakan. verb menyatakan tindakan atau keadaan. object menerima tindakan, sedangkan complement melengkapi informasi tentang subject atau object."},{id:"s1-2",number:"1.2",title:"Subject pronouns",lead:`<p>Subject pronoun adalah kata ganti yang menempati posisi subject.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Subject pronoun</th>
<th>Arti</th>
<th>Contoh</th>
</tr>
</thead>
<tbody>
<tr>
<td>I</td>
<td>Saya</td>
<td>I study English.</td>
</tr>
<tr>
<td>You</td>
<td>Kamu/kalian</td>
<td>You look happy.</td>
</tr>
<tr>
<td>We</td>
<td>Kami/kita</td>
<td>We play football.</td>
</tr>
<tr>
<td>They</td>
<td>Mereka</td>
<td>They work here.</td>
</tr>
<tr>
<td>He</td>
<td>Dia (laki-laki)</td>
<td>He reads a book.</td>
</tr>
<tr>
<td>She</td>
<td>Dia (perempuan)</td>
<td>She writes a letter.</td>
</tr>
<tr>
<td>It</td>
<td>Benda/hewan/hal</td>
<td>It looks beautiful.</td>
</tr>
</tbody>
</table></div>
`,details:[],search:"1.2 subject pronouns subject pronoun adalah kata ganti yang menempati posisi subject. subject pronoun arti contoh i saya i study english. you kamu/kalian you look happy. we kami/kita we play football. they mereka they work here. he dia (laki-laki) he reads a book. she dia (perempuan) she writes a letter. it benda/hewan/hal it looks beautiful."},{id:"s1-3",number:"1.3",title:"Object pronouns",lead:`<p>Object pronoun digunakan sebagai object atau setelah preposition, bukan sebagai subject.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Subject pronoun</th>
<th>Object pronoun</th>
<th>Contoh</th>
</tr>
</thead>
<tbody>
<tr>
<td>I</td>
<td>me</td>
<td>She helps me.</td>
</tr>
<tr>
<td>You</td>
<td>you</td>
<td>I call you.</td>
</tr>
<tr>
<td>We</td>
<td>us</td>
<td>They invite us.</td>
</tr>
<tr>
<td>They</td>
<td>them</td>
<td>I know them.</td>
</tr>
<tr>
<td>He</td>
<td>him</td>
<td>We meet him.</td>
</tr>
<tr>
<td>She</td>
<td>her</td>
<td>I help her.</td>
</tr>
<tr>
<td>It</td>
<td>it</td>
<td>Please move it.</td>
</tr>
</tbody>
</table></div>
<p>Perbedaan penting: <strong>She calls him</strong> benar karena <em>she</em> adalah subject dan <em>him</em> adalah object. Bentuk <em>her</em> digunakan sebagai object, sedangkan <em>she</em> digunakan sebagai subject.</p>
`,details:[],search:"1.3 object pronouns object pronoun digunakan sebagai object atau setelah preposition, bukan sebagai subject. subject pronoun object pronoun contoh i me she helps me. you you i call you. we us they invite us. they them i know them. he him we meet him. she her i help her. it it please move it. perbedaan penting: she calls him benar karena she adalah subject dan him adalah object. bentuk her digunakan sebagai object, sedangkan she digunakan sebagai subject."},{id:"s1-4",number:"1.4",title:"Bentuk kata kerja: V1, V2, V3, dan V-ing",lead:`<p>Banyak rumus tense bergantung pada bentuk kata kerja. Karena itu, pahami empat bentuk berikut.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Nama</th>
<th>Kegunaan utama</th>
<th>Contoh dari kata <em>write</em></th>
</tr>
</thead>
<tbody>
<tr>
<td>V1</td>
<td>Base form</td>
<td>Simple Present, Simple Future, setelah modal, dan imperative</td>
<td>write</td>
</tr>
<tr>
<td>V2</td>
<td>Past form</td>
<td>Simple Past</td>
<td>wrote</td>
</tr>
<tr>
<td>V3</td>
<td>Past participle</td>
<td>Perfect Tenses dan Passive Voice</td>
<td>written</td>
</tr>
<tr>
<td>V-ing</td>
<td>Present participle/gerund</td>
<td>Continuous Tenses dan beberapa pola lain</td>
<td>writing</td>
</tr>
</tbody>
</table></div>
`,details:[{title:"Contoh kata kerja beraturan (regular verbs)",html:`<p>Pada regular verbs, bentuk V2 dan V3 umumnya dibuat dengan menambahkan <strong>-ed</strong> atau <strong>-d</strong>.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>V1</th>
<th>V2</th>
<th>V3</th>
<th>Arti</th>
</tr>
</thead>
<tbody>
<tr>
<td>play</td>
<td>played</td>
<td>played</td>
<td>bermain</td>
</tr>
<tr>
<td>work</td>
<td>worked</td>
<td>worked</td>
<td>bekerja</td>
</tr>
<tr>
<td>clean</td>
<td>cleaned</td>
<td>cleaned</td>
<td>membersihkan</td>
</tr>
<tr>
<td>open</td>
<td>opened</td>
<td>opened</td>
<td>membuka</td>
</tr>
<tr>
<td>study</td>
<td>studied</td>
<td>studied</td>
<td>belajar</td>
</tr>
<tr>
<td>stop</td>
<td>stopped</td>
<td>stopped</td>
<td>berhenti</td>
</tr>
<tr>
<td>live</td>
<td>lived</td>
<td>lived</td>
<td>tinggal/hidup</td>
</tr>
<tr>
<td>use</td>
<td>used</td>
<td>used</td>
<td>menggunakan</td>
</tr>
</tbody>
</table></div>
<p>Ejaan dapat berubah. Contohnya, <em>study</em> menjadi <em>studied</em> karena huruf <strong>y</strong> setelah konsonan berubah menjadi <strong>i</strong> sebelum -ed. Kata <em>stop</em> menjadi <em>stopped</em> dengan huruf <strong>p</strong> digandakan.</p>
`},{title:"Contoh kata kerja tidak beraturan (irregular verbs)",html:`<p>Bentuk irregular verbs perlu dipelajari karena perubahannya tidak mengikuti satu pola -ed.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>V1</th>
<th>V2</th>
<th>V3</th>
<th>Arti</th>
</tr>
</thead>
<tbody>
<tr>
<td>be</td>
<td>was/were</td>
<td>been</td>
<td>berada/menjadi</td>
</tr>
<tr>
<td>become</td>
<td>became</td>
<td>become</td>
<td>menjadi</td>
</tr>
<tr>
<td>begin</td>
<td>began</td>
<td>begun</td>
<td>memulai</td>
</tr>
<tr>
<td>break</td>
<td>broke</td>
<td>broken</td>
<td>memecahkan</td>
</tr>
<tr>
<td>bring</td>
<td>brought</td>
<td>brought</td>
<td>membawa</td>
</tr>
<tr>
<td>buy</td>
<td>bought</td>
<td>bought</td>
<td>membeli</td>
</tr>
<tr>
<td>come</td>
<td>came</td>
<td>come</td>
<td>datang</td>
</tr>
<tr>
<td>do</td>
<td>did</td>
<td>done</td>
<td>melakukan</td>
</tr>
<tr>
<td>drink</td>
<td>drank</td>
<td>drunk</td>
<td>minum</td>
</tr>
<tr>
<td>drive</td>
<td>drove</td>
<td>driven</td>
<td>mengemudi</td>
</tr>
<tr>
<td>eat</td>
<td>ate</td>
<td>eaten</td>
<td>makan</td>
</tr>
<tr>
<td>find</td>
<td>found</td>
<td>found</td>
<td>menemukan</td>
</tr>
<tr>
<td>get</td>
<td>got</td>
<td>got/gotten</td>
<td>mendapatkan</td>
</tr>
<tr>
<td>give</td>
<td>gave</td>
<td>given</td>
<td>memberi</td>
</tr>
<tr>
<td>go</td>
<td>went</td>
<td>gone</td>
<td>pergi</td>
</tr>
<tr>
<td>have</td>
<td>had</td>
<td>had</td>
<td>memiliki</td>
</tr>
<tr>
<td>know</td>
<td>knew</td>
<td>known</td>
<td>mengetahui</td>
</tr>
<tr>
<td>make</td>
<td>made</td>
<td>made</td>
<td>membuat</td>
</tr>
<tr>
<td>read</td>
<td>read</td>
<td>read</td>
<td>membaca</td>
</tr>
<tr>
<td>run</td>
<td>ran</td>
<td>run</td>
<td>berlari</td>
</tr>
<tr>
<td>say</td>
<td>said</td>
<td>said</td>
<td>mengatakan</td>
</tr>
<tr>
<td>see</td>
<td>saw</td>
<td>seen</td>
<td>melihat</td>
</tr>
<tr>
<td>speak</td>
<td>spoke</td>
<td>spoken</td>
<td>berbicara</td>
</tr>
<tr>
<td>take</td>
<td>took</td>
<td>taken</td>
<td>mengambil</td>
</tr>
<tr>
<td>teach</td>
<td>taught</td>
<td>taught</td>
<td>mengajar</td>
</tr>
<tr>
<td>tell</td>
<td>told</td>
<td>told</td>
<td>memberi tahu/menceritakan</td>
</tr>
<tr>
<td>think</td>
<td>thought</td>
<td>thought</td>
<td>berpikir</td>
</tr>
<tr>
<td>wear</td>
<td>wore</td>
<td>worn</td>
<td>memakai</td>
</tr>
<tr>
<td>win</td>
<td>won</td>
<td>won</td>
<td>menang</td>
</tr>
<tr>
<td>write</td>
<td>wrote</td>
<td>written</td>
<td>menulis</td>
</tr>
</tbody>
</table></div>
<p>Catatan: <em>Read</em> memiliki ejaan yang sama pada V1, V2, dan V3, tetapi pengucapan V2/V3 berbeda dari V1. Bentuk <em>gotten</em> umum dalam American English, sedangkan <em>got</em> umum dalam British English.</p>
`}],search:"1.4 bentuk kata kerja: v1, v2, v3, dan v-ing banyak rumus tense bergantung pada bentuk kata kerja. karena itu, pahami empat bentuk berikut. bentuk nama kegunaan utama contoh dari kata write v1 base form simple present, simple future, setelah modal, dan imperative write v2 past form simple past wrote v3 past participle perfect tenses dan passive voice written v-ing present participle/gerund continuous tenses dan beberapa pola lain writing contoh kata kerja beraturan (regular verbs) pada regular verbs, bentuk v2 dan v3 umumnya dibuat dengan menambahkan -ed atau -d . v1 v2 v3 arti play played played bermain work worked worked bekerja clean cleaned cleaned membersihkan open opened opened membuka study studied studied belajar stop stopped stopped berhenti live lived lived tinggal/hidup use used used menggunakan ejaan dapat berubah. contohnya, study menjadi studied karena huruf y setelah konsonan berubah menjadi i sebelum -ed. kata stop menjadi stopped dengan huruf p digandakan. contoh kata kerja tidak beraturan (irregular verbs) bentuk irregular verbs perlu dipelajari karena perubahannya tidak mengikuti satu pola -ed. v1 v2 v3 arti be was/were been berada/menjadi become became become menjadi begin began begun memulai break broke broken memecahkan bring brought brought membawa buy bought bought membeli come came come datang do did done melakukan drink drank drunk minum drive drove driven mengemudi eat ate eaten makan find found found menemukan get got got/gotten mendapatkan give gave given memberi go went gone pergi have had had memiliki know knew known mengetahui make made made membuat read read read membaca run ran run berlari say said said mengatakan see saw seen melihat speak spoke spoken berbicara take took taken mengambil teach taught taught mengajar tell told told memberi tahu/menceritakan think thought thought berpikir wear wore worn memakai win won won menang write wrote written menulis catatan: read memiliki ejaan yang sama pada v1, v2, dan v3, tetapi pengucapan v2/v3 berbeda dari v1. bentuk gotten umum dalam american english, sedangkan got umum dalam british english."},{id:"s1-5",number:"1.5",title:"To be: am, is, are, was, dan were",lead:`<p><em>To be</em> dapat menjadi kata kerja utama dalam kalimat nominal dan menjadi kata bantu dalam beberapa pola tense serta passive voice.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Subject</th>
<th>To be (present)</th>
<th>To be (past)</th>
</tr>
</thead>
<tbody>
<tr>
<td>I</td>
<td>am</td>
<td>was</td>
</tr>
<tr>
<td>He/She/It</td>
<td>is</td>
<td>was</td>
</tr>
<tr>
<td>You/We/They</td>
<td>are</td>
<td>were</td>
</tr>
</tbody>
</table></div>
<p>Contoh kalimat nominal:</p>
<ul>
<li>I <strong>am</strong> a student. — Saya seorang siswa.</li>
<li>She <strong>is</strong> tired. — Dia lelah.</li>
<li>They <strong>are</strong> at school. — Mereka berada di sekolah.</li>
<li>He <strong>was</strong> sick yesterday. — Dia sakit kemarin.</li>
<li>We <strong>were</strong> busy last week. — Kami sibuk minggu lalu.</li>
</ul>
`,details:[],search:"1.5 to be: am, is, are, was, dan were to be dapat menjadi kata kerja utama dalam kalimat nominal dan menjadi kata bantu dalam beberapa pola tense serta passive voice. subject to be (present) to be (past) i am was he/she/it is was you/we/they are were contoh kalimat nominal: i am a student. — saya seorang siswa. she is tired. — dia lelah. they are at school. — mereka berada di sekolah. he was sick yesterday. — dia sakit kemarin. we were busy last week. — kami sibuk minggu lalu."},{id:"s1-6",number:"1.6",title:"Auxiliary verbs: do, does, did, have, dan has",lead:`<p>Auxiliary verb adalah kata kerja bantu yang membantu membentuk pertanyaan, kalimat negatif, atau tense tertentu.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Kata bantu</th>
<th>Subject/penggunaan</th>
<th>Contoh</th>
</tr>
</thead>
<tbody>
<tr>
<td>do</td>
<td>I, you, we, they dalam Simple Present verbal</td>
<td>Do they study?</td>
</tr>
<tr>
<td>does</td>
<td>he, she, it dalam Simple Present verbal</td>
<td>Does she study?</td>
</tr>
<tr>
<td>did</td>
<td>semua subject dalam Simple Past verbal</td>
<td>Did he study?</td>
</tr>
<tr>
<td>have</td>
<td>I, you, we, they dalam Present Perfect</td>
<td>They have finished.</td>
</tr>
<tr>
<td>has</td>
<td>he, she, it dalam Present Perfect</td>
<td>She has finished.</td>
</tr>
<tr>
<td>had</td>
<td>semua subject dalam Past Perfect</td>
<td>We had left.</td>
</tr>
</tbody>
</table></div>
<p><strong>Penting:</strong> Setelah <em>do, does,</em> atau <em>did</em> sebagai auxiliary, gunakan V1.</p>
<ul>
<li>Benar: She <strong>does not like</strong> coffee.</li>
<li>Salah: She does not <strong>likes</strong> coffee.</li>
<li>Benar: They <strong>did not go</strong> home.</li>
<li>Salah: They did not <strong>went</strong> home.</li>
</ul>
`,details:[],search:"1.6 auxiliary verbs: do, does, did, have, dan has auxiliary verb adalah kata kerja bantu yang membantu membentuk pertanyaan, kalimat negatif, atau tense tertentu. kata bantu subject/penggunaan contoh do i, you, we, they dalam simple present verbal do they study? does he, she, it dalam simple present verbal does she study? did semua subject dalam simple past verbal did he study? have i, you, we, they dalam present perfect they have finished. has he, she, it dalam present perfect she has finished. had semua subject dalam past perfect we had left. penting: setelah do, does, atau did sebagai auxiliary, gunakan v1. benar: she does not like coffee. salah: she does not likes coffee. benar: they did not go home. salah: they did not went home."},{id:"s1-7",number:"1.7",title:"Kalimat verbal dan nominal",lead:`<p>Kalimat verbal menggunakan kata kerja tindakan atau proses sebagai verb utama.</p>
<ul>
<li>She <strong>plays</strong> badminton.</li>
<li>They <strong>visited</strong> the museum.</li>
</ul>
<p>Kalimat nominal menggunakan <em>to be</em> sebagai penghubung subject dengan noun, adjective, atau keterangan tempat/waktu.</p>
<ul>
<li>She <strong>is</strong> a student. (<em>student</em> = noun)</li>
<li>They <strong>are</strong> happy. (<em>happy</em> = adjective)</li>
<li>He <strong>was</strong> at home. (<em>at home</em> = keterangan tempat)</li>
</ul>
<p>Jangan menambahkan <em>do/does/did</em> untuk membuat pertanyaan atau negatif pada kalimat yang verb utamanya adalah <em>to be</em>.</p>
<ul>
<li>Benar: <strong>Is</strong> she happy? / She <strong>is not</strong> happy.</li>
<li>Salah: Does she be happy? / She does not be happy.</li>
</ul>
`,details:[],search:"1.7 kalimat verbal dan nominal kalimat verbal menggunakan kata kerja tindakan atau proses sebagai verb utama. she plays badminton. they visited the museum. kalimat nominal menggunakan to be sebagai penghubung subject dengan noun, adjective, atau keterangan tempat/waktu. she is a student. ( student = noun) they are happy. ( happy = adjective) he was at home. ( at home = keterangan tempat) jangan menambahkan do/does/did untuk membuat pertanyaan atau negatif pada kalimat yang verb utamanya adalah to be . benar: is she happy? / she is not happy. salah: does she be happy? / she does not be happy."},{id:"s1-8",number:"1.8",title:"Subject–verb agreement",lead:`<p>Dalam Simple Present verbal, subject <strong>he, she, it</strong> dan subject tunggal biasanya memakai V1 dengan tambahan <strong>-s/-es</strong> pada kalimat positif.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Subject</th>
<th>Bentuk verb</th>
<th>Contoh</th>
</tr>
</thead>
<tbody>
<tr>
<td>I/You/We/They</td>
<td>V1</td>
<td>They play football.</td>
</tr>
<tr>
<td>He/She/It</td>
<td>V1 + s/es</td>
<td>She plays football.</td>
</tr>
</tbody>
</table></div>
<p>Contoh perubahan:</p>
<ul>
<li>work → works</li>
<li>watch → watches</li>
<li>go → goes</li>
<li>study → studies</li>
<li>have → has</li>
</ul>
`,details:[],search:"1.8 subject–verb agreement dalam simple present verbal, subject he, she, it dan subject tunggal biasanya memakai v1 dengan tambahan -s/-es pada kalimat positif. subject bentuk verb contoh i/you/we/they v1 they play football. he/she/it v1 + s/es she plays football. contoh perubahan: work → works watch → watches go → goes study → studies have → has"}],questions:["B1-01","B1-02","B1-03","B1-04","B1-05","B1-06","B1-07","B1-08"]},{id:2,title:"Present tenses",fullTitle:"Present Tenses",subtitle:"Simple · continuous · perfect",intro:`<p>Present Tenses digunakan untuk membicarakan kebiasaan, fakta, aktivitas yang sedang berlangsung, pengalaman, atau aktivitas yang dimulai sebelumnya dan masih berhubungan dengan sekarang. Dalam pembelajaran 12 tenses, kelompok Present terdiri dari empat bentuk.</p>
`,example:"She has finished her work.",translation:"Dia sudah menyelesaikan pekerjaannya.",sections:[{id:"s2-1",number:"2.1",title:"Simple Present Tense",lead:"",details:[{title:"Fungsi",html:`<p>Simple Present digunakan untuk:</p>
<ol>
<li>Kebiasaan atau rutinitas: <em>I wake up at five every morning.</em></li>
<li>Fakta umum: <em>Water boils at 100°C at sea level.</em></li>
<li>Keadaan yang relatif tetap: <em>She lives in Jakarta.</em></li>
<li>Jadwal tetap: <em>The train leaves at 7 a.m.</em></li>
</ol>
`},{title:"Rumus verbal",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + V1(s/es) + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + do/does + not + V1 + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Do/Does + S + V1 + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Gunakan <strong>does</strong> untuk he, she, it, atau subject tunggal. Gunakan <strong>do</strong> untuk I, you, we, they, atau subject jamak.</p>
<p>Contoh:</p>
<ul>
<li>(+) She <strong>studies</strong> English every day.</li>
<li>(−) She <strong>does not study</strong> English every day.</li>
<li>(?) <strong>Does</strong> she <strong>study</strong> English every day?</li>
</ul>
`},{title:"Rumus nominal",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + am/is/are + C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + am/is/are + not + C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Am/Is/Are + S + C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) They <strong>are</strong> students.</li>
<li>(−) They <strong>are not</strong> students.</li>
<li>(?) <strong>Are</strong> they students?</li>
</ul>
`},{title:"Keterangan waktu yang sering digunakan",html:`<p><em>Always, usually, often, sometimes, rarely, never, every day, every week,</em> dan <em>once a month</em>.</p>
<p>Adverb of frequency biasanya diletakkan sebelum main verb: <em>She usually walks to school.</em> Namun, jika menggunakan <em>to be</em>, letakkan setelah <em>to be</em>: <em>She is usually punctual.</em></p>
`}],search:"2.1 simple present tense ### fungsi simple present digunakan untuk: kebiasaan atau rutinitas: i wake up at five every morning. fakta umum: water boils at 100°c at sea level. keadaan yang relatif tetap: she lives in jakarta. jadwal tetap: the train leaves at 7 a.m. rumus verbal bentuk rumus positif (+) s + v1(s/es) + o/c negatif (−) s + do/does + not + v1 + o/c pertanyaan (?) do/does + s + v1 + o/c? gunakan does untuk he, she, it, atau subject tunggal. gunakan do untuk i, you, we, they, atau subject jamak. contoh: (+) she studies english every day. (−) she does not study english every day. (?) does she study english every day? rumus nominal bentuk rumus positif (+) s + am/is/are + c negatif (−) s + am/is/are + not + c pertanyaan (?) am/is/are + s + c? contoh: (+) they are students. (−) they are not students. (?) are they students? keterangan waktu yang sering digunakan always, usually, often, sometimes, rarely, never, every day, every week, dan once a month . adverb of frequency biasanya diletakkan sebelum main verb: she usually walks to school. namun, jika menggunakan to be , letakkan setelah to be : she is usually punctual."},{id:"s2-2",number:"2.2",title:"Present Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Present Continuous digunakan untuk:</p>
<ol>
<li>Aktivitas yang sedang berlangsung sekarang: <em>I am reading now.</em></li>
<li>Aktivitas sementara di sekitar waktu sekarang: <em>She is staying with her aunt this week.</em></li>
<li>Rencana masa depan yang sudah diatur: <em>We are meeting the teacher tomorrow.</em></li>
<li>Perubahan atau perkembangan: <em>The city is growing quickly.</em></li>
</ol>
`},{title:"Rumus",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + am/is/are + V-ing + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + am/is/are + not + V-ing + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Am/Is/Are + S + V-ing + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) They <strong>are playing</strong> football now.</li>
<li>(−) They <strong>are not playing</strong> football now.</li>
<li>(?) <strong>Are</strong> they <strong>playing</strong> football now?</li>
</ul>
`},{title:"Aturan penulisan -ing",html:`<p>Umumnya tambahkan -ing: read → reading.</p>
<ul>
<li>Jika verb berakhir dengan e yang tidak dibunyikan, hilangkan e: write → writing.</li>
<li>Pada beberapa kata pendek dengan pola tertentu, konsonan akhir digandakan: run → running, sit → sitting.</li>
<li><em>Lie</em> berubah menjadi <em>lying</em>.</li>
</ul>
`},{title:"Keterangan waktu",html:`<p><em>Now, right now, at the moment, currently, today,</em> dan <em>this week</em> (bergantung konteks).</p>
`},{title:"Catatan: stative verbs",html:`<p>Beberapa kata kerja yang menyatakan keadaan, pikiran, perasaan, kepemilikan, atau indra biasanya tidak digunakan dalam bentuk continuous ketika bermakna keadaan. Contohnya <em>know, believe, understand, need, prefer, own,</em> dan <em>belong</em>.</p>
<ul>
<li>Umum: <em>I know the answer.</em></li>
<li>Tidak umum untuk makna keadaan: <em>I am knowing the answer.</em></li>
</ul>
<p>Sebagian kata dapat menjadi action verb dalam konteks tertentu, sehingga bisa memakai continuous: <em>I am thinking about the problem.</em></p>
`}],search:"2.2 present continuous tense ### fungsi present continuous digunakan untuk: aktivitas yang sedang berlangsung sekarang: i am reading now. aktivitas sementara di sekitar waktu sekarang: she is staying with her aunt this week. rencana masa depan yang sudah diatur: we are meeting the teacher tomorrow. perubahan atau perkembangan: the city is growing quickly. rumus bentuk rumus positif (+) s + am/is/are + v-ing + o/c negatif (−) s + am/is/are + not + v-ing + o/c pertanyaan (?) am/is/are + s + v-ing + o/c? contoh: (+) they are playing football now. (−) they are not playing football now. (?) are they playing football now? aturan penulisan -ing umumnya tambahkan -ing: read → reading. jika verb berakhir dengan e yang tidak dibunyikan, hilangkan e: write → writing. pada beberapa kata pendek dengan pola tertentu, konsonan akhir digandakan: run → running, sit → sitting. lie berubah menjadi lying . keterangan waktu now, right now, at the moment, currently, today, dan this week (bergantung konteks). catatan: stative verbs beberapa kata kerja yang menyatakan keadaan, pikiran, perasaan, kepemilikan, atau indra biasanya tidak digunakan dalam bentuk continuous ketika bermakna keadaan. contohnya know, believe, understand, need, prefer, own, dan belong . umum: i know the answer. tidak umum untuk makna keadaan: i am knowing the answer. sebagian kata dapat menjadi action verb dalam konteks tertentu, sehingga bisa memakai continuous: i am thinking about the problem."},{id:"s2-3",number:"2.3",title:"Present Perfect Tense",lead:"",details:[{title:"Fungsi",html:`<p>Present Perfect menghubungkan kejadian masa lalu dengan masa sekarang. Penggunaannya antara lain:</p>
<ol>
<li>Pengalaman tanpa menyebut waktu lampau yang spesifik: <em>I have visited Bali.</em></li>
<li>Tindakan yang baru selesai atau hasilnya relevan sekarang: <em>She has just finished her homework.</em></li>
<li>Keadaan atau tindakan yang dimulai di masa lalu dan masih berlaku: <em>We have lived here for five years.</em></li>
<li>Periode waktu yang belum selesai: <em>I have read two chapters today.</em></li>
</ol>
`},{title:"Rumus",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + have/has + V3 + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + have/has + not + V3 + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Have/Has + S + V3 + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Gunakan <strong>has</strong> untuk he, she, it, dan subject tunggal. Gunakan <strong>have</strong> untuk I, you, we, they, dan subject jamak.</p>
<p>Contoh:</p>
<ul>
<li>(+) She <strong>has eaten</strong> breakfast.</li>
<li>(−) She <strong>has not eaten</strong> breakfast.</li>
<li>(?) <strong>Has</strong> she <strong>eaten</strong> breakfast?</li>
</ul>
`},{title:"Keterangan waktu",html:`<p><strong>Already:</strong> sudah; biasanya dalam kalimat positif.</p>
<ul>
<li><strong>Just:</strong> baru saja.</li>
<li><strong>Yet:</strong> belum/sudah; sering dipakai di akhir kalimat negatif atau pertanyaan.</li>
<li><strong>Ever:</strong> pernah; sering dipakai dalam pertanyaan pengalaman.</li>
<li><strong>Never:</strong> tidak pernah.</li>
<li><strong>Since:</strong> sejak titik awal waktu, misalnya <em>since 2022</em>.</li>
<li><strong>For:</strong> selama suatu durasi, misalnya <em>for three years</em>.</li>
</ul>
<p>Jangan memakai Present Perfect untuk waktu lampau yang sudah selesai dan disebut secara spesifik seperti <em>yesterday, last year,</em> atau <em>in 2020</em>. Gunakan Simple Past untuk konteks tersebut.</p>
`}],search:"2.3 present perfect tense ### fungsi present perfect menghubungkan kejadian masa lalu dengan masa sekarang. penggunaannya antara lain: pengalaman tanpa menyebut waktu lampau yang spesifik: i have visited bali. tindakan yang baru selesai atau hasilnya relevan sekarang: she has just finished her homework. keadaan atau tindakan yang dimulai di masa lalu dan masih berlaku: we have lived here for five years. periode waktu yang belum selesai: i have read two chapters today. rumus bentuk rumus positif (+) s + have/has + v3 + o/c negatif (−) s + have/has + not + v3 + o/c pertanyaan (?) have/has + s + v3 + o/c? gunakan has untuk he, she, it, dan subject tunggal. gunakan have untuk i, you, we, they, dan subject jamak. contoh: (+) she has eaten breakfast. (−) she has not eaten breakfast. (?) has she eaten breakfast? keterangan waktu already: sudah; biasanya dalam kalimat positif. just: baru saja. yet: belum/sudah; sering dipakai di akhir kalimat negatif atau pertanyaan. ever: pernah; sering dipakai dalam pertanyaan pengalaman. never: tidak pernah. since: sejak titik awal waktu, misalnya since 2022 . for: selama suatu durasi, misalnya for three years . jangan memakai present perfect untuk waktu lampau yang sudah selesai dan disebut secara spesifik seperti yesterday, last year, atau in 2020 . gunakan simple past untuk konteks tersebut."},{id:"s2-4",number:"2.4",title:"Present Perfect Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Present Perfect Continuous menekankan durasi atau proses aktivitas yang dimulai di masa lalu dan masih berlangsung sekarang, atau baru berhenti tetapi dampaknya terlihat.</p>
<p>Contoh:</p>
<ul>
<li><em>I have been studying for two hours.</em> — Saya sudah belajar selama dua jam dan kemungkinan masih belajar.</li>
<li><em>It has been raining.</em> — Hujan telah berlangsung; mungkin baru berhenti dan dampaknya masih terlihat.</li>
</ul>
`},{title:"Rumus",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + have/has + been + V-ing + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + have/has + not + been + V-ing + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Have/Has + S + been + V-ing + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) They <strong>have been working</strong> for three hours.</li>
<li>(−) They <strong>have not been working</strong> for three hours.</li>
<li>(?) <strong>Have</strong> they <strong>been working</strong> for three hours?</li>
</ul>
`},{title:"Present Perfect vs. Present Perfect Continuous",html:`<p><em>I have written three emails.</em> Fokus pada hasil atau jumlah email yang selesai.</p>
<ul>
<li><em>I have been writing emails for an hour.</em> Fokus pada proses dan durasi menulis.</li>
</ul>
`}],search:"2.4 present perfect continuous tense ### fungsi present perfect continuous menekankan durasi atau proses aktivitas yang dimulai di masa lalu dan masih berlangsung sekarang, atau baru berhenti tetapi dampaknya terlihat. contoh: i have been studying for two hours. — saya sudah belajar selama dua jam dan kemungkinan masih belajar. it has been raining. — hujan telah berlangsung; mungkin baru berhenti dan dampaknya masih terlihat. rumus bentuk rumus positif (+) s + have/has + been + v-ing + o/c negatif (−) s + have/has + not + been + v-ing + o/c pertanyaan (?) have/has + s + been + v-ing + o/c? contoh: (+) they have been working for three hours. (−) they have not been working for three hours. (?) have they been working for three hours? present perfect vs. present perfect continuous i have written three emails. fokus pada hasil atau jumlah email yang selesai. i have been writing emails for an hour. fokus pada proses dan durasi menulis."},{id:"s2-5",number:"2.5",title:"Ringkasan Present Tenses",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Tense</th>
<th>Rumus positif</th>
<th>Fokus utama</th>
</tr>
</thead>
<tbody>
<tr>
<td>Simple Present</td>
<td>S + V1(s/es)</td>
<td>Kebiasaan, fakta, keadaan</td>
</tr>
<tr>
<td>Present Continuous</td>
<td>S + am/is/are + V-ing</td>
<td>Aktivitas yang sedang berlangsung</td>
</tr>
<tr>
<td>Present Perfect</td>
<td>S + have/has + V3</td>
<td>Pengalaman, hasil, hubungan masa lalu dengan sekarang</td>
</tr>
<tr>
<td>Present Perfect Continuous</td>
<td>S + have/has + been + V-ing</td>
<td>Durasi/proses sampai sekarang</td>
</tr>
</tbody>
</table></div>
`,details:[],search:"2.5 ringkasan present tenses tense rumus positif fokus utama simple present s + v1(s/es) kebiasaan, fakta, keadaan present continuous s + am/is/are + v-ing aktivitas yang sedang berlangsung present perfect s + have/has + v3 pengalaman, hasil, hubungan masa lalu dengan sekarang present perfect continuous s + have/has + been + v-ing durasi/proses sampai sekarang"}],questions:["B2-01","B2-02","B2-03","B2-04","B2-05","B2-06","B2-07","B2-08","B2-09","B2-10"]},{id:3,title:"Past tenses",fullTitle:"Past Tenses",subtitle:"Simple · continuous · perfect",intro:`<p>Past Tenses digunakan untuk membicarakan kejadian, aktivitas, atau keadaan yang berkaitan dengan masa lalu. Kelompok Past dalam sistem 12 tenses terdiri dari empat bentuk.</p>
`,example:"She was reading at 8 p.m.",translation:"Dia sedang membaca pada pukul 8 malam.",sections:[{id:"s3-1",number:"3.1",title:"Simple Past Tense",lead:"",details:[{title:"Fungsi",html:`<p>Simple Past digunakan untuk:</p>
<ol>
<li>Tindakan yang selesai pada masa lalu: <em>I visited my grandmother yesterday.</em></li>
<li>Rangkaian kejadian di masa lalu: <em>She opened the door, entered the room, and sat down.</em></li>
<li>Keadaan di masa lalu: <em>He was a student in 2020.</em></li>
<li>Kebiasaan di masa lalu yang sudah tidak berlaku: <em>We played outside every afternoon when we were children.</em></li>
</ol>
`},{title:"Rumus verbal",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + V2 + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + did + not + V1 + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Did + S + V1 + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) She <strong>went</strong> to school yesterday.</li>
<li>(−) She <strong>did not go</strong> to school yesterday.</li>
<li>(?) <strong>Did</strong> she <strong>go</strong> to school yesterday?</li>
</ul>
`},{title:"Rumus nominal",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + was/were + C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + was/were + not + C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Was/Were + S + C?</td>
</tr>
</tbody>
</table></div>
<p>Gunakan <strong>was</strong> untuk I, he, she, it, atau subject tunggal. Gunakan <strong>were</strong> untuk you, we, they, atau subject jamak.</p>
<p>Contoh:</p>
<ul>
<li>(+) They <strong>were</strong> tired.</li>
<li>(−) They <strong>were not</strong> tired.</li>
<li>(?) <strong>Were</strong> they tired?</li>
</ul>
`},{title:"Keterangan waktu",html:`<p><em>Yesterday, last night, last week, two days ago, in 2020, when I was young,</em> dan <em>this morning</em> jika pagi tersebut sudah berlalu.</p>
`}],search:"3.1 simple past tense ### fungsi simple past digunakan untuk: tindakan yang selesai pada masa lalu: i visited my grandmother yesterday. rangkaian kejadian di masa lalu: she opened the door, entered the room, and sat down. keadaan di masa lalu: he was a student in 2020. kebiasaan di masa lalu yang sudah tidak berlaku: we played outside every afternoon when we were children. rumus verbal bentuk rumus positif (+) s + v2 + o/c negatif (−) s + did + not + v1 + o/c pertanyaan (?) did + s + v1 + o/c? contoh: (+) she went to school yesterday. (−) she did not go to school yesterday. (?) did she go to school yesterday? rumus nominal bentuk rumus positif (+) s + was/were + c negatif (−) s + was/were + not + c pertanyaan (?) was/were + s + c? gunakan was untuk i, he, she, it, atau subject tunggal. gunakan were untuk you, we, they, atau subject jamak. contoh: (+) they were tired. (−) they were not tired. (?) were they tired? keterangan waktu yesterday, last night, last week, two days ago, in 2020, when i was young, dan this morning jika pagi tersebut sudah berlalu."},{id:"s3-2",number:"3.2",title:"Past Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Past Continuous menjelaskan aktivitas yang sedang berlangsung pada waktu tertentu di masa lalu. Tense ini juga sering digunakan untuk menunjukkan aktivitas yang sedang berlangsung ketika kejadian lain terjadi.</p>
<ul>
<li><em>I was studying at 8 p.m. last night.</em></li>
<li><em>I was studying when my friend called.</em></li>
<li><em>While I was cooking, my brother was washing the dishes.</em></li>
</ul>
`},{title:"Rumus",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + was/were + V-ing + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + was/were + not + V-ing + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Was/Were + S + V-ing + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) They <strong>were playing</strong> football.</li>
<li>(−) They <strong>were not playing</strong> football.</li>
<li>(?) <strong>Were</strong> they <strong>playing</strong> football?</li>
</ul>
`},{title:"Penggunaan when dan while",html:`<p><strong>When</strong> sering memperkenalkan kejadian yang menyela: <em>I was sleeping when the phone rang.</em></p>
<ul>
<li><strong>While</strong> sering memperkenalkan aktivitas yang sedang berlangsung: <em>While I was sleeping, the phone rang.</em></li>
</ul>
<p>Ini pola yang sering digunakan, bukan aturan mutlak. Pemilihan tense tetap bergantung pada makna kalimat.</p>
`}],search:"3.2 past continuous tense ### fungsi past continuous menjelaskan aktivitas yang sedang berlangsung pada waktu tertentu di masa lalu. tense ini juga sering digunakan untuk menunjukkan aktivitas yang sedang berlangsung ketika kejadian lain terjadi. i was studying at 8 p.m. last night. i was studying when my friend called. while i was cooking, my brother was washing the dishes. rumus bentuk rumus positif (+) s + was/were + v-ing + o/c negatif (−) s + was/were + not + v-ing + o/c pertanyaan (?) was/were + s + v-ing + o/c? contoh: (+) they were playing football. (−) they were not playing football. (?) were they playing football? penggunaan when dan while when sering memperkenalkan kejadian yang menyela: i was sleeping when the phone rang. while sering memperkenalkan aktivitas yang sedang berlangsung: while i was sleeping, the phone rang. ini pola yang sering digunakan, bukan aturan mutlak. pemilihan tense tetap bergantung pada makna kalimat."},{id:"s3-3",number:"3.3",title:"Past Perfect Tense",lead:"",details:[{title:"Fungsi",html:`<p>Past Perfect menunjukkan kejadian yang sudah selesai <strong>sebelum kejadian atau waktu lain di masa lalu</strong>.</p>
<p>Contoh:</p>
<p><em>The train had left before we arrived.</em><br/>
Kereta sudah berangkat sebelum kami tiba.</p>
`},{title:"Rumus",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + had + V3 + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + had + not + V3 + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Had + S + V3 + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) She <strong>had finished</strong> her homework before dinner.</li>
<li>(−) She <strong>had not finished</strong> her homework before dinner.</li>
<li>(?) <strong>Had</strong> she <strong>finished</strong> her homework before dinner?</li>
</ul>
<p><em>Had</em> digunakan untuk semua subject.</p>
`}],search:"3.3 past perfect tense ### fungsi past perfect menunjukkan kejadian yang sudah selesai sebelum kejadian atau waktu lain di masa lalu . contoh: the train had left before we arrived. kereta sudah berangkat sebelum kami tiba. rumus bentuk rumus positif (+) s + had + v3 + o/c negatif (−) s + had + not + v3 + o/c pertanyaan (?) had + s + v3 + o/c? contoh: (+) she had finished her homework before dinner. (−) she had not finished her homework before dinner. (?) had she finished her homework before dinner? had digunakan untuk semua subject."},{id:"s3-4",number:"3.4",title:"Past Perfect Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Past Perfect Continuous menekankan durasi suatu aktivitas yang sudah berlangsung sebelum titik waktu atau kejadian lain di masa lalu.</p>
<p>Contoh:</p>
<p><em>They had been waiting for an hour before the bus arrived.</em><br/>
Mereka telah menunggu selama satu jam sebelum bus datang.</p>
`},{title:"Rumus",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + had + been + V-ing + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + had + not + been + V-ing + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Had + S + been + V-ing + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) He <strong>had been working</strong> for five hours before he took a break.</li>
<li>(−) He <strong>had not been working</strong> for five hours before he took a break.</li>
<li>(?) <strong>Had</strong> he <strong>been working</strong> for five hours before he took a break?</li>
</ul>
`}],search:"3.4 past perfect continuous tense ### fungsi past perfect continuous menekankan durasi suatu aktivitas yang sudah berlangsung sebelum titik waktu atau kejadian lain di masa lalu. contoh: they had been waiting for an hour before the bus arrived. mereka telah menunggu selama satu jam sebelum bus datang. rumus bentuk rumus positif (+) s + had + been + v-ing + o/c negatif (−) s + had + not + been + v-ing + o/c pertanyaan (?) had + s + been + v-ing + o/c? contoh: (+) he had been working for five hours before he took a break. (−) he had not been working for five hours before he took a break. (?) had he been working for five hours before he took a break?"},{id:"s3-5",number:"3.5",title:"Perbedaan empat Past Tenses",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Tense</th>
<th>Contoh</th>
<th>Fokus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Simple Past</td>
<td>I worked yesterday.</td>
<td>Pekerjaan selesai di masa lalu</td>
</tr>
<tr>
<td>Past Continuous</td>
<td>I was working at 8 p.m.</td>
<td>Sedang berlangsung pada waktu lampau</td>
</tr>
<tr>
<td>Past Perfect</td>
<td>I had worked before noon.</td>
<td>Sudah selesai sebelum titik/kejadian lampau lain</td>
</tr>
<tr>
<td>Past Perfect Continuous</td>
<td>I had been working for three hours.</td>
<td>Durasi proses sebelum titik/kejadian lampau lain</td>
</tr>
</tbody>
</table></div>
`,details:[],search:"3.5 perbedaan empat past tenses tense contoh fokus simple past i worked yesterday. pekerjaan selesai di masa lalu past continuous i was working at 8 p.m. sedang berlangsung pada waktu lampau past perfect i had worked before noon. sudah selesai sebelum titik/kejadian lampau lain past perfect continuous i had been working for three hours. durasi proses sebelum titik/kejadian lampau lain"}],questions:["B3-01","B3-02","B3-03","B3-04","B3-05","B3-06","B3-07","B3-08"]},{id:4,title:"Future tenses",fullTitle:"Future Tenses dan Future in the Past",subtitle:"Will · going to · future in the past",intro:`<p>Future Tenses digunakan untuk membicarakan kejadian atau aktivitas yang akan terjadi. Dalam sistem 12 tenses, kelompok Future memiliki empat bentuk.</p>
`,example:"I will have finished by Friday.",translation:"Saya akan sudah selesai sebelum Jumat.",sections:[{id:"s4-1",number:"4.1",title:"Simple Future Tense",lead:"",details:[{title:"Fungsi",html:`<p>Simple Future digunakan untuk menyatakan:</p>
<ol>
<li>Keputusan spontan: <em>The phone is ringing. I will answer it.</em></li>
<li>Prediksi atau pendapat tentang masa depan: <em>I think it will rain.</em></li>
<li>Janji, tawaran, atau kesediaan: <em>I will help you.</em></li>
<li>Peristiwa yang akan terjadi: <em>The exam will begin at 8 a.m.</em></li>
</ol>
`},{title:"Rumus dengan will",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + will + V1 + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + will + not + V1 + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Will + S + V1 + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) She <strong>will visit</strong> her aunt tomorrow.</li>
<li>(−) She <strong>will not visit</strong> her aunt tomorrow.</li>
<li>(?) <strong>Will</strong> she <strong>visit</strong> her aunt tomorrow?</li>
</ul>
<p><em>Will not</em> dapat disingkat menjadi <em>won't</em>.</p>
`},{title:"Be going to",html:`<p><em>Be going to</em> adalah konstruksi masa depan yang umum digunakan untuk rencana atau prediksi berdasarkan tanda/bukti yang terlihat.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + am/is/are + going to + V1</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + am/is/are + not + going to + V1</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Am/Is/Are + S + going to + V1?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li><em>I am going to study tonight.</em> — Saya berencana belajar malam ini.</li>
<li><em>Look at those clouds. It is going to rain.</em> — Lihat awan itu. Sepertinya akan hujan.</li>
</ul>
<p>Perbedaan <em>will</em> dan <em>going to</em> membantu memahami konteks, tetapi dalam penggunaan nyata keduanya kadang dapat saling menggantikan.</p>
`}],search:"4.1 simple future tense ### fungsi simple future digunakan untuk menyatakan: keputusan spontan: the phone is ringing. i will answer it. prediksi atau pendapat tentang masa depan: i think it will rain. janji, tawaran, atau kesediaan: i will help you. peristiwa yang akan terjadi: the exam will begin at 8 a.m. rumus dengan will bentuk rumus positif (+) s + will + v1 + o/c negatif (−) s + will + not + v1 + o/c pertanyaan (?) will + s + v1 + o/c? contoh: (+) she will visit her aunt tomorrow. (−) she will not visit her aunt tomorrow. (?) will she visit her aunt tomorrow? will not dapat disingkat menjadi won't . be going to be going to adalah konstruksi masa depan yang umum digunakan untuk rencana atau prediksi berdasarkan tanda/bukti yang terlihat. bentuk rumus positif (+) s + am/is/are + going to + v1 negatif (−) s + am/is/are + not + going to + v1 pertanyaan (?) am/is/are + s + going to + v1? contoh: i am going to study tonight. — saya berencana belajar malam ini. look at those clouds. it is going to rain. — lihat awan itu. sepertinya akan hujan. perbedaan will dan going to membantu memahami konteks, tetapi dalam penggunaan nyata keduanya kadang dapat saling menggantikan."},{id:"s4-2",number:"4.2",title:"Future Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Future Continuous menyatakan aktivitas yang akan sedang berlangsung pada waktu tertentu di masa depan.</p>
<p>Contoh: <em>This time tomorrow, I will be traveling to Bandung.</em></p>
`},{title:"Rumus",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + will + be + V-ing + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + will + not + be + V-ing + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Will + S + be + V-ing + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) She <strong>will be studying</strong> at 8 p.m.</li>
<li>(−) She <strong>will not be studying</strong> at 8 p.m.</li>
<li>(?) <strong>Will</strong> she <strong>be studying</strong> at 8 p.m.?</li>
</ul>
`}],search:"4.2 future continuous tense ### fungsi future continuous menyatakan aktivitas yang akan sedang berlangsung pada waktu tertentu di masa depan. contoh: this time tomorrow, i will be traveling to bandung. rumus bentuk rumus positif (+) s + will + be + v-ing + o/c negatif (−) s + will + not + be + v-ing + o/c pertanyaan (?) will + s + be + v-ing + o/c? contoh: (+) she will be studying at 8 p.m. (−) she will not be studying at 8 p.m. (?) will she be studying at 8 p.m.?"},{id:"s4-3",number:"4.3",title:"Future Perfect Tense",lead:"",details:[{title:"Fungsi",html:`<p>Future Perfect menyatakan aktivitas yang diperkirakan sudah selesai sebelum waktu atau batas tertentu di masa depan.</p>
<p>Contoh: <em>I will have finished the report by Friday.</em></p>
`},{title:"Rumus",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + will + have + V3 + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + will + not + have + V3 + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Will + S + have + V3 + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) They <strong>will have completed</strong> the project by June.</li>
<li>(−) They <strong>will not have completed</strong> the project by June.</li>
<li>(?) <strong>Will</strong> they <strong>have completed</strong> the project by June?</li>
</ul>
`}],search:"4.3 future perfect tense ### fungsi future perfect menyatakan aktivitas yang diperkirakan sudah selesai sebelum waktu atau batas tertentu di masa depan. contoh: i will have finished the report by friday. rumus bentuk rumus positif (+) s + will + have + v3 + o/c negatif (−) s + will + not + have + v3 + o/c pertanyaan (?) will + s + have + v3 + o/c? contoh: (+) they will have completed the project by june. (−) they will not have completed the project by june. (?) will they have completed the project by june?"},{id:"s4-4",number:"4.4",title:"Future Perfect Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Future Perfect Continuous menekankan durasi aktivitas yang akan telah berlangsung sampai titik waktu tertentu di masa depan.</p>
<p>Contoh: <em>By next month, she will have been working here for two years.</em></p>
`},{title:"Rumus",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + will + have + been + V-ing + O/C</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + will + not + have + been + V-ing + O/C</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Will + S + have + been + V-ing + O/C?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) He <strong>will have been studying</strong> for four hours by 9 p.m.</li>
<li>(−) He <strong>will not have been studying</strong> for four hours by 9 p.m.</li>
<li>(?) <strong>Will</strong> he <strong>have been studying</strong> for four hours by 9 p.m.?</li>
</ul>
`}],search:"4.4 future perfect continuous tense ### fungsi future perfect continuous menekankan durasi aktivitas yang akan telah berlangsung sampai titik waktu tertentu di masa depan. contoh: by next month, she will have been working here for two years. rumus bentuk rumus positif (+) s + will + have + been + v-ing + o/c negatif (−) s + will + not + have + been + v-ing + o/c pertanyaan (?) will + s + have + been + v-ing + o/c? contoh: (+) he will have been studying for four hours by 9 p.m. (−) he will not have been studying for four hours by 9 p.m. (?) will he have been studying for four hours by 9 p.m.?"},{id:"s4-5",number:"4.5",title:"Future in the Past",lead:`<p><em>Future in the Past</em> menjelaskan sesuatu yang dianggap akan terjadi jika dilihat dari sudut pandang masa lalu. Bagian ini sering dipelajari bersama reported speech atau cerita masa lalu. Bentuk ini bukan kelompok tambahan dalam daftar 12 tenses utama yang umum dipakai di sekolah.</p>
`,details:[{title:"Would + V1",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + would + V1</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + would + not + V1</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Would + S + V1?</td>
</tr>
</tbody>
</table></div>
<p>Contoh: <em>She said that she would call me.</em> — Dia berkata bahwa dia akan menelepon saya.</p>
`},{title:"Was/Were going to + V1",html:`<p>Digunakan untuk rencana masa lalu yang akan dilakukan, baik terlaksana maupun tidak.</p>
<p>Contoh: <em>I was going to call you, but I lost your number.</em> — Saya tadinya akan meneleponmu, tetapi saya kehilangan nomormu.</p>
`},{title:"Bentuk Future in the Past lainnya",html:`<p><em>Would be + V-ing:</em> <em>He thought he would be working at noon.</em></p>
<ul>
<li><em>Would have + V3:</em> <em>She said she would have finished by Monday.</em></li>
<li><em>Would have been + V-ing:</em> <em>He knew he would have been waiting for an hour by then.</em></li>
</ul>
<p>Bentuk-bentuk tersebut lebih lanjut dan tidak perlu dianggap sebagai empat tenses utama baru.</p>
`}],search:"4.5 future in the past future in the past menjelaskan sesuatu yang dianggap akan terjadi jika dilihat dari sudut pandang masa lalu. bagian ini sering dipelajari bersama reported speech atau cerita masa lalu. bentuk ini bukan kelompok tambahan dalam daftar 12 tenses utama yang umum dipakai di sekolah. would + v1 bentuk rumus positif (+) s + would + v1 negatif (−) s + would + not + v1 pertanyaan (?) would + s + v1? contoh: she said that she would call me. — dia berkata bahwa dia akan menelepon saya. was/were going to + v1 digunakan untuk rencana masa lalu yang akan dilakukan, baik terlaksana maupun tidak. contoh: i was going to call you, but i lost your number. — saya tadinya akan meneleponmu, tetapi saya kehilangan nomormu. bentuk future in the past lainnya would be + v-ing: he thought he would be working at noon. would have + v3: she said she would have finished by monday. would have been + v-ing: he knew he would have been waiting for an hour by then. bentuk-bentuk tersebut lebih lanjut dan tidak perlu dianggap sebagai empat tenses utama baru."},{id:"s4-6",number:"4.6",title:"Ringkasan Future Tenses",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Tense</th>
<th>Rumus positif</th>
<th>Fokus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Simple Future</td>
<td>S + will + V1</td>
<td>Akan melakukan sesuatu</td>
</tr>
<tr>
<td>Future Continuous</td>
<td>S + will + be + V-ing</td>
<td>Akan sedang melakukan sesuatu</td>
</tr>
<tr>
<td>Future Perfect</td>
<td>S + will + have + V3</td>
<td>Akan sudah menyelesaikan sesuatu</td>
</tr>
<tr>
<td>Future Perfect Continuous</td>
<td>S + will + have + been + V-ing</td>
<td>Durasi aktivitas sampai titik masa depan</td>
</tr>
</tbody>
</table></div>
`,details:[],search:"4.6 ringkasan future tenses tense rumus positif fokus simple future s + will + v1 akan melakukan sesuatu future continuous s + will + be + v-ing akan sedang melakukan sesuatu future perfect s + will + have + v3 akan sudah menyelesaikan sesuatu future perfect continuous s + will + have + been + v-ing durasi aktivitas sampai titik masa depan"}],questions:["B4-01","B4-02","B4-03","B4-04","B4-05","B4-06","B4-07","B4-08"]},{id:5,title:"Passive voice",fullTitle:"Passive Voice",subtitle:"Active → passive · be + V3",intro:"",example:"The room is cleaned every day.",translation:"Ruangan itu dibersihkan setiap hari.",sections:[{id:"s5-1",number:"5.1",title:"Pengertian Passive Voice",lead:`<p>Passive Voice adalah bentuk kalimat yang menempatkan penerima tindakan sebagai subject. Passive digunakan ketika fokus utama adalah tindakan atau pihak/benda yang menerima tindakan, bukan pelakunya.</p>
<p>Bandingkan:</p>
<ul>
<li><strong>Active:</strong> The chef cooks the meal. — Koki memasak makanan.</li>
<li><strong>Passive:</strong> The meal is cooked by the chef. — Makanan dimasak oleh koki.</li>
</ul>
<p>Pada kalimat aktif, <em>the chef</em> adalah subject dan <em>the meal</em> adalah object. Pada kalimat pasif, object aktif berpindah menjadi subject pasif.</p>
`,details:[],search:"5.1 pengertian passive voice passive voice adalah bentuk kalimat yang menempatkan penerima tindakan sebagai subject. passive digunakan ketika fokus utama adalah tindakan atau pihak/benda yang menerima tindakan, bukan pelakunya. bandingkan: active: the chef cooks the meal. — koki memasak makanan. passive: the meal is cooked by the chef. — makanan dimasak oleh koki. pada kalimat aktif, the chef adalah subject dan the meal adalah object. pada kalimat pasif, object aktif berpindah menjadi subject pasif."},{id:"s5-2",number:"5.2",title:"Rumus dasar Passive Voice",lead:`<p><strong>Subject baru + to be sesuai tense + V3 + (by + pelaku)</strong></p>
<p>Contoh:</p>
<ul>
<li>Active: Someone cleans the room.</li>
<li>Passive: The room is cleaned (by someone).</li>
</ul>
<p>Kata kerja utama dalam Passive Voice menggunakan <strong>V3</strong>. Bentuk <em>to be</em> berubah mengikuti tense dan subject baru.</p>
`,details:[],search:"5.2 rumus dasar passive voice subject baru + to be sesuai tense + v3 + (by + pelaku) contoh: active: someone cleans the room. passive: the room is cleaned (by someone). kata kerja utama dalam passive voice menggunakan v3 . bentuk to be berubah mengikuti tense dan subject baru."},{id:"s5-3",number:"5.3",title:"Cara mengubah Active Voice menjadi Passive Voice",lead:`<ol>
<li>Temukan subject, verb, dan object pada kalimat aktif.</li>
<li>Pindahkan object aktif menjadi subject kalimat pasif.</li>
<li>Tentukan tense pada kalimat aktif.</li>
<li>Gunakan <em>to be</em> yang sesuai dengan tense dan subject baru.</li>
<li>Ubah verb utama menjadi V3.</li>
<li>Tambahkan <em>by + pelaku</em> jika pelakunya penting atau perlu disebutkan.</li>
</ol>
<p>Contoh langkah:</p>
<ul>
<li>Active: <strong>The students</strong> (S) <strong>clean</strong> (V1) <strong>the classroom</strong> (O).</li>
<li>Object aktif: <em>the classroom</em> menjadi subject pasif.</li>
<li>Tense: Simple Present.</li>
<li>Passive: <strong>The classroom is cleaned by the students.</strong></li>
</ul>
`,details:[],search:`5.3 cara mengubah active voice menjadi passive voice 1. temukan subject, verb, dan object pada kalimat aktif.
2. pindahkan object aktif menjadi subject kalimat pasif.
3. tentukan tense pada kalimat aktif.
4. gunakan to be yang sesuai dengan tense dan subject baru.
5. ubah verb utama menjadi v3.
6. tambahkan by + pelaku jika pelakunya penting atau perlu disebutkan. contoh langkah: active: the students (s) clean (v1) the classroom (o). object aktif: the classroom menjadi subject pasif. tense: simple present. passive: the classroom is cleaned by the students.`},{id:"s5-4",number:"5.4",title:"Passive Voice dalam berbagai tenses",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Tense</th>
<th>Rumus Passive Voice</th>
<th>Contoh</th>
</tr>
</thead>
<tbody>
<tr>
<td>Simple Present</td>
<td>S + am/is/are + V3</td>
<td>The room is cleaned.</td>
</tr>
<tr>
<td>Present Continuous</td>
<td>S + am/is/are + being + V3</td>
<td>The room is being cleaned.</td>
</tr>
<tr>
<td>Present Perfect</td>
<td>S + have/has + been + V3</td>
<td>The room has been cleaned.</td>
</tr>
<tr>
<td>Present Perfect Continuous</td>
<td>S + have/has + been + being + V3</td>
<td>The room has been being cleaned. (sangat jarang; biasanya dihindari)</td>
</tr>
<tr>
<td>Simple Past</td>
<td>S + was/were + V3</td>
<td>The room was cleaned.</td>
</tr>
<tr>
<td>Past Continuous</td>
<td>S + was/were + being + V3</td>
<td>The room was being cleaned.</td>
</tr>
<tr>
<td>Past Perfect</td>
<td>S + had + been + V3</td>
<td>The room had been cleaned.</td>
</tr>
<tr>
<td>Past Perfect Continuous</td>
<td>S + had + been + being + V3</td>
<td>The room had been being cleaned. (sangat jarang; biasanya dihindari)</td>
</tr>
<tr>
<td>Simple Future</td>
<td>S + will + be + V3</td>
<td>The room will be cleaned.</td>
</tr>
<tr>
<td>Future Continuous</td>
<td>S + will + be + being + V3</td>
<td>The room will be being cleaned. (jarang dan canggung)</td>
</tr>
<tr>
<td>Future Perfect</td>
<td>S + will + have + been + V3</td>
<td>The room will have been cleaned.</td>
</tr>
<tr>
<td>Future Perfect Continuous</td>
<td>S + will + have + been + being + V3</td>
<td>The room will have been being cleaned. (sangat jarang; biasanya dihindari)</td>
</tr>
</tbody>
</table></div>
<p>Bentuk passive yang memakai rangkaian <em>been being</em> secara tata bahasa dapat dibentuk, tetapi terdengar sangat berat dan jarang dipakai. Dalam komunikasi biasa, kalimat sering ditulis ulang agar lebih alami. Untuk pembelajaran sekolah, prioritaskan Simple Present, Simple Past, Simple Future, Present Continuous, Present Perfect, Past Continuous, dan Past Perfect Passive.</p>
`,details:[],search:"5.4 passive voice dalam berbagai tenses tense rumus passive voice contoh simple present s + am/is/are + v3 the room is cleaned. present continuous s + am/is/are + being + v3 the room is being cleaned. present perfect s + have/has + been + v3 the room has been cleaned. present perfect continuous s + have/has + been + being + v3 the room has been being cleaned. (sangat jarang; biasanya dihindari) simple past s + was/were + v3 the room was cleaned. past continuous s + was/were + being + v3 the room was being cleaned. past perfect s + had + been + v3 the room had been cleaned. past perfect continuous s + had + been + being + v3 the room had been being cleaned. (sangat jarang; biasanya dihindari) simple future s + will + be + v3 the room will be cleaned. future continuous s + will + be + being + v3 the room will be being cleaned. (jarang dan canggung) future perfect s + will + have + been + v3 the room will have been cleaned. future perfect continuous s + will + have + been + being + v3 the room will have been being cleaned. (sangat jarang; biasanya dihindari) bentuk passive yang memakai rangkaian been being secara tata bahasa dapat dibentuk, tetapi terdengar sangat berat dan jarang dipakai. dalam komunikasi biasa, kalimat sering ditulis ulang agar lebih alami. untuk pembelajaran sekolah, prioritaskan simple present, simple past, simple future, present continuous, present perfect, past continuous, dan past perfect passive."},{id:"s5-5",number:"5.5",title:"Passive Voice pada tiga tense yang paling sering dipelajari",lead:"",details:[{title:"A. Simple Present Passive",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + am/is/are + V3</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + am/is/are + not + V3</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Am/Is/Are + S + V3?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) The classroom <strong>is cleaned</strong> every morning.</li>
<li>(−) The classroom <strong>is not cleaned</strong> every morning.</li>
<li>(?) <strong>Is</strong> the classroom <strong>cleaned</strong> every morning?</li>
</ul>
`},{title:"B. Simple Past Passive",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + was/were + V3</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + was/were + not + V3</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Was/Were + S + V3?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) The bridge <strong>was built</strong> in 2010.</li>
<li>(−) The bridge <strong>was not built</strong> in 2010.</li>
<li>(?) <strong>Was</strong> the bridge <strong>built</strong> in 2010?</li>
</ul>
`},{title:"C. Simple Future Passive",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Bentuk</th>
<th>Rumus</th>
</tr>
</thead>
<tbody>
<tr>
<td>Positif (+)</td>
<td>S + will + be + V3</td>
</tr>
<tr>
<td>Negatif (−)</td>
<td>S + will + not + be + V3</td>
</tr>
<tr>
<td>Pertanyaan (?)</td>
<td>Will + S + be + V3?</td>
</tr>
</tbody>
</table></div>
<p>Contoh:</p>
<ul>
<li>(+) The invitations <strong>will be sent</strong> tomorrow.</li>
<li>(−) The invitations <strong>will not be sent</strong> tomorrow.</li>
<li>(?) <strong>Will</strong> the invitations <strong>be sent</strong> tomorrow?</li>
</ul>
`}],search:"5.5 passive voice pada tiga tense yang paling sering dipelajari ### a. simple present passive bentuk rumus positif (+) s + am/is/are + v3 negatif (−) s + am/is/are + not + v3 pertanyaan (?) am/is/are + s + v3? contoh: (+) the classroom is cleaned every morning. (−) the classroom is not cleaned every morning. (?) is the classroom cleaned every morning? b. simple past passive bentuk rumus positif (+) s + was/were + v3 negatif (−) s + was/were + not + v3 pertanyaan (?) was/were + s + v3? contoh: (+) the bridge was built in 2010. (−) the bridge was not built in 2010. (?) was the bridge built in 2010? c. simple future passive bentuk rumus positif (+) s + will + be + v3 negatif (−) s + will + not + be + v3 pertanyaan (?) will + s + be + v3? contoh: (+) the invitations will be sent tomorrow. (−) the invitations will not be sent tomorrow. (?) will the invitations be sent tomorrow?"},{id:"s5-6",number:"5.6",title:"Passive Voice dengan modal verbs",lead:`<p>Setelah modal seperti <em>can, could, may, might, must, should,</em> dan <em>ought to</em>, bentuk passive menggunakan <strong>be + V3</strong>.</p>
<p><strong>Rumus:</strong> S + modal + be + V3.</p>
<p>Contoh:</p>
<ul>
<li>Active: You must obey the rules.</li>
<li>Passive: The rules must be obeyed.</li>
<li>Active: They can repair the computer.</li>
<li>Passive: The computer can be repaired.</li>
</ul>
<p>Untuk modal perfect passive, gunakan <strong>modal + have been + V3</strong>.</p>
<p>Contoh: <em>The work should have been completed yesterday.</em></p>
`,details:[],search:"5.6 passive voice dengan modal verbs setelah modal seperti can, could, may, might, must, should, dan ought to , bentuk passive menggunakan be + v3 . rumus: s + modal + be + v3. contoh: active: you must obey the rules. passive: the rules must be obeyed. active: they can repair the computer. passive: the computer can be repaired. untuk modal perfect passive, gunakan modal + have been + v3 . contoh: the work should have been completed yesterday."},{id:"s5-7",number:"5.7",title:"Kapan pelaku dengan by boleh dihilangkan?",lead:`<p><em>By + agent</em> boleh dihilangkan jika:</p>
<ul>
<li>Pelaku tidak diketahui: <em>My bag was stolen.</em></li>
<li>Pelaku tidak penting: <em>The road is repaired every year.</em></li>
<li>Fokus kalimat memang pada hasil atau penerima tindakan.</li>
</ul>
<p>Sebutkan pelaku jika informasinya penting: <em>The song was written by my sister.</em></p>
`,details:[],search:"5.7 kapan pelaku dengan by boleh dihilangkan? by + agent boleh dihilangkan jika: pelaku tidak diketahui: my bag was stolen. pelaku tidak penting: the road is repaired every year. fokus kalimat memang pada hasil atau penerima tindakan. sebutkan pelaku jika informasinya penting: the song was written by my sister."},{id:"s5-8",number:"5.8",title:"Kalimat yang umumnya tidak dapat diubah menjadi passive",lead:`<p>Kalimat aktif biasanya memerlukan object langsung agar dapat diubah menjadi passive. Kata kerja tanpa object langsung (intransitive verbs) umumnya tidak dapat dipasifkan.</p>
<ul>
<li><em>The baby sleeps.</em> — Tidak memiliki object langsung, sehingga tidak memiliki bentuk passive biasa.</li>
<li><em>She arrived yesterday.</em> — <em>Arrive</em> tidak mengambil object langsung.</li>
<li><em>He opened the door.</em> — Memiliki object <em>the door</em>, sehingga dapat menjadi <em>The door was opened by him.</em></li>
</ul>
`,details:[],search:"5.8 kalimat yang umumnya tidak dapat diubah menjadi passive kalimat aktif biasanya memerlukan object langsung agar dapat diubah menjadi passive. kata kerja tanpa object langsung (intransitive verbs) umumnya tidak dapat dipasifkan. the baby sleeps. — tidak memiliki object langsung, sehingga tidak memiliki bentuk passive biasa. she arrived yesterday. — arrive tidak mengambil object langsung. he opened the door. — memiliki object the door , sehingga dapat menjadi the door was opened by him."},{id:"s5-9",number:"5.9",title:"Perubahan pronoun pada bagian by",lead:`<p>Jika subject kalimat aktif dipindahkan menjadi agent setelah <em>by</em>, gunakan object pronoun.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Subject aktif</th>
<th>Bentuk setelah by</th>
</tr>
</thead>
<tbody>
<tr>
<td>I</td>
<td>by me</td>
</tr>
<tr>
<td>You</td>
<td>by you</td>
</tr>
<tr>
<td>We</td>
<td>by us</td>
</tr>
<tr>
<td>They</td>
<td>by them</td>
</tr>
<tr>
<td>He</td>
<td>by him</td>
</tr>
<tr>
<td>She</td>
<td>by her</td>
</tr>
<tr>
<td>It</td>
<td>by it</td>
</tr>
</tbody>
</table></div>
<p>Contoh: <em>She writes the letter</em> → <em>The letter is written by her.</em></p>
`,details:[],search:"5.9 perubahan pronoun pada bagian by jika subject kalimat aktif dipindahkan menjadi agent setelah by , gunakan object pronoun. subject aktif bentuk setelah by i by me you by you we by us they by them he by him she by her it by it contoh: she writes the letter → the letter is written by her."}],questions:["B5-01","B5-02","B5-03","B5-04","B5-05","B5-06","B5-07","B5-08","B5-09","B5-10"]},{id:6,title:"Suggestions",fullTitle:"Giving and Asking for Suggestions",subtitle:"Asking · giving · responding",intro:"",example:"How about studying together?",translation:"Bagaimana kalau belajar bersama?",sections:[{id:"s6-1",number:"6.1",title:"Pengertian",lead:`<p><strong>Suggestion</strong> adalah saran atau usulan tentang tindakan yang dapat dilakukan seseorang untuk menghadapi situasi atau masalah. Materi ini mencakup cara meminta saran, memberi saran, menerima saran, dan menolak saran secara sopan.</p>
`,details:[],search:"6.1 pengertian suggestion adalah saran atau usulan tentang tindakan yang dapat dilakukan seseorang untuk menghadapi situasi atau masalah. materi ini mencakup cara meminta saran, memberi saran, menerima saran, dan menolak saran secara sopan."},{id:"s6-2",number:"6.2",title:"Asking for Suggestions (meminta saran)",lead:`<p>Ungkapan berikut digunakan untuk meminta saran atau ide dari orang lain.</p>
<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Expression</th>
<th>Arti</th>
</tr>
</thead>
<tbody>
<tr>
<td>What should I do?</td>
<td>Apa yang sebaiknya saya lakukan?</td>
</tr>
<tr>
<td>What do you suggest?</td>
<td>Apa saranmu?</td>
</tr>
<tr>
<td>Do you have any suggestions?</td>
<td>Apakah kamu punya saran?</td>
</tr>
<tr>
<td>Can you give me some advice?</td>
<td>Bisakah kamu memberi saya nasihat?</td>
</tr>
<tr>
<td>What do you think I should do?</td>
<td>Menurutmu apa yang sebaiknya saya lakukan?</td>
</tr>
<tr>
<td>Do you have any ideas?</td>
<td>Apakah kamu punya ide?</td>
</tr>
<tr>
<td>Could you recommend something?</td>
<td>Bisakah kamu merekomendasikan sesuatu?</td>
</tr>
<tr>
<td>What would you suggest?</td>
<td>Apa yang akan kamu sarankan?</td>
</tr>
</tbody>
</table></div>
<p><em>Advice</em> adalah uncountable noun (kata benda yang tidak dihitung satu per satu). Gunakan <em>some advice</em> atau <em>a piece of advice</em>, bukan <em>an advice</em>.</p>
`,details:[],search:"6.2 asking for suggestions (meminta saran) ungkapan berikut digunakan untuk meminta saran atau ide dari orang lain. expression arti what should i do? apa yang sebaiknya saya lakukan? what do you suggest? apa saranmu? do you have any suggestions? apakah kamu punya saran? can you give me some advice? bisakah kamu memberi saya nasihat? what do you think i should do? menurutmu apa yang sebaiknya saya lakukan? do you have any ideas? apakah kamu punya ide? could you recommend something? bisakah kamu merekomendasikan sesuatu? what would you suggest? apa yang akan kamu sarankan? advice adalah uncountable noun (kata benda yang tidak dihitung satu per satu). gunakan some advice atau a piece of advice , bukan an advice ."},{id:"s6-3",number:"6.3",title:"Giving Suggestions (memberikan saran)",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Expression</th>
<th>Arti</th>
</tr>
</thead>
<tbody>
<tr>
<td>You should study harder.</td>
<td>Kamu sebaiknya belajar lebih giat.</td>
</tr>
<tr>
<td>You ought to take a rest.</td>
<td>Kamu sebaiknya beristirahat.</td>
</tr>
<tr>
<td>You could ask your teacher.</td>
<td>Kamu bisa bertanya kepada gurumu.</td>
</tr>
<tr>
<td>Why don't you try again?</td>
<td>Mengapa kamu tidak mencoba lagi?</td>
</tr>
<tr>
<td>How about taking a break?</td>
<td>Bagaimana kalau beristirahat?</td>
</tr>
<tr>
<td>What about joining the club?</td>
<td>Bagaimana kalau bergabung dengan klub itu?</td>
</tr>
<tr>
<td>Let's make a study plan.</td>
<td>Mari membuat rencana belajar.</td>
</tr>
<tr>
<td>I suggest studying together.</td>
<td>Saya menyarankan belajar bersama.</td>
</tr>
<tr>
<td>If I were you, I would talk to the teacher.</td>
<td>Kalau saya menjadi kamu, saya akan berbicara dengan guru.</td>
</tr>
</tbody>
</table></div>
`,details:[],search:"6.3 giving suggestions (memberikan saran) expression arti you should study harder. kamu sebaiknya belajar lebih giat. you ought to take a rest. kamu sebaiknya beristirahat. you could ask your teacher. kamu bisa bertanya kepada gurumu. why don't you try again? mengapa kamu tidak mencoba lagi? how about taking a break? bagaimana kalau beristirahat? what about joining the club? bagaimana kalau bergabung dengan klub itu? let's make a study plan. mari membuat rencana belajar. i suggest studying together. saya menyarankan belajar bersama. if i were you, i would talk to the teacher. kalau saya menjadi kamu, saya akan berbicara dengan guru."},{id:"s6-4",number:"6.4",title:"Pola grammar untuk suggestions",lead:"",details:[{title:"A. Should + V1",html:`<p>Digunakan untuk memberikan saran atau anjuran.</p>
<p><strong>Rumus:</strong> S + should + V1 + (O/C).</p>
<p>Contoh: <em>You should drink more water.</em></p>
<p>Negatif: <em>You should not (shouldn't) skip breakfast.</em></p>
<p>Pertanyaan: <em>Should I call the doctor?</em></p>
`},{title:"B. Ought to + V1",html:`<p>Menyatakan saran atau sesuatu yang dianggap sebaiknya dilakukan.</p>
<p><strong>Rumus:</strong> S + ought to + V1 + (O/C).</p>
<p>Contoh: <em>You ought to apologize.</em></p>
`},{title:"C. Could + V1",html:`<p>Menawarkan salah satu pilihan yang mungkin dilakukan.</p>
<p><strong>Rumus:</strong> S + could + V1 + (O/C).</p>
<p>Contoh: <em>You could use a dictionary.</em></p>
`},{title:"D. Why don't you + V1 ...?",html:`<p>Bentuk pertanyaan yang berfungsi sebagai saran.</p>
<p>Contoh: <em>Why don't you ask your parents?</em></p>
`},{title:"E. How about / What about + noun atau V-ing?",html:`<p>Contoh:</p>
<ul>
<li><em>How about a cup of tea?</em> — noun.</li>
<li><em>How about taking a short break?</em> — V-ing.</li>
<li><em>What about studying together?</em> — V-ing.</li>
</ul>
<p>Jangan gunakan V1 langsung setelah <em>How about</em> jika yang dimaksud adalah kegiatan: <em>How about study together</em> tidak tepat. Gunakan <em>How about studying together?</em></p>
`},{title:"F. Let's + V1",html:`<p>Digunakan untuk mengajak seseorang melakukan sesuatu bersama.</p>
<p>Contoh: <em>Let's review the lesson.</em></p>
<p>Bentuk negatif: <em>Let's not waste time.</em></p>
`},{title:"G. Suggest + V-ing atau suggest (that) + clause",html:`<p>Contoh:</p>
<ul>
<li><em>I suggest taking a taxi.</em></li>
<li><em>I suggest that you take a taxi.</em></li>
</ul>
<p>Dalam pola kedua, bentuk dasar <em>take</em> digunakan setelah <em>suggest that</em> pada konstruksi subjunctive; bentuk <em>should take</em> juga digunakan dalam beberapa variasi bahasa Inggris.</p>
`}],search:"6.4 pola grammar untuk suggestions ### a. should + v1 digunakan untuk memberikan saran atau anjuran. rumus: s + should + v1 + (o/c). contoh: you should drink more water. negatif: you should not (shouldn't) skip breakfast. pertanyaan: should i call the doctor? b. ought to + v1 menyatakan saran atau sesuatu yang dianggap sebaiknya dilakukan. rumus: s + ought to + v1 + (o/c). contoh: you ought to apologize. c. could + v1 menawarkan salah satu pilihan yang mungkin dilakukan. rumus: s + could + v1 + (o/c). contoh: you could use a dictionary. d. why don't you + v1 ...? bentuk pertanyaan yang berfungsi sebagai saran. contoh: why don't you ask your parents? e. how about / what about + noun atau v-ing? contoh: how about a cup of tea? — noun. how about taking a short break? — v-ing. what about studying together? — v-ing. jangan gunakan v1 langsung setelah how about jika yang dimaksud adalah kegiatan: how about study together tidak tepat. gunakan how about studying together? f. let's + v1 digunakan untuk mengajak seseorang melakukan sesuatu bersama. contoh: let's review the lesson. bentuk negatif: let's not waste time. g. suggest + v-ing atau suggest (that) + clause contoh: i suggest taking a taxi. i suggest that you take a taxi. dalam pola kedua, bentuk dasar take digunakan setelah suggest that pada konstruksi subjunctive; bentuk should take juga digunakan dalam beberapa variasi bahasa inggris."},{id:"s6-5",number:"6.5",title:"Accepting Suggestions (menerima saran)",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Expression</th>
<th>Arti</th>
</tr>
</thead>
<tbody>
<tr>
<td>That's a good idea.</td>
<td>Itu ide yang bagus.</td>
</tr>
<tr>
<td>I agree with you.</td>
<td>Saya setuju denganmu.</td>
</tr>
<tr>
<td>That sounds helpful.</td>
<td>Kedengarannya membantu.</td>
</tr>
<tr>
<td>Thanks for your suggestion.</td>
<td>Terima kasih atas sarannya.</td>
</tr>
<tr>
<td>I'll try that.</td>
<td>Saya akan mencobanya.</td>
</tr>
</tbody>
</table></div>
`,details:[],search:"6.5 accepting suggestions (menerima saran) expression arti that's a good idea. itu ide yang bagus. i agree with you. saya setuju denganmu. that sounds helpful. kedengarannya membantu. thanks for your suggestion. terima kasih atas sarannya. i'll try that. saya akan mencobanya."},{id:"s6-6",number:"6.6",title:"Rejecting Suggestions (menolak saran dengan sopan)",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Expression</th>
<th>Arti</th>
</tr>
</thead>
<tbody>
<tr>
<td>I'm not sure about that.</td>
<td>Saya belum yakin dengan itu.</td>
</tr>
<tr>
<td>Thanks, but I have another plan.</td>
<td>Terima kasih, tetapi saya punya rencana lain.</td>
</tr>
<tr>
<td>I don't think that will work for me.</td>
<td>Saya rasa itu tidak cocok untuk saya.</td>
</tr>
<tr>
<td>That's a good idea, but...</td>
<td>Itu ide bagus, tetapi ...</td>
</tr>
</tbody>
</table></div>
<p>Menolak saran sebaiknya dilakukan dengan sopan. Berikan alasan singkat jika diperlukan.</p>
`,details:[],search:"6.6 rejecting suggestions (menolak saran dengan sopan) expression arti i'm not sure about that. saya belum yakin dengan itu. thanks, but i have another plan. terima kasih, tetapi saya punya rencana lain. i don't think that will work for me. saya rasa itu tidak cocok untuk saya. that's a good idea, but... itu ide bagus, tetapi ... menolak saran sebaiknya dilakukan dengan sopan. berikan alasan singkat jika diperlukan."},{id:"s6-7",number:"6.7",title:"Contoh dialog",lead:`<p><strong>Situation:</strong> Rina feels tired because she studies late every night.</p>
<ul>
<li><strong>Rina:</strong> I feel tired every morning. What should I do?</li>
<li><strong>Dina:</strong> You should go to bed earlier.</li>
<li><strong>Rina:</strong> That's a good idea. I will try to sleep before 10 p.m.</li>
<li><strong>Dina:</strong> You could also make a study schedule.</li>
<li><strong>Rina:</strong> Thanks for your suggestions.</li>
</ul>
<p>Dialog tersebut menggunakan modal <em>should</em> dan <em>could</em> untuk memberi saran. Kata kerja setelah keduanya memakai V1.</p>
`,details:[],search:"6.7 contoh dialog situation: rina feels tired because she studies late every night. rina: i feel tired every morning. what should i do? dina: you should go to bed earlier. rina: that's a good idea. i will try to sleep before 10 p.m. dina: you could also make a study schedule. rina: thanks for your suggestions. dialog tersebut menggunakan modal should dan could untuk memberi saran. kata kerja setelah keduanya memakai v1."},{id:"s6-8",number:"6.8",title:"Apakah suggestions selalu menggunakan Simple Present?",lead:`<p>Tidak selalu. Ungkapan saran sering memakai modal seperti <em>should, could,</em> dan <em>would</em>. Modal diikuti V1 dan tidak berubah menjadi <em>-s</em> untuk he/she/it.</p>
<ul>
<li>Benar: <em>She should study.</em></li>
<li>Salah: <em>She should studies.</em></li>
</ul>
<p>Kalimat pembuka seperti <em>What do you suggest?</em> menggunakan Simple Present. Namun, pola <em>should + V1</em> adalah konstruksi modal, bukan Simple Present biasa. Untuk <em>How about studying?</em>, gunakan V-ing.</p>
`,details:[],search:"6.8 apakah suggestions selalu menggunakan simple present? tidak selalu. ungkapan saran sering memakai modal seperti should, could, dan would . modal diikuti v1 dan tidak berubah menjadi -s untuk he/she/it. benar: she should study. salah: she should studies. kalimat pembuka seperti what do you suggest? menggunakan simple present. namun, pola should + v1 adalah konstruksi modal, bukan simple present biasa. untuk how about studying? , gunakan v-ing."}],questions:["B6-01","B6-02","B6-03","B6-04","B6-05","B6-06","B6-07","B6-08"]},{id:7,title:"Procedure text",fullTitle:"Procedure Text",subtitle:"Goal · materials · steps",intro:"",example:"First, boil the water.",translation:"Pertama, didihkan airnya.",sections:[{id:"s7-1",number:"7.1",title:"Pengertian Procedure Text",lead:`<p>Procedure Text adalah teks yang menjelaskan cara melakukan, membuat, menggunakan, atau menjalankan sesuatu melalui langkah-langkah yang tersusun secara berurutan.</p>
<p>Contoh topik:</p>
<ul>
<li>How to Make Fried Rice.</li>
<li>How to Use a Printer.</li>
<li>How to Create an Email Account.</li>
<li>How to Make a Cup of Tea.</li>
<li>How to Save a Document on a Computer.</li>
</ul>
`,details:[],search:"7.1 pengertian procedure text procedure text adalah teks yang menjelaskan cara melakukan, membuat, menggunakan, atau menjalankan sesuatu melalui langkah-langkah yang tersusun secara berurutan. contoh topik: how to make fried rice. how to use a printer. how to create an email account. how to make a cup of tea. how to save a document on a computer."},{id:"s7-2",number:"7.2",title:"Tujuan Procedure Text",lead:`<p>Tujuan utamanya adalah memberi petunjuk agar pembaca dapat menyelesaikan suatu pekerjaan atau menghasilkan sesuatu dengan benar. Teks harus disusun secara logis, jelas, dan berurutan.</p>
`,details:[],search:"7.2 tujuan procedure text tujuan utamanya adalah memberi petunjuk agar pembaca dapat menyelesaikan suatu pekerjaan atau menghasilkan sesuatu dengan benar. teks harus disusun secara logis, jelas, dan berurutan."},{id:"s7-3",number:"7.3",title:"Generic Structure (struktur umum)",lead:"",details:[{title:"A. Goal / Aim / Title",html:`<p>Menjelaskan tujuan atau hasil yang ingin dicapai.</p>
<p>Contoh: <strong>How to Make a Cup of Tea</strong>.</p>
`},{title:"B. Materials / Ingredients / Tools",html:`<p>Berisi bahan, alat, atau hal yang dibutuhkan. Bagian ini dapat berbeda sesuai topik. Resep biasanya mencantumkan ingredients, sedangkan petunjuk penggunaan alat lebih sering mencantumkan tools atau equipment.</p>
<p>Contoh:</p>
<ul>
<li>A tea bag.</li>
<li>A cup of hot water.</li>
<li>Sugar.</li>
<li>A spoon.</li>
</ul>
`},{title:"C. Steps / Methods",html:`<p>Menjelaskan tahapan dari awal hingga akhir. Setiap langkah perlu ditulis dalam urutan yang masuk akal.</p>
<p>Contoh:</p>
<ol>
<li>Prepare a cup and a tea bag.</li>
<li>Pour hot water into the cup.</li>
<li>Put the tea bag into the cup.</li>
<li>Wait for three minutes.</li>
<li>Add sugar and stir well.</li>
<li>Serve the tea.</li>
</ol>
`},{title:"Bagian tambahan",html:`<p>Teks tertentu dapat memiliki warning, caution, tips, atau expected result. Bagian ini bukan pengganti tiga struktur utama, tetapi dapat membantu pembaca.</p>
`}],search:"7.3 generic structure (struktur umum) ### a. goal / aim / title menjelaskan tujuan atau hasil yang ingin dicapai. contoh: how to make a cup of tea . b. materials / ingredients / tools berisi bahan, alat, atau hal yang dibutuhkan. bagian ini dapat berbeda sesuai topik. resep biasanya mencantumkan ingredients, sedangkan petunjuk penggunaan alat lebih sering mencantumkan tools atau equipment. contoh: a tea bag. a cup of hot water. sugar. a spoon. c. steps / methods menjelaskan tahapan dari awal hingga akhir. setiap langkah perlu ditulis dalam urutan yang masuk akal. contoh: prepare a cup and a tea bag. pour hot water into the cup. put the tea bag into the cup. wait for three minutes. add sugar and stir well. serve the tea. bagian tambahan teks tertentu dapat memiliki warning, caution, tips, atau expected result. bagian ini bukan pengganti tiga struktur utama, tetapi dapat membantu pembaca."},{id:"s7-4",number:"7.4",title:"Language Features (ciri kebahasaan)",lead:"",details:[{title:"A. Imperative sentences (kalimat perintah/instruksi)",html:`<p>Imperative digunakan untuk meminta pembaca melakukan suatu tindakan. Subject <em>you</em> biasanya tidak ditulis.</p>
<p><strong>Pola dasar:</strong> V1 + object/complement.</p>
<p>Contoh:</p>
<ul>
<li><em>Cut the onions.</em> — Potong bawangnya.</li>
<li><em>Add some salt.</em> — Tambahkan sedikit garam.</li>
<li><em>Mix the ingredients.</em> — Campurkan bahan-bahannya.</li>
<li><em>Open the application.</em> — Buka aplikasinya.</li>
</ul>
<p>Untuk larangan, gunakan <strong>Do not/Don't + V1</strong>.</p>
<p>Contoh: <em>Do not touch the hot pan.</em></p>
`},{title:"B. Simple Present Tense",html:`<p>Simple Present digunakan saat teks menyatakan fakta umum, fungsi alat, atau informasi yang berlaku secara umum.</p>
<p>Contoh:</p>
<ul>
<li><em>A printer uses ink or toner to produce printed documents.</em></li>
<li><em>The mixture becomes thicker when it cools.</em></li>
</ul>
<p>Ingat: langkah instruksi langsung seperti <em>Pour the water</em> adalah imperative, bukan kalimat Simple Present biasa dengan subject yang ditulis.</p>
`},{title:"C. Action verbs (kata kerja tindakan)",html:`<p>Contoh: <em>cut, mix, pour, boil, fry, stir, press, turn on, select, click, save,</em> dan <em>connect</em>.</p>
`},{title:"D. Sequencing words (kata pengurut)",html:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Word/Phrase</th>
<th>Arti</th>
</tr>
</thead>
<tbody>
<tr>
<td>First</td>
<td>Pertama</td>
</tr>
<tr>
<td>First of all</td>
<td>Pertama-tama</td>
</tr>
<tr>
<td>Second</td>
<td>Kedua</td>
</tr>
<tr>
<td>Next</td>
<td>Selanjutnya</td>
</tr>
<tr>
<td>Then</td>
<td>Kemudian</td>
</tr>
<tr>
<td>After that</td>
<td>Setelah itu</td>
</tr>
<tr>
<td>Meanwhile</td>
<td>Sementara itu</td>
</tr>
<tr>
<td>Before</td>
<td>Sebelum</td>
</tr>
<tr>
<td>After</td>
<td>Sesudah</td>
</tr>
<tr>
<td>Finally</td>
<td>Terakhir</td>
</tr>
</tbody>
</table></div>
`},{title:"E. Adverbs (kata keterangan)",html:`<p>Kata keterangan membantu menjelaskan cara, waktu, atau tingkat tindakan.</p>
<ul>
<li>Carefully — dengan hati-hati.</li>
<li>Slowly — secara perlahan.</li>
<li>Thoroughly — secara menyeluruh.</li>
<li>Gently — dengan lembut.</li>
<li>Immediately — segera.</li>
</ul>
<p>Contoh: <em>Stir the mixture slowly.</em></p>
`},{title:"F. Measurements and quantities",html:`<p>Petunjuk sering memerlukan ukuran yang jelas, misalnya <em>one cup, two teaspoons, 200 milliliters,</em> atau <em>for five minutes</em>.</p>
`},{title:"G. Passive Voice",html:`<p>Passive Voice dapat digunakan jika perhatian diarahkan pada proses atau benda yang diproses.</p>
<p>Contoh:</p>
<ul>
<li>Active: <em>Heat the water.</em> (instruksi langsung)</li>
<li>Passive: <em>The water is heated to 80°C.</em> (penjelasan proses)</li>
</ul>
`}],search:"7.4 language features (ciri kebahasaan) ### a. imperative sentences (kalimat perintah/instruksi) imperative digunakan untuk meminta pembaca melakukan suatu tindakan. subject you biasanya tidak ditulis. pola dasar: v1 + object/complement. contoh: cut the onions. — potong bawangnya. add some salt. — tambahkan sedikit garam. mix the ingredients. — campurkan bahan-bahannya. open the application. — buka aplikasinya. untuk larangan, gunakan do not/don't + v1 . contoh: do not touch the hot pan. b. simple present tense simple present digunakan saat teks menyatakan fakta umum, fungsi alat, atau informasi yang berlaku secara umum. contoh: a printer uses ink or toner to produce printed documents. the mixture becomes thicker when it cools. ingat: langkah instruksi langsung seperti pour the water adalah imperative, bukan kalimat simple present biasa dengan subject yang ditulis. c. action verbs (kata kerja tindakan) contoh: cut, mix, pour, boil, fry, stir, press, turn on, select, click, save, dan connect . d. sequencing words (kata pengurut) word/phrase arti first pertama first of all pertama-tama second kedua next selanjutnya then kemudian after that setelah itu meanwhile sementara itu before sebelum after sesudah finally terakhir e. adverbs (kata keterangan) kata keterangan membantu menjelaskan cara, waktu, atau tingkat tindakan. carefully — dengan hati-hati. slowly — secara perlahan. thoroughly — secara menyeluruh. gently — dengan lembut. immediately — segera. contoh: stir the mixture slowly. f. measurements and quantities petunjuk sering memerlukan ukuran yang jelas, misalnya one cup, two teaspoons, 200 milliliters, atau for five minutes . g. passive voice passive voice dapat digunakan jika perhatian diarahkan pada proses atau benda yang diproses. contoh: active: heat the water. (instruksi langsung) passive: the water is heated to 80°c. (penjelasan proses)"},{id:"s7-5",number:"7.5",title:"Tense apa yang digunakan dalam Procedure Text?",lead:`<p>Procedure Text umumnya memakai:</p>
<ol>
<li><strong>Imperative:</strong> bentuk paling umum untuk langkah instruksi, contohnya <em>Add the sugar.</em></li>
<li><strong>Simple Present:</strong> untuk fakta umum, fungsi, dan penjelasan proses, contohnya <em>The machine uses electricity.</em></li>
<li><strong>Simple Present Passive:</strong> untuk menjelaskan proses yang berfokus pada benda, contohnya <em>The ingredients are mixed together.</em></li>
</ol>
<p>Karena langkah utama biasanya berupa perintah, jangan menganggap semua kalimat Procedure Text harus berbentuk Simple Present dengan subject dan verb yang lengkap.</p>
`,details:[],search:"7.5 tense apa yang digunakan dalam procedure text? procedure text umumnya memakai: imperative: bentuk paling umum untuk langkah instruksi, contohnya add the sugar. simple present: untuk fakta umum, fungsi, dan penjelasan proses, contohnya the machine uses electricity. simple present passive: untuk menjelaskan proses yang berfokus pada benda, contohnya the ingredients are mixed together. karena langkah utama biasanya berupa perintah, jangan menganggap semua kalimat procedure text harus berbentuk simple present dengan subject dan verb yang lengkap."},{id:"s7-6",number:"7.6",title:"Contoh Procedure Text lengkap",lead:"",details:[{title:"How to Make a Cup of Tea",html:`<p><strong>Goal</strong><br/>
To make a simple cup of tea.</p>
<p><strong>Materials and Equipment</strong></p>
<ul>
<li>One tea bag.</li>
<li>One cup of hot water.</li>
<li>Sugar or honey (optional).</li>
<li>A cup and a spoon.</li>
</ul>
<p><strong>Steps</strong></p>
<ol>
<li>First, prepare a clean cup and a tea bag.</li>
<li>Then, pour hot water into the cup carefully.</li>
<li>Put the tea bag into the hot water.</li>
<li>Wait for three to five minutes.</li>
<li>Remove the tea bag.</li>
<li>Add sugar or honey if you like.</li>
<li>Finally, stir the tea and serve it.</li>
</ol>
<p><strong>Language features in the example:</strong></p>
<ul>
<li>Imperative verbs: <em>prepare, pour, put, wait, remove, add, stir,</em> dan <em>serve</em>.</li>
<li>Sequencing words: <em>first, then,</em> dan <em>finally</em>.</li>
<li>Adverb: <em>carefully</em>.</li>
<li>Simple Present tidak harus muncul pada setiap langkah karena langkahnya menggunakan imperative.</li>
</ul>
`}],search:"7.6 contoh procedure text lengkap ### how to make a cup of tea goal to make a simple cup of tea. materials and equipment one tea bag. one cup of hot water. sugar or honey (optional). a cup and a spoon. steps first, prepare a clean cup and a tea bag. then, pour hot water into the cup carefully. put the tea bag into the hot water. wait for three to five minutes. remove the tea bag. add sugar or honey if you like. finally, stir the tea and serve it. language features in the example: imperative verbs: prepare, pour, put, wait, remove, add, stir, dan serve . sequencing words: first, then, dan finally . adverb: carefully . simple present tidak harus muncul pada setiap langkah karena langkahnya menggunakan imperative."},{id:"s7-7",number:"7.7",title:"Tips menulis Procedure Text",lead:`<p>Gunakan judul yang menjelaskan tujuan.</p>
<ul>
<li>Cantumkan alat dan bahan jika memang diperlukan.</li>
<li>Susun langkah berdasarkan urutan pengerjaan.</li>
<li>Gunakan satu instruksi utama yang jelas pada setiap langkah.</li>
<li>Pilih kata kerja tindakan yang tepat.</li>
<li>Gunakan ukuran, durasi, atau peringatan jika diperlukan.</li>
<li>Hindari langkah yang melompat atau informasi yang tidak lengkap.</li>
</ul>
`,details:[],search:"7.7 tips menulis procedure text - gunakan judul yang menjelaskan tujuan. cantumkan alat dan bahan jika memang diperlukan. susun langkah berdasarkan urutan pengerjaan. gunakan satu instruksi utama yang jelas pada setiap langkah. pilih kata kerja tindakan yang tepat. gunakan ukuran, durasi, atau peringatan jika diperlukan. hindari langkah yang melompat atau informasi yang tidak lengkap."}],questions:["B7-01","B7-02","B7-03","B7-04","B7-05","B7-06","B7-07","B7-08"]},{id:8,title:"Mixed review",fullTitle:"Mixed Review: Gabungan Seluruh Materi",subtitle:"Perbandingan pola & konteks",intro:`<p>Bab ini menggabungkan grammar dasar, Present Tenses, Past Tenses, Future Tenses, Passive Voice, Suggestions, dan Procedure Text. Tujuannya adalah melatih pemilihan pola berdasarkan konteks, bukan hanya menghafal nama tense.</p>
`,example:"You should study. / How about studying?",translation:"Should + V1 · How about + V-ing",sections:[{id:"s8-1",number:"8.1",title:"Cara menentukan tense dalam soal",lead:`<p>Gunakan urutan pemeriksaan berikut:</p>
<ol>
<li><strong>Cari konteks waktu.</strong> Apakah kalimat membicarakan kebiasaan, sekarang, masa lalu, atau masa depan?</li>
<li><strong>Periksa makna tindakan.</strong> Apakah tindakan berupa kebiasaan, sedang berlangsung, sudah selesai, atau menekankan durasi?</li>
<li><strong>Cari penanda waktu.</strong> Misalnya <em>every day, now, yesterday, since, for, by tomorrow</em>. Penanda waktu membantu, tetapi bukan satu-satunya penentu.</li>
<li><strong>Periksa bentuk kalimat.</strong> Apakah verbal, nominal, pertanyaan, negatif, perintah, atau passive?</li>
<li><strong>Cocokkan subject dan verb.</strong> Perhatikan <em>do/does, was/were, has/have,</em> serta bentuk V1/V2/V3/V-ing.</li>
</ol>
`,details:[],search:"8.1 cara menentukan tense dalam soal gunakan urutan pemeriksaan berikut: cari konteks waktu. apakah kalimat membicarakan kebiasaan, sekarang, masa lalu, atau masa depan? periksa makna tindakan. apakah tindakan berupa kebiasaan, sedang berlangsung, sudah selesai, atau menekankan durasi? cari penanda waktu. misalnya every day, now, yesterday, since, for, by tomorrow . penanda waktu membantu, tetapi bukan satu-satunya penentu. periksa bentuk kalimat. apakah verbal, nominal, pertanyaan, negatif, perintah, atau passive? cocokkan subject dan verb. perhatikan do/does, was/were, has/have, serta bentuk v1/v2/v3/v-ing."},{id:"s8-2",number:"8.2",title:"Perbandingan cepat",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
<thead>
<tr>
<th>Makna</th>
<th>Contoh</th>
<th>Pola</th>
</tr>
</thead>
<tbody>
<tr>
<td>Kebiasaan</td>
<td>She studies every day.</td>
<td>Simple Present</td>
</tr>
<tr>
<td>Sedang berlangsung sekarang</td>
<td>She is studying now.</td>
<td>Present Continuous</td>
</tr>
<tr>
<td>Sudah terjadi dan relevan sekarang</td>
<td>She has finished her work.</td>
<td>Present Perfect</td>
</tr>
<tr>
<td>Berlangsung sejak masa lalu</td>
<td>She has been studying for two hours.</td>
<td>Present Perfect Continuous</td>
</tr>
<tr>
<td>Selesai di masa lalu</td>
<td>She studied yesterday.</td>
<td>Simple Past</td>
</tr>
<tr>
<td>Sedang berlangsung pada masa lalu</td>
<td>She was studying at 8 p.m.</td>
<td>Past Continuous</td>
</tr>
<tr>
<td>Selesai sebelum kejadian lampau lain</td>
<td>She had studied before dinner.</td>
<td>Past Perfect</td>
</tr>
<tr>
<td>Berdurasi sebelum kejadian lampau lain</td>
<td>She had been studying for an hour before dinner.</td>
<td>Past Perfect Continuous</td>
</tr>
<tr>
<td>Akan dilakukan</td>
<td>She will study tomorrow.</td>
<td>Simple Future</td>
</tr>
<tr>
<td>Akan sedang berlangsung</td>
<td>She will be studying at 8 p.m.</td>
<td>Future Continuous</td>
</tr>
<tr>
<td>Akan sudah selesai sebelum batas waktu</td>
<td>She will have studied by 9 p.m.</td>
<td>Future Perfect</td>
</tr>
<tr>
<td>Akan sudah berlangsung selama durasi tertentu</td>
<td>She will have been studying for two hours by 9 p.m.</td>
<td>Future Perfect Continuous</td>
</tr>
</tbody>
</table></div>
`,details:[],search:"8.2 perbandingan cepat makna contoh pola kebiasaan she studies every day. simple present sedang berlangsung sekarang she is studying now. present continuous sudah terjadi dan relevan sekarang she has finished her work. present perfect berlangsung sejak masa lalu she has been studying for two hours. present perfect continuous selesai di masa lalu she studied yesterday. simple past sedang berlangsung pada masa lalu she was studying at 8 p.m. past continuous selesai sebelum kejadian lampau lain she had studied before dinner. past perfect berdurasi sebelum kejadian lampau lain she had been studying for an hour before dinner. past perfect continuous akan dilakukan she will study tomorrow. simple future akan sedang berlangsung she will be studying at 8 p.m. future continuous akan sudah selesai sebelum batas waktu she will have studied by 9 p.m. future perfect akan sudah berlangsung selama durasi tertentu she will have been studying for two hours by 9 p.m. future perfect continuous"},{id:"s8-3",number:"8.3",title:"Perbandingan pola yang sering tertukar",lead:"",details:[{title:"Do/does/did dibanding am/is/are/was/were",html:`<p>Gunakan <strong>do/does/did</strong> untuk pertanyaan dan negatif kalimat verbal Simple Present/Simple Past.</p>
<ul>
<li>Gunakan <strong>am/is/are/was/were</strong> untuk kalimat nominal dan sebagai auxiliary pada continuous atau passive sesuai tense.</li>
</ul>
`},{title:"V2 dibanding have/has + V3",html:`<p><em>I saw him yesterday.</em> — Simple Past, waktu lampau disebut spesifik.</p>
<ul>
<li><em>I have seen him before.</em> — Present Perfect, pengalaman tanpa waktu lampau spesifik.</li>
</ul>
`},{title:"V-ing dibanding V3",html:`<p><em>She is writing a report.</em> — Continuous aktif: be + V-ing.</p>
<ul>
<li><em>The report is written by her.</em> — Passive: be + V3.</li>
</ul>
`},{title:"Should + V1 dibanding How about + V-ing",html:`<p><em>You should study.</em></p>
<ul>
<li><em>How about studying?</em></li>
</ul>
`},{title:"Imperative dibanding Simple Present",html:`<p><em>Turn off the computer.</em> — Instruksi/perintah (imperative).</p>
<ul>
<li><em>The computer turns off automatically.</em> — Pernyataan Simple Present.</li>
</ul>
`}],search:"8.3 perbandingan pola yang sering tertukar ### do/does/did dibanding am/is/are/was/were gunakan do/does/did untuk pertanyaan dan negatif kalimat verbal simple present/simple past. gunakan am/is/are/was/were untuk kalimat nominal dan sebagai auxiliary pada continuous atau passive sesuai tense. v2 dibanding have/has + v3 i saw him yesterday. — simple past, waktu lampau disebut spesifik. i have seen him before. — present perfect, pengalaman tanpa waktu lampau spesifik. v-ing dibanding v3 she is writing a report. — continuous aktif: be + v-ing. the report is written by her. — passive: be + v3. should + v1 dibanding how about + v-ing you should study. how about studying? imperative dibanding simple present turn off the computer. — instruksi/perintah (imperative). the computer turns off automatically. — pernyataan simple present."}],questions:["B8-01","B8-02","B8-03","B8-04","B8-05","B8-06","B8-07","B8-08","B8-09","B8-10","B8-11","B8-12"]}],questions:[{id:"B1-01",chapter:1,prompt:`<p>Bentuk V2 dari <em>go</em> adalah ....</p>
`,options:[{id:"B1-01-A",html:`<p>gone</p>
`,text:"gone"},{id:"B1-01-B",html:`<p>going</p>
`,text:"going"},{id:"B1-01-C",html:`<p>went</p>
`,text:"went"},{id:"B1-01-D",html:`<p>goes</p>
`,text:"goes"}],correct:"B1-01-C",explanation:`<p>V2 dari <em>go</em> adalah <em>went</em>.</p>
`,group:1},{id:"B1-02",chapter:1,prompt:`<p>Kalimat yang menggunakan object pronoun dengan benar adalah ....</p>
`,options:[{id:"B1-02-A",html:`<p>Her helps I.</p>
`,text:"Her helps I."},{id:"B1-02-B",html:`<p>She helps me.</p>
`,text:"She helps me."},{id:"B1-02-C",html:`<p>Him helps she.</p>
`,text:"Him helps she."},{id:"B1-02-D",html:`<p>Me help she.</p>
`,text:"Me help she."}],correct:"B1-02-B",explanation:`<p><em>She</em> adalah subject pronoun dan <em>me</em> adalah object pronoun.</p>
`,group:1},{id:"B1-03",chapter:1,prompt:`<p>Subject yang menggunakan <em>does</em> dalam Simple Present adalah ....</p>
`,options:[{id:"B1-03-A",html:`<p>They</p>
`,text:"They"},{id:"B1-03-B",html:`<p>We</p>
`,text:"We"},{id:"B1-03-C",html:`<p>I</p>
`,text:"I"},{id:"B1-03-D",html:`<p>He</p>
`,text:"He"}],correct:"B1-03-D",explanation:`<p><em>Does</em> digunakan dengan he, she, it, atau subject tunggal.</p>
`,group:1},{id:"B1-04",chapter:1,prompt:`<p>Bentuk V3 dari <em>write</em> adalah ....</p>
`,options:[{id:"B1-04-A",html:`<p>wrote</p>
`,text:"wrote"},{id:"B1-04-B",html:`<p>writing</p>
`,text:"writing"},{id:"B1-04-C",html:`<p>written</p>
`,text:"written"},{id:"B1-04-D",html:`<p>writes</p>
`,text:"writes"}],correct:"B1-04-C",explanation:`<p>V3 dari <em>write</em> adalah <em>written</em>.</p>
`,group:1},{id:"B1-05",chapter:1,prompt:`<p>Kalimat nominal yang benar adalah ....</p>
`,options:[{id:"B1-05-A",html:`<p>They is students.</p>
`,text:"They is students."},{id:"B1-05-B",html:`<p>They are students.</p>
`,text:"They are students."},{id:"B1-05-C",html:`<p>They am students.</p>
`,text:"They am students."},{id:"B1-05-D",html:`<p>They be students.</p>
`,text:"They be students."}],correct:"B1-05-B",explanation:`<p>Subject <em>they</em> menggunakan <em>are</em>.</p>
`,group:1},{id:"B1-06",chapter:1,prompt:`<p>Bentuk negatif yang benar dari <em>She likes tea</em> adalah ....</p>
`,options:[{id:"B1-06-A",html:`<p>She do not likes tea.</p>
`,text:"She do not likes tea."},{id:"B1-06-B",html:`<p>She does not likes tea.</p>
`,text:"She does not likes tea."},{id:"B1-06-C",html:`<p>She does not like tea.</p>
`,text:"She does not like tea."},{id:"B1-06-D",html:`<p>She did not likes tea.</p>
`,text:"She did not likes tea."}],correct:"B1-06-C",explanation:`<p>Setelah <em>does not</em>, gunakan V1: <em>like</em>.</p>
`,group:1},{id:"B1-07",chapter:1,prompt:`<p>Kata kerja yang termasuk regular verb adalah ....</p>
`,options:[{id:"B1-07-A",html:`<p>went</p>
`,text:"went"},{id:"B1-07-B",html:`<p>eaten</p>
`,text:"eaten"},{id:"B1-07-C",html:`<p>played</p>
`,text:"played"},{id:"B1-07-D",html:`<p>saw</p>
`,text:"saw"}],correct:"B1-07-C",explanation:`<p><em>Play</em> adalah regular verb: play–played–played.</p>
`,group:1},{id:"B1-08",chapter:1,prompt:`<p>Lengkapi kalimat: My brother _____ a new bicycle.</p>
`,options:[{id:"B1-08-A",html:`<p>have</p>
`,text:"have"},{id:"B1-08-B",html:`<p>has</p>
`,text:"has"},{id:"B1-08-C",html:`<p>having</p>
`,text:"having"},{id:"B1-08-D",html:`<p>are</p>
`,text:"are"}],correct:"B1-08-B",explanation:`<p><em>My brother</em> adalah subject tunggal, sehingga menggunakan <em>has</em>.</p>
`,group:1},{id:"B2-01",chapter:2,prompt:`<p>My father _____ coffee every morning.</p>
`,options:[{id:"B2-01-A",html:`<p>drink</p>
`,text:"drink"},{id:"B2-01-B",html:`<p>drinks</p>
`,text:"drinks"},{id:"B2-01-C",html:`<p>is drink</p>
`,text:"is drink"},{id:"B2-01-D",html:`<p>drinking</p>
`,text:"drinking"}],correct:"B2-01-B",explanation:`<p><em>My father</em> tunggal; Simple Present memakai <em>drinks</em>.</p>
`,group:2},{id:"B2-02",chapter:2,prompt:`<p>Look! The children _____ in the garden.</p>
`,options:[{id:"B2-02-A",html:`<p>play</p>
`,text:"play"},{id:"B2-02-B",html:`<p>played</p>
`,text:"played"},{id:"B2-02-C",html:`<p>are playing</p>
`,text:"are playing"},{id:"B2-02-D",html:`<p>have play</p>
`,text:"have play"}],correct:"B2-02-C",explanation:`<p><em>Look!</em> menunjukkan aktivitas sedang berlangsung: <em>are playing</em>.</p>
`,group:2},{id:"B2-03",chapter:2,prompt:`<p>_____ your sister work at the hospital?</p>
`,options:[{id:"B2-03-A",html:`<p>Do</p>
`,text:"Do"},{id:"B2-03-B",html:`<p>Does</p>
`,text:"Does"},{id:"B2-03-C",html:`<p>Is</p>
`,text:"Is"},{id:"B2-03-D",html:`<p>Has</p>
`,text:"Has"}],correct:"B2-03-B",explanation:`<p>Subject <em>your sister</em> tunggal, sehingga pertanyaan memakai <em>Does</em>.</p>
`,group:2},{id:"B2-04",chapter:2,prompt:`<p>We _____ this movie three times.</p>
`,options:[{id:"B2-04-A",html:`<p>have watched</p>
`,text:"have watched"},{id:"B2-04-B",html:`<p>watches</p>
`,text:"watches"},{id:"B2-04-C",html:`<p>are watch</p>
`,text:"are watch"},{id:"B2-04-D",html:`<p>watched yesterday</p>
`,text:"watched yesterday"}],correct:"B2-04-A",explanation:`<p>Pengalaman/jumlah kejadian yang relevan sekarang: Present Perfect.</p>
`,group:2},{id:"B2-05",chapter:2,prompt:`<p>She _____ her project yet.</p>
`,options:[{id:"B2-05-A",html:`<p>does not finish</p>
`,text:"does not finish"},{id:"B2-05-B",html:`<p>has not finished</p>
`,text:"has not finished"},{id:"B2-05-C",html:`<p>is not finish</p>
`,text:"is not finish"},{id:"B2-05-D",html:`<p>did not finished</p>
`,text:"did not finished"}],correct:"B2-05-B",explanation:`<p><em>Yet</em> umum digunakan dalam kalimat negatif Present Perfect.</p>
`,group:2},{id:"B2-06",chapter:2,prompt:`<p>I _____ English for two hours, and I am still studying.</p>
`,options:[{id:"B2-06-A",html:`<p>study</p>
`,text:"study"},{id:"B2-06-B",html:`<p>studied</p>
`,text:"studied"},{id:"B2-06-C",html:`<p>have been studying</p>
`,text:"have been studying"},{id:"B2-06-D",html:`<p>will study</p>
`,text:"will study"}],correct:"B2-06-C",explanation:`<p>Durasi aktivitas yang masih berlangsung: Present Perfect Continuous.</p>
`,group:2},{id:"B2-07",chapter:2,prompt:`<p>Which sentence is grammatically correct?</p>
`,options:[{id:"B2-07-A",html:`<p>He do not like tea.</p>
`,text:"He do not like tea."},{id:"B2-07-B",html:`<p>He does not likes tea.</p>
`,text:"He does not likes tea."},{id:"B2-07-C",html:`<p>He does not like tea.</p>
`,text:"He does not like tea."},{id:"B2-07-D",html:`<p>He not like tea.</p>
`,text:"He not like tea."}],correct:"B2-07-C",explanation:`<p>Setelah <em>does not</em> gunakan V1, yaitu <em>like</em>.</p>
`,group:2},{id:"B2-08",chapter:2,prompt:`<p>The bus _____ at 6 a.m. every day.</p>
`,options:[{id:"B2-08-A",html:`<p>leave</p>
`,text:"leave"},{id:"B2-08-B",html:`<p>leaves</p>
`,text:"leaves"},{id:"B2-08-C",html:`<p>is leaving yesterday</p>
`,text:"is leaving yesterday"},{id:"B2-08-D",html:`<p>have left</p>
`,text:"have left"}],correct:"B2-08-B",explanation:`<p>Jadwal tetap menggunakan Simple Present; subject <em>the bus</em> tunggal.</p>
`,group:2},{id:"B2-09",chapter:2,prompt:`<p>I _____ him since 2021.</p>
`,options:[{id:"B2-09-A",html:`<p>know</p>
`,text:"know"},{id:"B2-09-B",html:`<p>knew</p>
`,text:"knew"},{id:"B2-09-C",html:`<p>have known</p>
`,text:"have known"},{id:"B2-09-D",html:`<p>am knowing</p>
`,text:"am knowing"}],correct:"B2-09-C",explanation:`<p><em>Since 2021</em> menunjukkan keadaan dari masa lalu sampai sekarang; <em>know</em> biasanya stative.</p>
`,group:2},{id:"B2-10",chapter:2,prompt:`<p>Which time expression is commonly associated with Present Continuous?</p>
`,options:[{id:"B2-10-A",html:`<p>Right now</p>
`,text:"Right now"},{id:"B2-10-B",html:`<p>Two days ago</p>
`,text:"Two days ago"},{id:"B2-10-C",html:`<p>Last year</p>
`,text:"Last year"},{id:"B2-10-D",html:`<p>By next month</p>
`,text:"By next month"}],correct:"B2-10-A",explanation:`<p><em>Right now</em> merupakan penanda yang umum untuk Present Continuous.</p>
`,group:2},{id:"B3-01",chapter:3,prompt:`<p>We _____ the museum last Sunday.</p>
`,options:[{id:"B3-01-A",html:`<p>visit</p>
`,text:"visit"},{id:"B3-01-B",html:`<p>visited</p>
`,text:"visited"},{id:"B3-01-C",html:`<p>have visit</p>
`,text:"have visit"},{id:"B3-01-D",html:`<p>are visiting</p>
`,text:"are visiting"}],correct:"B3-01-B",explanation:`<p><em>Last Sunday</em> menunjukkan Simple Past; V2 dari <em>visit</em> adalah <em>visited</em>.</p>
`,group:3},{id:"B3-02",chapter:3,prompt:`<p>She _____ at home yesterday because she was sick.</p>
`,options:[{id:"B3-02-A",html:`<p>is</p>
`,text:"is"},{id:"B3-02-B",html:`<p>are</p>
`,text:"are"},{id:"B3-02-C",html:`<p>was</p>
`,text:"was"},{id:"B3-02-D",html:`<p>were</p>
`,text:"were"}],correct:"B3-02-C",explanation:`<p>Subject <em>she</em> menggunakan <em>was</em>.</p>
`,group:3},{id:"B3-03",chapter:3,prompt:`<p>They _____ dinner when I arrived.</p>
`,options:[{id:"B3-03-A",html:`<p>have</p>
`,text:"have"},{id:"B3-03-B",html:`<p>were having</p>
`,text:"were having"},{id:"B3-03-C",html:`<p>will have</p>
`,text:"will have"},{id:"B3-03-D",html:`<p>has had</p>
`,text:"has had"}],correct:"B3-03-B",explanation:`<p>Aktivitas sedang berlangsung ketika kejadian lain terjadi: Past Continuous.</p>
`,group:3},{id:"B3-04",chapter:3,prompt:`<p>_____ you see the announcement yesterday?</p>
`,options:[{id:"B3-04-A",html:`<p>Do</p>
`,text:"Do"},{id:"B3-04-B",html:`<p>Does</p>
`,text:"Does"},{id:"B3-04-C",html:`<p>Did</p>
`,text:"Did"},{id:"B3-04-D",html:`<p>Have</p>
`,text:"Have"}],correct:"B3-04-C",explanation:`<p>Pertanyaan Simple Past verbal memakai <em>Did + S + V1</em>.</p>
`,group:3},{id:"B3-05",chapter:3,prompt:`<p>The movie _____ before we entered the cinema.</p>
`,options:[{id:"B3-05-A",html:`<p>had started</p>
`,text:"had started"},{id:"B3-05-B",html:`<p>starts</p>
`,text:"starts"},{id:"B3-05-C",html:`<p>is starting</p>
`,text:"is starting"},{id:"B3-05-D",html:`<p>will start</p>
`,text:"will start"}],correct:"B3-05-A",explanation:`<p>Kejadian selesai sebelum kejadian lampau lain: Past Perfect.</p>
`,group:3},{id:"B3-06",chapter:3,prompt:`<p>He had been studying for two hours before his friend _____.</p>
`,options:[{id:"B3-06-A",html:`<p>arrive</p>
`,text:"arrive"},{id:"B3-06-B",html:`<p>arrives</p>
`,text:"arrives"},{id:"B3-06-C",html:`<p>arrived</p>
`,text:"arrived"},{id:"B3-06-D",html:`<p>will arrive</p>
`,text:"will arrive"}],correct:"B3-06-C",explanation:`<p>Setelah <em>before</em> pada konteks ini digunakan Simple Past: <em>arrived</em>.</p>
`,group:3},{id:"B3-07",chapter:3,prompt:`<p>Bentuk negatif yang benar dari <em>They went home</em> adalah ....</p>
`,options:[{id:"B3-07-A",html:`<p>They did not went home.</p>
`,text:"They did not went home."},{id:"B3-07-B",html:`<p>They do not went home.</p>
`,text:"They do not went home."},{id:"B3-07-C",html:`<p>They did not go home.</p>
`,text:"They did not go home."},{id:"B3-07-D",html:`<p>They were not go home.</p>
`,text:"They were not go home."}],correct:"B3-07-C",explanation:`<p>Setelah <em>did not</em> gunakan V1: <em>go</em>.</p>
`,group:3},{id:"B3-08",chapter:3,prompt:`<p>Which sentence describes an action in progress at a specific time in the past?</p>
`,options:[{id:"B3-08-A",html:`<p>I study every day.</p>
`,text:"I study every day."},{id:"B3-08-B",html:`<p>I was reading at 9 p.m.</p>
`,text:"I was reading at 9 p.m."},{id:"B3-08-C",html:`<p>I have read the book.</p>
`,text:"I have read the book."},{id:"B3-08-D",html:`<p>I will read tomorrow.</p>
`,text:"I will read tomorrow."}],correct:"B3-08-B",explanation:`<p><em>Was reading</em> menunjukkan aktivitas yang sedang berlangsung pada waktu lampau.</p>
`,group:3},{id:"B4-01",chapter:4,prompt:`<p>I think our team _____ the match.</p>
`,options:[{id:"B4-01-A",html:`<p>will win</p>
`,text:"will win"},{id:"B4-01-B",html:`<p>won</p>
`,text:"won"},{id:"B4-01-C",html:`<p>has win</p>
`,text:"has win"},{id:"B4-01-D",html:`<p>winning</p>
`,text:"winning"}],correct:"B4-01-A",explanation:`<p>Prediksi tentang masa depan dapat menggunakan <em>will + V1</em>.</p>
`,group:4},{id:"B4-02",chapter:4,prompt:`<p>This time tomorrow, we _____ to Surabaya.</p>
`,options:[{id:"B4-02-A",html:`<p>travel</p>
`,text:"travel"},{id:"B4-02-B",html:`<p>traveled</p>
`,text:"traveled"},{id:"B4-02-C",html:`<p>will be traveling</p>
`,text:"will be traveling"},{id:"B4-02-D",html:`<p>have traveled</p>
`,text:"have traveled"}],correct:"B4-02-C",explanation:`<p>Aktivitas yang akan sedang berlangsung: Future Continuous.</p>
`,group:4},{id:"B4-03",chapter:4,prompt:`<p>By Friday, she _____ the assignment.</p>
`,options:[{id:"B4-03-A",html:`<p>will have submitted</p>
`,text:"will have submitted"},{id:"B4-03-B",html:`<p>submits yesterday</p>
`,text:"submits yesterday"},{id:"B4-03-C",html:`<p>is submit</p>
`,text:"is submit"},{id:"B4-03-D",html:`<p>had submit</p>
`,text:"had submit"}],correct:"B4-03-A",explanation:`<p><em>By Friday</em> menunjukkan batas waktu penyelesaian: Future Perfect.</p>
`,group:4},{id:"B4-04",chapter:4,prompt:`<p>By 10 p.m., I _____ for five hours.</p>
`,options:[{id:"B4-04-A",html:`<p>study</p>
`,text:"study"},{id:"B4-04-B",html:`<p>will have been studying</p>
`,text:"will have been studying"},{id:"B4-04-C",html:`<p>studied</p>
`,text:"studied"},{id:"B4-04-D",html:`<p>am study</p>
`,text:"am study"}],correct:"B4-04-B",explanation:`<p>Durasi sampai titik masa depan: Future Perfect Continuous.</p>
`,group:4},{id:"B4-05",chapter:4,prompt:`<p>Look at the dark clouds. It _____ rain.</p>
`,options:[{id:"B4-05-A",html:`<p>is going to</p>
`,text:"is going to"},{id:"B4-05-B",html:`<p>did</p>
`,text:"did"},{id:"B4-05-C",html:`<p>has</p>
`,text:"has"},{id:"B4-05-D",html:`<p>was</p>
`,text:"was"}],correct:"B4-05-A",explanation:`<p>Awan gelap menjadi bukti untuk prediksi <em>be going to</em>.</p>
`,group:4},{id:"B4-06",chapter:4,prompt:`<p>Bentuk negatif yang benar dari <em>He will come</em> adalah ....</p>
`,options:[{id:"B4-06-A",html:`<p>He will not comes.</p>
`,text:"He will not comes."},{id:"B4-06-B",html:`<p>He does not will come.</p>
`,text:"He does not will come."},{id:"B4-06-C",html:`<p>He will not come.</p>
`,text:"He will not come."},{id:"B4-06-D",html:`<p>He did not will come.</p>
`,text:"He did not will come."}],correct:"B4-06-C",explanation:`<p>Bentuk negatif <em>will</em> adalah <em>will not + V1</em>.</p>
`,group:4},{id:"B4-07",chapter:4,prompt:`<p>She said that she _____ help us.</p>
`,options:[{id:"B4-07-A",html:`<p>will</p>
`,text:"will"},{id:"B4-07-B",html:`<p>would</p>
`,text:"would"},{id:"B4-07-C",html:`<p>has</p>
`,text:"has"},{id:"B4-07-D",html:`<p>did</p>
`,text:"did"}],correct:"B4-07-B",explanation:`<p><em>Would</em> digunakan untuk Future in the Past dalam reported speech.</p>
`,group:9},{id:"B4-08",chapter:4,prompt:`<p>Which sentence shows a plan viewed from the past?</p>
`,options:[{id:"B4-08-A",html:`<p>I am going to study now.</p>
`,text:"I am going to study now."},{id:"B4-08-B",html:`<p>I was going to study, but I fell asleep.</p>
`,text:"I was going to study, but I fell asleep."},{id:"B4-08-C",html:`<p>I have studied today.</p>
`,text:"I have studied today."},{id:"B4-08-D",html:`<p>I study every day.</p>
`,text:"I study every day."}],correct:"B4-08-B",explanation:`<p><em>Was going to</em> menunjukkan rencana yang dilihat dari masa lalu.</p>
`,group:9},{id:"B5-01",chapter:5,prompt:`<p>The classroom _____ every morning.</p>
`,options:[{id:"B5-01-A",html:`<p>clean</p>
`,text:"clean"},{id:"B5-01-B",html:`<p>is cleaned</p>
`,text:"is cleaned"},{id:"B5-01-C",html:`<p>cleaned by</p>
`,text:"cleaned by"},{id:"B5-01-D",html:`<p>is cleaning</p>
`,text:"is cleaning"}],correct:"B5-01-B",explanation:`<p>Simple Present Passive: <em>is + V3</em>.</p>
`,group:5},{id:"B5-02",chapter:5,prompt:`<p>The window _____ by the boys yesterday.</p>
`,options:[{id:"B5-02-A",html:`<p>breaks</p>
`,text:"breaks"},{id:"B5-02-B",html:`<p>is broken</p>
`,text:"is broken"},{id:"B5-02-C",html:`<p>was broken</p>
`,text:"was broken"},{id:"B5-02-D",html:`<p>will break</p>
`,text:"will break"}],correct:"B5-02-C",explanation:`<p><em>Yesterday</em> menunjukkan Simple Past Passive: <em>was + V3</em>.</p>
`,group:5},{id:"B5-03",chapter:5,prompt:`<p>The project will _____ next week.</p>
`,options:[{id:"B5-03-A",html:`<p>complete</p>
`,text:"complete"},{id:"B5-03-B",html:`<p>completed</p>
`,text:"completed"},{id:"B5-03-C",html:`<p>be completed</p>
`,text:"be completed"},{id:"B5-03-D",html:`<p>being complete</p>
`,text:"being complete"}],correct:"B5-03-C",explanation:`<p>Simple Future Passive: <em>will + be + V3</em>.</p>
`,group:5},{id:"B5-04",chapter:5,prompt:`<p>Bentuk passive dari <em>They are repairing the road</em> adalah ....</p>
`,options:[{id:"B5-04-A",html:`<p>The road is repaired.</p>
`,text:"The road is repaired."},{id:"B5-04-B",html:`<p>The road is being repaired.</p>
`,text:"The road is being repaired."},{id:"B5-04-C",html:`<p>The road was repairing.</p>
`,text:"The road was repairing."},{id:"B5-04-D",html:`<p>The road has repair.</p>
`,text:"The road has repair."}],correct:"B5-04-B",explanation:`<p>Present Continuous Passive: <em>is being + V3</em>.</p>
`,group:5},{id:"B5-05",chapter:5,prompt:`<p>Bentuk passive dari <em>She has written the report</em> adalah ....</p>
`,options:[{id:"B5-05-A",html:`<p>The report has been written by her.</p>
`,text:"The report has been written by her."},{id:"B5-05-B",html:`<p>The report have written by her.</p>
`,text:"The report have written by her."},{id:"B5-05-C",html:`<p>The report is writing by her.</p>
`,text:"The report is writing by her."},{id:"B5-05-D",html:`<p>The report had wrote by her.</p>
`,text:"The report had wrote by her."}],correct:"B5-05-A",explanation:`<p>Present Perfect Passive: <em>has been + V3</em>.</p>
`,group:5},{id:"B5-06",chapter:5,prompt:`<p>Kalimat passive yang menggunakan modal dengan benar adalah ....</p>
`,options:[{id:"B5-06-A",html:`<p>The rule must obey.</p>
`,text:"The rule must obey."},{id:"B5-06-B",html:`<p>The rule must be obeyed.</p>
`,text:"The rule must be obeyed."},{id:"B5-06-C",html:`<p>The rule must been obeyed.</p>
`,text:"The rule must been obeyed."},{id:"B5-06-D",html:`<p>The rule must obeyed.</p>
`,text:"The rule must obeyed."}],correct:"B5-06-B",explanation:`<p>Modal passive menggunakan <em>modal + be + V3</em>.</p>
`,group:5},{id:"B5-07",chapter:5,prompt:`<p>Kalimat aktif yang tidak memiliki object langsung dan umumnya tidak dapat dipasifkan adalah ....</p>
`,options:[{id:"B5-07-A",html:`<p>She opened the box.</p>
`,text:"She opened the box."},{id:"B5-07-B",html:`<p>They built a house.</p>
`,text:"They built a house."},{id:"B5-07-C",html:`<p>The baby sleeps.</p>
`,text:"The baby sleeps."},{id:"B5-07-D",html:`<p>He washed the car.</p>
`,text:"He washed the car."}],correct:"B5-07-C",explanation:`<p><em>Sleep</em> tidak memiliki object langsung pada kalimat tersebut.</p>
`,group:5},{id:"B5-08",chapter:5,prompt:`<p>Bentuk passive dari <em>The teacher explained the lesson</em> adalah ....</p>
`,options:[{id:"B5-08-A",html:`<p>The lesson explained the teacher.</p>
`,text:"The lesson explained the teacher."},{id:"B5-08-B",html:`<p>The lesson was explained by the teacher.</p>
`,text:"The lesson was explained by the teacher."},{id:"B5-08-C",html:`<p>The lesson is explain by the teacher.</p>
`,text:"The lesson is explain by the teacher."},{id:"B5-08-D",html:`<p>The teacher was explained by the lesson.</p>
`,text:"The teacher was explained by the lesson."}],correct:"B5-08-B",explanation:`<p>Object <em>the lesson</em> menjadi subject passive; bentuk Simple Past adalah <em>was explained</em>.</p>
`,group:5},{id:"B5-09",chapter:5,prompt:`<p>Pada kalimat <em>The letter was sent by him</em>, kata <em>him</em> adalah ....</p>
`,options:[{id:"B5-09-A",html:`<p>Subject pronoun</p>
`,text:"Subject pronoun"},{id:"B5-09-B",html:`<p>Object pronoun</p>
`,text:"Object pronoun"},{id:"B5-09-C",html:`<p>Adjective</p>
`,text:"Adjective"},{id:"B5-09-D",html:`<p>Adverb</p>
`,text:"Adverb"}],correct:"B5-09-B",explanation:`<p><em>Him</em> adalah object pronoun setelah preposition <em>by</em>.</p>
`,group:5},{id:"B5-10",chapter:5,prompt:`<p>Bentuk passive Present Perfect yang benar adalah ....</p>
`,options:[{id:"B5-10-A",html:`<p>S + has/have + been + V3</p>
`,text:"S + has/have + been + V3"},{id:"B5-10-B",html:`<p>S + has/have + being + V2</p>
`,text:"S + has/have + being + V2"},{id:"B5-10-C",html:`<p>S + did + been + V3</p>
`,text:"S + did + been + V3"},{id:"B5-10-D",html:`<p>S + will + being + V3</p>
`,text:"S + will + being + V3"}],correct:"B5-10-A",explanation:`<p>Present Perfect Passive memakai <em>has/have + been + V3</em>.</p>
`,group:5},{id:"B6-01",chapter:6,prompt:`<p>Which expression is used to ask for a suggestion?</p>
`,options:[{id:"B6-01-A",html:`<p>Thank you for helping me.</p>
`,text:"Thank you for helping me."},{id:"B6-01-B",html:`<p>What should I do?</p>
`,text:"What should I do?"},{id:"B6-01-C",html:`<p>I agree with you.</p>
`,text:"I agree with you."},{id:"B6-01-D",html:`<p>That's a good idea.</p>
`,text:"That's a good idea."}],correct:"B6-01-B",explanation:`<p><em>What should I do?</em> adalah ungkapan meminta saran.</p>
`,group:6},{id:"B6-02",chapter:6,prompt:`<p>You should _____ earlier before the exam.</p>
`,options:[{id:"B6-02-A",html:`<p>studies</p>
`,text:"studies"},{id:"B6-02-B",html:`<p>studied</p>
`,text:"studied"},{id:"B6-02-C",html:`<p>study</p>
`,text:"study"},{id:"B6-02-D",html:`<p>studying</p>
`,text:"studying"}],correct:"B6-02-C",explanation:`<p>Setelah <em>should</em> gunakan V1: <em>study</em>.</p>
`,group:6},{id:"B6-03",chapter:6,prompt:`<p>Which sentence gives a suggestion?</p>
`,options:[{id:"B6-03-A",html:`<p>Where do you live?</p>
`,text:"Where do you live?"},{id:"B6-03-B",html:`<p>You could ask your teacher.</p>
`,text:"You could ask your teacher."},{id:"B6-03-C",html:`<p>I went to school yesterday.</p>
`,text:"I went to school yesterday."},{id:"B6-03-D",html:`<p>She is reading a book.</p>
`,text:"She is reading a book."}],correct:"B6-03-B",explanation:`<p><em>You could ask your teacher</em> menawarkan saran.</p>
`,group:6},{id:"B6-04",chapter:6,prompt:`<p>The correct completion is: How about _____ together?</p>
`,options:[{id:"B6-04-A",html:`<p>study</p>
`,text:"study"},{id:"B6-04-B",html:`<p>studied</p>
`,text:"studied"},{id:"B6-04-C",html:`<p>studying</p>
`,text:"studying"},{id:"B6-04-D",html:`<p>studies</p>
`,text:"studies"}],correct:"B6-04-C",explanation:`<p>Setelah <em>How about</em> untuk kegiatan, gunakan V-ing.</p>
`,group:6},{id:"B6-05",chapter:6,prompt:`<p>Which response shows acceptance of a suggestion?</p>
`,options:[{id:"B6-05-A",html:`<p>That's a good idea.</p>
`,text:"That's a good idea."},{id:"B6-05-B",html:`<p>I don't think so.</p>
`,text:"I don't think so."},{id:"B6-05-C",html:`<p>I have no idea.</p>
`,text:"I have no idea."},{id:"B6-05-D",html:`<p>I disagree completely.</p>
`,text:"I disagree completely."}],correct:"B6-05-A",explanation:`<p><em>That's a good idea</em> menunjukkan penerimaan saran.</p>
`,group:6},{id:"B6-06",chapter:6,prompt:`<p>Which sentence politely rejects a suggestion?</p>
`,options:[{id:"B6-06-A",html:`<p>That is the only answer.</p>
`,text:"That is the only answer."},{id:"B6-06-B",html:`<p>Thanks, but I have another plan.</p>
`,text:"Thanks, but I have another plan."},{id:"B6-06-C",html:`<p>You must do it now.</p>
`,text:"You must do it now."},{id:"B6-06-D",html:`<p>I suggest taking a break.</p>
`,text:"I suggest taking a break."}],correct:"B6-06-B",explanation:`<p>Ungkapan tersebut menolak secara sopan dan memberi alternatif.</p>
`,group:6},{id:"B6-07",chapter:6,prompt:`<p>Choose the grammatically correct sentence.</p>
`,options:[{id:"B6-07-A",html:`<p>She should studies more.</p>
`,text:"She should studies more."},{id:"B6-07-B",html:`<p>She should studying more.</p>
`,text:"She should studying more."},{id:"B6-07-C",html:`<p>She should study more.</p>
`,text:"She should study more."},{id:"B6-07-D",html:`<p>She should studied more.</p>
`,text:"She should studied more."}],correct:"B6-07-C",explanation:`<p>Modal <em>should</em> diikuti V1 tanpa -s.</p>
`,group:6},{id:"B6-08",chapter:6,prompt:`<p>Which expression is followed by V-ing when suggesting an activity?</p>
`,options:[{id:"B6-08-A",html:`<p>Should</p>
`,text:"Should"},{id:"B6-08-B",html:`<p>Could</p>
`,text:"Could"},{id:"B6-08-C",html:`<p>How about</p>
`,text:"How about"},{id:"B6-08-D",html:`<p>Must</p>
`,text:"Must"}],correct:"B6-08-C",explanation:`<p><em>How about</em> diikuti noun atau V-ing.</p>
`,group:6},{id:"B7-01",chapter:7,prompt:`<p>The main purpose of a Procedure Text is to ....</p>
`,options:[{id:"B7-01-A",html:`<p>describe a famous person</p>
`,text:"describe a famous person"},{id:"B7-01-B",html:`<p>explain how to do or make something</p>
`,text:"explain how to do or make something"},{id:"B7-01-C",html:`<p>retell a past experience</p>
`,text:"retell a past experience"},{id:"B7-01-D",html:`<p>entertain readers with a story</p>
`,text:"entertain readers with a story"}],correct:"B7-01-B",explanation:`<p>Procedure Text menjelaskan cara melakukan atau membuat sesuatu.</p>
`,group:7},{id:"B7-02",chapter:7,prompt:`<p>Which part explains the tools or ingredients needed?</p>
`,options:[{id:"B7-02-A",html:`<p>Goal</p>
`,text:"Goal"},{id:"B7-02-B",html:`<p>Materials</p>
`,text:"Materials"},{id:"B7-02-C",html:`<p>Resolution</p>
`,text:"Resolution"},{id:"B7-02-D",html:`<p>Reorientation</p>
`,text:"Reorientation"}],correct:"B7-02-B",explanation:`<p>Materials berisi alat, bahan, atau perlengkapan.</p>
`,group:7},{id:"B7-03",chapter:7,prompt:`<p>Which sentence is an imperative sentence?</p>
`,options:[{id:"B7-03-A",html:`<p>She adds some sugar.</p>
`,text:"She adds some sugar."},{id:"B7-03-B",html:`<p>The sugar is sweet.</p>
`,text:"The sugar is sweet."},{id:"B7-03-C",html:`<p>Add some sugar.</p>
`,text:"Add some sugar."},{id:"B7-03-D",html:`<p>She added some sugar yesterday.</p>
`,text:"She added some sugar yesterday."}],correct:"B7-03-C",explanation:`<p><em>Add some sugar</em> adalah instruksi dengan bentuk imperative.</p>
`,group:7},{id:"B7-04",chapter:7,prompt:`<p>Which word indicates the final step?</p>
`,options:[{id:"B7-04-A",html:`<p>First</p>
`,text:"First"},{id:"B7-04-B",html:`<p>Next</p>
`,text:"Next"},{id:"B7-04-C",html:`<p>Meanwhile</p>
`,text:"Meanwhile"},{id:"B7-04-D",html:`<p>Finally</p>
`,text:"Finally"}],correct:"B7-04-D",explanation:`<p><em>Finally</em> menandai langkah terakhir.</p>
`,group:7},{id:"B7-05",chapter:7,prompt:`<p>The correct negative instruction is ....</p>
`,options:[{id:"B7-05-A",html:`<p>Not touch the pan.</p>
`,text:"Not touch the pan."},{id:"B7-05-B",html:`<p>Do not touch the pan.</p>
`,text:"Do not touch the pan."},{id:"B7-05-C",html:`<p>Does not touch the pan.</p>
`,text:"Does not touch the pan."},{id:"B7-05-D",html:`<p>Did not touching the pan.</p>
`,text:"Did not touching the pan."}],correct:"B7-05-B",explanation:`<p>Larangan/instruksi negatif memakai <em>Do not + V1</em>.</p>
`,group:7},{id:"B7-06",chapter:7,prompt:`<p>Which sentence uses an adverb correctly?</p>
`,options:[{id:"B7-06-A",html:`<p>Stir the mixture slowly.</p>
`,text:"Stir the mixture slowly."},{id:"B7-06-B",html:`<p>Slowly mixture the stir.</p>
`,text:"Slowly mixture the stir."},{id:"B7-06-C",html:`<p>Stir slowly the mixture is.</p>
`,text:"Stir slowly the mixture is."},{id:"B7-06-D",html:`<p>The slowly stir mixture.</p>
`,text:"The slowly stir mixture."}],correct:"B7-06-A",explanation:`<p><em>Slowly</em> menerangkan cara mengaduk.</p>
`,group:7},{id:"B7-07",chapter:7,prompt:`<p>Which tense/form is most common for direct steps in a Procedure Text?</p>
`,options:[{id:"B7-07-A",html:`<p>Past Perfect</p>
`,text:"Past Perfect"},{id:"B7-07-B",html:`<p>Imperative</p>
`,text:"Imperative"},{id:"B7-07-C",html:`<p>Past Continuous</p>
`,text:"Past Continuous"},{id:"B7-07-D",html:`<p>Future Perfect Continuous</p>
`,text:"Future Perfect Continuous"}],correct:"B7-07-B",explanation:`<p>Langkah langsung paling umum menggunakan imperative.</p>
`,group:7},{id:"B7-08",chapter:7,prompt:`<p>Which sentence is an example of Simple Present Passive?</p>
`,options:[{id:"B7-08-A",html:`<p>The ingredients are mixed together.</p>
`,text:"The ingredients are mixed together."},{id:"B7-08-B",html:`<p>The ingredients mixed together yesterday.</p>
`,text:"The ingredients mixed together yesterday."},{id:"B7-08-C",html:`<p>Mix the ingredients together.</p>
`,text:"Mix the ingredients together."},{id:"B7-08-D",html:`<p>The ingredients will mixing together.</p>
`,text:"The ingredients will mixing together."}],correct:"B7-08-A",explanation:`<p>Simple Present Passive: <em>are + V3</em>.</p>
`,group:7},{id:"B8-01",chapter:8,prompt:`<p>My sister usually _____ the bus to school.</p>
`,options:[{id:"B8-01-A",html:`<p>take</p>
`,text:"take"},{id:"B8-01-B",html:`<p>takes</p>
`,text:"takes"},{id:"B8-01-C",html:`<p>is take</p>
`,text:"is take"},{id:"B8-01-D",html:`<p>taking</p>
`,text:"taking"}],correct:"B8-01-B",explanation:`<p><em>My sister</em> tunggal; Simple Present memakai <em>takes</em>.</p>
`,group:2},{id:"B8-02",chapter:8,prompt:`<p>I _____ my keys. I cannot find them now.</p>
`,options:[{id:"B8-02-A",html:`<p>have lost</p>
`,text:"have lost"},{id:"B8-02-B",html:`<p>lose yesterday</p>
`,text:"lose yesterday"},{id:"B8-02-C",html:`<p>was losing tomorrow</p>
`,text:"was losing tomorrow"},{id:"B8-02-D",html:`<p>will lost</p>
`,text:"will lost"}],correct:"B8-02-A",explanation:`<p>Kehilangan memiliki dampak sekarang (kunci tidak ditemukan): Present Perfect.</p>
`,group:2},{id:"B8-03",chapter:8,prompt:`<p>When the teacher entered, the students _____ quietly.</p>
`,options:[{id:"B8-03-A",html:`<p>read</p>
`,text:"read"},{id:"B8-03-B",html:`<p>were reading</p>
`,text:"were reading"},{id:"B8-03-C",html:`<p>will read</p>
`,text:"will read"},{id:"B8-03-D",html:`<p>have read tomorrow</p>
`,text:"have read tomorrow"}],correct:"B8-03-B",explanation:`<p>Aktivitas sedang berlangsung saat guru masuk: Past Continuous.</p>
`,group:3},{id:"B8-04",chapter:8,prompt:`<p>The documents _____ tomorrow morning.</p>
`,options:[{id:"B8-04-A",html:`<p>will send</p>
`,text:"will send"},{id:"B8-04-B",html:`<p>will be sent</p>
`,text:"will be sent"},{id:"B8-04-C",html:`<p>sent</p>
`,text:"sent"},{id:"B8-04-D",html:`<p>are sending by them yesterday</p>
`,text:"are sending by them yesterday"}],correct:"B8-04-B",explanation:`<p>Simple Future Passive: <em>will be sent</em>.</p>
`,group:5},{id:"B8-05",chapter:8,prompt:`<p>Which sentence gives a suggestion?</p>
`,options:[{id:"B8-05-A",html:`<p>You should make a study plan.</p>
`,text:"You should make a study plan."},{id:"B8-05-B",html:`<p>Did you make a study plan?</p>
`,text:"Did you make a study plan?"},{id:"B8-05-C",html:`<p>You made a study plan yesterday.</p>
`,text:"You made a study plan yesterday."},{id:"B8-05-D",html:`<p>The study plan was made.</p>
`,text:"The study plan was made."}],correct:"B8-05-A",explanation:`<p><em>Should + V1</em> digunakan untuk memberi saran.</p>
`,group:6},{id:"B8-06",chapter:8,prompt:`<p>Which sentence is an instruction in a Procedure Text?</p>
`,options:[{id:"B8-06-A",html:`<p>The water boils at 100°C at sea level.</p>
`,text:"The water boils at 100°C at sea level."},{id:"B8-06-B",html:`<p>The water was boiled yesterday.</p>
`,text:"The water was boiled yesterday."},{id:"B8-06-C",html:`<p>Boil the water for five minutes.</p>
`,text:"Boil the water for five minutes."},{id:"B8-06-D",html:`<p>The water has boiled.</p>
`,text:"The water has boiled."}],correct:"B8-06-C",explanation:`<p><em>Boil the water</em> adalah imperative/instruksi.</p>
`,group:7},{id:"B8-07",chapter:8,prompt:`<p>By the time we arrived, the event _____.</p>
`,options:[{id:"B8-07-A",html:`<p>had started</p>
`,text:"had started"},{id:"B8-07-B",html:`<p>starts</p>
`,text:"starts"},{id:"B8-07-C",html:`<p>is starting</p>
`,text:"is starting"},{id:"B8-07-D",html:`<p>will start</p>
`,text:"will start"}],correct:"B8-07-A",explanation:`<p>Kejadian sudah dimulai sebelum kami tiba: Past Perfect.</p>
`,group:3},{id:"B8-08",chapter:8,prompt:`<p>She _____ here since 2022.</p>
`,options:[{id:"B8-08-A",html:`<p>works</p>
`,text:"works"},{id:"B8-08-B",html:`<p>worked yesterday</p>
`,text:"worked yesterday"},{id:"B8-08-C",html:`<p>has worked</p>
`,text:"has worked"},{id:"B8-08-D",html:`<p>is work</p>
`,text:"is work"}],correct:"B8-08-C",explanation:`<p><em>Since 2022</em> menghubungkan masa lalu dengan sekarang: Present Perfect.</p>
`,group:2},{id:"B8-09",chapter:8,prompt:`<p>Which sentence is grammatically correct?</p>
`,options:[{id:"B8-09-A",html:`<p>Does he likes music?</p>
`,text:"Does he likes music?"},{id:"B8-09-B",html:`<p>Does he like music?</p>
`,text:"Does he like music?"},{id:"B8-09-C",html:`<p>Do he like music?</p>
`,text:"Do he like music?"},{id:"B8-09-D",html:`<p>Is he like music?</p>
`,text:"Is he like music?"}],correct:"B8-09-B",explanation:`<p>Setelah <em>Does</em> gunakan subject lalu V1: <em>like</em>.</p>
`,group:1},{id:"B8-10",chapter:8,prompt:`<p>The correct passive form of <em>They are building a new library</em> is ....</p>
`,options:[{id:"B8-10-A",html:`<p>A new library is built.</p>
`,text:"A new library is built."},{id:"B8-10-B",html:`<p>A new library was being built.</p>
`,text:"A new library was being built."},{id:"B8-10-C",html:`<p>A new library is being built.</p>
`,text:"A new library is being built."},{id:"B8-10-D",html:`<p>A new library has build.</p>
`,text:"A new library has build."}],correct:"B8-10-C",explanation:`<p>Present Continuous Passive: <em>is being built</em>.</p>
`,group:5},{id:"B8-11",chapter:8,prompt:`<p>By next June, we _____ the course.</p>
`,options:[{id:"B8-11-A",html:`<p>will have completed</p>
`,text:"will have completed"},{id:"B8-11-B",html:`<p>completed yesterday</p>
`,text:"completed yesterday"},{id:"B8-11-C",html:`<p>are complete</p>
`,text:"are complete"},{id:"B8-11-D",html:`<p>have completing</p>
`,text:"have completing"}],correct:"B8-11-A",explanation:`<p><em>By next June</em> menunjukkan Future Perfect.</p>
`,group:4},{id:"B8-12",chapter:8,prompt:`<p>Which expression is used to politely reject a suggestion?</p>
`,options:[{id:"B8-12-A",html:`<p>That's a great idea.</p>
`,text:"That's a great idea."},{id:"B8-12-B",html:`<p>I'll try that.</p>
`,text:"I'll try that."},{id:"B8-12-C",html:`<p>Thanks, but I have another plan.</p>
`,text:"Thanks, but I have another plan."},{id:"B8-12-D",html:`<p>I completely agree.</p>
`,text:"I completely agree."}],correct:"B8-12-C",explanation:`<p>Ungkapan tersebut menolak saran dengan sopan.</p>
`,group:6},{id:"X-01",chapter:0,prompt:`<p>By the time the guests arrived, Maya _____ the dining table.</p>
`,options:[{id:"X-01-A",html:`<p>has set</p>
`,text:"has set"},{id:"X-01-B",html:`<p>was setting</p>
`,text:"was setting"},{id:"X-01-C",html:`<p>had set</p>
`,text:"had set"},{id:"X-01-D",html:`<p>will set</p>
`,text:"will set"}],correct:"X-01-C",explanation:`<p>Kejadian menata meja sudah selesai sebelum tamu tiba. Untuk kejadian yang lebih dahulu selesai sebelum kejadian lain di masa lampau, gunakan <strong>Past Perfect</strong>.</p>
<p><strong>Rumus:</strong> <code>S + had + V3</code></p>
<p>Kata kerja <em>set</em> memiliki bentuk V1, V2, dan V3 yang sama: set – set – set.</p>
`,group:3},{id:"X-02",chapter:0,prompt:`<p>The laboratory equipment _____ before each experiment.</p>
`,options:[{id:"X-02-A",html:`<p>is checked</p>
`,text:"is checked"},{id:"X-02-B",html:`<p>checks</p>
`,text:"checks"},{id:"X-02-C",html:`<p>checked</p>
`,text:"checked"},{id:"X-02-D",html:`<p>is checking</p>
`,text:"is checking"}],correct:"X-02-A",explanation:`<p>Peralatan laboratorium menerima tindakan pemeriksaan. Kalimat ini menggunakan <strong>Passive Voice — Simple Present</strong> karena menjelaskan prosedur rutin.</p>
<p><strong>Rumus:</strong> <code>S + am/is/are + V3</code></p>
<p><em>Equipment</em> diperlakukan sebagai kata benda tunggal yang tidak dapat dihitung, sehingga menggunakan <em>is</em>.</p>
`,group:5},{id:"X-03",chapter:0,prompt:`<p>Rina: “I have difficulty understanding the mathematics lesson.”<br/>
Dito: “_____”</p>
`,options:[{id:"X-03-A",html:`<p>I understood the lesson yesterday.</p>
`,text:"I understood the lesson yesterday."},{id:"X-03-B",html:`<p>You are understanding the lesson.</p>
`,text:"You are understanding the lesson."},{id:"X-03-C",html:`<p>Did you understand the lesson?</p>
`,text:"Did you understand the lesson?"},{id:"X-03-D",html:`<p>Why don’t you ask your teacher for help?</p>
`,text:"Why don’t you ask your teacher for help?"}],correct:"X-03-D",explanation:`<p>Kalimat tersebut memberikan saran yang sesuai dengan masalah Rina.</p>
<p><strong>Pola:</strong> <code>Why don’t you + V1 ...?</code></p>
<p>Setelah <em>don’t you</em>, gunakan kata kerja bentuk pertama, yaitu <em>ask</em>.</p>
`,group:6},{id:"X-04",chapter:0,prompt:`<p>The team is working on the report now. By 8 p.m. tonight, they _____ it.</p>
`,options:[{id:"X-04-A",html:`<p>finished</p>
`,text:"finished"},{id:"X-04-B",html:`<p>will have finished</p>
`,text:"will have finished"},{id:"X-04-C",html:`<p>have finished</p>
`,text:"have finished"},{id:"X-04-D",html:`<p>are finishing</p>
`,text:"are finishing"}],correct:"X-04-B",explanation:`<p>Laporan akan sudah selesai sebelum batas waktu pukul 8 malam. Gunakan <strong>Future Perfect</strong> untuk menyatakan tindakan yang akan selesai sebelum titik waktu tertentu di masa depan.</p>
<p><strong>Rumus:</strong> <code>S + will + have + V3</code></p>
<p>Bentuk V3 dari <em>finish</em> adalah <em>finished</em>.</p>
`,group:4},{id:"X-05",chapter:0,prompt:`<p>In a procedure text titled <strong>“How to Make a Fruit Salad,”</strong> which section lists items such as apples, bananas, yogurt, and a knife?</p>
`,options:[{id:"X-05-A",html:`<p>Resolution</p>
`,text:"Resolution"},{id:"X-05-B",html:`<p>Reorientation</p>
`,text:"Reorientation"},{id:"X-05-C",html:`<p>Materials or ingredients</p>
`,text:"Materials or ingredients"},{id:"X-05-D",html:`<p>Complication</p>
`,text:"Complication"}],correct:"X-05-C",explanation:`<p>Bagian <em>Materials/Ingredients</em> berisi bahan dan alat yang dibutuhkan untuk mengikuti prosedur. Pada contoh ini, apel, pisang, yogurt, dan pisau termasuk bahan atau alat.</p>
<p>Struktur umum procedure text:</p>
<ol>
<li><strong>Goal/Aim:</strong> tujuan kegiatan.</li>
<li><strong>Materials/Ingredients:</strong> bahan dan alat yang diperlukan.</li>
<li><strong>Steps/Methods:</strong> urutan langkah.</li>
</ol>
`,group:7},{id:"X-06",chapter:0,prompt:`<p>This machine _____ automatically when the power button is pressed.</p>
`,options:[{id:"X-06-A",html:`<p>starts</p>
`,text:"starts"},{id:"X-06-B",html:`<p>start</p>
`,text:"start"},{id:"X-06-C",html:`<p>started</p>
`,text:"started"},{id:"X-06-D",html:`<p>starting</p>
`,text:"starting"}],correct:"X-06-A",explanation:`<p>Kalimat menjelaskan cara kerja mesin sebagai fakta atau proses umum, sehingga menggunakan <strong>Simple Present</strong>. Subjek <em>this machine</em> berbentuk orang ketiga tunggal, sehingga kata kerja mendapat akhiran <em>-s</em>.</p>
<p><strong>Rumus:</strong> <code>S + V1(s/es)</code></p>
`,group:2},{id:"X-07",chapter:0,prompt:`<p>Nadia has _____ three articles for the school magazine.</p>
`,options:[{id:"X-07-A",html:`<p>write</p>
`,text:"write"},{id:"X-07-B",html:`<p>wrote</p>
`,text:"wrote"},{id:"X-07-C",html:`<p>writing</p>
`,text:"writing"},{id:"X-07-D",html:`<p>written</p>
`,text:"written"}],correct:"X-07-D",explanation:`<p>Present Perfect menggunakan <em>have/has</em> diikuti V3. Bentuk kata kerja <em>write</em> adalah write – wrote – written.</p>
<p><strong>Rumus:</strong> <code>S + have/has + V3</code></p>
`,group:1},{id:"X-08",chapter:0,prompt:`<p>The road near the school cannot be used because it _____ at the moment.</p>
`,options:[{id:"X-08-A",html:`<p>repaired</p>
`,text:"repaired"},{id:"X-08-B",html:`<p>is being repaired</p>
`,text:"is being repaired"},{id:"X-08-C",html:`<p>has repaired</p>
`,text:"has repaired"},{id:"X-08-D",html:`<p>was repairing</p>
`,text:"was repairing"}],correct:"X-08-B",explanation:`<p>Jalan sedang diperbaiki saat ini. Karena subjek menerima tindakan dan aktivitasnya sedang berlangsung, gunakan <strong>Present Continuous Passive</strong>.</p>
<p><strong>Rumus:</strong> <code>S + am/is/are + being + V3</code></p>
`,group:5},{id:"X-09",chapter:0,prompt:`<p>Which sentence uses the correct pattern for making a suggestion with <strong>“How about”</strong>?</p>
`,options:[{id:"X-09-A",html:`<p>How about to visit the library?</p>
`,text:"How about to visit the library?"},{id:"X-09-B",html:`<p>How about we visited the library yesterday?</p>
`,text:"How about we visited the library yesterday?"},{id:"X-09-C",html:`<p>How about visiting the library after school?</p>
`,text:"How about visiting the library after school?"},{id:"X-09-D",html:`<p>How about visit the library?</p>
`,text:"How about visit the library?"}],correct:"X-09-C",explanation:`<p>Setelah ungkapan <em>How about</em>, kata kerja harus berbentuk <strong>V-ing</strong>.</p>
<p><strong>Pola:</strong> <code>How about + V-ing ...?</code></p>
<p>Karena itu, <em>visiting</em> merupakan bentuk yang tepat.</p>
`,group:6},{id:"X-10",chapter:0,prompt:`<p>Choose the best sentence to complete the final step of these instructions:</p>
<ol>
<li>Put the tea bag into a cup.</li>
<li>Pour hot water into the cup.</li>
<li>Wait for three minutes.</li>
<li><hr/>
</li>
</ol>
`,options:[{id:"X-10-A",html:`<p>Because the water is hot.</p>
`,text:"Because the water is hot."},{id:"X-10-B",html:`<p>The tea bag was put into the cup.</p>
`,text:"The tea bag was put into the cup."},{id:"X-10-C",html:`<p>You are waiting for three minutes.</p>
`,text:"You are waiting for three minutes."},{id:"X-10-D",html:`<p>Finally, remove the tea bag and serve the tea.</p>
`,text:"Finally, remove the tea bag and serve the tea."}],correct:"X-10-D",explanation:`<p>Kata <em>Finally</em> menandai langkah terakhir. Kalimat <em>remove the tea bag and serve the tea</em> merupakan imperative sentence atau kalimat perintah/instruksi.</p>
<p><strong>Pola imperative:</strong> <code>V1 + object/complement</code></p>
<p>Subjek <em>you</em> tidak ditulis karena sudah dipahami dalam kalimat perintah.</p>
`,group:7}],summary:`<p><strong>V1</strong> digunakan pada Simple Present (dengan penyesuaian -s/-es untuk he/she/it), setelah <em>do/does/did</em>, setelah modal, dan dalam imperative.</p>
<ul>
<li><strong>V2</strong> digunakan pada Simple Past positif verbal.</li>
<li><strong>V3</strong> digunakan pada Perfect Tenses dan Passive Voice.</li>
<li><strong>V-ing</strong> digunakan pada Continuous Tenses serta pola tertentu seperti <em>How about + V-ing</em>.</li>
<li><strong>To be</strong> berubah sesuai subject dan tense: <em>am/is/are, was/were, be, been,</em> atau <em>being</em> sesuai konstruksinya.</li>
<li><strong>Passive Voice</strong> menekankan penerima tindakan dan memakai <em>to be + V3</em>.</li>
<li><strong>Suggestions</strong> umum memakai <em>should/could/ought to + V1</em>, <em>How about + V-ing</em>, dan <em>Let's + V1</em>.</li>
<li><strong>Procedure Text</strong> menjelaskan cara melakukan atau membuat sesuatu, umumnya dengan struktur Goal, Materials, dan Steps serta banyak menggunakan imperative.</li>
</ul>
`,counts:{chapters:8,sections:51,questions:82}},se={arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',"arrow-down":'<path d="M12 5v14m-5-5 5 5 5-5"/>',"arrow-up":'<path d="M12 19V5m-5 5 5-5 5 5"/>',home:'<path d="m3 10 9-7 9 7v10H3Zm6 10v-7h6v7"/>',book:'<path d="M12 5C8 2 3 3 3 3v16s5-1 9 2c4-3 9-2 9-2V3s-5-1-9 2Zm0 0v16"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',quiz:'<rect x="5" y="4" width="15" height="18" rx="3"/><path d="M9 2v4h7V2Zm0 9h7m-7 4h4"/>',shuffle:'<path d="M3 6h3c6 0 6 12 12 12h3m-4-4 4 4-4 4M3 18h3c6 0 6-12 12-12h3m-4-4 4 4-4 4"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',check:'<path d="m5 12 4 4L19 6"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',expand:'<path d="M4 9V4h5m11 5V4h-5M4 15v5h5m11-5v5h-5"/>',device:'<rect x="3" y="3" width="18" height="13" rx="2"/><path d="M8 21h8m-4-5v5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',layers:'<path d="m2 8 10-5 10 5-10 5Zm0 5 10 5 10-5M2 18l10 5 10-5"/>',chat:'<path d="M4 4h16v12H9l-5 5Zm4 5h8m-8 3h5"/>',switch:'<path d="M3 7h17m-4-4 4 4-4 4M21 17H4m4-4-4 4 4 4"/>',list:'<path d="M9 5h12M9 12h12M9 19h12m-18-14h1m-1 7h1m-1 7h1"/>'};function m(e,a=""){return`<svg class="icon ${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${se[e]||se.book}</svg>`}function le(e){return`<svg viewBox="0 0 84 76" fill="none" aria-hidden="true"><ellipse cx="43" cy="68" rx="30" ry="4" fill="#655071" opacity=".08"/>${['<g transform="rotate(-9 44 35)"><rect x="15" y="14" width="50" height="48" rx="7" fill="#bca5d6"/><rect x="12" y="10" width="50" height="48" rx="7" fill="#80649e"/><path d="M21 10v48" stroke="#5e437c"/><text x="42" y="44" text-anchor="middle" font-family="Georgia" font-size="28" fill="#fff8e7">Aa</text></g><rect x="47" y="47" width="26" height="16" rx="4" fill="#f2d788"/><path d="M53 53h14m-14 4h9" stroke="#b59c55" stroke-width="1.5"/>','<circle cx="43" cy="36" r="25" fill="#b9a7d1"/><circle cx="43" cy="34" r="21" fill="#fff9ea" stroke="#9a80b5" stroke-width="2"/><path d="M43 20v15l11 5" stroke="#73558f" stroke-width="2.5" stroke-linecap="round"/><circle cx="43" cy="34" r="2" fill="#73558f"/><rect x="23" y="55" width="42" height="13" rx="4" fill="#f0d782"/><text x="44" y="64" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#7f6946">PRESENT</text>','<rect x="17" y="15" width="51" height="47" rx="7" fill="#bcadc9"/><rect x="14" y="12" width="51" height="47" rx="7" fill="#fff8ec" stroke="#b2a1c1"/><path d="M14 27h51" stroke="#b2a1c1"/><path d="M25 8v12m29-12v12" stroke="#826595" stroke-width="4" stroke-linecap="round"/><path d="M26 37h7m6 0h7m6 0h5m-31 9h7m6 0h7" stroke="#b5a2c8" stroke-width="3"/><path d="m61 47 7 6-7 6m-11-6h18" stroke="#8c6598" stroke-width="2"/>','<path d="M13 55h54" stroke="#ab96bf" stroke-width="2"/><circle cx="24" cy="55" r="4" fill="#b8a5c9"/><circle cx="43" cy="55" r="4" fill="#a185bb"/><path d="m61 49 7 6-7 6" stroke="#73568f" stroke-width="2"/><path d="M32 35 21 40l5-12 31-16-9 29-16-6Z" fill="#f3d782" stroke="#b99e59"/><path d="m32 35 25-23-17 27-4 9-4-13Z" fill="#fff4c6" stroke="#b99e59"/>','<rect x="9" y="15" width="35" height="23" rx="6" fill="#a994c2"/><rect x="39" y="43" width="35" height="23" rx="6" fill="#f1d985"/><path d="M48 25h19m-5-5 5 5-5 5M35 55H16m5-5-5 5 5 5" stroke="#8c759e" stroke-width="2"/><text x="26" y="31" text-anchor="middle" fill="#fff8eb" font-family="Georgia" font-size="13">S + V</text><text x="56" y="58" text-anchor="middle" fill="#856c3d" font-family="Georgia" font-size="11">be + V3</text>','<path d="M11 15h43v29H31L18 55V44h-7Z" fill="#aa96be"/><path d="M37 34h34v25H60l-9 9v-9H37Z" fill="#f3db8c" stroke="#dbc174"/><path d="M21 25h23m-23 9h15" stroke="#f7effa" stroke-width="2" stroke-linecap="round"/><path d="M46 43h16m-16 8h11" stroke="#b19959" stroke-width="2" stroke-linecap="round"/>','<g transform="rotate(7 43 38)"><rect x="22" y="10" width="44" height="57" rx="5" fill="#bcaacc"/><rect x="18" y="7" width="44" height="57" rx="5" fill="#fff8eb" stroke="#b4a0c5"/><rect x="29" y="5" width="21" height="9" rx="3" fill="#9a81b1"/><path d="m26 25 3 3 5-6m-8 18 3 3 5-6m-8 18 3 3 5-6" stroke="#997bb0" stroke-width="1.8"/><path d="M39 25h15M39 40h15M39 55h11" stroke="#d0bbdd" stroke-width="2"/></g>','<g transform="rotate(-13 38 37)"><rect x="14" y="14" width="43" height="48" rx="6" fill="#d2bfdf"/><path d="M24 29h22m-22 9h17m-17 9h20" stroke="#aa90be" stroke-width="2"/></g><g transform="rotate(10 51 39)"><rect x="32" y="16" width="39" height="47" rx="6" fill="#fff7e8" stroke="#b6a1c7"/><text x="51" y="46" text-anchor="middle" font-family="Georgia" font-size="26" fill="#9c7db2">?</text><rect x="46" y="55" width="29" height="12" rx="4" fill="#efda90"/><path d="m53 61 3 3 6-6" stroke="#a9904c" stroke-width="1.8"/></g>'][e-1]}</svg>`}const ee=["book","clock","clock","arrow","switch","chat","list","layers"],be=[["VERB FORMS","V1 · V2 · V3 · V-ing"],["PRESENT PERFECT","have / has + V3"],["PAST CONTINUOUS","was / were + V-ing"],["FUTURE PERFECT","will + have + V3"],["PASSIVE VOICE","be + V3"],["GIVING SUGGESTIONS","How about + V-ing?"],["PROCEDURE TEXT","Goal → Materials → Steps"],["MIXED REVIEW","Konteks → pola → bentuk"]],ye=(e,a="verb")=>({text:e,role:a}),n=(e,a,t,r="",s="")=>({label:e,parts:a.split("|").map((o,d)=>ye(o,["subject","verb","object","extra"][d]||"extra")),formula:t,meaning:r,cue:s}),h=(e,a,t)=>({note:e,kind:a,items:t}),C={"s1-1":h("Susun pelaku, tindakan, lalu objek.","sentence",[n("Tindakan","She|reads|a book.","Subject + Verb + Object","Dia membaca sebuah buku."),n("Keadaan","They|are|students.","Subject + be + Complement","Mereka adalah siswa."),n("Sifat","My brother|is|happy.","Subject + be + Complement","Saudara laki-laki saya bahagia.")]),"s1-2":h("Subject pronoun = pengganti pelaku.","people",[n("I","I|study|English.","I = saya","Saya belajar Bahasa Inggris."),n("You","You|look|happy.","You = kamu / kalian","Kamu terlihat bahagia."),n("We","We|play|football.","We = kami / kita"),n("They","They|work|here.","They = mereka"),n("He","He|reads|a book.","He = dia (laki-laki)"),n("She","She|writes|a letter.","She = dia (perempuan)"),n("It","It|looks|beautiful.","It = benda / hewan / hal")]),"s1-3":h("Object pronoun menerima tindakan.","people",[n("me","She|helps|me.","I → me","Dia membantu saya."),n("you","I|call|you.","You → you"),n("us","They|invite|us.","We → us"),n("them","I|know|them.","They → them"),n("him","We|meet|him.","He → him"),n("her","I|help|her.","She → her"),n("it","Please|move|it.","It → it")]),"s1-4":h("Bentuk kata kerja berubah sesuai pola.","forms",[n("write","write|wrote|written|writing","V1 → V2 → V3 → V-ing","menulis"),n("go","go|went|gone|going","V1 → V2 → V3 → V-ing","pergi"),n("play","play|played|played|playing","Regular: V2 dan V3 berakhiran -ed","bermain"),n("study","study|studied|studied|studying","study → studied: y berubah menjadi i","belajar")]),"s1-5":h("Cocokkan subject dengan to be.","people",[n("I · kini","I|am|a student.","I + am","Saya seorang siswa."),n("She · kini","She|is|tired.","He / She / It + is","Dia lelah."),n("They · kini","They|are|at school.","You / We / They + are"),n("He · dulu","He|was|sick yesterday.","I / He / She / It + was"),n("We · dulu","We|were|busy last week.","You / We / They + were")]),"s1-6":h("Sesudah do, does, atau did: kembali ke V1.","sentence",[n("do","Do they|study|English?","Do + S + V1?","Apakah mereka belajar Bahasa Inggris?"),n("does","She|does not like|coffee.","Does + not + V1, bukan likes"),n("did","They|did not go|home.","Did + not + V1, bukan went"),n("has","She|has finished|her work.","Has + V3"),n("have","They|have finished|their work.","Have + V3")]),"s1-7":h("Ada tindakan? Verbal. Menghubungkan keadaan? Nominal.","sentence",[n("Verbal","She|plays|badminton.","Subject + action verb","Dia bermain bulu tangkis."),n("Nominal","She|is|a student.","Subject + be + complement","Dia seorang siswa."),n("Tanya nominal","Is she|happy?","Be + subject + complement?","Tidak memakai does she be.")]),"s1-8":h("He, she, it: tambahkan -s/-es pada kalimat positif.","people",[n("They","They|play|football.","I / You / We / They + V1"),n("She","She|plays|football.","He / She / It + V1(s/es)"),n("Study","She|studies|English.","study → studies"),n("Have","My brother|has|a bicycle.","have → has")]),"s2-5":h("Pilih makna, bukan hanya penanda waktu.","now",[n("Kebiasaan","She|studies|every day.","Simple Present"),n("Sedang","She|is studying|now.","Present Continuous"),n("Sudah","She|has finished|her work.","Present Perfect"),n("Durasi","She|has been studying|for two hours.","Present Perfect Continuous")]),"s3-5":h("Empat sudut pandang pada masa lalu.","past",[n("Selesai","She|studied|yesterday.","Simple Past"),n("Sedang saat itu","She|was studying|at 8 p.m.","Past Continuous"),n("Lebih dahulu","She|had studied|before dinner.","Past Perfect"),n("Durasi sebelumnya","She|had been studying|for an hour before dinner.","Past Perfect Continuous")]),"s4-5":h("Rencana masa depan dilihat dari masa lalu.","past",[n("Would","She|said|she would help us.","would + V1","Dia mengatakan bahwa dia akan membantu kami."),n("Was going to","I|was going to study,|but I fell asleep.","was / were + going to + V1","Saya tadinya akan belajar, tetapi tertidur.")]),"s4-6":h("Pilih apa yang akan terjadi dan bagaimana prosesnya.","future",[n("Akan","She|will study|tomorrow.","will + V1"),n("Akan sedang","She|will be studying|at 8 p.m.","will + be + V-ing"),n("Akan sudah","She|will have finished|by Friday.","will + have + V3"),n("Durasi","She|will have been studying|for two hours by 9 p.m.","will + have + been + V-ing")]),"s5-1":h("Passive menyorot penerima tindakan.","passive",[n("Active","The teacher|explains|the lesson.","Pelaku → tindakan → penerima","Guru menjelaskan pelajaran."),n("Passive","The lesson|is explained|by the teacher.","Penerima → be + V3 → by pelaku","Pelajaran dijelaskan oleh guru.")]),"s5-2":h("Inti passive: be + V3.","passive",[n("Present","The room|is cleaned|every day.","am / is / are + V3"),n("Past","The room|was cleaned|yesterday.","was / were + V3"),n("Future","The room|will be cleaned|tomorrow.","will + be + V3")]),"s5-3":h("Pindahkan objek, sesuaikan be, gunakan V3.","passive",[n("01 · Active","They|clean|the room.","Subject + V1 + Object"),n("02 · Pindah objek","The room|←|They clean the room.","Objek menjadi subject passive"),n("03 · Passive","The room|is cleaned|by them.","S + is + V3 + by + object pronoun")]),"s5-4":h("Tense menentukan bentuk be; kata kerja utama tetap V3.","passive",[n("Continuous","The road|is being repaired|now.","am / is / are + being + V3"),n("Perfect","The work|has been finished.","has / have + been + V3"),n("Past perfect","The work|had been finished.","had + been + V3"),n("Future","The letter|will be sent|tomorrow.","will + be + V3")]),"s5-5":h("Tiga pola passive yang paling umum.","passive",[n("Present","English|is spoken|here.","am / is / are + V3"),n("Past","The letter|was written|yesterday.","was / were + V3"),n("Future","The documents|will be sent|tomorrow.","will + be + V3")]),"s5-6":h("Modal tidak berubah; tambahkan be + V3.","passive",[n("must","The rules|must be followed.","must + be + V3","Aturan harus dipatuhi."),n("should","The room|should be cleaned.","should + be + V3"),n("can","The problem|can be solved.","can + be + V3")]),"s5-7":h("Pelaku boleh dihilangkan jika tidak penting atau tidak diketahui.","passive",[n("Dengan pelaku","The room|is cleaned|by the staff.","by + pelaku","Fokus tambahan: siapa yang membersihkan."),n("Tanpa pelaku","The room|is cleaned|every day.","be + V3; by bersifat opsional","Fokus: ruangan dan tindakannya.")]),"s5-8":h("Passive memerlukan objek dari kalimat aktif.","sentence",[n("Ada objek","They|clean|the room.","✓ the room dapat menjadi subject passive"),n("Tanpa objek","He|sleeps.","Tidak dapat dipasifkan langsung: tidak ada objek."),n("Tanpa objek","She|arrived|early.","Tidak dapat dipasifkan langsung: tidak ada objek.")]),"s5-9":h("Sesudah by, pakai object pronoun.","people",[n("he → him","The letter|is written|by him.","he → him"),n("she → her","The room|is cleaned|by her.","she → her"),n("they → them","The work|is done|by them.","they → them"),n("we → us","The project|is completed|by us.","we → us")]),"s6-1":h("Saran menawarkan tindakan, bukan memerintah.","chat",[n("Masalah","I|am|tired.","A · menyampaikan keadaan","Saya lelah."),n("Saran","You|should take|a rest.","B · memberi saran","Kamu sebaiknya beristirahat.")]),"s6-2":h("Minta ide atau tindakan yang sebaiknya dilakukan.","chat",[n("What should…","What|should I do?","Meminta saran","Apa yang sebaiknya saya lakukan?"),n("Suggest","What|do you suggest?","Meminta ide","Apa saranmu?"),n("Advice","Can you|give me|some advice?","advice: uncountable","Bisakah kamu memberi saya nasihat?")]),"s6-3":h("Pilih ungkapan saran sesuai situasi.","chat",[n("Should","You|should study|harder.","should + V1","Kamu sebaiknya belajar lebih giat."),n("Could","You|could ask|your teacher.","could + V1"),n("Why don’t…","Why don't you|try|again?","Why don't you + V1?"),n("How about…","How about|taking|a break?","How about + V-ing?")]),"s6-4":h("Perhatikan bentuk kata kerja setelah ungkapan saran.","chat",[n("Should","You|should drink|more water.","should + V1"),n("How about","How about|studying|together?","How about + V-ing?"),n("Let’s","Let's|review|the lesson.","Let's + V1"),n("Suggest","I|suggest taking|a taxi.","suggest + V-ing")]),"s6-5":h("Menerima saran dengan jelas dan sopan.","chat",[n("Setuju","That|is|a good idea.","Menerima ide","Itu ide yang bagus."),n("Bersedia","I'll|try|that.","Menerima tindakan","Saya akan mencobanya."),n("Ayo","Let's|do|that.","Menyetujui ajakan","Mari kita lakukan itu.")]),"s6-6":h("Berterima kasih, lalu sampaikan penolakan dengan sopan.","chat",[n("Rencana lain","Thanks,|but I have|another plan.","Thanks + alasan","Terima kasih, tetapi saya punya rencana lain."),n("Kurang cocok","I|don't think|that will work.","Menolak dengan sopan","Saya rasa itu tidak akan berhasil.")]),"s6-7":h("Masalah → saran → tanggapan.","chat",[n("01 · A","I|have difficulty|understanding the lesson.","MASALAH","Saya kesulitan memahami pelajaran."),n("02 · B","Why don't you|ask|your teacher for help?","SARAN","Mengapa tidak meminta bantuan guru?"),n("03 · A","That|is|a good idea.","TANGGAPAN","Itu ide yang bagus.")]),"s6-8":h("Ungkapan saran memakai beberapa pola, bukan satu tense.","chat",[n("Modal","You|should study|more.","should + V1"),n("V-ing","How about|studying|together?","How about + V-ing"),n("Conditional","If I were you,|I would talk|to the teacher.","If I were you, I would + V1")]),"s7-1":h("Procedure text menunjukkan cara melakukan atau membuat sesuatu.","steps",[n("Goal","How to Make|a Cup of Tea","GOAL · tujuan"),n("Materials","Tea bag|hot water|cup","MATERIALS · bahan / alat"),n("Steps","Put|pour|wait|serve","STEPS · urutan tindakan")]),"s7-2":h("Tujuannya: pembaca dapat mengikuti langkahnya.","steps",[n("Membuat","How to Make|a Fruit Salad","Membuat sesuatu"),n("Menggunakan","How to Use|a Printer","Menggunakan alat"),n("Melakukan","How to Wash|Your Hands","Melakukan kegiatan")]),"s7-3":h("Tiga bagian utama, dibaca berurutan.","steps",[n("01 · Goal","How to Make|a Cup of Tea","Apa yang akan dibuat?"),n("02 · Materials","A tea bag|hot water|a cup","Apa yang diperlukan?"),n("03 · Steps","Put|pour|wait|serve","Bagaimana caranya?")]),"s7-4":h("Gunakan perintah, kata kerja tindakan, dan urutan yang jelas.","steps",[n("Imperative","Add|some sugar.","V1 + object · tanpa subject you"),n("Sequence","First,|boil|the water.","First → next → then → finally"),n("Adverb","Stir|the tea|slowly.","slowly = cara melakukan"),n("Quantity","Add|two teaspoons|of sugar.","Ukuran / jumlah yang jelas")]),"s7-5":h("Langkah memakai imperative; penjelasan umum sering Simple Present.","steps",[n("Instruksi","Turn off|the computer.","Imperative: V1 + object"),n("Fakta umum","The computer|turns off|automatically.","Simple Present: S + V1(s/es)"),n("Passive","The ingredients|are mixed.","Simple Present Passive: be + V3")]),"s7-6":h("Ikuti urutan membuat secangkir teh.","tea",[n("01 · Put","Put|the tea bag|into a cup.","FIRST","Masukkan kantong teh ke cangkir."),n("02 · Pour","Pour|hot water|into the cup.","NEXT","Tuang air panas ke cangkir."),n("03 · Wait","Wait|for three minutes.","THEN","Tunggu tiga menit."),n("04 · Serve","Finally,|remove the tea bag|and serve the tea.","FINALLY","Angkat kantong teh, lalu sajikan.")]),"s7-7":h("Tujuan jelas, bahan lengkap, langkah berurutan.","steps",[n("Tujuan","Goal|jelas","01 · tentukan hasil akhir"),n("Bahan","Materials|lengkap","02 · sertakan alat dan bahan"),n("Langkah","Steps|berurutan","03 · satu tindakan utama per langkah"),n("Kata kerja","Use|imperatives","04 · V1: add, pour, stir, serve")]),"s8-1":h("Periksa konteks sebelum memilih rumus.","steps",[n("01 · Waktu","Past|present|future","Kapan tindakannya terjadi?"),n("02 · Makna","Habit|process|result|duration","Bagaimana tindakan dipandang?"),n("03 · Bentuk","Active|passive|question","Bagaimana bentuk kalimatnya?"),n("04 · Cocokkan","Subject|verb form","Periksa agreement dan V1 / V2 / V3 / V-ing")]),"s8-2":h("Kalimat mirip, sudut pandangnya berbeda.","now",[n("Kebiasaan","She|studies|every day.","Simple Present"),n("Sedang","She|is studying|now.","Present Continuous"),n("Sudah","She|has finished|her work.","Present Perfect"),n("Sebelumnya","She|had studied|before dinner.","Past Perfect")]),"s8-3":h("Bandingkan pola yang sering tertukar.","sentence",[n("V2","I|saw|him yesterday.","Simple Past: waktu lampau spesifik"),n("have + V3","I|have seen|him before.","Present Perfect: pengalaman"),n("be + V-ing","She|is writing|a report.","Continuous aktif"),n("be + V3","The report|is written|by her.","Passive")])},we=[["s2-1","Kebiasaan, fakta, atau jadwal tetap.","now","She|studies|English every day.","She|does not study|English every day.","Does she|study|English every day?","S + V1(s/es)","S + do/does + not + V1","Do/Does + S + V1?","setiap hari"],["s2-2","Tindakan sedang berlangsung sekarang.","now","They|are playing|football now.","They|are not playing|football now.","Are they|playing|football now?","S + am/is/are + V-ing","S + am/is/are + not + V-ing","Am/Is/Are + S + V-ing?","sekarang"],["s2-3","Kejadian lampau yang berkaitan dengan sekarang.","now","She|has finished|her work.","She|has not finished|her work.","Has she|finished|her work?","S + have/has + V3","S + have/has + not + V3","Have/Has + S + V3?","hasilnya sekarang"],["s2-4","Durasi aktivitas sampai sekarang.","duration","She|has been studying|for two hours.","She|has not been studying|for two hours.","Has she|been studying|for two hours?","S + have/has + been + V-ing","S + have/has + not + been + V-ing","Have/Has + S + been + V-ing?","dua jam → sekarang"],["s3-1","Tindakan selesai pada masa lalu.","past","They|visited|the museum yesterday.","They|did not visit|the museum yesterday.","Did they|visit|the museum yesterday?","S + V2","S + did + not + V1","Did + S + V1?","kemarin"],["s3-2","Tindakan sedang berlangsung pada waktu lampau.","past","She|was reading|at 8 p.m.","She|was not reading|at 8 p.m.","Was she|reading|at 8 p.m.?","S + was/were + V-ing","S + was/were + not + V-ing","Was/Were + S + V-ing?","pukul 8 saat itu"],["s3-3","Sudah selesai sebelum kejadian lampau lain.","past","They|had left|before I arrived.","They|had not left|before I arrived.","Had they|left|before I arrived?","S + had + V3","S + had + not + V3","Had + S + V3?","selesai lebih dahulu"],["s3-4","Durasi aktivitas sebelum kejadian lampau lain.","duration","She|had been studying|for two hours before dinner.","She|had not been studying|for two hours before dinner.","Had she|been studying|for two hours before dinner?","S + had + been + V-ing","S + had + not + been + V-ing","Had + S + been + V-ing?","dua jam → waktu lampau"],["s4-1","Tindakan yang akan terjadi.","future","She|will visit|her aunt tomorrow.","She|will not visit|her aunt tomorrow.","Will she|visit|her aunt tomorrow?","S + will + V1","S + will + not + V1","Will + S + V1?","besok"],["s4-2","Akan sedang berlangsung pada waktu mendatang.","future","She|will be studying|at 8 p.m.","She|will not be studying|at 8 p.m.","Will she|be studying|at 8 p.m.?","S + will + be + V-ing","S + will + not + be + V-ing","Will + S + be + V-ing?","pukul 8 mendatang"],["s4-3","Akan sudah selesai sebelum batas waktu mendatang.","future","They|will have completed|the project by June.","They|will not have completed|the project by June.","Will they|have completed|the project by June?","S + will + have + V3","S + will + not + have + V3","Will + S + have + V3?","selesai sebelum Juni"],["s4-4","Durasi aktivitas sampai batas waktu mendatang.","duration","He|will have been studying|for four hours by 9 p.m.","He|will not have been studying|for four hours by 9 p.m.","Will he|have been studying|for four hours by 9 p.m.?","S + will + have + been + V-ing","S + will + not + have + been + V-ing","Will + S + have + been + V-ing?","empat jam → pukul 9 mendatang"]];for(const[e,a,t,r,s,o,d,l,p,u]of we)C[e]=h(a,t,[n("+ Positif",r,d,"",u),n("− Negatif",s,l,"",u),n("? Pertanyaan",o,p,"",u)]),C[e].timePosition=e.startsWith("s3")?22:e.startsWith("s4")?78:50;function fe(e,a){const t=e.items[a],r=e.timePosition??(e.kind==="past"?22:e.kind==="future"?78:50);return["past","now","future","duration"].includes(e.kind)?`<div class="time-diagram" style="--event:${r}%;--start:${Math.max(5,r-30)}%;--duration:${r-Math.max(5,r-30)}%" aria-label="Diagram waktu"><div class="time-axis"><span>PAST</span><span>NOW</span><span>FUTURE</span></div><div class="time-rail"><i class="time-now"></i>${e.kind==="duration"?'<span class="time-duration"></span>':""}<span class="time-event" style="--event:${r}%">${m("clock")}</span></div><p>${y(t.cue||t.label)}</p></div>`:e.kind==="forms"?`<div class="forms-diagram">${["V1","V2","V3","V-ing"].map((s,o)=>`<span><b>${s}</b><i>${["base","past","participle","continuous"][o]}</i></span>`).join("<em>→</em>")}</div>`:e.kind==="passive"?`<div class="voice-diagram"><span class="voice-person">${m("device")}<small>PELAKU</small></span><span class="voice-flow">${m("arrow")}<i>tindakan</i></span><span class="voice-target">${m("book")}<small>PENERIMA</small></span></div>`:e.kind==="chat"?`<div class="chat-diagram"><span class="chat-avatar">A</span><div class="chat-bubble">${m("chat")}<i>${t.formula}</i><span></span><span></span><span></span></div><span class="chat-avatar other">B</span></div>`:e.kind==="tea"?`<div class="tea-diagram step-${a}"><svg viewBox="0 0 280 125" fill="none" aria-hidden="true"><ellipse cx="142" cy="112" rx="75" ry="8" fill="#b9a3ce" opacity=".15"/><path d="M90 41h90v48c0 29-90 29-90 0Z" fill="#fff9eb" stroke="#cbb5db" stroke-width="2"/><path d="M181 50c48-7 41 47 0 39" stroke="#ccb6db" stroke-width="9"/><ellipse cx="135" cy="41" rx="45" ry="10" fill="#dac89c"/><path class="tea-water" d="M94 60h82v27c0 23-82 23-82 0Z" fill="#d2ab66" opacity=".7"/><path class="tea-string" d="M140 9v65h17" stroke="#a286b6" stroke-width="2"/><rect class="tea-bag" x="120" y="59" width="28" height="28" rx="5" fill="#b49a83"/><path class="tea-steam" d="M108 26c-11-15 12-12 2-26m25 26c-11-15 12-12 2-26m25 26c-11-15 12-12 2-26" stroke="#c4afce" stroke-width="2" stroke-linecap="round"/></svg></div>`:e.kind==="steps"?`<div class="step-diagram">${e.items.map((s,o)=>`<span class="${o===a?"current":o<a?"passed":""}"><b>${o<a?"✓":String(o+1).padStart(2,"0")}</b><i>${s.label.replace(/^\d+ · /,"")}</i></span>`).join("")}</div>`:e.kind==="people"?`<div class="people-diagram"><span class="person-bust"><i></i><b></b></span><span class="person-link">→</span><div class="pronoun-bubble">${y(t.parts[0].text)}</div><span class="mini-book">${m("book")}</span></div>`:'<div class="syntax-diagram"><span>S<small>SUBJECT</small></span><i>→</i><span>V<small>VERB</small></span><i>→</i><span>O / C<small>OBJECT / COMPLEMENT</small></span></div>'}function de(e,a){const t=e.items[a],r=e.kind==="forms"?["V1","V2","V3","V-ing"]:Be(e);return`${fe(e,a)}<div class="sentence-pieces" lang="en">${t.parts.map((s,o)=>`<div class="sentence-piece piece-${s.role}"><b>${y(s.text)}</b><small>${r[o]||"KETERANGAN"}</small></div>`).join("")}</div><div class="lab-bottom"><div class="lab-formula">${m("layers")}<span>${y(t.formula)}</span></div>${t.meaning?`<p>${y(t.meaning)}</p>`:""}</div>`}function ve(e,a){const t=C[e.id];return`<div class="visual-lab" data-lab="${e.id}" data-index="0"><div class="lab-caption"><span>${m(ee[a-1])} ${y(t.note)}</span><b>INTERAKTIF</b></div><div class="lab-controls" role="group" aria-label="Contoh ${y(e.title)}">${t.items.map((r,s)=>`<button class="${s===0?"selected":""}" data-lab-choice="${s}" aria-pressed="${s===0}">${y(r.label)}</button>`).join("")}</div><div class="lab-stage" aria-live="polite">${de(t,0)}</div><div class="lab-pagination"><span>01 <i>/ ${String(t.items.length).padStart(2,"0")}</i></span><button data-lab-next>Contoh berikutnya ${m("arrow")}</button></div></div>`}function Be(e){return e===C["s1-1"]?["SUBJECT","VERB","OBJECT / COMPLEMENT","KETERANGAN"]:["AWAL","INTI","PELENGKAP","KETERANGAN"]}const b=matchMedia("(prefers-reduced-motion: reduce)"),ue="english-xi-course-v1",F=new Map(w.questions.map(e=>[e.id,e]));let g=1,W=null,E=null,Y=!0,T=null,f={version:1,current:1,sessions:{}};try{const e=JSON.parse(localStorage.getItem(ue)||"null");e?.version===1&&e.sessions&&typeof e.sessions=="object"&&!Array.isArray(e.sessions)&&(f=e,g=e.current==="mixed"||w.chapters.some(a=>a.id===e.current)?e.current:1)}catch{Y=!1}function M(){f.current=g;try{localStorage.setItem(ue,JSON.stringify(f))}catch{Y=!1}i("#save-status").innerHTML=m("device")+(Y?"Disimpan di perangkat ini":"Mode sementara · penyimpanan tidak tersedia")}function xe(e=document){e.querySelectorAll("[data-icon]").forEach(a=>a.outerHTML=m(a.dataset.icon))}const x=new WeakMap;function k(e,a,t=330,r=0){if(!e)return;const s=x.get(e);if(b.matches){s?.cancel(),x.delete(e);return}if(s&&s.playState!=="idle"&&s.playState!=="finished"){const d=getComputedStyle(e);a=[{...a[0]},...a.slice(1)];for(const l of Object.keys(a[0]))["opacity","transform","translate","scale"].includes(l)&&(a[0][l]=d[l]);s.cancel()}const o=e.animate(a,{duration:t,delay:r,easing:"cubic-bezier(.22,1,.36,1)",fill:"both"});x.set(e,o),o.finished.then(()=>{x.get(e)===o&&(o.cancel(),x.delete(e))}).catch(()=>{x.get(e)===o&&x.delete(e)})}function L(){return w.chapters.find(e=>e.id===g)}function v(){return String(g)}function Se(e,a){if(!e||!Array.isArray(e.order)||!e.options||!e.answers||typeof e.submitted!="boolean")return!1;const t=a==="mixed"?null:w.chapters.find(r=>String(r.id)===a)?.questions;if(e.order.length!==(t?t.length:10)||new Set(e.order).size!==e.order.length)return!1;for(const r of e.order){const s=F.get(r);if(!s||t&&!t.includes(r))return!1;const o=e.options[r];if(!Array.isArray(o)||o.length!==4||new Set(o).size!==4||o.some(d=>!s.options.some(l=>l.id===d))||e.answers[r]&&!o.includes(e.answers[r]))return!1}return!0}for(const e of Object.keys(f.sessions))(!["mixed",...w.chapters.map(a=>String(a.id))].includes(e)||!Se(f.sessions[e],e))&&delete f.sessions[e];function V(){return f.sessions[v()]||null}function X(e){let a=0,t=0;for(const r of e.order)e.answers[r]?e.answers[r]===F.get(r).correct&&a++:t++;return{correct:a,blank:t,wrong:e.order.length-a-t,total:e.order.length,value:Math.round(a/e.order.length*100)}}function je(e){if(globalThis.crypto?.getRandomValues){const a=Math.floor(4294967296/e)*e,t=new Uint32Array(1);do crypto.getRandomValues(t);while(t[0]>=a);return t[0]%e}return Math.floor(Math.random()*e)}function R(e){const a=[...e];for(let t=a.length-1;t>0;t--){const r=je(t+1);[a[t],a[r]]=[a[r],a[t]]}return a}function re(e,a){const t=R(e);return t.length>1&&a&&t.join("|")===a.join("|")&&([t[0],t[1]]=[t[1],t[0]]),t}function Te(e){const a=new Set(e?.order||[]),t=[1,2,3,4,5,6,7,9],r=[];for(const d of t){const l=w.questions.filter(u=>u.group===d),p=l.filter(u=>!a.has(u.id));r.push(R(p.length?p:l)[0].id)}const s=w.questions.filter(d=>!r.includes(d.id)),o=s.filter(d=>!a.has(d.id));return r.push(...R(o.length>=2?o:s).slice(0,2).map(d=>d.id)),r}function he(e=v()){const a=f.sessions[e],t=e==="mixed"?Te(a):w.chapters.find(d=>String(d.id)===e).questions,r=re(t,a?.order),s={},o=re(r.map((d,l)=>l%4),null);return r.forEach((d,l)=>{const p=F.get(d),u=R(p.options.filter(c=>c.id!==p.correct).map(c=>c.id));if(u.splice(o[l],0,p.correct),a?.options[d]?.join("|")===u.join("|")){const c=[0,1,2,3].filter(B=>B!==o[l]);[u[c[0]],u[c[1]]]=[u[c[1]],u[c[0]]]}s[d]=u}),f.sessions[e]={order:r,options:s,answers:{},submitted:!1},M(),f.sessions[e]}function ae(){if(i("#chapter-nav").children.length===w.chapters.length){for(const e of w.chapters){const a=i(`#chapter-nav [data-chapter="${e.id}"]`),t=e.id===g;a.classList.toggle("active",t),a.setAttribute("aria-pressed",String(t));const r=f.sessions[String(e.id)],s=r?.submitted?X(r).value:null;let o=a.querySelector(".chapter-score");s===null?o?.remove():(o||(o=document.createElement("span"),o.className="chapter-score",a.querySelector(".chapter-card-meta").append(o)),o.textContent=String(s),o.setAttribute("aria-label","Nilai terakhir "+s))}return}i("#chapter-nav").innerHTML=w.chapters.map(e=>{const a=f.sessions[String(e.id)],t=a?.submitted?X(a).value:null;return`<button class="chapter-button ${e.id===g?"active":""}" data-chapter="${e.id}" aria-pressed="${e.id===g}" aria-controls="chapter-title"><span class="chapter-mini">${le(e.id)}</span><span class="chapter-card-copy"><small>BAB ${String(e.id).padStart(2,"0")}</small><strong>${y(e.title)}</strong><span class="chapter-card-meta">${e.sections.length} topik<i></i>${e.questions.length} soal${t!==null?`<span class="chapter-score" aria-label="Nilai terakhir ${t}">${t}</span>`:""}</span></span></button>`}).join("")}function Pe(){const e=g==="mixed"?8:g,a=be[e-1];i("#formula-icon").outerHTML=m(ee[e-1],"formula-icon"),i(".formula-icon").id="formula-icon",i("#formula-label").textContent=a[0],i("#formula-text").textContent=a[1]}function Ce(){W?.disconnect();const e=L();i("#lesson-content").innerHTML=e.sections.map((a,t)=>`<section class="lesson-section" id="${a.id}" aria-labelledby="heading-${a.id}"><div class="section-heading"><span class="section-number">${a.number}</span><h3 id="heading-${a.id}">${y(a.title)}</h3>${m(ee[e.id-1])}</div><div class="section-body">${ve(a,g)}<details class="source-details detail-block"><summary>Baca detail ${m("arrow-down")}</summary><div class="detail-content prose">${t===0?e.intro:""}${a.lead}${a.details.map(r=>`<details class="detail-block"><summary>${y(r.title)}</summary><div class="detail-content prose">${r.html}</div></details>`).join("")}</div></details></div></section>`).join(""),e.id===8&&i("#lesson-content").insertAdjacentHTML("beforeend",`<details class="lesson-summary detail-block"><summary>Ringkasan akhir</summary><div class="detail-content prose">${w.summary}</div></details>`),i("#toc").innerHTML=e.sections.map((a,t)=>`<a href="#${a.id}" ${t===0?'class="active" aria-current="location"':""}><span>${a.number}</span>${y(a.title)}</a>`).join(""),i("#chapter-intro").innerHTML="",i("#chapter-intro").hidden=!0,i(".toc-panel").hidden=!1,i("#search").disabled=!1,i(".lesson-options").hidden=!1,i("#topic-position").textContent="01 / "+String(e.sections.length).padStart(2,"0"),W=new IntersectionObserver(a=>{const t=a.filter(s=>s.isIntersecting).sort((s,o)=>s.boundingClientRect.top-o.boundingClientRect.top);if(!t.length)return;const r=t[0].target.closest(".lesson-section").id;j("#toc a").forEach(s=>{const o=s.hash==="#"+r;s.classList.toggle("active",o),o?s.setAttribute("aria-current","location"):s.removeAttribute("aria-current")}),i("#topic-position").textContent=String(e.sections.findIndex(s=>s.id===r)+1).padStart(2,"0")+" / "+String(e.sections.length).padStart(2,"0")},{rootMargin:"-100px 0px -60% 0px",threshold:0}),j(".section-heading").forEach(a=>W.observe(a)),P(),I()}function pe(e,a=!0){const t=e==="mixed"?"mixed":Number(e);if(t!=="mixed"&&!w.chapters.some(o=>o.id===t))return;++z,++Z,++J,g=t,clearTimeout(E),i("#search").value="",i("#search-clear").hidden=!0,i("#search-empty").hidden=!0,i("#search-status").textContent="",M(),ae();const r=g==="mixed",s=L();i("#chapter-kicker").innerHTML=`<span class="hero-chapter-label">${r?"LATIHAN CAMPURAN":"BAB "+String(s.id).padStart(2,"0")}</span>ENGLISH / XI`,i("#chapter-title").textContent=r?"Mixed practice.":s.title+".",i("#chapter-subtitle").textContent=r?"Grammar · tenses · passive · suggestions · procedure":s.subtitle,i("#example-english").textContent=r?"Konteks → pola → bentuk kata kerja":s.example,i("#example-english").lang=r?"id":"en",i("#example-meaning").textContent=r?"10 soal per set, dipilih dari bank 82 soal.":s.translation,i("#hero-question-count").textContent=r?"10 soal acak":s.questions.length+" soal latihan",i("#material-number").textContent=r?"—":String(s.id).padStart(2,"0"),i(".hero-actions .button").hidden=r,i(".hero-actions .hero-practice").hidden=!1,Pe(),r?(W?.disconnect(),i(".material-toolbar").hidden=!0,i(".toc-panel").hidden=!0,i(".lesson-options").hidden=!0,i("#chapter-intro").hidden=!0,i("#lesson-content").innerHTML="",i(".course-layout").classList.add("mixed-layout"),i("#end-title").textContent="Latihan campuran",i("#next-chapter").innerHTML="Kembali ke pilihan bab "+m("arrow-up")):(i(".material-toolbar").hidden=!1,i(".course-layout").classList.remove("mixed-layout"),Ce(),i("#end-title").textContent=s.title,i("#next-chapter").innerHTML=(s.id<8?"Bab berikutnya":"Latihan campuran")+" "+m("arrow")),q(),a&&(i(".chapter-hero").scrollIntoView({behavior:b.matches?"instant":"smooth",block:"start"}),i("#chapter-title").setAttribute("tabindex","-1"),i("#chapter-title").focus({preventScroll:!0})),k(i(".hero-copy"),[{opacity:0,transform:"translateY(14px)"},{opacity:1,transform:"translateY(0)"}],330),k(i(".hero-image"),[{opacity:.1,transform:"translateY(16px) scale(.96)"},{opacity:1,transform:"translateY(0) scale(1)"}],570),k(i(".scene-formula"),[{opacity:0,translate:"0 8px"},{opacity:1,translate:"0 0"}],390)}let z=0;async function me(){if(g==="mixed")return;const e=++z,a=v(),t=i("#search").value.trim().toLocaleLowerCase("id"),r=L(),s=new Set(r.sections.filter(l=>!t||l.search.includes(t)).map(l=>l.id)),o=new Map,d=[];for(const l of j(".lesson-section"))if(!l.hidden){const p=getComputedStyle(l);if(o.set(l.id,{rect:l.getBoundingClientRect(),opacity:p.opacity,transform:p.transform}),!s.has(l.id))d.push(H(l));else if(D.get(l)){const u=p.opacity,c=p.transform;D.get(l).cancel(),k(l,[{opacity:u,transform:c},{opacity:1,transform:"none"}],280)}}if(await Promise.all(d.map(l=>l.finished)),e!==z||v()!==a){d.forEach(l=>l.animation?.cancel());return}for(const l of r.sections){const p=i("#"+l.id),u=s.has(l.id);p.hidden=!u,i(`#toc a[href="#${l.id}"]`).hidden=!u}d.forEach(l=>l.animation?.cancel()),i("#chapter-intro").hidden=!0,i("#search-empty").hidden=s.size>0,i("#search-clear").hidden=!i("#search").value,i("#search-status").textContent=t?`${s.size} dari ${r.sections.length} topik cocok`:"";for(const l of r.sections)if(s.has(l.id)){const p=i("#"+l.id),u=o.get(l.id),c=p.getBoundingClientRect();(!u||Math.abs(u.rect.top-c.top)>1)&&k(p,[{opacity:u?.opacity??0,transform:`translateY(${u?u.rect.top-c.top:12}px)`},{opacity:1,transform:"none"}],350);const B=p.querySelector(".source-details");t?([...B.querySelectorAll("details")].forEach($=>{$.textContent.toLocaleLowerCase("id").includes(t)&&($.open=!0)}),_(B,!0)):B.open&&_(B,!1)}s.size||k(i("#search-empty"),[{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"none"}],300),P(),I()}function P(){const e=j(".lesson-section:not([hidden]) .source-details"),a=e.length&&e.every(t=>S.get(t)?.opening??t.open);i("#detail-toggle").lastElementChild.textContent=a?"Tutup semua detail":"Buka semua detail",i("#detail-toggle").setAttribute("aria-expanded",String(!!a)),i("#detail-toggle").hidden=e.length===0}function q(){const e=V(),a=g==="mixed",t=a?10:L().questions.length;if(i("#quiz-title").textContent=a?"Latihan campuran.":"Latihan Bab "+String(g).padStart(2,"0")+".",i("#quiz-count").textContent=t+" soal · A–D",!e){i("#quiz-workspace").innerHTML=`${a?'<p class="mixed-info">10 soal · 8 kelompok materi · urutan acak.</p>':""}<div class="quiz-start"><div class="quiz-emblem" aria-hidden="true">${le(8)}</div><div class="quiz-start-copy"><h3>${t} soal. Siap mencoba?</h3><p>Pilih jawaban → cek nilai → lihat pembahasan.</p><div class="quiz-start-tags"><span>${m("shuffle")}Urutan acak</span><span>${m("check-circle")}Pembahasan tersedia</span></div></div><button class="button primary" id="quiz-start">Mulai latihan ${m("arrow")}</button></div>`,I();return}const r=e.submitted?X(e):null;i("#quiz-workspace").innerHTML=`${r?Ve(r):""}<div class="quiz-session-header"><span>${e.submitted?"Jawaban sudah dikunci":"Pilih satu jawaban untuk setiap soal."}</span><button data-restart>${m("shuffle")}Acak ulang</button></div><div class="question-list">${e.order.map((s,o)=>Ae(F.get(s),o,e)).join("")}</div>${e.submitted?`<div class="result-end"><a href="#quiz-result">Kembali ke hasil ↑</a><button class="button secondary" data-restart>${m("shuffle")}Acak & coba lagi</button></div>`:`<div class="quiz-submit-bar"><div><p class="quiz-progress-copy" id="quiz-progress-text"></p><div class="quiz-progress-track" aria-hidden="true"><span></span></div></div><button class="button primary" id="quiz-submit">Cek jawaban ${m("check-circle")}</button></div>`}`,e.submitted||ge(),I()}function Ve(e){return`<div class="quiz-result" id="quiz-result"><div class="score-ring" style="--score:${e.value}" aria-label="Nilai ${e.value} dari 100"><div><strong>${e.value}</strong><small>DARI 100</small></div></div><div class="result-copy"><span class="eyebrow">HASIL LATIHAN</span><h3 tabindex="-1" id="result-title">${e.correct} dari ${e.total} benar.</h3><div class="score-breakdown"><span>${e.correct} benar</span><span>${e.wrong} salah</span><span>${e.blank} kosong</span></div><p>Buka pembahasan jika diperlukan.</p><span class="sr-only" role="status">Nilai ${e.value} dari 100. ${e.correct} benar, ${e.wrong} salah, ${e.blank} kosong.</span></div><button class="button secondary" data-restart>${m("shuffle")}Coba lagi</button></div>`}function Ae(e,a,t){const r=t.answers[e.id],s=t.submitted,o=r===e.correct,d=!r,l=s?`<div class="question-feedback"><span class="feedback-label ${d?"blank":o?"":"wrong"}">${m(o?"check-circle":d?"quiz":"close")}${d?"Tidak dijawab":o?"Jawaban benar":"Jawaban kurang tepat"}</span>${o?"":`<p class="correct-answer">Jawaban benar: <strong>${"ABCD"[t.options[e.id].indexOf(e.correct)]} · ${y(e.options.find(p=>p.id===e.correct).text)}</strong></p>`}<details class="feedback-detail detail-block"><summary>Lihat pembahasan ${m("arrow-down")}</summary><div class="detail-content explanation prose">${e.explanation}</div></details></div>`:"";return`<article class="question-card" id="q-${e.id}" data-question="${e.id}"><div class="question-top"><span class="question-counter"><b>${String(a+1).padStart(2,"0")}</b> / ${t.order.length}</span><span class="question-id">${e.id}</span></div><div class="question-prompt prose" id="prompt-${e.id}">${e.prompt}</div><fieldset class="question-options" aria-labelledby="prompt-${e.id}" ${s?"disabled":""}><legend>Pilihan jawaban soal ${a+1}</legend>${t.options[e.id].map((p,u)=>{const c=e.options.find($=>$.id===p),B=s&&p===e.correct,K=s&&r===p&&!o;return`<label class="option ${B?"is-correct":K?"is-wrong":""}"><input type="radio" name="answer-${e.id}" value="${p}" data-answer="${e.id}" ${r===p?"checked":""}><span class="option-letter" aria-hidden="true">${"ABCD"[u]}</span><span class="option-text">${c.html}</span>${B||K?`<span class="option-status" aria-label="${B?"Jawaban benar":"Jawaban salah"}">${m(B?"check":"close")}</span>`:""}</label>`}).join("")}</fieldset>${l}</article>`}function ge(){const e=V();if(!e||e.submitted)return;const a=e.order.filter(t=>e.answers[t]).length;i("#quiz-progress-text").innerHTML=`<strong>${a} / ${e.order.length}</strong> soal terjawab`,i(".quiz-progress-track>span").style.width=a/e.order.length*100+"%"}function ce(e,a,t="Lanjutkan",r="Batal"){if(T)return Promise.resolve(!1);const s=i("#confirm-dialog");return i("#confirm-title").textContent=e,i("#confirm-description").textContent=a,i("#confirm-accept").textContent=t,i("#confirm-cancel").textContent=r,s.showModal(),i("#confirm-cancel").focus(),k(s,[{opacity:0,transform:"translateY(14px) scale(.97)"},{opacity:1,transform:"translateY(0) scale(1)"}],250),new Promise(o=>T=o)}async function O(e){if(!T||i("#confirm-dialog").classList.contains("closing"))return;const a=i("#confirm-dialog");a.classList.add("closing");const t=H(a);await t.finished,t.animation?.cancel(),a.close(),a.classList.remove("closing");const r=T;T=null,r?.(e)}async function Ie(){const e=v(),a=V();if(!a||a.submitted||T)return;const t=a.order.filter(s=>!a.answers[s]).length;t&&!await ce(`Masih ada ${t} soal kosong.`,"Jawaban kosong bernilai 0. Setelah diperiksa, semua jawaban dikunci. Tetap cek sekarang?","Tetap cek","Lanjut mengisi")||v()!==e||V()!==a||a.submitted||!await ie(()=>{a.submitted=!0,M(),ae(),q()})||v()!==e||(i("#quiz-result").scrollIntoView({behavior:b.matches?"instant":"smooth",block:"start"}),i("#result-title").focus({preventScroll:!0}),k(i(".score-ring"),[{opacity:.3,transform:"scale(.9)"},{opacity:1,transform:"scale(1)"}],400))}async function De(){const e=v(),a=V();T||a&&(a.submitted||Object.keys(a.answers).length)&&!await ce("Mulai percobaan baru?",a.submitted?"Hasil dan jawaban percobaan ini akan diganti. Soal dan pilihan akan diacak kembali.":"Jawaban pada percobaan ini akan dihapus. Urutan soal dan pilihan akan diacak kembali.","Acak & mulai","Batal")||v()!==e||!await ie(()=>{he(e),ae(),q()})||v()!==e||(i("#latihan").scrollIntoView({behavior:b.matches?"instant":"smooth",block:"start"}),i(".question-card input")?.focus({preventScroll:!0}))}i("#chapter-nav").addEventListener("click",e=>{const a=e.target.closest("button[data-chapter]");a&&ne(a.dataset.chapter)});i("#mixed-launch").onclick=()=>ne("mixed");i("#next-chapter").onclick=()=>{if(g==="mixed"){i("#pilihan-bab").scrollIntoView({behavior:b.matches?"instant":"smooth"});return}ne(g<8?g+1:"mixed")};i("#search").addEventListener("input",()=>{clearTimeout(E),E=setTimeout(me,100)});function te(){clearTimeout(E),i("#search").value="",me(),i("#search").focus()}i("#search-clear").onclick=te;i("#search-reset").onclick=te;i("#detail-toggle").onclick=()=>{const e=j(".lesson-section:not([hidden]) .source-details"),a=!e.every(t=>S.get(t)?.opening??t.open);e.forEach(t=>_(t,a)),P()};i("#lesson-content").addEventListener("toggle",P,!0);i("#quiz-workspace").addEventListener("change",e=>{const a=e.target.closest("input[data-answer]"),t=V();if(!a||!t||t.submitted)return;const r=a.dataset.answer;t.order.includes(r)&&t.options[r].includes(a.value)&&(t.answers[r]=a.value,M(),ge())});i("#quiz-workspace").addEventListener("click",e=>{e.target.closest("#quiz-start")?_e():e.target.closest("#quiz-submit")?Ie():e.target.closest("[data-restart]")&&De()});i("#confirm-accept").onclick=()=>O(!0);i("#confirm-cancel").onclick=()=>O(!1);i("#confirm-dialog").addEventListener("cancel",e=>{e.preventDefault(),O(!1)});i("#confirm-dialog").addEventListener("click",e=>{if(e.target===i("#confirm-dialog")){const a=e.target.getBoundingClientRect();(e.clientX<a.left||e.clientX>a.right||e.clientY<a.top||e.clientY>a.bottom)&&O(!1)}});i("#back-top").onclick=()=>i("#pilihan-bab").scrollIntoView({behavior:b.matches?"instant":"smooth"});document.addEventListener("keydown",e=>{e.key==="/"&&!e.ctrlKey&&!e.metaKey&&!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)&&!i("#confirm-dialog").open&&g!=="mixed"&&(e.preventDefault(),i("#search").focus(),i("#materi").scrollIntoView({behavior:b.matches?"instant":"smooth",block:"start"})),e.key==="Escape"&&document.activeElement===i("#search")&&!i("#confirm-dialog").open&&te()});const ke=new WeakSet,A=new Set,G=new IntersectionObserver(e=>{let a=0;for(const t of e)if(t.isIntersecting){if(G.unobserve(t.target),A.delete(t.target),!t.target.isConnected||!t.target.getClientRects().length)continue;ke.add(t.target),t.target.classList.add("seen"),k(t.target,[{opacity:0,transform:"translateY(19px) scale(.985)"},{opacity:1,transform:"translateY(0) scale(1)"}],480,Math.min(a++*45,180)),t.target.matches(".visual-lab")&&t.target.querySelectorAll(".sentence-piece").forEach((r,s)=>k(r,[{opacity:0,transform:"translateY(9px) scale(.96)"},{opacity:1,transform:"translateY(0) scale(1)"}],420,s*45))}},{threshold:.06,rootMargin:"0px 0px -15px 0px"});function I(){for(const e of A)e.isConnected||(G.unobserve(e),A.delete(e));if(!b.matches)for(const e of j(".visual-lab,.question-card,.quiz-start,.quiz-result,.chapter-button"))!ke.has(e)&&!A.has(e)&&(A.add(e),G.observe(e))}const D=new WeakMap;function H(e){if(!e||b.matches||!e.getClientRects().length)return{finished:Promise.resolve(),animation:null};const a=getComputedStyle(e),t=a.opacity,r=a.transform;x.get(e)?.cancel(),x.delete(e),D.get(e)?.cancel();const s=e.animate([{opacity:t,transform:r},{opacity:0,transform:"translateY(-9px) scale(.985)"}],{duration:155,easing:"cubic-bezier(.4,0,1,1)",fill:"both"});return D.set(e,s),{animation:s,finished:s.finished.catch(()=>{})}}function U(e){const a=e.getBoundingClientRect();return a.bottom>80&&a.top<innerHeight&&a.height>0}let J=0,Z=0;async function ne(e){const a=e==="mixed"?"mixed":Number(e),t=++J;if(a===g){for(const o of[i(".hero-copy"),i(".hero-image"),i(".scene-formula"),...j(".visual-lab").filter(U)]){const d=getComputedStyle(o),l=d.opacity,p=d.transform;D.get(o)?.cancel(),k(o,[{opacity:l,transform:p},{opacity:1,transform:"none"}],250)}i(".chapter-hero").scrollIntoView({behavior:b.matches?"instant":"smooth"});return}const r=[i(".hero-copy"),i(".hero-image"),i(".scene-formula"),...j(".visual-lab").filter(U).slice(0,2)].filter(Boolean),s=r.map(H);if(await Promise.all(s.map(o=>o.finished)),t!==J){s.forEach(o=>o.animation?.cancel());return}s.forEach(o=>o.animation?.cancel()),pe(a),I()}async function ie(e){const a=++Z,t=v(),r=j("#quiz-workspace .quiz-start,#quiz-workspace .question-card,#quiz-workspace .quiz-result,#quiz-workspace .quiz-submit-bar").filter(U).slice(0,4),s=r.map(H);await Promise.all(s.map(d=>d.finished));const o=a===Z&&t===v();return o&&e(),s.forEach(d=>d.animation?.cancel()),o}async function _e(){await ie(()=>{he(),q()})&&(i("#latihan").scrollIntoView({behavior:b.matches?"instant":"smooth",block:"start"}),i(".question-card input")?.focus({preventScroll:!0}))}const S=new WeakMap;function _(e,a){const t=e.querySelector(":scope > .detail-content"),r=S.get(e),s=e.getBoundingClientRect().height;if(r?.animation?.cancel(),r?.contentAnimation?.cancel(),b.matches||!t){e.open=a,e.style.height="",e.style.overflow="",S.delete(e),P();return}e.open=!0,e.style.height="";const o=e.getBoundingClientRect().height,d=a?o:e.querySelector("summary").getBoundingClientRect().height+2;e.style.overflow="hidden",e.style.height=s+"px";const l=e.animate([{height:s+"px"},{height:d+"px"}],{duration:330,easing:"cubic-bezier(.22,1,.36,1)",fill:"both"}),p=t.animate(a?[{opacity:0,transform:"translateY(-6px)"},{opacity:1,transform:"translateY(0)"}]:[{opacity:getComputedStyle(t).opacity},{opacity:0}],{duration:a?310:160,fill:"both"}),u={animation:l,contentAnimation:p,opening:a};S.set(e,u),P(),l.finished.then(()=>{S.get(e)===u&&(e.open=a,e.style.height="",e.style.overflow="",l.cancel(),p.cancel(),S.delete(e),P())}).catch(()=>{})}i("#lesson-content").addEventListener("click",e=>{const a=e.target.closest("summary");if(!a)return;e.preventDefault();const t=a.parentElement;_(t,!(S.get(t)?.opening??t.open))});const N=new WeakMap;async function oe(e,a){const t=C[e.dataset.lab],r=Number(e.dataset.index);if(Number(e.dataset.pendingIndex??r)===a)return;e.dataset.pendingIndex=String(a);const s=(N.get(e)||0)+1;N.set(e,s),e.querySelectorAll("[data-lab-choice]").forEach(u=>{const c=Number(u.dataset.labChoice)===a;u.classList.toggle("selected",c),u.setAttribute("aria-pressed",String(c))});const o=e.querySelector(".lab-stage"),d=H(o);if(await d.finished,N.get(e)!==s){d.animation?.cancel();return}const l=o.getBoundingClientRect().height;o.innerHTML=de(t,a),e.dataset.index=a,delete e.dataset.pendingIndex,e.querySelector(".lab-pagination>span").innerHTML=String(a+1).padStart(2,"0")+" <i>/ "+String(t.items.length).padStart(2,"0")+"</i>",d.animation?.cancel(),k(o,[{opacity:0,transform:"translateY(9px)"},{opacity:1,transform:"translateY(0)"}],350),o.querySelectorAll(".sentence-piece").forEach((u,c)=>k(u,[{opacity:0,transform:"translateY(10px) scale(.96)"},{opacity:1,transform:"translateY(0) scale(1)"}],370,c*45));const p=o.getBoundingClientRect().height;if(!b.matches&&Math.abs(p-l)>2){const u=o.animate([{height:l+"px"},{height:p+"px"}],{duration:330,easing:"cubic-bezier(.22,1,.36,1)"});u.finished.then(()=>u.cancel()).catch(()=>{})}}i("#lesson-content").addEventListener("click",e=>{const a=e.target.closest("[data-lab]");if(!a)return;const t=e.target.closest("[data-lab-choice]");t?oe(a,Number(t.dataset.labChoice)):e.target.closest("[data-lab-next]")&&oe(a,(Number(a.dataset.pendingIndex??a.dataset.index)+1)%C[a.dataset.lab].items.length)});i("#quiz-workspace").addEventListener("click",e=>{const a=e.target.closest("summary");if(!a)return;e.preventDefault();const t=a.parentElement;_(t,!(S.get(t)?.opening??t.open))});i("#quiz-workspace").addEventListener("change",e=>{const a=e.target.closest(".option");a&&k(a.querySelector(".option-letter"),[{transform:"scale(.75) rotate(-12deg)"},{transform:"scale(1.12) rotate(4deg)",offset:.6},{transform:"scale(1) rotate(0deg)"}],340)});let Q=0;i(".hero-scene").addEventListener("pointermove",e=>{b.matches||e.pointerType!=="mouse"||(cancelAnimationFrame(Q),Q=requestAnimationFrame(()=>{const a=i(".hero-scene").getBoundingClientRect();i(".hero-scene").style.setProperty("--px",((e.clientX-a.left)/a.width-.5)*9+"px"),i(".hero-scene").style.setProperty("--py",((e.clientY-a.top)/a.height-.5)*7+"px")}))});i(".hero-scene").addEventListener("pointerleave",()=>{cancelAnimationFrame(Q),i(".hero-scene").style.setProperty("--px","0px"),i(".hero-scene").style.setProperty("--py","0px")});xe();pe(g,!1);M();document.fonts.ready.then(()=>{k(i(".collection-heading"),[{opacity:.5,transform:"translateY(9px)"},{opacity:1,transform:"translateY(0)"}],400)});
