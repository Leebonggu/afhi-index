# AFHI-INDEX
### 미래예측에 필요한 경제 데이터를들 한 곳에 모아서 볼 수 있게 해주는 페이지
### FRED에서 제공해주는 데이터를 기반으로 미국 지표를 주제별로 모아 보여준다.

### 섹션
- 미국 경제 전반
- 미국 기준 금리
- 미국 국채(10년물): 국채가격, 국채수요공급 관련
- WTI Crude Oil Price
- 미국 선행지표

### 작업 로그
- 2019.04.29: 서버를 통해fred에서 데이터를 가져오는 것 성공. 그리고 가져온 데이터를 client로 넘겨주는 것 성공. 그 과정에서 발생한 cors오류에 대한 공부 + proxy개념을 공부할 필요가 있겠다. 어쨋든 가져오고 넘겨주고(받고) 성공. 데이터 시각화를 위한 데이터 구조 정렬과 더 좋은 시각화를 위한 방법을 고민해봐야 겠다. 데이터 겁나 많아지면 불러올 떄 시간이 거릴텐데, 어떻게 해결해야할까?

- 2019.05.01: Promise를 통해 여러 지표를 한번에 가져올 수 있게 만들었다. 데이터를 불러오는 것에 대한 시간과 비용에 대한 문제와 Fred에서 제공하는 데이터의 제한선이 어느정도인지 찾아봐야겠다. 그리고 현재까지 나온 데이터를 firebase에 넣어놓으면 서버비용을 줄일 수 있을까? 그리고 새로운 지표가 올라왔을 때 표시해주는? 바로 받아오는 기능이 있어야 할듯. 그리고 리덕스는 써야할까?

- 2019.05.03: Router 적용 및 다른 지표들 불러오기. 그런데 코드가 뭔가 비효율적. 비효율적이라는건 똑같은 코드를 반복하고 있음. 어떻게 해결해야할까. 그리고 더 필요한 정보는?

- 2019.05.15: 한동안 개발을 못했다. 오늘은 중간중간 생각했었던 개념을 적용시키는 중이다. 데이터를 긁어모아서 결국 어떻게 된건데? 이전대비 증가했나 감소했나? 현재 증가추세인가? 상대적 비교를 통해 데이터의 움직임을 파악하는 작업을 진행중이다. 데이터를 정리하고 알고리즘을 짜는건 역시 어려운듯하다. 그래도 생각했던 내용을 구현할 수 있어서 좋다. 역시 시행착오가 짱이다.

### 기능적 
* [o]: React.router 적용.
* [ ]: 새로운 데이터가 업데이트되면 자동으로 받아오고, 데이터가 바뀌었다고 표시해주는 기능
    * 주식시장처럼 표를 만들어놓는건 어떨까
* [ ]: 데이터를 매번 받아오는 것보단 DB에 넣어놓으면 더 좋지 않을가? (Firebase 생각.)
* [ ]: 이동평균으로 최근의 추세를 파악하자.
  * 30, 15, 7, 3 ,1 수치 요약까지 처리
  * 이번 관찰시점 바로 이전 데이터는 양수면 + 음수면 - 로 만들기.

### 개념

1. 이동평균(30, 15, 7, 3, 1)
데이터들이 발표되는 시기는 년, 분기, 월, 주, 일단위로 발표된다. 지표중엔 현재 시점이 양수인지, 음수인지 중요한 데이터도 있다. 하지만 시계열데이터에서 중요한건 결국 시간의 흐름에따라 어떻게 변했는지가 중요하기 떄문에 이전 시점과 비교해 현재 어떻게 되었는지가 중요하다고 생각한다. 구간별로 평균을내서 본다면 과거에 비해 현재 어떻 추세로 가고있는지 알 수 있을 것이라 생각했다.

CME Group에 따르면 이동평균은 차트에서 기초상품의 현재 가격이 지지선과 저항선에 대비해서 어디에 위치하고 있는가를 비교하는데 사용된다고 한다. 가격이 상승하거나 하락해 이동평균선에 근접하면 트레이더는 이것을 가격 지지선으로보고 움직임이 멈추거나 일정부분 시장되돌림이 있을 수 있다는 신호로 활용할 수 있다. 또한 이동평균선의 교차는 대개 중대한 가격변화를 의미하기때문에 트레이더들은 이동평균선의 교차에 관심을 갖는다. 한 이동평균선이 다른 읻오평균선을 상회하거나 하회할때 발생하는 교차는 강세 및 약세 신호로 이용된다. 예를들어 단기 이동평균이 장기 이동평균을 상향 돌파하면 강세 신호로 여겨지고, 장기 이동평균이 단기 이동평균을 하향 돌파하는 것은 약세로 여거진다. (https://www.cmegroup.com/ko/education/learn-about-trading/courses/technical-analysis/understanding-moving-averages.html)

### 개발 외적 고민
* 미국 연준은 기준금리를 결정하기위해 어떤 데이터들을 볼까? (물가, 고용)
  * 물가(인플레이션율)을 예측할 수 있는 데이터는?
  * 고용을 예측할 수 있는 데에터는?(고용관련지표)
* 어떤 데이터를 넣을까. GDP를 기준으로 넣어볼까.
  * 개인
  * 기업
  * 정부
  * 수출입
* 이동평균을 만들어놓으면 추세를 파악할 수 있지 않을까. 
 * Daily데이터라면 30?
 * Monthly라면 1년? 
 * 어떻게 기준을 잡아야될까. 그냥 최근으로부터 몇개 이런식으로 하는게 좋을까?
* 지표의 목적을 정확히 알아야 할듯.
* 상단에 보는 이유와 현재 상태를 써놓고 지속적으로 볼 수 있게 해놓는다면 좋을듯.