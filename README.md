## React Query

캐싱, 동일한 데이터에 대한 여러 요청 중복 제거, 백그라운드에서 오래된 데이터 업데이트, 성능 최적화 등을 처리하기에 유리하다.

### Client State

앱 메모리에 유지되고 액세스, 업데이팅 등을 동기적으로 합니다.

### Server State

원격으로 유지되며 데이터 패칭, 업데이트를 위해 비동기 Api가 필요합니다.

### json-server를 이용한다.

yarn serve-json로 실행.

---

- cacheTime
- staleTime
- refetchOnMount
- refetchOnWindowFocus
- Initial query data

### Querying by Id setup

1. create a new page that will eventuall display the details about one single super hero.

궁극적으로 한 명의 슈퍼 영웅에 대한 세부 정보를 표시할 새 페이지를 만듭니다.

2. configure the route to that page and add a link from the super heroes list page to the super hero details page.

해당 페이지에 대한 경로를 구성하고 슈퍼 히어로 목록 페이지에서 슈퍼 히어로 세부 정보 페이지로의 링크를 추가합니다.

3. fetch a superhero by id and display the details in the ui.

id로 슈퍼 히어로를 가져오고 UI에 세부 정보 표시.
