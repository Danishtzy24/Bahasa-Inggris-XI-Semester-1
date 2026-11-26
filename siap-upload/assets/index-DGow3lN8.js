(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function i(e,a=document){const n=a.querySelector(e);if(!n)throw new Error(`Element tidak ditemukan: ${e}`);return n}function S(e,a=document){return Array.from(a.querySelectorAll(e))}const w=e=>String(e??"").replace(/[&<>"']/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[a]),y={chapters:[{id:1,title:"Grammar foundations",fullTitle:"Dasar-Dasar Grammar dan Bentuk Kata Kerja",subtitle:"Pronouns · verb forms · auxiliaries",intro:"",example:"She writes a letter.",translation:"Dia menulis sebuah surat.",sections:[{id:"s1-1",number:"1.1",title:"Apa itu grammar?",lead:`<p>Grammar adalah aturan yang mengatur cara menyusun kata menjadi frasa dan kalimat yang dapat dipahami. Dalam bahasa Inggris, susunan kalimat dasar yang sering digunakan adalah:</p>
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
`}],search:"2.1 simple present tense  fungsi simple present digunakan untuk: kebiasaan atau rutinitas: i wake up at five every morning. fakta umum: water boils at 100°c at sea level. keadaan yang relatif tetap: she lives in jakarta. jadwal tetap: the train leaves at 7 a.m. rumus verbal bentuk rumus positif (+) s + v1(s/es) + o/c negatif (−) s + do/does + not + v1 + o/c pertanyaan (?) do/does + s + v1 + o/c? gunakan does untuk he, she, it, atau subject tunggal. gunakan do untuk i, you, we, they, atau subject jamak. contoh: (+) she studies english every day. (−) she does not study english every day. (?) does she study english every day? rumus nominal bentuk rumus positif (+) s + am/is/are + c negatif (−) s + am/is/are + not + c pertanyaan (?) am/is/are + s + c? contoh: (+) they are students. (−) they are not students. (?) are they students? keterangan waktu yang sering digunakan always, usually, often, sometimes, rarely, never, every day, every week, dan once a month . adverb of frequency biasanya diletakkan sebelum main verb: she usually walks to school. namun, jika menggunakan to be , letakkan setelah to be : she is usually punctual."},{id:"s2-2",number:"2.2",title:"Present Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Present Continuous digunakan untuk:</p>
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
`}],search:"2.2 present continuous tense  fungsi present continuous digunakan untuk: aktivitas yang sedang berlangsung sekarang: i am reading now. aktivitas sementara di sekitar waktu sekarang: she is staying with her aunt this week. rencana masa depan yang sudah diatur: we are meeting the teacher tomorrow. perubahan atau perkembangan: the city is growing quickly. rumus bentuk rumus positif (+) s + am/is/are + v-ing + o/c negatif (−) s + am/is/are + not + v-ing + o/c pertanyaan (?) am/is/are + s + v-ing + o/c? contoh: (+) they are playing football now. (−) they are not playing football now. (?) are they playing football now? aturan penulisan -ing umumnya tambahkan -ing: read → reading. jika verb berakhir dengan e yang tidak dibunyikan, hilangkan e: write → writing. pada beberapa kata pendek dengan pola tertentu, konsonan akhir digandakan: run → running, sit → sitting. lie berubah menjadi lying . keterangan waktu now, right now, at the moment, currently, today, dan this week (bergantung konteks). catatan: stative verbs beberapa kata kerja yang menyatakan keadaan, pikiran, perasaan, kepemilikan, atau indra biasanya tidak digunakan dalam bentuk continuous ketika bermakna keadaan. contohnya know, believe, understand, need, prefer, own, dan belong . umum: i know the answer. tidak umum untuk makna keadaan: i am knowing the answer. sebagian kata dapat menjadi action verb dalam konteks tertentu, sehingga bisa memakai continuous: i am thinking about the problem."},{id:"s2-3",number:"2.3",title:"Present Perfect Tense",lead:"",details:[{title:"Fungsi",html:`<p>Present Perfect menghubungkan kejadian masa lalu dengan masa sekarang. Penggunaannya antara lain:</p>
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
`}],search:"2.3 present perfect tense  fungsi present perfect menghubungkan kejadian masa lalu dengan masa sekarang. penggunaannya antara lain: pengalaman tanpa menyebut waktu lampau yang spesifik: i have visited bali. tindakan yang baru selesai atau hasilnya relevan sekarang: she has just finished her homework. keadaan atau tindakan yang dimulai di masa lalu dan masih berlaku: we have lived here for five years. periode waktu yang belum selesai: i have read two chapters today. rumus bentuk rumus positif (+) s + have/has + v3 + o/c negatif (−) s + have/has + not + v3 + o/c pertanyaan (?) have/has + s + v3 + o/c? gunakan has untuk he, she, it, dan subject tunggal. gunakan have untuk i, you, we, they, dan subject jamak. contoh: (+) she has eaten breakfast. (−) she has not eaten breakfast. (?) has she eaten breakfast? keterangan waktu already: sudah; biasanya dalam kalimat positif. just: baru saja. yet: belum/sudah; sering dipakai di akhir kalimat negatif atau pertanyaan. ever: pernah; sering dipakai dalam pertanyaan pengalaman. never: tidak pernah. since: sejak titik awal waktu, misalnya since 2022 . for: selama suatu durasi, misalnya for three years . jangan memakai present perfect untuk waktu lampau yang sudah selesai dan disebut secara spesifik seperti yesterday, last year, atau in 2020 . gunakan simple past untuk konteks tersebut."},{id:"s2-4",number:"2.4",title:"Present Perfect Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Present Perfect Continuous menekankan durasi atau proses aktivitas yang dimulai di masa lalu dan masih berlangsung sekarang, atau baru berhenti tetapi dampaknya terlihat.</p>
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
`}],search:"2.4 present perfect continuous tense  fungsi present perfect continuous menekankan durasi atau proses aktivitas yang dimulai di masa lalu dan masih berlangsung sekarang, atau baru berhenti tetapi dampaknya terlihat. contoh: i have been studying for two hours. — saya sudah belajar selama dua jam dan kemungkinan masih belajar. it has been raining. — hujan telah berlangsung; mungkin baru berhenti dan dampaknya masih terlihat. rumus bentuk rumus positif (+) s + have/has + been + v-ing + o/c negatif (−) s + have/has + not + been + v-ing + o/c pertanyaan (?) have/has + s + been + v-ing + o/c? contoh: (+) they have been working for three hours. (−) they have not been working for three hours. (?) have they been working for three hours? present perfect vs. present perfect continuous i have written three emails. fokus pada hasil atau jumlah email yang selesai. i have been writing emails for an hour. fokus pada proses dan durasi menulis."},{id:"s2-5",number:"2.5",title:"Ringkasan Present Tenses",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
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
`}],search:"3.1 simple past tense  fungsi simple past digunakan untuk: tindakan yang selesai pada masa lalu: i visited my grandmother yesterday. rangkaian kejadian di masa lalu: she opened the door, entered the room, and sat down. keadaan di masa lalu: he was a student in 2020. kebiasaan di masa lalu yang sudah tidak berlaku: we played outside every afternoon when we were children. rumus verbal bentuk rumus positif (+) s + v2 + o/c negatif (−) s + did + not + v1 + o/c pertanyaan (?) did + s + v1 + o/c? contoh: (+) she went to school yesterday. (−) she did not go to school yesterday. (?) did she go to school yesterday? rumus nominal bentuk rumus positif (+) s + was/were + c negatif (−) s + was/were + not + c pertanyaan (?) was/were + s + c? gunakan was untuk i, he, she, it, atau subject tunggal. gunakan were untuk you, we, they, atau subject jamak. contoh: (+) they were tired. (−) they were not tired. (?) were they tired? keterangan waktu yesterday, last night, last week, two days ago, in 2020, when i was young, dan this morning jika pagi tersebut sudah berlalu."},{id:"s3-2",number:"3.2",title:"Past Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Past Continuous menjelaskan aktivitas yang sedang berlangsung pada waktu tertentu di masa lalu. Tense ini juga sering digunakan untuk menunjukkan aktivitas yang sedang berlangsung ketika kejadian lain terjadi.</p>
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
`}],search:"3.2 past continuous tense  fungsi past continuous menjelaskan aktivitas yang sedang berlangsung pada waktu tertentu di masa lalu. tense ini juga sering digunakan untuk menunjukkan aktivitas yang sedang berlangsung ketika kejadian lain terjadi. i was studying at 8 p.m. last night. i was studying when my friend called. while i was cooking, my brother was washing the dishes. rumus bentuk rumus positif (+) s + was/were + v-ing + o/c negatif (−) s + was/were + not + v-ing + o/c pertanyaan (?) was/were + s + v-ing + o/c? contoh: (+) they were playing football. (−) they were not playing football. (?) were they playing football? penggunaan when dan while when sering memperkenalkan kejadian yang menyela: i was sleeping when the phone rang. while sering memperkenalkan aktivitas yang sedang berlangsung: while i was sleeping, the phone rang. ini pola yang sering digunakan, bukan aturan mutlak. pemilihan tense tetap bergantung pada makna kalimat."},{id:"s3-3",number:"3.3",title:"Past Perfect Tense",lead:"",details:[{title:"Fungsi",html:`<p>Past Perfect menunjukkan kejadian yang sudah selesai <strong>sebelum kejadian atau waktu lain di masa lalu</strong>.</p>
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
`}],search:"3.3 past perfect tense  fungsi past perfect menunjukkan kejadian yang sudah selesai sebelum kejadian atau waktu lain di masa lalu . contoh: the train had left before we arrived. kereta sudah berangkat sebelum kami tiba. rumus bentuk rumus positif (+) s + had + v3 + o/c negatif (−) s + had + not + v3 + o/c pertanyaan (?) had + s + v3 + o/c? contoh: (+) she had finished her homework before dinner. (−) she had not finished her homework before dinner. (?) had she finished her homework before dinner? had digunakan untuk semua subject."},{id:"s3-4",number:"3.4",title:"Past Perfect Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Past Perfect Continuous menekankan durasi suatu aktivitas yang sudah berlangsung sebelum titik waktu atau kejadian lain di masa lalu.</p>
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
`}],search:"3.4 past perfect continuous tense  fungsi past perfect continuous menekankan durasi suatu aktivitas yang sudah berlangsung sebelum titik waktu atau kejadian lain di masa lalu. contoh: they had been waiting for an hour before the bus arrived. mereka telah menunggu selama satu jam sebelum bus datang. rumus bentuk rumus positif (+) s + had + been + v-ing + o/c negatif (−) s + had + not + been + v-ing + o/c pertanyaan (?) had + s + been + v-ing + o/c? contoh: (+) he had been working for five hours before he took a break. (−) he had not been working for five hours before he took a break. (?) had he been working for five hours before he took a break?"},{id:"s3-5",number:"3.5",title:"Perbedaan empat Past Tenses",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
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
`}],search:"4.1 simple future tense  fungsi simple future digunakan untuk menyatakan: keputusan spontan: the phone is ringing. i will answer it. prediksi atau pendapat tentang masa depan: i think it will rain. janji, tawaran, atau kesediaan: i will help you. peristiwa yang akan terjadi: the exam will begin at 8 a.m. rumus dengan will bentuk rumus positif (+) s + will + v1 + o/c negatif (−) s + will + not + v1 + o/c pertanyaan (?) will + s + v1 + o/c? contoh: (+) she will visit her aunt tomorrow. (−) she will not visit her aunt tomorrow. (?) will she visit her aunt tomorrow? will not dapat disingkat menjadi won't . be going to be going to adalah konstruksi masa depan yang umum digunakan untuk rencana atau prediksi berdasarkan tanda/bukti yang terlihat. bentuk rumus positif (+) s + am/is/are + going to + v1 negatif (−) s + am/is/are + not + going to + v1 pertanyaan (?) am/is/are + s + going to + v1? contoh: i am going to study tonight. — saya berencana belajar malam ini. look at those clouds. it is going to rain. — lihat awan itu. sepertinya akan hujan. perbedaan will dan going to membantu memahami konteks, tetapi dalam penggunaan nyata keduanya kadang dapat saling menggantikan."},{id:"s4-2",number:"4.2",title:"Future Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Future Continuous menyatakan aktivitas yang akan sedang berlangsung pada waktu tertentu di masa depan.</p>
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
`}],search:"4.2 future continuous tense  fungsi future continuous menyatakan aktivitas yang akan sedang berlangsung pada waktu tertentu di masa depan. contoh: this time tomorrow, i will be traveling to bandung. rumus bentuk rumus positif (+) s + will + be + v-ing + o/c negatif (−) s + will + not + be + v-ing + o/c pertanyaan (?) will + s + be + v-ing + o/c? contoh: (+) she will be studying at 8 p.m. (−) she will not be studying at 8 p.m. (?) will she be studying at 8 p.m.?"},{id:"s4-3",number:"4.3",title:"Future Perfect Tense",lead:"",details:[{title:"Fungsi",html:`<p>Future Perfect menyatakan aktivitas yang diperkirakan sudah selesai sebelum waktu atau batas tertentu di masa depan.</p>
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
`}],search:"4.3 future perfect tense  fungsi future perfect menyatakan aktivitas yang diperkirakan sudah selesai sebelum waktu atau batas tertentu di masa depan. contoh: i will have finished the report by friday. rumus bentuk rumus positif (+) s + will + have + v3 + o/c negatif (−) s + will + not + have + v3 + o/c pertanyaan (?) will + s + have + v3 + o/c? contoh: (+) they will have completed the project by june. (−) they will not have completed the project by june. (?) will they have completed the project by june?"},{id:"s4-4",number:"4.4",title:"Future Perfect Continuous Tense",lead:"",details:[{title:"Fungsi",html:`<p>Future Perfect Continuous menekankan durasi aktivitas yang akan telah berlangsung sampai titik waktu tertentu di masa depan.</p>
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
`}],search:"4.4 future perfect continuous tense  fungsi future perfect continuous menekankan durasi aktivitas yang akan telah berlangsung sampai titik waktu tertentu di masa depan. contoh: by next month, she will have been working here for two years. rumus bentuk rumus positif (+) s + will + have + been + v-ing + o/c negatif (−) s + will + not + have + been + v-ing + o/c pertanyaan (?) will + s + have + been + v-ing + o/c? contoh: (+) he will have been studying for four hours by 9 p.m. (−) he will not have been studying for four hours by 9 p.m. (?) will he have been studying for four hours by 9 p.m.?"},{id:"s4-5",number:"4.5",title:"Future in the Past",lead:`<p><em>Future in the Past</em> menjelaskan sesuatu yang dianggap akan terjadi jika dilihat dari sudut pandang masa lalu. Bagian ini sering dipelajari bersama reported speech atau cerita masa lalu. Bentuk ini bukan kelompok tambahan dalam daftar 12 tenses utama yang umum dipakai di sekolah.</p>
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
`,details:[],search:"5.3 cara mengubah active voice menjadi passive voice temukan subject, verb, dan object pada kalimat aktif. pindahkan object aktif menjadi subject kalimat pasif. tentukan tense pada kalimat aktif. gunakan to be yang sesuai dengan tense dan subject baru. ubah verb utama menjadi v3. tambahkan by + pelaku jika pelakunya penting atau perlu disebutkan. contoh langkah: active: the students (s) clean (v1) the classroom (o). object aktif: the classroom menjadi subject pasif. tense: simple present. passive: the classroom is cleaned by the students."},{id:"s5-4",number:"5.4",title:"Passive Voice dalam berbagai tenses",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
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
`}],search:"5.5 passive voice pada tiga tense yang paling sering dipelajari  a. simple present passive bentuk rumus positif (+) s + am/is/are + v3 negatif (−) s + am/is/are + not + v3 pertanyaan (?) am/is/are + s + v3? contoh: (+) the classroom is cleaned every morning. (−) the classroom is not cleaned every morning. (?) is the classroom cleaned every morning? b. simple past passive bentuk rumus positif (+) s + was/were + v3 negatif (−) s + was/were + not + v3 pertanyaan (?) was/were + s + v3? contoh: (+) the bridge was built in 2010. (−) the bridge was not built in 2010. (?) was the bridge built in 2010? c. simple future passive bentuk rumus positif (+) s + will + be + v3 negatif (−) s + will + not + be + v3 pertanyaan (?) will + s + be + v3? contoh: (+) the invitations will be sent tomorrow. (−) the invitations will not be sent tomorrow. (?) will the invitations be sent tomorrow?"},{id:"s5-6",number:"5.6",title:"Passive Voice dengan modal verbs",lead:`<p>Setelah modal seperti <em>can, could, may, might, must, should,</em> dan <em>ought to</em>, bentuk passive menggunakan <strong>be + V3</strong>.</p>
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
`,details:[],search:"5.9 perubahan pronoun pada bagian by jika subject kalimat aktif dipindahkan menjadi agent setelah by , gunakan object pronoun. subject aktif bentuk setelah by i by me you by you we by us they by them he by him she by her it by it contoh: she writes the letter → the letter is written by her."}],questions:["B5-01","B5-02","B5-03","B5-04","B5-05","B5-06","B5-07","B5-08","B5-09","B5-10"]},{id:6,title:"Asking & giving opinion",fullTitle:"Asking and Giving Opinion",subtitle:"Opinions · agreement · polite disagreement",intro:`<p>Opinion adalah <strong>pendapat pribadi</strong> yang belum tentu fakta. Dalam ujian, kamu diminta mengenali cara <em>meminta</em> pendapat, <em>menyampaikan</em> pendapat, lalu <em>menanggapi</em> pendapat orang lain — dengan bahasa yang sopan dan beralasan.</p>
`,example:"In my view, online learning is effective because students can repeat the material.",translation:"Menurut saya, belajar daring efektif karena siswa bisa mengulang materi.",sections:[{id:"sop-1",number:"6.1",title:"What is an opinion?",lead:`<p>Opinion adalah ungkapan tentang apa yang <strong>kita pikirkan atau rasakan</strong>, bukan fakta yang bisa dibuktikan. Setiap opini yang baik selalu dibarengi <strong>alasan</strong> (<em>because…</em>).</p>
<ul>
<li><strong>Opinion:</strong> <span lang="en">Math is the hardest subject.</span> — Matematika itu pelajaran paling sulit. <em>(pandangan pribadi)</em></li>
<li><strong>Fact:</strong> <span lang="en">Math has 12 chapters this semester.</span> — Semester ini matematika punya 12 bab. <em>(bisa diverifikasi)</em></li>
</ul>
<p>Kata penanda opinion: <em>in my view, I think, I believe, in my opinion, to my mind</em>.</p>
`,details:[{title:"Opinion vs fact",html:`<p>Ujian sering meminta kamu membedakan keduanya. Opinion memakai kata penanda pribadi (<em>I think…</em>) dan bisa berbeda antar orang; fact menyatakan data yang sama untuk semua orang.</p>
<ul>
<li><span lang="en">I think horror movies are boring.</span> → opinion</li>
<li><span lang="en">That movie was released in 2019.</span> → fact</li>
</ul>
`},{title:"Opinion dengan alasan",html:`<p>Opini yang kuat = <strong>ungkapan opini + alasan logis</strong>. Alasan menjawab pertanyaan <em>why?</em>.</p>
<ul>
<li><span lang="en">I believe reading is important <strong>because</strong> it expands our vocabulary.</span></li>
<li><span lang="en">In my view, school uniforms are useful <strong>because</strong> they reduce peer pressure.</span></li>
</ul>
`}],search:"6.1 what is an opinion? opinion adalah ungkapan tentang apa yang kita pikirkan atau rasakan , bukan fakta yang bisa dibuktikan. setiap opini yang baik selalu dibarengi alasan ( because… ). opinion: math is the hardest subject. — matematika itu pelajaran paling sulit. (pandangan pribadi) fact: math has 12 chapters this semester. — semester ini matematika punya 12 bab. (bisa diverifikasi) kata penanda opinion: in my view, i think, i believe, in my opinion, to my mind . opinion vs fact ujian sering meminta kamu membedakan keduanya. opinion memakai kata penanda pribadi ( i think… ) dan bisa berbeda antar orang; fact menyatakan data yang sama untuk semua orang. i think horror movies are boring. → opinion that movie was released in 2019. → fact opinion dengan alasan opini yang kuat = ungkapan opini + alasan logis . alasan menjawab pertanyaan why? . i believe reading is important because it expands our vocabulary. in my view, school uniforms are useful because they reduce peer pressure."},{id:"sop-2",number:"6.2",title:"Asking for opinion",lead:`<p>Saat kamu ingin <strong>meminta pendapat</strong> orang lain, pakai pertanyaan berikut. Perhatikan: ini <em>meminta</em> opini, bukan <em>memberi</em> opini.</p>
<ul>
<li><span lang="en"><strong>What do you think</strong> about this plan?</span> — Apa pendapatmu tentang rencana ini?</li>
<li><span lang="en"><strong>How do you feel about</strong> studying online?</span> — Bagaimana perasaanmu tentang belajar daring?</li>
<li><span lang="en"><strong>Do you think</strong> we should postpone the event?</span> — Menurutmu, sebaiknya kita menunda acara itu?</li>
<li><span lang="en"><strong>What is your opinion on</strong> school uniforms?</span> — Apa pendapatmu soal seragam sekolah?</li>
</ul>
<p><strong>Tanda khas:</strong> bentuk ini adalah <em>question</em> — ada kata tanya atau auxiliaries di depan subject.</p>
`,details:[{title:"Asking vs giving",html:`<p>Jangan tertukar:</p>
<ul>
<li>Asking (meminta): <span lang="en">What do <strong>you</strong> think? / Do <strong>you</strong> think…?</span></li>
<li>Giving (menyampaikan): <span lang="en"><strong>I</strong> think… / <strong>My</strong> view is…</span></li>
</ul>
<p>Kata <em>you</em> muncul → meminta; kata <em>I/my</em> sebagai pelaku → memberi.</p>
`},{title:"Respons ketika ditanya",html:`<p>Saat ditanya opini, jawab dengan pola <strong>opini + alasan</strong>:</p>
<ul>
<li><span lang="en">— What do you think about the new canteen?</span></li>
<li><span lang="en">— <strong>I think it's great because</strong> the food is cheaper and the queue is shorter.</span></li>
</ul>
`}],search:"6.2 asking for opinion saat kamu ingin meminta pendapat orang lain, pakai pertanyaan berikut. perhatikan: ini meminta opini, bukan memberi opini. what do you think about this plan? — apa pendapatmu tentang rencana ini? how do you feel about studying online? — bagaimana perasaanmu tentang belajar daring? do you think we should postpone the event? — menurutmu, sebaiknya kita menunda acara itu? what is your opinion on school uniforms? — apa pendapatmu soal seragam sekolah? tanda khas: bentuk ini adalah question — ada kata tanya atau auxiliaries di depan subject. asking vs giving jangan tertukar: asking (meminta): what do you think? / do you think…? giving (menyampaikan): i think… / my view is… kata you muncul → meminta; kata i/my sebagai pelaku → memberi. respons ketika ditanya saat ditanya opini, jawab dengan pola opini + alasan : — what do you think about the new canteen? — i think it's great because the food is cheaper and the queue is shorter."},{id:"sop-3",number:"6.3",title:"Giving opinion",lead:`<p>Menyampaikan pendapat dengan kalimat utuh: <strong>ungkapan opini + alasan</strong>. Pilih ungkapan sesuai tingkat keyakinanmu.</p>
<ul>
<li><span lang="en"><strong>In my view,</strong> the decision was fair.</span> — Menurut saya, keputusan itu adil.</li>
<li><span lang="en"><strong>I believe</strong> practice makes perfect.</span> — Saya percaya latihan menyempurnakan.</li>
<li><span lang="en"><strong>To my mind,</strong> teamwork speeds up the work.</span> — Sebab saya, kerja sama mempercepat pekerjaan.</li>
<li><span lang="en"><strong>From my point of view,</strong> the plan is too risky.</span> — Dari sudut pandang saya, rencana itu terlalu berisiko.</li>
</ul>
<p><strong>Urutan emas:</strong> <em>ungkapan opini → alasan (because) → (opsional) contoh</em>.</p>
`,details:[{title:"Kalimat utuh lengkap",html:`<p>Soal sering meminta kamu menyusun respons <em>lengkap</em> dalam satu kalimat utuh:</p>
<ul>
<li><span lang="en">I don't think the idea works <strong>because</strong> we don't have enough budget.</span></li>
<li><span lang="en"><strong>In my opinion,</strong> we should start early <strong>since</strong> the deadline is close.</span></li>
</ul>
`},{title:"Opini kuat vs opini lemah",html:`<p>Opini <strong>kuat</strong>: alasan logis dan spesifik. Opini <strong>lemah</strong>: hanya selera atau klaim umum tanpa bukti.</p>
<ul>
<li>Kuat: <span lang="en">I prefer printed books <strong>because</strong> my eyes get tired reading screens.</span></li>
<li>Lemah: <span lang="en">Printed books are better. Everyone knows that.</span> <em>(klaim umum tanpa alasan)</em></li>
</ul>
`}],search:"6.3 giving opinion menyampaikan pendapat dengan kalimat utuh: ungkapan opini + alasan . pilih ungkapan sesuai tingkat keyakinanmu. in my view, the decision was fair. — menurut saya, keputusan itu adil. i believe practice makes perfect. — saya percaya latihan menyempurnakan. to my mind, teamwork speeds up the work. — sebab saya, kerja sama mempercepat pekerjaan. from my point of view, the plan is too risky. — dari sudut pandang saya, rencana itu terlalu berisiko. urutan emas: ungkapan opini → alasan (because) → (opsional) contoh . kalimat utuh lengkap soal sering meminta kamu menyusun respons lengkap dalam satu kalimat utuh: i don't think the idea works because we don't have enough budget. in my opinion, we should start early since the deadline is close. opini kuat vs opini lemah opini kuat : alasan logis dan spesifik. opini lemah : hanya selera atau klaim umum tanpa bukti. kuat: i prefer printed books because my eyes get tired reading screens. lemah: printed books are better. everyone knows that. (klaim umum tanpa alasan)"},{id:"sop-4",number:"6.4",title:"Agreeing with an opinion",lead:`<p>Menanggapi opini orang lain dengan <strong>setuju</strong>. Gunakan kalimat singkat atau setuju lalu menambahkan:</p>
<ul>
<li><span lang="en"><strong>I agree with you.</strong> — Saya setuju denganmu.</span></li>
<li><span lang="en"><strong>That's exactly how I feel.</strong> — Persis seperti yang saya rasakan.</span></li>
<li><span lang="en"><strong>So do I. / Neither do I.</strong> — Saya juga begitu. / Saya juga tidak.</span></li>
<li><span lang="en"><strong>You're absolutely right.</strong> — Kamu benar sekali.</span></li>
</ul>
<p>Bisa ditambah alasan: <span lang="en">I agree <strong>because</strong> it saves a lot of time.</span></p>
`,details:[{title:"So do I vs Neither do I",html:`<p><strong>So + aux + subject</strong> untuk kalimat positif; <strong>Neither + aux + subject</strong> untuk kalimat negatif. Auxiliaries mengikuti kalimat sebelumnya.</p>
<ul>
<li><span lang="en">— I enjoy reading novels. — <strong>So do I.</strong></span></li>
<li><span lang="en">— I don't like spicy food. — <strong>Neither do I.</strong></span></li>
</ul>
`}],search:"6.4 agreeing with an opinion menanggapi opini orang lain dengan setuju . gunakan kalimat singkat atau setuju lalu menambahkan: i agree with you. — saya setuju denganmu. that's exactly how i feel. — persis seperti yang saya rasakan. so do i. / neither do i. — saya juga begitu. / saya juga tidak. you're absolutely right. — kamu benar sekali. bisa ditambah alasan: i agree because it saves a lot of time. so do i vs neither do i so + aux + subject untuk kalimat positif; neither + aux + subject untuk kalimat negatif. auxiliaries mengikuti kalimat sebelumnya. — i enjoy reading novels. — so do i. — i don't like spicy food. — neither do i."},{id:"sop-5",number:"6.5",title:"Disagreeing politely",lead:`<p>Menyampaikan <strong>ketidaksetujuan</strong> harus sopan: <strong>beri apresiasi dulu, lalu sampaikan keraguan dengan alasan</strong>. Inilah pola yang paling diuji.</p>
<ul>
<li><span lang="en"><strong>I see your point, but</strong> I think we should wait until next week.</span> — Saya paham maksudmu, tapi menurut saya sebaiknya kita tunggu minggu depan.</li>
<li><span lang="en"><strong>That's a good idea, however</strong> the cost is too high.</span> — Ide bagus, namun biayanya terlalu tinggi.</li>
<li><span lang="en"><strong>I'm afraid I disagree</strong> because the data doesn't support it.</span> — Maaf, saya tidak setuju karena datanya tidak mendukung.</li>
<li><span lang="en"><strong>I don't quite agree with you.</strong> There is another reason…</span></li>
</ul>
<p><strong>Rumus:</strong> <em>apresiasi → penanda perbedaan (but/however) → opini kamu + alasan</em>.</p>
`,details:[{title:"Ungkapan kasar vs sopan",html:`<p>Ujian meminta kamu membedakan respons sopan dari yang kasar:</p>
<ul>
<li>Sopan: <span lang="en">I see your point, but have you considered the budget?</span></li>
<li>Kasar: <span lang="en">That's a stupid idea.</span> / <span lang="en">You're wrong.</span></li>
</ul>
<p>Kasar = menyerang orang, tanpa alasan, tanpa apresiasi.</p>
`},{title:"Kalimat utuh: tidak setuju + opini + alasan",html:`<p>Soal PGK sering meminta <em>semua</em> komponen ini ada dalam respons:</p>
<ul>
<li>Ungkapan tidak setuju sopan: <span lang="en">I'm afraid I disagree…</span></li>
<li>Ungkapan memberi pendapat: <span lang="en">…in my view we should…</span></li>
<li>Alasan: <span lang="en">…because…</span></li>
</ul>
`}],search:"6.5 disagreeing politely menyampaikan ketidaksetujuan harus sopan: beri apresiasi dulu, lalu sampaikan keraguan dengan alasan . inilah pola yang paling diuji. i see your point, but i think we should wait until next week. — saya paham maksudmu, tapi menurut saya sebaiknya kita tunggu minggu depan. that's a good idea, however the cost is too high. — ide bagus, namun biayanya terlalu tinggi. i'm afraid i disagree because the data doesn't support it. — maaf, saya tidak setuju karena datanya tidak mendukung. i don't quite agree with you. there is another reason… rumus: apresiasi → penanda perbedaan (but/however) → opini kamu + alasan . ungkapan kasar vs sopan ujian meminta kamu membedakan respons sopan dari yang kasar: sopan: i see your point, but have you considered the budget? kasar: that's a stupid idea. / you're wrong. kasar = menyerang orang, tanpa alasan, tanpa apresiasi. kalimat utuh: tidak setuju + opini + alasan soal pgk sering meminta semua komponen ini ada dalam respons: ungkapan tidak setuju sopan: i'm afraid i disagree… ungkapan memberi pendapat: …in my view we should… alasan: …because…"},{id:"sop-6",number:"6.6",title:"Reading a dialogue: who says what",lead:`<p>Dalam dialog beberapa penutur, tentukan <strong>peran tiap respons</strong>:</p>
<ul>
<li><strong>Menyatakan opini</strong> — <span lang="en">I think the trip should be postponed.</span></li>
<li><strong>Meragukan</strong> — <span lang="en">Are you sure about that? I'm not so sure.</span></li>
<li><strong>Setuju sebagian</strong> — <span lang="en">I agree about the cost, but the date is fine.</span></li>
<li><strong>Mengajukan sudut pandang lain</strong> — <span lang="en">From my perspective, safety is more important.</span></li>
</ul>
<p>Tanda: <em>but/however</em> → setuju sebagian; <em>are you sure/not so sure</em> → keraguan; <em>from my perspective</em> → sudut pandang lain.</p>
`,details:[{title:"Menanggapi dialog",html:`<p>Contoh analisis:</p>
<ul>
<li><span lang="en">Rina: The uniform policy is unnecessary. <strong>(opini)</strong></span></li>
<li><span lang="en">Doni: <strong>I see your point, but</strong> it builds school identity. <strong>(setuju sebagian + opini lain)</strong></span></li>
<li><span lang="en">Sari: <strong>Are you sure?</strong> Students I interviewed mostly like it. <strong>(keraguan + alasan)</strong></span></li>
</ul>
`}],search:"6.6 reading a dialogue: who says what dalam dialog beberapa penutur, tentukan peran tiap respons : menyatakan opini — i think the trip should be postponed. meragukan — are you sure about that? i'm not so sure. setuju sebagian — i agree about the cost, but the date is fine. mengajukan sudut pandang lain — from my perspective, safety is more important. tanda: but/however → setuju sebagian; are you sure/not so sure → keraguan; from my perspective → sudut pandang lain. menanggapi dialog contoh analisis: rina: the uniform policy is unnecessary. (opini) doni: i see your point, but it builds school identity. (setuju sebagian + opini lain) sari: are you sure? students i interviewed mostly like it. (keraguan + alasan)"},{id:"sop-7",number:"6.7",title:"Building a complete response",lead:`<p>Soal menyusun respons meminta <strong>kalimat utuh</strong> yang memuat tiga komponen berurutan:</p>
<ol>
<li><strong>Tanggapan awal</strong> — <span lang="en">I understand your concern, but…</span> (setuju sebagian) atau <span lang="en">That sounds interesting…</span></li>
<li><strong>Opini kamu</strong> — <span lang="en">…I believe we should…</span></li>
<li><strong>Alasan</strong> — <span lang="en">…because…</span></li>
</ol>
<p>Contoh lengkap: <span lang="en">I see your point, but I believe we should delay the project <strong>because</strong> the team is still short of members.</span></p>
`,details:[{title:"Ceklis sebelum menjawab",html:`<p>Pastikan respons kamu punya:</p>
<ul>
<li>✓ Ungkapan tanggapan yang sopan (bukan <em>You're wrong</em>)</li>
<li>✓ Opini yang jelas (<em>I think / in my view</em>)</li>
<li>✓ Alasan (<em>because / since</em>)</li>
</ul>
`}],search:"6.7 building a complete response soal menyusun respons meminta kalimat utuh yang memuat tiga komponen berurutan: tanggapan awal — i understand your concern, but… (setuju sebagian) atau that sounds interesting… opini kamu — …i believe we should… alasan — …because… contoh lengkap: i see your point, but i believe we should delay the project because the team is still short of members. ceklis sebelum menjawab pastikan respons kamu punya: ✓ ungkapan tanggapan yang sopan (bukan you're wrong ) ✓ opini yang jelas ( i think / in my view ) ✓ alasan ( because / since )"},{id:"sop-8",number:"6.8",title:"Opinion in everyday situations",lead:`<p>Opini dipakai di banyak situasi: <strong>menilai ide, film, kebijakan, kegiatan sekolah</strong>. Pola kalimatnya tetap sama:</p>
<ul>
<li><span lang="en"><strong>What do you think of</strong> the class program?</span> → meminta opini</li>
<li><span lang="en"><strong>In my opinion,</strong> the program is useful <strong>because</strong> every student gets a turn.</span> → memberi opini</li>
<li><span lang="en"><strong>I'm afraid I disagree.</strong> It wastes time <strong>because</strong> some students prepare too long.</span> → tidak setuju sopan + alasan</li>
</ul>
`,details:[{title:"Latihan cepat",html:`<p>Tentukan peran kalimat ini:</p>
<ul>
<li><span lang="en">Do you think the rule is fair?</span> → asking</li>
<li><span lang="en">To my mind, the rule is fair.</span> → giving</li>
<li><span lang="en">I agree with you, but the rule needs one change.</span> → partial agreement</li>
</ul>
`}],search:"6.8 opinion in everyday situations opini dipakai di banyak situasi: menilai ide, film, kebijakan, kegiatan sekolah . pola kalimatnya tetap sama: what do you think of the class program? → meminta opini in my opinion, the program is useful because every student gets a turn. → memberi opini i'm afraid i disagree. it wastes time because some students prepare too long. → tidak setuju sopan + alasan latihan cepat tentukan peran kalimat ini: do you think the rule is fair? → asking to my mind, the rule is fair. → giving i agree with you, but the rule needs one change. → partial agreement"}],questions:["O6-01","O6-02","O6-03","O6-04","O6-05","O6-06","O6-07","O6-08","O6-09","O6-10"]},{id:7,title:"Suggestions",fullTitle:"Giving and Asking for Suggestions",subtitle:"Asking · giving · responding",intro:"",example:"How about studying together?",translation:"Bagaimana kalau belajar bersama?",sections:[{id:"s6-1",number:"6.1",title:"Pengertian",lead:`<p><strong>Suggestion</strong> adalah saran atau usulan tentang tindakan yang dapat dilakukan seseorang untuk menghadapi situasi atau masalah. Materi ini mencakup cara meminta saran, memberi saran, menerima saran, dan menolak saran secara sopan.</p>
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
`}],search:"6.4 pola grammar untuk suggestions  a. should + v1 digunakan untuk memberikan saran atau anjuran. rumus: s + should + v1 + (o/c). contoh: you should drink more water. negatif: you should not (shouldn't) skip breakfast. pertanyaan: should i call the doctor? b. ought to + v1 menyatakan saran atau sesuatu yang dianggap sebaiknya dilakukan. rumus: s + ought to + v1 + (o/c). contoh: you ought to apologize. c. could + v1 menawarkan salah satu pilihan yang mungkin dilakukan. rumus: s + could + v1 + (o/c). contoh: you could use a dictionary. d. why don't you + v1 ...? bentuk pertanyaan yang berfungsi sebagai saran. contoh: why don't you ask your parents? e. how about / what about + noun atau v-ing? contoh: how about a cup of tea? — noun. how about taking a short break? — v-ing. what about studying together? — v-ing. jangan gunakan v1 langsung setelah how about jika yang dimaksud adalah kegiatan: how about study together tidak tepat. gunakan how about studying together? f. let's + v1 digunakan untuk mengajak seseorang melakukan sesuatu bersama. contoh: let's review the lesson. bentuk negatif: let's not waste time. g. suggest + v-ing atau suggest (that) + clause contoh: i suggest taking a taxi. i suggest that you take a taxi. dalam pola kedua, bentuk dasar take digunakan setelah suggest that pada konstruksi subjunctive; bentuk should take juga digunakan dalam beberapa variasi bahasa inggris."},{id:"s6-5",number:"6.5",title:"Accepting Suggestions (menerima saran)",lead:`<div aria-label="Tabel materi, geser untuk melihat kolom lainnya" class="table-scroll" role="region" tabindex="0"><table>
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
`,details:[],search:"6.8 apakah suggestions selalu menggunakan simple present? tidak selalu. ungkapan saran sering memakai modal seperti should, could, dan would . modal diikuti v1 dan tidak berubah menjadi -s untuk he/she/it. benar: she should study. salah: she should studies. kalimat pembuka seperti what do you suggest? menggunakan simple present. namun, pola should + v1 adalah konstruksi modal, bukan simple present biasa. untuk how about studying? , gunakan v-ing."}],questions:["B6-01","B6-02","B6-03","B6-04","B6-05","B6-06","B6-07","B6-08","B7-09","B7-10","B7-11"]},{id:8,title:"Report text",fullTitle:"Report Text",subtitle:"General classification · description · facts",intro:`<p>Report text adalah teks yang <strong>menggambarkan sesuatu secara faktual dan objektif</strong> — hewan, tumbuhan, benda, fenomena alam. Strukturnya dua bagian: <strong>General Classification</strong> (pengenalan umum) lalu <strong>Description</strong> (ciri-ciri detail).</p>
`,example:"The Komodo is the largest lizard in the world. It lives on several islands in Indonesia.",translation:"Komodo adalah kadal terbesar di dunia. Ia hidup di beberapa pulau di Indonesia.",sections:[{id:"s8-1",number:"8.1",title:"What is a report text?",lead:`<p>Report text <strong>menggambarkan sesuatu</strong> berdasarkan fakta: apa bendanya, di mana hidupnya, bagaimana ciri dan kebiasaannya. Tujuannya <strong>menginformasikan</strong>, bukan bercerita atau mengajak.</p>
<ul>
<li><span lang="en"><strong>The Komodo dragon</strong> is the world's largest lizard.</span> → pengenalan umum</li>
<li><span lang="en">It has a long tail, sharp claws, and a yellow forked tongue.</span> → ciri detail</li>
</ul>
<p><strong>Tanda khas:</strong> simple present di mana-mana, subjek generic (<em>the animal, it</em>), tanpa <em>yesterday/I/we</em>.</p>
`,details:[{title:"Report bukan cerita",html:`<p>Perbedaan mendasar:</p>
<ul>
<li>Report → <strong>menggambarkan</strong> hal yang umum, simple present, fakta.</li>
<li>Narrative/Recount → <strong>menceritakan</strong> kejadian khusus, ada tokoh & urutan peristiwa.</li>
</ul>
`}],search:"8.1 what is a report text? report text menggambarkan sesuatu berdasarkan fakta: apa bendanya, di mana hidupnya, bagaimana ciri dan kebiasaannya. tujuannya menginformasikan , bukan bercerita atau mengajak. the komodo dragon is the world's largest lizard. → pengenalan umum it has a long tail, sharp claws, and a yellow forked tongue. → ciri detail tanda khas: simple present di mana-mana, subjek generic ( the animal, it ), tanpa yesterday/i/we . report bukan cerita perbedaan mendasar: report → menggambarkan hal yang umum, simple present, fakta. narrative/recount → menceritakan kejadian khusus, ada tokoh & urutan peristiwa."},{id:"s8-2",number:"8.2",title:"General classification",lead:`<p><strong>General Classification</strong> adalah kalimat pembuka yang <strong>memperkenalkan subjek secara umum</strong>: menyebut jenis/klasifikasinya, dalam simple present, <strong>tanpa opini</strong>.</p>
<ul>
<li><span lang="en"><strong>The honeybee is a social insect that lives in colonies.</strong></span> — Lebah madu adalah serangga sosial yang hidup dalam koloni.</li>
<li><span lang="en"><strong>Rafflesia is a parasitic plant found in Sumatra.</strong></span></li>
</ul>
<p><strong>Resep menulisnya:</strong> <em>The + subject + is/has + kategori + (that/which + fakta umum)</em>.</p>
`,details:[{title:"Ciri kalimat pembuka",html:`<p>Pilih kalimat pembuka yang tepat:</p>
<ul>
<li>✓ <span lang="en">A dolphin is a marine mammal that breathes air.</span> (umum, fakta)</li>
<li>✗ <span lang="en">I think dolphins are the smartest animals.</span> (opini pribadi)</li>
<li>✗ <span lang="en">Yesterday I saw a dolphin at the zoo.</span> (pengalaman pribadi)</li>
</ul>
`},{title:"Menemukan general classification",html:`<p>Dalam sebuah paragraf, kalimat general classification biasanya <strong>kalimat pertama</strong>, menyebut <em>what it is</em> — sedangkan kalimat description menyebut <em>how it looks/behaves</em>.</p>
`}],search:"8.2 general classification general classification adalah kalimat pembuka yang memperkenalkan subjek secara umum : menyebut jenis/klasifikasinya, dalam simple present, tanpa opini . the honeybee is a social insect that lives in colonies. — lebah madu adalah serangga sosial yang hidup dalam koloni. rafflesia is a parasitic plant found in sumatra. resep menulisnya: the + subject + is/has + kategori + (that/which + fakta umum) . ciri kalimat pembuka pilih kalimat pembuka yang tepat: ✓ a dolphin is a marine mammal that breathes air. (umum, fakta) ✗ i think dolphins are the smartest animals. (opini pribadi) ✗ yesterday i saw a dolphin at the zoo. (pengalaman pribadi) menemukan general classification dalam sebuah paragraf, kalimat general classification biasanya kalimat pertama , menyebut what it is — sedangkan kalimat description menyebut how it looks/behaves ."},{id:"s8-3",number:"8.3",title:"Description",lead:`<p><strong>Description</strong> adalah bagian isi yang menguraikan <strong>ciri fisik, kebiasaan, habitat, dan kemampuan</strong> subjek — tetap fakta, simple present.</p>
<ul>
<li>Fisik: <span lang="en">It has a hard shell and four strong legs.</span></li>
<li>Kebiasaan: <span lang="en">It feeds on small fish and plants.</span></li>
<li>Habitat: <span lang="en">It lives in tropical rainforests.</span></li>
</ul>
<p>Urutan umum: <strong>klasifikasi → ciri fisik → kebiasaan/habitat → fakta menarik</strong>.</p>
`,details:[{title:"Description vs opinion",html:`<p>Description menyatakan fakta yang bisa diamati. Kalimat opini subjektif (<em>beautiful, boring, the best</em>) dan ajakan (<em>you should visit…</em>) <strong>tidak cocok</strong> untuk bagian description.</p>
`}],search:"8.3 description description adalah bagian isi yang menguraikan ciri fisik, kebiasaan, habitat, dan kemampuan subjek — tetap fakta, simple present. fisik: it has a hard shell and four strong legs. kebiasaan: it feeds on small fish and plants. habitat: it lives in tropical rainforests. urutan umum: klasifikasi → ciri fisik → kebiasaan/habitat → fakta menarik . description vs opinion description menyatakan fakta yang bisa diamati. kalimat opini subjektif ( beautiful, boring, the best ) dan ajakan ( you should visit… ) tidak cocok untuk bagian description."},{id:"s8-4",number:"8.4",title:"Report vs other text types",lead:`<p>Ujian sering membandingkan report dengan jenis teks lain. Hafalkan <strong>tujuan, tense, dan isi</strong>nya:</p>
<ul>
<li><strong>Report</strong> → menggambarkan hal umum · simple present · fakta</li>
<li><strong>Recount</strong> → menceritakan pengalaman lampau · simple past · urutan kejadian pribadi</li>
<li><strong>Procedure</strong> → menjelaskan cara melakukan · imperative + simple present · langkah</li>
<li><strong>Persuasive</strong> → membujuk pembaca · campuran · opini + ajakan</li>
<li><strong>Narrative</strong> → menghibur dengan cerita · campuran · tokoh & konflik</li>
</ul>
`,details:[{title:"Tanda report dalam teks",html:`<p>Report text bisa dikenali dari: pertama, <strong>general classification</strong> di awal; kedua, <strong>simple present</strong> konsisten; ketiga, <strong>tidak ada</strong> pengalaman pribadi penulis; keempat, bahasa <strong>faktual</strong>.</p>
`},{title:"Recount vs report",html:`<p>Ini pasangan yang paling sering diuji:</p>
<ul>
<li><span lang="en">Last year we visited Komodo Island. <strong>(recount — pengalaman)</strong></span></li>
<li><span lang="en">The Komodo dragon lives on Komodo Island. <strong>(report — fakta umum)</strong></span></li>
</ul>
`}],search:"8.4 report vs other text types ujian sering membandingkan report dengan jenis teks lain. hafalkan tujuan, tense, dan isi nya: report → menggambarkan hal umum · simple present · fakta recount → menceritakan pengalaman lampau · simple past · urutan kejadian pribadi procedure → menjelaskan cara melakukan · imperative + simple present · langkah persuasive → membujuk pembaca · campuran · opini + ajakan narrative → menghibur dengan cerita · campuran · tokoh & konflik tanda report dalam teks report text bisa dikenali dari: pertama, general classification di awal; kedua, simple present konsisten; ketiga, tidak ada pengalaman pribadi penulis; keempat, bahasa faktual . recount vs report ini pasangan yang paling sering diuji: last year we visited komodo island. (recount — pengalaman) the komodo dragon lives on komodo island. (report — fakta umum)"},{id:"s8-5",number:"8.5",title:"Language features",lead:`<p>Bahasa report text punya ciri khas yang bisa kamu kenali cepat:</p>
<ul>
<li><strong>Simple present</strong> — <span lang="en">The bird <em>builds</em> a nest. It <em>lays</em> eggs.</span></li>
<li><strong>Generic noun</strong> — <span lang="en">The animal / A dolphin / Reptiles</span> (kelas, bukan individu)</li>
<li><strong>Kata relatif &amp; teknis</strong> — <span lang="en">which, that, habitat, species, nocturnal</span></li>
<li><strong>Tanpa penanda pribadi</strong> — tidak ada <em>I, we, my, yesterday</em> dan tidak ada ajakan <em>you should</em></li>
</ul>
`,details:[{title:"Paragraf pertama yang benar",html:`<p>General classification yang baik memakai simple present + generic noun:</p>
<ul>
<li>✓ <span lang="en">Sea turtles are reptiles that lay eggs on sandy beaches.</span></li>
<li>✗ <span lang="en">Sea turtles were reptiles that laid eggs…</span> (bukan simple present)</li>
<li>✗ <span lang="en">I like sea turtles because they are cute.</span> (opini pribadi)</li>
</ul>
`}],search:"8.5 language features bahasa report text punya ciri khas yang bisa kamu kenali cepat: simple present — the bird builds a nest. it lays eggs. generic noun — the animal / a dolphin / reptiles (kelas, bukan individu) kata relatif & teknis — which, that, habitat, species, nocturnal tanpa penanda pribadi — tidak ada i, we, my, yesterday dan tidak ada ajakan you should paragraf pertama yang benar general classification yang baik memakai simple present + generic noun: ✓ sea turtles are reptiles that lay eggs on sandy beaches. ✗ sea turtles were reptiles that laid eggs… (bukan simple present) ✗ i like sea turtles because they are cute. (opini pribadi)"},{id:"s8-6",number:"8.6",title:"Reading & analyzing a report",lead:`<p>Saat menganalisis teks, tentukan:</p>
<ol>
<li><strong>Jenis paragraf</strong> — apakah general classification (pengenalan) atau description (uraian)?</li>
<li><strong>Pernyataan yang didukung teks</strong> — pilih yang informasinya benar-benar ada, bukan tambahan opini.</li>
<li><strong>Struktur</strong> — apakah pembuka sudah berfungsi sebagai klasifikasi umum?</li>
</ol>
<p>Strategi: <strong>baca paragraf pertama → tandai kalimat "X is a …" → cocokkan dengan pilihan jawaban</strong>.</p>
`,details:[{title:"Contoh analisis",html:`<p>Paragraf: <span lang="en">The tarsier is a small primate with huge eyes. It hunts insects at night.</span></p>
<ul>
<li>Kalimat 1 → general classification (jenis + ciri umum)</li>
<li>Kalimat 2 → description (kebiasaan)</li>
<li>Pernyataan didukung: <span lang="en">The tarsier is nocturnal.</span> ✓</li>
</ul>
`}],search:'8.6 reading & analyzing a report saat menganalisis teks, tentukan: jenis paragraf — apakah general classification (pengenalan) atau description (uraian)? pernyataan yang didukung teks — pilih yang informasinya benar-benar ada, bukan tambahan opini. struktur — apakah pembuka sudah berfungsi sebagai klasifikasi umum? strategi: baca paragraf pertama → tandai kalimat "x is a …" → cocokkan dengan pilihan jawaban . contoh analisis paragraf: the tarsier is a small primate with huge eyes. it hunts insects at night. kalimat 1 → general classification (jenis + ciri umum) kalimat 2 → description (kebiasaan) pernyataan didukung: the tarsier is nocturnal. ✓'},{id:"s8-7",number:"8.7",title:"Revising a text into report",lead:`<p>Soal revisi meminta kamu mengubah teks agar layak menjadi report text. Tiga aturan utama:</p>
<ol>
<li>Pakai <strong>simple present</strong> (ganti <em>was/went/saw</em> → <em>is/goes/sees</em>).</li>
<li><strong>Buang pengalaman pribadi</strong> (<em>I/we/our class</em>).</li>
<li><strong>Ganti opini dengan fakta</strong> (<em>the most beautiful → a brightly coloured</em>).</li>
</ol>
<p>Contoh: <span lang="en">Yesterday I saw a beautiful bird. I think it was the prettiest. → The kingfisher is a brightly coloured bird found near rivers.</span></p>
`,details:[{title:"Sebelum vs sesudah",html:`<p>Sebelum (bukan report): <span lang="en">Last Sunday my family and I went to the zoo. I think the elephant is the best animal. It was so big!</span></p>
<p>Sesudah (report): <span lang="en">The elephant is the largest land mammal. It has a trunk, big ears, and strong legs. It eats plants and travels long distances for water.</span></p>
`}],search:"8.7 revising a text into report soal revisi meminta kamu mengubah teks agar layak menjadi report text. tiga aturan utama: pakai simple present (ganti was/went/saw → is/goes/sees ). buang pengalaman pribadi ( i/we/our class ). ganti opini dengan fakta ( the most beautiful → a brightly coloured ). contoh: yesterday i saw a beautiful bird. i think it was the prettiest. → the kingfisher is a brightly coloured bird found near rivers. sebelum vs sesudah sebelum (bukan report): last sunday my family and i went to the zoo. i think the elephant is the best animal. it was so big! sesudah (report): the elephant is the largest land mammal. it has a trunk, big ears, and strong legs. it eats plants and travels long distances for water."},{id:"s8-8",number:"8.8",title:"Report practice in exams",lead:`<p>Pola soal report text yang muncul:</p>
<ul>
<li><strong>PG:</strong> memilih kalimat pembuka / menemukan general classification / mengenali jenis teks.</li>
<li><strong>PGK:</strong> memilih <em>semua</em> pernyataan yang didukung teks; memilih ciri report; membandingkan dengan recount.</li>
<li><strong>Benar/Salah:</strong> menentukan bagian paragraf; menilai apakah kalimat opini cocok di description.</li>
</ul>
<p>Kunci: selalu kembalikan ke <strong>fakta dalam teks</strong> — jangan tambahkan pengetahuan di luar teks.</p>
`,details:[{title:"Latihan cepat",html:`<p>Teks: <span lang="en">The coral reef is an underwater ecosystem. It supports thousands of marine species. However, rising sea temperatures damage it.</span></p>
<ul>
<li>Kalimat pembuka = general classification? → <strong>Ya</strong> ("The coral reef is an underwater ecosystem.")</li>
<li>"It is the most amazing place on earth" ada di teks? → <strong>Tidak</strong> (opini, bukan fakta teks)</li>
</ul>
`}],search:'8.8 report practice in exams pola soal report text yang muncul: pg: memilih kalimat pembuka / menemukan general classification / mengenali jenis teks. pgk: memilih semua pernyataan yang didukung teks; memilih ciri report; membandingkan dengan recount. benar/salah: menentukan bagian paragraf; menilai apakah kalimat opini cocok di description. kunci: selalu kembalikan ke fakta dalam teks — jangan tambahkan pengetahuan di luar teks. latihan cepat teks: the coral reef is an underwater ecosystem. it supports thousands of marine species. however, rising sea temperatures damage it. kalimat pembuka = general classification? → ya ("the coral reef is an underwater ecosystem.") "it is the most amazing place on earth" ada di teks? → tidak (opini, bukan fakta teks)'}],questions:["R8-01","R8-02","R8-03","R8-04","R8-05","R8-06","R8-07","R8-08","R8-09","R8-10"]},{id:9,title:"Procedure text",fullTitle:"Procedure Text",subtitle:"Goal · materials · steps",intro:"",example:"First, boil the water.",translation:"Pertama, didihkan airnya.",sections:[{id:"s7-1",number:"7.1",title:"Pengertian Procedure Text",lead:`<p>Procedure Text adalah teks yang menjelaskan cara melakukan, membuat, menggunakan, atau menjalankan sesuatu melalui langkah-langkah yang tersusun secara berurutan.</p>
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
`}],search:"7.3 generic structure (struktur umum)  a. goal / aim / title menjelaskan tujuan atau hasil yang ingin dicapai. contoh: how to make a cup of tea . b. materials / ingredients / tools berisi bahan, alat, atau hal yang dibutuhkan. bagian ini dapat berbeda sesuai topik. resep biasanya mencantumkan ingredients, sedangkan petunjuk penggunaan alat lebih sering mencantumkan tools atau equipment. contoh: a tea bag. a cup of hot water. sugar. a spoon. c. steps / methods menjelaskan tahapan dari awal hingga akhir. setiap langkah perlu ditulis dalam urutan yang masuk akal. contoh: prepare a cup and a tea bag. pour hot water into the cup. put the tea bag into the cup. wait for three minutes. add sugar and stir well. serve the tea. bagian tambahan teks tertentu dapat memiliki warning, caution, tips, atau expected result. bagian ini bukan pengganti tiga struktur utama, tetapi dapat membantu pembaca."},{id:"s7-4",number:"7.4",title:"Language Features (ciri kebahasaan)",lead:"",details:[{title:"A. Imperative sentences (kalimat perintah/instruksi)",html:`<p>Imperative digunakan untuk meminta pembaca melakukan suatu tindakan. Subject <em>you</em> biasanya tidak ditulis.</p>
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
`}],search:"7.4 language features (ciri kebahasaan)  a. imperative sentences (kalimat perintah/instruksi) imperative digunakan untuk meminta pembaca melakukan suatu tindakan. subject you biasanya tidak ditulis. pola dasar: v1 + object/complement. contoh: cut the onions. — potong bawangnya. add some salt. — tambahkan sedikit garam. mix the ingredients. — campurkan bahan-bahannya. open the application. — buka aplikasinya. untuk larangan, gunakan do not/don't + v1 . contoh: do not touch the hot pan. b. simple present tense simple present digunakan saat teks menyatakan fakta umum, fungsi alat, atau informasi yang berlaku secara umum. contoh: a printer uses ink or toner to produce printed documents. the mixture becomes thicker when it cools. ingat: langkah instruksi langsung seperti pour the water adalah imperative, bukan kalimat simple present biasa dengan subject yang ditulis. c. action verbs (kata kerja tindakan) contoh: cut, mix, pour, boil, fry, stir, press, turn on, select, click, save, dan connect . d. sequencing words (kata pengurut) word/phrase arti first pertama first of all pertama-tama second kedua next selanjutnya then kemudian after that setelah itu meanwhile sementara itu before sebelum after sesudah finally terakhir e. adverbs (kata keterangan) kata keterangan membantu menjelaskan cara, waktu, atau tingkat tindakan. carefully — dengan hati-hati. slowly — secara perlahan. thoroughly — secara menyeluruh. gently — dengan lembut. immediately — segera. contoh: stir the mixture slowly. f. measurements and quantities petunjuk sering memerlukan ukuran yang jelas, misalnya one cup, two teaspoons, 200 milliliters, atau for five minutes . g. passive voice passive voice dapat digunakan jika perhatian diarahkan pada proses atau benda yang diproses. contoh: active: heat the water. (instruksi langsung) passive: the water is heated to 80°c. (penjelasan proses)"},{id:"s7-5",number:"7.5",title:"Tense apa yang digunakan dalam Procedure Text?",lead:`<p>Procedure Text umumnya memakai:</p>
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
`}],search:"7.6 contoh procedure text lengkap  how to make a cup of tea goal to make a simple cup of tea. materials and equipment one tea bag. one cup of hot water. sugar or honey (optional). a cup and a spoon. steps first, prepare a clean cup and a tea bag. then, pour hot water into the cup carefully. put the tea bag into the hot water. wait for three to five minutes. remove the tea bag. add sugar or honey if you like. finally, stir the tea and serve it. language features in the example: imperative verbs: prepare, pour, put, wait, remove, add, stir, dan serve . sequencing words: first, then, dan finally . adverb: carefully . simple present tidak harus muncul pada setiap langkah karena langkahnya menggunakan imperative."},{id:"s7-7",number:"7.7",title:"Tips menulis Procedure Text",lead:`<p>Gunakan judul yang menjelaskan tujuan.</p>
<ul>
<li>Cantumkan alat dan bahan jika memang diperlukan.</li>
<li>Susun langkah berdasarkan urutan pengerjaan.</li>
<li>Gunakan satu instruksi utama yang jelas pada setiap langkah.</li>
<li>Pilih kata kerja tindakan yang tepat.</li>
<li>Gunakan ukuran, durasi, atau peringatan jika diperlukan.</li>
<li>Hindari langkah yang melompat atau informasi yang tidak lengkap.</li>
</ul>
`,details:[],search:"7.7 tips menulis procedure text gunakan judul yang menjelaskan tujuan. cantumkan alat dan bahan jika memang diperlukan. susun langkah berdasarkan urutan pengerjaan. gunakan satu instruksi utama yang jelas pada setiap langkah. pilih kata kerja tindakan yang tepat. gunakan ukuran, durasi, atau peringatan jika diperlukan. hindari langkah yang melompat atau informasi yang tidak lengkap."}],questions:["B7-01","B7-02","B7-03","B7-04","B7-05","B7-06","B7-07","B7-08"]},{id:10,title:"UAS practice",fullTitle:"UAS Practice — Final Exam Drill",subtitle:"40 soal · 4 materi · 3 bentuk",intro:`<p>Bab ini berisi latihan lengkap berjumlah <strong>40 soal</strong> yang mencakup semua materi: <strong>Asking &amp; Giving Opinion, Asking &amp; Giving Suggestion, Passive Voice,</strong> dan <strong>Report Text</strong>. Kerjakan perlahan — setiap soal punya pembahasan setelah dicek.</p>
`,example:"40 soal · 16 pilihan ganda · 16 pilihan ganda kompleks · 8 benar/salah",translation:"Empat materi, tiga bentuk soal — persis seperti yang akan kamu hadapi.",sections:[{id:"s10-1",number:"10.1",title:"Kenali bentuk soalnya",lead:`<p>Sebelum mengerjakan, pahami tiga bentuk soal di bab ini:</p>
<ol>
<li><strong>Pilihan ganda (nomor 1–16)</strong> — pilih <strong>satu</strong> jawaban paling tepat.</li>
<li><strong>Pilihan ganda kompleks (nomor 17–32)</strong> — pilih <strong>semua</strong> jawaban yang benar; bisa lebih dari satu.</li>
<li><strong>Benar/Salah (nomor 33–40)</strong> — tentukan kebenaran pernyataan.</li>
</ol>
<p>Empat materi masing-masing muncul <strong>10 soal</strong>: Opinion, Suggestion, Passive Voice, dan Report Text — jadi kuasai keempatnya, bukan hanya yang favoritmu.</p>
`,details:[{title:"Cara menandai jawaban",html:`<p>Pada pilihan ganda kompleks, centang <strong>semua</strong> yang benar lalu yakin — jawaban parsial dihitung salah. Untuk Benar/Salah, baca pernyataannya dua kali sebelum memilih.</p>
`}],search:"10.1 kenali bentuk soalnya sebelum mengerjakan, pahami tiga bentuk soal di bab ini: pilihan ganda (nomor 1–16) — pilih satu jawaban paling tepat. pilihan ganda kompleks (nomor 17–32) — pilih semua jawaban yang benar; bisa lebih dari satu. benar/salah (nomor 33–40) — tentukan kebenaran pernyataan. empat materi masing-masing muncul 10 soal : opinion, suggestion, passive voice, dan report text — jadi kuasai keempatnya, bukan hanya yang favoritmu. cara menandai jawaban pada pilihan ganda kompleks, centang semua yang benar lalu yakin — jawaban parsial dihitung salah. untuk benar/salah, baca pernyataannya dua kali sebelum memilih."},{id:"s10-2",number:"10.2",title:"Strategi mengerjakan 40 soal",lead:`<p>Ikuti urutan ini agar waktu 120 menit terasa cukup:</p>
<ol>
<li><strong>Baca sekali cepat</strong> semua soal — tandai soal yang butuh waktu lama.</li>
<li><strong>Kerjakan yang yakin dulu</strong> (biasanya pilihan ganda) — kunci poin awal.</li>
<li><strong>Analisis dialog atau teks</strong> dengan tenang: cari kata kunci seperti <em>but, because, however</em> untuk Opinion/Suggestion.</li>
<li><strong>Periksa bentuk kata</strong> untuk Passive Voice: <em>to be + V3</em> — jangan lupa <em>being</em> untuk continuous.</li>
<li><strong>Kembali ke teks</strong> untuk Report: semua jawaban harus didukung informasi teks, bukan pengetahuan umum.</li>
<li><strong>Isi semua soal</strong> — tidak ada penalti untuk menebak.</li>
</ol>
`,details:[{title:"Menghemat waktu",html:`<p>Soal PGK rata-rata lebih lama — sisihkan waktu terakhir untuk mengecek ulang centanganmu: <em>apakah semua yang benar sudah tercentang, dan yang salah sudah dilepas?</em></p>
`}],search:"10.2 strategi mengerjakan 40 soal ikuti urutan ini agar waktu 120 menit terasa cukup: baca sekali cepat semua soal — tandai soal yang butuh waktu lama. kerjakan yang yakin dulu (biasanya pilihan ganda) — kunci poin awal. analisis dialog atau teks dengan tenang: cari kata kunci seperti but, because, however untuk opinion/suggestion. periksa bentuk kata untuk passive voice: to be + v3 — jangan lupa being untuk continuous. kembali ke teks untuk report: semua jawaban harus didukung informasi teks, bukan pengetahuan umum. isi semua soal — tidak ada penalti untuk menebak. menghemat waktu soal pgk rata-rata lebih lama — sisihkan waktu terakhir untuk mengecek ulang centanganmu: apakah semua yang benar sudah tercentang, dan yang salah sudah dilepas?"}],questions:["U01","U02","U03","U04","U05","U06","U07","U08","U09","U10","U11","U12","U13","U14","U15","U16","U17","U18","U19","U20","U21","U22","U23","U24","U25","U26","U27","U28","U29","U30","U31","U32","U33","U34","U35","U36","U37","U38","U39","U40"]}],questions:[{id:"B1-01",chapter:1,prompt:`<p>Bentuk V2 dari <em>go</em> adalah ....</p>
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
`,group:5},{id:"B6-01",chapter:7,prompt:`<p>Which expression is used to ask for a suggestion?</p>
`,options:[{id:"B6-01-A",html:`<p>Thank you for helping me.</p>
`,text:"Thank you for helping me."},{id:"B6-01-B",html:`<p>What should I do?</p>
`,text:"What should I do?"},{id:"B6-01-C",html:`<p>I agree with you.</p>
`,text:"I agree with you."},{id:"B6-01-D",html:`<p>That's a good idea.</p>
`,text:"That's a good idea."}],correct:"B6-01-B",explanation:`<p><em>What should I do?</em> adalah ungkapan meminta saran.</p>
`,group:6},{id:"B6-02",chapter:7,prompt:`<p>You should _____ earlier before the exam.</p>
`,options:[{id:"B6-02-A",html:`<p>studies</p>
`,text:"studies"},{id:"B6-02-B",html:`<p>studied</p>
`,text:"studied"},{id:"B6-02-C",html:`<p>study</p>
`,text:"study"},{id:"B6-02-D",html:`<p>studying</p>
`,text:"studying"}],correct:"B6-02-C",explanation:`<p>Setelah <em>should</em> gunakan V1: <em>study</em>.</p>
`,group:6},{id:"B6-03",chapter:7,prompt:`<p>Which sentence gives a suggestion?</p>
`,options:[{id:"B6-03-A",html:`<p>Where do you live?</p>
`,text:"Where do you live?"},{id:"B6-03-B",html:`<p>You could ask your teacher.</p>
`,text:"You could ask your teacher."},{id:"B6-03-C",html:`<p>I went to school yesterday.</p>
`,text:"I went to school yesterday."},{id:"B6-03-D",html:`<p>She is reading a book.</p>
`,text:"She is reading a book."}],correct:"B6-03-B",explanation:`<p><em>You could ask your teacher</em> menawarkan saran.</p>
`,group:6},{id:"B6-04",chapter:7,prompt:`<p>The correct completion is: How about _____ together?</p>
`,options:[{id:"B6-04-A",html:`<p>study</p>
`,text:"study"},{id:"B6-04-B",html:`<p>studied</p>
`,text:"studied"},{id:"B6-04-C",html:`<p>studying</p>
`,text:"studying"},{id:"B6-04-D",html:`<p>studies</p>
`,text:"studies"}],correct:"B6-04-C",explanation:`<p>Setelah <em>How about</em> untuk kegiatan, gunakan V-ing.</p>
`,group:6},{id:"B6-05",chapter:7,prompt:`<p>Which response shows acceptance of a suggestion?</p>
`,options:[{id:"B6-05-A",html:`<p>That's a good idea.</p>
`,text:"That's a good idea."},{id:"B6-05-B",html:`<p>I don't think so.</p>
`,text:"I don't think so."},{id:"B6-05-C",html:`<p>I have no idea.</p>
`,text:"I have no idea."},{id:"B6-05-D",html:`<p>I disagree completely.</p>
`,text:"I disagree completely."}],correct:"B6-05-A",explanation:`<p><em>That's a good idea</em> menunjukkan penerimaan saran.</p>
`,group:6},{id:"B6-06",chapter:7,prompt:`<p>Which sentence politely rejects a suggestion?</p>
`,options:[{id:"B6-06-A",html:`<p>That is the only answer.</p>
`,text:"That is the only answer."},{id:"B6-06-B",html:`<p>Thanks, but I have another plan.</p>
`,text:"Thanks, but I have another plan."},{id:"B6-06-C",html:`<p>You must do it now.</p>
`,text:"You must do it now."},{id:"B6-06-D",html:`<p>I suggest taking a break.</p>
`,text:"I suggest taking a break."}],correct:"B6-06-B",explanation:`<p>Ungkapan tersebut menolak secara sopan dan memberi alternatif.</p>
`,group:6},{id:"B6-07",chapter:7,prompt:`<p>Choose the grammatically correct sentence.</p>
`,options:[{id:"B6-07-A",html:`<p>She should studies more.</p>
`,text:"She should studies more."},{id:"B6-07-B",html:`<p>She should studying more.</p>
`,text:"She should studying more."},{id:"B6-07-C",html:`<p>She should study more.</p>
`,text:"She should study more."},{id:"B6-07-D",html:`<p>She should studied more.</p>
`,text:"She should studied more."}],correct:"B6-07-C",explanation:`<p>Modal <em>should</em> diikuti V1 tanpa -s.</p>
`,group:6},{id:"B6-08",chapter:7,prompt:`<p>Which expression is followed by V-ing when suggesting an activity?</p>
`,options:[{id:"B6-08-A",html:`<p>Should</p>
`,text:"Should"},{id:"B6-08-B",html:`<p>Could</p>
`,text:"Could"},{id:"B6-08-C",html:`<p>How about</p>
`,text:"How about"},{id:"B6-08-D",html:`<p>Must</p>
`,text:"Must"}],correct:"B6-08-C",explanation:`<p><em>How about</em> diikuti noun atau V-ing.</p>
`,group:6},{id:"B7-01",chapter:9,prompt:`<p>The main purpose of a Procedure Text is to ....</p>
`,options:[{id:"B7-01-A",html:`<p>describe a famous person</p>
`,text:"describe a famous person"},{id:"B7-01-B",html:`<p>explain how to do or make something</p>
`,text:"explain how to do or make something"},{id:"B7-01-C",html:`<p>retell a past experience</p>
`,text:"retell a past experience"},{id:"B7-01-D",html:`<p>entertain readers with a story</p>
`,text:"entertain readers with a story"}],correct:"B7-01-B",explanation:`<p>Procedure Text menjelaskan cara melakukan atau membuat sesuatu.</p>
`,group:7},{id:"B7-02",chapter:9,prompt:`<p>Which part explains the tools or ingredients needed?</p>
`,options:[{id:"B7-02-A",html:`<p>Goal</p>
`,text:"Goal"},{id:"B7-02-B",html:`<p>Materials</p>
`,text:"Materials"},{id:"B7-02-C",html:`<p>Resolution</p>
`,text:"Resolution"},{id:"B7-02-D",html:`<p>Reorientation</p>
`,text:"Reorientation"}],correct:"B7-02-B",explanation:`<p>Materials berisi alat, bahan, atau perlengkapan.</p>
`,group:7},{id:"B7-03",chapter:9,prompt:`<p>Which sentence is an imperative sentence?</p>
`,options:[{id:"B7-03-A",html:`<p>She adds some sugar.</p>
`,text:"She adds some sugar."},{id:"B7-03-B",html:`<p>The sugar is sweet.</p>
`,text:"The sugar is sweet."},{id:"B7-03-C",html:`<p>Add some sugar.</p>
`,text:"Add some sugar."},{id:"B7-03-D",html:`<p>She added some sugar yesterday.</p>
`,text:"She added some sugar yesterday."}],correct:"B7-03-C",explanation:`<p><em>Add some sugar</em> adalah instruksi dengan bentuk imperative.</p>
`,group:7},{id:"B7-04",chapter:9,prompt:`<p>Which word indicates the final step?</p>
`,options:[{id:"B7-04-A",html:`<p>First</p>
`,text:"First"},{id:"B7-04-B",html:`<p>Next</p>
`,text:"Next"},{id:"B7-04-C",html:`<p>Meanwhile</p>
`,text:"Meanwhile"},{id:"B7-04-D",html:`<p>Finally</p>
`,text:"Finally"}],correct:"B7-04-D",explanation:`<p><em>Finally</em> menandai langkah terakhir.</p>
`,group:7},{id:"B7-05",chapter:9,prompt:`<p>The correct negative instruction is ....</p>
`,options:[{id:"B7-05-A",html:`<p>Not touch the pan.</p>
`,text:"Not touch the pan."},{id:"B7-05-B",html:`<p>Do not touch the pan.</p>
`,text:"Do not touch the pan."},{id:"B7-05-C",html:`<p>Does not touch the pan.</p>
`,text:"Does not touch the pan."},{id:"B7-05-D",html:`<p>Did not touching the pan.</p>
`,text:"Did not touching the pan."}],correct:"B7-05-B",explanation:`<p>Larangan/instruksi negatif memakai <em>Do not + V1</em>.</p>
`,group:7},{id:"B7-06",chapter:9,prompt:`<p>Which sentence uses an adverb correctly?</p>
`,options:[{id:"B7-06-A",html:`<p>Stir the mixture slowly.</p>
`,text:"Stir the mixture slowly."},{id:"B7-06-B",html:`<p>Slowly mixture the stir.</p>
`,text:"Slowly mixture the stir."},{id:"B7-06-C",html:`<p>Stir slowly the mixture is.</p>
`,text:"Stir slowly the mixture is."},{id:"B7-06-D",html:`<p>The slowly stir mixture.</p>
`,text:"The slowly stir mixture."}],correct:"B7-06-A",explanation:`<p><em>Slowly</em> menerangkan cara mengaduk.</p>
`,group:7},{id:"B7-07",chapter:9,prompt:`<p>Which tense/form is most common for direct steps in a Procedure Text?</p>
`,options:[{id:"B7-07-A",html:`<p>Past Perfect</p>
`,text:"Past Perfect"},{id:"B7-07-B",html:`<p>Imperative</p>
`,text:"Imperative"},{id:"B7-07-C",html:`<p>Past Continuous</p>
`,text:"Past Continuous"},{id:"B7-07-D",html:`<p>Future Perfect Continuous</p>
`,text:"Future Perfect Continuous"}],correct:"B7-07-B",explanation:`<p>Langkah langsung paling umum menggunakan imperative.</p>
`,group:7},{id:"B7-08",chapter:9,prompt:`<p>Which sentence is an example of Simple Present Passive?</p>
`,options:[{id:"B7-08-A",html:`<p>The ingredients are mixed together.</p>
`,text:"The ingredients are mixed together."},{id:"B7-08-B",html:`<p>The ingredients mixed together yesterday.</p>
`,text:"The ingredients mixed together yesterday."},{id:"B7-08-C",html:`<p>Mix the ingredients together.</p>
`,text:"Mix the ingredients together."},{id:"B7-08-D",html:`<p>The ingredients will mixing together.</p>
`,text:"The ingredients will mixing together."}],correct:"B7-08-A",explanation:`<p>Simple Present Passive: <em>are + V3</em>.</p>
`,group:7},{id:"O6-01",chapter:6,group:6,type:"single",prompt:"<p>Which sentence ASKS for an opinion?</p>",options:[{id:"O6-01-A",html:"<p>What do you think about the new school rule?</p>",text:"What do you think about the new school rule?"},{id:"O6-01-B",html:"<p>I think the new school rule is fair.</p>",text:"I think the new school rule is fair."},{id:"O6-01-C",html:"<p>The rule was made last year.</p>",text:"The rule was made last year."},{id:"O6-01-D",html:"<p>Everyone follows the rule.</p>",text:"Everyone follows the rule."}],correct:"O6-01-A",explanation:"<p>‘What do you think about…’ adalah pertanyaan yang meminta pendapat; ‘I think…’ justru menyampaikan pendapat.</p>"},{id:"O6-02",chapter:6,group:6,type:"single",prompt:"<p>Complete the opinion: “In my view, cycling to school is healthy ____ it keeps our body fit.”</p>",options:[{id:"O6-02-A",html:"<p>but</p>",text:"but"},{id:"O6-02-B",html:"<p>because</p>",text:"because"},{id:"O6-02-C",html:"<p>although</p>",text:"although"},{id:"O6-02-D",html:"<p>so that they</p>",text:"so that they"}],correct:"O6-02-B",explanation:"<p>Opini yang baik ditutup alasan: ‘because it keeps our body fit’ menjawab mengapa opini itu dipegang.</p>"},{id:"O6-03",chapter:6,group:6,type:"single",prompt:"<p>Which is the most convincing opinion?</p>",options:[{id:"O6-03-A",html:"<p>I think this song is nice.</p>",text:"I think this song is nice."},{id:"O6-03-B",html:"<p>In my opinion, group study works because students can explain difficult topics to each other.</p>",text:"In my opinion, group study works because students can explain difficult topics to each other."},{id:"O6-03-C",html:"<p>Everyone likes group study.</p>",text:"Everyone likes group study."},{id:"O6-03-D",html:"<p>Group study is obviously the best.</p>",text:"Group study is obviously the best."}],correct:"O6-03-B",explanation:"<p>Opini kuat punya alasan logis dan spesifik — bukan selera atau klaim umum tanpa bukti.</p>"},{id:"O6-04",chapter:6,group:6,type:"single",prompt:"<p>You disagree with your friend. Which response is polite?</p>",options:[{id:"O6-04-A",html:"<p>You are completely wrong.</p>",text:"You are completely wrong."},{id:"O6-04-B",html:"<p>That is a ridiculous idea.</p>",text:"That is a ridiculous idea."},{id:"O6-04-C",html:"<p>I see your point, but I think we should ask the teacher first because she knows the material better.</p>",text:"I see your point, but I think we should ask the teacher first because she knows the material better."},{id:"O6-04-D",html:"<p>No. Never.</p>",text:"No. Never."}],correct:"O6-04-C",explanation:"<p>Pola sopan: apresiasi ‘I see your point’, penanda perbedaan ‘but’, opini, lalu alasan.</p>"},{id:"O6-05",chapter:6,group:6,type:"single",prompt:"<p>B says: “I agree with you, but we should change the location.” What does B express?</p>",options:[{id:"O6-05-A",html:"<p>Full agreement</p>",text:"Full agreement"},{id:"O6-05-B",html:"<p>Partial agreement</p>",text:"Partial agreement"},{id:"O6-05-C",html:"<p>Complete disagreement</p>",text:"Complete disagreement"},{id:"O6-05-D",html:"<p>A question</p>",text:"A question"}],correct:"O6-05-B",explanation:"<p>‘I agree…, but…’ = setuju sebagian: menerima ide inti, menambah pertimbangan lain.</p>"},{id:"O6-06",chapter:6,group:6,type:"single",prompt:"<p>Which response is the best answer to “What is your opinion about online exams?”</p>",options:[{id:"O6-06-A",html:"<p>It was held yesterday.</p>",text:"It was held yesterday."},{id:"O6-06-B",html:"<p>In my opinion, online exams are practical because students can review their answers easily.</p>",text:"In my opinion, online exams are practical because students can review their answers easily."},{id:"O6-06-C",html:"<p>The exam has forty questions.</p>",text:"The exam has forty questions."},{id:"O6-06-D",html:"<p>Our teacher is kind.</p>",text:"Our teacher is kind."}],correct:"O6-06-B",explanation:"<p>Respons opini = ungkapan opini + alasan; pilihan lain adalah fakta yang tidak menjawab pertanyaan.</p>"},{id:"O6-07",chapter:6,group:6,type:"single",prompt:"<p>Which sentence shows a WEAK opinion?</p>",options:[{id:"O6-07-A",html:"<p>I believe the break time should be longer because students need time to pray and eat.</p>",text:"I believe the break time should be longer because students need time to pray and eat."},{id:"O6-07-B",html:"<p>In my view, the canteen menu should be varied.</p>",text:"In my view, the canteen menu should be varied."},{id:"O6-07-C",html:"<p>The break time should be longer. Everyone knows that.</p>",text:"The break time should be longer. Everyone knows that."},{id:"O6-07-D",html:"<p>From my point of view, the schedule needs a small change because the last class is too long.</p>",text:"From my point of view, the schedule needs a small change because the last class is too long."}],correct:"O6-07-C",explanation:"<p>‘Everyone knows that’ adalah klaim umum tanpa alasan — tanda opini lemah.</p>"},{id:"O6-08",chapter:6,group:6,type:"single",prompt:"<p>In a dialogue, A: “The trip should be postponed.” B: “Are you sure? The tickets are already booked.” B is …</p>",options:[{id:"O6-08-A",html:"<p>giving an opinion</p>",text:"giving an opinion"},{id:"O6-08-B",html:"<p>asking for an opinion</p>",text:"asking for an opinion"},{id:"O6-08-C",html:"<p>expressing doubt</p>",text:"expressing doubt"},{id:"O6-08-D",html:"<p>fully agreeing</p>",text:"fully agreeing"}],correct:"O6-08-C",explanation:"<p>‘Are you sure?’ menandai keraguan terhadap pernyataan penutur sebelumnya.</p>"},{id:"O6-09",chapter:6,group:6,type:"multi",prompt:"<p>Select ALL expressions that GIVE an opinion.</p>",options:[{id:"O6-09-A",html:"<p>I think the uniform policy is unnecessary.</p>",text:"I think the uniform policy is unnecessary."},{id:"O6-09-B",html:"<p>Do you think the policy is unnecessary?</p>",text:"Do you think the policy is unnecessary?"},{id:"O6-09-C",html:"<p>To my mind, the policy wastes time.</p>",text:"To my mind, the policy wastes time."},{id:"O6-09-D",html:"<p>What do you think of the policy?</p>",text:"What do you think of the policy?"}],correct:"O6-09-A,O6-09-C",explanation:"<p>‘I think…’ dan ‘To my mind…’ menyampaikan pendapat; ‘Do you think…’ dan ‘What do you think…’ meminta pendapat.</p>"},{id:"O6-10",chapter:6,group:6,type:"multi",prompt:"<p>Select ALL components of a complete, polite disagreement.</p>",options:[{id:"O6-10-A",html:"<p>An appreciating opener such as “That sounds interesting”.</p>",text:"An appreciating opener such as “That sounds interesting”."},{id:"O6-10-B",html:"<p>A difference marker such as “but” or “however”.</p>",text:"A difference marker such as “but” or “however”."},{id:"O6-10-C",html:"<p>An insult toward the speaker.</p>",text:"An insult toward the speaker."},{id:"O6-10-D",html:"<p>Your own opinion supported by a reason.</p>",text:"Your own opinion supported by a reason."}],correct:"O6-10-A,O6-10-B,O6-10-D",explanation:"<p>Respons lengkap: apresiasi → penanda perbedaan → opini + alasan. Hinaan tidak pernah menjadi bagian yang sopan.</p>"},{id:"B7-09",chapter:7,group:7,type:"single",prompt:"<p>Which sentence is the softest suggestion?</p>",options:[{id:"B7-09-A",html:"<p>You must finish this today.</p>",text:"You must finish this today."},{id:"B7-09-B",html:"<p>You might want to consider taking a short break before you continue.</p>",text:"You might want to consider taking a short break before you continue."},{id:"B7-09-C",html:"<p>You have to stop working now.</p>",text:"You have to stop working now."},{id:"B7-09-D",html:"<p>You had better never skip breakfast.</p>",text:"You had better never skip breakfast."}],correct:"B7-09-B",explanation:"<p>‘Might want to consider’ adalah saran paling halus; ‘must’ dan ‘have to’ terdengar seperti perintah.</p>"},{id:"B7-10",chapter:7,group:7,type:"multi",prompt:"<p>Select ALL grammatically correct suggestions.</p>",options:[{id:"B7-10-A",html:"<p>Why don’t we start the project earlier?</p>",text:"Why don’t we start the project earlier?"},{id:"B7-10-B",html:"<p>How about reading the text again?</p>",text:"How about reading the text again?"},{id:"B7-10-C",html:"<p>I suggest to check the spelling.</p>",text:"I suggest to check the spelling."},{id:"B7-10-D",html:"<p>You’d better to bring an umbrella.</p>",text:"You’d better to bring an umbrella."}],correct:"B7-10-A,B7-10-B",explanation:"<p>‘Why don’t we + V1’ dan ‘How about + V-ing’ benar. ‘I suggest to check’ dan ‘You’d better to bring’ salah — memakai V1 tanpa ‘to’.</p>"},{id:"B7-11",chapter:7,group:7,type:"multi",prompt:"<p>Select ALL polite ways to decline a suggestion.</p>",options:[{id:"B7-11-A",html:"<p>Thanks for the idea, but I have a test tomorrow morning.</p>",text:"Thanks for the idea, but I have a test tomorrow morning."},{id:"B7-11-B",html:"<p>I’d love to, but I do not have enough budget this week.</p>",text:"I’d love to, but I do not have enough budget this week."},{id:"B7-11-C",html:"<p>Your suggestions are always useless.</p>",text:"Your suggestions are always useless."},{id:"B7-11-D",html:"<p>No. I hate that.</p>",text:"No. I hate that."}],correct:"B7-11-A,B7-11-B",explanation:"<p>Penolakan sopan diawali terima kasih atau kesediaan, lalu ‘but’ + alasan yang jujur.</p>"},{id:"R8-01",chapter:8,group:8,type:"single",prompt:"<p>Which is the best general classification of a report about the Komodo dragon?</p>",options:[{id:"R8-01-A",html:"<p>Yesterday I saw a giant lizard at the zoo.</p>",text:"Yesterday I saw a giant lizard at the zoo."},{id:"R8-01-B",html:"<p>The Komodo dragon is the largest lizard in the world and lives on several Indonesian islands.</p>",text:"The Komodo dragon is the largest lizard in the world and lives on several Indonesian islands."},{id:"R8-01-C",html:"<p>I think the Komodo dragon is the most amazing animal.</p>",text:"I think the Komodo dragon is the most amazing animal."},{id:"R8-01-D",html:"<p>You should visit Komodo Island soon.</p>",text:"You should visit Komodo Island soon."}],correct:"R8-01-B",explanation:"<p>General classification memperkenalkan subjek secara umum dengan simple present, faktual, tanpa opini atau pengalaman pribadi.</p>"},{id:"R8-02",chapter:8,group:8,type:"single",prompt:"<p>Read: “The honeybee lives in colonies. It produces honey and wax.” The first sentence is …</p>",options:[{id:"R8-02-A",html:"<p>description</p>",text:"description"},{id:"R8-02-B",html:"<p>general classification</p>",text:"general classification"},{id:"R8-02-C",html:"<p>reorientation</p>",text:"reorientation"},{id:"R8-02-D",html:"<p>personal experience</p>",text:"personal experience"}],correct:"R8-02-B",explanation:"<p>Kalimat pertama menjelaskan ‘what it is’ = general classification; kalimat berikutnya menguraikan ciri = description.</p>"},{id:"R8-03",chapter:8,group:8,type:"single",prompt:"<p>Which paragraph is a report text?</p>",options:[{id:"R8-03-A",html:"<p>Last weekend, my family and I visited Borobudur temple. We took many photos.</p>",text:"Last weekend, my family and I visited Borobudur temple. We took many photos."},{id:"R8-03-B",html:"<p>First, wash the rice. Second, boil the water. Finally, mix them.</p>",text:"First, wash the rice. Second, boil the water. Finally, mix them."},{id:"R8-03-C",html:"<p>Suddenly the monster appeared behind the hero.</p>",text:"Suddenly the monster appeared behind the hero."},{id:"R8-03-D",html:"<p>The rhinoceros is a large herbivore with thick skin. It feeds on grass and leaves.</p>",text:"The rhinoceros is a large herbivore with thick skin. It feeds on grass and leaves."}],correct:"R8-03-D",explanation:"<p>Hanya D yang menggambarkan hal yang umum secara faktual dengan simple present. A recount, B procedure, C narrative.</p>"},{id:"R8-04",chapter:8,group:8,type:"single",prompt:"<p>What is the main difference between a report and a recount?</p>",options:[{id:"R8-04-A",html:"<p>Report describes something generally; recount retells personal past experiences.</p>",text:"Report describes something generally; recount retells personal past experiences."},{id:"R8-04-B",html:"<p>Report uses simple past; recount uses simple present.</p>",text:"Report uses simple past; recount uses simple present."},{id:"R8-04-C",html:"<p>Report tells stories; recount gives instructions.</p>",text:"Report tells stories; recount gives instructions."},{id:"R8-04-D",html:"<p>There is no difference.</p>",text:"There is no difference."}],correct:"R8-04-A",explanation:"<p>Report = hal umum + fakta + simple present; recount = pengalaman penulis + kejadian lampau + simple past.</p>"},{id:"R8-05",chapter:8,group:8,type:"single",prompt:"<p>Which sentence is a correct general classification?</p>",options:[{id:"R8-05-A",html:"<p>The sea turtle is a reptile that lays eggs on sandy beaches.</p>",text:"The sea turtle is a reptile that lays eggs on sandy beaches."},{id:"R8-05-B",html:"<p>I believe sea turtles are beautiful creatures.</p>",text:"I believe sea turtles are beautiful creatures."},{id:"R8-05-C",html:"<p>Last year we watched sea turtles on the beach.</p>",text:"Last year we watched sea turtles on the beach."},{id:"R8-05-D",html:"<p>You must protect sea turtles now.</p>",text:"You must protect sea turtles now."}],correct:"R8-05-A",explanation:"<p>GC yang benar: simple present, generic noun, fakta umum — tanpa ‘I’, kejadian lampau, atau ajakan.</p>"},{id:"R8-06",chapter:8,group:8,type:"single",prompt:"<p>In “The tarsier is a small primate. It has enormous eyes and hunts insects at night.”, which sentence belongs to the description?</p>",options:[{id:"R8-06-A",html:"<p>The first sentence only.</p>",text:"The first sentence only."},{id:"R8-06-B",html:"<p>The second sentence.</p>",text:"The second sentence."},{id:"R8-06-C",html:"<p>Both are general classification.</p>",text:"Both are general classification."},{id:"R8-06-D",html:"<p>Neither.</p>",text:"Neither."}],correct:"R8-06-B",explanation:"<p>Kalimat kedua menguraikan ciri fisik dan kebiasaan = description; kalimat pertama = klasifikasi.</p>"},{id:"R8-07",chapter:8,group:8,type:"single",prompt:"<p>Which text type explains how to do or make something step by step?</p>",options:[{id:"R8-07-A",html:"<p>Report text</p>",text:"Report text"},{id:"R8-07-B",html:"<p>Procedure text</p>",text:"Procedure text"},{id:"R8-07-C",html:"<p>Recount text</p>",text:"Recount text"},{id:"R8-07-D",html:"<p>Persuasive text</p>",text:"Persuasive text"}],correct:"R8-07-B",explanation:"<p>Procedure text memberi langkah (imperative) untuk melakukan/membuat sesuatu; report menggambarkan hal umum.</p>"},{id:"R8-08",chapter:8,group:8,type:"single",prompt:"<p>A paragraph about an animal contains: “In my opinion, this is the cutest animal in the forest.” This sentence …</p>",options:[{id:"R8-08-A",html:"<p>fits the description because it adds feeling</p>",text:"fits the description because it adds feeling"},{id:"R8-08-B",html:"<p>does not fit report text because it is a subjective opinion</p>",text:"does not fit report text because it is a subjective opinion"},{id:"R8-08-C",html:"<p>is the general classification</p>",text:"is the general classification"},{id:"R8-08-D",html:"<p>is a correct factual statement</p>",text:"is a correct factual statement"}],correct:"R8-08-B",explanation:"<p>Report text bersifat faktual dan objektif — opini subjektif tidak cocok, terutama di bagian description.</p>"},{id:"R8-09",chapter:8,group:8,type:"multi",prompt:"<p>Read: “The coral reef is an underwater ecosystem. It supports thousands of marine species. Rising sea temperatures damage it.” Select ALL statements supported by the text.</p>",options:[{id:"R8-09-A",html:"<p>The coral reef is a habitat for many species.</p>",text:"The coral reef is a habitat for many species."},{id:"R8-09-B",html:"<p>Coral reefs are found in deserts.</p>",text:"Coral reefs are found in deserts."},{id:"R8-09-C",html:"<p>Warm seas can harm coral reefs.</p>",text:"Warm seas can harm coral reefs."},{id:"R8-09-D",html:"<p>The reef was discovered last year.</p>",text:"The reef was discovered last year."}],correct:"R8-09-A,R8-09-C",explanation:"<p>Kalimat kedua dan ketiga teks mendukung A dan C. Gurun dan tahun penemuan tidak disebut dalam teks.</p>"},{id:"R8-10",chapter:8,group:8,type:"multi",prompt:"<p>Select ALL correct ways to revise a diary text into a report text.</p>",options:[{id:"R8-10-A",html:"<p>Use simple present tense throughout.</p>",text:"Use simple present tense throughout."},{id:"R8-10-B",html:"<p>Remove first-person experiences such as ‘I’ and ‘we’.</p>",text:"Remove first-person experiences such as ‘I’ and ‘we’."},{id:"R8-10-C",html:"<p>Turn opinions into factual descriptions.</p>",text:"Turn opinions into factual descriptions."},{id:"R8-10-D",html:"<p>Add more personal feelings to make it lively.</p>",text:"Add more personal feelings to make it lively."}],correct:"R8-10-A,R8-10-B,R8-10-C",explanation:"<p>Revisi report: simple present, hilangkan pengalaman pribadi, opini → fakta. Menambah perasaan justru menjauhkannya dari report.</p>"},{id:"U01",chapter:10,group:10,type:"single",prompt:"<p>You disagree with your friend’s plan to hold the class party outdoors. Which response is the most polite way to refuse?</p>",options:[{id:"U01-A",html:"<p>That idea will definitely fail.</p>",text:"That idea will definitely fail."},{id:"U01-B",html:"<p>The idea sounds fun, but I am afraid it will rain, so let’s book the hall instead.</p>",text:"The idea sounds fun, but I am afraid it will rain, so let’s book the hall instead."},{id:"U01-C",html:"<p>No, I do not like parties.</p>",text:"No, I do not like parties."},{id:"U01-D",html:"<p>You always come up with bad ideas.</p>",text:"You always come up with bad ideas."}],correct:"U01-B",explanation:"<p>Penolakan sopan dimulai dengan apresiasi (‘The idea sounds fun’), lalu keraguan dengan alasan (‘it will rain’), dan ditutup alternatif. Pilihan lain menyerang orang atau tanpa alasan.</p>"},{id:"U02",chapter:10,group:10,type:"single",prompt:"<p>In a dialogue, B says: “I see your point, but don’t you think we should check the budget first?” What does B mean?</p>",options:[{id:"U02-A",html:"<p>B fully agrees with A.</p>",text:"B fully agrees with A."},{id:"U02-B",html:"<p>B completely rejects A’s idea.</p>",text:"B completely rejects A’s idea."},{id:"U02-C",html:"<p>B partly agrees and raises another consideration.</p>",text:"B partly agrees and raises another consideration."},{id:"U02-D",html:"<p>B does not understand A at all.</p>",text:"B does not understand A at all."}],correct:"U02-C",explanation:"<p>‘I see your point, but…’ berarti setuju sebagian lalu mengajukan pertimbangan lain — dalam kasus ini soal anggaran.</p>"},{id:"U03",chapter:10,group:10,type:"single",prompt:"<p>Which statement is the most convincing opinion?</p>",options:[{id:"U03-A",html:"<p>I think math is boring.</p>",text:"I think math is boring."},{id:"U03-B",html:"<p>In my opinion, the story is nice.</p>",text:"In my opinion, the story is nice."},{id:"U03-C",html:"<p>I believe the library should extend its hours because students often finish assignments late.</p>",text:"I believe the library should extend its hours because students often finish assignments late."},{id:"U03-D",html:"<p>Everyone knows that this song is the best.</p>",text:"Everyone knows that this song is the best."}],correct:"U03-C",explanation:"<p>Opini yang meyakinkan punya alasan logis dan spesifik (‘because students often finish assignments late’), bukan sekadar selera atau klaim umum.</p>"},{id:"U04",chapter:10,group:10,type:"single",prompt:"<p>Complete this response: “____, I think we should postpone the trip because several students are still sick.”</p>",options:[{id:"U04-A",html:"<p>I am sorry</p>",text:"I am sorry"},{id:"U04-B",html:"<p>You are wrong</p>",text:"You are wrong"},{id:"U04-C",html:"<p>I’m afraid I disagree</p>",text:"I’m afraid I disagree"},{id:"U04-D",html:"<p>That is stupid</p>",text:"That is stupid"}],correct:"U04-C",explanation:"<p>Respons lengkap memakai ungkapan ketidaksetujuan yang sopan (‘I’m afraid I disagree’) + opini (‘I think we should…’) + alasan (‘because…’).</p>"},{id:"U05",chapter:10,group:10,type:"single",prompt:"<p>Your friend has not started the group report and the deadline is close. Which is the most constructive suggestion?</p>",options:[{id:"U05-A",html:"<p>You are so lazy.</p>",text:"You are so lazy."},{id:"U05-B",html:"<p>Why don’t you start with the introduction tonight? It is the easiest part, so you will gain momentum.</p>",text:"Why don’t you start with the introduction tonight? It is the easiest part, so you will gain momentum."},{id:"U05-C",html:"<p>Do it yourself; I do not care.</p>",text:"Do it yourself; I do not care."},{id:"U05-D",html:"<p>Maybe you should not do it at all.</p>",text:"Maybe you should not do it at all."}],correct:"U05-B",explanation:"<p>Saran konstruktif memakai pola yang benar (‘Why don’t you + V1’) dan disertai alasan yang membantu — bukan kritik atau ajakan menyerah.</p>"},{id:"U06",chapter:10,group:10,type:"single",prompt:"<p>Which sentence shows a softer, more polite suggestion?</p>",options:[{id:"U06-A",html:"<p>You must revise this essay now.</p>",text:"You must revise this essay now."},{id:"U06-B",html:"<p>You might want to consider revising the first paragraph before submitting.</p>",text:"You might want to consider revising the first paragraph before submitting."},{id:"U06-C",html:"<p>You have to fix every word today.</p>",text:"You have to fix every word today."},{id:"U06-D",html:"<p>You must not submit this draft.</p>",text:"You must not submit this draft."}],correct:"U06-B",explanation:"<p>‘Might want to consider’ jauh lebih halus daripada ‘must’ yang kuat dan langsung. ‘Must not’ bahkan berarti larangan, bukan saran.</p>"},{id:"U07",chapter:10,group:10,type:"single",prompt:"<p>The class wants to decorate the hall, but the budget is only Rp100.000. Which suggestion fits the situation?</p>",options:[{id:"U07-A",html:"<p>Why don’t you hire a professional decorator? It will look perfect.</p>",text:"Why don’t you hire a professional decorator? It will look perfect."},{id:"U07-B",html:"<p>Why don’t you use recycled paper and leftover paint? They cost almost nothing and still look creative.</p>",text:"Why don’t you use recycled paper and leftover paint? They cost almost nothing and still look creative."},{id:"U07-C",html:"<p>You’d better buy imported lights to impress everyone.</p>",text:"You’d better buy imported lights to impress everyone."},{id:"U07-D",html:"<p>Let’s cancel everything because the budget is too small.</p>",text:"Let’s cancel everything because the budget is too small."}],correct:"U07-B",explanation:"<p>Saran yang baik realistis sesuai kondisi (anggaran terbatas) dan memakai pola benar: ‘Why don’t you + V1’ + alasan.</p>"},{id:"U08",chapter:10,group:10,type:"single",prompt:"<p>Which response gives a complete suggestion — advice, reason, and an alternative?</p>",options:[{id:"U08-A",html:"<p>Just sleep early.</p>",text:"Just sleep early."},{id:"U08-B",html:"<p>You should see a doctor because your cough has lasted a week; if you prefer, you can try a warm drink first and check again tomorrow.</p>",text:"You should see a doctor because your cough has lasted a week; if you prefer, you can try a warm drink first and check again tomorrow."},{id:"U08-C",html:"<p>I do not know what to say.</p>",text:"I do not know what to say."},{id:"U08-D",html:"<p>Maybe. Or maybe not.</p>",text:"Maybe. Or maybe not."}],correct:"U08-B",explanation:"<p>Respons lengkap: saran (‘should see a doctor’) + alasan (‘because your cough…’) + alternatif (‘if you prefer… warm drink first’).</p>"},{id:"U09",chapter:10,group:10,type:"single",prompt:"<p>Change to passive: “The committee will announce the results tomorrow.”</p>",options:[{id:"U09-A",html:"<p>The results will announce by the committee tomorrow.</p>",text:"The results will announce by the committee tomorrow."},{id:"U09-B",html:"<p>The results will be announced by the committee tomorrow.</p>",text:"The results will be announced by the committee tomorrow."},{id:"U09-C",html:"<p>The results are being announced by the committee tomorrow.</p>",text:"The results are being announced by the committee tomorrow."},{id:"U09-D",html:"<p>The results were announced by the committee tomorrow.</p>",text:"The results were announced by the committee tomorrow."}],correct:"U09-B",explanation:"<p>Future passive = will + be + V3: ‘will be announced’. Pilihan C adalah present continuous passive, D adalah past passive.</p>"},{id:"U10",chapter:10,group:10,type:"single",prompt:"<p>The sentence “The road is being repaired now” is in …</p>",options:[{id:"U10-A",html:"<p>simple present passive</p>",text:"simple present passive"},{id:"U10-B",html:"<p>present continuous passive</p>",text:"present continuous passive"},{id:"U10-C",html:"<p>future passive</p>",text:"future passive"},{id:"U10-D",html:"<p>past perfect passive</p>",text:"past perfect passive"}],correct:"U10-B",explanation:"<p>Bentuk ‘is/are being + V3’ = present continuous passive; kata ‘now’ menegaskan sedang berlangsung.</p>"},{id:"U11",chapter:10,group:10,type:"single",prompt:"<p>When is passive voice the best choice?</p>",options:[{id:"U11-A",html:"<p>When we want to emphasize who performed the action.</p>",text:"When we want to emphasize who performed the action."},{id:"U11-B",html:"<p>When the doer is unknown or unimportant, and the focus is on the object or action.</p>",text:"When the doer is unknown or unimportant, and the focus is on the object or action."},{id:"U11-C",html:"<p>When the sentence has two objects and no verb.</p>",text:"When the sentence has two objects and no verb."},{id:"U11-D",html:"<p>When we are telling a funny story.</p>",text:"When we are telling a funny story."}],correct:"U11-B",explanation:"<p>Passive tepat saat pelaku tidak diketahui/tidak penting dan fokus pada objek atau tindakannya — bukan untuk menonjolkan pelaku.</p>"},{id:"U12",chapter:10,group:10,type:"single",prompt:"<p>In the procedure section of a scientific report, which sentence is written correctly?</p>",options:[{id:"U12-A",html:"<p>The mixture was heated for ten minutes.</p>",text:"The mixture was heated for ten minutes."},{id:"U12-B",html:"<p>The mixture heated for ten minutes.</p>",text:"The mixture heated for ten minutes."},{id:"U12-C",html:"<p>The mixture was heat for ten minutes.</p>",text:"The mixture was heat for ten minutes."},{id:"U12-D",html:"<p>The mixture is heated yesterday.</p>",text:"The mixture is heated yesterday."}],correct:"U12-A",explanation:"<p>Prosedur ilmiah memakai passive agar proses menjadi fokus: to be lampau (‘was’) + V3 (‘heated’) — dan ‘for ten minutes’ menunjukkan durasi proses.</p>"},{id:"U13",chapter:10,group:10,type:"single",prompt:"<p>Which is the best opening (general classification) of a report about honeybees?</p>",options:[{id:"U13-A",html:"<p>I think honeybees are amazing insects because I saw them last holiday.</p>",text:"I think honeybees are amazing insects because I saw them last holiday."},{id:"U13-B",html:"<p>The honeybee is a social insect that lives in colonies and produces honey.</p>",text:"The honeybee is a social insect that lives in colonies and produces honey."},{id:"U13-C",html:"<p>Yesterday my class visited a bee farm and bought honey.</p>",text:"Yesterday my class visited a bee farm and bought honey."},{id:"U13-D",html:"<p>You should keep bees because they help plants.</p>",text:"You should keep bees because they help plants."}],correct:"U13-B",explanation:"<p>General classification memperkenalkan subjek secara umum dengan simple present dan tanpa opini/pengalaman pribadi.</p>"},{id:"U14",chapter:10,group:10,type:"single",prompt:"<p>Read: “The tarsier is a small primate with enormous eyes. It hunts insects at night and sleeps on tree branches.” Which sentence is the general classification?</p>",options:[{id:"U14-A",html:"<p>The second sentence.</p>",text:"The second sentence."},{id:"U14-B",html:"<p>The first sentence.</p>",text:"The first sentence."},{id:"U14-C",html:"<p>Both sentences are descriptions.</p>",text:"Both sentences are descriptions."},{id:"U14-D",html:"<p>Neither sentence.</p>",text:"Neither sentence."}],correct:"U14-B",explanation:"<p>Kalimat pertama menjelaskan ‘what it is’ (klasifikasi umum); kalimat kedua menguraikan ciri dan kebiasaan = description.</p>"},{id:"U15",chapter:10,group:10,type:"single",prompt:"<p>Which paragraph is a report text?</p>",options:[{id:"U15-A",html:"<p>Last Sunday, we went to the beach and built a sandcastle.</p>",text:"Last Sunday, we went to the beach and built a sandcastle."},{id:"U15-B",html:"<p>First, cut the bread. Then spread the butter on it.</p>",text:"First, cut the bread. Then spread the butter on it."},{id:"U15-C",html:"<p>The clownfish is a small fish that lives among sea anemones. It lays eggs and feeds on plankton.</p>",text:"The clownfish is a small fish that lives among sea anemones. It lays eggs and feeds on plankton."},{id:"U15-D",html:"<p>Suddenly the hero woke up and realized it was all a dream.</p>",text:"Suddenly the hero woke up and realized it was all a dream."}],correct:"U15-C",explanation:"<p>Report text menggambarkan hal yang umum secara faktual dengan simple present. A = recount, B = procedure, D = narrative.</p>"},{id:"U16",chapter:10,group:10,type:"single",prompt:"<p>Which statement about text structures is correct?</p>",options:[{id:"U16-A",html:"<p>Report text consists of general classification and description; recount uses a sequence of past events.</p>",text:"Report text consists of general classification and description; recount uses a sequence of past events."},{id:"U16-B",html:"<p>Report text tells a story with a conflict; procedure explains events in order.</p>",text:"Report text tells a story with a conflict; procedure explains events in order."},{id:"U16-C",html:"<p>Recount uses simple present throughout; report uses simple past.</p>",text:"Recount uses simple present throughout; report uses simple past."},{id:"U16-D",html:"<p>Report and persuasive texts have the same purpose: to entertain.</p>",text:"Report and persuasive texts have the same purpose: to entertain."}],correct:"U16-A",explanation:"<p>Report = GC + description (fakta, simple present); recount = urutan kejadian lampau (simple past) dari pengalaman penulis.</p>"},{id:"U17",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL expressions used to ASK for someone’s opinion.</p>",options:[{id:"U17-A",html:"<p>What do you think about the new rule?</p>",text:"What do you think about the new rule?"},{id:"U17-B",html:"<p>Do you think the plan is safe?</p>",text:"Do you think the plan is safe?"},{id:"U17-C",html:"<p>In my view, the plan is safe.</p>",text:"In my view, the plan is safe."},{id:"U17-D",html:"<p>How do you feel about studying from home?</p>",text:"How do you feel about studying from home?"}],correct:"U17-A,U17-B,U17-D",explanation:"<p>Yang meminta pendapat berupa pertanyaan (What do you think…, Do you think…, How do you feel about…). ‘In my view’ justru MEMBERI pendapat.</p>"},{id:"U18",chapter:10,group:10,type:"multi",prompt:"<p>Read the dialogue. Select the correct analysis of each speaker.<br>A: “The trip should be postponed.”<br>B: “I see your point, but the exam schedule has not been released.”<br>C: “Are you sure? The agency already booked the bus.”</p>",options:[{id:"U18-A",html:"<p>A gives an opinion.</p>",text:"A gives an opinion."},{id:"U18-B",html:"<p>B partly agrees with A.</p>",text:"B partly agrees with A."},{id:"U18-C",html:"<p>C doubts B’s statement.</p>",text:"C doubts B’s statement."},{id:"U18-D",html:"<p>B fully rejects A.</p>",text:"B fully rejects A."}],correct:"U18-A,U18-B,U18-C",explanation:"<p>A menyatakan opini; B setuju sebagian (‘I see your point, but…’); C meragukan (‘Are you sure?’). B tidak menolak total — hanya menambah pertimbangan.</p>"},{id:"U19",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL polite ways to disagree with a reason.</p>",options:[{id:"U19-A",html:"<p>I’m afraid I disagree because the data is incomplete.</p>",text:"I’m afraid I disagree because the data is incomplete."},{id:"U19-B",html:"<p>That is a stupid idea.</p>",text:"That is a stupid idea."},{id:"U19-C",html:"<p>I see your point, however we have no time to try it.</p>",text:"I see your point, however we have no time to try it."},{id:"U19-D",html:"<p>You are totally wrong.</p>",text:"You are totally wrong."}],correct:"U19-A,U19-C",explanation:"<p>Yang sopan memberi apresiasi/keraguan + alasan (‘because…’, ‘however…’). ‘Stupid idea’ dan ‘totally wrong’ menyerang tanpa alasan.</p>"},{id:"U20",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL features of a STRONG opinion.</p>",options:[{id:"U20-A",html:"<p>It contains an opinion phrase such as ‘In my view’ or ‘I believe’.</p>",text:"It contains an opinion phrase such as ‘In my view’ or ‘I believe’."},{id:"U20-B",html:"<p>It is supported by a logical reason or a specific example.</p>",text:"It is supported by a logical reason or a specific example."},{id:"U20-C",html:"<p>It uses general claims like ‘everyone knows’ without evidence.</p>",text:"It uses general claims like ‘everyone knows’ without evidence."},{id:"U20-D",html:"<p>It only states a personal taste with no explanation.</p>",text:"It only states a personal taste with no explanation."}],correct:"U20-A,U20-B",explanation:"<p>Opini kuat = ungkapan opini + alasan logis/contoh spesifik. Klaim umum tanpa bukti dan selera tanpa penjelasan adalah opini lemah.</p>"},{id:"U21",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL expressions that give a helpful, constructive suggestion.</p>",options:[{id:"U21-A",html:"<p>You should back up your files before updating the laptop.</p>",text:"You should back up your files before updating the laptop."},{id:"U21-B",html:"<p>Why don’t you ask the teacher for extra examples?</p>",text:"Why don’t you ask the teacher for extra examples?"},{id:"U21-C",html:"<p>Just give up; the test is too hard.</p>",text:"Just give up; the test is too hard."},{id:"U21-D",html:"<p>How about practicing ten questions every night?</p>",text:"How about practicing ten questions every night?"}],correct:"U21-A,U21-B,U21-D",explanation:"<p>‘Should + V1’, ‘Why don’t you + V1’, dan ‘How about + V-ing’ adalah pola saran yang membangun. ‘Give up’ justru tidak membantu.</p>"},{id:"U22",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL grammatically correct suggestions.</p>",options:[{id:"U22-A",html:"<p>You should to check the answer twice.</p>",text:"You should to check the answer twice."},{id:"U22-B",html:"<p>You should check the answer twice.</p>",text:"You should check the answer twice."},{id:"U22-C",html:"<p>How about to join the contest?</p>",text:"How about to join the contest?"},{id:"U22-D",html:"<p>How about joining the contest?</p>",text:"How about joining the contest?"},{id:"U22-E",html:"<p>I suggest calling the help desk.</p>",text:"I suggest calling the help desk."}],correct:"U22-B,U22-D,U22-E",explanation:"<p>Setelah ‘should’ memakai V1 (bukan ‘to check’); setelah ‘How about’ memakai V-ing (bukan ‘to join’); ‘I suggest + V-ing’ benar.</p>"},{id:"U23",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL correctly structured responses to the problem: “My phone battery drains in two hours.”</p>",options:[{id:"U23-A",html:"<p>You’d better close the unused apps because they keep running in the background.</p>",text:"You’d better close the unused apps because they keep running in the background."},{id:"U23-B",html:"<p>How about lowering the screen brightness? It saves a lot of power.</p>",text:"How about lowering the screen brightness? It saves a lot of power."},{id:"U23-C",html:"<p>You’d better to carry a power bank.</p>",text:"You’d better to carry a power bank."},{id:"U23-D",html:"<p>I suggest to buy a new phone now.</p>",text:"I suggest to buy a new phone now."}],correct:"U23-A,U23-B",explanation:"<p>‘You’d better + V1’ (tanpa ‘to’) dan ‘How about + V-ing’ benar. ‘You’d better to carry’ dan ‘I suggest to buy’ salah strukturnya.</p>"},{id:"U24",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL polite ways to decline a suggestion with a reason.</p>",options:[{id:"U24-A",html:"<p>Thanks for the idea, but I have to finish my duty roster tonight.</p>",text:"Thanks for the idea, but I have to finish my duty roster tonight."},{id:"U24-B",html:"<p>No way. Your ideas never work.</p>",text:"No way. Your ideas never work."},{id:"U24-C",html:"<p>I’d love to, but my budget is tight this month.</p>",text:"I’d love to, but my budget is tight this month."},{id:"U24-D",html:"<p>That is the worst suggestion I have ever heard.</p>",text:"That is the worst suggestion I have ever heard."}],correct:"U24-A,U24-C",explanation:"<p>Penolakan sopan diawali terima kasih/lawan kata ‘but’ lalu alasan. Pilihan lain kasar dan tanpa alasan.</p>"},{id:"U25",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL correct passive sentences.</p>",options:[{id:"U25-A",html:"<p>The letters are delivered every morning.</p>",text:"The letters are delivered every morning."},{id:"U25-B",html:"<p>The letters were delivered yesterday.</p>",text:"The letters were delivered yesterday."},{id:"U25-C",html:"<p>The letters have been delivered since noon.</p>",text:"The letters have been delivered since noon."},{id:"U25-D",html:"<p>The letters will delivered tomorrow.</p>",text:"The letters will delivered tomorrow."}],correct:"U25-A,U25-B,U25-C",explanation:"<p>Present passive (are + V3), past passive (were + V3), present perfect passive (have been + V3) benar. ‘Will delivered’ kehilangan ‘be’.</p>"},{id:"U26",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL sentences that contain an error in the passive form.</p>",options:[{id:"U26-A",html:"<p>The cake was ate by the children.</p>",text:"The cake was ate by the children."},{id:"U26-B",html:"<p>The window was broken by the ball.</p>",text:"The window was broken by the ball."},{id:"U26-C",html:"<p>The documents was signed by the manager.</p>",text:"The documents was signed by the manager."},{id:"U26-D",html:"<p>The email has send by the secretary.</p>",text:"The email has send by the secretary."}],correct:"U26-A,U26-C,U26-D",explanation:"<p>‘Was ate’ seharusnya ‘was eaten’ (V3 irregular); ‘documents was’ seharusnya ‘were’ (jamak); ‘has send’ seharusnya ‘has been sent’. ‘Was broken’ benar.</p>"},{id:"U27",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL sentences suitable for the procedure section of a scientific report.</p>",options:[{id:"U27-A",html:"<p>The solution was heated to 80°C.</p>",text:"The solution was heated to 80°C."},{id:"U27-B",html:"<p>We thought the experiment was fun.</p>",text:"We thought the experiment was fun."},{id:"U27-C",html:"<p>Two drops of iodine were added to the sample.</p>",text:"Two drops of iodine were added to the sample."},{id:"U27-D",html:"<p>I hope the result will be perfect.</p>",text:"I hope the result will be perfect."}],correct:"U27-A,U27-C",explanation:"<p>Bagian proses harus objektif dan fokus pada tindakan: memakai passive tanpa subjek personal (I/we). Pilihan B dan D memakai sudut pandang pribadi.</p>"},{id:"U28",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL statements that are TRUE about making passive sentences.</p>",options:[{id:"U28-A",html:"<p>A sentence can be passive only if it has an object (transitive verb).</p>",text:"A sentence can be passive only if it has an object (transitive verb)."},{id:"U28-B",html:"<p>Intransitive verbs such as sleep and arrive cannot be made passive directly.</p>",text:"Intransitive verbs such as sleep and arrive cannot be made passive directly."},{id:"U28-C",html:"<p>Any sentence, even without an object, can be changed to passive.</p>",text:"Any sentence, even without an object, can be changed to passive."},{id:"U28-D",html:"<p>The object of the active sentence becomes the subject of the passive sentence.</p>",text:"The object of the active sentence becomes the subject of the passive sentence."}],correct:"U28-A,U28-B,U28-D",explanation:"<p>Passive memerlukan objek (verb transitif); verb intransitif (sleep, arrive) tak punya objek; objek aktif menjadi subjek pasif.</p>"},{id:"U29",chapter:10,group:10,type:"multi",prompt:"<p>Read: “The orangutan is a great ape found on Borneo and Sumatra. It spends most of its life in trees and eats fruits, leaves, and bark. Forest fires destroy its habitat every dry season.” Select ALL statements that match the text.</p>",options:[{id:"U29-A",html:"<p>The orangutan is a tree-dwelling animal.</p>",text:"The orangutan is a tree-dwelling animal."},{id:"U29-B",html:"<p>It eats only meat.</p>",text:"It eats only meat."},{id:"U29-C",html:"<p>Its habitat is threatened by forest fires.</p>",text:"Its habitat is threatened by forest fires."},{id:"U29-D",html:"<p>It lives in Africa.</p>",text:"It lives in Africa."}],correct:"U29-A,U29-C",explanation:"<p>Teks menyebut ‘spends most of its life in trees’ dan ‘forest fires destroy its habitat’. Tidak ada penyebutan daging sebagai makanan utama maupun Afrika.</p>"},{id:"U30",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL correct comparisons between report text and recount text.</p>",options:[{id:"U30-A",html:"<p>Report aims to describe something generally; recount retells personal experiences.</p>",text:"Report aims to describe something generally; recount retells personal experiences."},{id:"U30-B",html:"<p>Report mostly uses simple present; recount mostly uses simple past.</p>",text:"Report mostly uses simple present; recount mostly uses simple past."},{id:"U30-C",html:"<p>Report follows general classification and description; recount follows orientation, events, and reorientation.</p>",text:"Report follows general classification and description; recount follows orientation, events, and reorientation."},{id:"U30-D",html:"<p>Both texts use the same structure and tense.</p>",text:"Both texts use the same structure and tense."}],correct:"U30-A,U30-B,U30-C",explanation:"<p>Ketiga perbandingan pertama benar. Struktur dan tense keduanya berbeda — jadi pilihan terakhir salah.</p>"},{id:"U31",chapter:10,group:10,type:"multi",prompt:"<p>Select ALL changes needed to turn this diary text into a report text: “Yesterday I saw a beautiful bird. I think it was the prettiest bird ever. It was sitting on a branch.”</p>",options:[{id:"U31-A",html:"<p>Change the verbs to simple present.</p>",text:"Change the verbs to simple present."},{id:"U31-B",html:"<p>Remove personal experience (‘I saw’).</p>",text:"Remove personal experience (‘I saw’)."},{id:"U31-C",html:"<p>Replace the opinion with factual description.</p>",text:"Replace the opinion with factual description."},{id:"U31-D",html:"<p>Add more feelings such as ‘I was amazed’.</p>",text:"Add more feelings such as ‘I was amazed’."}],correct:"U31-A,U31-B,U31-C",explanation:"<p>Revisi report: simple present, hilangkan pengalaman pribadi, ganti opini dengan fakta. Menambah perasaan justru menjauhkannya dari report.</p>"},{id:"U32",chapter:10,group:10,type:"multi",prompt:"<p>Read: “Sea turtles are reptiles that lay eggs on sandy beaches. They can live for more than fifty years. Pollution and illegal hunting reduce their population.” Select ALL statements supported by the text.</p>",options:[{id:"U32-A",html:"<p>Sea turtles lay eggs on beaches.</p>",text:"Sea turtles lay eggs on beaches."},{id:"U32-B",html:"<p>Sea turtles are mammals.</p>",text:"Sea turtles are mammals."},{id:"U32-C",html:"<p>Human activities threaten sea turtles.</p>",text:"Human activities threaten sea turtles."},{id:"U32-D",html:"<p>Sea turtles usually die before turning one year old.</p>",text:"Sea turtles usually die before turning one year old."}],correct:"U32-A,U32-C",explanation:"<p>Kalimat pertama dan ketiga teks mendukung A dan C. ‘Mammals’ bertentangan dengan ‘reptiles’; umur lebih dari 50 tahun bertentangan dengan D.</p>"},{id:"U33",chapter:10,group:10,type:"tf",prompt:"<p>Dialogue — A: “I think we should cancel the picnic.” B: “I agree with you, but let’s keep the budget for next week.” B’s response is consistent: B agrees with the cancellation and adds a new plan.</p>",options:[{id:"U33-T",html:"<p><strong>Benar</strong></p>",text:"Benar"},{id:"U33-F",html:"<p><strong>Salah</strong></p>",text:"Salah"}],correct:"U33-T",explanation:"<p>B menyatakan persetujuan lalu memberi alternatif penggunaan anggaran — konsisten dengan pendapatnya sendiri.</p>"},{id:"U34",chapter:10,group:10,type:"tf",prompt:"<p>An opinion becomes more convincing when it is supported by a logical reason or a specific example.</p>",options:[{id:"U34-T",html:"<p><strong>Benar</strong></p>",text:"Benar"},{id:"U34-F",html:"<p><strong>Salah</strong></p>",text:"Salah"}],correct:"U34-T",explanation:"<p>Alasan logis dan contoh spesifik menunjukkan dasar pikiran sehingga opini lebih meyakinkan daripada sekadar klaim.</p>"},{id:"U35",chapter:10,group:10,type:"tf",prompt:"<p>The sentence “How about to discuss this with the teacher?” uses the correct verb form after ‘How about’.</p>",options:[{id:"U35-T",html:"<p><strong>Benar</strong></p>",text:"Benar"},{id:"U35-F",html:"<p><strong>Salah</strong></p>",text:"Salah"}],correct:"U35-F",explanation:"<p>‘How about’ harus diikuti V-ing: ‘How about discussing this with the teacher?’ — bukan infinitive ‘to discuss’.</p>"},{id:"U36",chapter:10,group:10,type:"tf",prompt:"<p>A suggestion becomes more persuasive when it includes a clear reason.</p>",options:[{id:"U36-T",html:"<p><strong>Benar</strong></p>",text:"Benar"},{id:"U36-F",html:"<p><strong>Salah</strong></p>",text:"Salah"}],correct:"U36-T",explanation:"<p>Alasan menjelaskan manfaat saran sehingga ajakan lebih meyakinkan dan terasa membantu.</p>"},{id:"U37",chapter:10,group:10,type:"tf",prompt:"<p>“The technician repaired the laptop” and “The laptop was repaired by the technician” have the same meaning but different focus.</p>",options:[{id:"U37-T",html:"<p><strong>Benar</strong></p>",text:"Benar"},{id:"U37-F",html:"<p><strong>Salah</strong></p>",text:"Salah"}],correct:"U37-T",explanation:"<p>Kedua kalimat menyatakan peristiwa yang sama; aktif menonjolkan pelaku, pasif menonjolkan penerima tindakan.</p>"},{id:"U38",chapter:10,group:10,type:"tf",prompt:"<p>The sentence “The results will be announced on Monday” is a correct future passive sentence and has the same meaning as “The committee will announce the results on Monday.”</p>",options:[{id:"U38-T",html:"<p><strong>Benar</strong></p>",text:"Benar"},{id:"U38-F",html:"<p><strong>Salah</strong></p>",text:"Salah"}],correct:"U38-T",explanation:"<p>‘Will be + V3’ adalah future passive yang benar, dan maknanya sama dengan kalimat aktifnya.</p>"},{id:"U39",chapter:10,group:10,type:"tf",prompt:"<p>In the paragraph “The honeybee is a social insect. It lives in colonies and produces honey.”, the first sentence is the general classification and the second sentence belongs to the description.</p>",options:[{id:"U39-T",html:"<p><strong>Benar</strong></p>",text:"Benar"},{id:"U39-F",html:"<p><strong>Salah</strong></p>",text:"Salah"}],correct:"U39-T",explanation:"<p>Kalimat pertama memperkenalkan jenis (GC); kalimat kedua menguraikan ciri dan kebiasaan (description).</p>"},{id:"U40",chapter:10,group:10,type:"tf",prompt:"<p>A good description in a report text may contain subjective opinions such as “this animal is the cutest” and calls to action such as “you must protect it now.”</p>",options:[{id:"U40-T",html:"<p><strong>Benar</strong></p>",text:"Benar"},{id:"U40-F",html:"<p><strong>Salah</strong></p>",text:"Salah"}],correct:"U40-F",explanation:"<p>Bahasa report bersifat faktual dan objektif. Opini subjektif dan ajakan tidak cocok untuk bagian description.</p>"}],summary:"<p><strong>Grammar</strong> (pronouns, verb forms, auxiliaries) menjadi fondasi, lalu <strong>tenses</strong> — present, past, future — dilatih lewat konteks. Materi inti: <strong>asking &amp; giving opinion</strong>, <strong>asking &amp; giving suggestion</strong>, <strong>passive voice</strong> (semua tense, termasuk pelaporan ilmiah), dan <strong>report text</strong> (general classification + description). Bab <strong>procedure text</strong> melengkapi keterampilan teks, dan bab <strong>UAS practice</strong> menguji semuanya lewat 40 soal bervariasi: pilihan ganda, pilihan ganda kompleks, dan benar/salah.</p>",counts:{chapters:10,sections:66,questions:123}},ue={arrow:'<path d="M5 12h14m-5-5 5 5-5 5"/>',"arrow-down":'<path d="M12 5v14m-5-5 5 5 5-5"/>',"arrow-up":'<path d="M12 19V5m-5 5 5-5 5 5"/>',home:'<path d="m3 10 9-7 9 7v10H3Zm6 10v-7h6v7"/>',book:'<path d="M12 5C8 2 3 3 3 3v16s5-1 9 2c4-3 9-2 9-2V3s-5-1-9 2Zm0 0v16"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',quiz:'<rect x="5" y="4" width="15" height="18" rx="3"/><path d="M9 2v4h7V2Zm0 9h7m-7 4h4"/>',shuffle:'<path d="M3 6h3c6 0 6 12 12 12h3m-4-4 4 4-4 4M3 18h3c6 0 6-12 12-12h3m-4-4 4 4-4 4"/>',"check-circle":'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',check:'<path d="m5 12 4 4L19 6"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',expand:'<path d="M4 9V4h5m11 5V4h-5M4 15v5h5m11-5v5h-5"/>',device:'<rect x="3" y="3" width="18" height="13" rx="2"/><path d="M8 21h8m-4-5v5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',layers:'<path d="m2 8 10-5 10 5-10 5Zm0 5 10 5 10-5M2 18l10 5 10-5"/>',chat:'<path d="M4 4h16v12H9l-5 5Zm4 5h8m-8 3h5"/>',switch:'<path d="M3 7h17m-4-4 4 4-4 4M21 17H4m4-4-4 4 4 4"/>',list:'<path d="M9 5h12M9 12h12M9 19h12m-18-14h1m-1 7h1m-1 7h1"/>'};function m(e,a=""){return`<svg class="icon ${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ue[e]||ue.book}</svg>`}function ce(e){return`<svg viewBox="0 0 84 76" fill="none" aria-hidden="true"><ellipse cx="43" cy="68" rx="30" ry="4" fill="#655071" opacity=".08"/>${['<g transform="rotate(-9 44 35)"><rect x="15" y="14" width="50" height="48" rx="7" fill="#bca5d6"/><rect x="12" y="10" width="50" height="48" rx="7" fill="#80649e"/><path d="M21 10v48" stroke="#5e437c"/><text x="42" y="44" text-anchor="middle" font-family="Georgia" font-size="28" fill="#fff8e7">Aa</text></g><rect x="47" y="47" width="26" height="16" rx="4" fill="#f2d788"/><path d="M53 53h14m-14 4h9" stroke="#b59c55" stroke-width="1.5"/>','<circle cx="43" cy="36" r="25" fill="#b9a7d1"/><circle cx="43" cy="34" r="21" fill="#fff9ea" stroke="#9a80b5" stroke-width="2"/><path d="M43 20v15l11 5" stroke="#73558f" stroke-width="2.5" stroke-linecap="round"/><circle cx="43" cy="34" r="2" fill="#73558f"/><rect x="23" y="55" width="42" height="13" rx="4" fill="#f0d782"/><text x="44" y="64" text-anchor="middle" font-family="sans-serif" font-size="7" fill="#7f6946">PRESENT</text>','<rect x="17" y="15" width="51" height="47" rx="7" fill="#bcadc9"/><rect x="14" y="12" width="51" height="47" rx="7" fill="#fff8ec" stroke="#b2a1c1"/><path d="M14 27h51" stroke="#b2a1c1"/><path d="M25 8v12m29-12v12" stroke="#826595" stroke-width="4" stroke-linecap="round"/><path d="M26 37h7m6 0h7m6 0h5m-31 9h7m6 0h7" stroke="#b5a2c8" stroke-width="3"/><path d="m61 47 7 6-7 6m-11-6h18" stroke="#8c6598" stroke-width="2"/>','<path d="M13 55h54" stroke="#ab96bf" stroke-width="2"/><circle cx="24" cy="55" r="4" fill="#b8a5c9"/><circle cx="43" cy="55" r="4" fill="#a185bb"/><path d="m61 49 7 6-7 6" stroke="#73568f" stroke-width="2"/><path d="M32 35 21 40l5-12 31-16-9 29-16-6Z" fill="#f3d782" stroke="#b99e59"/><path d="m32 35 25-23-17 27-4 9-4-13Z" fill="#fff4c6" stroke="#b99e59"/>','<rect x="9" y="15" width="35" height="23" rx="6" fill="#a994c2"/><rect x="39" y="43" width="35" height="23" rx="6" fill="#f1d985"/><path d="M48 25h19m-5-5 5 5-5 5M35 55H16m5-5-5 5 5 5" stroke="#8c759e" stroke-width="2"/><text x="26" y="31" text-anchor="middle" fill="#fff8eb" font-family="Georgia" font-size="13">S + V</text><text x="56" y="58" text-anchor="middle" fill="#856c3d" font-family="Georgia" font-size="11">be + V3</text>','<g><rect x="12" y="14" width="42" height="30" rx="8" fill="#bca5d6"/><path d="M22 44l4 10 10-10" fill="#bca5d6"/><rect x="34" y="30" width="40" height="26" rx="8" fill="#80649e"/><path d="M64 56l4 9 9-9" fill="#80649e"/><circle cx="26" cy="29" r="3" fill="#fff8e7"/><circle cx="36" cy="29" r="3" fill="#fff8e7"/><circle cx="46" cy="29" r="3" fill="#fff8e7"/></g>','<path d="M11 15h43v29H31L18 55V44h-7Z" fill="#aa96be"/><path d="M37 34h34v25H60l-9 9v-9H37Z" fill="#f3db8c" stroke="#dbc174"/><path d="M21 25h23m-23 9h15" stroke="#f7effa" stroke-width="2" stroke-linecap="round"/><path d="M46 43h16m-16 8h11" stroke="#b19959" stroke-width="2" stroke-linecap="round"/>','<g><rect x="18" y="10" width="46" height="54" rx="6" fill="#fff8e7" stroke="#80649e" stroke-width="2"/><rect x="24" y="18" width="24" height="5" rx="2.5" fill="#80649e"/><path d="M24 30h34M24 38h34M24 46h22" stroke="#bca5d6" stroke-width="3" stroke-linecap="round"/><rect x="50" y="42" width="6" height="14" rx="2" fill="#f2d788"/><rect x="58" y="36" width="6" height="20" rx="2" fill="#80649e"/></g>','<g transform="rotate(7 43 38)"><rect x="22" y="10" width="44" height="57" rx="5" fill="#bcaacc"/><rect x="18" y="7" width="44" height="57" rx="5" fill="#fff8eb" stroke="#b4a0c5"/><rect x="29" y="5" width="21" height="9" rx="3" fill="#9a81b1"/><path d="m26 25 3 3 5-6m-8 18 3 3 5-6m-8 18 3 3 5-6" stroke="#997bb0" stroke-width="1.8"/><path d="M39 25h15M39 40h15M39 55h11" stroke="#d0bbdd" stroke-width="2"/></g>','<g><rect x="22" y="12" width="40" height="52" rx="6" fill="#fff8e7" stroke="#80649e" stroke-width="2"/><rect x="34" y="6" width="16" height="10" rx="4" fill="#80649e"/><path d="M30 30l4 4 7-8" stroke="#80649e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 42l4 4 7-8" stroke="#bca5d6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M46 31h10M46 43h10" stroke="#bca5d6" stroke-width="3" stroke-linecap="round"/><rect x="30" y="52" width="24" height="4" rx="2" fill="#f2d788"/></g>'][e-1]}</svg>`}const ie=["book","clock","clock","arrow","switch","chat","check","list","layers","quiz"],Ce=[["VERB FORMS","V1 · V2 · V3 · V-ing"],["PRESENT PERFECT","have / has + V3"],["PAST CONTINUOUS","was / were + V-ing"],["FUTURE PERFECT","will + have + V3"],["PASSIVE VOICE","be + V3"],["GIVING OPINION","In my view, because…"],["GIVING SUGGESTIONS","How about + V-ing?"],["REPORT TEXT","General classification → description"],["PROCEDURE TEXT","Goal → Materials → Steps"],["UAS DRILL","40 soal · PG · PGK · B/S"]],Pe=(e,a="verb")=>({text:e,role:a}),t=(e,a,n,r="",s="")=>({label:e,parts:a.split("|").map((o,d)=>Pe(o,["subject","verb","object","extra"][d]||"extra")),formula:n,meaning:r,cue:s}),u=(e,a,n)=>({note:e,kind:a,items:n}),V={"s1-1":u("Susun pelaku, tindakan, lalu objek.","sentence",[t("Tindakan","She|reads|a book.","Subject + Verb + Object","Dia membaca sebuah buku."),t("Keadaan","They|are|students.","Subject + be + Complement","Mereka adalah siswa."),t("Sifat","My brother|is|happy.","Subject + be + Complement","Saudara laki-laki saya bahagia.")]),"s1-2":u("Subject pronoun = pengganti pelaku.","people",[t("I","I|study|English.","I = saya","Saya belajar Bahasa Inggris."),t("You","You|look|happy.","You = kamu / kalian","Kamu terlihat bahagia."),t("We","We|play|football.","We = kami / kita"),t("They","They|work|here.","They = mereka"),t("He","He|reads|a book.","He = dia (laki-laki)"),t("She","She|writes|a letter.","She = dia (perempuan)"),t("It","It|looks|beautiful.","It = benda / hewan / hal")]),"s1-3":u("Object pronoun menerima tindakan.","people",[t("me","She|helps|me.","I → me","Dia membantu saya."),t("you","I|call|you.","You → you"),t("us","They|invite|us.","We → us"),t("them","I|know|them.","They → them"),t("him","We|meet|him.","He → him"),t("her","I|help|her.","She → her"),t("it","Please|move|it.","It → it")]),"s1-4":u("Bentuk kata kerja berubah sesuai pola.","forms",[t("write","write|wrote|written|writing","V1 → V2 → V3 → V-ing","menulis"),t("go","go|went|gone|going","V1 → V2 → V3 → V-ing","pergi"),t("play","play|played|played|playing","Regular: V2 dan V3 berakhiran -ed","bermain"),t("study","study|studied|studied|studying","study → studied: y berubah menjadi i","belajar")]),"s1-5":u("Cocokkan subject dengan to be.","people",[t("I · kini","I|am|a student.","I + am","Saya seorang siswa."),t("She · kini","She|is|tired.","He / She / It + is","Dia lelah."),t("They · kini","They|are|at school.","You / We / They + are"),t("He · dulu","He|was|sick yesterday.","I / He / She / It + was"),t("We · dulu","We|were|busy last week.","You / We / They + were")]),"s1-6":u("Sesudah do, does, atau did: kembali ke V1.","sentence",[t("do","Do they|study|English?","Do + S + V1?","Apakah mereka belajar Bahasa Inggris?"),t("does","She|does not like|coffee.","Does + not + V1, bukan likes"),t("did","They|did not go|home.","Did + not + V1, bukan went"),t("has","She|has finished|her work.","Has + V3"),t("have","They|have finished|their work.","Have + V3")]),"s1-7":u("Ada tindakan? Verbal. Menghubungkan keadaan? Nominal.","sentence",[t("Verbal","She|plays|badminton.","Subject + action verb","Dia bermain bulu tangkis."),t("Nominal","She|is|a student.","Subject + be + complement","Dia seorang siswa."),t("Tanya nominal","Is she|happy?","Be + subject + complement?","Tidak memakai does she be.")]),"s1-8":u("He, she, it: tambahkan -s/-es pada kalimat positif.","people",[t("They","They|play|football.","I / You / We / They + V1"),t("She","She|plays|football.","He / She / It + V1(s/es)"),t("Study","She|studies|English.","study → studies"),t("Have","My brother|has|a bicycle.","have → has")]),"s2-5":u("Pilih makna, bukan hanya penanda waktu.","now",[t("Kebiasaan","She|studies|every day.","Simple Present"),t("Sedang","She|is studying|now.","Present Continuous"),t("Sudah","She|has finished|her work.","Present Perfect"),t("Durasi","She|has been studying|for two hours.","Present Perfect Continuous")]),"s3-5":u("Empat sudut pandang pada masa lalu.","past",[t("Selesai","She|studied|yesterday.","Simple Past"),t("Sedang saat itu","She|was studying|at 8 p.m.","Past Continuous"),t("Lebih dahulu","She|had studied|before dinner.","Past Perfect"),t("Durasi sebelumnya","She|had been studying|for an hour before dinner.","Past Perfect Continuous")]),"s4-5":u("Rencana masa depan dilihat dari masa lalu.","past",[t("Would","She|said|she would help us.","would + V1","Dia mengatakan bahwa dia akan membantu kami."),t("Was going to","I|was going to study,|but I fell asleep.","was / were + going to + V1","Saya tadinya akan belajar, tetapi tertidur.")]),"s4-6":u("Pilih apa yang akan terjadi dan bagaimana prosesnya.","future",[t("Akan","She|will study|tomorrow.","will + V1"),t("Akan sedang","She|will be studying|at 8 p.m.","will + be + V-ing"),t("Akan sudah","She|will have finished|by Friday.","will + have + V3"),t("Durasi","She|will have been studying|for two hours by 9 p.m.","will + have + been + V-ing")]),"s5-1":u("Passive menyorot penerima tindakan.","passive",[t("Active","The teacher|explains|the lesson.","Pelaku → tindakan → penerima","Guru menjelaskan pelajaran."),t("Passive","The lesson|is explained|by the teacher.","Penerima → be + V3 → by pelaku","Pelajaran dijelaskan oleh guru.")]),"s5-2":u("Inti passive: be + V3.","passive",[t("Present","The room|is cleaned|every day.","am / is / are + V3"),t("Past","The room|was cleaned|yesterday.","was / were + V3"),t("Future","The room|will be cleaned|tomorrow.","will + be + V3")]),"s5-3":u("Pindahkan objek, sesuaikan be, gunakan V3.","passive",[t("01 · Active","They|clean|the room.","Subject + V1 + Object"),t("02 · Pindah objek","The room|←|They clean the room.","Objek menjadi subject passive"),t("03 · Passive","The room|is cleaned|by them.","S + is + V3 + by + object pronoun")]),"s5-4":u("Tense menentukan bentuk be; kata kerja utama tetap V3.","passive",[t("Continuous","The road|is being repaired|now.","am / is / are + being + V3"),t("Perfect","The work|has been finished.","has / have + been + V3"),t("Past perfect","The work|had been finished.","had + been + V3"),t("Future","The letter|will be sent|tomorrow.","will + be + V3")]),"s5-5":u("Tiga pola passive yang paling umum.","passive",[t("Present","English|is spoken|here.","am / is / are + V3"),t("Past","The letter|was written|yesterday.","was / were + V3"),t("Future","The documents|will be sent|tomorrow.","will + be + V3")]),"s5-6":u("Modal tidak berubah; tambahkan be + V3.","passive",[t("must","The rules|must be followed.","must + be + V3","Aturan harus dipatuhi."),t("should","The room|should be cleaned.","should + be + V3"),t("can","The problem|can be solved.","can + be + V3")]),"s5-7":u("Pelaku boleh dihilangkan jika tidak penting atau tidak diketahui.","passive",[t("Dengan pelaku","The room|is cleaned|by the staff.","by + pelaku","Fokus tambahan: siapa yang membersihkan."),t("Tanpa pelaku","The room|is cleaned|every day.","be + V3; by bersifat opsional","Fokus: ruangan dan tindakannya.")]),"s5-8":u("Passive memerlukan objek dari kalimat aktif.","sentence",[t("Ada objek","They|clean|the room.","✓ the room dapat menjadi subject passive"),t("Tanpa objek","He|sleeps.","Tidak dapat dipasifkan langsung: tidak ada objek."),t("Tanpa objek","She|arrived|early.","Tidak dapat dipasifkan langsung: tidak ada objek.")]),"s5-9":u("Sesudah by, pakai object pronoun.","people",[t("he → him","The letter|is written|by him.","he → him"),t("she → her","The room|is cleaned|by her.","she → her"),t("they → them","The work|is done|by them.","they → them"),t("we → us","The project|is completed|by us.","we → us")]),"s6-1":u("Saran menawarkan tindakan, bukan memerintah.","chat",[t("Masalah","I|am|tired.","A · menyampaikan keadaan","Saya lelah."),t("Saran","You|should take|a rest.","B · memberi saran","Kamu sebaiknya beristirahat.")]),"s6-2":u("Minta ide atau tindakan yang sebaiknya dilakukan.","chat",[t("What should…","What|should I do?","Meminta saran","Apa yang sebaiknya saya lakukan?"),t("Suggest","What|do you suggest?","Meminta ide","Apa saranmu?"),t("Advice","Can you|give me|some advice?","advice: uncountable","Bisakah kamu memberi saya nasihat?")]),"s6-3":u("Pilih ungkapan saran sesuai situasi.","chat",[t("Should","You|should study|harder.","should + V1","Kamu sebaiknya belajar lebih giat."),t("Could","You|could ask|your teacher.","could + V1"),t("Why don’t…","Why don't you|try|again?","Why don't you + V1?"),t("How about…","How about|taking|a break?","How about + V-ing?")]),"s6-4":u("Perhatikan bentuk kata kerja setelah ungkapan saran.","chat",[t("Should","You|should drink|more water.","should + V1"),t("How about","How about|studying|together?","How about + V-ing?"),t("Let’s","Let's|review|the lesson.","Let's + V1"),t("Suggest","I|suggest taking|a taxi.","suggest + V-ing")]),"s6-5":u("Menerima saran dengan jelas dan sopan.","chat",[t("Setuju","That|is|a good idea.","Menerima ide","Itu ide yang bagus."),t("Bersedia","I'll|try|that.","Menerima tindakan","Saya akan mencobanya."),t("Ayo","Let's|do|that.","Menyetujui ajakan","Mari kita lakukan itu.")]),"s6-6":u("Berterima kasih, lalu sampaikan penolakan dengan sopan.","chat",[t("Rencana lain","Thanks,|but I have|another plan.","Thanks + alasan","Terima kasih, tetapi saya punya rencana lain."),t("Kurang cocok","I|don't think|that will work.","Menolak dengan sopan","Saya rasa itu tidak akan berhasil.")]),"s6-7":u("Masalah → saran → tanggapan.","chat",[t("01 · A","I|have difficulty|understanding the lesson.","MASALAH","Saya kesulitan memahami pelajaran."),t("02 · B","Why don't you|ask|your teacher for help?","SARAN","Mengapa tidak meminta bantuan guru?"),t("03 · A","That|is|a good idea.","TANGGAPAN","Itu ide yang bagus.")]),"s6-8":u("Ungkapan saran memakai beberapa pola, bukan satu tense.","chat",[t("Modal","You|should study|more.","should + V1"),t("V-ing","How about|studying|together?","How about + V-ing"),t("Conditional","If I were you,|I would talk|to the teacher.","If I were you, I would + V1")]),"s7-1":u("Procedure text menunjukkan cara melakukan atau membuat sesuatu.","steps",[t("Goal","How to Make|a Cup of Tea","GOAL · tujuan"),t("Materials","Tea bag|hot water|cup","MATERIALS · bahan / alat"),t("Steps","Put|pour|wait|serve","STEPS · urutan tindakan")]),"s7-2":u("Tujuannya: pembaca dapat mengikuti langkahnya.","steps",[t("Membuat","How to Make|a Fruit Salad","Membuat sesuatu"),t("Menggunakan","How to Use|a Printer","Menggunakan alat"),t("Melakukan","How to Wash|Your Hands","Melakukan kegiatan")]),"s7-3":u("Tiga bagian utama, dibaca berurutan.","steps",[t("01 · Goal","How to Make|a Cup of Tea","Apa yang akan dibuat?"),t("02 · Materials","A tea bag|hot water|a cup","Apa yang diperlukan?"),t("03 · Steps","Put|pour|wait|serve","Bagaimana caranya?")]),"s7-4":u("Gunakan perintah, kata kerja tindakan, dan urutan yang jelas.","steps",[t("Imperative","Add|some sugar.","V1 + object · tanpa subject you"),t("Sequence","First,|boil|the water.","First → next → then → finally"),t("Adverb","Stir|the tea|slowly.","slowly = cara melakukan"),t("Quantity","Add|two teaspoons|of sugar.","Ukuran / jumlah yang jelas")]),"s7-5":u("Langkah memakai imperative; penjelasan umum sering Simple Present.","steps",[t("Instruksi","Turn off|the computer.","Imperative: V1 + object"),t("Fakta umum","The computer|turns off|automatically.","Simple Present: S + V1(s/es)"),t("Passive","The ingredients|are mixed.","Simple Present Passive: be + V3")]),"s7-6":u("Ikuti urutan membuat secangkir teh.","tea",[t("01 · Put","Put|the tea bag|into a cup.","FIRST","Masukkan kantong teh ke cangkir."),t("02 · Pour","Pour|hot water|into the cup.","NEXT","Tuang air panas ke cangkir."),t("03 · Wait","Wait|for three minutes.","THEN","Tunggu tiga menit."),t("04 · Serve","Finally,|remove the tea bag|and serve the tea.","FINALLY","Angkat kantong teh, lalu sajikan.")]),"s7-7":u("Tujuan jelas, bahan lengkap, langkah berurutan.","steps",[t("Tujuan","Goal|jelas","01 · tentukan hasil akhir"),t("Bahan","Materials|lengkap","02 · sertakan alat dan bahan"),t("Langkah","Steps|berurutan","03 · satu tindakan utama per langkah"),t("Kata kerja","Use|imperatives","04 · V1: add, pour, stir, serve")]),"sop-1":u("Opini = pendapat pribadi, bukan fakta.","chat",[t("Opinion","I|think|math|is fun.","Ungkapan pribadi + alasan","Opini — boleh berbeda antar orang."),t("Fact","Math|has|twelve|chapters.","Bisa diverifikasi","Fakta — sama untuk semua orang."),t("Kuat","I believe|reading|builds|vocabulary.","Opini + because + alasan","Opini kuat punya alasan.")]),"sop-2":u("Tiga cara meminta pendapat orang lain.","chat",[t("What do you think","What|do you|think|about it?","What do you think about…?","Apa pendapatmu tentang…?"),t("Do you think","Do|you|think|it is safe?","Do you think…?","Menurutmu, apakah…?"),t("How do you feel","How|do you|feel|about online class?","How do you feel about…?","Bagaimana perasaanmu soal…?")]),"sop-3":u("Sampaikan opini dengan pola: opini + alasan.","chat",[t("In my view","In my view,|the plan|is|fair.","In my view, … because…","Menurut saya, rencana itu adil."),t("I believe","I believe|practice|makes|perfect.","I believe + alasan","Saya percaya latihan menyempurnakan."),t("To my mind","To my mind,|teamwork|speeds|work.","To my mind, … because…","Sebab saya, kerja sama mempercepat.")]),"sop-4":u("Setuju singkat, atau setuju lalu menambah.","chat",[t("Setuju","I|agree|with|you.","I agree with you.","Saya setuju denganmu."),t("Sama","So|do|I.","So do I.","Saya juga begitu."),t("Persis","You|are|absolutely|right.","You’re absolutely right.","Kamu benar sekali.")]),"sop-5":u("Tolak dengan sopan: apresiasi → but → alasan.","chat",[t("Apresiasi","I see|your point,|but|I disagree.","I see your point, but…","Saya paham maksudmu, tapi…"),t("Alasan","I’m afraid|I disagree|because|data is weak.","I’m afraid I disagree because…","Maaf, saya tidak setuju karena…"),t("Namun","That’s good,|however|we lack|time.","…, however + alasan","Ide bagus, namun waktunya kurang.")]),"sop-6":u("Opini kuat berdiri di atas alasan.","chat",[t("Kuat","I prefer|books|because|eyes tire.","Alasan logis & spesifik","Saya pilih buku karena mata cepat lelah."),t("Lemah","Books|are|better.|Everyone knows.","Klaim umum tanpa alasan","Hanya selera dan klaim umum.")]),"sop-7":u("Ikuti peran tiap penutur dalam dialog.","chat",[t("A · opini","The trip|should|be|postponed.","A: menyatakan opini","A: sebaiknya trip ditunda."),t("B · setuju sebagian","I see|your point,|but|the schedule…","B: setuju sebagian","B: setuju, tapi jadwalnya…"),t("C · ragu","Are|you|sure?|Tickets booked.","C: mengungkapkan keraguan","C: yakin? Tiket sudah dipesan.")]),"sop-8":u("Respons lengkap: tanggapan → opini → alasan.","chat",[t("Tanggapan","I understand|your|concern,|but…","1 · apresiasi / penanda perbedaan","Saya paham kekhawatiranmu, tapi…"),t("Opini","I believe|we|should|delay.","2 · opini kamu","Saya percaya sebaiknya kita tunda."),t("Alasan","Because|the team|is|short.","3 · alasan (because)","Karena tim masih kurang anggota.")]),"s8-1":u("Report menggambarkan; recount menceritakan.","steps",[t("Report","The honeybee|is|a social|insect.","Menggambarkan hal umum · simple present","Lebah madu adalah serangga sosial."),t("Recount","Last year|we|visited|the farm.","Menceritakan pengalaman · simple past","Tahun lalu kami mengunjungi peternakan.")]),"s8-2":u("Kalimat pembuka: umum, faktual, tanpa opini.","steps",[t("GC tepat","The dolphin|is|a marine|mammal.","The + subject + is + kategori","Paus adalah mamalia laut."),t("Bukan GC","I think|dolphins|are|smart.","Opini pribadi — bukan fakta umum","Bukan pembuka report."),t("Bukan GC","Yesterday|I|saw|one.","Pengalaman pribadi — bukan fakta umum","Bukan pembuka report.")]),"s8-3":u("Description menguraikan ciri, kebiasaan, habitat.","steps",[t("Fisik","It|has|a hard|shell.","Ciri fisik","Dia punya cangkang keras."),t("Kebiasaan","It|feeds|on small|fish.","Kebiasaan makan","Dia memakan ikan kecil."),t("Habitat","It|lives|in rain|forests.","Habitat","Dia hidup di hutan hujan.")]),"s8-4":u("Bandingkan tujuan dan tense tiga teks ini.","steps",[t("Report","Describe|something|general|now.","Simple present · fakta umum","Menggambarkan hal yang umum."),t("Recount","Retell|past|personal|events.","Simple past · pengalaman","Menceritakan pengalaman lampau."),t("Procedure","Explain|how|to do|steps.","Imperative · langkah","Menjelaskan cara melakukan.")]),"s8-5":u("Ciri bahasa report: faktual dan objektif.","sentence",[t("Generic","The animal|lives|in|forests.","Generic noun + simple present","Hewan itu hidup di hutan."),t("Tanpa pribadi","It|feeds|on|leaves.","Tanpa I / we / my","Tanpa sudut pandang penulis."),t("Relatif","which|lives|in|colonies.","Kata relatif & teknis","Yang hidup dalam koloni.")]),"s8-6":u("Tentukan bagian tiap kalimat dengan yakin.","steps",[t("Kalimat 1","The tarsier|is|a small|primate.","→ General classification","Klasifikasi umum."),t("Kalimat 2","It|hunts|insects|at night.","→ Description","Uraian ciri & kebiasaan."),t("Didukung","The tarsier|is|nocturnal.","✓ Didukung teks","Pernyataan sesuai isi teks.")]),"s8-7":u("Tiga langkah mengubah teks menjadi report.","steps",[t("Sebelum","Yesterday|I|saw|a bird.","Pengalaman + opini (bukan report)","Kemarin aku melihat burung."),t("Sesudah","The kingfisher|is|a bright|bird.","Simple present + fakta","Raja-udang adalah burung warna cerah.")]),"s8-8":u("Pola soal report di ulangan.","steps",[t("PG","Find|the general|classification.","Pilih kalimat pembuka","Temukan kalimat klasifikasi umum."),t("PGK","Select|all|supported|statements.","Pilih semua yang didukung teks","Centang semua yang sesuai teks."),t("B/S","Judge|the|paragraph|part.","Benar atau salah","Tentukan bagian paragraf.")]),"s10-1":u("Tiga bentuk soal, empat materi.","steps",[t("PG","One|best|answer|only.","Nomor 1–16 · pilih satu","Satu jawaban paling tepat."),t("PGK","Select|all|correct|answers.","Nomor 17–32 · pilih semua","Lebih dari satu jawaban benar."),t("B/S","True|or|False|statements.","Nomor 33–40 · benar/salah","Tentukan kebenaran pernyataan.")]),"s10-2":u("Strategi aman untuk 120 menit.","steps",[t("Baca","Read|all|questions|first.","1 · peta soal dulu","Baca sekali cepat semua soal."),t("Yakin","Do|the|easy|ones|first.","2 · kunci poin awal","Kerjakan yang yakin dulu."),t("Periksa","Check|your|checkboxes|again.","5 · cek ulang centangan","Pastikan semua yang benar tercentang.")])},Ae=[["s2-1","Kebiasaan, fakta, atau jadwal tetap.","now","She|studies|English every day.","She|does not study|English every day.","Does she|study|English every day?","S + V1(s/es)","S + do/does + not + V1","Do/Does + S + V1?","setiap hari"],["s2-2","Tindakan sedang berlangsung sekarang.","now","They|are playing|football now.","They|are not playing|football now.","Are they|playing|football now?","S + am/is/are + V-ing","S + am/is/are + not + V-ing","Am/Is/Are + S + V-ing?","sekarang"],["s2-3","Kejadian lampau yang berkaitan dengan sekarang.","now","She|has finished|her work.","She|has not finished|her work.","Has she|finished|her work?","S + have/has + V3","S + have/has + not + V3","Have/Has + S + V3?","hasilnya sekarang"],["s2-4","Durasi aktivitas sampai sekarang.","duration","She|has been studying|for two hours.","She|has not been studying|for two hours.","Has she|been studying|for two hours?","S + have/has + been + V-ing","S + have/has + not + been + V-ing","Have/Has + S + been + V-ing?","dua jam → sekarang"],["s3-1","Tindakan selesai pada masa lalu.","past","They|visited|the museum yesterday.","They|did not visit|the museum yesterday.","Did they|visit|the museum yesterday?","S + V2","S + did + not + V1","Did + S + V1?","kemarin"],["s3-2","Tindakan sedang berlangsung pada waktu lampau.","past","She|was reading|at 8 p.m.","She|was not reading|at 8 p.m.","Was she|reading|at 8 p.m.?","S + was/were + V-ing","S + was/were + not + V-ing","Was/Were + S + V-ing?","pukul 8 saat itu"],["s3-3","Sudah selesai sebelum kejadian lampau lain.","past","They|had left|before I arrived.","They|had not left|before I arrived.","Had they|left|before I arrived?","S + had + V3","S + had + not + V3","Had + S + V3?","selesai lebih dahulu"],["s3-4","Durasi aktivitas sebelum kejadian lampau lain.","duration","She|had been studying|for two hours before dinner.","She|had not been studying|for two hours before dinner.","Had she|been studying|for two hours before dinner?","S + had + been + V-ing","S + had + not + been + V-ing","Had + S + been + V-ing?","dua jam → waktu lampau"],["s4-1","Tindakan yang akan terjadi.","future","She|will visit|her aunt tomorrow.","She|will not visit|her aunt tomorrow.","Will she|visit|her aunt tomorrow?","S + will + V1","S + will + not + V1","Will + S + V1?","besok"],["s4-2","Akan sedang berlangsung pada waktu mendatang.","future","She|will be studying|at 8 p.m.","She|will not be studying|at 8 p.m.","Will she|be studying|at 8 p.m.?","S + will + be + V-ing","S + will + not + be + V-ing","Will + S + be + V-ing?","pukul 8 mendatang"],["s4-3","Akan sudah selesai sebelum batas waktu mendatang.","future","They|will have completed|the project by June.","They|will not have completed|the project by June.","Will they|have completed|the project by June?","S + will + have + V3","S + will + not + have + V3","Will + S + have + V3?","selesai sebelum Juni"],["s4-4","Durasi aktivitas sampai batas waktu mendatang.","duration","He|will have been studying|for four hours by 9 p.m.","He|will not have been studying|for four hours by 9 p.m.","Will he|have been studying|for four hours by 9 p.m.?","S + will + have + been + V-ing","S + will + not + have + been + V-ing","Will + S + have + been + V-ing?","empat jam → pukul 9 mendatang"]];for(const[e,a,n,r,s,o,d,l,p,h]of Ae)V[e]=u(a,n,[t("+ Positif",r,d,"",h),t("− Negatif",s,l,"",h),t("? Pertanyaan",o,p,"",h)]),V[e].timePosition=e.startsWith("s3")?22:e.startsWith("s4")?78:50;function Ve(e,a){const n=e.items[a],r=e.timePosition??(e.kind==="past"?22:e.kind==="future"?78:50);return["past","now","future","duration"].includes(e.kind)?`<div class="time-diagram" style="--event:${r}%;--start:${Math.max(5,r-30)}%;--duration:${r-Math.max(5,r-30)}%" aria-label="Diagram waktu"><div class="time-axis"><span>PAST</span><span>NOW</span><span>FUTURE</span></div><div class="time-rail"><i class="time-now"></i>${e.kind==="duration"?'<span class="time-duration"></span>':""}<span class="time-event" style="--event:${r}%">${m("clock")}</span></div><p>${w(n.cue||n.label)}</p></div>`:e.kind==="forms"?`<div class="forms-diagram">${["V1","V2","V3","V-ing"].map((s,o)=>`<span><b>${s}</b><i>${["base","past","participle","continuous"][o]}</i></span>`).join("<em>→</em>")}</div>`:e.kind==="passive"?`<div class="voice-diagram"><span class="voice-person">${m("device")}<small>PELAKU</small></span><span class="voice-flow">${m("arrow")}<i>tindakan</i></span><span class="voice-target">${m("book")}<small>PENERIMA</small></span></div>`:e.kind==="chat"?`<div class="chat-diagram"><span class="chat-avatar">A</span><div class="chat-bubble">${m("chat")}<i>${n.formula}</i><span></span><span></span><span></span></div><span class="chat-avatar other">B</span></div>`:e.kind==="tea"?`<div class="tea-diagram step-${a}"><svg viewBox="0 0 280 125" fill="none" aria-hidden="true"><ellipse cx="142" cy="112" rx="75" ry="8" fill="#b9a3ce" opacity=".15"/><path d="M90 41h90v48c0 29-90 29-90 0Z" fill="#fff9eb" stroke="#cbb5db" stroke-width="2"/><path d="M181 50c48-7 41 47 0 39" stroke="#ccb6db" stroke-width="9"/><ellipse cx="135" cy="41" rx="45" ry="10" fill="#dac89c"/><path class="tea-water" d="M94 60h82v27c0 23-82 23-82 0Z" fill="#d2ab66" opacity=".7"/><path class="tea-string" d="M140 9v65h17" stroke="#a286b6" stroke-width="2"/><rect class="tea-bag" x="120" y="59" width="28" height="28" rx="5" fill="#b49a83"/><path class="tea-steam" d="M108 26c-11-15 12-12 2-26m25 26c-11-15 12-12 2-26m25 26c-11-15 12-12 2-26" stroke="#c4afce" stroke-width="2" stroke-linecap="round"/></svg></div>`:e.kind==="steps"?`<div class="step-diagram">${e.items.map((s,o)=>`<span class="${o===a?"current":o<a?"passed":""}"><b>${o<a?"✓":String(o+1).padStart(2,"0")}</b><i>${s.label.replace(/^\d+ · /,"")}</i></span>`).join("")}</div>`:e.kind==="people"?`<div class="people-diagram"><span class="person-bust"><i></i><b></b></span><span class="person-link">→</span><div class="pronoun-bubble">${w(n.parts[0].text)}</div><span class="mini-book">${m("book")}</span></div>`:'<div class="syntax-diagram"><span>S<small>SUBJECT</small></span><i>→</i><span>V<small>VERB</small></span><i>→</i><span>O / C<small>OBJECT / COMPLEMENT</small></span></div>'}function ke(e,a){const n=e.items[a],r=e.kind==="forms"?["V1","V2","V3","V-ing"]:Re(e);return`${Ve(e,a)}<div class="sentence-pieces" lang="en">${n.parts.map((s,o)=>`<div class="sentence-piece piece-${s.role}"><b>${w(s.text)}</b><small>${r[o]||"KETERANGAN"}</small></div>`).join("")}</div><div class="lab-bottom"><div class="lab-formula">${m("layers")}<span>${w(n.formula)}</span></div>${n.meaning?`<p>${w(n.meaning)}</p>`:""}</div>`}function Ue(e,a){const n=V[e.id];return`<div class="visual-lab" data-lab="${e.id}" data-index="0"><div class="lab-caption"><span>${m(ie[a-1])} ${w(n.note)}</span><b>INTERAKTIF</b></div><div class="lab-controls" role="group" aria-label="Contoh ${w(e.title)}">${n.items.map((r,s)=>`<button class="${s===0?"selected":""}" data-lab-choice="${s}" aria-pressed="${s===0}">${w(r.label)}</button>`).join("")}</div><div class="lab-stage" aria-live="polite">${ke(n,0)}</div><div class="lab-pagination"><span>01 <i>/ ${String(n.items.length).padStart(2,"0")}</i></span><button data-lab-next>Contoh berikutnya ${m("arrow")}</button></div></div>`}function Re(e){return e===V["s1-1"]?["SUBJECT","VERB","OBJECT / COMPLEMENT","KETERANGAN"]:["AWAL","INTI","PELENGKAP","KETERANGAN"]}const f=matchMedia("(prefers-reduced-motion: reduce)"),be="english-xi-course-v2",U=new Map(y.questions.map(e=>[e.id,e]));let g=1,_=null,F=null,J=!0,P=null,B={version:1,current:1,sessions:{}};try{const e=JSON.parse(localStorage.getItem(be)||"null");e?.version===1&&e.sessions&&typeof e.sessions=="object"&&!Array.isArray(e.sessions)&&(B=e,g=e.current==="mixed"||y.chapters.some(a=>a.id===e.current)?e.current:1)}catch{J=!1}function $(){B.current=g;try{localStorage.setItem(be,JSON.stringify(B))}catch{J=!1}i("#save-status").innerHTML=m("device")+(J?"Disimpan di perangkat ini":"Mode sementara · penyimpanan tidak tersedia")}function De(e=document){e.querySelectorAll("[data-icon]").forEach(a=>a.outerHTML=m(a.dataset.icon))}const I=new WeakMap;function b(e,a,n=330,r=0){if(!e)return;const s=I.get(e);if(f.matches){s?.cancel(),I.delete(e);return}if(s&&s.playState!=="idle"&&s.playState!=="finished"){const d=getComputedStyle(e);a=[{...a[0]},...a.slice(1)];for(const l of Object.keys(a[0]))["opacity","transform","translate","scale"].includes(l)&&(a[0][l]=d[l]);s.cancel()}const o=e.animate(a,{duration:n,delay:r,easing:"cubic-bezier(.22,1,.36,1)",fill:"both"});I.set(e,o),o.finished.then(()=>{I.get(e)===o&&(o.cancel(),I.delete(e))}).catch(()=>{I.get(e)===o&&I.delete(e)})}function M(){return y.chapters.find(e=>e.id===g)}function j(){return String(g)}function Oe(e,a){if(!e||!Array.isArray(e.order)||!e.options||!e.answers||typeof e.submitted!="boolean")return!1;const n=a==="mixed"?null:y.chapters.find(r=>String(r.id)===a)?.questions;if(e.order.length!==(n?n.length:10)||new Set(e.order).size!==e.order.length)return!1;for(const r of e.order){const s=U.get(r);if(!s||n&&!n.includes(r))return!1;const o=e.options[r];if(!Array.isArray(o)||o.length!==s.options.length||new Set(o).size!==o.length||o.some(d=>!s.options.some(l=>l.id===d))||e.answers[r]&&e.answers[r].split(",").some(d=>!o.includes(d)))return!1}return!0}for(const e of Object.keys(B.sessions))(!["mixed",...y.chapters.map(a=>String(a.id))].includes(e)||!Oe(B.sessions[e],e))&&delete B.sessions[e];function R(){return B.sessions[j()]||null}function pe(e){return e.split(",").sort().join(",")}function ye(e,a){return a?e.type==="multi"?pe(a)===pe(e.correct):a===e.correct:!1}function Z(e){let a=0,n=0;for(const r of e.order)e.answers[r]?ye(U.get(r),e.answers[r])&&a++:n++;return{correct:a,blank:n,wrong:e.order.length-a-n,total:e.order.length,value:Math.round(a/e.order.length*100)}}function Me(e){if(globalThis.crypto?.getRandomValues){const a=Math.floor(4294967296/e)*e,n=new Uint32Array(1);do crypto.getRandomValues(n);while(n[0]>=a);return n[0]%e}return Math.floor(Math.random()*e)}function W(e){const a=[...e];for(let n=a.length-1;n>0;n--){const r=Me(n+1);[a[n],a[r]]=[a[r],a[n]]}return a}function he(e,a){const n=W(e);return n.length>1&&a&&n.join("|")===a.join("|")&&([n[0],n[1]]=[n[1],n[0]]),n}function We(e){const a=new Set(e?.order||[]),n=[1,2,3,4,5,6,7,8,9],r=[];for(const d of n){const l=y.questions.filter(h=>h.group===d),p=l.filter(h=>!a.has(h.id));r.push(W(p.length?p:l)[0].id)}const s=y.questions.filter(d=>!r.includes(d.id)),o=s.filter(d=>!a.has(d.id));return r.push(...W(o.length>=2?o:s).slice(0,1).map(d=>d.id)),r}function fe(e=j()){const a=B.sessions[e],n=e==="mixed"?We(a):y.chapters.find(d=>String(d.id)===e).questions,r=he(n,a?.order),s={},o=he(r.map((d,l)=>l%4),null);return r.forEach((d,l)=>{const p=U.get(d);if(p.type==="multi"){const k=W(p.options.map(T=>T.id));a?.options[d]?.join("|")===k.join("|")&&([k[0],k[1]]=[k[1],k[0]]),s[d]=k;return}const h=p.correct.split(","),c=W(p.options.filter(k=>!h.includes(k.id)).map(k=>k.id)),v=o[l]%p.options.length;if(c.splice(v,0,...h),a?.options[d]?.join("|")===c.join("|")){const k=c.map((T,G)=>G).filter(T=>T!==v);k.length>1&&([c[k[0]],c[k[1]]]=[c[k[1]],c[k[0]]])}s[d]=c}),B.sessions[e]={order:r,options:s,answers:{},submitted:!1},$(),B.sessions[e]}function se(){if(i("#chapter-nav").children.length===y.chapters.length){for(const e of y.chapters){const a=i(`#chapter-nav [data-chapter="${e.id}"]`),n=e.id===g;a.classList.toggle("active",n),a.setAttribute("aria-pressed",String(n));const r=B.sessions[String(e.id)],s=r?.submitted?Z(r).value:null;let o=a.querySelector(".chapter-score");s===null?o?.remove():(o||(o=document.createElement("span"),o.className="chapter-score",a.querySelector(".chapter-card-meta").append(o)),o.textContent=String(s),o.setAttribute("aria-label","Nilai terakhir "+s))}return}i("#chapter-nav").innerHTML=y.chapters.map(e=>{const a=B.sessions[String(e.id)],n=a?.submitted?Z(a).value:null;return`<button class="chapter-button ${e.id===g?"active":""}" data-chapter="${e.id}" aria-pressed="${e.id===g}" aria-controls="chapter-title"><span class="chapter-mini">${ce(e.id)}</span><span class="chapter-card-copy"><small>BAB ${String(e.id).padStart(2,"0")}</small><strong>${w(e.title)}</strong><span class="chapter-card-meta">${e.sections.length} topik<i></i>${e.questions.length} soal${n!==null?`<span class="chapter-score" aria-label="Nilai terakhir ${n}">${n}</span>`:""}</span></span></button>`}).join("")}const me={1:[["BASE FORM","write","V1"],["PAST FORM","wrote","V2"],["PARTICIPLE","written","V3"]],2:[["SIMPLE","she writes","NOW"],["PERFECT","she has written","HV3"],["CONTINUOUS","she is writing","BVING"]],3:[["SIMPLE","she wrote","PAST"],["PERFECT","she had written","HV3"],["CONTINUOUS","she was writing","BVING"]],4:[["FUTURE","she will go","WILL"],["PAST FUTURE","would go","WOULD"],["GOING TO","is going to go","GOTO"]],5:[["ACTIVE","teacher explains","SVO"],["PASSIVE","is explained","BE+V3"],["VOICE","be + V3","PASSIVE"]],6:[["ASK","do you think?","TANYA"],["GIVE","in my view","OPINI"],["DISAGREE","…but I disagree","SOPAN"]],7:[["SHOULD","you should rest","V1"],["HOW ABOUT","taking a break?","V-ING"],["WHY DON’T","you try again?","V1"]],8:[["OPENING","is a…","GC"],["DETAIL","has…","DESC"],["FACT","lives…","REPORT"]],9:[["GOAL","make tea","01"],["MATERIALS","tea · water","02"],["STEPS","boil · pour","03"]],10:[["PG","16 soal","01–16"],["PGK","16 soal","17–32"],["B/S","8 soal","33–40"]],mixed:[["SOAL","acak","10"],["BENTUK","PG·PGK·B/S","3"],["GROUP","9 kelompok","TOPIK"]]};function He(){const e=g==="mixed"?10:g,a=Ce[e-1];i("#formula-icon").outerHTML=m(ie[e-1],"formula-icon"),i(".formula-icon").id="formula-icon",i("#formula-label").textContent=a[0],i("#formula-text").textContent=a[1]}function Le(){_?.disconnect();const e=M();i("#lesson-content").innerHTML=e.sections.map((a,n)=>`<section class="lesson-section" id="${a.id}" aria-labelledby="heading-${a.id}"><div class="section-heading"><span class="section-number">${a.number}</span><h3 id="heading-${a.id}">${w(a.title)}</h3>${m(ie[e.id-1])}</div><div class="section-body">${Ue(a,g)}<details class="source-details detail-block"><summary>Baca detail ${m("arrow-down")}</summary><div class="detail-content prose">${n===0?e.intro:""}${a.lead}${a.details.map(r=>`<details class="detail-block"><summary>${w(r.title)}</summary><div class="detail-content prose">${r.html}</div></details>`).join("")}</div></details></div></section>`).join(""),e.id===8&&i("#lesson-content").insertAdjacentHTML("beforeend",`<details class="lesson-summary detail-block"><summary>Ringkasan akhir</summary><div class="detail-content prose">${y.summary}</div></details>`),i("#toc").innerHTML=e.sections.map((a,n)=>`<a href="#${a.id}" ${n===0?'class="active" aria-current="location"':""}><span>${a.number}</span>${w(a.title)}</a>`).join(""),i("#chapter-intro").innerHTML="",i("#chapter-intro").hidden=!0,i(".toc-panel").hidden=!1,i("#search").disabled=!1,i(".lesson-options").hidden=!1,i("#topic-position").textContent="01 / "+String(e.sections.length).padStart(2,"0"),_=new IntersectionObserver(a=>{const n=a.filter(s=>s.isIntersecting).sort((s,o)=>s.boundingClientRect.top-o.boundingClientRect.top);if(!n.length)return;const r=n[0].target.closest(".lesson-section").id;S("#toc a").forEach(s=>{const o=s.hash==="#"+r;s.classList.toggle("active",o),o?s.setAttribute("aria-current","location"):s.removeAttribute("aria-current")}),i("#topic-position").textContent=String(e.sections.findIndex(s=>s.id===r)+1).padStart(2,"0")+" / "+String(e.sections.length).padStart(2,"0")},{rootMargin:"-100px 0px -60% 0px",threshold:0}),S(".section-heading").forEach(a=>_.observe(a)),A(),H()}function we(e,a=!0){const n=e==="mixed"?"mixed":Number(e);if(n!=="mixed"&&!y.chapters.some(d=>d.id===n))return;++Q,++te,++ae,g=n,clearTimeout(F),i("#search").value="",i("#search-clear").hidden=!0,i("#search-empty").hidden=!0,i("#search-status").textContent="",$(),se();const r=g==="mixed",s=M();i("#chapter-kicker").innerHTML=`<span class="hero-chapter-label">${r?"LATIHAN CAMPURAN":"BAB "+String(s.id).padStart(2,"0")}</span>ENGLISH / XI`,i("#chapter-title").textContent=r?"Mixed practice.":s.title+".",i("#chapter-subtitle").textContent=r?"Opinion · suggestion · passive voice · report text":s.subtitle,i("#example-english").textContent=r?"Opinion → suggestion → passive voice → report":s.example,i("#example-english").lang=r?"id":"en",i("#example-meaning").textContent=r?"10 soal acak dari seluruh materi latihan.":s.translation,i("#hero-question-count").textContent=r?"10 soal acak":s.questions.length+" soal latihan",i("#material-number").textContent=r?"—":String(s.id).padStart(2,"0"),i(".hero-actions .button").hidden=r,i(".hero-actions .hero-practice").hidden=!1,He();const o=me[g==="mixed"?"mixed":g]||me[1];S(".hero-word").forEach((d,l)=>{const p=o[l];if(!p)return;const h=d.querySelector("small"),c=d.querySelector("b"),v=d.querySelector("span");h&&(h.textContent=p[0]),c&&(c.textContent=p[1]),v&&(v.textContent=p[2])}),r?(_?.disconnect(),i(".material-toolbar").hidden=!0,i(".toc-panel").hidden=!0,i(".lesson-options").hidden=!0,i("#chapter-intro").hidden=!0,i("#lesson-content").innerHTML="",i(".course-layout").classList.add("mixed-layout"),i("#end-title").textContent="Latihan campuran",i("#next-chapter").innerHTML="Kembali ke pilihan bab "+m("arrow-up")):(i(".material-toolbar").hidden=!1,i(".course-layout").classList.remove("mixed-layout"),Le(),i("#end-title").textContent=s.title,i("#next-chapter").innerHTML=(s.id<y.chapters.length?"Bab berikutnya":"Latihan campuran")+" "+m("arrow")),N(),a&&(i(".chapter-hero").scrollIntoView({behavior:f.matches?"instant":"smooth",block:"start"}),i("#chapter-title").setAttribute("tabindex","-1"),i("#chapter-title").focus({preventScroll:!0})),b(i(".hero-copy"),[{opacity:0,transform:"translateY(14px)"},{opacity:1,transform:"translateY(0)"}],330),b(i(".hero-image"),[{opacity:.1,transform:"translateY(16px) scale(.96)"},{opacity:1,transform:"translateY(0) scale(1)"}],570),b(i(".scene-formula"),[{opacity:0,translate:"0 8px"},{opacity:1,translate:"0 0"}],390)}let Q=0;async function ve(){if(g==="mixed")return;const e=++Q,a=j(),n=i("#search").value.trim().toLocaleLowerCase("id"),r=M(),s=new Set(r.sections.filter(l=>!n||l.search.includes(n)).map(l=>l.id)),o=new Map,d=[];for(const l of S(".lesson-section"))if(!l.hidden){const p=getComputedStyle(l);if(o.set(l.id,{rect:l.getBoundingClientRect(),opacity:p.opacity,transform:p.transform}),!s.has(l.id))d.push(Y(l));else if(L.get(l)){const h=p.opacity,c=p.transform;L.get(l).cancel(),b(l,[{opacity:h,transform:c},{opacity:1,transform:"none"}],280)}}if(await Promise.all(d.map(l=>l.finished)),e!==Q||j()!==a){d.forEach(l=>l.animation?.cancel());return}for(const l of r.sections){const p=i("#"+l.id),h=s.has(l.id);p.hidden=!h,i(`#toc a[href="#${l.id}"]`).hidden=!h}d.forEach(l=>l.animation?.cancel()),i("#chapter-intro").hidden=!0,i("#search-empty").hidden=s.size>0,i("#search-clear").hidden=!i("#search").value,i("#search-status").textContent=n?`${s.size} dari ${r.sections.length} topik cocok`:"";for(const l of r.sections)if(s.has(l.id)){const p=i("#"+l.id),h=o.get(l.id),c=p.getBoundingClientRect();(!h||Math.abs(h.rect.top-c.top)>1)&&b(p,[{opacity:h?.opacity??0,transform:`translateY(${h?h.rect.top-c.top:12}px)`},{opacity:1,transform:"none"}],350);const v=p.querySelector(".source-details");n?([...v.querySelectorAll("details")].forEach(T=>{T.textContent.toLocaleLowerCase("id").includes(n)&&(T.open=!0)}),E(v,!0)):v.open&&E(v,!1)}s.size||b(i("#search-empty"),[{opacity:0,transform:"translateY(10px)"},{opacity:1,transform:"none"}],300),A(),H()}function A(){const e=S(".lesson-section:not([hidden]) .source-details"),a=e.length&&e.every(n=>C.get(n)?.opening??n.open);i("#detail-toggle").lastElementChild.textContent=a?"Tutup semua detail":"Buka semua detail",i("#detail-toggle").setAttribute("aria-expanded",String(!!a)),i("#detail-toggle").hidden=e.length===0}function N(){const e=R(),a=g==="mixed",n=a?10:M().questions.length;i("#quiz-title").textContent=a?"Latihan campuran.":"Latihan Bab "+String(g).padStart(2,"0")+".";const r=a?["PG","PGK"]:[...new Set(M().questions.map(o=>{const d=U.get(o).type||"single";return d==="multi"?"PGK":d==="tf"?"B/S":"PG"}))];if(i("#quiz-count").textContent=n+" soal · "+r.join(" · "),!e){i("#quiz-workspace").innerHTML=`${a?'<p class="mixed-info">10 soal · 9 kelompok materi · urutan acak.</p>':""}<div class="quiz-start"><div class="quiz-emblem" aria-hidden="true">${ce(a?10:Number(g))}</div><div class="quiz-start-copy"><h3>${n} soal. Siap mencoba?</h3><p>Pilih atau centang jawaban → cek nilai → lihat pembahasan.</p><div class="quiz-start-tags"><span>${m("shuffle")}Urutan acak</span><span>${m("check-circle")}Pembahasan tersedia</span></div></div><button class="button primary" id="quiz-start">Mulai latihan ${m("arrow")}</button></div>`,H();return}const s=e.submitted?Z(e):null;i("#quiz-workspace").innerHTML=`${s?Ee(s):""}<div class="quiz-session-header"><span>${e.submitted?"Jawaban sudah dikunci":"Pilih satu jawaban untuk setiap soal."}</span><button data-restart>${m("shuffle")}Acak ulang</button></div><div class="question-list">${e.order.map((o,d)=>$e(U.get(o),d,e)).join("")}</div>${e.submitted?`<div class="result-end"><a href="#quiz-result">Kembali ke hasil ↑</a><button class="button secondary" data-restart>${m("shuffle")}Acak & coba lagi</button></div>`:`<div class="quiz-submit-bar"><div><p class="quiz-progress-copy" id="quiz-progress-text"></p><div class="quiz-progress-track" aria-hidden="true"><span></span></div></div><button class="button primary" id="quiz-submit">Cek jawaban ${m("check-circle")}</button></div>`}`,e.submitted||xe(),H()}function Ee(e){return`<div class="quiz-result" id="quiz-result"><div class="score-ring" style="--score:${e.value}" aria-label="Nilai ${e.value} dari 100"><div><strong>${e.value}</strong><small>DARI 100</small></div></div><div class="result-copy"><span class="eyebrow">HASIL LATIHAN</span><h3 tabindex="-1" id="result-title">${e.correct} dari ${e.total} benar.</h3><div class="score-breakdown"><span>${e.correct} benar</span><span>${e.wrong} salah</span><span>${e.blank} kosong</span></div><p>Buka pembahasan jika diperlukan.</p><span class="sr-only" role="status">Nilai ${e.value} dari 100. ${e.correct} benar, ${e.wrong} salah, ${e.blank} kosong.</span></div><button class="button secondary" data-restart>${m("shuffle")}Coba lagi</button></div>`}function $e(e,a,n){const r=n.answers[e.id],s=n.submitted,o=ye(e,r),d=!r,l=e.type||"single",p=l==="multi"?e.correct.split(","):[e.correct],h=x=>{const D=n.options[e.id].indexOf(x);return l==="tf"?"BS"[D]||"?":"ABCDE"[D]||"?"},c=p.map(h).join(", "),v=p.map(x=>e.options.find(D=>D.id===x)?.text||"").join(" + "),k=s?`<div class="question-feedback"><span class="feedback-label ${d?"blank":o?"":"wrong"}">${m(o?"check-circle":d?"quiz":"close")}${d?"Tidak dijawab":o?"Jawaban benar":"Jawaban kurang tepat"}</span>${o?"":`<p class="correct-answer">Jawaban benar: <strong>${c} · ${w(v)}</strong></p>`}<details class="feedback-detail detail-block"><summary>Lihat pembahasan ${m("arrow-down")}</summary><div class="detail-content explanation prose">${e.explanation}</div></details></div>`:"",T=l==="multi"?"Pilih semua jawaban yang benar":l==="tf"?"Benar atau salah":"Pilih satu jawaban",G=l==="multi"?"PGK":l==="tf"?"B/S":"PG";return`<article class="question-card type-${l}" id="q-${e.id}" data-question="${e.id}"><div class="question-top"><span class="question-counter"><b>${String(a+1).padStart(2,"0")}</b> / ${n.order.length}</span><span class="question-badge badge-${l}">${G}</span></div><div class="question-prompt prose" id="prompt-${e.id}">${e.prompt}</div>${l==="multi"?'<p class="multi-hint">Centang semua jawaban yang benar — bisa lebih dari satu.</p>':l==="tf"?'<p class="multi-hint tf-hint">Pilih Benar atau Salah.</p>':""}<fieldset class="question-options" aria-labelledby="prompt-${e.id}" ${s?"disabled":""}><legend>${T}</legend>${n.options[e.id].map((x,D)=>{const Se=e.options.find(Ie=>Ie.id===x),K=s&&p.includes(x),de=s&&!!r&&r.split(",").includes(x)&&!p.includes(x),Te=l==="multi"?(r||"").split(",").includes(x):r===x;return`<label class="option ${K?"is-correct":de?"is-wrong":""}"><input type="${l==="multi"?"checkbox":"radio"}" name="answer-${e.id}" value="${x}" data-answer="${e.id}" ${Te?"checked":""}><span class="option-letter" aria-hidden="true">${h(x)}</span><span class="option-text">${Se.html}</span>${K||de?`<span class="option-status" aria-label="${K?"Jawaban benar":"Jawaban salah"}">${m(K?"check":"close")}</span>`:""}</label>`}).join("")}</fieldset>${k}</article>`}function xe(){const e=R();if(!e||e.submitted)return;const a=e.order.filter(n=>e.answers[n]).length;i("#quiz-progress-text").innerHTML=`<strong>${a} / ${e.order.length}</strong> soal terjawab`,i(".quiz-progress-track>span").style.width=a/e.order.length*100+"%"}function Be(e,a,n="Lanjutkan",r="Batal"){if(P)return Promise.resolve(!1);const s=i("#confirm-dialog");return i("#confirm-title").textContent=e,i("#confirm-description").textContent=a,i("#confirm-accept").textContent=n,i("#confirm-cancel").textContent=r,s.showModal(),i("#confirm-cancel").focus(),b(s,[{opacity:0,transform:"translateY(14px) scale(.97)"},{opacity:1,transform:"translateY(0) scale(1)"}],250),new Promise(o=>P=o)}async function q(e){if(!P||i("#confirm-dialog").classList.contains("closing"))return;const a=i("#confirm-dialog");a.classList.add("closing");const n=Y(a);await n.finished,n.animation?.cancel(),a.close(),a.classList.remove("closing");const r=P;P=null,r?.(e)}async function Ye(){const e=j(),a=R();if(!a||a.submitted||P)return;const n=a.order.filter(s=>!a.answers[s]).length;n&&!await Be(`Masih ada ${n} soal kosong.`,"Jawaban kosong bernilai 0. Setelah diperiksa, semua jawaban dikunci. Tetap cek sekarang?","Tetap cek","Lanjut mengisi")||j()!==e||R()!==a||a.submitted||!await le(()=>{a.submitted=!0,$(),se(),N()})||j()!==e||(i("#quiz-result").scrollIntoView({behavior:f.matches?"instant":"smooth",block:"start"}),i("#result-title").focus({preventScroll:!0}),b(i(".score-ring"),[{opacity:.3,transform:"scale(.9)"},{opacity:1,transform:"scale(1)"}],400))}async function Ke(){const e=j(),a=R();P||a&&(a.submitted||Object.keys(a.answers).length)&&!await Be("Mulai percobaan baru?",a.submitted?"Hasil dan jawaban percobaan ini akan diganti. Soal dan pilihan akan diacak kembali.":"Jawaban pada percobaan ini akan dihapus. Urutan soal dan pilihan akan diacak kembali.","Acak & mulai","Batal")||j()!==e||!await le(()=>{fe(e),se(),N()})||j()!==e||(i("#latihan").scrollIntoView({behavior:f.matches?"instant":"smooth",block:"start"}),i(".question-card input")?.focus({preventScroll:!0}))}i("#chapter-nav").addEventListener("click",e=>{const a=e.target.closest("button[data-chapter]");a&&oe(a.dataset.chapter)});i("#mixed-launch").onclick=()=>oe("mixed");i("#next-chapter").onclick=()=>{if(g==="mixed"){i("#pilihan-bab").scrollIntoView({behavior:f.matches?"instant":"smooth"});return}oe(g<8?g+1:"mixed")};document.addEventListener("click",e=>{const a=e.target.closest(".toc-arrow");if(!a)return;a.parentElement?.querySelector("#toc")?.scrollBy({left:a.classList.contains("next")?240:-240,behavior:"smooth"})});i("#search").addEventListener("input",()=>{clearTimeout(F),F=setTimeout(ve,100)});function re(){clearTimeout(F),i("#search").value="",ve(),i("#search").focus()}i("#search-clear").onclick=re;i("#search-reset").onclick=re;i("#detail-toggle").onclick=()=>{const e=S(".lesson-section:not([hidden]) .source-details"),a=!e.every(n=>C.get(n)?.opening??n.open);e.forEach(n=>E(n,a)),A()};i("#lesson-content").addEventListener("toggle",A,!0);i("#quiz-workspace").addEventListener("change",e=>{const a=e.target.closest("input[data-answer]"),n=R();if(!a||!n||n.submitted)return;const r=a.dataset.answer;if(!r||!n.order.includes(r)||!n.options[r].includes(a.value))return;if((U.get(r).type||"single")==="multi"){const o=a.closest("fieldset"),d=o?[...o.querySelectorAll("input[data-answer]:checked")].map(l=>l.value).sort():[];n.answers[r]=d.join(",")}else n.answers[r]=a.value;$(),xe()});i("#quiz-workspace").addEventListener("click",e=>{e.target.closest("#quiz-start")?_e():e.target.closest("#quiz-submit")?Ye():e.target.closest("[data-restart]")&&Ke()});i("#confirm-accept").onclick=()=>q(!0);i("#confirm-cancel").onclick=()=>q(!1);i("#confirm-dialog").addEventListener("cancel",e=>{e.preventDefault(),q(!1)});i("#confirm-dialog").addEventListener("click",e=>{if(e.target===i("#confirm-dialog")){const a=e.target.getBoundingClientRect();(e.clientX<a.left||e.clientX>a.right||e.clientY<a.top||e.clientY>a.bottom)&&q(!1)}});i("#back-top").onclick=()=>i("#pilihan-bab").scrollIntoView({behavior:f.matches?"instant":"smooth"});document.addEventListener("keydown",e=>{e.key==="/"&&!e.ctrlKey&&!e.metaKey&&!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)&&!i("#confirm-dialog").open&&g!=="mixed"&&(e.preventDefault(),i("#search").focus(),i("#materi").scrollIntoView({behavior:f.matches?"instant":"smooth",block:"start"})),e.key==="Escape"&&document.activeElement===i("#search")&&!i("#confirm-dialog").open&&re()});const je=new WeakSet,O=new Set,X=new IntersectionObserver(e=>{let a=0;for(const n of e)if(n.isIntersecting){if(X.unobserve(n.target),O.delete(n.target),!n.target.isConnected||!n.target.getClientRects().length)continue;je.add(n.target),n.target.classList.add("seen"),b(n.target,[{opacity:0,transform:"translateY(19px) scale(.985)"},{opacity:1,transform:"translateY(0) scale(1)"}],480,Math.min(a++*45,180)),n.target.matches(".visual-lab")&&n.target.querySelectorAll(".sentence-piece").forEach((r,s)=>b(r,[{opacity:0,transform:"translateY(9px) scale(.96)"},{opacity:1,transform:"translateY(0) scale(1)"}],420,s*45))}},{threshold:.06,rootMargin:"0px 0px -15px 0px"});function H(){for(const e of O)e.isConnected||(X.unobserve(e),O.delete(e));if(!f.matches)for(const e of S(".visual-lab,.question-card,.quiz-start,.quiz-result,.chapter-button,.lesson-section .section-heading,.chapter-end,.mixed-info"))!je.has(e)&&!O.has(e)&&(O.add(e),X.observe(e))}const L=new WeakMap;function Y(e){if(!e||f.matches||!e.getClientRects().length)return{finished:Promise.resolve(),animation:null};const a=getComputedStyle(e),n=a.opacity,r=a.transform;I.get(e)?.cancel(),I.delete(e),L.get(e)?.cancel();const s=e.animate([{opacity:n,transform:r},{opacity:0,transform:"translateY(-9px) scale(.985)"}],{duration:155,easing:"cubic-bezier(.4,0,1,1)",fill:"both"});return L.set(e,s),{animation:s,finished:s.finished.catch(()=>{})}}function ee(e){const a=e.getBoundingClientRect();return a.bottom>80&&a.top<innerHeight&&a.height>0}let ae=0,te=0;async function oe(e){const a=e==="mixed"?"mixed":Number(e),n=++ae;if(a===g){for(const o of[i(".hero-copy"),i(".hero-image"),i(".scene-formula"),...S(".visual-lab").filter(ee)]){const d=getComputedStyle(o),l=d.opacity,p=d.transform;L.get(o)?.cancel(),b(o,[{opacity:l,transform:p},{opacity:1,transform:"none"}],250)}i(".chapter-hero").scrollIntoView({behavior:f.matches?"instant":"smooth"});return}const r=[i(".hero-copy"),i(".hero-image"),i(".scene-formula"),...S(".visual-lab").filter(ee).slice(0,2)].filter(Boolean),s=r.map(Y);if(await Promise.all(s.map(o=>o.finished)),n!==ae){s.forEach(o=>o.animation?.cancel());return}s.forEach(o=>o.animation?.cancel()),we(a),H()}async function le(e){const a=++te,n=j(),r=S("#quiz-workspace .quiz-start,#quiz-workspace .question-card,#quiz-workspace .quiz-result,#quiz-workspace .quiz-submit-bar").filter(ee).slice(0,4),s=r.map(Y);await Promise.all(s.map(d=>d.finished));const o=a===te&&n===j();return o&&e(),s.forEach(d=>d.animation?.cancel()),o}async function _e(){await le(()=>{fe(),N()})&&(i("#latihan").scrollIntoView({behavior:f.matches?"instant":"smooth",block:"start"}),i(".question-card input")?.focus({preventScroll:!0}))}const C=new WeakMap;function E(e,a){const n=e.querySelector(":scope > .detail-content"),r=C.get(e),s=e.getBoundingClientRect().height;if(r?.animation?.cancel(),r?.contentAnimation?.cancel(),f.matches||!n){e.open=a,e.style.height="",e.style.overflow="",C.delete(e),A();return}e.open=!0,e.style.height="";const o=e.getBoundingClientRect().height,d=a?o:e.querySelector("summary").getBoundingClientRect().height+2;e.style.overflow="hidden",e.style.height=s+"px";const l=e.animate([{height:s+"px"},{height:d+"px"}],{duration:330,easing:"cubic-bezier(.22,1,.36,1)",fill:"both"}),p=n.animate(a?[{opacity:0,transform:"translateY(-6px)"},{opacity:1,transform:"translateY(0)"}]:[{opacity:getComputedStyle(n).opacity},{opacity:0}],{duration:a?310:160,fill:"both"}),h={animation:l,contentAnimation:p,opening:a};C.set(e,h),A(),l.finished.then(()=>{C.get(e)===h&&(e.open=a,e.style.height="",e.style.overflow="",l.cancel(),p.cancel(),C.delete(e),A())}).catch(()=>{})}i("#lesson-content").addEventListener("click",e=>{const a=e.target.closest("summary");if(!a)return;e.preventDefault();const n=a.parentElement;E(n,!(C.get(n)?.opening??n.open))});const z=new WeakMap;async function ge(e,a){const n=V[e.dataset.lab],r=Number(e.dataset.index);if(Number(e.dataset.pendingIndex??r)===a)return;e.dataset.pendingIndex=String(a);const s=(z.get(e)||0)+1;z.set(e,s),e.querySelectorAll("[data-lab-choice]").forEach(h=>{const c=Number(h.dataset.labChoice)===a;h.classList.toggle("selected",c),h.setAttribute("aria-pressed",String(c))});const o=e.querySelector(".lab-stage"),d=Y(o);if(await d.finished,z.get(e)!==s){d.animation?.cancel();return}const l=o.getBoundingClientRect().height;o.innerHTML=ke(n,a),e.dataset.index=a,delete e.dataset.pendingIndex,e.querySelector(".lab-pagination>span").innerHTML=String(a+1).padStart(2,"0")+" <i>/ "+String(n.items.length).padStart(2,"0")+"</i>",d.animation?.cancel(),b(o,[{opacity:0,transform:"translateY(9px)"},{opacity:1,transform:"translateY(0)"}],350),o.querySelectorAll(".sentence-piece").forEach((h,c)=>b(h,[{opacity:0,transform:"translateY(10px) scale(.96)"},{opacity:1,transform:"translateY(0) scale(1)"}],370,c*45));const p=o.getBoundingClientRect().height;if(!f.matches&&Math.abs(p-l)>2){const h=o.animate([{height:l+"px"},{height:p+"px"}],{duration:330,easing:"cubic-bezier(.22,1,.36,1)"});h.finished.then(()=>h.cancel()).catch(()=>{})}}i("#lesson-content").addEventListener("click",e=>{const a=e.target.closest("[data-lab]");if(!a)return;const n=e.target.closest("[data-lab-choice]");n?ge(a,Number(n.dataset.labChoice)):e.target.closest("[data-lab-next]")&&ge(a,(Number(a.dataset.pendingIndex??a.dataset.index)+1)%V[a.dataset.lab].items.length)});i("#quiz-workspace").addEventListener("click",e=>{const a=e.target.closest("summary");if(!a)return;e.preventDefault();const n=a.parentElement;E(n,!(C.get(n)?.opening??n.open))});i("#quiz-workspace").addEventListener("change",e=>{const a=e.target.closest(".option");a&&b(a.querySelector(".option-letter"),[{transform:"scale(.75) rotate(-12deg)"},{transform:"scale(1.12) rotate(4deg)",offset:.6},{transform:"scale(1) rotate(0deg)"}],340)});let ne=0;i(".hero-scene").addEventListener("pointermove",e=>{f.matches||e.pointerType!=="mouse"||(cancelAnimationFrame(ne),ne=requestAnimationFrame(()=>{const a=i(".hero-scene").getBoundingClientRect();i(".hero-scene").style.setProperty("--px",((e.clientX-a.left)/a.width-.5)*9+"px"),i(".hero-scene").style.setProperty("--py",((e.clientY-a.top)/a.height-.5)*7+"px")}))});i(".hero-scene").addEventListener("pointerleave",()=>{cancelAnimationFrame(ne),i(".hero-scene").style.setProperty("--px","0px"),i(".hero-scene").style.setProperty("--py","0px")});De();we(g,!1);$();document.fonts.ready.then(()=>{b(i(".collection-heading"),[{opacity:.5,transform:"translateY(9px)"},{opacity:1,transform:"translateY(0)"}],400)});
