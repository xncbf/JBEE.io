---
title: 'Facebook F8 Hackathon 후기'
date: 2019-05-19 19:05:41
category: etc
---

![f8_attendee](/images/f8/f8_attendee.jpeg)

지난 4월 말, Facebook에서 **F8**이라는 컨퍼런스를 진행했다. 그리고 나는 행사의 해커톤 참석자로 선정되어 참가하게 되었다. 해커톤 참가자들에게는 컨퍼런스 기간 동안의 숙소와 왕복 항공편이 지원됐다. 올해 운은 전부 끌어다 쓰지 않았을까 생각된다.

![f8_notice](/images/f8/f8_notice.png)

> 아직도 짜릿하다. 🤩

## ToC

- Schedule
- English, English and English
- Fourth hackathon is special to me

![f8_sanjose](/images/f8/f8_sanjose.jpeg)

> 처음 와보는 San Jose.

## Schedule

해커톤 당일, 숙소에서 해커톤 장소로 셔틀을 타고 이동했다. 이 얼마 안 되는 시간동안 세 명의 해커톤 참가자들과 이야기를 나누게 되었다. 게임 개발자, AR 디자이너, 중년의 머신러닝 엔지니어.

> 🙋🏼‍: Where are you from? <br/>
> 😎: from Korea! <br/>
> 🤭: North…? <br/>
> 😅: No! South Korea! <br/>

(이후로는 계속 South Korea라고 했다.)

눈이 마주치면 인사를 하고 ‘how are you?’로 넘아가게 되면서 너무나도 자연스럽게 대화를 하게 되었다. 처음에는 적응이 안됐다. (일단 한국은 눈을 마주치면 무시한다. 눈을 마주치지도 않았나.) 대화 내용은 넌 어디서 왔니, 주로 뭘하니, 해커톤은 해봤니 등 아주 간단한 것들이었다. 대화는 영어로 진행되었고 다양한 나라와 출신이 있었다. 모르는 사람과 대화하는 것이 이렇게 쉬웠나 하는 생각이 들었다.

![f8_venue](/images/f8/f8_venue.jpeg)

### 페이스북 오픈소스 프로젝트 소개

해커톤이 시작되고 페이스북에서 진행하고 있는 여러 오픈소스 프로젝트들에 대한 소개가 이어졌다. React도 반가웠지만 Spark AR이 정말 매력적이었다.(부끄럽게도 PyTorch가 페이스북에서 만든 거라는 걸 이 때 알았다.)

### 팀 빌딩

아이디어가 있는 사람들이 앞에 나가서 자신의 아이디어를 소개한 다음, 자유롭게 돌아다니면서 팀을 만드는 시간이었다. 돌아다니면서 세 명 정도와 이야기를 나눴던 것 같다. 영어하느라 정신이 없는데 나를 어떻게 어필할지도 잘 몰랐다. 한국어로 된 블로그를 보여줘야 하나, GitHub 프로필을 보여줘야 하나. 다 번거로웠다. 그래서 회사를 팔아보았다.

> 🐝: Do you know LINE messenger? i am front-end engineer working in LINE!

다행히 LINE을 알고 있는 사람이 꽤 있었다. 그래서 두 명이 같이 하자고 얘기를 했고 팀을 골라야 했다. 그러던 중 셔틀 버스에서 만난 AR 디자이너로부터 페이스북 메신저로 연락이 왔다.

> 👨🏼‍💻: hi han, just wanted to mention that I’d be happy to team up if you’d be up for it.

맨날 하던거 말고 새로운 것을 해보고 싶었는데 AR 관련해서 할 수 있을 것 같아 바로 Join! 했다. (그 땐 몰랐다. 내가 이 팀에서도 React를 하게 될 줄.) 그렇게 해서 오스트리아 개발자 두 명과 나를 포함해 한국인 개발자 두 명이 한 팀이 되었다.

![f8_team](/images/f8/f8_team.jpg)

### Start hackathon

팀 빌딩이 마무리되고 브레인 스토밍이 시작됐다.

#### [UN Sustainable Development Goals (SDGs)](https://sustainabledevelopment.un.org/?menu=1300)

![f8_sdgs](/images/f8/f8_sdgs.png)

> 2016년 부터 2030년 까지 새로 시행되는 유엔과 국제사회의 최대 공동목표다. 인류의 보편적 문제 (빈곤, 질병, 교육, 성평등, 난민, 분쟁 등) 와 지구 환경문제 (기후변화, 에너지, 환경오염, 물, 생물다양성 등), 경제 사회문제 (기술, 주거, 노사, 고용, 생산 소비, 사회구조, 법, 대내외 경제) 를 2030년까지 17가지 주 목표와 169개 세부목표로 해결하고자 이행하는 국제사회 최대 공동목표다.

해커톤의 주제는 다음 네 개의 SDGs 중 하나로 결정할 수 있었다.

- 4번. 포용적이고 공평한 양질의 교육 보장 및 모두를 위한 평생학습 기회 증진
- 8번. 모두를 위한 지속적이고 포용적이며 지속가능한 경제성장 및 완전하고 생산적인 고용과 양질의 일자리 증진
- 9번. 회복력 있는 사회기반시설 구축, 포용적이고 지속가능한 산업화 증진 및 혁신 촉진
- 11번. 포용적이고 안전하며 회복력 있고 지속가능한 도시와 정주지 조성

사실 이런게 있는지도 몰랐다. UN에서 정의한 이 **목표**를 주제로 해커톤을 한다는게 멋있었다. 우리 팀은 9번을 주제로 아이디어를 발전시켰다. (국내에서도 이 SDG를 가지고 해커톤을 준비해보면 어떨까)

## English, English, and English

![f8_english](/images/f8/f8_english.png)

대부분의 참가자가 모국어가 아닌 외국어로 영어를 하고 있을거란 생각에 자신감이 있었다. 하지만 모국어 수준으로 잘 하더라. 대부분 영어로 대화하는데 어려움이 없었다. 깔끔한 원어민 발음으로만 리스닝을 해왔던 나는 각양각색의 발음에 혼돈을 맞이했고 의사소통이 생각보다 힘들었다. 내 말을 상대방이 제대로 알아듣지 못하는 경우가 발생할 때마다 영어에 대한 자신감은 계속 떨어졌다.

오히려 개발과 관련된 기술적인 대화는 코드를 보며 대화가 진행되서 의사 전달이 쉬웠지만 문제는 일상적인 대화였다. 아이디어를 구상할 때 몇 마디 못 거들었다. 식사를 할 때도 간단 간단한 대화만 하고 많은 이야기를 나누지 못했다. 많은 개발자를 사귈 수 있는 좋은 기회였는데 아쉬웠다.

개발하다가 발생한 일이다.

> 👨🏼‍💻: 우리 앱의 초기 로딩이 너무 느린데? 프론트엔드 이슈 아니니? <br/>
> 🐝: Really? I’ll check it out! <br/>

겨우 몇 시간동안 만든 앱인데 스크립트 때문에 초기 로딩이 느릴리가! 지금 생각해보면 느린 초기 로딩이 프론트엔드 이슈일리가 없지만 그 때 당시에는 그럴 수 있겠다고 생각했다.  왜냐하면 백엔드 개발자가 MS출신의 스타트업 CTO였기 때문이다. 속 된 말로 좀 쫄았는데 확인해보니 역시 프론트엔드 이슈가 아니었다.

내가 하고 싶었던 말은 다음과 같았다.

> 🐝: 확인해봤는데 프론트엔드 이슈는 아닌 것 같아. 병목이 걸리고 있는게 API 호출하는 부분인데, 25초나 걸리고 있어. 뭔가 이상해서 크롬 개발자 도구의 네트워크 탭을 봤는데, API 중 하나가 오래 걸리고 있더라구. 그 API의 TTFB가 24초야. TTFB가 긴건 서버사이드 이슈라고 생각해. 이 API에서 뭔가 처리가 오래 걸리고 있는 것 같은데 이거 한 번 확인해보자.

하지만 나는…

> 🐝: Check... network tab in Chrome Devtools. This! TTFB… too long! Right? We need to check this API!

행사 내내 영어를 능숙하게 하지 못한 부분이 제일 아쉬웠다. 🤦‍♂️

## 특별했던 네번째의 해커톤의 최종 결과물

![f8_ping](/images/f8/f8_ping.png)

우리 팀에서 만든 이 간단한 서비스의 이름은 **Ping**이다. 페이스북 메신저를 기반으로 동작하는 **챗봇**과 **React Application**과 약간의 **AR Effect**가 들어가 있다.

Ping은 챗봇을 통해 이슈를 수집하고 이를 볼 수 있는 대시보드를 제공한다. 여기서 이슈는 재난 현장이 될 수도 있고 재해 현장이 될 수도 있다. 챗봇은 모바일 앱처럼 별도의 설치가 필요없고 웹 사이트처럼 접근 경로를 알 필요가 없다는 장점이 있다. 또한 대화형 인터페이스로 정보를 제공하는 사용자에게 굉장히 좋은 UX를 제공한다고 느꼈다.

React로 작성된 대시보드는 UNICEF와 같은 단체들이 어떠한 이슈들이 발생했는지 실시간으로 확인할 수 있어야 했고 어느 지역에서 주로 이슈가 발생하고 있는지 시각화가 필요했다. 또한 수집된 이슈가 어떠한 이슈인지 한 눈에 살펴볼 수 있도록 **자연어 처리**를 통해 키워드를 뽑아줬다.

조금 더 발전시키고 싶었던 부분은 단체에서 제보된 이슈에 대해 진행 중 처리를 할 수 있는데 그 때 제보한 사람에게 알림이 가도록 하는 부분이다. 또 우리가 정의한 '이슈'를 좀 더 세분화하고 **narrow down** 했으면 좋지 않았을까 하는 아쉬움이 남는다.

![f8_final_ping](/images/f8/f8_final_ping.jpeg)

> 중간 평가를 위한 데모 현장.

보다 자세한 내용은 [Devpost-Ping](https://devpost.com/software/ping-8cb3q9)에 우리 팀 Lead가 정말 잘 정리해뒀다. 해커톤은 documentation이 제일 중요하다면서 엄청 열심히 정리를 하던데 문서화에 대해서 많은 것을 배웠다. (심지어 소개 동영상까지 있다.)

여담으로 국내에서 진행되는 해커톤 행사도 [devpost 플랫폼](http://devpost.com)에서 진행되면 좋을 것 같다. 흘려보낼 수 있는 해커톤 경험을 아카이빙하는데 좋은 사이트라고 생각한다. (자신의 GitHub에 올라가있는 프로젝트를 등록할 때, README에 emoji가 포함되어 있으면 등록이 안 되는 미지원 이슈가 있긴 하다.)

### 결과

![f8_final](/images/f8/f8_final.jpeg)

해커톤은 이틀동안 진행되었지만 3일차에 중간 평가를 준비해야했고 그 3일차에 결과 발표가 있었다. (덕분에 F8 Day 1은 키노트 세션과 애프터 파티에만 참가할 수 있었다.)

아쉽게도 파이널 리스트에 올라가진 못했다. 조금 기대했던 것은 사실이지만 우리 팀과 약간 비슷한 것을 만든 팀이 파이널에 올라가서 위안 삼을 수 있었다. 참가상도 주고 오큘러스도 주고 행사장에서 주는 여러 기념품들도 다 좋았지만 무엇보다 여러 좋은 사람들을 많이 만났던 것이 큰 수확이었다.

### 좋았던 점

- 주제부터 멋있었고 개발자로서 문제 해결에 대한 부분을 다시 생각해보게 되었다.
- 경험했던 해커톤 중 제일 좋았다.
  - 치킨 댄스 타임
  - 음료와 간식거리 지원
- 24시간 상주하는 경찰분들이 계셨기에 해커톤이 잘 마무리되지 않았나 싶다.
- 한국 토박이던 나였는데 잠깐이나마 외국 문화를 경험해볼 수 있어서 좋았다.
  - how are you / excuse me / sorry
- ~~참가상 500불과 오큘러스~~

### 아쉬웠던 점

좋았던 점도 많지만 아쉬웠던 점도 있다.

- 해커톤을 진행한 후, 하루 정도 간격을 두고 F8 컨퍼런스를 진행했다면 어떨까 싶다. Day 1은 해커톤 일정 때문에 거의 참석을 못했고 Day 2는 해커톤의 여파로 제대로 참석하지 못했다.
- 중간 평가를 두 평가팀이 와서 진행했다. 해커톤을 진행하고 있는 팀이 40개가 넘긴 했지만 겨우 두 팀의 심사로 파이널 리스트가 결정되는 것이 아쉬웠다.
- 팀 빌딩하는 과정에서 야생적인 면도 정말 매력있었지만 조금 더 정교화되면 어떨까 생각했다.
- 페이스북 오픈소스를 소개하는 시간이 좀 길지 않았나 싶다. (살짝 지겨웠다.😅)

## 마무리

영어 공부에 좋은 자극제가 되었다. 기회만 된다면 커뮤니케이션에 문제가 없는 내가 되서 다시 참가하고 싶다. 그만큼 좋은 경험이었지만 100% 흡수를 못한 것 같아 아쉬움이 남는다. 좋은 기회를 주신 [Facebook developer circle: Seoul](https://www.facebook.com/groups/DevCSeoul/)의 리더분들께 정말 감사하다.

### F8 해커톤 참여하신 다른 분들의 발표 자료

- [대학원생이 다녀온 F8 hackathon](https://www.slideshare.net/meeeejin/facebook-f8-hackathon)
- [팀 못 구한 아싸들이 파이널리스트에 오르기 까지](https://speakerdeck.com/jeongukjae/f8-2019-meetup-seoul-hongseunghwan-jeongugjae-balpyojaryo)
- [F8과 함께 덕업일치!](https://speakerdeck.com/jeongah/facebook-developer-circles-seoul-f8gwa-hamgge-deogeobilci)
- [머신러닝 엔지니어가 다녀온 Facebook F8](https://www.slideshare.net/Codertimo/f8-f8-2019-meetupseoul-145927032)