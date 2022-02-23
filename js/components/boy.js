import { boyData } from '../data/boy-data.js';
import { makeImageSection } from '../function/contents.js';
import { makeThreeMenu } from '../function/contents.js';
import { makeAdvert } from '../function/contents.js';
import { makeTitle } from '../function/contents.js';
import { makeLongImageWebtoon } from '../function/contents.js';
import { makeRanking } from '../function/contents.js';
import { makeWebtoonInfo } from '../function/contents.js';

export default function addHTML() {
  document.querySelector('.changed').innerHTML = `
  ${makeImageSection(boyData[0])}
  ${makeThreeMenu(boyData[1])}
  ${makeAdvert(boyData[2])}
  <section class="section dp-flex mg-t-20">
  ${makeTitle(boyData[3])}
    ${makeLongImageWebtoon(boyData[4])}
    ${makeLongImageWebtoon(boyData[5])}
    ${makeLongImageWebtoon(boyData[6])}
    ${makeLongImageWebtoon(boyData[7])}
  </section>
  <section class="section dp-flex mg-t-20">
    ${makeTitle(boyData[8])}
    ${makeRanking(boyData[9])}
    ${makeRanking(boyData[10])}
    ${makeRanking(boyData[11])}
  </section>;
  <section class="section dp-flex mg-t-20">
  ${makeTitle(boyData[12])}
    ${makeLongImageWebtoon(boyData[13])}
    ${makeLongImageWebtoon(boyData[14])}
    ${makeLongImageWebtoon(boyData[15])}
    ${makeLongImageWebtoon(boyData[16])}
  </section>
  <section class="section dp-flex mg-t-20">
  ${makeTitle(boyData[17])}
  ${makeWebtoonInfo(boyData[18])}
  ${makeWebtoonInfo(boyData[19])}
  ${makeWebtoonInfo(boyData[20])}
  ${makeWebtoonInfo(boyData[21])}
  </section>
  `;
}
