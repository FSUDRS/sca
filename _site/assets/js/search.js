// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

// Create the lunr index for the search
var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('publisher')
  this.addField('text')
  this.addField('date')
  this.setRef('id')
});

// Add to this index the proper metadata from the Jekyll content

index.addDoc({
  title: "Letter to Dr. Liang, 12th November, 1943.".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  author: "".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  publisher: "Florida State University, Office of Digital Research and Scholarship".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  text: " Trinity Hall, Cambridge, 12th November, 1943 Dear Dr. Liang, At the meeting of the International Commission held in London on July 29th last it was resolved to initiate an investigation into the methods of criminal administration established by the Axis countries, in countries and districts which they are occupying. The main purpose of this is to draw attention to dangerous principles upon which the Axis Governments have been acting in order that Allied Governments may have at their disposal the fullest legal information when they are taking their decisions concerning the organization of the administration of criminal justice after the war. It would be of very great value to the Commission in this task if they could be provided with some reports which would give information on the system of the criminal administration that Germany has imposed in the occupied districts of China, and we shall therefore be very grateful if, through your good offices, this could be arranged. Yours Sincerely, Dr. Liang Yuen-Li, Chinese Embassy, 49 Portland Place, London, W.I ".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  date: "2020",
  id: 0
});
index.addDoc({
  title: "Letter from Angus Paterson to Mrs. N. W. Eppes, Aug. 27th, 1904".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  author: "Angus Paterson".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  publisher: "Florida State University, Office of Digital Research and Scholarship".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  text: " Madison Fla. Aug 27th 1904 Mrs. N.W. Eppes Bradfordvile Fla. Dear Madam Your letter of the 24th Aust. Requesting the return of the genealogy given me by Mr. John A Pearce has been received. I have two copies of the geneaogy, and herewith return them both. I have not been able to find anything tangible in the case, and have not been to Europe since I saw you in Tallahassee, I have had some correspondence, but have learned nothing by them. I was in Tallahassee in May last, but did not have time to go into the country, I went on Saturday and returned on Monday, and did not converse with any of the parties about the estate matter. Hoping that you may find these papers to be what you want, and that I may at some future time see you and Mr. Eppes at your Home. I am Yours Respectfully Angus Paterson ".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  date: "####-##-##",
  id: 1
});
index.addDoc({
  title: "Catalogue and History of English Criminal Legislation: Letter to Ogilvie from Arnold D. McNair, October 15th, 1943.".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  author: "McNair, Arnold Duncan, Baron, 1885-1975".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  publisher: "Florida State University, Office of Digital Research and Scholarship".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  text: " University of Liverpool October 15th, 1943 Catalogue and History of English Criminal Legislation Dear Ogilvie, Friends of mine in the Faculty of Law at Cambridge tell me that they are in touch with the British Council in the matter of a request for an increase in financial help for the purpose of financing a projected “Catalogue and History of English Criminal Legislation”. As I have seen someting of those who are easponsible for the Department of Criminal Science at Cambridge in connection with another matter that I shall mention, and as I know Dr. Radzinowicz, who is in charge of the project, may I send you a few words upon the metter? As you probably know, Comparative Law, which is a short title for the Comparative Study of Law, is a mewcomer in England and is only just beginning to receive serious attention. There is a part-time Chair in the University of London, the Quain Chair of Comparitive Law, and until twelve months ago Professer Gutteridge of Cambridge held a purely personal Chair in Comparative Law. There is also a journal of Comparative Law of long standing. On the other hand, in many foreign European countries this subject has for a long time received serious attention, and English lawyers have frequently been surprised by the keen interest shown by foreign lawyers in our legal institutions and by their knowledge of them. One practical application of this branch of legal study consists of the movement for the Unification of Private law for which purpose the British Government has participated in a number of international conferences in the last two decades. I know Dr Radzinowics and have read some of his preliminary explorations of the field which he now proposes to investigate, and I have been well impressed by the patient and deliberate manner in which he has matured his plans and the obviously exhanstive character of the undertaking which he proposes. It is clear that he is not anxious to get quick results, but has marked out a programme which will occupy the best years of his life, and may be expected to result in a scholarly production. I have every reason to think that his work, when completed, will bring substantial credit to this country by facilitating the study of our criminal system by foreign lawyers and penologists, and will also fill what is at present a serious gap in the history of our legal institutions. The other matter to which I regerred is an organization connected with the Department of Criminal Science at Cambridge and in which Dr Radzinowicz takes a prominent part, that is, the International Commission for Penal Reconstruction and Development, and it is in this connection that I first met him. One of its recent activities has been the consideration of the means of punishing War Criminals, and the Committee established for that purpose, of which I was Chairman, comprised unofficial representatives of all the United Nations except Russia and Chine - they were unofficial but in fact most of them were officials of their respective Governments. I felt at the time that this contact between the lawyers of the United Nations was a valuable one from a general political point of view because the legal exiles in this country were very keen upon tackling this problem, and the International Commission referred was able to supply that machinery and bring us all into close contact. I merely mention this as one of the cultural international by-products of the Department of Criminal Science at Cambridge with which Dr Radzinowicz is so closely identified. I know that the British Council has a strong Law Advisory Committee who will be able to express an expert opinion on this matter, but as I have had this recent contact with Dr Radzinowicz and his Cambridge friends I felt that I might venture to convey my impressions to you. Yours Sincerely ARNOLD D. McNAIR Sir F.W.Ogilvie, LL.D. ".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  date: "####-##-##",
  id: 2
});
index.addDoc({
  title: "Letter to A.D. McNair from J.W.C. Turner, 12 March, 1943".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  author: "Turner, J. W. Cecil (James William Cecil)".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  publisher: "Florida State University, Office of Digital Research and Scholarship".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  text: " Trinity Hall, Cambridge. 12 March, 1943. Dr. A.D. McNair, O.B.E., The Vice-Chancellor , Liverpool University, Liverpool. Dear McNair, Here are the Norwegian answers to the War Crimes Questionnaire. As de Baer handed in all the material I had passed to him I am sending this directly to you. I have had a letter and copy of a pamphlet on War Crimes from Count Potulicki, the Secretary of the Interallied Committee of Information. He says that he hears that the Cambridge Committee is preparing a report and asks for further information as soon as possible. Yours Sincerely, J.W.C. Turner ".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  date: "####-##-##",
  id: 3
});
index.addDoc({
  title: "Letter to A.D. McNair 14th April, 1943".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  author: "".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  publisher: "Florida State University, Office of Digital Research and Scholarship".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  text: " 14th April, 1943. Dear McNair, I enclose the papers on the Superior Orders Defence which de Moor has from time to time sent to me. I have shown them to Lauterpacht on each occasion and we agreed to hold them, in the hope that de Moor would provide a comprehensive report, covering all the material. But he now asks me to let you have everything, so I fear that he is not able to do this at present. When you have finished with them, will you please return them, as I think it will be necessary to have them duplicated in due course. Yours sincerely, Dr. A.D. McNair, Vice-Chancellor,University of Liverpool. Sub-Committee on the Defence of Superior Orders. Replies to the questionnaire: Belgium Great Britain Czechoslovakia Greece Netherlands Poland U.S.A. Sent to Dr. McNair on 14th April, 1943 with an Appendix to Belgium ".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  date: "####-##-##",
  id: 4
});
index.addDoc({
  title: "“P.S.” regarding genealogy".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  author: "unknown".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  publisher: "Florida State University, Office of Digital Research and Scholarship".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  text: " P.S I wrote to Chrissie Valie Eppes that where in of this genealogy finished or should be able to get all the Eppes to become members: that so far your family was the only one that had come in with the exception of scattered individuals— The news of the hurricane in Fla. is quite appalling—I hope that you and all your family are safe and suffer no loss— ".replace(/[.,!\n]/g, " ").toLowerCase().replace(/([a-zA-Z])'([a-zA-Z])/g, '$1$2').replace(/\s{2,}/g, " "),
  date: "####-##-##",
  id: 5
});

// Builds reference data (maybe not necessary for us, to check)
var store = [{
  "title": "Letter to Dr. Liang, 12th November, 1943.",
  "author": "",
  "publisher": "Florida State University, Office of Digital Research and Scholarship",
  "text": " Trinity Hall, Cambridge, 12th November, 1943 Dear Dr. Liang, At the meeting of the International Commission held in London on July 29th last it was resolved to initiate an investigation into the methods of criminal administration established by the Axis countries, in countries and districts which they are occupying. The main purpose of this is to draw attention to dangerous principles upon which the Axis Governments have been acting in order that Allied Governments may have at their disposal the fullest legal information when they are taking their decisions concerning the organization of the administration of criminal justice after the war. It would be of very great value to the Commission in this task if they could be provided with some reports which would give information on the system of the criminal administration that Germany has imposed in the occupied districts of China, and we shall therefore be very grateful if, through your good offices, this could be arranged. Yours Sincerely, Dr. Liang Yuen-Li, Chinese Embassy, 49 Portland Place, London, W.I ",
  "date": "2020",
  "link": "correspondence/fsu556935"
}
,{
  "title": "Letter from Angus Paterson to Mrs. N. W. Eppes, Aug. 27th, 1904",
  "author": "Angus Paterson",
  "publisher": "Florida State University, Office of Digital Research and Scholarship",
  "text": " Madison Fla. Aug 27th 1904 Mrs. N.W. Eppes Bradfordvile Fla. Dear Madam Your letter of the 24th Aust. Requesting the return of the genealogy given me by Mr. John A Pearce has been received. I have two copies of the geneaogy, and herewith return them both. I have not been able to find anything tangible in the case, and have not been to Europe since I saw you in Tallahassee, I have had some correspondence, but have learned nothing by them. I was in Tallahassee in May last, but did not have time to go into the country, I went on Saturday and returned on Monday, and did not converse with any of the parties about the estate matter. Hoping that you may find these papers to be what you want, and that I may at some future time see you and Mr. Eppes at your Home. I am Yours Respectfully Angus Paterson ",
  "date": "####-##-##",
  "link": "correspondence/fsu369556"
}
,{
  "title": "Catalogue and History of English Criminal Legislation: Letter to Ogilvie from Arnold D. McNair, October 15th, 1943.",
  "author": "McNair, Arnold Duncan, Baron, 1885-1975",
  "publisher": "Florida State University, Office of Digital Research and Scholarship",
  "text": " University of Liverpool October 15th, 1943 Catalogue and History of English Criminal Legislation Dear Ogilvie, Friends of mine in the Faculty of Law at Cambridge tell me that they are in touch with the British Council in the matter of a request for an increase in financial help for the purpose of financing a projected “Catalogue and History of English Criminal Legislation”. As I have seen someting of those who are easponsible for the Department of Criminal Science at Cambridge in connection with another matter that I shall mention, and as I know Dr. Radzinowicz, who is in charge of the project, may I send you a few words upon the metter? As you probably know, Comparative Law, which is a short title for the Comparative Study of Law, is a mewcomer in England and is only just beginning to receive serious attention. There is a part-time Chair in the University of London, the Quain Chair of Comparitive Law, and until twelve months ago Professer Gutteridge of Cambridge held a purely personal Chair in Comparative Law. There is also a journal of Comparative Law of long standing. On the other hand, in many foreign European countries this subject has for a long time received serious attention, and English lawyers have frequently been surprised by the keen interest shown by foreign lawyers in our legal institutions and by their knowledge of them. One practical application of this branch of legal study consists of the movement for the Unification of Private law for which purpose the British Government has participated in a number of international conferences in the last two decades. I know Dr Radzinowics and have read some of his preliminary explorations of the field which he now proposes to investigate, and I have been well impressed by the patient and deliberate manner in which he has matured his plans and the obviously exhanstive character of the undertaking which he proposes. It is clear that he is not anxious to get quick results, but has marked out a programme which will occupy the best years of his life, and may be expected to result in a scholarly production. I have every reason to think that his work, when completed, will bring substantial credit to this country by facilitating the study of our criminal system by foreign lawyers and penologists, and will also fill what is at present a serious gap in the history of our legal institutions. The other matter to which I regerred is an organization connected with the Department of Criminal Science at Cambridge and in which Dr Radzinowicz takes a prominent part, that is, the International Commission for Penal Reconstruction and Development, and it is in this connection that I first met him. One of its recent activities has been the consideration of the means of punishing War Criminals, and the Committee established for that purpose, of which I was Chairman, comprised unofficial representatives of all the United Nations except Russia and Chine - they were unofficial but in fact most of them were officials of their respective Governments. I felt at the time that this contact between the lawyers of the United Nations was a valuable one from a general political point of view because the legal exiles in this country were very keen upon tackling this problem, and the International Commission referred was able to supply that machinery and bring us all into close contact. I merely mention this as one of the cultural international by-products of the Department of Criminal Science at Cambridge with which Dr Radzinowicz is so closely identified. I know that the British Council has a strong Law Advisory Committee who will be able to express an expert opinion on this matter, but as I have had this recent contact with Dr Radzinowicz and his Cambridge friends I felt that I might venture to convey my impressions to you. Yours Sincerely ARNOLD D. McNAIR Sir F.W.Ogilvie, LL.D. ",
  "date": "####-##-##",
  "link": "correspondence/fsu559928"
}
,{
  "title": "Letter to A.D. McNair from J.W.C. Turner, 12 March, 1943",
  "author": "Turner, J. W. Cecil (James William Cecil)",
  "publisher": "Florida State University, Office of Digital Research and Scholarship",
  "text": " Trinity Hall, Cambridge. 12 March, 1943. Dr. A.D. McNair, O.B.E., The Vice-Chancellor , Liverpool University, Liverpool. Dear McNair, Here are the Norwegian answers to the War Crimes Questionnaire. As de Baer handed in all the material I had passed to him I am sending this directly to you. I have had a letter and copy of a pamphlet on War Crimes from Count Potulicki, the Secretary of the Interallied Committee of Information. He says that he hears that the Cambridge Committee is preparing a report and asks for further information as soon as possible. Yours Sincerely, J.W.C. Turner ",
  "date": "####-##-##",
  "link": "correspondence/fsu556917"
}
,{
  "title": "Letter to A.D. McNair 14th April, 1943",
  "author": "",
  "publisher": "Florida State University, Office of Digital Research and Scholarship",
  "text": " 14th April, 1943. Dear McNair, I enclose the papers on the Superior Orders Defence which de Moor has from time to time sent to me. I have shown them to Lauterpacht on each occasion and we agreed to hold them, in the hope that de Moor would provide a comprehensive report, covering all the material. But he now asks me to let you have everything, so I fear that he is not able to do this at present. When you have finished with them, will you please return them, as I think it will be necessary to have them duplicated in due course. Yours sincerely, Dr. A.D. McNair, Vice-Chancellor,University of Liverpool. Sub-Committee on the Defence of Superior Orders. Replies to the questionnaire: Belgium Great Britain Czechoslovakia Greece Netherlands Poland U.S.A. Sent to Dr. McNair on 14th April, 1943 with an Appendix to Belgium ",
  "date": "####-##-##",
  "link": "correspondence/fsu558290"
}
,{
  "title": "“P.S.” regarding genealogy",
  "author": "unknown",
  "publisher": "Florida State University, Office of Digital Research and Scholarship",
  "text": " P.S I wrote to Chrissie Valie Eppes that where in of this genealogy finished or should be able to get all the Eppes to become members: that so far your family was the only one that had come in with the exception of scattered individuals— The news of the hurricane in Fla. is quite appalling—I hope that you and all your family are safe and suffer no loss— ",
  "date": "####-##-##",
  "link": "correspondence/fsu371072"
}
]

console.log(store);
console.log(index);

console.log(typeof store);
console.log(typeof index);

// Query
var qd = {}; // Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  
  //check query string against index and use lunr query boosting, expanding tokens, and boolean values
  var result = index.search(query, {
    fields: {
        title: {boost: 2},
        text: {boost: 1}
    },
    bool: "OR",
    expand: true
  });

  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  // Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = `<div class="result"><h3><a target="_blank" href="/sca${store[ref].link}/?q=${query}">${store[ref].title}</a></h3><p>${store[ref].text.substring(0, 250)}...</p></div>`;
    resultdiv.append(searchitem);
  }
}
console.log(window.location.href)
$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});