declare class Player {
    player: string;
    /**
     * @param player `Type.Player.`
     */
    constructor(player?: string);
    /**
     * 표면으로부터 측정한 플레이어의 높이(미터)입니다.
     * 플레이어가 표면에 있으면 0입니다.
     */
    altitudeOf(): number;
    /**
     * 한 위치에서 가장 가까운 플레이어입니다.
     * 팀으로 제한할 수 있습니다.
     */
    closestPlayerTo(
    /**
     * 거리를 측정할 위치입니다.
     * - `Type.Vector.`
     */
    center: string, 
    /**
     * 가장 가까이 있는 플레이어가 소속된 팀입니다.
     * - `Type.Team.`
     */
    team: string): string;
    /**
     * (조준에 쓰인) 플레이어의 1인칭 시점 위치입니다.
     */
    eyePosition(): number;
    /**
     * 월드에 대해 상대적으로 플레이어가 바라보고 있는
     * 방향의 상대적인 단위 길이 방향 벡터입니다.
     * 이 값에는 종 및 횡 방향이 있습니다.
     */
    facingDirectionOf(): number;
    /**
     * 지정된 위치로부터 가장 멀리 떨어진 플레이어로,
     * 팀의 제한을 받을 수 있습니다.
     */
    farthestPlayerFrom(
    /**
     * 거리 측정을 위한 위치입니다.
     * - `Type.Vector.`
     */
    center: string, 
    /**
     * 가장 멀리 떨어진 플레이어가 소속된 팀입니다.
     * - `Type.Player.`
     */
    team: string): string;
    /**
     * 지정된 플레이어가 SET STATUS 액션 또는 스크립트 이외의
     * 게임 메카닉을 통해 지정된 상태를 갖게 되었는지 여부입니다.
     */
    hasStatus(
    /**
     * 확인할 상태입니다.
     * - `Type.Status.`
     */
    status: string): string;
    /**
     * 한 플레이어의 현재 생명력(방어력 및 보호막 포함)입니다.
     */
    health(): number;
    /**
     * 플레이어가 현재 사용하는 영웅입니다.
     */
    heroOf(): string;
    /**
     * 지정된 방향 벡터에 대응하는 횡축각(단위: 도)입니다.
     */
    horizontalAngleFromDirection(
    /**
     * 황축각(단위: 도)정보를 가져올 방향 벡터입니다.
     * 이 벡터는 연산 전에 단위 벡터로 정규화됩니다.
     * - `Type.Vector.`
     */
    direction: string): number;
    /**
     * 월드에 대해 상대적으로 플레이어가 바라보고 있는
     * 방향의 상대적인 횡축각(단위: 도)입니다.
     * 이 값은 플레이어가 좌측으로 회전 시 증가합니다.
     * (+/- 180도 범위)
     */
    horizontalFacingAngleOf(): number;
    /**
     * 플레이어의 현재 횡축 속도(초당 미터)입니다.
     * 여기에는 모든 종축 움직임이 배제됩니다.
     */
    horizontalSpeedOf(): number;
    /**
     * 플레이어의 생존 여부 입니다.
     */
    isAlive(): string;
    /**
     * 플레이어가 지정된 버튼을 누르고 있는지 여부입니다.
     */
    isButtonHeld(
    /**
     * 확인할 버튼입니다.
     * - `Type.Button.`
     */
    button: string): string;
    /**
     * 플레이어가 지정된 의사소통 유형
     * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
     */
    isCommunicating(
    /**
     * 고려할 의사소통 유형입니다.
     *
     * 감정 표현의 지속 시간은 정확하게 적용되며,
     * 음성 대사의 지속 시간은 4초로 간주합니다.
     *
     * 그 이외의 지속 시간은 2초로 간주합니다.
     * - `Type.Communication.`
     */
    type: string): string;
    /**
     * 플레이어가 아무 것이든 의사소통 유형
     * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
     */
    isCommunicatingAny(): string;
    /**
     * 플레이어가 감정 표현을 사용하는지 여부입니다.
     */
    isCommunicatingAnyEmote(): string;
    /**
     * 플레이어가 음성 대사를 사용하는지 여부입니다.
     * (음성 대사의 지속 시간은 4초로 추정)
     */
    isCommunicatingAnyVoiceLine(): string;
    /**
     * 플레이어가 웅크리고 있는 상태인지 여부입니다.
     */
    isCrouching(): string;
    /**
     * 플레이어의 사망 여부입니다.
     */
    isDead(): string;
    /**
     * 지정된 플레이어의 주무기가 사용 중인지 여부입니다.
     */
    isFiringPrimary(): string;
    /**
     * 지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.
     */
    isFiringSecondary(): string;
    /**
     * 플레이어가 공중에 있는 상태인지 여부입니다.
     */
    isInAir(): string;
    /**
     * 지정된 플레이어가 전투준비실에 있는지
     * (또한 치유되고 영웅을 변경할 수 있는지) 여부 입니다.
     */
    isInSpawnRoom(): string;
    /**
     * 플레이어가 이동하고 있는지
     * 여부(현재 속도가 0인지 여부로 판단)입니다.
     */
    isMoving(): string;
    /**
     * 플레이어가 착지(또는 걷기가 가능한 표면에 있는) 상태인지 여부입니다.
     */
    isOnGround(): string;
    /**
     * 지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.
     */
    isOnObjective(): string;
    /**
     * 플레이어가 벽에 있는 상태(오르거나 타는 상태)인지 여부입니다.
     */
    isOnWall(): string;
    /**
     * 지정된 플레이어의 초상화가 폭주 상태인지 여부입니다.
     */
    isPortraitOnFire(): string;
    /**
     * 플레이어가 서 있는 상태인지 여부
     * (이동하지 않고 공중에 있는
     * 상태가 아닌 경우로 판단)입니다.
     */
    isStanding(): string;
    /**
     * 지정된 플레이어가 기술 1을 사용하는지 여부입니다.
     */
    isUsingAbility1(): string;
    /**
     * 지정된 플레이어가 기술 2를 사용하는지 여부입니다.
     */
    isUsingAbility2(): string;
    /**
     * 플레이어가 궁극기를 사용하는지 여부입니다.
     */
    isUsingUltimate(): string;
    /**
     * 플레이어의 최대 생명력(방어력 및 보호막 포함)입니다.
     */
    maxHealth(): number;
    /**
     * 지정된 플레이어가 기록한 사망 수입니다.
     * 이 값은 게임이 진행 중일때만 누적됩니다.
     */
    numberOfDeaths(): number;
    /**
     * 지정된 플레이어가 기록한 처치 수입니다.
     * 이 값은 게임이 진행 중일 때만 누적됩니다.
     */
    numberOfEliminations(): number;
    /**
     * 지정된 플레이어가 기록한 결정타 개수입니다.
     * 이 값은 게임이 진행 중일 때만 쌓이게 됩니다.
     */
    numberOfFinalBlows(): number;
    /**
     * 지정된 플레이어의 조준선에서
     * 가장 가까운 플레이어입니다.
     * 팀으로 제한할 수 있습니다.
     */
    playerClosestToReticle(
    /**
     * 가장 가까운 플레이어를 검색할 팀입니다.
     * - `Type.Team.`
     */
    team: string): string;
    /**
     * 지정된 플레이어의 조준선을 기준으로
     * 시야각 안에 있는 플레이어입니다.
     * 팀 단위로 제한할 수 있습니다.
     */
    playersInViewAngle(
    /**
     * 플레이어를 고려할 팀입니다.
     * - `Type.Team.`
     */
    team: string, 
    /**
     * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
     * - `Type.Number.`
     */
    viewAngle: string): any[];
    /**
     * 플레이어의 현재 위치(벡터)입니다.
     */
    positionOf(): number;
    /**
     * 지정된 플레이어의 현재 점수입니다.
     * 게임 모드가 개별 전투가 아닌 경우
     * 결과값은 0이 됩니다.
     */
    scoreOf(): number;
    /**
     * 플레이어의 현재 속도(초당 미터)입니다.
     */
    speedOf(): number;
    /**
     * 지정된 방향에서 플레이어의
     * 현재 속도(초당 미터)입니다.
     */
    speedOfInDirection(
    /**
     * 플레이어의 속도를 측정할 이동 방향입니다.
     * - `Type.Vector.`
     */
    direction: string): number;
    /**
     * 해당 플레이어의 소속 팀입니다.
     * 게임 모드가 개별 전투인 경우 팀은 ALL로 간주됩니다.
     */
    teamOf(): string;
    /**
     * 한 플레이어의 방향 입력 정보입니다.
     * X 구성요소가 횡방향 입력 정보(왼쪽이 양),
     * Z 구성 요소가 종방향 입력 정보(위쪽이 양)인 벡터로 표현됩니다.
     */
    throttleOf(): number;
    /**
     * 플레이어의 현재 궁극기 충전량 비율입니다.
     */
    ultimateChargePercent(): number;
    /**
     * 플레이어의 현재 속도(벡터)입니다.
     * 해당 플레이어가 표면 위에 있는 경우,
     * 경사로를 오르 내린다고 해도 Y 구성요소 속도는 0입니다.
     */
    velocityOf(): number;
    /**
     * 플레이어의 전방에서 지정된
     * 위치까지의 종축각(단위: 도)입니다.
     * 이 값은 해당 위치가
     * 플레이어 아래에 있는 경우 양수이며,
     * 그 외의 경우 0이거나 음수입니다.
     */
    verticalAngleTowards(
    /**
     * 각 각이 종료되는 월드 내 위치입니다.
     * - `Type.Vector.`
     */
    position: string): number;
    /**
     * 월드에 대해 상대적으로 플레이어가
     * 바라보고 있는 방향의 종축각(단위: 도)입니다.
     * 이 값은 플레이어가 내려다보는 경우 증가합니다.
     */
    verticalFacingAngleOf(): number;
    /**
     * 플레이어의 현재 종축 속도(초당 미터)입니다.
     * 여기에는 경사로를 오르내리는 등의 움직임 등
     * 모든 횡축 이동이 배제됩니다.
     */
    verticalSpeedOf(): number;
}

declare class Vector {
    vector: string | number;
    /**
     * @param vector `Type.Vector.`
     */
    constructor(vector: string | number);
    /**
     * 두 방향 벡터 (정규화 불필요) 사이의 각입니다. (단위: 도)
     */
    angleBetweenVectors(
    /**
     * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
     * 이 벡터를 미리 정규화할 필요는 없습니다.
     * - `Type.Vector.`
     */
    vector1: string, 
    /**
     * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
     * 이 벡터를 미리 정규화할 필요는 없습니다.
     * - `Type.Vector.`
     */
    vector2: string): number;
    /**
     * 제공된 월드 좌표 벡터에 해당하는 로컬 좌표 벡터입니다.
     */
    localVectorOf(
    /**
     * 로컬 좌표로 전환될 월드 좌표 벡터입니다.
     * - `Type.Vector.`
     */
    worldVector: string, 
    /**
     * 결과 벡터와 연관될 플레이어입니다.
     * - `Type.Player.`
     */
    relativePlayer: string, 
    /**
     * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
     * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
     * - `Type.Transformation.`
     */
    transformation: string): number;
    /**
     * 제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.
     */
    worldVectorOf(
    /**
     * 월드 좌표로 전환될 로컬 좌표 벡터입니다.
     * - `Type.Vector.`
     */
    localVector: string, 
    /**
     * 결과 벡터와 연관될 플레이어입니다.
     * - `Type.Player.`
     */
    relativePlayer: string, 
    /**
     * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
     * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
     * - `Type.Transformation.`
     */
    transformation: string): number;
    /**
     * 두 각을 비교한 각도 차이(단위: 도) 입니다. 두 각을 서로 +/- 180
     * 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다.
     * 이외의 경우 0이나 음수가 될 수 있습니다.
     */
    angleDifference(
    /**
     * 결과각을 도출하기 위한 두 각 중 하나입니다.
     * - `Type.Number.`
     */
    angle1: string, 
    /**
     * 결과각을 도출하기 위한 두 각 중 하나입니다.
     * - `Type.Number.`
     */
    angle2: string): number;
    /**
     * 지정된 각(단위: 도)의 아크코사인 값입니다.
     */
    arccosineInDegrees(
    /**
     * 함수의 입력값입니다.
     * - `Type.Number.`
     */
    value: string): number;
    /**
     * 지정된 각(단위: RAD)의 아크코사인 값입니다.
     */
    arccosineInRadians(
    /**
     * 함수의 입력값입니다.
     * - `Type.Number.`
     */
    value: string): number;
    /**
     * 지정된 각(단위: 도)의 아크사인 값입니다.
     */
    arcsineInDegrees(
    /**
     * 함수의 입력값입니다.
     * - `Type.Number.`
     */
    value: string): number;
    /**
     * 지정된 각(단위: RAD)의 아크사인 값입니다.
     */
    arcsineInRadians(
    /**
     * 함수의 입력값입니다.
     * - `Type.Number.`
     */
    value: string): number;
    /**
     * 지정된 분자와 분모(단위: 도)의 아크탄젠트 값입니다.
     * (흔히 ATAN2 로 불림)
     */
    arctangentInDegrees(
    /**
     * 함수의 분자 입력 정보입니다.
     * - `Type.Number.`
     */
    numerator: string, 
    /**
     * 함수의 분모 입력 정보입니다.
     * - `Type.Number.`
     */
    denominator: string): number;
    /**
     * 지정된 분자와 분모(단위: RAD)의 아크탄젠트 값입니다.
     * (흔히 ATAN2 로 불림)
     */
    arctangentInRadians(
    /**
     * 함수의 분자 입력 정보입니다.
     * - `Type.Number.`
     */
    numerator: string, 
    /**
     * 함수의 분모 입력 정보입니다.
     * - `Type.Number.`
     */
    denominator: string): number;
    /**
     * 지정된 각(단위: 도)의 코사인 값입니다.
     */
    cosineFromDegrees(
    /**
     * 각(단위: 도)입니다.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * 지정된 각(단위: RAD)의 코사인 값입니다.
     */
    cosineFromRadians(
    /**
     * 각(단위: RAD)입니다.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * 지정된 값의 가위곱입니다.(왼쪽과 위쪽의 벡터 곱은 전방 방향)
     */
    crossProduct(
    /**
     * 가위곱의 왼쪽 벡터 피연산자입니다.
     * - `Type.Vector.`
     */
    value1: string, 
    /**
     * 가위곱의 오른쪽 벡터 피연산자입니다.
     * - `Type.Vector.`
     */
    value2: string): number;
    /**
     * 지정된 각에 대응하는 단위 길이 방향 벡터입니다.
     */
    directionFromAngles(
    /**
     * 결과 벡터를 도출하는 데 사용되는 황축각(단위: 도)입니다.
     * - `Type.Number.`
     */
    horizontalAngle: string, 
    /**
     * 결과 벡터를 도출하는 데 사용되는 종축각(단위: 도)입니다.
     * - `Type.Number.`
     */
    verticalAngle: string): number;
    /**
     * 한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.
     */
    directionTowards(
    /**
     * 결과로 도출되는 방향 벡터가 시작되는 위치입니다.
     * - `Type.Vector.`
     */
    startPos: string, 
    /**
     * 결과로 도출되는 방향 벡터가 끝나는 위치입니다.
     * - `Type.Vector.`
     */
    endPos: string): number;
    /**
     * 두 위치 사이의 거리(미터)입니다.
     */
    distanceBetween(
    /**
     * 거리 측정에 사용되는 두 위치 중 하나입니다.
     * - `Type.Vector.`
     */
    startPos: string, 
    /**
     * 거리 측정에 사용되는 두 위치 중 하나입니다.
     * - `Type.Vector.`
     */
    endPos: string): number;
    /**
     * 지정된 값의 점곱입니다.
     */
    dotProduct(
    /**
     * 점곱의 백터 피연산자 두 개 중 하나입니다.
     * - `Type.Vector.`
     */
    value1: string, 
    /**
     * 점곱의 백터 피연산자 두 개 중 하나입니다.
     * - `Type.Vector.`
     */
    value2: string): number;
    /**
     * 아래를 가리키는 방향 벡터(0, -1, 0)의 약칭입니다.
     */
    down(): number;
    /**
     * 전방을 가리키는 방향 벡터(0, 0, 1)의 약칭입니다.
     */
    forward(): number;
    /**
     * 플레이어의 전방에서 지정된 위치까지의 횡축각(단위: 도)입니다.
     * 이 값은 해당 위치가 플레이엉 좌측에 있는 경우 양수이며,
     * 그 외의 경우 0이거나 음수입니다.
     */
    horizontalAngleTowards(
    /**
     * 이 플레이어가 현재 바라보는 방향으로부터 각이 시작됩니다.
     * - `Type.Player.`
     */
    player: string, 
    /**
     * 각 각이 종료되는 월드 내 위치입니다.
     * - `Type.Vector.`
     */
    position: string): number;
    /**
     * 두 위치가 서로 보이는지 여부입니다.
     */
    isInLineOfSight(
    /**
     * 시야 확인의 시작 위치입니다.
     * 플레이어가 설정되어 있으면
     * 해당 플레이어의 발 위로
     * 2미터 위치가 사용됩니다.
     * - `Type.Vector.`
     */
    startPos: string, 
    /**
     * 시야 확인의 종료 위치입니다.
     * 플레이어가 설정되어 있으면
     * 해당 플레이어의 발 위로
     * 2미터 위치가 사용됩니다.
     * - `Type.Vector.`
     */
    endPos: string, 
    /**
     * 방벽이 시야에 미치는 영향을 정의합니다.
     * 방벽이 적 소유인지를 판정할 때는
     * START POS에 제공된 플레이어의
     * 소속(있는 경우)이 사용됩니다.
     * - `Type.Barrier.`
     */
    barriers: string): string;
    /**
     * LOCATION이 플레이어의 시야에 있는지 여부입니다.
     */
    isInViewAngle(
    /**
     * 시야를 확인할 플레이어입니다.
     * - `Type.Player.`
     */
    player: string, 
    /**
     * 시야에 있는지 테스트할 LOCATION입니다.
     * - `Type.Vector.`
     */
    location: string, 
    /**
     * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
     * - `Type.Number.`
     */
    viewAngle: string): string;
    /**
     * 좌측을 가리키는 방향 벡터(1, 0,0)의 약칭입니다.
     */
    left(): number;
    /**
     * 서 있을 수 있고 생성 지점에서 접근 가능하며
     * 지정된 위치에서 가장 가까운 위치입니다.
     */
    nearestWalkablePosition(
    /**
     * 가장 가까운 도보 가능 위치를 검색할 대상 위치입니다.
     * - `Type.Vector.`
     */
    position: string): number;
    /**
     * 벡터의 단위 길이 정규화입니다.
     */
    normalize(
    /**
     * 정규화할 벡터입니다.
     * - `Type.Vector.`
     */
    position: string): number;
    /**
     * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
     * 팀 또는 시야 범위로 제한할 수 있습니다.
     */
    playersWithinRadius(
    /**
     * 거리 측정이 시작되는 중간 위치입니다.
     * - `Type.Vector.`
     */
    center: string, 
    /**
     * 결과 배열에 포함되기 위해
     * 플레이어가 속해 있어야 하는
     * 반경(미터)입니다.
     * - `Type.Number.`
     */
    radius: string, 
    /**
     * 결과 배열에 포함되기 위해
     * 플레이어가 속해 있어야 하는
     * 팀입니다.
     * - `Type.Team.`
     */
    team: string, 
    /**
     * 결과 배열에 포함되기 위해
     * 플레이어가 시야 확인을
     * 통과해야 하는지 여부 및
     * 방법을 지정합니다.
     * - `Type.LosCheck.`
     */
    losCheck: string): any[];
    /**
     * 우측을 가리키는 방향 벡터(-1, 0, 0)의 약칭입니다.
     */
    right(): number;
    /**
     * 지정된 각(단위: 도)의 사인 값입니다.
     */
    sineFromDegrees(
    /**
     * 각(단위: 도)입니다.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * 지정된 각(단위: RAD)의 사인 값입니다.
     */
    sineFromRadians(
    /**
     * 각(단위: RAD)입니다.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * 지정된 플레이어의 슬롯 번호입니다.
     * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
     * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
     */
    slotOf(
    /**
     * 슬롯 번호 정보를 가져올 플레이어입니다.
     * - `Type.Player.`
     */
    player: string): number;
    /**
     * 지정된 각(단위: 도)의 탄젠트 값입니다.
     */
    tangentFromDegrees(
    /**
     * 각(단위: 도)입니다.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * 지정된 각(단위: RAD)의 탄젠트 값입니다.
     */
    tangentFromRadians(
    /**
     * 각(단위: RAD)입니다.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * 위를 가리키는 방향 벡터(0, 1, 0)의 약칭입니다.
     */
    up(): number;
    /**
     * 지정된 방향 벡터의 대응하는 종축각(단위: 도)입니다.
     */
    verticalAngleFromDirection(
    /**
     * 종축각(단위: 도) 정보를
     * 가져올 방향 벡터입니다.
     * 벡터는 연산 전에 정규화됩니다.
     * - `Type.Vector.`
     */
    direction: string): number;
    /**
     * 지정된 벡터의 X 구성요소입니다.
     * 일반적으로 왼쪽 방향의 벡터량입니다.
     */
    xComponentOf(): number;
    /**
     * 지정된 벡터의 Y 구성요소입니다.
     * 일반적으로 왼쪽 방향의 벡터량입니다.
     */
    yComponentOf(): number;
    /**
     * 지정된 벡터의 Z 구성요소입니다.
     * 일반적으로 왼쪽 방향의 벡터량입니다.
     */
    zComponentOf(): number;
}

declare class Team {
    team: string;
    /**
     * @param team `Type.Team.`
     */
    constructor(team: string);
    /**
     * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
     */
    controlModeScoringPercentage(): number;
    /**
     * (팀 또는 경기 내에서) 지정된 영웅이 사용되고 있는지 여부입니다.
     */
    isHeroBeingPlayed(
    /**
     * 플레이 현황을 확인할 영웅입니다.
     * - `Type.Hero.`
     */
    hero: string): string;
    /**
     * 지정된 팀이 현재 수비 중인지 여부입니다.
     * 게임 모드가 점령, 호위,
     * 또는 점령/호위가 아닌 경우
     * 결과값은 FALSE입니다.
     */
    isTeamOnDefense(): string;
    /**
     * 지정된 팀이 현재 공격 중인지 여부입니다.
     * 게임 모드가 점령, 호위,
     * 또는 점령/호위가 아닌 경우
     * 결과값은 FALSE입니다.
     */
    isTeamOnOffense(): string;
    /**
     * 팀 또는 경기 내 사망 플레이어 수입니다.
     */
    numberOfDeadPlayers(): number;
    /**
     * 팀 또는 경기 내에서 지정된 영웅을
     * 플레이하는 플레이어의 수입니다.
     */
    numberOfHeroes(
    /**
     * 플레이 현황을 확인할 영웅입니다.
     * - `Type.Hero.`
     */
    hero: string): number;
    /**
     * 팀 또는 경기에서 생존한 플레이어의 수입니다.
     */
    numberOfLivingPlayers(): number;
    /**
     * 팀 또는 경기 내 존재하는 플레이어 수입니다.
     */
    numberOfPlayers(): number;
    /**
     * 팀 또는 경기 내에서 화물 또는
     * 거점을 확보하려는 플레이어 수입니다.
     */
    numberOfPlayersOnObjective(): number;
    /**
     * 지정된 팀의 상대 팀입니다.
     */
    oppositeTeamOf(): string;
    /**
     * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
     */
    playersInSlot(
    /**
     * 플레이어 정보를 가져올 슬롯 번호입니다.
     * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
     * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
     * - `Type.Number.`
     */
    slot: string): any[];
    /**
     * 팀 또는 경기 내에서 지정된 영웅을
     * 플레이하는 플레이어가 있는 배열입니다.
     */
    playersOnHero(
    /**
     * 플레이 현황을 확인할 영웅입니다.
     * - `Type.Hero.`
     */
    hero: string): any[];
    /**
     * 지정된 팀의 현재 점수입니다.
     * 개별 전투 모드에서는 결과값이 0입니다.
     */
    teamScore(): number;
    /**
     * 현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다.
     * 아무 팀도 점수를 축적하지 못한 경우 결과값은 ALL입니다.
     */
    static ControlModeScoringTeam(): string;
    /**
     * 현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다.
     * 아무 팀도 점수를 축적하지 못한 경우 결과값은 ALL입니다.
     */
    controlModeScoringTeam(): string;
}

declare class Event {
    event: string;
    /**
     * @param event `Type.Event.`
     */
    constructor(event: string);
    /**
     * 이 규칙에 의해 현재 처리되고 있는
     * 이벤트의 VICTIM이 받는 피해량입니다.
     */
    static EventDamage(): number;
    /**
     * 이 규칙에 의해 현재 처리되고 있는
     * 이벤트의 VICTIM이 받는 피해량입니다.
     */
    eventDamage(): number;
    /**
     * 이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다.
     * ATTACKER 또는 VICTIM과 동일할 수 있습니다.
     */
    static EventPlayer(): string;
    /**
     * 이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다.
     * ATTACKER 또는 VICTIM과 동일할 수 있습니다.
     */
    eventPlayer(): string;
    /**
     * 이 규칙에 의해 현재 처리되고 있는 이벤트에 대한
     * 피해가 치명타(헤드샷 등)인지 여부입니다.
     */
    static EventWasCriticalHit(): string;
    /**
     * 이 규칙에 의해 현재 처리되고 있는 이벤트에 대한
     * 피해가 치명타(헤드샷 등)인지 여부입니다.
     */
    eventWasCriticalHit(): string;
}

declare class Entity {
    entity: string;
    /**
     * @param entity `Type.Entity.`
     */
    constructor(entity: string);
    /**
     * 특정 플레이어, 아이콘 개체, 효과 개체가 아직 존재하는지 여부입니다.
     * 플레이어가 경기를 나갔는지, 개체가 소멸됐는지 등을 판별할 때 유용합니다.
     */
    entityExists(): string;
    /**
     * 월드에 개체가 생성되었는지 여부입니다.
     * 플레이어가 영웅을 선택하지 않은 경우
     * 결과값은 FALSE 입니다.
     */
    hasSpawned(): string;
}

interface IRule {
    /**
     * @description
     * You can annotate this rule.
     * Type `''`
     */
    description?: string;
    /**
     * @description
     * Please set event type.
     * - Type `RuleEvent.`
     */
    event: string;
    /**
     * @description
     * Write conditional expression
     * or reference the condition variable
     * -  Condition operator is must use one of the following:
     *    `==`, `!=`, `<`, `<=`, `>`, `>=`, `===`
     * - To view a list of conditional value functions, Type `Value.`
     */
    condition: boolean[];
    /**
     * @description
     * - Type `Action.`
     */
    action: string[];
}
declare class Rule {
    static collectedCodes: string[];
    constructor(data: IRule);
}

declare const ruleCompare: (left: string, operatorToken: string, right: string) => string;

declare const compiler_d_ruleCompare: typeof ruleCompare;
declare namespace compiler_d {
  export {
    compiler_d_ruleCompare as ruleCompare,
  };
}



type index_d_Player = Player;
declare const index_d_Player: typeof Player;
type index_d_Vector = Vector;
declare const index_d_Vector: typeof Vector;
type index_d_Team = Team;
declare const index_d_Team: typeof Team;
type index_d_Event = Event;
declare const index_d_Event: typeof Event;
type index_d_Entity = Entity;
declare const index_d_Entity: typeof Entity;
type index_d_Rule = Rule;
declare const index_d_Rule: typeof Rule;
declare namespace index_d {
  export {
    index_d_Player as Player,
    index_d_Vector as Vector,
    index_d_Team as Team,
    index_d_Event as Event,
    index_d_Entity as Entity,
    index_d_Rule as Rule,
    compiler_d as Compiler
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default: (str: "리퍼" | "트레이서" | "메르시" | "한조" | "토르비온" | "라인하르트" | "파라" | "윈스턴" | "위도우메이커" | "바스티온" | "시메트라" | "젠야타" | "로드호그" | "겐지" | "맥크리" | "정크랫" | "자리야" | "솔져: 76" | "루시우" | "메이" | "솜브라" | "둠피스트" | "아나" | "오리사" | "브리기테" | "모이라" | "레킹볼" | "애쉬" | "바티스트" | "D.Va" | "시그마") => "리퍼" | "트레이서" | "메르시" | "한조" | "토르비온" | "라인하르트" | "파라" | "윈스턴" | "위도우메이커" | "바스티온" | "시메트라" | "젠야타" | "로드호그" | "겐지" | "맥크리" | "정크랫" | "자리야" | "솔져: 76" | "루시우" | "메이" | "솜브라" | "둠피스트" | "아나" | "오리사" | "브리기테" | "모이라" | "레킹볼" | "애쉬" | "바티스트" | "D.Va" | "시그마";

declare const heroConstant_d_Default: typeof Default;
declare namespace heroConstant_d {
  export {
    heroConstant_d_Default as Default,
  };
}

/**
 * {701}
 */
declare type EventPlayerType = 'All' | 'Slot0' | 'Slot1' | 'Slot2' | 'Slot3' | 'Slot4' | 'Slot5' | 'Slot6' | 'Slot7' | 'Slot8' | 'Slot9' | 'Slot10' | 'Slot11';

declare type VariableType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

declare type ValueTransformationType = 'Rotation' | 'Rotation And Translation';

declare type ValueStatusType = 'Hacked' | 'Burning' | 'Knocked Down' | 'Asleep' | 'Frozen' | 'Unkillable' | 'Invincible' | 'Phased Out' | 'Rooted' | 'Stunned';

declare type ValueButtonType = 'Primary Fire' | 'Secondary Fire' | 'Ability 1' | 'Ability 2' | 'Ultimate' | 'Interact' | 'Jump' | 'Crouch';

declare type ValueCommunicationType = 'Voice Line Up' | 'Voice Line Left' | 'Voice Line Right' | 'Voice Line Down' | 'Emote Up' | 'Emote Left' | 'Emote Right' | 'Emote Down' | 'Ultimate Status' | 'Hello' | 'Need Healing' | 'Group' | 'Thanks' | 'Acknowledge';

/**
 * {702}
 */
declare type ValueBarrierType = 'Barriers Do Not Block Los' | 'Enemy Barriers Block Los' | 'All Barriers Block Los';

/**
 * {651}
 */
declare type ValueLosCheckType = 'Off' | 'Surfaces' | 'Surfaces And Enemy Barriers' | 'Surfaces And All Barriers';

declare type ValueRoundingType = 'Up' | 'Down' | 'To Nearest';

declare type ValueOperatorType = '==' | '!=' | '<' | '<=' | '>' | '>=';

declare type ValueRelativeType = 'To World' | 'To Player';

declare type ValueMotionType = 'Cancel Contrary Motion' | 'Incorporate Contrary Motion';

declare type ValueReevaluationType = 'Destination And Rate' | 'None';

declare type ValueEffectType = 'Sphere' | 'Light Shaft' | 'Orb' | 'Ring' | 'Cloud' | 'Sparkles' | 'Good Aura' | 'Bad Aura' | 'Energy Sound' | 'Pick-up Sound' | 'Pick' | 'Good Aura Sound' | 'Bad Aura Sound' | 'Sparkles Sound' | 'Smoke Sound' | 'Decal Sound' | 'Beacon Sound';

declare type ValueColorType = 'White' | 'Yellow' | 'Green' | 'Purple' | 'Red' | 'Blue' | 'Team 1' | 'Team 2' | 'Aqua' | 'Orange' | 'Sky Blue' | 'Turqoise' | 'Lime Green';

declare type ValueEffectReevaluationType = 'Visible To, Position, And Radius' | 'Position And Radius' | 'Visible To' | 'None';

declare type ValueLocationType = 'Left' | 'Top' | 'Right';

declare type ValueIconReevaluationType = 'Visible To And Position' | 'Position' | 'Visible To' | 'None';

declare type ValueIconType = 'Arrow: Down' | 'Arrow: Left' | 'Arrow: Right' | 'Arrow: Up' | 'Asterisk' | 'Bolt' | 'Checkmark' | 'Circle' | 'Club' | 'Diamond' | 'Dizzy' | 'Exclamation Mark' | 'Eye' | 'Fire' | 'Flag' | 'Halo' | 'Happy' | 'Heart' | 'Moon' | 'No' | 'Plus' | 'Position' | 'Position 2' | 'Question Mark' | 'Radioactive' | 'Recycle' | 'Ring Thick' | 'Ring Thin' | 'Sad' | 'Skull' | 'Spade' | 'Spiral' | 'Stop' | 'Trashcan' | 'Warning' | 'X';

declare type ValueInWorldTextReevaluationType = 'Visible To, Position, And String' | 'Visible To And String' | 'String';

declare type ValueClippingType = 'Clip Against Surfaces' | 'Do Not Clip';

declare type ValueVariableOperation = 'Add' | 'Subtract' | 'Multiply' | 'Divide' | 'Modulo' | 'Raise To Power' | 'Min' | 'Max' | 'Append To Array' | 'Remove From Array By Value' | 'Remove From Array By Index';

declare type ValuePlayEffect = 'Good Explosion' | 'Bad Explosion' | 'Ring Explosion' | 'Good Pickup Effect' | 'Bad Pickup Effect' | 'Debuff Impact Sound' | 'Buff Impact Sound' | 'Ring Explosion Sound' | 'Buff Explosion Sound' | 'Explosion Sound';

declare type ValueInvisibleToType = 'All' | 'Enemies' | 'None';

declare type ValueObjectiveDescriptionReevaluationType = 'Visible To And String' | 'String';

declare type ValueStartAcceleratingReevaluationType = 'Direction, Rate, And Max Speed' | 'None';

declare type ValueDamageModificationReevaluationType = 'Receivers Damagers And Damage Percent' | 'Receivers And Damagers' | 'None';

declare type ValueFacingReevaluationType = 'Direction And Turn Rate' | 'None';

declare type ValueWaitBehaviorType = 'Ignore Condition' | 'Abort When False' | 'Restart When True';

declare type ValueStartThrottleBehaviorType = 'Replace Existing Throttle' | 'Add To Existing Throttle';

declare type ValueStartThrottleReevaluationType = 'Direction And Magnitude' | 'None';

declare type ValueBeamType = 'Good Beam' | 'Bad Beam' | 'Grapple Beam';

declare type ValueBeamReevaluationType = 'Visible To Position and Radius' | 'Position and Radius' | 'Visible To' | 'None';

declare type ValueSpectatorsType = 'Default Visibility' | 'Visible Always' | 'Visible Never';

declare type SlotRangeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

/**
 * {700}
 */
declare type TeamConstantType = 'All' | 'Team 1' | 'Team 2';

/**
 * @param num Type Any Number.
 * Then can see list of available number lists. */
declare const Default$1: (num: SlotRangeType) => SlotRangeType;

declare namespace slotRange_d {
  export {
    Default$1 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$2: (str: TeamConstantType) => TeamConstantType;

declare namespace teamConstant_d {
  export {
    Default$2 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$3: (str: VariableType) => VariableType;

declare namespace variable_d {
  export {
    Default$3 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$4: (str: EventPlayerType) => EventPlayerType;

declare namespace eventPlayer_d {
  export {
    Default$4 as Default
  };
}

/**
 * 실수 형식의 상수입니다.
 */
declare const number: (
/**
 * 실수 형식의 상수입니다.
 */
number: number
) => number;

/**
 * 두 숫자 또는 벡터의 합입니다.
 */
declare const add: (
/**
 * 좌측 피연산자입니다.
 * 결과값이 숫자 또는 벡터로
 * 나올 수 있는 아무 값이나
 * 사용할 수 있습니다.
 * - `Type.Add.`
 */
value1: string | number | any[],
/**
 * 우측 피연산자입니다.
 * 결과값이 숫자 또는 벡터로
 * 나올 수 있는 아무 값이나
 * 사용할 수 있습니다.
 * - `Type.Add.`
 */
value2: string | number | any[]
) => number;

/**
 * 두 각을 비교한 각도 차이(단위: 도) 입니다. 두 각을 서로 +/- 180
 * 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다.
 * 이외의 경우 0이나 음수가 될 수 있습니다.
 */
declare const angleDifference: (
/**
 * 결과각을 도출하기 위한 두 각 중 하나입니다.
 * - `Type.Number.`
 */
angle1: string | number | any[],
/**
 * 결과각을 도출하기 위한 두 각 중 하나입니다.
 * - `Type.Number.`
 */
angle2: string | number | any[]
) => number;

/**
 * 두 방향 벡터 (정규화 불필요) 사이의 각입니다. (단위: 도)
 */
declare const angleBetweenVectors: (
/**
 * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
 * 이 벡터를 미리 정규화할 필요는 없습니다.
 * - `Type.Vector.`
 */
vector1: string | number | any[],
/**
 * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
 * 이 벡터를 미리 정규화할 필요는 없습니다.
 * - `Type.Vector.`
 */
vector2: string | number | any[]
) => number;

/**
 * 표면으로부터 측정한 플레이어의 높이(미터)입니다.
 * 플레이어가 표면에 있으면 0입니다.
 */
declare const altitudeOf: (
/**
 * 고도 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 지정된 배열 내 요소의 수입니다.
 */
declare const countOf: (
/**
 * - `Type.Array.`
 */
array: string | number | any[]
) => number;

/**
 * 지정된 각(단위: 도)의 아크코사인 값입니다.
 */
declare const arccosineInDegrees: (
/**
 * 함수의 입력값입니다.
 * - `Type.Number.`
 */
value: string | number | any[]
) => number;

/**
 * 지정된 각(단위: RAD)의 아크코사인 값입니다.
 */
declare const arccosineInRadians: (
/**
 * 함수의 입력값입니다.
 * - `Type.Number.`
 */
value: string | number | any[]
) => number;

/**
 * 지정된 각(단위: 도)의 아크사인 값입니다.
 */
declare const arcsineInDegrees: (
/**
 * 함수의 입력값입니다.
 * - `Type.Number.`
 */
value: string | number | any[]
) => number;

/**
 * 지정된 각(단위: RAD)의 아크사인 값입니다.
 */
declare const arcsineInRadians: (
/**
 * 함수의 입력값입니다.
 * - `Type.Number.`
 */
value: string | number | any[]
) => number;

/**
 * 지정된 분자와 분모(단위: 도)의 아크탄젠트 값입니다.
 * (흔히 ATAN2 로 불림)
 */
declare const arctangentInDegrees: (
/**
 * 함수의 분자 입력 정보입니다.
 * - `Type.Number.`
 */
numerator: string | number | any[],
/**
 * 함수의 분모 입력 정보입니다.
 * - `Type.Number.`
 */
denominator: string | number | any[]
) => number;

/**
 * 지정된 분자와 분모(단위: RAD)의 아크탄젠트 값입니다.
 * (흔히 ATAN2 로 불림)
 */
declare const arctangentInRadians: (
/**
 * 함수의 분자 입력 정보입니다.
 * - `Type.Number.`
 */
numerator: string | number | any[],
/**
 * 함수의 분모 입력 정보입니다.
 * - `Type.Number.`
 */
denominator: string | number | any[]
) => number;

/**
 * 지정된 각(단위: 도)의 코사인 값입니다.
 */
declare const cosineFromDegrees: (
/**
 * 각(단위: 도)입니다.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * 지정된 각(단위: RAD)의 코사인 값입니다.
 */
declare const cosineFromRadians: (
/**
 * 각(단위: RAD)입니다.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
 */
declare const controlModeScoringPercentage: (
/**
 * 점수 비율 정보를 가져올 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * 게임 자체에 종속된 전역 변수의 현재 값입니다.
 */
declare const globalVariable: (
/**
 * - `Type.Variable.`
 */
variable: string | number | any[]
) => any[];

/**
 * 지정된 플레이어가 가진 플레이어 변수의 현재 값입니다.
 */
declare const playerVariable: (
/**
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * - `Type.Variable.`
 */
variable: string | number | any[]
) => any[];

/**
 * 두 위치 사이의 거리(미터)입니다.
 */
declare const distanceBetween: (
/**
 * 거리 측정에 사용되는 두 위치 중 하나입니다.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * 거리 측정에 사용되는 두 위치 중 하나입니다.
 * - `Type.Vector.`
 */
endPos: string | number | any[]
) => number;

/**
 * 두 숫자 또는 벡터의 비율입니다. 벡터를 숫자로 나누면
 * 비율이 증감된 벡터가 도출됩니다. 0으로 나누면 0이 됩니다.
 */
declare const divide: (
/**
 * 좌측 피연산자입니다. 결과값이 숫자 또는
 * 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.
 * - `Type.Divide.`
 */
value1: string | number | any[],
/**
 * 좌측 피연산자입니다. 결과값이 숫자 또는
 * 벡터로 나올 수 있는 아무 값이나 사용할 수 있습니다.
 * - `Type.Divide.`
 */
value2: string | number | any[]
) => number;

/**
 * 이 규칙에 의해 현재 처리되고 있는
 * 이벤트의 VICTIM이 받는 피해량입니다.
 */
declare const eventDamage: (


) => number;

/**
 * (조준에 쓰인) 플레이어의 1인칭 시점 위치입니다.
 */
declare const eyePosition: (
/**
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 한 플레이어의 현재 생명력(방어력 및 보호막 포함)입니다.
 */
declare const health: (
/**
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 지정된 방향 벡터에 대응하는 횡축각(단위: 도)입니다.
 */
declare const horizontalAngleFromDirection: (
/**
 * 황축각(단위: 도)정보를 가져올 방향 벡터입니다.
 * 이 벡터는 연산 전에 단위 벡터로 정규화됩니다.
 * - `Type.Vector.`
 */
direction: string | number | any[]
) => number;

/**
 * 플레이어의 전방에서 지정된 위치까지의 횡축각(단위: 도)입니다.
 * 이 값은 해당 위치가 플레이엉 좌측에 있는 경우 양수이며,
 * 그 외의 경우 0이거나 음수입니다.
 */
declare const horizontalAngleTowards: (
/**
 * 이 플레이어가 현재 바라보는 방향으로부터 각이 시작됩니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 각 각이 종료되는 월드 내 위치입니다.
 * - `Type.Vector.`
 */
position: string | number | any[]
) => number;

/**
 * 월드에 대해 상대적으로 플레이어가 바라보고 있는
 * 방향의 상대적인 횡축각(단위: 도)입니다.
 * 이 값은 플레이어가 좌측으로 회전 시 증가합니다.
 * (+/- 180도 범위)
 */
declare const horizontalFacingAngleOf: (
/**
 * 바라보고 있는 방향의 황축각 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 플레이어의 현재 횡축 속도(초당 미터)입니다.
 * 여기에는 모든 종축 움직임이 배제됩니다.
 */
declare const horizontalSpeedOf: (
/**
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 배열 내에 있는 값의 인덱스입니다.
 * 해당 값을 찾을 수 없는 경우 -1입니다.
 */
declare const indexOfArrayValue: (
/**
 * 지정된 값을 검색할 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * 검색할 값입니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => number;

/**
 * EVENT PLAYER 또는 전역 레벨에서 실행된 최근의
 * START DAMGE MODIFICATION 액션의 ID입니다.
 */
declare const lastDamageModificationId: (


) => number;

/**
 * EVENT PLAYER 또는 전역 레벨에서 가장 최근에 실행된
 * DAMAGE OVER TIME 액션의 ID입니다.
 */
declare const lastDamageOverTimeId: (


) => number;

/**
 * EVENT PLAYER 또는 전역 레벨에서 가장 최근에 실행된
 * HEAL OVER TIME 액션의 ID입니다.
 */
declare const lastHealOverTimeId: (


) => number;

/**
 * EVENT PLAYER 또는 전역 레벨에서
 * CREATE HUD TEXT 액션 또는
 * CREATE IN-WORLD TEXT 액션으로
 * 생성한 텍스트의 마지막 부분에 대한 참조입니다.
 */
declare const lastTextId: (


) => number;

/**
 * 경기의 현재 라운드입니다. 1부터 증가합니다.
 */
declare const matchRound: (


) => number;

/**
 * 두 숫자 중 높은 수입니다.
 */
declare const max: (
/**
 * - `Type.Number.`
 */
value1: string | number | any[],
/**
 * - `Type.Number.`
 */
value2: string | number | any[]
) => number;

/**
 * 플레이어의 최대 생명력(방어력 및 보호막 포함)입니다.
 */
declare const maxHealth: (
/**
 * 최대 생명력 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 두 숫자 중 낮은 수입니다.
 */
declare const min: (
/**
 * 좌측 피연산자입니다.
 * 결과값이 숫자로 나올 수 있는
 * 아무 값이나 사용할 수 있습니다.
 * - `Type.Number.`
 */
value1: string | number | any[],
/**
 * 우측 피연산자입니다.
 * 결과값이 숫자로 나올 수 있는
 * 아무 값이나 사용할 수 있습니다.
 * - `Type.Number.`
 */
value2: string | number | any[]
) => number;

/**
 * 좌측 피연산자를 우측 피연산자로 나눈 나머지입니다.
 * 어떤 숫자이든 MODULO 0의 결과는 0입니다.
 */
declare const modulo: (
/**
 * - `Type.Number.`
 */
value1: string | number | any[],
/**
 * - `Type.Number.`
 */
value2: string | number | any[]
) => number;

/**
 * 방어력 및 보호막을 포함하여 0과 1사이로
 * 정규화 된 플레이어의 현재 생명력입니다.
 * (예를 들어, 0은 생명력 없음,
 * 0.5는 생명력 절반, 1은 최대 생명력 등등)
 */
declare const normalizedHealth: (
/**
 * 정규화된 생명력을 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 팀 또는 경기 내 사망 플레이어 수입니다.
 */
declare const numberOfDeadPlayers: (
/**
 * 플레이어 수를 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * 지정된 플레이어가 기록한 사망 수입니다.
 * 이 값은 게임이 진행 중일때만 누적됩니다.
 */
declare const numberOfDeaths: (
/**
 * 사망 횟수 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 지정된 플레이어가 기록한 처치 수입니다.
 * 이 값은 게임이 진행 중일 때만 누적됩니다.
 */
declare const numberOfEliminations: (
/**
 * 처치 횟수 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 지정된 플레이어가 기록한 결정타 개수입니다.
 * 이 값은 게임이 진행 중일 때만 쌓이게 됩니다.
 */
declare const numberOfFinalBlows: (
/**
 * 결정타 개수 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 팀 또는 경기 내에서 지정된 영웅을
 * 플레이하는 플레이어의 수입니다.
 */
declare const numberOfHeroes: (
/**
 * 플레이 현황을 확인할 영웅입니다.
 * - `Type.Hero.`
 */
hero: string | number | any[],
/**
 * 영웅 플레이 현황을 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * 팀 또는 경기에서 생존한 플레이어의 수입니다.
 */
declare const numberOfLivingPlayers: (
/**
 * 플레이어 수를 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * 팀 또는 경기 내 존재하는 플레이어 수입니다.
 */
declare const numberOfPlayers: (
/**
 * 플레이어 수를 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * 팀 또는 경기 내에서 화물 또는
 * 거점을 확보하려는 플레이어 수입니다.
 */
declare const numberOfPlayersOnObjective: (
/**
 * 플레이어 수를 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * 현재 활성화 중인 거점, 화물 경유지, 화물 목적지입니다.
 * (0, 1, 2 중 하나) 점령, 점령/호위, 호위, 쟁탈 전장에서 유효합니다.
 */
declare const objectiveIndex: (


) => number;

/**
 * 해당 활성화 화물의 목적지까지 진행률입니다.(비율로 표시됨)
 */
declare const payloadProgressPercentage: (


) => number;

/**
 * 활성화된 거점에서, 점령 중인 거점의 점령 진척도입니다.(비율로 표시)
 */
declare const pointCapturePercentage: (


) => number;

/**
 * 좌측 피연산자를 우측 피연산자만큼 제곱합니다.
 * 좌측 피연산자가 음수이면 결과는 항상 0입니다.
 */
declare const raiseToPower: (
/**
 * 좌측 피연산자입니다.
 * 결과값이 숫자로 나올 수 있는
 * 아무 값이나 사용할 수 있습니다.
 * - `Type.Number.`
 */
value1: string | number | any[],
/**
 * 우측 피연산자입니다.
 * 결과값이 숫자로 나올 수 있는
 * 아무 값이나 사용할 수 있습니다.
 * - `Type.Number.`
 */
value2: string | number | any[]
) => number;

/**
 * 지정한 최대값 이하, 최소값 이상
 * 범위 내에서 무작위 정수값입니다.
 */
declare const randomInteger: (
/**
 * 허용된 최소 정수입니다.
 * 이 입력 정보에 실수가 주어진 경우,
 * 가장 근접한 정수로 반올림됩니다.
 * - `Type.Number.`
 */
min: string | number | any[],
/**
 * 허용된 최대 정수입니다.
 * 이 입력 정보에 실수가 주어진 경우,
 * 가장 근접한 정수로 반올림됩니다.
 * - `Type.Number.`
 */
max: string | number | any[]
) => number;

/**
 * 지정된 최대 및 최소값 범위
 * 내에서의 무작위 실수값 하나입니다.
 */
declare const randomReal: (
/**
 * 허용된 최소 실수값입니다.
 * - `Type.Number.`
 */
min: string | number | any[],
/**
 * 허용된 최소 실수값입니다.
 * - `Type.Number.`
 */
max: string | number | any[]
) => number;

/**
 * 지정된 값을 반올림할 대상 정수입니다.
 */
declare const roundToInteger: (
/**
 * 반올림할 실수입니다.
 * - `Type.Number.`
 */
value: string | number | any[],
/**
 * 값을 반올림하는 규칙을 결정합니다.
 * - `Type.Rounding.`
 */
roundingType: string | number | any[]
) => number;

/**
 * 지정된 플레이어의 현재 점수입니다.
 * 게임 모드가 개별 전투가 아닌 경우
 * 결과값은 0이 됩니다.
 */
declare const scoreOf: (
/**
 * 점수 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 지정된 각(단위: 도)의 사인 값입니다.
 */
declare const sineFromDegrees: (
/**
 * 각(단위: 도)입니다.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * 지정된 각(단위: RAD)의 사인 값입니다.
 */
declare const sineFromRadians: (
/**
 * 각(단위: RAD)입니다.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * 지정된 플레이어의 슬롯 번호입니다.
 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
 */
declare const slotOf: (
/**
 * 슬롯 번호 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 플레이어의 현재 속도(초당 미터)입니다.
 */
declare const speedOf: (
/**
 * 속도 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 지정된 방향에서 플레이어의
 * 현재 속도(초당 미터)입니다.
 */
declare const speedOfInDirection: (
/**
 * 속도 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어의 속도를 측정할 이동 방향입니다.
 * - `Type.Vector.`
 */
direction: string | number | any[]
) => number;

/**
 * 지정된 값의 제곱근입니다.
 */
declare const squareRoot: (
/**
 * 제곱근을 계산할 실수값입니다.
 * 음수의 경우 0이 됩니다.
 * - `Type.Number.`
 */
value: string | number | any[]
) => number;

/**
 * 두 숫자 또는 벡터의 차이입니다.
 */
declare const subtract: (
/**
 * 좌측 피연산자입니다.
 * 결과값이 숫자 또는 벡터로 나올 수 있는
 * 아무 값이나 사용할 수 있습니다.
 * - `Type.Subtract.`
 */
value1: string | number | any[],
/**
 * 우측 피연산자입니다.
 * 결과값이 숫자 또는 벡터로 나올 수 있는
 * 아무 값이나 사용할 수 있습니다.
 * - `Type.Subtract.`
 */
value2: string | number | any[]
) => number;

/**
 * 지정된 각(단위: 도)의 탄젠트 값입니다.
 */
declare const tangentFromDegrees: (
/**
 * 각(단위: 도)입니다.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * 지정된 각(단위: RAD)의 탄젠트 값입니다.
 */
declare const tangentFromRadians: (
/**
 * 각(단위: RAD)입니다.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * 지정된 팀의 현재 점수입니다.
 * 개별 전투 모드에서는 결과값이 0입니다.
 */
declare const teamScore: (
/**
 * 점수 정보를 가져올 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * 플레이어의 현재 궁극기 충전량 비율입니다.
 */
declare const ultimateChargePercent: (
/**
 * 궁극기 충전량 비율 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 지정된 방향 벡터의 대응하는 종축각(단위: 도)입니다.
 */
declare const verticalAngleFromDirection: (
/**
 * 종축각(단위: 도) 정보를
 * 가져올 방향 벡터입니다.
 * 벡터는 연산 전에 정규화됩니다.
 * - `Type.Vector.`
 */
direction: string | number | any[]
) => number;

/**
 * 플레이어의 전방에서 지정된
 * 위치까지의 종축각(단위: 도)입니다.
 * 이 값은 해당 위치가
 * 플레이어 아래에 있는 경우 양수이며,
 * 그 외의 경우 0이거나 음수입니다.
 */
declare const verticalAngleTowards: (
/**
 * 이 플레이어가 현재 바라보는
 * 방향으로부터 각이 시작됩니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 각 각이 종료되는 월드 내 위치입니다.
 * - `Type.Vector.`
 */
position: string | number | any[]
) => number;

/**
 * 월드에 대해 상대적으로 플레이어가
 * 바라보고 있는 방향의 종축각(단위: 도)입니다.
 * 이 값은 플레이어가 내려다보는 경우 증가합니다.
 */
declare const verticalFacingAngleOf: (
/**
 * 바라보고 있는 방향의
 * 종축각 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 플레이어의 현재 종축 속도(초당 미터)입니다.
 * 여기에는 경사로를 오르내리는 등의 움직임 등
 * 모든 횡축 이동이 배제됩니다.
 */
declare const verticalSpeedOf: (
/**
 * 종축 속도 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 현재 게임 인스턴스의 CPU 사용률(%)입니다.
 * 이 수치가 100에 가까워지거나
 * 100을 초과하면 과도한 리소스 사용으로
 * 인스턴스가 종료될 가능성이 크게 증가합니다.
 */
declare const serverLoad: (


) => number;

/**
 * 최근 2초간 게임 인스턴스의 평균 CPU 사용률(%)입니다.
 * 이 수치가 100에 가까워지거나 100을 초과하면
 * 과도한 리소스 사용으로 인스턴스가
 * 종료될 가능성이 크게 증가합니다.
 */
declare const serverLoadAverage: (


) => number;

/**
 * 최근 2초간 게임 인스턴스의 최대 CPU 사용률(%)입니다.
 * 이 수치가 100에 가까워지거나 100을 초과하면
 * 과도한 리소스 사용으로 인스턴스가
 * 종료될 가능성이 크게 증가합니다.
 */
declare const serverLoadPeak: (


) => number;



declare const number_d_number: typeof number;
declare const number_d_add: typeof add;
declare const number_d_angleDifference: typeof angleDifference;
declare const number_d_angleBetweenVectors: typeof angleBetweenVectors;
declare const number_d_altitudeOf: typeof altitudeOf;
declare const number_d_countOf: typeof countOf;
declare const number_d_arccosineInDegrees: typeof arccosineInDegrees;
declare const number_d_arccosineInRadians: typeof arccosineInRadians;
declare const number_d_arcsineInDegrees: typeof arcsineInDegrees;
declare const number_d_arcsineInRadians: typeof arcsineInRadians;
declare const number_d_arctangentInDegrees: typeof arctangentInDegrees;
declare const number_d_arctangentInRadians: typeof arctangentInRadians;
declare const number_d_cosineFromDegrees: typeof cosineFromDegrees;
declare const number_d_cosineFromRadians: typeof cosineFromRadians;
declare const number_d_controlModeScoringPercentage: typeof controlModeScoringPercentage;
declare const number_d_globalVariable: typeof globalVariable;
declare const number_d_playerVariable: typeof playerVariable;
declare const number_d_distanceBetween: typeof distanceBetween;
declare const number_d_divide: typeof divide;
declare const number_d_eventDamage: typeof eventDamage;
declare const number_d_eyePosition: typeof eyePosition;
declare const number_d_health: typeof health;
declare const number_d_horizontalAngleFromDirection: typeof horizontalAngleFromDirection;
declare const number_d_horizontalAngleTowards: typeof horizontalAngleTowards;
declare const number_d_horizontalFacingAngleOf: typeof horizontalFacingAngleOf;
declare const number_d_horizontalSpeedOf: typeof horizontalSpeedOf;
declare const number_d_indexOfArrayValue: typeof indexOfArrayValue;
declare const number_d_lastDamageModificationId: typeof lastDamageModificationId;
declare const number_d_lastDamageOverTimeId: typeof lastDamageOverTimeId;
declare const number_d_lastHealOverTimeId: typeof lastHealOverTimeId;
declare const number_d_lastTextId: typeof lastTextId;
declare const number_d_matchRound: typeof matchRound;
declare const number_d_max: typeof max;
declare const number_d_maxHealth: typeof maxHealth;
declare const number_d_min: typeof min;
declare const number_d_modulo: typeof modulo;
declare const number_d_normalizedHealth: typeof normalizedHealth;
declare const number_d_numberOfDeadPlayers: typeof numberOfDeadPlayers;
declare const number_d_numberOfDeaths: typeof numberOfDeaths;
declare const number_d_numberOfEliminations: typeof numberOfEliminations;
declare const number_d_numberOfFinalBlows: typeof numberOfFinalBlows;
declare const number_d_numberOfHeroes: typeof numberOfHeroes;
declare const number_d_numberOfLivingPlayers: typeof numberOfLivingPlayers;
declare const number_d_numberOfPlayers: typeof numberOfPlayers;
declare const number_d_numberOfPlayersOnObjective: typeof numberOfPlayersOnObjective;
declare const number_d_objectiveIndex: typeof objectiveIndex;
declare const number_d_payloadProgressPercentage: typeof payloadProgressPercentage;
declare const number_d_pointCapturePercentage: typeof pointCapturePercentage;
declare const number_d_raiseToPower: typeof raiseToPower;
declare const number_d_randomInteger: typeof randomInteger;
declare const number_d_randomReal: typeof randomReal;
declare const number_d_roundToInteger: typeof roundToInteger;
declare const number_d_scoreOf: typeof scoreOf;
declare const number_d_sineFromDegrees: typeof sineFromDegrees;
declare const number_d_sineFromRadians: typeof sineFromRadians;
declare const number_d_slotOf: typeof slotOf;
declare const number_d_speedOf: typeof speedOf;
declare const number_d_speedOfInDirection: typeof speedOfInDirection;
declare const number_d_squareRoot: typeof squareRoot;
declare const number_d_subtract: typeof subtract;
declare const number_d_tangentFromDegrees: typeof tangentFromDegrees;
declare const number_d_tangentFromRadians: typeof tangentFromRadians;
declare const number_d_teamScore: typeof teamScore;
declare const number_d_ultimateChargePercent: typeof ultimateChargePercent;
declare const number_d_verticalAngleFromDirection: typeof verticalAngleFromDirection;
declare const number_d_verticalAngleTowards: typeof verticalAngleTowards;
declare const number_d_verticalFacingAngleOf: typeof verticalFacingAngleOf;
declare const number_d_verticalSpeedOf: typeof verticalSpeedOf;
declare const number_d_serverLoad: typeof serverLoad;
declare const number_d_serverLoadAverage: typeof serverLoadAverage;
declare const number_d_serverLoadPeak: typeof serverLoadPeak;
declare namespace number_d {
  export {
    number_d_number as number,
    number_d_add as add,
    number_d_angleDifference as angleDifference,
    number_d_angleBetweenVectors as angleBetweenVectors,
    number_d_altitudeOf as altitudeOf,
    number_d_countOf as countOf,
    number_d_arccosineInDegrees as arccosineInDegrees,
    number_d_arccosineInRadians as arccosineInRadians,
    number_d_arcsineInDegrees as arcsineInDegrees,
    number_d_arcsineInRadians as arcsineInRadians,
    number_d_arctangentInDegrees as arctangentInDegrees,
    number_d_arctangentInRadians as arctangentInRadians,
    number_d_cosineFromDegrees as cosineFromDegrees,
    number_d_cosineFromRadians as cosineFromRadians,
    number_d_controlModeScoringPercentage as controlModeScoringPercentage,
    number_d_globalVariable as globalVariable,
    number_d_playerVariable as playerVariable,
    number_d_distanceBetween as distanceBetween,
    number_d_divide as divide,
    number_d_eventDamage as eventDamage,
    number_d_eyePosition as eyePosition,
    number_d_health as health,
    number_d_horizontalAngleFromDirection as horizontalAngleFromDirection,
    number_d_horizontalAngleTowards as horizontalAngleTowards,
    number_d_horizontalFacingAngleOf as horizontalFacingAngleOf,
    number_d_horizontalSpeedOf as horizontalSpeedOf,
    number_d_indexOfArrayValue as indexOfArrayValue,
    number_d_lastDamageModificationId as lastDamageModificationId,
    number_d_lastDamageOverTimeId as lastDamageOverTimeId,
    number_d_lastHealOverTimeId as lastHealOverTimeId,
    number_d_lastTextId as lastTextId,
    number_d_matchRound as matchRound,
    number_d_max as max,
    number_d_maxHealth as maxHealth,
    number_d_min as min,
    number_d_modulo as modulo,
    number_d_normalizedHealth as normalizedHealth,
    number_d_numberOfDeadPlayers as numberOfDeadPlayers,
    number_d_numberOfDeaths as numberOfDeaths,
    number_d_numberOfEliminations as numberOfEliminations,
    number_d_numberOfFinalBlows as numberOfFinalBlows,
    number_d_numberOfHeroes as numberOfHeroes,
    number_d_numberOfLivingPlayers as numberOfLivingPlayers,
    number_d_numberOfPlayers as numberOfPlayers,
    number_d_numberOfPlayersOnObjective as numberOfPlayersOnObjective,
    number_d_objectiveIndex as objectiveIndex,
    number_d_payloadProgressPercentage as payloadProgressPercentage,
    number_d_pointCapturePercentage as pointCapturePercentage,
    number_d_raiseToPower as raiseToPower,
    number_d_randomInteger as randomInteger,
    number_d_randomReal as randomReal,
    number_d_roundToInteger as roundToInteger,
    number_d_scoreOf as scoreOf,
    number_d_sineFromDegrees as sineFromDegrees,
    number_d_sineFromRadians as sineFromRadians,
    number_d_slotOf as slotOf,
    number_d_speedOf as speedOf,
    number_d_speedOfInDirection as speedOfInDirection,
    number_d_squareRoot as squareRoot,
    number_d_subtract as subtract,
    number_d_tangentFromDegrees as tangentFromDegrees,
    number_d_tangentFromRadians as tangentFromRadians,
    number_d_teamScore as teamScore,
    number_d_ultimateChargePercent as ultimateChargePercent,
    number_d_verticalAngleFromDirection as verticalAngleFromDirection,
    number_d_verticalAngleTowards as verticalAngleTowards,
    number_d_verticalFacingAngleOf as verticalFacingAngleOf,
    number_d_verticalSpeedOf as verticalSpeedOf,
    number_d_serverLoad as serverLoad,
    number_d_serverLoadAverage as serverLoadAverage,
    number_d_serverLoadPeak as serverLoadPeak,
  };
}

/**
 * 3개의 실수(X, Y, Z)로 이루어진 벡터입니다.
 * X는 좌측, Y는 위, Z는 전방을 의미합니다.
 * 벡터는 위치, 방향, 속도로 사용됩니다.
 */
declare const vector: (
/**
 * 벡터의 X 값입니다.
 * - `Type.Number.`
 */
x: string | number | any[],
/**
 * 벡터의 Y 값입니다.
 * - `Type.Number.`
 */
y: string | number | any[],
/**
 * 벡터의 Z 값입니다.
 * - `Type.Number.`
 */
z: string | number | any[]
) => number;

/**
 * 제공된 월드 좌표 벡터에 해당하는 로컬 좌표 벡터입니다.
 */
declare const localVectorOf: (
/**
 * 로컬 좌표로 전환될 월드 좌표 벡터입니다.
 * - `Type.Vector.`
 */
worldVector: string | number | any[],
/**
 * 결과 벡터와 연관될 플레이어입니다.
 * - `Type.Player.`
 */
relativePlayer: string | number | any[],
/**
 * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
 * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
 * - `Type.Transformation.`
 */
transformation: string | number | any[]
) => number;

/**
 * 제공된 로컬 좌표 벡터에 해당하는 월드 좌표 벡터입니다.
 */
declare const worldVectorOf: (
/**
 * 월드 좌표로 전환될 로컬 좌표 벡터입니다.
 * - `Type.Vector.`
 */
localVector: string | number | any[],
/**
 * 결과 벡터와 연관될 플레이어입니다.
 * - `Type.Player.`
 */
relativePlayer: string | number | any[],
/**
 * 벡터가 회전과 평행 이동을 받는지(일반적으로 위치에 적용),
 * 아니면 회전만 받는지(일반적으로 방향 및 속도에 적용) 여부를 설정합니다.
 * - `Type.Transformation.`
 */
transformation: string | number | any[]
) => number;

/**
 * 한 위치에서 다른 위치까지의 변위 벡터입니다.
 */
declare const vectorTowards: (
/**
 * 변위 벡터가 시작하는 위치입니다.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * 변위 벡터가 종료되는 위치입니다.
 * - `Type.Vector.`
 */
endPos: string | number | any[]
) => number;

/**
 * 후방을 가리키는 방향 벡터(0, 0, -1)의 약칭입니다.
 */
declare const backward: (


) => number;

/**
 * 지정된 값의 가위곱입니다.(왼쪽과 위쪽의 벡터 곱은 전방 방향)
 */
declare const crossProduct: (
/**
 * 가위곱의 왼쪽 벡터 피연산자입니다.
 * - `Type.Vector.`
 */
value1: string | number | any[],
/**
 * 가위곱의 오른쪽 벡터 피연산자입니다.
 * - `Type.Vector.`
 */
value2: string | number | any[]
) => number;

/**
 * 지정된 각에 대응하는 단위 길이 방향 벡터입니다.
 */
declare const directionFromAngles: (
/**
 * 결과 벡터를 도출하는 데 사용되는 황축각(단위: 도)입니다.
 * - `Type.Number.`
 */
horizontalAngle: string | number | any[],
/**
 * 결과 벡터를 도출하는 데 사용되는 종축각(단위: 도)입니다.
 * - `Type.Number.`
 */
verticalAngle: string | number | any[]
) => number;

/**
 * 한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.
 */
declare const directionTowards: (
/**
 * 결과로 도출되는 방향 벡터가 시작되는 위치입니다.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * 결과로 도출되는 방향 벡터가 끝나는 위치입니다.
 * - `Type.Vector.`
 */
endPos: string | number | any[]
) => number;

/**
 * 지정된 값의 점곱입니다.
 */
declare const dotProduct: (
/**
 * 점곱의 백터 피연산자 두 개 중 하나입니다.
 * - `Type.Vector.`
 */
value1: string | number | any[],
/**
 * 점곱의 백터 피연산자 두 개 중 하나입니다.
 * - `Type.Vector.`
 */
value2: string | number | any[]
) => number;

/**
 * 아래를 가리키는 방향 벡터(0, -1, 0)의 약칭입니다.
 */
declare const down: (


) => number;

/**
 * 월드에 대해 상대적으로 플레이어가 바라보고 있는
 * 방향의 상대적인 단위 길이 방향 벡터입니다.
 * 이 값에는 종 및 횡 방향이 있습니다.
 */
declare const facingDirectionOf: (
/**
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 깃발 뺏기에서 지정된 팀의 깃발 위치입니다.
 */
declare const flagPosition: (
/**
 * 깃발 위치 정보를 가져올 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * 전방을 가리키는 방향 벡터(0, 0, 1)의 약칭입니다.
 */
declare const forward: (


) => number;

/**
 * 좌측을 가리키는 방향 벡터(1, 0,0)의 약칭입니다.
 */
declare const left: (


) => number;

/**
 * 서 있을 수 있고 생성 지점에서 접근 가능하며
 * 지정된 위치에서 가장 가까운 위치입니다.
 */
declare const nearestWalkablePosition: (
/**
 * 가장 가까운 도보 가능 위치를 검색할 대상 위치입니다.
 * - `Type.Vector.`
 */
position: string | number | any[]
) => number;

/**
 * 벡터의 단위 길이 정규화입니다.
 */
declare const normalize: (
/**
 * 정규화할 벡터입니다.
 * - `Type.Vector.`
 */
position: string | number | any[]
) => number;

/**
 * 지정된 목표가 있는 월드 내의 위치(거점, 화물 경유지, 화물 목적지) 입니다.
 * 점령, 점령/호위, 호위, 쟁탈 전장에서 유효합니다.
 */
declare const objectivePosition: (
/**
 * 고려해야 하는 목표의 인덱스로서,
 * 0에서 시작하여 증가합니다.
 * 각 거점, 화물 경유지, 화물 목적지에는
 * 각기 고유의 인덱스가 있습니다.
 * - `Type.Number.`
 */
number: string | number | any[]
) => number;

/**
 * 월드 내의 활성화 된 화물 위치입니다.
 */
declare const payloadPosition: (


) => number;

/**
 * 플레이어의 현재 위치(벡터)입니다.
 */
declare const positionOf: (
/**
 * 위치 값 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * RAY CAST HIT POSITION에서의 표면 법선
 * (아무것도 맞지 않은 경우 END POS에서 START POS)입니다.
 */
declare const rayCastHitNormal: (
/**
 * 레이케스트의 시작 위치입니다.
 * 플레이어가 설정되어 있으면,
 * 해당 플레이어의 발 위로
 * 2미터 지점이 사용됩니다.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * 레이케스트의 종료 위치입니다.
 * 플레이어가 설정되어 있으면,
 * 해당 플레이어의 발 위로
 * 2미터 지점이 사용됩니다.
 * - `Type.Vector.`
 */
endPos: string | number | any[],
/**
 * 이 레이캐스트로 맞힐 수 있는 플레이어입니다.
 * - `Type.Array.`
 */
playersToInclude: string | number | any[],
/**
 * 이 레이캐스트로 맞힐 수 없는 플레이어입니다.
 * PLAYERS TO INCLUDE보다 이 목록의 우선순위가 높습니다.
 * - `Type.Array.`
 */
playersToExclude: string | number | any[],
/**
 * 플레이어가 소유한 오브젝트(방벽 또는 포탑 등)가
 * 레이캐스트의 대상 범위에 포함되어야 하는지 여부입니다.
 * - `Type.Bool.`
 */
IncludePlayerOwnedObjects: string | number | any[]
) => number;

/**
 * 레이캐스트로 맞힌 플레이어
 * (맞은 플레이어가 없는 경우 NULL)입니다.
 */
declare const rayCastHitPlayer: (
/**
 * 레이케스트의 시작 위치입니다.
 * 플레이어가 설정되어 있으면,
 * 해당 플레이어의 발 위로
 * 2미터 지점이 사용됩니다.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * 레이케스트의 종료 위치입니다.
 * 플레이어가 설정되어 있으면,
 * 해당 플레이어의 발 위로
 * 2미터 지점이 사용됩니다.
 * - `Type.Vector.`
 */
endPos: string | number | any[],
/**
 * 이 레이캐스트로 맞힐 수 있는 플레이어입니다.
 * - `Type.Array.`
 */
playersToInclude: string | number | any[],
/**
 * 이 레이캐스트로 맞힐 수 없는 플레이어입니다.
 * PLAYERS TO INCLUDE보다 이 목록의 우선순위가 높습니다.
 * - `Type.Array.`
 */
playersToExclude: string | number | any[],
/**
 * 플레이어가 소유한 오브젝트(방벽 또는 포탑 등)가
 * 레이캐스트의 대상 범위에 포함되어야 하는지 여부입니다.
 * - `Type.Bool.`
 */
IncludePlayerOwnedObjects: string | number | any[]
) => number;

/**
 * 레이캐스트로 맞힌 표면,
 * 오브젝트, 또는 플레이어의 위치
 * (아무것도 맞지 않는 경우 END POS)입니다.
 */
declare const rayCastHitPosition: (
/**
 * 레이케스트의 시작 위치입니다.
 * 플레이어가 설정되어 있으면,
 * 해당 플레이어의 발 위로
 * 2미터 지점이 사용됩니다.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * 레이케스트의 종료 위치입니다.
 * 플레이어가 설정되어 있으면,
 * 해당 플레이어의 발 위로
 * 2미터 지점이 사용됩니다.
 * - `Type.Vector.`
 */
endPos: string | number | any[],
/**
 * 이 레이캐스트로 맞힐 수 있는 플레이어입니다.
 * - `Type.Array.`
 */
playersToInclude: string | number | any[],
/**
 * 이 레이캐스트로 맞힐 수 없는 플레이어입니다.
 * PLAYERS TO INCLUDE보다 이 목록의 우선순위가 높습니다.
 * - `Type.Array.`
 */
playersToExclude: string | number | any[],
/**
 * 플레이어가 소유한 오브젝트(방벽 또는 포탑 등)가
 * 레이캐스트의 대상 범위에 포함되어야 하는지 여부입니다.
 * - `Type.Bool.`
 */
IncludePlayerOwnedObjects: string | number | any[]
) => number;

/**
 * 우측을 가리키는 방향 벡터(-1, 0, 0)의 약칭입니다.
 */
declare const right: (


) => number;

/**
 * 한 플레이어의 방향 입력 정보입니다.
 * X 구성요소가 횡방향 입력 정보(왼쪽이 양),
 * Z 구성 요소가 종방향 입력 정보(위쪽이 양)인 벡터로 표현됩니다.
 */
declare const throttleOf: (
/**
 * 방향 입력 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 게임 인스턴스 생성 후 경과 시간(단위: 초)입니다.
 * (설정 및 전환 시간 포함)
 */
declare const totalTimeElapsed: (


) => number;

/**
 * 위를 가리키는 방향 벡터(0, 1, 0)의 약칭입니다.
 */
declare const up: (


) => number;

/**
 * 플레이어의 현재 속도(벡터)입니다.
 * 해당 플레이어가 표면 위에 있는 경우,
 * 경사로를 오르 내린다고 해도 Y 구성요소 속도는 0입니다.
 */
declare const velocityOf: (
/**
 * 속도 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * 지정된 벡터의 X 구성요소입니다.
 * 일반적으로 왼쪽 방향의 벡터량입니다.
 */
declare const xComponentOf: (
/**
 * X 구성요소 정보를 가져올 벡터입니다.
 * - `Type.Vector.`
 */
vector: string | number | any[]
) => number;

/**
 * 지정된 벡터의 Y 구성요소입니다.
 * 일반적으로 왼쪽 방향의 벡터량입니다.
 */
declare const yComponentOf: (
/**
 * Y 구성요소 정보를 가져올 벡터입니다.
 * - `Type.Vector.`
 */
vector: string | number | any[]
) => number;

/**
 * 지정된 벡터의 Z 구성요소입니다.
 * 일반적으로 왼쪽 방향의 벡터량입니다.
 */
declare const zComponentOf: (
/**
 * Z 구성요소 정보를 가져올 벡터입니다.
 * - `Type.Vector.`
 */
vector: string | number | any[]
) => number;



declare const vector_d_vector: typeof vector;
declare const vector_d_localVectorOf: typeof localVectorOf;
declare const vector_d_worldVectorOf: typeof worldVectorOf;
declare const vector_d_vectorTowards: typeof vectorTowards;
declare const vector_d_globalVariable: typeof globalVariable;
declare const vector_d_playerVariable: typeof playerVariable;
declare const vector_d_backward: typeof backward;
declare const vector_d_crossProduct: typeof crossProduct;
declare const vector_d_directionFromAngles: typeof directionFromAngles;
declare const vector_d_directionTowards: typeof directionTowards;
declare const vector_d_divide: typeof divide;
declare const vector_d_dotProduct: typeof dotProduct;
declare const vector_d_down: typeof down;
declare const vector_d_facingDirectionOf: typeof facingDirectionOf;
declare const vector_d_flagPosition: typeof flagPosition;
declare const vector_d_forward: typeof forward;
declare const vector_d_left: typeof left;
declare const vector_d_nearestWalkablePosition: typeof nearestWalkablePosition;
declare const vector_d_normalize: typeof normalize;
declare const vector_d_objectivePosition: typeof objectivePosition;
declare const vector_d_payloadPosition: typeof payloadPosition;
declare const vector_d_positionOf: typeof positionOf;
declare const vector_d_rayCastHitNormal: typeof rayCastHitNormal;
declare const vector_d_rayCastHitPlayer: typeof rayCastHitPlayer;
declare const vector_d_rayCastHitPosition: typeof rayCastHitPosition;
declare const vector_d_right: typeof right;
declare const vector_d_subtract: typeof subtract;
declare const vector_d_throttleOf: typeof throttleOf;
declare const vector_d_totalTimeElapsed: typeof totalTimeElapsed;
declare const vector_d_up: typeof up;
declare const vector_d_velocityOf: typeof velocityOf;
declare const vector_d_xComponentOf: typeof xComponentOf;
declare const vector_d_yComponentOf: typeof yComponentOf;
declare const vector_d_zComponentOf: typeof zComponentOf;
declare namespace vector_d {
  export {
    vector_d_vector as vector,
    vector_d_localVectorOf as localVectorOf,
    vector_d_worldVectorOf as worldVectorOf,
    vector_d_vectorTowards as vectorTowards,
    vector_d_globalVariable as globalVariable,
    vector_d_playerVariable as playerVariable,
    vector_d_backward as backward,
    vector_d_crossProduct as crossProduct,
    vector_d_directionFromAngles as directionFromAngles,
    vector_d_directionTowards as directionTowards,
    vector_d_divide as divide,
    vector_d_dotProduct as dotProduct,
    vector_d_down as down,
    vector_d_facingDirectionOf as facingDirectionOf,
    vector_d_flagPosition as flagPosition,
    vector_d_forward as forward,
    vector_d_left as left,
    vector_d_nearestWalkablePosition as nearestWalkablePosition,
    vector_d_normalize as normalize,
    vector_d_objectivePosition as objectivePosition,
    vector_d_payloadPosition as payloadPosition,
    vector_d_positionOf as positionOf,
    vector_d_rayCastHitNormal as rayCastHitNormal,
    vector_d_rayCastHitPlayer as rayCastHitPlayer,
    vector_d_rayCastHitPosition as rayCastHitPosition,
    vector_d_right as right,
    vector_d_subtract as subtract,
    vector_d_throttleOf as throttleOf,
    vector_d_totalTimeElapsed as totalTimeElapsed,
    vector_d_up as up,
    vector_d_velocityOf as velocityOf,
    vector_d_xComponentOf as xComponentOf,
    vector_d_yComponentOf as yComponentOf,
    vector_d_zComponentOf as zComponentOf,
  };
}



declare const add_d_number: typeof number;
declare const add_d_add: typeof add;
declare const add_d_angleDifference: typeof angleDifference;
declare const add_d_angleBetweenVectors: typeof angleBetweenVectors;
declare const add_d_altitudeOf: typeof altitudeOf;
declare const add_d_countOf: typeof countOf;
declare const add_d_arccosineInDegrees: typeof arccosineInDegrees;
declare const add_d_arccosineInRadians: typeof arccosineInRadians;
declare const add_d_arcsineInDegrees: typeof arcsineInDegrees;
declare const add_d_arcsineInRadians: typeof arcsineInRadians;
declare const add_d_arctangentInDegrees: typeof arctangentInDegrees;
declare const add_d_arctangentInRadians: typeof arctangentInRadians;
declare const add_d_cosineFromDegrees: typeof cosineFromDegrees;
declare const add_d_cosineFromRadians: typeof cosineFromRadians;
declare const add_d_controlModeScoringPercentage: typeof controlModeScoringPercentage;
declare const add_d_globalVariable: typeof globalVariable;
declare const add_d_playerVariable: typeof playerVariable;
declare const add_d_distanceBetween: typeof distanceBetween;
declare const add_d_divide: typeof divide;
declare const add_d_eventDamage: typeof eventDamage;
declare const add_d_eyePosition: typeof eyePosition;
declare const add_d_health: typeof health;
declare const add_d_horizontalAngleFromDirection: typeof horizontalAngleFromDirection;
declare const add_d_horizontalAngleTowards: typeof horizontalAngleTowards;
declare const add_d_horizontalFacingAngleOf: typeof horizontalFacingAngleOf;
declare const add_d_horizontalSpeedOf: typeof horizontalSpeedOf;
declare const add_d_indexOfArrayValue: typeof indexOfArrayValue;
declare const add_d_lastDamageModificationId: typeof lastDamageModificationId;
declare const add_d_lastDamageOverTimeId: typeof lastDamageOverTimeId;
declare const add_d_lastHealOverTimeId: typeof lastHealOverTimeId;
declare const add_d_lastTextId: typeof lastTextId;
declare const add_d_matchRound: typeof matchRound;
declare const add_d_max: typeof max;
declare const add_d_maxHealth: typeof maxHealth;
declare const add_d_min: typeof min;
declare const add_d_modulo: typeof modulo;
declare const add_d_normalizedHealth: typeof normalizedHealth;
declare const add_d_numberOfDeadPlayers: typeof numberOfDeadPlayers;
declare const add_d_numberOfDeaths: typeof numberOfDeaths;
declare const add_d_numberOfEliminations: typeof numberOfEliminations;
declare const add_d_numberOfFinalBlows: typeof numberOfFinalBlows;
declare const add_d_numberOfHeroes: typeof numberOfHeroes;
declare const add_d_numberOfLivingPlayers: typeof numberOfLivingPlayers;
declare const add_d_numberOfPlayers: typeof numberOfPlayers;
declare const add_d_numberOfPlayersOnObjective: typeof numberOfPlayersOnObjective;
declare const add_d_objectiveIndex: typeof objectiveIndex;
declare const add_d_payloadProgressPercentage: typeof payloadProgressPercentage;
declare const add_d_pointCapturePercentage: typeof pointCapturePercentage;
declare const add_d_raiseToPower: typeof raiseToPower;
declare const add_d_randomInteger: typeof randomInteger;
declare const add_d_randomReal: typeof randomReal;
declare const add_d_roundToInteger: typeof roundToInteger;
declare const add_d_scoreOf: typeof scoreOf;
declare const add_d_sineFromDegrees: typeof sineFromDegrees;
declare const add_d_sineFromRadians: typeof sineFromRadians;
declare const add_d_slotOf: typeof slotOf;
declare const add_d_speedOf: typeof speedOf;
declare const add_d_speedOfInDirection: typeof speedOfInDirection;
declare const add_d_squareRoot: typeof squareRoot;
declare const add_d_subtract: typeof subtract;
declare const add_d_tangentFromDegrees: typeof tangentFromDegrees;
declare const add_d_tangentFromRadians: typeof tangentFromRadians;
declare const add_d_teamScore: typeof teamScore;
declare const add_d_ultimateChargePercent: typeof ultimateChargePercent;
declare const add_d_verticalAngleFromDirection: typeof verticalAngleFromDirection;
declare const add_d_verticalAngleTowards: typeof verticalAngleTowards;
declare const add_d_verticalFacingAngleOf: typeof verticalFacingAngleOf;
declare const add_d_verticalSpeedOf: typeof verticalSpeedOf;
declare const add_d_serverLoad: typeof serverLoad;
declare const add_d_serverLoadAverage: typeof serverLoadAverage;
declare const add_d_serverLoadPeak: typeof serverLoadPeak;
declare const add_d_vector: typeof vector;
declare const add_d_localVectorOf: typeof localVectorOf;
declare const add_d_worldVectorOf: typeof worldVectorOf;
declare const add_d_vectorTowards: typeof vectorTowards;
declare const add_d_backward: typeof backward;
declare const add_d_crossProduct: typeof crossProduct;
declare const add_d_directionFromAngles: typeof directionFromAngles;
declare const add_d_directionTowards: typeof directionTowards;
declare const add_d_dotProduct: typeof dotProduct;
declare const add_d_down: typeof down;
declare const add_d_facingDirectionOf: typeof facingDirectionOf;
declare const add_d_flagPosition: typeof flagPosition;
declare const add_d_forward: typeof forward;
declare const add_d_left: typeof left;
declare const add_d_nearestWalkablePosition: typeof nearestWalkablePosition;
declare const add_d_normalize: typeof normalize;
declare const add_d_objectivePosition: typeof objectivePosition;
declare const add_d_payloadPosition: typeof payloadPosition;
declare const add_d_positionOf: typeof positionOf;
declare const add_d_rayCastHitNormal: typeof rayCastHitNormal;
declare const add_d_rayCastHitPlayer: typeof rayCastHitPlayer;
declare const add_d_rayCastHitPosition: typeof rayCastHitPosition;
declare const add_d_right: typeof right;
declare const add_d_throttleOf: typeof throttleOf;
declare const add_d_totalTimeElapsed: typeof totalTimeElapsed;
declare const add_d_up: typeof up;
declare const add_d_velocityOf: typeof velocityOf;
declare const add_d_xComponentOf: typeof xComponentOf;
declare const add_d_yComponentOf: typeof yComponentOf;
declare const add_d_zComponentOf: typeof zComponentOf;
declare namespace add_d {
  export {
    add_d_number as number,
    add_d_add as add,
    add_d_angleDifference as angleDifference,
    add_d_angleBetweenVectors as angleBetweenVectors,
    add_d_altitudeOf as altitudeOf,
    add_d_countOf as countOf,
    add_d_arccosineInDegrees as arccosineInDegrees,
    add_d_arccosineInRadians as arccosineInRadians,
    add_d_arcsineInDegrees as arcsineInDegrees,
    add_d_arcsineInRadians as arcsineInRadians,
    add_d_arctangentInDegrees as arctangentInDegrees,
    add_d_arctangentInRadians as arctangentInRadians,
    add_d_cosineFromDegrees as cosineFromDegrees,
    add_d_cosineFromRadians as cosineFromRadians,
    add_d_controlModeScoringPercentage as controlModeScoringPercentage,
    add_d_globalVariable as globalVariable,
    add_d_playerVariable as playerVariable,
    add_d_distanceBetween as distanceBetween,
    add_d_divide as divide,
    add_d_eventDamage as eventDamage,
    add_d_eyePosition as eyePosition,
    add_d_health as health,
    add_d_horizontalAngleFromDirection as horizontalAngleFromDirection,
    add_d_horizontalAngleTowards as horizontalAngleTowards,
    add_d_horizontalFacingAngleOf as horizontalFacingAngleOf,
    add_d_horizontalSpeedOf as horizontalSpeedOf,
    add_d_indexOfArrayValue as indexOfArrayValue,
    add_d_lastDamageModificationId as lastDamageModificationId,
    add_d_lastDamageOverTimeId as lastDamageOverTimeId,
    add_d_lastHealOverTimeId as lastHealOverTimeId,
    add_d_lastTextId as lastTextId,
    add_d_matchRound as matchRound,
    add_d_max as max,
    add_d_maxHealth as maxHealth,
    add_d_min as min,
    add_d_modulo as modulo,
    add_d_normalizedHealth as normalizedHealth,
    add_d_numberOfDeadPlayers as numberOfDeadPlayers,
    add_d_numberOfDeaths as numberOfDeaths,
    add_d_numberOfEliminations as numberOfEliminations,
    add_d_numberOfFinalBlows as numberOfFinalBlows,
    add_d_numberOfHeroes as numberOfHeroes,
    add_d_numberOfLivingPlayers as numberOfLivingPlayers,
    add_d_numberOfPlayers as numberOfPlayers,
    add_d_numberOfPlayersOnObjective as numberOfPlayersOnObjective,
    add_d_objectiveIndex as objectiveIndex,
    add_d_payloadProgressPercentage as payloadProgressPercentage,
    add_d_pointCapturePercentage as pointCapturePercentage,
    add_d_raiseToPower as raiseToPower,
    add_d_randomInteger as randomInteger,
    add_d_randomReal as randomReal,
    add_d_roundToInteger as roundToInteger,
    add_d_scoreOf as scoreOf,
    add_d_sineFromDegrees as sineFromDegrees,
    add_d_sineFromRadians as sineFromRadians,
    add_d_slotOf as slotOf,
    add_d_speedOf as speedOf,
    add_d_speedOfInDirection as speedOfInDirection,
    add_d_squareRoot as squareRoot,
    add_d_subtract as subtract,
    add_d_tangentFromDegrees as tangentFromDegrees,
    add_d_tangentFromRadians as tangentFromRadians,
    add_d_teamScore as teamScore,
    add_d_ultimateChargePercent as ultimateChargePercent,
    add_d_verticalAngleFromDirection as verticalAngleFromDirection,
    add_d_verticalAngleTowards as verticalAngleTowards,
    add_d_verticalFacingAngleOf as verticalFacingAngleOf,
    add_d_verticalSpeedOf as verticalSpeedOf,
    add_d_serverLoad as serverLoad,
    add_d_serverLoadAverage as serverLoadAverage,
    add_d_serverLoadPeak as serverLoadPeak,
    add_d_vector as vector,
    add_d_localVectorOf as localVectorOf,
    add_d_worldVectorOf as worldVectorOf,
    add_d_vectorTowards as vectorTowards,
    add_d_backward as backward,
    add_d_crossProduct as crossProduct,
    add_d_directionFromAngles as directionFromAngles,
    add_d_directionTowards as directionTowards,
    add_d_dotProduct as dotProduct,
    add_d_down as down,
    add_d_facingDirectionOf as facingDirectionOf,
    add_d_flagPosition as flagPosition,
    add_d_forward as forward,
    add_d_left as left,
    add_d_nearestWalkablePosition as nearestWalkablePosition,
    add_d_normalize as normalize,
    add_d_objectivePosition as objectivePosition,
    add_d_payloadPosition as payloadPosition,
    add_d_positionOf as positionOf,
    add_d_rayCastHitNormal as rayCastHitNormal,
    add_d_rayCastHitPlayer as rayCastHitPlayer,
    add_d_rayCastHitPosition as rayCastHitPosition,
    add_d_right as right,
    add_d_throttleOf as throttleOf,
    add_d_totalTimeElapsed as totalTimeElapsed,
    add_d_up as up,
    add_d_velocityOf as velocityOf,
    add_d_xComponentOf as xComponentOf,
    add_d_yComponentOf as yComponentOf,
    add_d_zComponentOf as zComponentOf,
  };
}

/**
 * 팀 또는 경기 내에서 사망한 모든 플레이어가 있는 배열입니다.
 */
declare const allDeadPlayers: (
/**
 * 플레이어가 속한 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * 오버워치의 모든 영웅 배열입니다.
 */
declare const allHeroes: (


) => any[];

/**
 * 팀 또는 경기 내에서 생존한 모든 플레이어가 있는 배열입니다.
 */
declare const allLivingPlayers: (
/**
 * 플레이어가 속한 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * 팀 또는 경기 내 모든 플레이어가 있는 배열입니다.
 */
declare const allPlayers: (
/**
 * 플레이어가 속한 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * 팀 또는 경기 내에서 화물을 확보하지도,
 * 점령 중이지도 않은 모든 플레이어가 있는 배열입니다.
 */
declare const allPlayersNotOnObjective: (
/**
 * 플레이어가 속한 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * 팀 또는 경기 내에서 화물 확보 또는
 * 점령 중인 모든 플레이어가 있는 배열입니다.
 */
declare const allPlayersOnObjective: (
/**
 * 플레이어가 속한 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * 지정된 플레이어가 선택할 수 있는 영웅 배열입니다.
 */
declare const allowedHeroes: (
/**
 * 이 플레이어가 선택할 수 있는 영웅 목록을 가져옵니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => any[];

/**
 * 지정된 범위 인덱스의 값만을
 * 포함하고 있는 지정된 배열의 복사본입니다.
 */
declare const arraySlice: (
/**
 * 복사본을 만들 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * 첫번째 범위의 인덱스입니다.
 * - `Type.Number.`
 */
index: string | number | any[],
/**
 * 결과 배열의 요소 개수입니다.
 * 설정 영역이 배열 범위를 벗어나는 경우
 * 결과 배열이 갖는 요소의 수가 상대적으로 적을 수 있습니다.
 * - `Type.Number.`
 */
count: string | number | any[]
) => any[];

/**
 * 요소가 없는 배열입니다.
 */
declare const emptyArray: (


) => any[];

/**
 * 제거된 지정 조건에 해당하지 않는 값을 가진
 * 지정된 배열의 복사본입니다.
 */
declare const filteredArray: (
/**
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * - `Type.Bool.`
 */
condition: string | number | any[]
) => any[];

/**
 * 게임 내 지정된 슬롯을 점유하는 플레이어의 배열입니다.
 */
declare const playersInSlot: (
/**
 * 플레이어 정보를 가져올 슬롯 번호입니다.
 * 팀전에서 각 팀은 0에서 5개의 슬롯을 보유하며,
 * 개별 전투 게임에서 슬롯 수는 0에서 11까지입니다.
 * - `Type.Number.`
 */
slot: string | number | any[],
/**
 * 플레이어 정보를 가져올 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * 지정된 플레이어의 조준선을 기준으로
 * 시야각 안에 있는 플레이어입니다.
 * 팀 단위로 제한할 수 있습니다.
 */
declare const playersInViewAngle: (
/**
 * 시야를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어를 고려할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
 * - `Type.Number.`
 */
viewAngle: string | number | any[]
) => any[];

/**
 * 팀 또는 경기 내에서 지정된 영웅을
 * 플레이하는 플레이어가 있는 배열입니다.
 */
declare const playersOnHero: (
/**
 * 플레이 현황을 확인할 영웅입니다.
 * - `Type.Hero.`
 */
hero: string | number | any[],
/**
 * 영웅 플레이 현황을 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * 한 위치의 지정된 거리 내 모든 플레이어를 포함하고 있는 배열입니다.
 * 팀 또는 시야 범위로 제한할 수 있습니다.
 */
declare const playersWithinRadius: (
/**
 * 거리 측정이 시작되는 중간 위치입니다.
 * - `Type.Vector.`
 */
center: string | number | any[],
/**
 * 결과 배열에 포함되기 위해
 * 플레이어가 속해 있어야 하는
 * 반경(미터)입니다.
 * - `Type.Number.`
 */
radius: string | number | any[],
/**
 * 결과 배열에 포함되기 위해
 * 플레이어가 속해 있어야 하는
 * 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * 결과 배열에 포함되기 위해
 * 플레이어가 시야 확인을
 * 통과해야 하는지 여부 및
 * 방법을 지정합니다.
 * - `Type.LosCheck.`
 */
losCheck: string | number | any[]
) => any[];

/**
 * 지정된 배열의 값을
 * 무작위 순서로 나열한 복사본입니다.
 */
declare const randomizedArray: (
/**
 * 무작위 복사본을 만들 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[]
) => any[];

/**
 * 하나 이상의 값(있는 경우)이
 * 제거된 배열의 복사본입니다.
 */
declare const removeFromArray: (
/**
 * 값을 제거할 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * 배열에서 제거할 값(있는 경우)입니다.
 * 이 값 자체가 배열인 경우
 * 일치하는 각 요소가 제거됩니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => any[];

/**
 * 지정된 배열의 각 요소를
 * VALUE RANK에 따라 평가하고
 * 정렬해서 만든 새 배열 복사본입니다.
 */
declare const sortedArray: (
/**
 * 복사본을 정렬할 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * 복사할 배열의 각 요소마다 평가할 값입니다.
 * 이 값의 순서에 따라 오름차순으로 복사본이 정렬됩니다.
 * 현재 확인 대상인 배열의 요소를 참조할 때는
 * CURRENT ARRAY ELEMENT 값을 사용하십시오.
 * - `Type.Value.`
 */
valueRank: string | number | any[]
) => any[];



declare const array_d_allDeadPlayers: typeof allDeadPlayers;
declare const array_d_allHeroes: typeof allHeroes;
declare const array_d_allLivingPlayers: typeof allLivingPlayers;
declare const array_d_allPlayers: typeof allPlayers;
declare const array_d_allPlayersNotOnObjective: typeof allPlayersNotOnObjective;
declare const array_d_allPlayersOnObjective: typeof allPlayersOnObjective;
declare const array_d_allowedHeroes: typeof allowedHeroes;
declare const array_d_arraySlice: typeof arraySlice;
declare const array_d_emptyArray: typeof emptyArray;
declare const array_d_filteredArray: typeof filteredArray;
declare const array_d_playersInSlot: typeof playersInSlot;
declare const array_d_playersInViewAngle: typeof playersInViewAngle;
declare const array_d_playersOnHero: typeof playersOnHero;
declare const array_d_playersWithinRadius: typeof playersWithinRadius;
declare const array_d_randomizedArray: typeof randomizedArray;
declare const array_d_removeFromArray: typeof removeFromArray;
declare const array_d_sortedArray: typeof sortedArray;
declare const array_d_globalVariable: typeof globalVariable;
declare const array_d_playerVariable: typeof playerVariable;
declare namespace array_d {
  export {
    array_d_allDeadPlayers as allDeadPlayers,
    array_d_allHeroes as allHeroes,
    array_d_allLivingPlayers as allLivingPlayers,
    array_d_allPlayers as allPlayers,
    array_d_allPlayersNotOnObjective as allPlayersNotOnObjective,
    array_d_allPlayersOnObjective as allPlayersOnObjective,
    array_d_allowedHeroes as allowedHeroes,
    array_d_arraySlice as arraySlice,
    array_d_emptyArray as emptyArray,
    array_d_filteredArray as filteredArray,
    array_d_playersInSlot as playersInSlot,
    array_d_playersInViewAngle as playersInViewAngle,
    array_d_playersOnHero as playersOnHero,
    array_d_playersWithinRadius as playersWithinRadius,
    array_d_randomizedArray as randomizedArray,
    array_d_removeFromArray as removeFromArray,
    array_d_sortedArray as sortedArray,
    array_d_globalVariable as globalVariable,
    array_d_playerVariable as playerVariable,
  };
}

/**
 * 플레이어가 없음을 나타냅니다. 지정된 입력 정보에
 * 플레이어를 지정하고 싶지 않을 때 사용할 수 있습니다.
 * 비교 또는 디버그용으로 실수 0을 사용하는 것과 동일합니다.
 */
declare const Null: (


) => string;

/**
 * 이벤트로 지정된 이 규칙을 실행 중인 플레이어입니다.
 * ATTACKER 또는 VICTIM과 동일할 수 있습니다.
 */
declare const eventPlayer: (


) => string;

/**
 * 이 규칙으로 처리된 이벤트로 인해 피해를 받은 플레이어입니다.
 * ATTACKER 또는 EVENT PLAYER와 동일할 수 있습니다.
 */
declare const victim: (


) => string;

/**
 * 이 규칙으로 처리된 이벤트로 인해 피해를 준 플레이어입니다.
 * VICTIM 또는 EVENT PLAYER와 동일할 수 있습니다.
 */
declare const attacker: (


) => string;

/**
 * 한 위치에서 가장 가까운 플레이어입니다.
 * 팀으로 제한할 수 있습니다.
 */
declare const closestPlayerTo: (
/**
 * 거리를 측정할 위치입니다.
 * - `Type.Vector.`
 */
center: string | number | any[],
/**
 * 가장 가까이 있는 플레이어가 소속된 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * 지정된 위치로부터 가장 멀리 떨어진 플레이어로,
 * 팀의 제한을 받을 수 있습니다.
 */
declare const farthestPlayerFrom: (
/**
 * 거리 측정을 위한 위치입니다.
 * - `Type.Vector.`
 */
center: string | number | any[],
/**
 * 가장 멀리 떨어진 플레이어가 소속된 팀입니다.
 * - `Type.Player.`
 */
team: string | number | any[]
) => string;

/**
 * 깃발 뺏기에서 지정된 팀의 깃발을 지닌 플레이어입니다.
 * 아무도 깃발을 가지지 않은 경우 결과값은 NULL입니다.
 */
declare const playerCarryingFlag: (
/**
 * 깃발을 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * 지정된 플레이어의 조준선에서
 * 가장 가까운 플레이어입니다.
 * 팀으로 제한할 수 있습니다.
 */
declare const playerClosestToReticle: (
/**
 * 이 플레이어의 조준선으로부터
 * 가장 가까운 플레이어를 검색합니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 가장 가까운 플레이어를 검색할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;



declare const player_d_eventPlayer: typeof eventPlayer;
declare const player_d_victim: typeof victim;
declare const player_d_attacker: typeof attacker;
declare const player_d_closestPlayerTo: typeof closestPlayerTo;
declare const player_d_globalVariable: typeof globalVariable;
declare const player_d_playerVariable: typeof playerVariable;
declare const player_d_farthestPlayerFrom: typeof farthestPlayerFrom;
declare const player_d_playerCarryingFlag: typeof playerCarryingFlag;
declare const player_d_playerClosestToReticle: typeof playerClosestToReticle;
declare namespace player_d {
  export {
    player_d_eventPlayer as eventPlayer,
    player_d_victim as victim,
    player_d_attacker as attacker,
    player_d_closestPlayerTo as closestPlayerTo,
    player_d_globalVariable as globalVariable,
    player_d_playerVariable as playerVariable,
    player_d_farthestPlayerFrom as farthestPlayerFrom,
    player_d_playerCarryingFlag as playerCarryingFlag,
    player_d_playerClosestToReticle as playerClosestToReticle,
  };
}



declare const assisterParam_d_Null: typeof Null;
declare const assisterParam_d_eventPlayer: typeof eventPlayer;
declare const assisterParam_d_victim: typeof victim;
declare const assisterParam_d_attacker: typeof attacker;
declare const assisterParam_d_closestPlayerTo: typeof closestPlayerTo;
declare const assisterParam_d_globalVariable: typeof globalVariable;
declare const assisterParam_d_playerVariable: typeof playerVariable;
declare const assisterParam_d_farthestPlayerFrom: typeof farthestPlayerFrom;
declare const assisterParam_d_playerCarryingFlag: typeof playerCarryingFlag;
declare const assisterParam_d_playerClosestToReticle: typeof playerClosestToReticle;
declare namespace assisterParam_d {
  export {
    assisterParam_d_Null as Null,
    assisterParam_d_eventPlayer as eventPlayer,
    assisterParam_d_victim as victim,
    assisterParam_d_attacker as attacker,
    assisterParam_d_closestPlayerTo as closestPlayerTo,
    assisterParam_d_globalVariable as globalVariable,
    assisterParam_d_playerVariable as playerVariable,
    assisterParam_d_farthestPlayerFrom as farthestPlayerFrom,
    assisterParam_d_playerCarryingFlag as playerCarryingFlag,
    assisterParam_d_playerClosestToReticle as playerClosestToReticle,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$5: (str: ValueBarrierType) => ValueBarrierType;

declare namespace barrier_d {
  export {
    Default$5 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$6: (str: ValueBeamType) => ValueBeamType;

declare namespace beam_d {
  export {
    Default$6 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$7: (str: ValueBeamReevaluationType) => ValueBeamReevaluationType;

declare namespace beamReevaluation_d {
  export {
    Default$7 as Default
  };
}

/**
 * false 의 부울 값입니다.
 */
declare const False: (


) => string;

/**
 * TRUE의 부울 값입니다.
 */
declare const True: (


) => string;

/**
 * 입력 정보가 FALSE(또는 그에 상응하는 경우)인지 여부입니다.
 */
declare const not: (
/**
 * 이 입력 정보가 FALSE
 * (또는 그에 상응하는 경우)라면
 * NOT 값은 TRUE입니다.
 * 그 이외의 경우,
 * NOT 값은 FALSE입니다.
 * - `Type.Bool.`
 */
value: string | number | any[]
) => string;

/**
 * 두 입력 정보 중 하나가 TRUE(또는 그에 상응하는 경우)인지 여부입니다.
 */
declare const or: (
/**
 * 두 입력 정보를 확인하여
 * 하나가 TRUE(또는 그에 상응하는 경우)
 * 인 경우, OR 값은 TRUE입니다.
 * - `Type.Value.`
 */
value1: string | number | any[],
/**
 * 두 입력 정보를 확인하여
 * 하나가 TRUE(또는 그에 상응하는 경우)
 * 인 경우, OR 값은 TRUE입니다.
 * - `Type.Value.`
 */
value2: string | number | any[]
) => string;

/**
 * 두 입력 정보 모두 TRUE(또는 그에 상응하는 경우)인지 여부입니다.
 */
declare const and: (
/**
 * 두 입력 정보를 확인하여 둘 다 TRUE(또는 그에 상응하는 경우)인경우, AND 값은 TRUE입니다.
 * - `Type.Value.`
 */
value1: string | number | any[],
/**
 * 두 입력 정보를 확인하여 둘 다 TRUE(또는 그에 상응하는 경우)인경우, AND 값은 TRUE입니다.
 * - `Type.Value.`
 */
value2: string | number | any[]
) => string;

/**
 * 지정된 배열에 지정된 값이 있는지 여부입니다.
 */
declare const arrayContains: (
/**
 * 지정된 값을 검색할 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * 검색할 값입니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * 두 입력 정보의 비교 결과가 TRUE인지 여부입니다.
 */
declare const compare: (
/**
 * 비교 연산의 좌측단입니다.
 * 연산이 == 또는 != 인 경우 어떤 값 유형이든 상관없지만,
 * 그 이외에는 실수 형식이어야 합니다.
 * - `Type.Value.`
 */
value1: string | number | any[],
/**
 * - `Type.Operator.`
 */
operator: string | number | any[],
/**
 * 비교 연산의 우측단입니다.
 * 연산이 == 또는 != 인 경우 어떤 값 유형이든 상관없지만,
 * 그 이외에는 실수 형식이어야 합니다.
 * - `Type.Value.`
 */
value2: string | number | any[]
) => string;

/**
 * 특정 플레이어, 아이콘 개체, 효과 개체가 아직 존재하는지 여부입니다.
 * 플레이어가 경기를 나갔는지, 개체가 소멸됐는지 등을 판별할 때 유용합니다.
 */
declare const entityExists: (
/**
 * 존재를 확인할 플레이어, 아이콘 개체 또는 효과 개체입니다.
 * - `Type.Entity.`
 */
entity: string | number | any[]
) => string;

/**
 * 이 규칙에 의해 현재 처리되고 있는 이벤트에 대한
 * 피해가 치명타(헤드샷 등)인지 여부입니다.
 */
declare const eventWasCriticalHit: (


) => string;

/**
 * 월드에 개체가 생성되었는지 여부입니다.
 * 플레이어가 영웅을 선택하지 않은 경우
 * 결과값은 FALSE 입니다.
 */
declare const hasSpawned: (
/**
 * - `Type.Entity.`
 */
entity: string | number | any[]
) => string;

/**
 * 지정된 플레이어가 SET STATUS 액션 또는 스크립트 이외의
 * 게임 메카닉을 통해 지정된 상태를 갖게 되었는지 여부입니다.
 */
declare const hasStatus: (
/**
 * 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 확인할 상태입니다.
 * - `Type.Status.`
 */
status: string | number | any[]
) => string;

/**
 * 플레이어의 생존 여부 입니다.
 */
declare const isAlive: (
/**
 * 생존 여부를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 경기가 현재 영웅 선택 단계인지 여부입니다.
 */
declare const isAssemblingHeroes: (


) => string;

/**
 * 경기 중 라운드 전환 시기인지 여부입니다.
 */
declare const isBetweenRounds: (


) => string;

/**
 * 플레이어가 지정된 버튼을 누르고 있는지 여부입니다.
 */
declare const isButtonHeld: (
/**
 * 버튼을 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 확인할 버튼입니다.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * 플레이어가 지정된 의사소통 유형
 * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
 */
declare const isCommunicating: (
/**
 * 의사소통 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 고려할 의사소통 유형입니다.
 *  *
 * 감정 표현의 지속 시간은 정확하게 적용되며,
 * 음성 대사의 지속 시간은 4초로 간주합니다.
 *  *
 * 그 이외의 지속 시간은 2초로 간주합니다.
 * - `Type.Communication.`
 */
type: string | number | any[]
) => string;

/**
 * 플레이어가 아무 것이든 의사소통 유형
 * (감정 표현, 음성 대사 등)을 사용하는지 여부입니다.
 */
declare const isCommunicatingAny: (
/**
 * 의사소통 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어가 감정 표현을 사용하는지 여부입니다.
 */
declare const isCommunicatingAnyEmote: (
/**
 * 감정표현 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어가 음성 대사를 사용하는지 여부입니다.
 * (음성 대사의 지속 시간은 4초로 추정)
 */
declare const isCommunicatingAnyVoiceLine: (
/**
 * 음성 대사 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 쟁탈 전장에서 해당 거점이 잠겨있는지 여부입니다.
 */
declare const isControlModePointLocked: (


) => string;

/**
 * 플레이어가 웅크리고 있는 상태인지 여부입니다.
 */
declare const isCrouching: (
/**
 * 웅크린 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 현재 깃발 뺏기 게임이 승자 결정전인지 여부입니다.
 */
declare const isCTFModeInSuddenDeath: (


) => string;

/**
 * 플레이어의 사망 여부입니다.
 */
declare const isDead: (
/**
 * 사망 여부를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 지정된 플레이어의 주무기가 사용 중인지 여부입니다.
 */
declare const isFiringPrimary: (
/**
 * 주무기 공격 사용 여부를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 지정된 플레이어의 보조 무기 공격이 사용 중인지 여부입니다.
 */
declare const isFiringSecondary: (
/**
 * 보조 무기 공격 사용 여부를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 깃발 뺏기에서 지정된 팀의 깃발이 해당 팀의 기지에 있는지 여부입니다.
 */
declare const isFlagAtBase: (
/**
 * 깃발을 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * 깃발 뺏기에서 상대 팀이 지정된 팀의 깃발을 점유하고 있는지 여부입니다.
 */
declare const isFlagBeingCarried: (
/**
 * 깃발을 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * 경기의 주요 단계(전투 및 점수 산정이 허용되는 시기)가 진행 중인지 여부입니다.
 */
declare const isGameInProgress: (


) => string;

/**
 * (팀 또는 경기 내에서) 지정된 영웅이 사용되고 있는지 여부입니다.
 */
declare const isHeroBeingPlayed: (
/**
 * 플레이 현황을 확인할 영웅입니다.
 * - `Type.Hero.`
 */
hero: string | number | any[],
/**
 * 영웅 플레이 현황을 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * 플레이어가 공중에 있는 상태인지 여부입니다.
 */
declare const isInAir: (
/**
 * 공중에 있는 상태인지를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 두 위치가 서로 보이는지 여부입니다.
 */
declare const isInLineOfSight: (
/**
 * 시야 확인의 시작 위치입니다.
 * 플레이어가 설정되어 있으면
 * 해당 플레이어의 발 위로
 * 2미터 위치가 사용됩니다.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * 시야 확인의 종료 위치입니다.
 * 플레이어가 설정되어 있으면
 * 해당 플레이어의 발 위로
 * 2미터 위치가 사용됩니다.
 * - `Type.Vector.`
 */
endPos: string | number | any[],
/**
 * 방벽이 시야에 미치는 영향을 정의합니다.
 * 방벽이 적 소유인지를 판정할 때는
 * START POS에 제공된 플레이어의
 * 소속(있는 경우)이 사용됩니다.
 * - `Type.Barrier.`
 */
barriers: string | number | any[]
) => string;

/**
 * 경기가 현재 준비 단계인지 여부입니다.
 */
declare const isInSetup: (


) => string;

/**
 * 지정된 플레이어가 전투준비실에 있는지
 * (또한 치유되고 영웅을 변경할 수 있는지) 여부 입니다.
 */
declare const isInSpawnRoom: (
/**
 * 전투준비실 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * LOCATION이 플레이어의 시야에 있는지 여부입니다.
 */
declare const isInViewAngle: (
/**
 * 시야를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 시야에 있는지 테스트할 LOCATION입니다.
 * - `Type.Vector.`
 */
location: string | number | any[],
/**
 * 비교 대상인 VIEW ANGLE(단위: 도)입니다.
 * - `Type.Number.`
 */
viewAngle: string | number | any[]
) => string;

/**
 * 경기가 완료되었는지 여부입니다.
 */
declare const isMatchComplete: (


) => string;

/**
 * 플레이어가 이동하고 있는지
 * 여부(현재 속도가 0인지 여부로 판단)입니다.
 */
declare const isMoving: (
/**
 * 이동 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 지정된 목표가 완료되었는지 여부입니다.
 * 게임 모드가 점령, 호위 또는
 * 점령/호위가 아닌 경우
 * 결과값은 FALSE입니다.
 */
declare const isObjectiveComplete: (
/**
 * 고려해야 하는 목표의 인덱스로서,
 * 0에서 시작하여 증가합니다.
 * 각 거점, 화물 경유지,
 * 화물 목적지에는
 * 각기 고유의 인덱스가 있습니다.
 * - `Type.Number.`
 */
number: string | number | any[]
) => string;

/**
 * 플레이어가 착지(또는 걷기가 가능한 표면에 있는) 상태인지 여부입니다.
 */
declare const isOnGround: (
/**
 * 착지 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.
 */
declare const isOnObjective: (
/**
 * 목표 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어가 벽에 있는 상태(오르거나 타는 상태)인지 여부입니다.
 */
declare const isOnWall: (
/**
 * 벽 상태를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 지정된 플레이어의 초상화가 폭주 상태인지 여부입니다.
 */
declare const isPortraitOnFire: (
/**
 * 초상화를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어가 서 있는 상태인지 여부
 * (이동하지 않고 공중에 있는
 * 상태가 아닌 경우로 판단)입니다.
 */
declare const isStanding: (
/**
 * 서 있는 상태를 확인할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 지정된 팀이 현재 수비 중인지 여부입니다.
 * 게임 모드가 점령, 호위,
 * 또는 점령/호위가 아닌 경우
 * 결과값은 FALSE입니다.
 */
declare const isTeamOnDefense: (
/**
 * 역할을 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * 지정된 팀이 현재 공격 중인지 여부입니다.
 * 게임 모드가 점령, 호위,
 * 또는 점령/호위가 아닌 경우
 * 결과값은 FALSE입니다.
 */
declare const isTeamOnOffense: (
/**
 * 역할을 확인할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * 지정된 배열의 모든 값이 지정된 조건에 대해 TRUE인지 여부입니다.
 */
declare const isTrueForAll: (
/**
 * 값을 확인할 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * 지정된 배열의 각 요소에 대해 확인할 조건입니다.
 * 현재 확인 대상인 배열의 요소를 참조할 때는
 * CURRENT ARRAY ELEMENT 값을 사용하십시오.
 * - `Type.Bool.`
 */
condition: string | number | any[]
) => string;

/**
 * 지정된 배열의 값 중 하나가 지정된 조건에 대해 TRUE인지 여부입니다.
 */
declare const isTrueForAny: (
/**
 * 값을 확인할 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * 지정된 배열의 각 요소에 대해 확인할 조건입니다.
 * 현재 확인 대상인 배열의 요소를 참조할 때는
 * CURRENT ARRAY ELEMENT 값을 사용하십시오.
 * - `Type.Bool.`
 */
condition: string | number | any[]
) => string;

/**
 * 지정된 플레이어가 기술 1을 사용하는지 여부입니다.
 */
declare const isUsingAbility1: (
/**
 * 기술 1의 사용 여부를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 지정된 플레이어가 기술 2를 사용하는지 여부입니다.
 */
declare const isUsingAbility2: (
/**
 * 기술 2의 사용 여부를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어가 궁극기를 사용하는지 여부입니다.
 */
declare const isUsingUltimate: (
/**
 * 궁극기 사용 여부를 확인할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 경기 시작에 앞서 플레이어가 참여하기를
 * 기다리고 있는지 여부입니다.
 */
declare const isWaitingForPlayers: (


) => string;



declare const bool_d_False: typeof False;
declare const bool_d_True: typeof True;
declare const bool_d_not: typeof not;
declare const bool_d_or: typeof or;
declare const bool_d_and: typeof and;
declare const bool_d_arrayContains: typeof arrayContains;
declare const bool_d_compare: typeof compare;
declare const bool_d_entityExists: typeof entityExists;
declare const bool_d_eventWasCriticalHit: typeof eventWasCriticalHit;
declare const bool_d_hasSpawned: typeof hasSpawned;
declare const bool_d_hasStatus: typeof hasStatus;
declare const bool_d_isAlive: typeof isAlive;
declare const bool_d_isAssemblingHeroes: typeof isAssemblingHeroes;
declare const bool_d_isBetweenRounds: typeof isBetweenRounds;
declare const bool_d_isButtonHeld: typeof isButtonHeld;
declare const bool_d_isCommunicating: typeof isCommunicating;
declare const bool_d_isCommunicatingAny: typeof isCommunicatingAny;
declare const bool_d_isCommunicatingAnyEmote: typeof isCommunicatingAnyEmote;
declare const bool_d_isCommunicatingAnyVoiceLine: typeof isCommunicatingAnyVoiceLine;
declare const bool_d_isControlModePointLocked: typeof isControlModePointLocked;
declare const bool_d_isCrouching: typeof isCrouching;
declare const bool_d_isCTFModeInSuddenDeath: typeof isCTFModeInSuddenDeath;
declare const bool_d_isDead: typeof isDead;
declare const bool_d_isFiringPrimary: typeof isFiringPrimary;
declare const bool_d_isFiringSecondary: typeof isFiringSecondary;
declare const bool_d_isFlagAtBase: typeof isFlagAtBase;
declare const bool_d_isFlagBeingCarried: typeof isFlagBeingCarried;
declare const bool_d_isGameInProgress: typeof isGameInProgress;
declare const bool_d_isHeroBeingPlayed: typeof isHeroBeingPlayed;
declare const bool_d_isInAir: typeof isInAir;
declare const bool_d_isInLineOfSight: typeof isInLineOfSight;
declare const bool_d_isInSetup: typeof isInSetup;
declare const bool_d_isInSpawnRoom: typeof isInSpawnRoom;
declare const bool_d_isInViewAngle: typeof isInViewAngle;
declare const bool_d_isMatchComplete: typeof isMatchComplete;
declare const bool_d_isMoving: typeof isMoving;
declare const bool_d_isObjectiveComplete: typeof isObjectiveComplete;
declare const bool_d_isOnGround: typeof isOnGround;
declare const bool_d_isOnObjective: typeof isOnObjective;
declare const bool_d_isOnWall: typeof isOnWall;
declare const bool_d_isPortraitOnFire: typeof isPortraitOnFire;
declare const bool_d_isStanding: typeof isStanding;
declare const bool_d_isTeamOnDefense: typeof isTeamOnDefense;
declare const bool_d_isTeamOnOffense: typeof isTeamOnOffense;
declare const bool_d_isTrueForAll: typeof isTrueForAll;
declare const bool_d_isTrueForAny: typeof isTrueForAny;
declare const bool_d_isUsingAbility1: typeof isUsingAbility1;
declare const bool_d_isUsingAbility2: typeof isUsingAbility2;
declare const bool_d_isUsingUltimate: typeof isUsingUltimate;
declare const bool_d_isWaitingForPlayers: typeof isWaitingForPlayers;
declare namespace bool_d {
  export {
    bool_d_False as False,
    bool_d_True as True,
    bool_d_not as not,
    bool_d_or as or,
    bool_d_and as and,
    bool_d_arrayContains as arrayContains,
    bool_d_compare as compare,
    bool_d_entityExists as entityExists,
    bool_d_eventWasCriticalHit as eventWasCriticalHit,
    bool_d_hasSpawned as hasSpawned,
    bool_d_hasStatus as hasStatus,
    bool_d_isAlive as isAlive,
    bool_d_isAssemblingHeroes as isAssemblingHeroes,
    bool_d_isBetweenRounds as isBetweenRounds,
    bool_d_isButtonHeld as isButtonHeld,
    bool_d_isCommunicating as isCommunicating,
    bool_d_isCommunicatingAny as isCommunicatingAny,
    bool_d_isCommunicatingAnyEmote as isCommunicatingAnyEmote,
    bool_d_isCommunicatingAnyVoiceLine as isCommunicatingAnyVoiceLine,
    bool_d_isControlModePointLocked as isControlModePointLocked,
    bool_d_isCrouching as isCrouching,
    bool_d_isCTFModeInSuddenDeath as isCTFModeInSuddenDeath,
    bool_d_isDead as isDead,
    bool_d_isFiringPrimary as isFiringPrimary,
    bool_d_isFiringSecondary as isFiringSecondary,
    bool_d_isFlagAtBase as isFlagAtBase,
    bool_d_isFlagBeingCarried as isFlagBeingCarried,
    bool_d_isGameInProgress as isGameInProgress,
    bool_d_isHeroBeingPlayed as isHeroBeingPlayed,
    bool_d_isInAir as isInAir,
    bool_d_isInLineOfSight as isInLineOfSight,
    bool_d_isInSetup as isInSetup,
    bool_d_isInSpawnRoom as isInSpawnRoom,
    bool_d_isInViewAngle as isInViewAngle,
    bool_d_isMatchComplete as isMatchComplete,
    bool_d_isMoving as isMoving,
    bool_d_isObjectiveComplete as isObjectiveComplete,
    bool_d_isOnGround as isOnGround,
    bool_d_isOnObjective as isOnObjective,
    bool_d_isOnWall as isOnWall,
    bool_d_isPortraitOnFire as isPortraitOnFire,
    bool_d_isStanding as isStanding,
    bool_d_isTeamOnDefense as isTeamOnDefense,
    bool_d_isTeamOnOffense as isTeamOnOffense,
    bool_d_isTrueForAll as isTrueForAll,
    bool_d_isTrueForAny as isTrueForAny,
    bool_d_isUsingAbility1 as isUsingAbility1,
    bool_d_isUsingAbility2 as isUsingAbility2,
    bool_d_isUsingUltimate as isUsingUltimate,
    bool_d_isWaitingForPlayers as isWaitingForPlayers,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$8: (str: ValueButtonType) => ValueButtonType;

declare namespace button_d {
  export {
    Default$8 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$9: (str: ValueClippingType) => ValueClippingType;

declare namespace clipping_d {
  export {
    Default$9 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$a: (str: ValueColorType) => ValueColorType;

declare namespace color_d {
  export {
    Default$a as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$b: (str: ValueCommunicationType) => ValueCommunicationType;

declare namespace communication_d {
  export {
    Default$b as Default
  };
}



declare const damageModificationId_d_lastDamageModificationId: typeof lastDamageModificationId;
declare const damageModificationId_d_globalVariable: typeof globalVariable;
declare const damageModificationId_d_playerVariable: typeof playerVariable;
declare namespace damageModificationId_d {
  export {
    damageModificationId_d_lastDamageModificationId as lastDamageModificationId,
    damageModificationId_d_globalVariable as globalVariable,
    damageModificationId_d_playerVariable as playerVariable,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$c: (str: ValueDamageModificationReevaluationType) => ValueDamageModificationReevaluationType;

declare namespace damageModificationReevaluation_d {
  export {
    Default$c as Default
  };
}



declare const damageOverTimeId_d_lastDamageOverTimeId: typeof lastDamageOverTimeId;
declare const damageOverTimeId_d_globalVariable: typeof globalVariable;
declare const damageOverTimeId_d_playerVariable: typeof playerVariable;
declare namespace damageOverTimeId_d {
  export {
    damageOverTimeId_d_lastDamageOverTimeId as lastDamageOverTimeId,
    damageOverTimeId_d_globalVariable as globalVariable,
    damageOverTimeId_d_playerVariable as playerVariable,
  };
}



declare const destinationParam_d_number: typeof number;
declare const destinationParam_d_add: typeof add;
declare const destinationParam_d_angleDifference: typeof angleDifference;
declare const destinationParam_d_angleBetweenVectors: typeof angleBetweenVectors;
declare const destinationParam_d_altitudeOf: typeof altitudeOf;
declare const destinationParam_d_countOf: typeof countOf;
declare const destinationParam_d_arccosineInDegrees: typeof arccosineInDegrees;
declare const destinationParam_d_arccosineInRadians: typeof arccosineInRadians;
declare const destinationParam_d_arcsineInDegrees: typeof arcsineInDegrees;
declare const destinationParam_d_arcsineInRadians: typeof arcsineInRadians;
declare const destinationParam_d_arctangentInDegrees: typeof arctangentInDegrees;
declare const destinationParam_d_arctangentInRadians: typeof arctangentInRadians;
declare const destinationParam_d_cosineFromDegrees: typeof cosineFromDegrees;
declare const destinationParam_d_cosineFromRadians: typeof cosineFromRadians;
declare const destinationParam_d_controlModeScoringPercentage: typeof controlModeScoringPercentage;
declare const destinationParam_d_globalVariable: typeof globalVariable;
declare const destinationParam_d_playerVariable: typeof playerVariable;
declare const destinationParam_d_distanceBetween: typeof distanceBetween;
declare const destinationParam_d_divide: typeof divide;
declare const destinationParam_d_eventDamage: typeof eventDamage;
declare const destinationParam_d_eyePosition: typeof eyePosition;
declare const destinationParam_d_health: typeof health;
declare const destinationParam_d_horizontalAngleFromDirection: typeof horizontalAngleFromDirection;
declare const destinationParam_d_horizontalAngleTowards: typeof horizontalAngleTowards;
declare const destinationParam_d_horizontalFacingAngleOf: typeof horizontalFacingAngleOf;
declare const destinationParam_d_horizontalSpeedOf: typeof horizontalSpeedOf;
declare const destinationParam_d_indexOfArrayValue: typeof indexOfArrayValue;
declare const destinationParam_d_lastDamageModificationId: typeof lastDamageModificationId;
declare const destinationParam_d_lastDamageOverTimeId: typeof lastDamageOverTimeId;
declare const destinationParam_d_lastHealOverTimeId: typeof lastHealOverTimeId;
declare const destinationParam_d_lastTextId: typeof lastTextId;
declare const destinationParam_d_matchRound: typeof matchRound;
declare const destinationParam_d_max: typeof max;
declare const destinationParam_d_maxHealth: typeof maxHealth;
declare const destinationParam_d_min: typeof min;
declare const destinationParam_d_modulo: typeof modulo;
declare const destinationParam_d_normalizedHealth: typeof normalizedHealth;
declare const destinationParam_d_numberOfDeadPlayers: typeof numberOfDeadPlayers;
declare const destinationParam_d_numberOfDeaths: typeof numberOfDeaths;
declare const destinationParam_d_numberOfEliminations: typeof numberOfEliminations;
declare const destinationParam_d_numberOfFinalBlows: typeof numberOfFinalBlows;
declare const destinationParam_d_numberOfHeroes: typeof numberOfHeroes;
declare const destinationParam_d_numberOfLivingPlayers: typeof numberOfLivingPlayers;
declare const destinationParam_d_numberOfPlayers: typeof numberOfPlayers;
declare const destinationParam_d_numberOfPlayersOnObjective: typeof numberOfPlayersOnObjective;
declare const destinationParam_d_objectiveIndex: typeof objectiveIndex;
declare const destinationParam_d_payloadProgressPercentage: typeof payloadProgressPercentage;
declare const destinationParam_d_pointCapturePercentage: typeof pointCapturePercentage;
declare const destinationParam_d_raiseToPower: typeof raiseToPower;
declare const destinationParam_d_randomInteger: typeof randomInteger;
declare const destinationParam_d_randomReal: typeof randomReal;
declare const destinationParam_d_roundToInteger: typeof roundToInteger;
declare const destinationParam_d_scoreOf: typeof scoreOf;
declare const destinationParam_d_sineFromDegrees: typeof sineFromDegrees;
declare const destinationParam_d_sineFromRadians: typeof sineFromRadians;
declare const destinationParam_d_slotOf: typeof slotOf;
declare const destinationParam_d_speedOf: typeof speedOf;
declare const destinationParam_d_speedOfInDirection: typeof speedOfInDirection;
declare const destinationParam_d_squareRoot: typeof squareRoot;
declare const destinationParam_d_subtract: typeof subtract;
declare const destinationParam_d_tangentFromDegrees: typeof tangentFromDegrees;
declare const destinationParam_d_tangentFromRadians: typeof tangentFromRadians;
declare const destinationParam_d_teamScore: typeof teamScore;
declare const destinationParam_d_ultimateChargePercent: typeof ultimateChargePercent;
declare const destinationParam_d_verticalAngleFromDirection: typeof verticalAngleFromDirection;
declare const destinationParam_d_verticalAngleTowards: typeof verticalAngleTowards;
declare const destinationParam_d_verticalFacingAngleOf: typeof verticalFacingAngleOf;
declare const destinationParam_d_verticalSpeedOf: typeof verticalSpeedOf;
declare const destinationParam_d_serverLoad: typeof serverLoad;
declare const destinationParam_d_serverLoadAverage: typeof serverLoadAverage;
declare const destinationParam_d_serverLoadPeak: typeof serverLoadPeak;
declare const destinationParam_d_vector: typeof vector;
declare const destinationParam_d_localVectorOf: typeof localVectorOf;
declare const destinationParam_d_worldVectorOf: typeof worldVectorOf;
declare const destinationParam_d_vectorTowards: typeof vectorTowards;
declare const destinationParam_d_backward: typeof backward;
declare const destinationParam_d_crossProduct: typeof crossProduct;
declare const destinationParam_d_directionFromAngles: typeof directionFromAngles;
declare const destinationParam_d_directionTowards: typeof directionTowards;
declare const destinationParam_d_dotProduct: typeof dotProduct;
declare const destinationParam_d_down: typeof down;
declare const destinationParam_d_facingDirectionOf: typeof facingDirectionOf;
declare const destinationParam_d_flagPosition: typeof flagPosition;
declare const destinationParam_d_forward: typeof forward;
declare const destinationParam_d_left: typeof left;
declare const destinationParam_d_nearestWalkablePosition: typeof nearestWalkablePosition;
declare const destinationParam_d_normalize: typeof normalize;
declare const destinationParam_d_objectivePosition: typeof objectivePosition;
declare const destinationParam_d_payloadPosition: typeof payloadPosition;
declare const destinationParam_d_positionOf: typeof positionOf;
declare const destinationParam_d_rayCastHitNormal: typeof rayCastHitNormal;
declare const destinationParam_d_rayCastHitPlayer: typeof rayCastHitPlayer;
declare const destinationParam_d_rayCastHitPosition: typeof rayCastHitPosition;
declare const destinationParam_d_right: typeof right;
declare const destinationParam_d_throttleOf: typeof throttleOf;
declare const destinationParam_d_totalTimeElapsed: typeof totalTimeElapsed;
declare const destinationParam_d_up: typeof up;
declare const destinationParam_d_velocityOf: typeof velocityOf;
declare const destinationParam_d_xComponentOf: typeof xComponentOf;
declare const destinationParam_d_yComponentOf: typeof yComponentOf;
declare const destinationParam_d_zComponentOf: typeof zComponentOf;
declare namespace destinationParam_d {
  export {
    destinationParam_d_number as number,
    destinationParam_d_add as add,
    destinationParam_d_angleDifference as angleDifference,
    destinationParam_d_angleBetweenVectors as angleBetweenVectors,
    destinationParam_d_altitudeOf as altitudeOf,
    destinationParam_d_countOf as countOf,
    destinationParam_d_arccosineInDegrees as arccosineInDegrees,
    destinationParam_d_arccosineInRadians as arccosineInRadians,
    destinationParam_d_arcsineInDegrees as arcsineInDegrees,
    destinationParam_d_arcsineInRadians as arcsineInRadians,
    destinationParam_d_arctangentInDegrees as arctangentInDegrees,
    destinationParam_d_arctangentInRadians as arctangentInRadians,
    destinationParam_d_cosineFromDegrees as cosineFromDegrees,
    destinationParam_d_cosineFromRadians as cosineFromRadians,
    destinationParam_d_controlModeScoringPercentage as controlModeScoringPercentage,
    destinationParam_d_globalVariable as globalVariable,
    destinationParam_d_playerVariable as playerVariable,
    destinationParam_d_distanceBetween as distanceBetween,
    destinationParam_d_divide as divide,
    destinationParam_d_eventDamage as eventDamage,
    destinationParam_d_eyePosition as eyePosition,
    destinationParam_d_health as health,
    destinationParam_d_horizontalAngleFromDirection as horizontalAngleFromDirection,
    destinationParam_d_horizontalAngleTowards as horizontalAngleTowards,
    destinationParam_d_horizontalFacingAngleOf as horizontalFacingAngleOf,
    destinationParam_d_horizontalSpeedOf as horizontalSpeedOf,
    destinationParam_d_indexOfArrayValue as indexOfArrayValue,
    destinationParam_d_lastDamageModificationId as lastDamageModificationId,
    destinationParam_d_lastDamageOverTimeId as lastDamageOverTimeId,
    destinationParam_d_lastHealOverTimeId as lastHealOverTimeId,
    destinationParam_d_lastTextId as lastTextId,
    destinationParam_d_matchRound as matchRound,
    destinationParam_d_max as max,
    destinationParam_d_maxHealth as maxHealth,
    destinationParam_d_min as min,
    destinationParam_d_modulo as modulo,
    destinationParam_d_normalizedHealth as normalizedHealth,
    destinationParam_d_numberOfDeadPlayers as numberOfDeadPlayers,
    destinationParam_d_numberOfDeaths as numberOfDeaths,
    destinationParam_d_numberOfEliminations as numberOfEliminations,
    destinationParam_d_numberOfFinalBlows as numberOfFinalBlows,
    destinationParam_d_numberOfHeroes as numberOfHeroes,
    destinationParam_d_numberOfLivingPlayers as numberOfLivingPlayers,
    destinationParam_d_numberOfPlayers as numberOfPlayers,
    destinationParam_d_numberOfPlayersOnObjective as numberOfPlayersOnObjective,
    destinationParam_d_objectiveIndex as objectiveIndex,
    destinationParam_d_payloadProgressPercentage as payloadProgressPercentage,
    destinationParam_d_pointCapturePercentage as pointCapturePercentage,
    destinationParam_d_raiseToPower as raiseToPower,
    destinationParam_d_randomInteger as randomInteger,
    destinationParam_d_randomReal as randomReal,
    destinationParam_d_roundToInteger as roundToInteger,
    destinationParam_d_scoreOf as scoreOf,
    destinationParam_d_sineFromDegrees as sineFromDegrees,
    destinationParam_d_sineFromRadians as sineFromRadians,
    destinationParam_d_slotOf as slotOf,
    destinationParam_d_speedOf as speedOf,
    destinationParam_d_speedOfInDirection as speedOfInDirection,
    destinationParam_d_squareRoot as squareRoot,
    destinationParam_d_subtract as subtract,
    destinationParam_d_tangentFromDegrees as tangentFromDegrees,
    destinationParam_d_tangentFromRadians as tangentFromRadians,
    destinationParam_d_teamScore as teamScore,
    destinationParam_d_ultimateChargePercent as ultimateChargePercent,
    destinationParam_d_verticalAngleFromDirection as verticalAngleFromDirection,
    destinationParam_d_verticalAngleTowards as verticalAngleTowards,
    destinationParam_d_verticalFacingAngleOf as verticalFacingAngleOf,
    destinationParam_d_verticalSpeedOf as verticalSpeedOf,
    destinationParam_d_serverLoad as serverLoad,
    destinationParam_d_serverLoadAverage as serverLoadAverage,
    destinationParam_d_serverLoadPeak as serverLoadPeak,
    destinationParam_d_vector as vector,
    destinationParam_d_localVectorOf as localVectorOf,
    destinationParam_d_worldVectorOf as worldVectorOf,
    destinationParam_d_vectorTowards as vectorTowards,
    destinationParam_d_backward as backward,
    destinationParam_d_crossProduct as crossProduct,
    destinationParam_d_directionFromAngles as directionFromAngles,
    destinationParam_d_directionTowards as directionTowards,
    destinationParam_d_dotProduct as dotProduct,
    destinationParam_d_down as down,
    destinationParam_d_facingDirectionOf as facingDirectionOf,
    destinationParam_d_flagPosition as flagPosition,
    destinationParam_d_forward as forward,
    destinationParam_d_left as left,
    destinationParam_d_nearestWalkablePosition as nearestWalkablePosition,
    destinationParam_d_normalize as normalize,
    destinationParam_d_objectivePosition as objectivePosition,
    destinationParam_d_payloadPosition as payloadPosition,
    destinationParam_d_positionOf as positionOf,
    destinationParam_d_rayCastHitNormal as rayCastHitNormal,
    destinationParam_d_rayCastHitPlayer as rayCastHitPlayer,
    destinationParam_d_rayCastHitPosition as rayCastHitPosition,
    destinationParam_d_right as right,
    destinationParam_d_throttleOf as throttleOf,
    destinationParam_d_totalTimeElapsed as totalTimeElapsed,
    destinationParam_d_up as up,
    destinationParam_d_velocityOf as velocityOf,
    destinationParam_d_xComponentOf as xComponentOf,
    destinationParam_d_yComponentOf as yComponentOf,
    destinationParam_d_zComponentOf as zComponentOf,
  };
}



declare const divide_d_number: typeof number;
declare const divide_d_add: typeof add;
declare const divide_d_angleDifference: typeof angleDifference;
declare const divide_d_angleBetweenVectors: typeof angleBetweenVectors;
declare const divide_d_altitudeOf: typeof altitudeOf;
declare const divide_d_countOf: typeof countOf;
declare const divide_d_arccosineInDegrees: typeof arccosineInDegrees;
declare const divide_d_arccosineInRadians: typeof arccosineInRadians;
declare const divide_d_arcsineInDegrees: typeof arcsineInDegrees;
declare const divide_d_arcsineInRadians: typeof arcsineInRadians;
declare const divide_d_arctangentInDegrees: typeof arctangentInDegrees;
declare const divide_d_arctangentInRadians: typeof arctangentInRadians;
declare const divide_d_cosineFromDegrees: typeof cosineFromDegrees;
declare const divide_d_cosineFromRadians: typeof cosineFromRadians;
declare const divide_d_controlModeScoringPercentage: typeof controlModeScoringPercentage;
declare const divide_d_globalVariable: typeof globalVariable;
declare const divide_d_playerVariable: typeof playerVariable;
declare const divide_d_distanceBetween: typeof distanceBetween;
declare const divide_d_divide: typeof divide;
declare const divide_d_eventDamage: typeof eventDamage;
declare const divide_d_eyePosition: typeof eyePosition;
declare const divide_d_health: typeof health;
declare const divide_d_horizontalAngleFromDirection: typeof horizontalAngleFromDirection;
declare const divide_d_horizontalAngleTowards: typeof horizontalAngleTowards;
declare const divide_d_horizontalFacingAngleOf: typeof horizontalFacingAngleOf;
declare const divide_d_horizontalSpeedOf: typeof horizontalSpeedOf;
declare const divide_d_indexOfArrayValue: typeof indexOfArrayValue;
declare const divide_d_lastDamageModificationId: typeof lastDamageModificationId;
declare const divide_d_lastDamageOverTimeId: typeof lastDamageOverTimeId;
declare const divide_d_lastHealOverTimeId: typeof lastHealOverTimeId;
declare const divide_d_lastTextId: typeof lastTextId;
declare const divide_d_matchRound: typeof matchRound;
declare const divide_d_max: typeof max;
declare const divide_d_maxHealth: typeof maxHealth;
declare const divide_d_min: typeof min;
declare const divide_d_modulo: typeof modulo;
declare const divide_d_normalizedHealth: typeof normalizedHealth;
declare const divide_d_numberOfDeadPlayers: typeof numberOfDeadPlayers;
declare const divide_d_numberOfDeaths: typeof numberOfDeaths;
declare const divide_d_numberOfEliminations: typeof numberOfEliminations;
declare const divide_d_numberOfFinalBlows: typeof numberOfFinalBlows;
declare const divide_d_numberOfHeroes: typeof numberOfHeroes;
declare const divide_d_numberOfLivingPlayers: typeof numberOfLivingPlayers;
declare const divide_d_numberOfPlayers: typeof numberOfPlayers;
declare const divide_d_numberOfPlayersOnObjective: typeof numberOfPlayersOnObjective;
declare const divide_d_objectiveIndex: typeof objectiveIndex;
declare const divide_d_payloadProgressPercentage: typeof payloadProgressPercentage;
declare const divide_d_pointCapturePercentage: typeof pointCapturePercentage;
declare const divide_d_raiseToPower: typeof raiseToPower;
declare const divide_d_randomInteger: typeof randomInteger;
declare const divide_d_randomReal: typeof randomReal;
declare const divide_d_roundToInteger: typeof roundToInteger;
declare const divide_d_scoreOf: typeof scoreOf;
declare const divide_d_sineFromDegrees: typeof sineFromDegrees;
declare const divide_d_sineFromRadians: typeof sineFromRadians;
declare const divide_d_slotOf: typeof slotOf;
declare const divide_d_speedOf: typeof speedOf;
declare const divide_d_speedOfInDirection: typeof speedOfInDirection;
declare const divide_d_squareRoot: typeof squareRoot;
declare const divide_d_subtract: typeof subtract;
declare const divide_d_tangentFromDegrees: typeof tangentFromDegrees;
declare const divide_d_tangentFromRadians: typeof tangentFromRadians;
declare const divide_d_teamScore: typeof teamScore;
declare const divide_d_ultimateChargePercent: typeof ultimateChargePercent;
declare const divide_d_verticalAngleFromDirection: typeof verticalAngleFromDirection;
declare const divide_d_verticalAngleTowards: typeof verticalAngleTowards;
declare const divide_d_verticalFacingAngleOf: typeof verticalFacingAngleOf;
declare const divide_d_verticalSpeedOf: typeof verticalSpeedOf;
declare const divide_d_serverLoad: typeof serverLoad;
declare const divide_d_serverLoadAverage: typeof serverLoadAverage;
declare const divide_d_serverLoadPeak: typeof serverLoadPeak;
declare const divide_d_vector: typeof vector;
declare const divide_d_localVectorOf: typeof localVectorOf;
declare const divide_d_worldVectorOf: typeof worldVectorOf;
declare const divide_d_vectorTowards: typeof vectorTowards;
declare const divide_d_backward: typeof backward;
declare const divide_d_crossProduct: typeof crossProduct;
declare const divide_d_directionFromAngles: typeof directionFromAngles;
declare const divide_d_directionTowards: typeof directionTowards;
declare const divide_d_dotProduct: typeof dotProduct;
declare const divide_d_down: typeof down;
declare const divide_d_facingDirectionOf: typeof facingDirectionOf;
declare const divide_d_flagPosition: typeof flagPosition;
declare const divide_d_forward: typeof forward;
declare const divide_d_left: typeof left;
declare const divide_d_nearestWalkablePosition: typeof nearestWalkablePosition;
declare const divide_d_normalize: typeof normalize;
declare const divide_d_objectivePosition: typeof objectivePosition;
declare const divide_d_payloadPosition: typeof payloadPosition;
declare const divide_d_positionOf: typeof positionOf;
declare const divide_d_rayCastHitNormal: typeof rayCastHitNormal;
declare const divide_d_rayCastHitPlayer: typeof rayCastHitPlayer;
declare const divide_d_rayCastHitPosition: typeof rayCastHitPosition;
declare const divide_d_right: typeof right;
declare const divide_d_throttleOf: typeof throttleOf;
declare const divide_d_totalTimeElapsed: typeof totalTimeElapsed;
declare const divide_d_up: typeof up;
declare const divide_d_velocityOf: typeof velocityOf;
declare const divide_d_xComponentOf: typeof xComponentOf;
declare const divide_d_yComponentOf: typeof yComponentOf;
declare const divide_d_zComponentOf: typeof zComponentOf;
declare namespace divide_d {
  export {
    divide_d_number as number,
    divide_d_add as add,
    divide_d_angleDifference as angleDifference,
    divide_d_angleBetweenVectors as angleBetweenVectors,
    divide_d_altitudeOf as altitudeOf,
    divide_d_countOf as countOf,
    divide_d_arccosineInDegrees as arccosineInDegrees,
    divide_d_arccosineInRadians as arccosineInRadians,
    divide_d_arcsineInDegrees as arcsineInDegrees,
    divide_d_arcsineInRadians as arcsineInRadians,
    divide_d_arctangentInDegrees as arctangentInDegrees,
    divide_d_arctangentInRadians as arctangentInRadians,
    divide_d_cosineFromDegrees as cosineFromDegrees,
    divide_d_cosineFromRadians as cosineFromRadians,
    divide_d_controlModeScoringPercentage as controlModeScoringPercentage,
    divide_d_globalVariable as globalVariable,
    divide_d_playerVariable as playerVariable,
    divide_d_distanceBetween as distanceBetween,
    divide_d_divide as divide,
    divide_d_eventDamage as eventDamage,
    divide_d_eyePosition as eyePosition,
    divide_d_health as health,
    divide_d_horizontalAngleFromDirection as horizontalAngleFromDirection,
    divide_d_horizontalAngleTowards as horizontalAngleTowards,
    divide_d_horizontalFacingAngleOf as horizontalFacingAngleOf,
    divide_d_horizontalSpeedOf as horizontalSpeedOf,
    divide_d_indexOfArrayValue as indexOfArrayValue,
    divide_d_lastDamageModificationId as lastDamageModificationId,
    divide_d_lastDamageOverTimeId as lastDamageOverTimeId,
    divide_d_lastHealOverTimeId as lastHealOverTimeId,
    divide_d_lastTextId as lastTextId,
    divide_d_matchRound as matchRound,
    divide_d_max as max,
    divide_d_maxHealth as maxHealth,
    divide_d_min as min,
    divide_d_modulo as modulo,
    divide_d_normalizedHealth as normalizedHealth,
    divide_d_numberOfDeadPlayers as numberOfDeadPlayers,
    divide_d_numberOfDeaths as numberOfDeaths,
    divide_d_numberOfEliminations as numberOfEliminations,
    divide_d_numberOfFinalBlows as numberOfFinalBlows,
    divide_d_numberOfHeroes as numberOfHeroes,
    divide_d_numberOfLivingPlayers as numberOfLivingPlayers,
    divide_d_numberOfPlayers as numberOfPlayers,
    divide_d_numberOfPlayersOnObjective as numberOfPlayersOnObjective,
    divide_d_objectiveIndex as objectiveIndex,
    divide_d_payloadProgressPercentage as payloadProgressPercentage,
    divide_d_pointCapturePercentage as pointCapturePercentage,
    divide_d_raiseToPower as raiseToPower,
    divide_d_randomInteger as randomInteger,
    divide_d_randomReal as randomReal,
    divide_d_roundToInteger as roundToInteger,
    divide_d_scoreOf as scoreOf,
    divide_d_sineFromDegrees as sineFromDegrees,
    divide_d_sineFromRadians as sineFromRadians,
    divide_d_slotOf as slotOf,
    divide_d_speedOf as speedOf,
    divide_d_speedOfInDirection as speedOfInDirection,
    divide_d_squareRoot as squareRoot,
    divide_d_subtract as subtract,
    divide_d_tangentFromDegrees as tangentFromDegrees,
    divide_d_tangentFromRadians as tangentFromRadians,
    divide_d_teamScore as teamScore,
    divide_d_ultimateChargePercent as ultimateChargePercent,
    divide_d_verticalAngleFromDirection as verticalAngleFromDirection,
    divide_d_verticalAngleTowards as verticalAngleTowards,
    divide_d_verticalFacingAngleOf as verticalFacingAngleOf,
    divide_d_verticalSpeedOf as verticalSpeedOf,
    divide_d_serverLoad as serverLoad,
    divide_d_serverLoadAverage as serverLoadAverage,
    divide_d_serverLoadPeak as serverLoadPeak,
    divide_d_vector as vector,
    divide_d_localVectorOf as localVectorOf,
    divide_d_worldVectorOf as worldVectorOf,
    divide_d_vectorTowards as vectorTowards,
    divide_d_backward as backward,
    divide_d_crossProduct as crossProduct,
    divide_d_directionFromAngles as directionFromAngles,
    divide_d_directionTowards as directionTowards,
    divide_d_dotProduct as dotProduct,
    divide_d_down as down,
    divide_d_facingDirectionOf as facingDirectionOf,
    divide_d_flagPosition as flagPosition,
    divide_d_forward as forward,
    divide_d_left as left,
    divide_d_nearestWalkablePosition as nearestWalkablePosition,
    divide_d_normalize as normalize,
    divide_d_objectivePosition as objectivePosition,
    divide_d_payloadPosition as payloadPosition,
    divide_d_positionOf as positionOf,
    divide_d_rayCastHitNormal as rayCastHitNormal,
    divide_d_rayCastHitPlayer as rayCastHitPlayer,
    divide_d_rayCastHitPosition as rayCastHitPosition,
    divide_d_right as right,
    divide_d_throttleOf as throttleOf,
    divide_d_totalTimeElapsed as totalTimeElapsed,
    divide_d_up as up,
    divide_d_velocityOf as velocityOf,
    divide_d_xComponentOf as xComponentOf,
    divide_d_yComponentOf as yComponentOf,
    divide_d_zComponentOf as zComponentOf,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$d: (str: ValueEffectType) => ValueEffectType;

declare namespace effect_d {
  export {
    Default$d as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$e: (str: ValueEffectReevaluationType) => ValueEffectReevaluationType;

declare namespace effectReevaluation_d {
  export {
    Default$e as Default
  };
}

/**
 * EVENT PLAYER 또는 전역 레벨에서 가장 마지막에
 * 생성된 효과 또는 아이콘 개체에 대한 참조입니다.
 */
declare const lastCreatedEntity: (


) => string;



declare const entity_d_eventPlayer: typeof eventPlayer;
declare const entity_d_victim: typeof victim;
declare const entity_d_attacker: typeof attacker;
declare const entity_d_closestPlayerTo: typeof closestPlayerTo;
declare const entity_d_globalVariable: typeof globalVariable;
declare const entity_d_playerVariable: typeof playerVariable;
declare const entity_d_farthestPlayerFrom: typeof farthestPlayerFrom;
declare const entity_d_playerCarryingFlag: typeof playerCarryingFlag;
declare const entity_d_playerClosestToReticle: typeof playerClosestToReticle;
declare const entity_d_lastCreatedEntity: typeof lastCreatedEntity;
declare namespace entity_d {
  export {
    entity_d_eventPlayer as eventPlayer,
    entity_d_victim as victim,
    entity_d_attacker as attacker,
    entity_d_closestPlayerTo as closestPlayerTo,
    entity_d_globalVariable as globalVariable,
    entity_d_playerVariable as playerVariable,
    entity_d_farthestPlayerFrom as farthestPlayerFrom,
    entity_d_playerCarryingFlag as playerCarryingFlag,
    entity_d_playerClosestToReticle as playerClosestToReticle,
    entity_d_lastCreatedEntity as lastCreatedEntity,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$f: (str: ValueFacingReevaluationType) => ValueFacingReevaluationType;

declare namespace facingReevaluation_d {
  export {
    Default$f as Default
  };
}



declare const healOverTimeId_d_lastHealOverTimeId: typeof lastHealOverTimeId;
declare const healOverTimeId_d_globalVariable: typeof globalVariable;
declare const healOverTimeId_d_playerVariable: typeof playerVariable;
declare namespace healOverTimeId_d {
  export {
    healOverTimeId_d_lastHealOverTimeId as lastHealOverTimeId,
    healOverTimeId_d_globalVariable as globalVariable,
    healOverTimeId_d_playerVariable as playerVariable,
  };
}

/**
 * 영웅 상수입니다.
 */
declare const hero: (
/**
 * - `Type.HeroConstant.`
 */
hero: string | number | any[]
) => string;

/**
 * 플레이어가 현재 사용하는 영웅입니다.
 */
declare const heroOf: (
/**
 * 영웅 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;



declare const hero_d_hero: typeof hero;
declare const hero_d_heroOf: typeof heroOf;
declare namespace hero_d {
  export {
    hero_d_hero as hero,
    hero_d_heroOf as heroOf,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$g: (str: ValueObjectiveDescriptionReevaluationType) => ValueObjectiveDescriptionReevaluationType;

declare namespace hudTextReevaluation_d {
  export {
    Default$g as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$h: (str: ValueIconType) => ValueIconType;

declare namespace icon_d {
  export {
    Default$h as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$i: (str: ValueIconReevaluationType) => ValueIconReevaluationType;

declare namespace iconReevaluation_d {
  export {
    Default$i as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$j: (str: ValueInvisibleToType) => ValueInvisibleToType;

declare namespace invisibleTo_d {
  export {
    Default$j as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$k: (str: ValueInWorldTextReevaluationType) => ValueInWorldTextReevaluationType;

declare namespace inWorldTextReevaluation_d {
  export {
    Default$k as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$l: (str: ValueLocationType) => ValueLocationType;

declare namespace location_d {
  export {
    Default$l as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$m: (str: ValueLosCheckType) => ValueLosCheckType;

declare namespace losCheck_d {
  export {
    Default$m as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$n: (str: ValueMotionType) => ValueMotionType;

declare namespace motion_d {
  export {
    Default$n as Default
  };
}



declare const multiply_d_number: typeof number;
declare const multiply_d_add: typeof add;
declare const multiply_d_angleDifference: typeof angleDifference;
declare const multiply_d_angleBetweenVectors: typeof angleBetweenVectors;
declare const multiply_d_altitudeOf: typeof altitudeOf;
declare const multiply_d_countOf: typeof countOf;
declare const multiply_d_arccosineInDegrees: typeof arccosineInDegrees;
declare const multiply_d_arccosineInRadians: typeof arccosineInRadians;
declare const multiply_d_arcsineInDegrees: typeof arcsineInDegrees;
declare const multiply_d_arcsineInRadians: typeof arcsineInRadians;
declare const multiply_d_arctangentInDegrees: typeof arctangentInDegrees;
declare const multiply_d_arctangentInRadians: typeof arctangentInRadians;
declare const multiply_d_cosineFromDegrees: typeof cosineFromDegrees;
declare const multiply_d_cosineFromRadians: typeof cosineFromRadians;
declare const multiply_d_controlModeScoringPercentage: typeof controlModeScoringPercentage;
declare const multiply_d_globalVariable: typeof globalVariable;
declare const multiply_d_playerVariable: typeof playerVariable;
declare const multiply_d_distanceBetween: typeof distanceBetween;
declare const multiply_d_divide: typeof divide;
declare const multiply_d_eventDamage: typeof eventDamage;
declare const multiply_d_eyePosition: typeof eyePosition;
declare const multiply_d_health: typeof health;
declare const multiply_d_horizontalAngleFromDirection: typeof horizontalAngleFromDirection;
declare const multiply_d_horizontalAngleTowards: typeof horizontalAngleTowards;
declare const multiply_d_horizontalFacingAngleOf: typeof horizontalFacingAngleOf;
declare const multiply_d_horizontalSpeedOf: typeof horizontalSpeedOf;
declare const multiply_d_indexOfArrayValue: typeof indexOfArrayValue;
declare const multiply_d_lastDamageModificationId: typeof lastDamageModificationId;
declare const multiply_d_lastDamageOverTimeId: typeof lastDamageOverTimeId;
declare const multiply_d_lastHealOverTimeId: typeof lastHealOverTimeId;
declare const multiply_d_lastTextId: typeof lastTextId;
declare const multiply_d_matchRound: typeof matchRound;
declare const multiply_d_max: typeof max;
declare const multiply_d_maxHealth: typeof maxHealth;
declare const multiply_d_min: typeof min;
declare const multiply_d_modulo: typeof modulo;
declare const multiply_d_normalizedHealth: typeof normalizedHealth;
declare const multiply_d_numberOfDeadPlayers: typeof numberOfDeadPlayers;
declare const multiply_d_numberOfDeaths: typeof numberOfDeaths;
declare const multiply_d_numberOfEliminations: typeof numberOfEliminations;
declare const multiply_d_numberOfFinalBlows: typeof numberOfFinalBlows;
declare const multiply_d_numberOfHeroes: typeof numberOfHeroes;
declare const multiply_d_numberOfLivingPlayers: typeof numberOfLivingPlayers;
declare const multiply_d_numberOfPlayers: typeof numberOfPlayers;
declare const multiply_d_numberOfPlayersOnObjective: typeof numberOfPlayersOnObjective;
declare const multiply_d_objectiveIndex: typeof objectiveIndex;
declare const multiply_d_payloadProgressPercentage: typeof payloadProgressPercentage;
declare const multiply_d_pointCapturePercentage: typeof pointCapturePercentage;
declare const multiply_d_raiseToPower: typeof raiseToPower;
declare const multiply_d_randomInteger: typeof randomInteger;
declare const multiply_d_randomReal: typeof randomReal;
declare const multiply_d_roundToInteger: typeof roundToInteger;
declare const multiply_d_scoreOf: typeof scoreOf;
declare const multiply_d_sineFromDegrees: typeof sineFromDegrees;
declare const multiply_d_sineFromRadians: typeof sineFromRadians;
declare const multiply_d_slotOf: typeof slotOf;
declare const multiply_d_speedOf: typeof speedOf;
declare const multiply_d_speedOfInDirection: typeof speedOfInDirection;
declare const multiply_d_squareRoot: typeof squareRoot;
declare const multiply_d_subtract: typeof subtract;
declare const multiply_d_tangentFromDegrees: typeof tangentFromDegrees;
declare const multiply_d_tangentFromRadians: typeof tangentFromRadians;
declare const multiply_d_teamScore: typeof teamScore;
declare const multiply_d_ultimateChargePercent: typeof ultimateChargePercent;
declare const multiply_d_verticalAngleFromDirection: typeof verticalAngleFromDirection;
declare const multiply_d_verticalAngleTowards: typeof verticalAngleTowards;
declare const multiply_d_verticalFacingAngleOf: typeof verticalFacingAngleOf;
declare const multiply_d_verticalSpeedOf: typeof verticalSpeedOf;
declare const multiply_d_serverLoad: typeof serverLoad;
declare const multiply_d_serverLoadAverage: typeof serverLoadAverage;
declare const multiply_d_serverLoadPeak: typeof serverLoadPeak;
declare const multiply_d_vector: typeof vector;
declare const multiply_d_localVectorOf: typeof localVectorOf;
declare const multiply_d_worldVectorOf: typeof worldVectorOf;
declare const multiply_d_vectorTowards: typeof vectorTowards;
declare const multiply_d_backward: typeof backward;
declare const multiply_d_crossProduct: typeof crossProduct;
declare const multiply_d_directionFromAngles: typeof directionFromAngles;
declare const multiply_d_directionTowards: typeof directionTowards;
declare const multiply_d_dotProduct: typeof dotProduct;
declare const multiply_d_down: typeof down;
declare const multiply_d_facingDirectionOf: typeof facingDirectionOf;
declare const multiply_d_flagPosition: typeof flagPosition;
declare const multiply_d_forward: typeof forward;
declare const multiply_d_left: typeof left;
declare const multiply_d_nearestWalkablePosition: typeof nearestWalkablePosition;
declare const multiply_d_normalize: typeof normalize;
declare const multiply_d_objectivePosition: typeof objectivePosition;
declare const multiply_d_payloadPosition: typeof payloadPosition;
declare const multiply_d_positionOf: typeof positionOf;
declare const multiply_d_rayCastHitNormal: typeof rayCastHitNormal;
declare const multiply_d_rayCastHitPlayer: typeof rayCastHitPlayer;
declare const multiply_d_rayCastHitPosition: typeof rayCastHitPosition;
declare const multiply_d_right: typeof right;
declare const multiply_d_throttleOf: typeof throttleOf;
declare const multiply_d_totalTimeElapsed: typeof totalTimeElapsed;
declare const multiply_d_up: typeof up;
declare const multiply_d_velocityOf: typeof velocityOf;
declare const multiply_d_xComponentOf: typeof xComponentOf;
declare const multiply_d_yComponentOf: typeof yComponentOf;
declare const multiply_d_zComponentOf: typeof zComponentOf;
declare namespace multiply_d {
  export {
    multiply_d_number as number,
    multiply_d_add as add,
    multiply_d_angleDifference as angleDifference,
    multiply_d_angleBetweenVectors as angleBetweenVectors,
    multiply_d_altitudeOf as altitudeOf,
    multiply_d_countOf as countOf,
    multiply_d_arccosineInDegrees as arccosineInDegrees,
    multiply_d_arccosineInRadians as arccosineInRadians,
    multiply_d_arcsineInDegrees as arcsineInDegrees,
    multiply_d_arcsineInRadians as arcsineInRadians,
    multiply_d_arctangentInDegrees as arctangentInDegrees,
    multiply_d_arctangentInRadians as arctangentInRadians,
    multiply_d_cosineFromDegrees as cosineFromDegrees,
    multiply_d_cosineFromRadians as cosineFromRadians,
    multiply_d_controlModeScoringPercentage as controlModeScoringPercentage,
    multiply_d_globalVariable as globalVariable,
    multiply_d_playerVariable as playerVariable,
    multiply_d_distanceBetween as distanceBetween,
    multiply_d_divide as divide,
    multiply_d_eventDamage as eventDamage,
    multiply_d_eyePosition as eyePosition,
    multiply_d_health as health,
    multiply_d_horizontalAngleFromDirection as horizontalAngleFromDirection,
    multiply_d_horizontalAngleTowards as horizontalAngleTowards,
    multiply_d_horizontalFacingAngleOf as horizontalFacingAngleOf,
    multiply_d_horizontalSpeedOf as horizontalSpeedOf,
    multiply_d_indexOfArrayValue as indexOfArrayValue,
    multiply_d_lastDamageModificationId as lastDamageModificationId,
    multiply_d_lastDamageOverTimeId as lastDamageOverTimeId,
    multiply_d_lastHealOverTimeId as lastHealOverTimeId,
    multiply_d_lastTextId as lastTextId,
    multiply_d_matchRound as matchRound,
    multiply_d_max as max,
    multiply_d_maxHealth as maxHealth,
    multiply_d_min as min,
    multiply_d_modulo as modulo,
    multiply_d_normalizedHealth as normalizedHealth,
    multiply_d_numberOfDeadPlayers as numberOfDeadPlayers,
    multiply_d_numberOfDeaths as numberOfDeaths,
    multiply_d_numberOfEliminations as numberOfEliminations,
    multiply_d_numberOfFinalBlows as numberOfFinalBlows,
    multiply_d_numberOfHeroes as numberOfHeroes,
    multiply_d_numberOfLivingPlayers as numberOfLivingPlayers,
    multiply_d_numberOfPlayers as numberOfPlayers,
    multiply_d_numberOfPlayersOnObjective as numberOfPlayersOnObjective,
    multiply_d_objectiveIndex as objectiveIndex,
    multiply_d_payloadProgressPercentage as payloadProgressPercentage,
    multiply_d_pointCapturePercentage as pointCapturePercentage,
    multiply_d_raiseToPower as raiseToPower,
    multiply_d_randomInteger as randomInteger,
    multiply_d_randomReal as randomReal,
    multiply_d_roundToInteger as roundToInteger,
    multiply_d_scoreOf as scoreOf,
    multiply_d_sineFromDegrees as sineFromDegrees,
    multiply_d_sineFromRadians as sineFromRadians,
    multiply_d_slotOf as slotOf,
    multiply_d_speedOf as speedOf,
    multiply_d_speedOfInDirection as speedOfInDirection,
    multiply_d_squareRoot as squareRoot,
    multiply_d_subtract as subtract,
    multiply_d_tangentFromDegrees as tangentFromDegrees,
    multiply_d_tangentFromRadians as tangentFromRadians,
    multiply_d_teamScore as teamScore,
    multiply_d_ultimateChargePercent as ultimateChargePercent,
    multiply_d_verticalAngleFromDirection as verticalAngleFromDirection,
    multiply_d_verticalAngleTowards as verticalAngleTowards,
    multiply_d_verticalFacingAngleOf as verticalFacingAngleOf,
    multiply_d_verticalSpeedOf as verticalSpeedOf,
    multiply_d_serverLoad as serverLoad,
    multiply_d_serverLoadAverage as serverLoadAverage,
    multiply_d_serverLoadPeak as serverLoadPeak,
    multiply_d_vector as vector,
    multiply_d_localVectorOf as localVectorOf,
    multiply_d_worldVectorOf as worldVectorOf,
    multiply_d_vectorTowards as vectorTowards,
    multiply_d_backward as backward,
    multiply_d_crossProduct as crossProduct,
    multiply_d_directionFromAngles as directionFromAngles,
    multiply_d_directionTowards as directionTowards,
    multiply_d_dotProduct as dotProduct,
    multiply_d_down as down,
    multiply_d_facingDirectionOf as facingDirectionOf,
    multiply_d_flagPosition as flagPosition,
    multiply_d_forward as forward,
    multiply_d_left as left,
    multiply_d_nearestWalkablePosition as nearestWalkablePosition,
    multiply_d_normalize as normalize,
    multiply_d_objectivePosition as objectivePosition,
    multiply_d_payloadPosition as payloadPosition,
    multiply_d_positionOf as positionOf,
    multiply_d_rayCastHitNormal as rayCastHitNormal,
    multiply_d_rayCastHitPlayer as rayCastHitPlayer,
    multiply_d_rayCastHitPosition as rayCastHitPosition,
    multiply_d_right as right,
    multiply_d_throttleOf as throttleOf,
    multiply_d_totalTimeElapsed as totalTimeElapsed,
    multiply_d_up as up,
    multiply_d_velocityOf as velocityOf,
    multiply_d_xComponentOf as xComponentOf,
    multiply_d_yComponentOf as yComponentOf,
    multiply_d_zComponentOf as zComponentOf,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$o: (str: ValueObjectiveDescriptionReevaluationType) => ValueObjectiveDescriptionReevaluationType;

declare namespace objectiveDescriptionReevaluation_d {
  export {
    Default$o as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$p: (str: ValueOperatorType) => ValueOperatorType;

declare namespace operator_d {
  export {
    Default$p as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$q: (str: ValuePlayEffect) => ValuePlayEffect;

declare namespace playEffect_d {
  export {
    Default$q as Default
  };
}



declare const playersParam_d_eventPlayer: typeof eventPlayer;
declare const playersParam_d_victim: typeof victim;
declare const playersParam_d_attacker: typeof attacker;
declare const playersParam_d_closestPlayerTo: typeof closestPlayerTo;
declare const playersParam_d_globalVariable: typeof globalVariable;
declare const playersParam_d_playerVariable: typeof playerVariable;
declare const playersParam_d_farthestPlayerFrom: typeof farthestPlayerFrom;
declare const playersParam_d_playerCarryingFlag: typeof playerCarryingFlag;
declare const playersParam_d_playerClosestToReticle: typeof playerClosestToReticle;
declare const playersParam_d_allDeadPlayers: typeof allDeadPlayers;
declare const playersParam_d_allHeroes: typeof allHeroes;
declare const playersParam_d_allLivingPlayers: typeof allLivingPlayers;
declare const playersParam_d_allPlayers: typeof allPlayers;
declare const playersParam_d_allPlayersNotOnObjective: typeof allPlayersNotOnObjective;
declare const playersParam_d_allPlayersOnObjective: typeof allPlayersOnObjective;
declare const playersParam_d_allowedHeroes: typeof allowedHeroes;
declare const playersParam_d_arraySlice: typeof arraySlice;
declare const playersParam_d_emptyArray: typeof emptyArray;
declare const playersParam_d_filteredArray: typeof filteredArray;
declare const playersParam_d_playersInSlot: typeof playersInSlot;
declare const playersParam_d_playersInViewAngle: typeof playersInViewAngle;
declare const playersParam_d_playersOnHero: typeof playersOnHero;
declare const playersParam_d_playersWithinRadius: typeof playersWithinRadius;
declare const playersParam_d_randomizedArray: typeof randomizedArray;
declare const playersParam_d_removeFromArray: typeof removeFromArray;
declare const playersParam_d_sortedArray: typeof sortedArray;
declare namespace playersParam_d {
  export {
    playersParam_d_eventPlayer as eventPlayer,
    playersParam_d_victim as victim,
    playersParam_d_attacker as attacker,
    playersParam_d_closestPlayerTo as closestPlayerTo,
    playersParam_d_globalVariable as globalVariable,
    playersParam_d_playerVariable as playerVariable,
    playersParam_d_farthestPlayerFrom as farthestPlayerFrom,
    playersParam_d_playerCarryingFlag as playerCarryingFlag,
    playersParam_d_playerClosestToReticle as playerClosestToReticle,
    playersParam_d_allDeadPlayers as allDeadPlayers,
    playersParam_d_allHeroes as allHeroes,
    playersParam_d_allLivingPlayers as allLivingPlayers,
    playersParam_d_allPlayers as allPlayers,
    playersParam_d_allPlayersNotOnObjective as allPlayersNotOnObjective,
    playersParam_d_allPlayersOnObjective as allPlayersOnObjective,
    playersParam_d_allowedHeroes as allowedHeroes,
    playersParam_d_arraySlice as arraySlice,
    playersParam_d_emptyArray as emptyArray,
    playersParam_d_filteredArray as filteredArray,
    playersParam_d_playersInSlot as playersInSlot,
    playersParam_d_playersInViewAngle as playersInViewAngle,
    playersParam_d_playersOnHero as playersOnHero,
    playersParam_d_playersWithinRadius as playersWithinRadius,
    playersParam_d_randomizedArray as randomizedArray,
    playersParam_d_removeFromArray as removeFromArray,
    playersParam_d_sortedArray as sortedArray,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$r: (str: ValueReevaluationType) => ValueReevaluationType;

declare namespace reevaluation_d {
  export {
    Default$r as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$s: (str: ValueRelativeType) => ValueRelativeType;

declare namespace relative_d {
  export {
    Default$s as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$t: (str: ValueRoundingType) => ValueRoundingType;

declare namespace roundingType_d {
  export {
    Default$t as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$u: (str: ValueSpectatorsType) => ValueSpectatorsType;

declare namespace spectators_d {
  export {
    Default$u as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$v: (str: ValueStartAcceleratingReevaluationType) => ValueStartAcceleratingReevaluationType;

declare namespace startAcceleratingReevaluation_d {
  export {
    Default$v as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$w: (str: ValueStartThrottleBehaviorType) => ValueStartThrottleBehaviorType;

declare namespace startThrottleBehavior_d {
  export {
    Default$w as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$x: (str: ValueStartThrottleReevaluationType) => ValueStartThrottleReevaluationType;

declare namespace startThrottleReevaluation_d {
  export {
    Default$x as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$y: (str: ValueStatusType) => ValueStatusType;

declare namespace status_d {
  export {
    Default$y as Default
  };
}

/**
 * HERO 매개변수를 아이콘으로 표시할 문자열로 변환합니다.
 */
declare const heroIconString: (
/**
 * - `Type.Hero.`
 */
value: string | number | any[]
) => string;

/**
 * 선택한 텍스트와 지정된 값으로 구성된 텍스트입니다.
 */
declare const string: (
/**
 * 결과로 표시되는 텍스트입니다.
 * 중괄호 안의 숫자는 대응값으로 교체됩니다.
 * - `Type.Text.`
 */
string: string | number | any[],
/**
 * 텍스트로 전환되어 {0}을 대체할 값입니다.
 * - `Type.StringParam.`
 */
_0: string | number | any[],
/**
 * 텍스트로 전환되어 {1}을 대체할 값입니다.
 * - `Type.StringParam.`
 */
_1: string | number | any[],
/**
 * 텍스트로 전환되어 {2}를 대체할 값입니다.
 * - `Type.StringParam.`
 */
_2: string | number | any[]
) => string;



declare const string_d_heroIconString: typeof heroIconString;
declare const string_d_string: typeof string;
declare namespace string_d {
  export {
    string_d_heroIconString as heroIconString,
    string_d_string as string,
  };
}



declare const stringParam_d_heroIconString: typeof heroIconString;
declare const stringParam_d_string: typeof string;
declare const stringParam_d_Null: typeof Null;
declare namespace stringParam_d {
  export {
    stringParam_d_heroIconString as heroIconString,
    stringParam_d_string as string,
    stringParam_d_Null as Null,
  };
}



declare const subtract_d_number: typeof number;
declare const subtract_d_add: typeof add;
declare const subtract_d_angleDifference: typeof angleDifference;
declare const subtract_d_angleBetweenVectors: typeof angleBetweenVectors;
declare const subtract_d_altitudeOf: typeof altitudeOf;
declare const subtract_d_countOf: typeof countOf;
declare const subtract_d_arccosineInDegrees: typeof arccosineInDegrees;
declare const subtract_d_arccosineInRadians: typeof arccosineInRadians;
declare const subtract_d_arcsineInDegrees: typeof arcsineInDegrees;
declare const subtract_d_arcsineInRadians: typeof arcsineInRadians;
declare const subtract_d_arctangentInDegrees: typeof arctangentInDegrees;
declare const subtract_d_arctangentInRadians: typeof arctangentInRadians;
declare const subtract_d_cosineFromDegrees: typeof cosineFromDegrees;
declare const subtract_d_cosineFromRadians: typeof cosineFromRadians;
declare const subtract_d_controlModeScoringPercentage: typeof controlModeScoringPercentage;
declare const subtract_d_globalVariable: typeof globalVariable;
declare const subtract_d_playerVariable: typeof playerVariable;
declare const subtract_d_distanceBetween: typeof distanceBetween;
declare const subtract_d_divide: typeof divide;
declare const subtract_d_eventDamage: typeof eventDamage;
declare const subtract_d_eyePosition: typeof eyePosition;
declare const subtract_d_health: typeof health;
declare const subtract_d_horizontalAngleFromDirection: typeof horizontalAngleFromDirection;
declare const subtract_d_horizontalAngleTowards: typeof horizontalAngleTowards;
declare const subtract_d_horizontalFacingAngleOf: typeof horizontalFacingAngleOf;
declare const subtract_d_horizontalSpeedOf: typeof horizontalSpeedOf;
declare const subtract_d_indexOfArrayValue: typeof indexOfArrayValue;
declare const subtract_d_lastDamageModificationId: typeof lastDamageModificationId;
declare const subtract_d_lastDamageOverTimeId: typeof lastDamageOverTimeId;
declare const subtract_d_lastHealOverTimeId: typeof lastHealOverTimeId;
declare const subtract_d_lastTextId: typeof lastTextId;
declare const subtract_d_matchRound: typeof matchRound;
declare const subtract_d_max: typeof max;
declare const subtract_d_maxHealth: typeof maxHealth;
declare const subtract_d_min: typeof min;
declare const subtract_d_modulo: typeof modulo;
declare const subtract_d_normalizedHealth: typeof normalizedHealth;
declare const subtract_d_numberOfDeadPlayers: typeof numberOfDeadPlayers;
declare const subtract_d_numberOfDeaths: typeof numberOfDeaths;
declare const subtract_d_numberOfEliminations: typeof numberOfEliminations;
declare const subtract_d_numberOfFinalBlows: typeof numberOfFinalBlows;
declare const subtract_d_numberOfHeroes: typeof numberOfHeroes;
declare const subtract_d_numberOfLivingPlayers: typeof numberOfLivingPlayers;
declare const subtract_d_numberOfPlayers: typeof numberOfPlayers;
declare const subtract_d_numberOfPlayersOnObjective: typeof numberOfPlayersOnObjective;
declare const subtract_d_objectiveIndex: typeof objectiveIndex;
declare const subtract_d_payloadProgressPercentage: typeof payloadProgressPercentage;
declare const subtract_d_pointCapturePercentage: typeof pointCapturePercentage;
declare const subtract_d_raiseToPower: typeof raiseToPower;
declare const subtract_d_randomInteger: typeof randomInteger;
declare const subtract_d_randomReal: typeof randomReal;
declare const subtract_d_roundToInteger: typeof roundToInteger;
declare const subtract_d_scoreOf: typeof scoreOf;
declare const subtract_d_sineFromDegrees: typeof sineFromDegrees;
declare const subtract_d_sineFromRadians: typeof sineFromRadians;
declare const subtract_d_slotOf: typeof slotOf;
declare const subtract_d_speedOf: typeof speedOf;
declare const subtract_d_speedOfInDirection: typeof speedOfInDirection;
declare const subtract_d_squareRoot: typeof squareRoot;
declare const subtract_d_subtract: typeof subtract;
declare const subtract_d_tangentFromDegrees: typeof tangentFromDegrees;
declare const subtract_d_tangentFromRadians: typeof tangentFromRadians;
declare const subtract_d_teamScore: typeof teamScore;
declare const subtract_d_ultimateChargePercent: typeof ultimateChargePercent;
declare const subtract_d_verticalAngleFromDirection: typeof verticalAngleFromDirection;
declare const subtract_d_verticalAngleTowards: typeof verticalAngleTowards;
declare const subtract_d_verticalFacingAngleOf: typeof verticalFacingAngleOf;
declare const subtract_d_verticalSpeedOf: typeof verticalSpeedOf;
declare const subtract_d_serverLoad: typeof serverLoad;
declare const subtract_d_serverLoadAverage: typeof serverLoadAverage;
declare const subtract_d_serverLoadPeak: typeof serverLoadPeak;
declare const subtract_d_vector: typeof vector;
declare const subtract_d_localVectorOf: typeof localVectorOf;
declare const subtract_d_worldVectorOf: typeof worldVectorOf;
declare const subtract_d_vectorTowards: typeof vectorTowards;
declare const subtract_d_backward: typeof backward;
declare const subtract_d_crossProduct: typeof crossProduct;
declare const subtract_d_directionFromAngles: typeof directionFromAngles;
declare const subtract_d_directionTowards: typeof directionTowards;
declare const subtract_d_dotProduct: typeof dotProduct;
declare const subtract_d_down: typeof down;
declare const subtract_d_facingDirectionOf: typeof facingDirectionOf;
declare const subtract_d_flagPosition: typeof flagPosition;
declare const subtract_d_forward: typeof forward;
declare const subtract_d_left: typeof left;
declare const subtract_d_nearestWalkablePosition: typeof nearestWalkablePosition;
declare const subtract_d_normalize: typeof normalize;
declare const subtract_d_objectivePosition: typeof objectivePosition;
declare const subtract_d_payloadPosition: typeof payloadPosition;
declare const subtract_d_positionOf: typeof positionOf;
declare const subtract_d_rayCastHitNormal: typeof rayCastHitNormal;
declare const subtract_d_rayCastHitPlayer: typeof rayCastHitPlayer;
declare const subtract_d_rayCastHitPosition: typeof rayCastHitPosition;
declare const subtract_d_right: typeof right;
declare const subtract_d_throttleOf: typeof throttleOf;
declare const subtract_d_totalTimeElapsed: typeof totalTimeElapsed;
declare const subtract_d_up: typeof up;
declare const subtract_d_velocityOf: typeof velocityOf;
declare const subtract_d_xComponentOf: typeof xComponentOf;
declare const subtract_d_yComponentOf: typeof yComponentOf;
declare const subtract_d_zComponentOf: typeof zComponentOf;
declare namespace subtract_d {
  export {
    subtract_d_number as number,
    subtract_d_add as add,
    subtract_d_angleDifference as angleDifference,
    subtract_d_angleBetweenVectors as angleBetweenVectors,
    subtract_d_altitudeOf as altitudeOf,
    subtract_d_countOf as countOf,
    subtract_d_arccosineInDegrees as arccosineInDegrees,
    subtract_d_arccosineInRadians as arccosineInRadians,
    subtract_d_arcsineInDegrees as arcsineInDegrees,
    subtract_d_arcsineInRadians as arcsineInRadians,
    subtract_d_arctangentInDegrees as arctangentInDegrees,
    subtract_d_arctangentInRadians as arctangentInRadians,
    subtract_d_cosineFromDegrees as cosineFromDegrees,
    subtract_d_cosineFromRadians as cosineFromRadians,
    subtract_d_controlModeScoringPercentage as controlModeScoringPercentage,
    subtract_d_globalVariable as globalVariable,
    subtract_d_playerVariable as playerVariable,
    subtract_d_distanceBetween as distanceBetween,
    subtract_d_divide as divide,
    subtract_d_eventDamage as eventDamage,
    subtract_d_eyePosition as eyePosition,
    subtract_d_health as health,
    subtract_d_horizontalAngleFromDirection as horizontalAngleFromDirection,
    subtract_d_horizontalAngleTowards as horizontalAngleTowards,
    subtract_d_horizontalFacingAngleOf as horizontalFacingAngleOf,
    subtract_d_horizontalSpeedOf as horizontalSpeedOf,
    subtract_d_indexOfArrayValue as indexOfArrayValue,
    subtract_d_lastDamageModificationId as lastDamageModificationId,
    subtract_d_lastDamageOverTimeId as lastDamageOverTimeId,
    subtract_d_lastHealOverTimeId as lastHealOverTimeId,
    subtract_d_lastTextId as lastTextId,
    subtract_d_matchRound as matchRound,
    subtract_d_max as max,
    subtract_d_maxHealth as maxHealth,
    subtract_d_min as min,
    subtract_d_modulo as modulo,
    subtract_d_normalizedHealth as normalizedHealth,
    subtract_d_numberOfDeadPlayers as numberOfDeadPlayers,
    subtract_d_numberOfDeaths as numberOfDeaths,
    subtract_d_numberOfEliminations as numberOfEliminations,
    subtract_d_numberOfFinalBlows as numberOfFinalBlows,
    subtract_d_numberOfHeroes as numberOfHeroes,
    subtract_d_numberOfLivingPlayers as numberOfLivingPlayers,
    subtract_d_numberOfPlayers as numberOfPlayers,
    subtract_d_numberOfPlayersOnObjective as numberOfPlayersOnObjective,
    subtract_d_objectiveIndex as objectiveIndex,
    subtract_d_payloadProgressPercentage as payloadProgressPercentage,
    subtract_d_pointCapturePercentage as pointCapturePercentage,
    subtract_d_raiseToPower as raiseToPower,
    subtract_d_randomInteger as randomInteger,
    subtract_d_randomReal as randomReal,
    subtract_d_roundToInteger as roundToInteger,
    subtract_d_scoreOf as scoreOf,
    subtract_d_sineFromDegrees as sineFromDegrees,
    subtract_d_sineFromRadians as sineFromRadians,
    subtract_d_slotOf as slotOf,
    subtract_d_speedOf as speedOf,
    subtract_d_speedOfInDirection as speedOfInDirection,
    subtract_d_squareRoot as squareRoot,
    subtract_d_subtract as subtract,
    subtract_d_tangentFromDegrees as tangentFromDegrees,
    subtract_d_tangentFromRadians as tangentFromRadians,
    subtract_d_teamScore as teamScore,
    subtract_d_ultimateChargePercent as ultimateChargePercent,
    subtract_d_verticalAngleFromDirection as verticalAngleFromDirection,
    subtract_d_verticalAngleTowards as verticalAngleTowards,
    subtract_d_verticalFacingAngleOf as verticalFacingAngleOf,
    subtract_d_verticalSpeedOf as verticalSpeedOf,
    subtract_d_serverLoad as serverLoad,
    subtract_d_serverLoadAverage as serverLoadAverage,
    subtract_d_serverLoadPeak as serverLoadPeak,
    subtract_d_vector as vector,
    subtract_d_localVectorOf as localVectorOf,
    subtract_d_worldVectorOf as worldVectorOf,
    subtract_d_vectorTowards as vectorTowards,
    subtract_d_backward as backward,
    subtract_d_crossProduct as crossProduct,
    subtract_d_directionFromAngles as directionFromAngles,
    subtract_d_directionTowards as directionTowards,
    subtract_d_dotProduct as dotProduct,
    subtract_d_down as down,
    subtract_d_facingDirectionOf as facingDirectionOf,
    subtract_d_flagPosition as flagPosition,
    subtract_d_forward as forward,
    subtract_d_left as left,
    subtract_d_nearestWalkablePosition as nearestWalkablePosition,
    subtract_d_normalize as normalize,
    subtract_d_objectivePosition as objectivePosition,
    subtract_d_payloadPosition as payloadPosition,
    subtract_d_positionOf as positionOf,
    subtract_d_rayCastHitNormal as rayCastHitNormal,
    subtract_d_rayCastHitPlayer as rayCastHitPlayer,
    subtract_d_rayCastHitPosition as rayCastHitPosition,
    subtract_d_right as right,
    subtract_d_throttleOf as throttleOf,
    subtract_d_totalTimeElapsed as totalTimeElapsed,
    subtract_d_up as up,
    subtract_d_velocityOf as velocityOf,
    subtract_d_xComponentOf as xComponentOf,
    subtract_d_yComponentOf as yComponentOf,
    subtract_d_zComponentOf as zComponentOf,
  };
}

/**
 * 팀 상수입니다. ALL 옵션은 팀전의 양팀,
 * 또는 개별 전투 게임의 모든 플레이어를 뜻합니다.
 */
declare const team: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[]
) => string;

/**
 * 현재 쟁탈 전장에서 점수를 축적하고 있는 팀입니다.
 * 아무 팀도 점수를 축적하지 못한 경우 결과값은 ALL입니다.
 */
declare const controlModeScoringTeam: (


) => string;

/**
 * 지정된 팀의 상대 팀입니다.
 */
declare const oppositeTeamOf: (
/**
 * 상대 팀 정보를 가져올 팀입니다.
 * ALL인 경우, 결과는 ALL입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * 해당 플레이어의 소속 팀입니다.
 * 게임 모드가 개별 전투인 경우 팀은 ALL로 간주됩니다.
 */
declare const teamOf: (
/**
 * 팀 정보를 가져올 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;



declare const team_d_team: typeof team;
declare const team_d_controlModeScoringTeam: typeof controlModeScoringTeam;
declare const team_d_oppositeTeamOf: typeof oppositeTeamOf;
declare const team_d_teamOf: typeof teamOf;
declare namespace team_d {
  export {
    team_d_team as team,
    team_d_controlModeScoringTeam as controlModeScoringTeam,
    team_d_oppositeTeamOf as oppositeTeamOf,
    team_d_teamOf as teamOf,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$z: (str: "" | "Up" | "Down" | "White" | "Yellow" | "Green" | "Purple" | "Red" | "Blue" | "None" | "Primary Fire" | "Secondary Fire" | "Ability 1" | "Ability 2" | "Interact" | "Jump" | "Crouch" | "Hacked" | "Burning" | "Frozen" | "Stunned" | "Min" | "Max" | "Club" | "Diamond" | "Heart" | "No" | "Position" | "Spade" | "Stop" | "Warning" | "Left" | "Right" | "Sphere" | "Cloud" | "Pick" | "Hello" | "Thanks" | "----------" | "-> {0}" | "!" | "!!" | "!!!" | "#{0}" | "({0})" | "*" | "..." | "?" | "??" | "???" | "{0} - {1}" | "{0} - {1} - {2}" | "{0} ->" | "{0} -> {1}" | "{0} * {1}" | "{0} / {1}" | "{0} : {1} : {2}" | "{0} {1}" | "{0} {1} {2}" | "{0} + {1}" | "{0} <-" | "{0} <- {1}" | "{0} <->" | "{0} <-> {1}" | "{0} < {1}" | "{0} > {1}" | "{0} and {1}" | "{0} m" | "{0} m/s" | "{0} sec" | "{0} vs {1}" | "{0}!" | "{0}!!" | "{0}!!!" | "{0}%" | "{0}, {1}" | "{0}, {1}, and {2}" | "{0}:" | "{0}: {1}" | "{0}: {1} and {2}" | "{0}:{1}" | "{0}?" | "{0}??" | "{0}???" | "<- {0}" | "<-> {0}" | "Abilities" | "Ability" | "Agility" | "Alert" | "Alive" | "Allies" | "Ally" | "Ammunition" | "Angle" | "Attack" | "Attacked" | "Attacking" | "Attempt" | "Attempts" | "Average" | "Avoid" | "Avoided" | "Avoiding" | "Backward" | "Bad" | "Ban" | "Banned" | "Banning" | "Best" | "Better" | "Bid" | "Bids" | "Block" | "Blocked" | "Blocking" | "Bonus" | "Bonuses" | "Boss" | "Bosses" | "Bought" | "Build" | "Building" | "Built" | "Burn" | "Burnt" | "Buy" | "Buying" | "Capture" | "Captured" | "Capturing" | "Caution" | "Center" | "Cahllenge Accepted" | "Charisma" | "Chase" | "Chased" | "Chasing" | "Checkpoint" | "Checkpoints" | "Clouds" | "Clubs" | "Combo" | "Come Here" | "Condiition" | "Congratulations" | "Connect" | "Connected" | "Connecting" | "Constitution" | "Control Point" | "Control Points" | "Cooldown" | "Cooldowns" | "Corrupt" | "Corrupted" | "Corrupting" | "Credit" | "Credits" | "Critical" | "Crouched" | "Crouching" | "Current" | "Current Allies" | "Current Ally" | "Current Attempt" | "Current Checkpoint" | "Current Enemies" | "Current Enemy" | "Current Form" | "Current Game" | "Current Hero" | "Current Heroes" | "Current Hostage" | "Current Hostages" | "Current Level" | "Current Mission" | "Current Object" | "Current Objective" | "Current Objects" | "Current Phase" | "Current Player" | "Current Players" | "Current Round" | "Current Target" | "Current Targets" | "Current Upgrade" | "Damage" | "Damaged" | "Damaging" | "Danger" | "Dead" | "Deal" | "Dealing" | "Dealt" | "Deck" | "Decks" | "Defeat" | "Defend" | "Defended" | "Defending" | "Defense" | "Deliver" | "Delivered" | "Delivering" | "Depth" | "Destabilize" | "Destabilized" | "Destabilizing" | "Destroy" | "Destroyed" | "Destroying" | "Detect" | "Detected" | "Detecting" | "Dexterity" | "Diamonds" | "Die" | "Discard" | "Discarded" | "Discarding" | "Disconnect" | "Disconnected" | "Disconnecting" | "Distance" | "Distances" | "Dodge" | "Dodged" | "Dodging" | "Dome" | "Domes" | "Download" | "Downloaded" | "Downloading" | "Draw" | "Drawing" | "Drawn" | "Drop" | "Dropped" | "Dropping" | "Dying" | "East" | "Eliminate" | "Eliminated" | "Eliminating" | "Elimination" | "Eliminations" | "Enemiies" | "Enemy" | "Enterance" | "Escort" | "Escorted" | "Escorting" | "Excellent" | "Exit" | "Experience" | "Extreme" | "Face" | "Faces" | "Facing" | "Failed" | "Failing" | "Failure" | "Fall" | "Fallen" | "Failling" | "Far" | "Fast" | "Faster" | "Fastest" | "Fault" | "Faults" | "Final" | "Final Allies" | "Final Ally" | "Final Attempt" | "Final Checkpoint" | "Final Enemies" | "Final Enemy" | "Final Form" | "Final Game" | "Final Hero" | "Final Heroes" | "Final Hostage" | "Final Hostages" | "Final Item" | "Final Level" | "Final Mission" | "Final Object" | "Final Objective" | "Final Objects" | "Final Phase" | "Final Player" | "Final Players" | "Final Round" | "Final Target" | "Final Targets" | "Final Time" | "Final Upgrade" | "Find" | "Finding" | "Finish" | "Finished" | "Finishing" | "Flown" | "Fly" | "Flying" | "Fold" | "Folded" | "Folding" | "Form" | "Forms" | "Forward" | "Found" | "Freeze" | "Freezing" | "Game" | "Games" | "Games Lost" | "Games Won" | "Gg" | "Go" | "Goal" | "Goals" | "Going" | "Good" | "Good Luck" | "Goodbye" | "Guilt" | "Hack" | "Hacking" | "Hand" | "Hands" | "Heal" | "Healed" | "Healer" | "Healers" | "Healing" | "Hearts" | "Height" | "Help" | "Here" | "Hero" | "Heroes" | "Hidden" | "Hide" | "Hiding" | "High Score" | "High Scores" | "Hit" | "Hitting" | "Hmmm" | "Hostage" | "Hostages" | "Huh" | "Hunt" | "Hunted" | "Hunter" | "Hunters" | "Hunting" | "I Give Up" | "I Tried" | "In View" | "Income" | "Incoming" | "Initial" | "Initial Allies" | "Initial Ally" | "Initial Attempt" | "Initial Checkpoint" | "Initial Enemies" | "Initial Enemy" | "Initial Form" | "Initial Game" | "Initial Hero" | "Initial Heroes" | "Initial Hostage" | "Initial Level" | "Initial Mission" | "Initial Object" | "Initial Objective" | "Initial Objects" | "Initial Phase" | "Initial Player" | "Initial Players" | "Initial Round" | "Initial Target" | "Initial Targets" | "Initial Upgrade" | "Innocent" | "Inside" | "Intelligence" | "Invisible" | "Item" | "Items" | "Join" | "Joined" | "Joining" | "Jumping" | "Kill" | "Kills" | "Killstreak" | "Killstreaks" | "Leader" | "Leaders" | "Least" | "Less" | "Level" | "Level Down" | "Levels" | "Life" | "Limited" | "Lives" | "Load" | "Loaded" | "Loading" | "Lock" | "Locked" | "Locking" | "Loser" | "Losers" | "Loss" | "Losses" | "Mild" | "Mission" | "Mission Aborted" | "Mission Accomplished" | "Mission Failed" | "Missions" | "Moderate" | "Money" | "Monster" | "Monsters" | "More" | "Most" | "My Mistake" | "Near" | "New High Score" | "New Record" | "Next" | "Next Allies" | "Next Ally" | "Next Attempt" | "Next Checkpoint" | "Next Enemies" | "Next Enemy" | "Next Form" | "Next Game" | "Next Hero" | "Next Heroes" | "Next Hostage" | "Next Hostages" | "Next Level" | "Next Mission" | "Next Object" | "Next Objective" | "Next Objects" | "Next Phase" | "Next Player" | "Next Players" | "Next Round" | "Next Target" | "Next Targets" | "Next Upgrade" | "Nice Try" | "No Thanks" | "Normal" | "North" | "Northeast" | "Northwest" | "Not Today" | "Object" | "Objective" | "Objectives" | "Objects" | "Obtain" | "Obtained" | "Obtaining" | "Off" | "On" | "Oof" | "Oops" | "Optimal" | "Optimize" | "Optimized" | "Optimizing" | "Out Of View" | "Outgoing" | "Outside" | "Over" | "Overtime" | "Participant" | "Participants" | "Payload" | "Payloads" | "Phase" | "Phases" | "Picked" | "Picking" | "Pile" | "Piles" | "Play" | "Played" | "Player" | "Players" | "Point" | "Points" | "Points Earned" | "Points Lost" | "Power" | "Power-up" | "Power-ups" | "Price" | "Projectile" | "Projectiles" | "Protect" | "Protected" | "Protecting" | "Purified" | "Purify" | "Purifying" | "Raise" | "Raised" | "Rank" | "Rank A" | "Rank B" | "Rank C" | "Rank D" | "Rank E" | "Rank F" | "Rank S" | "Reach" | "Reached" | "Reaching" | "Ready" | "Record" | "Records" | "Recover" | "Recovered" | "Recovering" | "Remain" | "Remaining" | "Rescue" | "Rescued" | "Rescuing" | "Resource" | "Resources" | "Resurrect" | "Resurrected" | "Resurrecting" | "Reveal" | "Revealed" | "Revealing" | "Reverse" | "Reversed" | "Reversing" | "Round" | "Round {0}" | "Rounds" | "Rounds Lost" | "Rounds Won" | "Run" | "Running" | "Safe" | "Save" | "Saved" | "Saving" | "Score" | "Scores" | "Secure" | "Secured" | "Securing" | "Select" | "Selected" | "Selecting" | "Sell" | "Selling" | "Server Load" | "Server Load Average" | "Server Load Peak" | "Sever" | "Severe" | "Severed" | "Severing" | "Shop" | "Shops" | "Shuffle" | "Shuffled" | "Shuffling" | "Sink" | "Sinking" | "Skip" | "Skipped" | "Skipping" | "Sleep" | "Sleeping" | "Slept" | "Slow" | "Slower" | "Slowest" | "Sold" | "Sorry" | "South" | "Southeast" | "Southwest" | "Spades" | "Sparklers" | "Spawn" | "Spawned" | "Spaning" | "Speed" | "Speeds" | "Spheres" | "Stabilize" | "Stabilized" | "Stabilizing" | "Stable" | "Star" | "Stars" | "Start" | "Started" | "Starting" | "Status" | "Stay" | "Stay Away" | "Stayed" | "Staying" | "Stopped" | "Stopping" | "Stun" | "Stunning" | "Suboptimal" | "Success" | "Sudden Death" | "Sunk" | "Superb" | "Survive" | "Survived" | "Surviving" | "Target" | "Targets" | "Team" | "Teammate" | "Teammates" | "Teams" | "Terrible" | "Thank You" | "That Was Awesome" | "Threat" | "Threat Level" | "Threat Levels" | "Threats" | "Tiebreker" | "Time" | "Times" | "Total" | "Trade" | "Traded" | "Trading" | "Traitor" | "Traitors" | "Transfer" | "Transferred" | "Transferring" | "Try Again" | "Turret" | "Turrets" | "Ugh" | "Ultimate Ability" | "Under" | "Unknown" | "Unlimited" | "Unlock" | "Unlocked" | "Unlocking" | "Unsafe" | "Unstable" | "Upgrade" | "Upgraders" | "Upload" | "Uploaded" | "Uploading" | "Use Ability 1" | "Use Ability 2" | "Use Ultimate Abiility" | "Victory" | "Visible" | "Vortex" | "Vortices" | "Wait" | "Waiting" | "Wall" | "Walls" | "Welcome" | "Well Played" | "West" | "Wild" | "Win" | "Winner" | "Winners" | "Wins" | "Wisdom" | "Worse" | "Worst" | "Wow" | "Yes" | "You" | "You Lose" | "You Win" | "Zone" | "Zones" | "¡{0}!" | "¿{0}?" | "{0} !{1}" | "{0} <{1}" | "{0} ={1}" | "{0} >{1}") => "" | "Up" | "Down" | "White" | "Yellow" | "Green" | "Purple" | "Red" | "Blue" | "None" | "Primary Fire" | "Secondary Fire" | "Ability 1" | "Ability 2" | "Interact" | "Jump" | "Crouch" | "Hacked" | "Burning" | "Frozen" | "Stunned" | "Min" | "Max" | "Club" | "Diamond" | "Heart" | "No" | "Position" | "Spade" | "Stop" | "Warning" | "Left" | "Right" | "Sphere" | "Cloud" | "Pick" | "Hello" | "Thanks" | "----------" | "-> {0}" | "!" | "!!" | "!!!" | "#{0}" | "({0})" | "*" | "..." | "?" | "??" | "???" | "{0} - {1}" | "{0} - {1} - {2}" | "{0} ->" | "{0} -> {1}" | "{0} * {1}" | "{0} / {1}" | "{0} : {1} : {2}" | "{0} {1}" | "{0} {1} {2}" | "{0} + {1}" | "{0} <-" | "{0} <- {1}" | "{0} <->" | "{0} <-> {1}" | "{0} < {1}" | "{0} > {1}" | "{0} and {1}" | "{0} m" | "{0} m/s" | "{0} sec" | "{0} vs {1}" | "{0}!" | "{0}!!" | "{0}!!!" | "{0}%" | "{0}, {1}" | "{0}, {1}, and {2}" | "{0}:" | "{0}: {1}" | "{0}: {1} and {2}" | "{0}:{1}" | "{0}?" | "{0}??" | "{0}???" | "<- {0}" | "<-> {0}" | "Abilities" | "Ability" | "Agility" | "Alert" | "Alive" | "Allies" | "Ally" | "Ammunition" | "Angle" | "Attack" | "Attacked" | "Attacking" | "Attempt" | "Attempts" | "Average" | "Avoid" | "Avoided" | "Avoiding" | "Backward" | "Bad" | "Ban" | "Banned" | "Banning" | "Best" | "Better" | "Bid" | "Bids" | "Block" | "Blocked" | "Blocking" | "Bonus" | "Bonuses" | "Boss" | "Bosses" | "Bought" | "Build" | "Building" | "Built" | "Burn" | "Burnt" | "Buy" | "Buying" | "Capture" | "Captured" | "Capturing" | "Caution" | "Center" | "Cahllenge Accepted" | "Charisma" | "Chase" | "Chased" | "Chasing" | "Checkpoint" | "Checkpoints" | "Clouds" | "Clubs" | "Combo" | "Come Here" | "Condiition" | "Congratulations" | "Connect" | "Connected" | "Connecting" | "Constitution" | "Control Point" | "Control Points" | "Cooldown" | "Cooldowns" | "Corrupt" | "Corrupted" | "Corrupting" | "Credit" | "Credits" | "Critical" | "Crouched" | "Crouching" | "Current" | "Current Allies" | "Current Ally" | "Current Attempt" | "Current Checkpoint" | "Current Enemies" | "Current Enemy" | "Current Form" | "Current Game" | "Current Hero" | "Current Heroes" | "Current Hostage" | "Current Hostages" | "Current Level" | "Current Mission" | "Current Object" | "Current Objective" | "Current Objects" | "Current Phase" | "Current Player" | "Current Players" | "Current Round" | "Current Target" | "Current Targets" | "Current Upgrade" | "Damage" | "Damaged" | "Damaging" | "Danger" | "Dead" | "Deal" | "Dealing" | "Dealt" | "Deck" | "Decks" | "Defeat" | "Defend" | "Defended" | "Defending" | "Defense" | "Deliver" | "Delivered" | "Delivering" | "Depth" | "Destabilize" | "Destabilized" | "Destabilizing" | "Destroy" | "Destroyed" | "Destroying" | "Detect" | "Detected" | "Detecting" | "Dexterity" | "Diamonds" | "Die" | "Discard" | "Discarded" | "Discarding" | "Disconnect" | "Disconnected" | "Disconnecting" | "Distance" | "Distances" | "Dodge" | "Dodged" | "Dodging" | "Dome" | "Domes" | "Download" | "Downloaded" | "Downloading" | "Draw" | "Drawing" | "Drawn" | "Drop" | "Dropped" | "Dropping" | "Dying" | "East" | "Eliminate" | "Eliminated" | "Eliminating" | "Elimination" | "Eliminations" | "Enemiies" | "Enemy" | "Enterance" | "Escort" | "Escorted" | "Escorting" | "Excellent" | "Exit" | "Experience" | "Extreme" | "Face" | "Faces" | "Facing" | "Failed" | "Failing" | "Failure" | "Fall" | "Fallen" | "Failling" | "Far" | "Fast" | "Faster" | "Fastest" | "Fault" | "Faults" | "Final" | "Final Allies" | "Final Ally" | "Final Attempt" | "Final Checkpoint" | "Final Enemies" | "Final Enemy" | "Final Form" | "Final Game" | "Final Hero" | "Final Heroes" | "Final Hostage" | "Final Hostages" | "Final Item" | "Final Level" | "Final Mission" | "Final Object" | "Final Objective" | "Final Objects" | "Final Phase" | "Final Player" | "Final Players" | "Final Round" | "Final Target" | "Final Targets" | "Final Time" | "Final Upgrade" | "Find" | "Finding" | "Finish" | "Finished" | "Finishing" | "Flown" | "Fly" | "Flying" | "Fold" | "Folded" | "Folding" | "Form" | "Forms" | "Forward" | "Found" | "Freeze" | "Freezing" | "Game" | "Games" | "Games Lost" | "Games Won" | "Gg" | "Go" | "Goal" | "Goals" | "Going" | "Good" | "Good Luck" | "Goodbye" | "Guilt" | "Hack" | "Hacking" | "Hand" | "Hands" | "Heal" | "Healed" | "Healer" | "Healers" | "Healing" | "Hearts" | "Height" | "Help" | "Here" | "Hero" | "Heroes" | "Hidden" | "Hide" | "Hiding" | "High Score" | "High Scores" | "Hit" | "Hitting" | "Hmmm" | "Hostage" | "Hostages" | "Huh" | "Hunt" | "Hunted" | "Hunter" | "Hunters" | "Hunting" | "I Give Up" | "I Tried" | "In View" | "Income" | "Incoming" | "Initial" | "Initial Allies" | "Initial Ally" | "Initial Attempt" | "Initial Checkpoint" | "Initial Enemies" | "Initial Enemy" | "Initial Form" | "Initial Game" | "Initial Hero" | "Initial Heroes" | "Initial Hostage" | "Initial Level" | "Initial Mission" | "Initial Object" | "Initial Objective" | "Initial Objects" | "Initial Phase" | "Initial Player" | "Initial Players" | "Initial Round" | "Initial Target" | "Initial Targets" | "Initial Upgrade" | "Innocent" | "Inside" | "Intelligence" | "Invisible" | "Item" | "Items" | "Join" | "Joined" | "Joining" | "Jumping" | "Kill" | "Kills" | "Killstreak" | "Killstreaks" | "Leader" | "Leaders" | "Least" | "Less" | "Level" | "Level Down" | "Levels" | "Life" | "Limited" | "Lives" | "Load" | "Loaded" | "Loading" | "Lock" | "Locked" | "Locking" | "Loser" | "Losers" | "Loss" | "Losses" | "Mild" | "Mission" | "Mission Aborted" | "Mission Accomplished" | "Mission Failed" | "Missions" | "Moderate" | "Money" | "Monster" | "Monsters" | "More" | "Most" | "My Mistake" | "Near" | "New High Score" | "New Record" | "Next" | "Next Allies" | "Next Ally" | "Next Attempt" | "Next Checkpoint" | "Next Enemies" | "Next Enemy" | "Next Form" | "Next Game" | "Next Hero" | "Next Heroes" | "Next Hostage" | "Next Hostages" | "Next Level" | "Next Mission" | "Next Object" | "Next Objective" | "Next Objects" | "Next Phase" | "Next Player" | "Next Players" | "Next Round" | "Next Target" | "Next Targets" | "Next Upgrade" | "Nice Try" | "No Thanks" | "Normal" | "North" | "Northeast" | "Northwest" | "Not Today" | "Object" | "Objective" | "Objectives" | "Objects" | "Obtain" | "Obtained" | "Obtaining" | "Off" | "On" | "Oof" | "Oops" | "Optimal" | "Optimize" | "Optimized" | "Optimizing" | "Out Of View" | "Outgoing" | "Outside" | "Over" | "Overtime" | "Participant" | "Participants" | "Payload" | "Payloads" | "Phase" | "Phases" | "Picked" | "Picking" | "Pile" | "Piles" | "Play" | "Played" | "Player" | "Players" | "Point" | "Points" | "Points Earned" | "Points Lost" | "Power" | "Power-up" | "Power-ups" | "Price" | "Projectile" | "Projectiles" | "Protect" | "Protected" | "Protecting" | "Purified" | "Purify" | "Purifying" | "Raise" | "Raised" | "Rank" | "Rank A" | "Rank B" | "Rank C" | "Rank D" | "Rank E" | "Rank F" | "Rank S" | "Reach" | "Reached" | "Reaching" | "Ready" | "Record" | "Records" | "Recover" | "Recovered" | "Recovering" | "Remain" | "Remaining" | "Rescue" | "Rescued" | "Rescuing" | "Resource" | "Resources" | "Resurrect" | "Resurrected" | "Resurrecting" | "Reveal" | "Revealed" | "Revealing" | "Reverse" | "Reversed" | "Reversing" | "Round" | "Round {0}" | "Rounds" | "Rounds Lost" | "Rounds Won" | "Run" | "Running" | "Safe" | "Save" | "Saved" | "Saving" | "Score" | "Scores" | "Secure" | "Secured" | "Securing" | "Select" | "Selected" | "Selecting" | "Sell" | "Selling" | "Server Load" | "Server Load Average" | "Server Load Peak" | "Sever" | "Severe" | "Severed" | "Severing" | "Shop" | "Shops" | "Shuffle" | "Shuffled" | "Shuffling" | "Sink" | "Sinking" | "Skip" | "Skipped" | "Skipping" | "Sleep" | "Sleeping" | "Slept" | "Slow" | "Slower" | "Slowest" | "Sold" | "Sorry" | "South" | "Southeast" | "Southwest" | "Spades" | "Sparklers" | "Spawn" | "Spawned" | "Spaning" | "Speed" | "Speeds" | "Spheres" | "Stabilize" | "Stabilized" | "Stabilizing" | "Stable" | "Star" | "Stars" | "Start" | "Started" | "Starting" | "Status" | "Stay" | "Stay Away" | "Stayed" | "Staying" | "Stopped" | "Stopping" | "Stun" | "Stunning" | "Suboptimal" | "Success" | "Sudden Death" | "Sunk" | "Superb" | "Survive" | "Survived" | "Surviving" | "Target" | "Targets" | "Team" | "Teammate" | "Teammates" | "Teams" | "Terrible" | "Thank You" | "That Was Awesome" | "Threat" | "Threat Level" | "Threat Levels" | "Threats" | "Tiebreker" | "Time" | "Times" | "Total" | "Trade" | "Traded" | "Trading" | "Traitor" | "Traitors" | "Transfer" | "Transferred" | "Transferring" | "Try Again" | "Turret" | "Turrets" | "Ugh" | "Ultimate Ability" | "Under" | "Unknown" | "Unlimited" | "Unlock" | "Unlocked" | "Unlocking" | "Unsafe" | "Unstable" | "Upgrade" | "Upgraders" | "Upload" | "Uploaded" | "Uploading" | "Use Ability 1" | "Use Ability 2" | "Use Ultimate Abiility" | "Victory" | "Visible" | "Vortex" | "Vortices" | "Wait" | "Waiting" | "Wall" | "Walls" | "Welcome" | "Well Played" | "West" | "Wild" | "Win" | "Winner" | "Winners" | "Wins" | "Wisdom" | "Worse" | "Worst" | "Wow" | "Yes" | "You" | "You Lose" | "You Win" | "Zone" | "Zones" | "¡{0}!" | "¿{0}?" | "{0} !{1}" | "{0} <{1}" | "{0} ={1}" | "{0} >{1}";

declare namespace text_d {
  export {
    Default$z as Default
  };
}



declare const textId_d_lastTextId: typeof lastTextId;
declare const textId_d_globalVariable: typeof globalVariable;
declare const textId_d_playerVariable: typeof playerVariable;
declare namespace textId_d {
  export {
    textId_d_lastTextId as lastTextId,
    textId_d_globalVariable as globalVariable,
    textId_d_playerVariable as playerVariable,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$A: (str: ValueTransformationType) => ValueTransformationType;

declare namespace transformation_d {
  export {
    Default$A as Default
  };
}

/**
 * 지정된 값의 절대값입니다.
 */
declare const absoluteValue: (
/**
 * 절대값을 계산할 실수값입니다.
 * - `Type.Number.`
 */
value: string | number | any[]
) => string;

/**
 * 맨 뒤에 하나 이상의 값을 덧붙인 배열의 복사본입니다.
 */
declare const appendToArray: (
/**
 * 덧붙일 대상 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * 배열 후미에 덧붙일 값입니다.
 * 이 값 자체가 배열인 경우 각 요소를 덧붙입니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * 현재 연산 대상인 배열 요소입니다.
 * FILTERED ARRAY 나 SORTED ARRAY 등의
 * 값을 확인할 때에만 의미가 있습니다.
 */
declare const currentArrayElement: (


) => string;

/**
 * 지정된 배열의 맨 앞에 있는 값입니다.
 * 해당 배열이 비어 있으면 결과 값은 0 입니다.
 */
declare const firstOf: (
/**
 * 값을 가져올 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[]
) => string;

/**
 * 지정된 배열의 끝에 있는 값입니다.
 * 해당 배열이 비어있으면 결과값은 0입니다.
 */
declare const lastOf: (
/**
 * 값을 가져올 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[]
) => string;

/**
 * 현재 게임 모드 단계의 잔여 시간(초)입니다.
 */
declare const matchTime: (


) => string;

/**
 * 두 숫자 또는 벡터의 곱입니다. 벡터에 숫자를
 * 곱하면 비율이 증감된 벡터가 도출됩니다.
 */
declare const multiply: (
/**
 * 좌측 피연산자입니다.
 * 결과값이 숫자로 나올 수 있는
 * 아무 값이나 사용할 수 있습니다.
 * - `Type.Multiply.`
 */
value1: string | number | any[],
/**
 * 우측 피연산자입니다.
 * 결과값이 숫자로 나올 수 있는
 * 아무 값이나 사용할 수 있습니다.
 * - `Type.Multiply.`
 */
value2: string | number | any[]
) => string;

/**
 * 지정된 배열의 무작위 값입니다.
 */
declare const randomValueInArray: (
/**
 * 무작위 값을 취할 배열입니다.
 * 배열이 아닌 값이 주어진 경우,
 * 주어진 값이 그대로 결과값이 됩니다.
 * - `Type.Value.`
 */
array: string | number | any[]
) => string;

/**
 * 한 배열의 지정된 요소에 있는 값입니다.
 * 대상 요소가 없는 경우 결과값은 0입니다.
 */
declare const valueInArray: (
/**
 * 요소 정보를 가져올 대상 배열입니다.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * 요소 정보를 가져올 인덱스입니다.
 * - `Type.Number.`
 */
index: string | number | any[]
) => string;



declare const value_d_absoluteValue: typeof absoluteValue;
declare const value_d_add: typeof add;
declare const value_d_allDeadPlayers: typeof allDeadPlayers;
declare const value_d_allHeroes: typeof allHeroes;
declare const value_d_allLivingPlayers: typeof allLivingPlayers;
declare const value_d_allPlayers: typeof allPlayers;
declare const value_d_allPlayersNotOnObjective: typeof allPlayersNotOnObjective;
declare const value_d_allPlayersOnObjective: typeof allPlayersOnObjective;
declare const value_d_allowedHeroes: typeof allowedHeroes;
declare const value_d_altitudeOf: typeof altitudeOf;
declare const value_d_and: typeof and;
declare const value_d_angleBetweenVectors: typeof angleBetweenVectors;
declare const value_d_angleDifference: typeof angleDifference;
declare const value_d_appendToArray: typeof appendToArray;
declare const value_d_arccosineInDegrees: typeof arccosineInDegrees;
declare const value_d_arccosineInRadians: typeof arccosineInRadians;
declare const value_d_arcsineInDegrees: typeof arcsineInDegrees;
declare const value_d_arcsineInRadians: typeof arcsineInRadians;
declare const value_d_arctangentInDegrees: typeof arctangentInDegrees;
declare const value_d_arctangentInRadians: typeof arctangentInRadians;
declare const value_d_arrayContains: typeof arrayContains;
declare const value_d_arraySlice: typeof arraySlice;
declare const value_d_attacker: typeof attacker;
declare const value_d_backward: typeof backward;
declare const value_d_closestPlayerTo: typeof closestPlayerTo;
declare const value_d_compare: typeof compare;
declare const value_d_controlModeScoringPercentage: typeof controlModeScoringPercentage;
declare const value_d_controlModeScoringTeam: typeof controlModeScoringTeam;
declare const value_d_cosineFromDegrees: typeof cosineFromDegrees;
declare const value_d_cosineFromRadians: typeof cosineFromRadians;
declare const value_d_countOf: typeof countOf;
declare const value_d_crossProduct: typeof crossProduct;
declare const value_d_currentArrayElement: typeof currentArrayElement;
declare const value_d_directionFromAngles: typeof directionFromAngles;
declare const value_d_directionTowards: typeof directionTowards;
declare const value_d_distanceBetween: typeof distanceBetween;
declare const value_d_divide: typeof divide;
declare const value_d_dotProduct: typeof dotProduct;
declare const value_d_down: typeof down;
declare const value_d_emptyArray: typeof emptyArray;
declare const value_d_entityExists: typeof entityExists;
declare const value_d_eventDamage: typeof eventDamage;
declare const value_d_eventPlayer: typeof eventPlayer;
declare const value_d_eventWasCriticalHit: typeof eventWasCriticalHit;
declare const value_d_eyePosition: typeof eyePosition;
declare const value_d_facingDirectionOf: typeof facingDirectionOf;
declare const value_d_False: typeof False;
declare const value_d_farthestPlayerFrom: typeof farthestPlayerFrom;
declare const value_d_filteredArray: typeof filteredArray;
declare const value_d_firstOf: typeof firstOf;
declare const value_d_flagPosition: typeof flagPosition;
declare const value_d_forward: typeof forward;
declare const value_d_globalVariable: typeof globalVariable;
declare const value_d_hasSpawned: typeof hasSpawned;
declare const value_d_hasStatus: typeof hasStatus;
declare const value_d_health: typeof health;
declare const value_d_hero: typeof hero;
declare const value_d_heroIconString: typeof heroIconString;
declare const value_d_heroOf: typeof heroOf;
declare const value_d_horizontalAngleFromDirection: typeof horizontalAngleFromDirection;
declare const value_d_horizontalAngleTowards: typeof horizontalAngleTowards;
declare const value_d_horizontalFacingAngleOf: typeof horizontalFacingAngleOf;
declare const value_d_horizontalSpeedOf: typeof horizontalSpeedOf;
declare const value_d_indexOfArrayValue: typeof indexOfArrayValue;
declare const value_d_isAlive: typeof isAlive;
declare const value_d_isAssemblingHeroes: typeof isAssemblingHeroes;
declare const value_d_isBetweenRounds: typeof isBetweenRounds;
declare const value_d_isButtonHeld: typeof isButtonHeld;
declare const value_d_isCommunicating: typeof isCommunicating;
declare const value_d_isCommunicatingAny: typeof isCommunicatingAny;
declare const value_d_isCommunicatingAnyEmote: typeof isCommunicatingAnyEmote;
declare const value_d_isCommunicatingAnyVoiceLine: typeof isCommunicatingAnyVoiceLine;
declare const value_d_isControlModePointLocked: typeof isControlModePointLocked;
declare const value_d_isCrouching: typeof isCrouching;
declare const value_d_isCTFModeInSuddenDeath: typeof isCTFModeInSuddenDeath;
declare const value_d_isDead: typeof isDead;
declare const value_d_isFiringPrimary: typeof isFiringPrimary;
declare const value_d_isFiringSecondary: typeof isFiringSecondary;
declare const value_d_isFlagAtBase: typeof isFlagAtBase;
declare const value_d_isFlagBeingCarried: typeof isFlagBeingCarried;
declare const value_d_isGameInProgress: typeof isGameInProgress;
declare const value_d_isHeroBeingPlayed: typeof isHeroBeingPlayed;
declare const value_d_isInAir: typeof isInAir;
declare const value_d_isInLineOfSight: typeof isInLineOfSight;
declare const value_d_isInSetup: typeof isInSetup;
declare const value_d_isInSpawnRoom: typeof isInSpawnRoom;
declare const value_d_isInViewAngle: typeof isInViewAngle;
declare const value_d_isMatchComplete: typeof isMatchComplete;
declare const value_d_isMoving: typeof isMoving;
declare const value_d_isObjectiveComplete: typeof isObjectiveComplete;
declare const value_d_isOnGround: typeof isOnGround;
declare const value_d_isOnObjective: typeof isOnObjective;
declare const value_d_isOnWall: typeof isOnWall;
declare const value_d_isPortraitOnFire: typeof isPortraitOnFire;
declare const value_d_isStanding: typeof isStanding;
declare const value_d_isTeamOnDefense: typeof isTeamOnDefense;
declare const value_d_isTeamOnOffense: typeof isTeamOnOffense;
declare const value_d_isTrueForAll: typeof isTrueForAll;
declare const value_d_isTrueForAny: typeof isTrueForAny;
declare const value_d_isUsingAbility1: typeof isUsingAbility1;
declare const value_d_isUsingAbility2: typeof isUsingAbility2;
declare const value_d_isUsingUltimate: typeof isUsingUltimate;
declare const value_d_isWaitingForPlayers: typeof isWaitingForPlayers;
declare const value_d_lastCreatedEntity: typeof lastCreatedEntity;
declare const value_d_lastDamageModificationId: typeof lastDamageModificationId;
declare const value_d_lastDamageOverTimeId: typeof lastDamageOverTimeId;
declare const value_d_lastHealOverTimeId: typeof lastHealOverTimeId;
declare const value_d_lastOf: typeof lastOf;
declare const value_d_lastTextId: typeof lastTextId;
declare const value_d_left: typeof left;
declare const value_d_localVectorOf: typeof localVectorOf;
declare const value_d_matchRound: typeof matchRound;
declare const value_d_matchTime: typeof matchTime;
declare const value_d_max: typeof max;
declare const value_d_maxHealth: typeof maxHealth;
declare const value_d_min: typeof min;
declare const value_d_modulo: typeof modulo;
declare const value_d_multiply: typeof multiply;
declare const value_d_nearestWalkablePosition: typeof nearestWalkablePosition;
declare const value_d_normalize: typeof normalize;
declare const value_d_normalizedHealth: typeof normalizedHealth;
declare const value_d_not: typeof not;
declare const value_d_Null: typeof Null;
declare const value_d_number: typeof number;
declare const value_d_numberOfDeadPlayers: typeof numberOfDeadPlayers;
declare const value_d_numberOfDeaths: typeof numberOfDeaths;
declare const value_d_numberOfEliminations: typeof numberOfEliminations;
declare const value_d_numberOfFinalBlows: typeof numberOfFinalBlows;
declare const value_d_numberOfHeroes: typeof numberOfHeroes;
declare const value_d_numberOfLivingPlayers: typeof numberOfLivingPlayers;
declare const value_d_numberOfPlayers: typeof numberOfPlayers;
declare const value_d_numberOfPlayersOnObjective: typeof numberOfPlayersOnObjective;
declare const value_d_objectiveIndex: typeof objectiveIndex;
declare const value_d_objectivePosition: typeof objectivePosition;
declare const value_d_oppositeTeamOf: typeof oppositeTeamOf;
declare const value_d_or: typeof or;
declare const value_d_payloadPosition: typeof payloadPosition;
declare const value_d_payloadProgressPercentage: typeof payloadProgressPercentage;
declare const value_d_playerCarryingFlag: typeof playerCarryingFlag;
declare const value_d_playerClosestToReticle: typeof playerClosestToReticle;
declare const value_d_playerVariable: typeof playerVariable;
declare const value_d_playersInSlot: typeof playersInSlot;
declare const value_d_playersInViewAngle: typeof playersInViewAngle;
declare const value_d_playersOnHero: typeof playersOnHero;
declare const value_d_playersWithinRadius: typeof playersWithinRadius;
declare const value_d_pointCapturePercentage: typeof pointCapturePercentage;
declare const value_d_positionOf: typeof positionOf;
declare const value_d_raiseToPower: typeof raiseToPower;
declare const value_d_randomInteger: typeof randomInteger;
declare const value_d_randomReal: typeof randomReal;
declare const value_d_randomValueInArray: typeof randomValueInArray;
declare const value_d_randomizedArray: typeof randomizedArray;
declare const value_d_rayCastHitNormal: typeof rayCastHitNormal;
declare const value_d_rayCastHitPlayer: typeof rayCastHitPlayer;
declare const value_d_rayCastHitPosition: typeof rayCastHitPosition;
declare const value_d_removeFromArray: typeof removeFromArray;
declare const value_d_right: typeof right;
declare const value_d_roundToInteger: typeof roundToInteger;
declare const value_d_scoreOf: typeof scoreOf;
declare const value_d_sineFromDegrees: typeof sineFromDegrees;
declare const value_d_sineFromRadians: typeof sineFromRadians;
declare const value_d_slotOf: typeof slotOf;
declare const value_d_sortedArray: typeof sortedArray;
declare const value_d_speedOf: typeof speedOf;
declare const value_d_speedOfInDirection: typeof speedOfInDirection;
declare const value_d_squareRoot: typeof squareRoot;
declare const value_d_string: typeof string;
declare const value_d_subtract: typeof subtract;
declare const value_d_tangentFromDegrees: typeof tangentFromDegrees;
declare const value_d_tangentFromRadians: typeof tangentFromRadians;
declare const value_d_team: typeof team;
declare const value_d_teamOf: typeof teamOf;
declare const value_d_teamScore: typeof teamScore;
declare const value_d_throttleOf: typeof throttleOf;
declare const value_d_totalTimeElapsed: typeof totalTimeElapsed;
declare const value_d_True: typeof True;
declare const value_d_ultimateChargePercent: typeof ultimateChargePercent;
declare const value_d_up: typeof up;
declare const value_d_valueInArray: typeof valueInArray;
declare const value_d_vector: typeof vector;
declare const value_d_vectorTowards: typeof vectorTowards;
declare const value_d_velocityOf: typeof velocityOf;
declare const value_d_verticalAngleFromDirection: typeof verticalAngleFromDirection;
declare const value_d_verticalAngleTowards: typeof verticalAngleTowards;
declare const value_d_verticalFacingAngleOf: typeof verticalFacingAngleOf;
declare const value_d_verticalSpeedOf: typeof verticalSpeedOf;
declare const value_d_victim: typeof victim;
declare const value_d_worldVectorOf: typeof worldVectorOf;
declare const value_d_xComponentOf: typeof xComponentOf;
declare const value_d_yComponentOf: typeof yComponentOf;
declare const value_d_zComponentOf: typeof zComponentOf;
declare namespace value_d {
  export {
    value_d_absoluteValue as absoluteValue,
    value_d_add as add,
    value_d_allDeadPlayers as allDeadPlayers,
    value_d_allHeroes as allHeroes,
    value_d_allLivingPlayers as allLivingPlayers,
    value_d_allPlayers as allPlayers,
    value_d_allPlayersNotOnObjective as allPlayersNotOnObjective,
    value_d_allPlayersOnObjective as allPlayersOnObjective,
    value_d_allowedHeroes as allowedHeroes,
    value_d_altitudeOf as altitudeOf,
    value_d_and as and,
    value_d_angleBetweenVectors as angleBetweenVectors,
    value_d_angleDifference as angleDifference,
    value_d_appendToArray as appendToArray,
    value_d_arccosineInDegrees as arccosineInDegrees,
    value_d_arccosineInRadians as arccosineInRadians,
    value_d_arcsineInDegrees as arcsineInDegrees,
    value_d_arcsineInRadians as arcsineInRadians,
    value_d_arctangentInDegrees as arctangentInDegrees,
    value_d_arctangentInRadians as arctangentInRadians,
    value_d_arrayContains as arrayContains,
    value_d_arraySlice as arraySlice,
    value_d_attacker as attacker,
    value_d_backward as backward,
    value_d_closestPlayerTo as closestPlayerTo,
    value_d_compare as compare,
    value_d_controlModeScoringPercentage as controlModeScoringPercentage,
    value_d_controlModeScoringTeam as controlModeScoringTeam,
    value_d_cosineFromDegrees as cosineFromDegrees,
    value_d_cosineFromRadians as cosineFromRadians,
    value_d_countOf as countOf,
    value_d_crossProduct as crossProduct,
    value_d_currentArrayElement as currentArrayElement,
    value_d_directionFromAngles as directionFromAngles,
    value_d_directionTowards as directionTowards,
    value_d_distanceBetween as distanceBetween,
    value_d_divide as divide,
    value_d_dotProduct as dotProduct,
    value_d_down as down,
    value_d_emptyArray as emptyArray,
    value_d_entityExists as entityExists,
    value_d_eventDamage as eventDamage,
    value_d_eventPlayer as eventPlayer,
    value_d_eventWasCriticalHit as eventWasCriticalHit,
    value_d_eyePosition as eyePosition,
    value_d_facingDirectionOf as facingDirectionOf,
    value_d_False as False,
    value_d_farthestPlayerFrom as farthestPlayerFrom,
    value_d_filteredArray as filteredArray,
    value_d_firstOf as firstOf,
    value_d_flagPosition as flagPosition,
    value_d_forward as forward,
    value_d_globalVariable as globalVariable,
    value_d_hasSpawned as hasSpawned,
    value_d_hasStatus as hasStatus,
    value_d_health as health,
    value_d_hero as hero,
    value_d_heroIconString as heroIconString,
    value_d_heroOf as heroOf,
    value_d_horizontalAngleFromDirection as horizontalAngleFromDirection,
    value_d_horizontalAngleTowards as horizontalAngleTowards,
    value_d_horizontalFacingAngleOf as horizontalFacingAngleOf,
    value_d_horizontalSpeedOf as horizontalSpeedOf,
    value_d_indexOfArrayValue as indexOfArrayValue,
    value_d_isAlive as isAlive,
    value_d_isAssemblingHeroes as isAssemblingHeroes,
    value_d_isBetweenRounds as isBetweenRounds,
    value_d_isButtonHeld as isButtonHeld,
    value_d_isCommunicating as isCommunicating,
    value_d_isCommunicatingAny as isCommunicatingAny,
    value_d_isCommunicatingAnyEmote as isCommunicatingAnyEmote,
    value_d_isCommunicatingAnyVoiceLine as isCommunicatingAnyVoiceLine,
    value_d_isControlModePointLocked as isControlModePointLocked,
    value_d_isCrouching as isCrouching,
    value_d_isCTFModeInSuddenDeath as isCTFModeInSuddenDeath,
    value_d_isDead as isDead,
    value_d_isFiringPrimary as isFiringPrimary,
    value_d_isFiringSecondary as isFiringSecondary,
    value_d_isFlagAtBase as isFlagAtBase,
    value_d_isFlagBeingCarried as isFlagBeingCarried,
    value_d_isGameInProgress as isGameInProgress,
    value_d_isHeroBeingPlayed as isHeroBeingPlayed,
    value_d_isInAir as isInAir,
    value_d_isInLineOfSight as isInLineOfSight,
    value_d_isInSetup as isInSetup,
    value_d_isInSpawnRoom as isInSpawnRoom,
    value_d_isInViewAngle as isInViewAngle,
    value_d_isMatchComplete as isMatchComplete,
    value_d_isMoving as isMoving,
    value_d_isObjectiveComplete as isObjectiveComplete,
    value_d_isOnGround as isOnGround,
    value_d_isOnObjective as isOnObjective,
    value_d_isOnWall as isOnWall,
    value_d_isPortraitOnFire as isPortraitOnFire,
    value_d_isStanding as isStanding,
    value_d_isTeamOnDefense as isTeamOnDefense,
    value_d_isTeamOnOffense as isTeamOnOffense,
    value_d_isTrueForAll as isTrueForAll,
    value_d_isTrueForAny as isTrueForAny,
    value_d_isUsingAbility1 as isUsingAbility1,
    value_d_isUsingAbility2 as isUsingAbility2,
    value_d_isUsingUltimate as isUsingUltimate,
    value_d_isWaitingForPlayers as isWaitingForPlayers,
    value_d_lastCreatedEntity as lastCreatedEntity,
    value_d_lastDamageModificationId as lastDamageModificationId,
    value_d_lastDamageOverTimeId as lastDamageOverTimeId,
    value_d_lastHealOverTimeId as lastHealOverTimeId,
    value_d_lastOf as lastOf,
    value_d_lastTextId as lastTextId,
    value_d_left as left,
    value_d_localVectorOf as localVectorOf,
    value_d_matchRound as matchRound,
    value_d_matchTime as matchTime,
    value_d_max as max,
    value_d_maxHealth as maxHealth,
    value_d_min as min,
    value_d_modulo as modulo,
    value_d_multiply as multiply,
    value_d_nearestWalkablePosition as nearestWalkablePosition,
    value_d_normalize as normalize,
    value_d_normalizedHealth as normalizedHealth,
    value_d_not as not,
    value_d_Null as Null,
    value_d_number as number,
    value_d_numberOfDeadPlayers as numberOfDeadPlayers,
    value_d_numberOfDeaths as numberOfDeaths,
    value_d_numberOfEliminations as numberOfEliminations,
    value_d_numberOfFinalBlows as numberOfFinalBlows,
    value_d_numberOfHeroes as numberOfHeroes,
    value_d_numberOfLivingPlayers as numberOfLivingPlayers,
    value_d_numberOfPlayers as numberOfPlayers,
    value_d_numberOfPlayersOnObjective as numberOfPlayersOnObjective,
    value_d_objectiveIndex as objectiveIndex,
    value_d_objectivePosition as objectivePosition,
    value_d_oppositeTeamOf as oppositeTeamOf,
    value_d_or as or,
    value_d_payloadPosition as payloadPosition,
    value_d_payloadProgressPercentage as payloadProgressPercentage,
    value_d_playerCarryingFlag as playerCarryingFlag,
    value_d_playerClosestToReticle as playerClosestToReticle,
    value_d_playerVariable as playerVariable,
    value_d_playersInSlot as playersInSlot,
    value_d_playersInViewAngle as playersInViewAngle,
    value_d_playersOnHero as playersOnHero,
    value_d_playersWithinRadius as playersWithinRadius,
    value_d_pointCapturePercentage as pointCapturePercentage,
    value_d_positionOf as positionOf,
    value_d_raiseToPower as raiseToPower,
    value_d_randomInteger as randomInteger,
    value_d_randomReal as randomReal,
    value_d_randomValueInArray as randomValueInArray,
    value_d_randomizedArray as randomizedArray,
    value_d_rayCastHitNormal as rayCastHitNormal,
    value_d_rayCastHitPlayer as rayCastHitPlayer,
    value_d_rayCastHitPosition as rayCastHitPosition,
    value_d_removeFromArray as removeFromArray,
    value_d_right as right,
    value_d_roundToInteger as roundToInteger,
    value_d_scoreOf as scoreOf,
    value_d_sineFromDegrees as sineFromDegrees,
    value_d_sineFromRadians as sineFromRadians,
    value_d_slotOf as slotOf,
    value_d_sortedArray as sortedArray,
    value_d_speedOf as speedOf,
    value_d_speedOfInDirection as speedOfInDirection,
    value_d_squareRoot as squareRoot,
    value_d_string as string,
    value_d_subtract as subtract,
    value_d_tangentFromDegrees as tangentFromDegrees,
    value_d_tangentFromRadians as tangentFromRadians,
    value_d_team as team,
    value_d_teamOf as teamOf,
    value_d_teamScore as teamScore,
    value_d_throttleOf as throttleOf,
    value_d_totalTimeElapsed as totalTimeElapsed,
    value_d_True as True,
    value_d_ultimateChargePercent as ultimateChargePercent,
    value_d_up as up,
    value_d_valueInArray as valueInArray,
    value_d_vector as vector,
    value_d_vectorTowards as vectorTowards,
    value_d_velocityOf as velocityOf,
    value_d_verticalAngleFromDirection as verticalAngleFromDirection,
    value_d_verticalAngleTowards as verticalAngleTowards,
    value_d_verticalFacingAngleOf as verticalFacingAngleOf,
    value_d_verticalSpeedOf as verticalSpeedOf,
    value_d_victim as victim,
    value_d_worldVectorOf as worldVectorOf,
    value_d_xComponentOf as xComponentOf,
    value_d_yComponentOf as yComponentOf,
    value_d_zComponentOf as zComponentOf,
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$B: (str: ValueVariableOperation) => ValueVariableOperation;

declare namespace variableOperation_d {
  export {
    Default$B as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$C: (str: ValueWaitBehaviorType) => ValueWaitBehaviorType;

declare namespace waitBehavior_d {
  export {
    Default$C as Default
  };
}



declare namespace index_d$1 {
  export {
    heroConstant_d as HeroConstant,
    slotRange_d as SlotRange,
    teamConstant_d as TeamConstant,
    variable_d as Variable,
    eventPlayer_d as EventPlayer,
    add_d as Add,
    array_d as Array,
    assisterParam_d as AssisterParam,
    barrier_d as Barrier,
    beam_d as Beam,
    beamReevaluation_d as BeamReevaluation,
    bool_d as Bool,
    button_d as Button,
    clipping_d as Clipping,
    color_d as Color,
    communication_d as Communication,
    damageModificationId_d as DamageModificationId,
    damageModificationReevaluation_d as DamageModificationReevaluation,
    damageOverTimeId_d as DamageOverTimeId,
    destinationParam_d as DestinationParam,
    divide_d as Divide,
    effect_d as Effect,
    effectReevaluation_d as EffectReevaluation,
    entity_d as Entity,
    facingReevaluation_d as FacingReevaluation,
    healOverTimeId_d as HealOverTimeId,
    hero_d as Hero,
    hudTextReevaluation_d as HudTextReevaluation,
    icon_d as Icon,
    iconReevaluation_d as IconReevaluation,
    invisibleTo_d as InvisibleTo,
    inWorldTextReevaluation_d as InWorldTextReevaluation,
    location_d as Location,
    losCheck_d as LosCheck,
    motion_d as Motion,
    multiply_d as Multiply,
    number_d as Number,
    objectiveDescriptionReevaluation_d as ObjectiveDescriptionReevaluation,
    operator_d as Operator,
    playEffect_d as PlayEffect,
    player_d as Player,
    playersParam_d as PlayersParam,
    reevaluation_d as Reevaluation,
    relative_d as Relative,
    roundingType_d as RoundingType,
    spectators_d as Spectators,
    startAcceleratingReevaluation_d as StartAcceleratingReevaluation,
    startThrottleBehavior_d as StartThrottleBehavior,
    startThrottleReevaluation_d as StartThrottleReevaluation,
    status_d as Status,
    string_d as String,
    stringParam_d as StringParam,
    subtract_d as Subtract,
    team_d as Team,
    text_d as Text,
    textId_d as TextId,
    transformation_d as Transformation,
    value_d as Value,
    variableOperation_d as VariableOperation,
    vector_d as Vector,
    waitBehavior_d as WaitBehavior
  };
}

/**
 * 액션 목록 실행을 중지합니다.
 */
declare const abort: (


) => string;

/**
 * 이 액션 조건이 TRUE일 때 액션 목록 실행을 중지합니다.
 * 그 외에 경우 다음 액션을 진행합니다.
 */
declare const abortIf: (
/**
 * 실행 중지 여부를 지정합니다.
 * - `Type.Bool.`
 */
condition: string | number | any[]
) => string;

/**
 * 조건 목록에 있는 조건 중
 * 하나 이상이 FALSE인 경우 액션 목록의 실행을 중지합니다.
 * 모든 조건이 TRUE인 경우 다음 액션을 진행합니다.
 */
declare const abortIfConditionIsFalse: (


) => string;

/**
 * 조건 목록에 있는 조건 중
 * 하나 이상이 TRUE인 경우 액션 목록의 실행을 중지합니다.
 * 모든 조건이 FALSE인 경우 다음 액션을 진행합니다.
 */
declare const abortIfConditionIsTrue: (


) => string;

/**
 * 플레이어에 대해 DISALLOW BUTTON
 * 액션의 효과를 취소합니다.
 */
declare const allowButton: (
/**
 * 버튼을 다시 사용할 수 있게 될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 다시 사용할 수 있게 될 논리적 버튼입니다.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * 플레이어의 움직임에 즉각적인 속도 변화를 줍니다.
 */
declare const applyImpluse: (
/**
 * 속도를 변경할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 충격량을 적용할 단위 방항입니다.
 * 이 값은 내부적으로 정규화됩니다.
 * - `Type.Vector.`
 */
direction: string | number | any[],
/**
 * 플레이어에 대한 속도 변경의 크기입니다.
 * - `Type.Number.`
 */
speed: string | number | any[],
/**
 * 방향이 플레이어의 월드 좌표 또는
 * 로컬 좌표 중 어느 쪽에 대해
 * 상대적인지 여부를 지정합니다.
 * - `Type.Relative.`
 */
relative: string | number | any[],
/**
 * 충격량을 적용하기 전에 DIRECTION과
 * 반대 방향인 기존의 속도를
 * 상쇄할지 여부를 지정합니다.
 * - `Type.Motion.`
 */
motion: string | number | any[]
) => string;

/**
 * 지정된 플레이엉에게 보이도록
 * 큰 메시지를 조준선 위쪽에 표시합니다.
 */
declare const bigMessage: (
/**
 * 해당 메시지를 보게 될 플레이어입니다.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * 표시할 메시지입니다.
 * - `Type.String.`
 */
header: string | number | any[]
) => string;

/**
 * 전역 변수 값을 지정된 비율로
 * 점진적으로 수정합니다.
 * (전역 변수(GLOBAL VARIABLE)는
 * 게임 자체에 종속된 변수입니다.)
 */
declare const chaseGlobalVariableAtRate: (
/**
 * 점진적으로 수정할 전역 변수를 지정합니다.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * 전역 변수가 궁극적으로 도달할 값입니다.
 * 이 값의 유형은 숫자 또는 벡터가 될 수 있지만,
 * 추적 시작 전 기존 변수 값의 유형이 동일해야 합니다.
 * - `Type.DestinationParam.`
 */
destination: string | number | any[],
/**
 * 변수값의 초당 변화량입니다.
 * - `Type.Number.`
 */
rate: string | number | any[],
/**
 * 이 액션의 입력 정보 중 어떤 항목을
 * 지속적으로 재확인할 것인지 지정합니다.
 * 해당 액션은 입력 정보의 새로운 값을
 * 계속 묻게 되며, 재확인한 값을 사용합니다.
 * - `Type.Reevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * 전역 변수 값을 시간이 지남에
 * 따라 점진적으로 수정합니다.
 * (전역 변수(GLOBAL VARIABLE)는
 * 게임 자체에 종속된 변수입니다.)
 */
declare const chaseGlobalVariableOverTime: (
/**
 * 점진적으로 수정할 전역 변수를 지정합니다.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * 전역 변수가 궁극적으로 도달할 값입니다.
 * 이 값의 유형은 숫자 또는 벡터가 될 수 있지만,
 * 추적 시작 전 기존 변수 값의 유형이 동일해야 합니다.
 * - `Type.DestinationParam.`
 */
destination: string | number | any[],
/**
 * 해당 변수값이 목표치에
 * 도달하기까지의 시간(초)입니다.
 * - `Type.Number.`
 */
duration: string | number | any[],
/**
 * 이 액션의 입력 정보 중 어떤 항목을
 * 지속적으로 재확인할 것인지 지정합니다.
 * 해당 액션은 입력 정보의 새로운 값을
 * 계속 묻게 되며, 재확인한 값을 사용합니다.
 * - `Type.Reevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * 플레이어 변수 값을 지정된
 * 비율로 점진적으로 수정합니다.
 * (플레이어 변수(PLAYER VARIABLE)는
 * 게임 자체에 종속된 변수입니다.)
 */
declare const chasePlayerVariableAtRate: (
/**
 * 점진적으로 변수를 변경할 플레이어입니다.
 * 플레이어가 다수인 경우,
 * 각각의 변수가 독립적으로 변경됩니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 점진적으로 수정할 플레이어 변수를 지정합니다.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * 플레이어 변수가 궁극적으로 도달할 값입니다.
 * 이 값의 유형은 숫자 또는 벡터가 될 수 있지만,
 * 추적 시작 전 기존 변수 값의 유형이 동일해야 합니다.
 * - `Type.DestinationParam.`
 */
destination: string | number | any[],
/**
 * 변수값의 초당 변화량입니다.
 * - `Type.Number.`
 */
rate: string | number | any[],
/**
 * 이 액션의 입력 정보 중 어떤 항목을
 * 지속적으로 재확인할 것인지 지정합니다.
 * 해당 액션은 입력 정보의 새로운 값을
 * 계속 묻게 되며, 재확인한 값을 사용합니다.
 * - `Type.Reevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * 플레이어 변수 값을 시간의
 * 경과에 따라 점진적으로 수정합니다.
 * (플레이어 변수(PLAYER VARIABLE)는
 * 게임 자체에 종속된 변수입니다.)
 */
declare const chasePlayerVariableOverTime: (
/**
 * 점진적으로 변수를 변경할 플레이어입니다.
 * 플레이어가 다수인 경우,
 * 각각의 변수가 독립적으로 변경됩니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 점진적으로 수정할 플레이어의 변수를 지정합니다.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * 플레이어 변수가 궁극적으로 도달할 값입니다.
 * 이 값의 유형은 숫자 또는 벡터가 될 수 있지만,
 * 추적 시작 전 기존 변수 값의 유형이 동일해야 합니다.
 * - `Type.DestinationParam.`
 */
destination: string | number | any[],
/**
 * 해당 변수값이 목표치에
 * 도달하기까지의 시간(초)입니다.
 * - `Type.Number.`
 */
duration: string | number | any[],
/**
 * 이 액션의 입력 정보 중 어떤 항목을
 * 지속적으로 재확인할 것인지 지정합니다.
 * 해당 액션은 입력 정보의 새로운 값을
 * 계속 묻게 되며, 재확인한 값을 사용합니다.
 * - `Type.Reevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * SET STATUS 액션을 통해
 * 플레이어에게 적용된
 * 상태 하나를 제거합니다.
 */
declare const clearStatus: (
/**
 * 상태를 제거할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어에게서 제거할 상태입니다.
 * - `Type.Status.`
 */
status: string | number | any[]
) => string;

/**
 * 플레이어가 감정 표현, 음성 대사,
 * 또는 기타 장착한 의사소통
 * 수단을 사용하도록 합니다.
 */
declare const communicate: (
/**
 * 의사소통을 실행할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 의사소통 유형입니다.
 * - `Type.Communication.`
 */
type: string | number | any[]
) => string;

/**
 * 월드 내에 BEAM 효과 개체를 생성합니다.
 * 이 효과 개체는 제거하기 전까지 지속됩니다.
 * 이 효과를 참조하려면 LAST CREATED ENTITY 값을 사용하면 됩니다.
 * 개체가 너무 많이 생성될 경우 이 액션이 실패할 수 있습니다.
 */
declare const createBeamEffect: (
/**
 * 해당 효과를 보게 될 플레이어입니다.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * 생성할 효과의 형태입니다.
 * - `Type.Beam.`
 */
beamType: string | number | any[],
/**
 * 효과의 시작 위치입니다. 이 값이 플레이어인 경우
 * 해당 효과는 플레이어를 따라다니고, 그 이외의 경우
 * 이 값은 월드 내의 위치로 해석됩니다.
 * - `Type.Vector.`
 */
startPosition: string | number | any[],
/**
 * 효과의 종료 위치입니다. 이 값이 플레이어인 경우
 * 해당 효과는 플레이어를 따라다니고, 그 이외의 경우
 * 이 값은 월드 내의 위치로 해석됩니다.
 * - `Type.Vector.`
 */
endPosition: string | number | any[],
/**
 * 생성될 BEAM 효과의 색상입니다. 특정 팀을 선택한 경우,
 * 해당 팀이 보는 사람에게 적인지 여부에 따라 빨강
 * 또는 파랑으로 효과 색상이 설정됩니다. 효과음에는
 * 적용되지 않습니다. 오직 'GOOD', 그리고
 * 'BAD' BEAM 효과에만 색상이 적용됩니다.
 * - `Type.Color.`
 */
color: string | number | any[],
/**
 * 이 액션의 입력 정보 중 어떤 항목을 지속적으로
 * 재확인 할 것인지 지정합니다. 해당 효과는 입력 정보의
 * 새로운 값을 계속 묻게 되며, 재확인 한 값을 사용합니다.
 * - `Type.BeamReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * 슬롯이 활성화 된 이상 새로운 봇을
 * 특정 팀의 특정 슬롯에 추가합니다.
 * 봇은 WORKSHOP ACTION을 실행한다면
 * 이동하거나 발사하거나 기술 만을 사용합니다.
 */
declare const createDummyBot: (
/**
 * 봇이 될 영웅입니다. 만약 하나 이상의
 * 영웅에게 적용되면 무작위로 선택됩니다.
 * - `Type.Hero.`
 */
hero: string | number | any[],
/**
 * 봇을 생성할 팀입니다. 'All' 설정은
 * 섬멸전 게임 모드에서만 작동하며,
 * 'Team' 설정은 팀 기반의 게임 모드에서만 작동합니다.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * 봇을 받을 플레이어 슬롯(첫 번째 가능한 슬롯 -1)입니다.
 * 대기실 설정에 따라 각 팀에는 최대 6개까지,
 * 개별 전투 모드 팀에서는 최대 12개 까지 봇을 추가할 수 있습니다.
 * - `Type.SlotRange.`
 */
slot: string | number | any[],
/**
 * 봇이 생성될 최초 위치입니다.
 * - `Type.Vector.`
 */
position: string | number | any[],
/**
 * 봇이 바라보고 있을 최초 방향입니다.
 * - `Type.Vector.`
 */
facing: string | number | any[]
) => string;

/**
 * 월드 내에 효과 개체를 생성합니다.
 * 이 효과 개체는 제거하기 전까지 지속됩니다.
 * 이 효과를 참조하려면
 * LAST CREATED ENTITY 값을 사용하면 됩니다.
 * 개체가 너무 많이 생성될 경우
 * 이 액션이 실패할 수 있습니다.
 */
declare const createEffect: (
/**
 * 해당 효과를 보게 될 플레이어입니다.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * 생성할 효과의 형태입니다.
 * - `Type.Effect.`
 */
type: string | number | any[],
/**
 * 생성될 효과의 색상입니다.
 * 특정 팀을 선택한 경우,
 * 해당 팀이 보는 사람에게 적인지
 * 여부에 따라 빨강 또는 파랑으로
 * 효과 색상이 설정됩니다.
 * 효과음에는 적용되지 않습니다.
 * - `Type.Color.`
 */
color: string | number | any[],
/**
 * 효과의 위치입니다.
 * 이 값이 플레이어인 경우
 * 해당 효과는 플레이어를 따라다니고,
 * 그 이외에 경우 이 값은
 * 월드 내의 위치로 해석됩니다.
 * - `Type.Vector.`
 */
position: string | number | any[],
/**
 * 효과 반경(미터)입니다.
 * 효과음은 음량이 대신 영향을 받습니다.
 * - `Type.Number.`
 */
radius: string | number | any[],
/**
 * 이 액션의 입력 정보 중 어떤 항목을
 * 지속적으로 재확인할 것인지 지정합니다.
 * 해당 액션은 입력 정보의 새로운 값을
 * 계속 묻게 되며, 재확인한 값을 사용합니다.
 * - `Type.EffectReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * 지정된 플레이어 화면의 지정된 위치에
 * 표시할 HUD 텍스트를 생성합니다.
 * 이 텍스트는 제거하기 전까지 지속됩니다.
 * 이 텍스트를 참조하려면
 * LAST TEXT ID 값을 사용하면 됩니다.
 * 텍스트 요소가 너무 많이 생성될 경우
 * 이 액션이 실패할 수 있습니다.
 */
declare const createHudText: (
/**
 * 해당 HUD 텍스트를 보게 될 플레이어입니다.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * 표시할 텍스트입니다. (비워두기 가능)
 * - `Type.String.`
 */
header: string | number | any[],
/**
 * 표시할 부제목입니다. (비워두기 가능)
 * - `Type.StringParam.`
 */
subHeader: string | number | any[],
/**
 * 표시할 본문입니다. (비워두기 가능)
 * - `Type.StringParam.`
 */
text: string | number | any[],
/**
 * 텍스트를 표시할 화면 상의 위치입니다.
 * - `Type.Location.`
 */
location: string | number | any[],
/**
 * 동일한 위치에 있는 다른
 * 텍스트와의 정렬 순서입니다.
 * 정렬 순서 상 우선순위가 높은
 * 텍스트는 낮은 우선순위의
 * 텍스트 다음에 위치하게 됩니다.
 * - `Type.Number.`
 */
sortOrder: string | number | any[],
/**
 * 생성될 HEADER 텍스트의 색상입니다.
 * 특정 팀을 선택한 경우,
 * 해당 팀이 보는 사람에게 적인지
 * 여부에 따라 빨강 또는 파랑으로
 * 효과 색상이 설정됩니다.
 * - `Type.Color.`
 */
headerColor: string | number | any[],
/**
 * 생성될 SUBHEADER 텍스트의 색상입니다.
 * 특정 팀을 선택한 경우,
 * 해당 팀이 보는 사람에게 적인지
 * 여부에 따라 빨강 또는 파랑으로
 * 효과 색상이 설정됩니다.
 * - `Type.Color.`
 */
subHeaderColor: string | number | any[],
/**
 * 생성될 텍스트의 색상입니다.
 * 특정 팀을 선택한 경우,
 * 해당 팀이 보는 사람에게 적인지
 * 여부에 따라 빨강 또는 파랑으로
 * 효과 색상이 설정됩니다.
 * - `Type.Color.`
 */
textColor: string | number | any[],
/**
 * 이 액션의 입력 정보 중 어떤 항목을
 * 지속적으로 재확인할 것인지 지정합니다.
 * 해당 액션은 입력 정보의 새로운 값을
 * 계속 묻게 되며, 재확인한 값을 사용합니다.
 * - `Type.HudTextReevaluation.`
 */
reevaluation: string | number | any[],
/**
 * 관전자가 텍스트를 보거나 볼 수 없게 설정합니다.
 * - `Type.Spectators.`
 */
spectators: string | number | any[]
) => string;

/**
 * 월드 내에 아이콘 개체를 생성합니다.
 * 이 아이콘 개체는 제거하기 전까지 지속됩니다.
 * 이 개체를 참조하려면
 * LAST CREATED ENTITY 값을 사용하면 됩니다.
 * 개체가 너무 많이 생성될 경우
 * 이 액션이 실패할 수 있습니다.
 */
declare const createIcon: (
/**
 * 아이콘을 볼 수 있는 플레이어입니다.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * 아이콘의 위치입니다.
 * 이 값이 플레이어인 경우
 * 해당 효과는 지정된
 * 플레이어 머리 위에 표시되고,
 * 그 이외의 경우 이 값은
 * 월드 내의 위치로 해석됩니다.
 * - `Type.Vector.`
 */
position: string | number | any[],
/**
 * 생성할 아이콘입니다.
 * - `Type.Icon.`
 */
icon: string | number | any[],
/**
 * 이 액션의 입력 정보 중 어떤 항목을
 * 지속적으로 재확인할 것인지 지정합니다.
 * 해당 액션은 입력 정보의 새로운 값을
 * 계속 묻게 되며, 재확인한 값을 사용합니다.
 * - `Type.IconReevaluation.`
 */
reevaluation: string | number | any[],
/**
 * 생성될 아이콘의 색상입니다.
 * 특정 팀을 선택한 경우,
 * 해당 팀이 보는 사람에게 적인지
 * 여부에 따라 빨강 또는 파랑으로
 * 효과 색상이 설정됩니다.
 * - `Type.Color.`
 */
iconColor: string | number | any[],
/**
 * 이 아이콘이
 * 플레이어 뒤에 있어도
 * 표시되도록 하시겠습니까?
 * - `Type.Bool.`
 */
showWhenOffscreen: string | number | any[]
) => string;

/**
 * 월드의 지정된 위치에서 지정된 플레이어에게
 * 표시할 월드 내 텍스트를 생성합니다.
 * 이 텍스트는 제거하기 전까지 지속됩니다.
 * 이 텍스트를 참조하려면
 * LAST TEXT ID 값을 사용하면 됩니다.
 * 텍스트 요소가 너무 많이 생성된 경우 이 액션은 실패할 수 있습니다.
 */
declare const createInWorldText: (
/**
 * 월드 내 텍스트를 보게 될 플레이어입니다.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * 표시할 텍스트입니다.
 * - `Type.String.`
 */
header: string | number | any[],
/**
 * 텍스트의 위치입니다.
 * 이 값이 플레이어인 경우
 * 해당 텍스트는 지정된
 * 플레이어 머리 위에 표시되고,
 * 그 이외의 경우 이 값은
 * 월드 내의 위치로 해석됩니다.
 * - `Type.Vector.`
 */
position: string | number | any[],
/**
 * 텍스트의 배율입니다.
 * - `Type.Number.`
 */
scale: string | number | any[],
/**
 * 해당 텍스트가 벽을 뚫고 보일지, 아니면 가려질지 지정합니다.
 * - `Type.Clipping.`
 */
clipping: string | number | any[],
/**
 * 이 액션의 입력 정보 중 어떤 항목을
 * 지속적으로 재확인할 것인지 지정합니다.
 * 해당 텍스트는 입력 정보의 새로운 값을
 * 계속 묻게 되며, 재확인한 값을 사용합니다.
 * - `Type.InWorldTextReevaluation.`
 */
reevaluation: string | number | any[],
/**
 * 사용할 IN-WORLD TEXT 의 색상을 명시합니다.
 * - `Type.Color.`
 */
textColor: string | number | any[],
/**
 * 관전자가 텍스트를 보거나 볼 수 없게 설정합니다.
 * - `Type.Spectators.`
 */
spectators: string | number | any[]
) => string;

/**
 * 플레이어에게 즉시 피해를 적용하며,
 * 피해를 받은 대상이 죽을 수 있습니다.
 */
declare const damage: (
/**
 * 피해를 받게 될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 피해를 주는 행동을 한 것으로
 * 집계될 플레이어입니다.
 * DAMAGER가 NULL이면
 * 집계될 플레이어가 없음을 의미합니다.
 * - `Type.Player.`
 */
damager: string | number | any[],
/**
 * 적용할 피해량입니다.
 * 이 피해량은 강화 효과,
 * 약화 효과, 방어력에
 * 의해 달라질 수 있습니다.
 * - `Type.Number.`
 */
amount: string | number | any[]
) => string;

/**
 * 경기를 즉시 무승부로 종료합니다.
 * 이 액션은 개별 전투 모드에서는 효과가 없습니다.
 */
declare const declareMatchDraw: (


) => string;

/**
 * 지정된 플레이어를 승자로 하여 경기를 즉시 종료합니다.
 * 이 액션은 개별 전투 모드에서만 효과가 있습니다.
 */
declare const declarePlayerVictory: (
/**
 * 이긴 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 팀 하나를 현재 라운드의 승자로 설정합니다.
 * 쟁탈 및 섬멸전 게임 모드에서만 작동합니다.
 */
declare const declareRoundVictory: (
/**
 * 라운드에서 승리한 팀입니다.
 * - `Type.Team.`
 */
roundWinningTeam: string | number | any[]
) => string;

/**
 * 지정된 팀을 승자로 하여 경기를 즉시 종료합니다.
 * 이 액션은 개별 전투 모드에서는 효과가 없습니다.
 */
declare const declareTeamVictory: (
/**
 * 이긴 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * 모든 더미 봇들을 경기에서 제외합니다.
 */
declare const destroyAllDummyBot: (


) => string;

/**
 * CREATE EFFECT에 의해 생성된
 * 모든 효과 개체를 제거합니다.
 */
declare const destroyAllEffects: (


) => string;

/**
 * CREATE HUD TEXT 액션에 의해
 * 생성된 모든 HUD 텍스트를 제거합니다.
 */
declare const destroyAllHudText: (


) => string;

/**
 * CREATE ICON에 의해 생성된
 * 모든 아이콘 개체를 제거합니다.
 */
declare const destroyAllIcons: (


) => string;

/**
 * CREATE IN-WORLD TEXT에 의해
 * 생성된 월드 내 텍스트를 모두 제거합니다.
 */
declare const destroyAllInWorldText: (


) => string;

/**
 * 특정 더미 봇을 경기에서 제외합니다.
 */
declare const destroyDummyBot: (
/**
 * DUMMY 봇을 제거할 팀입니다. 'All' 설정은
 * 개별 전투 게임 모드에서만, 'Team' 설정은
 * 팀 기반 게임 모드에서만 작동합니다.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * DUMMY 봇을 제거할 슬롯입니다.
 * - `Type.SlotRange.`
 */
slot: string | number | any[]
) => string;

/**
 * CREATE EFFECT에 의해 생성된
 * 효과 개체 하나를 제거합니다.
 */
declare const destroyEffect: (
/**
 * 제거할 효과 개체를 지정합니다.
 * 여기에 사용되는 개체는
 * LAST CREATED ENTITY 또는
 * 예전에 LAST CREATED ENTITY
 * 가 담긴 변수입니다.
 * - `Type.Entity.`
 */
entity: string | number | any[]
) => string;

/**
 * CREATE HUD TEXT 액션에 의해
 * 생성된 HUD 텍스트를 제거합니다.
 */
declare const destroyHudText: (
/**
 * 제거할 HUD 텍스트를 지정합니다.
 * 여기에 사용되는 ID는
 * LAST TEXT ID 또는 예전에
 * LAST TEXT ID가 담긴 변수입니다.
 * - `Type.Text.`
 */
textId: string | number | any[]
) => string;

/**
 * CREATE ICON에 의해 생성된
 * 아이콘 개체를 제거합니다.
 */
declare const destroyIcon: (
/**
 * 제거할 아이콘 개체를 지정합니다.
 * 여기에 사용되는 개체는
 * LAST CREATED ENTITY 또는
 * 예전에 LAST CREATED ENTITY
 * 가 담긴 변수입니다.
 * - `Type.Entity.`
 */
entity: string | number | any[]
) => string;

/**
 * CREATE IN-WORD TEXT에 의해
 * 생성된 월드 내 텍스트를 제거합니다.
 */
declare const destroyInWorldText: (
/**
 * 제거할 월드 내 텍스트를 지정합니다.
 * 여기에 사용되는 ID는
 * LAST TEXT ID 또는 예전에
 * LAST TEXT ID가 담긴 변수입니다.
 * - `Type.Text.`
 */
textId: string | number | any[]
) => string;

/**
 * 다시 사용하거나 경기가
 * 종료될 때까지 아나운서의
 * 게임 모드 안내 음성을
 * 사용하지 않도록 합니다.
 */
declare const disableBuiltInGameModeAnnouncer: (


) => string;

/**
 * 게임 모드 자체에서 경기
 * 종료가 되지 않도록 합니다.
 * 스크립트 명령어로만 경기를
 * 마칠 수 있도록 허용합니다.
 */
declare const disableBuiltInGameModeCompletion: (


) => string;

/**
 * 다시 사용하거나
 * 경기가 종료될 때까지
 * 모든 게임 모드 음악을
 * 사용하지 않도록 합니다.
 */
declare const disableBuiltInGameModeMusic: (


) => string;

/**
 * 플레이어에 대해 자동
 * 부활 기능을 비활성화하고,
 * 스크립트 명령어를 통한
 * 부활만 허용합니다.
 */
declare const disableBuiltInGameModeRespawning: (
/**
 * 부활 설정의 영향을
 * 받게 되는 플레이어입니다.
 * - `Type.PlayersParam.`
 */
players: string | number | any[]
) => string;

/**
 * 게임 모드 자체에서
 * 플레이어 점수와 팀 점수를
 * 변경하지 못하도록 하며,
 * 스크립트 명령어로만
 * 점수 변경이 가능하도록 합니다.
 */
declare const disableBuiltInGameModeScoring: (


) => string;

/**
 * 플레이어에 대한
 * ENABLE DEATH SPECTATE ALL PLAYERS
 * 액션의 효과를 취소합니다.
 */
declare const disableDeathSpectateAllPlayers: (
/**
 * 사망 후 관전 설정 기본값을
 * 복원할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어를 대상으로
 * ENABLE DEATH SPECTATE TARGET HUD
 * 액션의 효과를 취소합니다.
 */
declare const disableDeathSpectateTargetHud: (
/**
 * 사망 후 관전 시 자신의 HUD를
 * 다시 보게 될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어가 논리적 버튼을
 * 사용 못 하게 하여 눌러도
 * 아무 효과 없도록 합니다.
 */
declare const disallowButton: (
/**
 * 버튼을 사용 못 하게
 * 할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 사용할 수 없게 된
 * 논리적 버튼입니다.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * DISABLE BUILT-IN GAME MODE ANNOUNCER
 * 액션의 효과를 취소합니다.
 */
declare const enableBuiltInGameModeAnnouncer: (


) => string;

/**
 * DISABLE BUILT-IN GAME MODE COMPLETION
 * 액션의 효과를 취소합니다.
 */
declare const enableBuiltInGameModeCompletion: (


) => string;

/**
 * DISABLE BUILT-IN GAME MODE MUSIC
 * 액션의 효과를 취소합니다.
 */
declare const enableBuiltInGameModeMusic: (


) => string;

/**
 * 플레이어에 대해
 * DISABLE BUILT-IN GAME MODE RESPAWNING
 * 액션의 효과를 취소합니다.
 */
declare const enableBuiltInGameModeRespawning: (
/**
 * 부활 설정의 영향을
 * 받게 되는 플레이어입니다.
 * - `Type.PlayersParam.`
 */
players: string | number | any[]
) => string;

/**
 * DISABLE BUILT-IN GAME MODE SCORING
 * 액션의 효과를 취소합니다.
 */
declare const enableBuiltInGameModeScoring: (


) => string;

/**
 * 플레이어 사망 시,
 * 아군뿐 아니라 모든 플레이어를
 * 관전할 수 있도록 허용합니다.
 */
declare const enableDeathSpectateAllPlayers: (
/**
 * 모든 플레이어를
 * 관전할 수 있도록
 * 허용된 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 사망 후 관전 시
 * 플레이어 자신의 HUD 대신
 * 관전 대상의 HUD를 볼 수 있습니다.
 */
declare const enableDeathSpectateTargetHud: (
/**
 * 사망 후 관전 시
 * 대상의 관전 대상의
 * HUD를 보게 될
 * 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 경기를 해당 게임 모드의
 * 영웅 선택 단계로 되돌립니다.
 * 게임이 진행 중일 때만 작동합니다.
 */
declare const goToAssembleHeroes: (


) => string;

/**
 * 플레이어를 즉시 치유합니다.
 * 이 기능으로 죽은 플레이어가
 * 부활하지는 않습니다.
 */
declare const heal: (
/**
 * 생명력을 회복할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 치유 행동을 한 것으로
 * 집계될 플레이어입니다.
 * HEALER가 NULL이면
 * 집계될 플레이어가
 * 없음을 의미합니다.
 * - `Type.AssisterParam.`
 */
healer: string | number | any[],
/**
 * 적용할 치유량입니다.
 * 이 치유량은 강화 효과,
 * 약화 효과 등에 의해
 * 달라질 수 있습니다.
 * 치유량 최대치는
 * 각 플레이어의
 * 최대 생명력입니다.
 * - `Type.Number.`
 */
amount: string | number | any[]
) => string;

/**
 * 플레이어를 즉시 처치합니다.
 */
declare const kill: (
/**
 * 처치될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 처치를 기록한 것으로
 * 집계될 플레이어입니다.
 * KILLER가 NULL이면
 * 집계될 플레이어가
 * 없음을 의미합니다.
 * - `Type.AssisterParam.`
 */
killer: string | number | any[]
) => string;

/**
 * 액션 목록을 처음부터 다시 시작합니다.
 * 무한 반복을 방지하려면 액션 목록의 시작과
 * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
 */
declare const loop: (


) => string;

/**
 * 이 액션의 조건이 TRUE인 경우
 * 액션 목록을 처음부터 다시 시작합니다.
 * FALSE인 경우 다음 액션을 진행합니다.
 * 무한 반복을 방지하려면 액션 목록의 시작과
 * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
 */
declare const loopIf: (
/**
 * 반복 여부를 지정합니다.
 * - `Type.Bool.`
 */
condition: string | number | any[]
) => string;

/**
 * 조건 목록의 조건이 하나라도 FALSE인 경우
 * 액션 목록을 처음부터 다시 시작합니다.
 * 모두 TRUE인 경우 다음 액션을 진행합니다.
 * 무한 반복을 방지하려면 액션 목록의 시작과
 * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
 */
declare const loopIfConditionIsFalse: (


) => string;

/**
 * 조건 목록의 조건이 하나라도 TRUE인 경우
 * 액션 목록을 처음부터 다시 시작합니다.
 * 모두 FALSE인 경우 다음 액션을 진행합니다.
 * 무한 반복을 방지하려면 액션 목록의 시작과
 * 이 액션 사이에 WAIT 액션을 실행해야 합니다.
 */
declare const loopIfConditionIsTrue: (


) => string;

/**
 * 게임 자체에 종속된
 * 전역 변수 값을 수정합니다.
 */
declare const modifyGlobalVariable: (
/**
 * 수정할 전역 변수입니다.
 * - `Type.IGlobal.`
 */
variable: string | number | any[],
/**
 * 변수값의 변경 방식입니다.
 * 일반적인 사칙연산,
 * 그리고 값의 추가 및 제거를 위한
 * ARRAY 연산 등의 옵션이 있습니다.
 * - `Type.Variable.`
 */
operation: string | number | any[],
/**
 * 수정에 사용되는 값입니다.
 * 산술연산의 경우 이것은
 * 두 피연산자 중 두 번째로,
 * 나머지 하나는 변수의
 * 현재 값으로 사용됩니다.
 * 배열 연산에서는
 * 이 값을 추가 또는 제거합니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * 인덱스에서 게임 자체에
 * 종속된 전역 변수 값을 수정합니다.
 */
declare const modifyGlobalVariableAtIndex: (
/**
 * 수정할 전역 변수입니다.
 * - `Type.IGlobal.`
 */
variable: string | number | any[],
/**
 * 수정할 배열의 인덱스입니다.
 * 인덱스가 배열의 끝을 벗어난 경우,
 * 해당 배열이 확장되며
 * 새 요소는 0의 값을 가집니다.
 * - `Type.Number.`
 */
index: string | number | any[],
/**
 * 변수값의 변경 방식입니다.
 * 일반적인 사칙연산,
 * 그리고 값의 추가 및 제거를 위한
 * ARRAY 연산 등의 옵션이 있습니다.
 * - `Type.Variable.`
 */
operation: string | number | any[],
/**
 * 수정에 사용되는 값입니다.
 * 산술연산의 경우 이것은
 * 두 피연산자 중 두 번째로,
 * 나머지 하나는 변수의
 * 현재 값으로 사용됩니다.
 * 배열 연산에서는
 * 이 값을 추가 또는 제거합니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * 플레이어의 점수(처치수)를 수정합니다.
 * 이 액션은 개별 전투
 * 모드에서만 효과가 있습니다.
 */
declare const modifyPlayerScore: (
/**
 * 점수를 수정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 점수 증감량입니다.
 * 양수인 경우 점수가 오르고
 * 음수인 경우 감소합니다.
 * - `Type.Number.`
 */
score: string | number | any[]
) => string;

/**
 * 지정된 플레이어가 가진 플레이어 변수 값을 수정합니다.
 */
declare const modifyPlayerVariable: (
/**
 * 변수를 수정할 플레이어입니다.
 * 플레이어가 다수인 경우,
 * 각각의 변수가 설정입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 수정할 플레이어의 변수입니다.
 * - `Type.IPlayer.`
 */
variable: string | number | any[],
/**
 * 변수값의 변경 방식입니다.
 * 일반적인 사칙연산,
 * 그리고 값의 추가 및 제거를 위한
 * ARRAY 연산 등의 옵션이 있습니다.
 * - `Type.Variable.`
 */
operation: string | number | any[],
/**
 * 수정에 사용되는 값입니다.
 * 사칙연산의 경우 이것은
 * 두 피연산자 중 두 번째로,
 * 나머지 하나는 변수의
 * 현재 값으로 사용됩니다.
 * 배열 연산에서는
 * 이 값을 추가 또는 제거합니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * 인덱스에서 지정된 플레이어가
 * 가진 플레이어 변수 값을 수정합니다.
 */
declare const modifyPlayerVariableAtIndex: (
/**
 * 변수를 수정할 플레이어입니다.
 * 플레이어가 다수인 경우,
 * 각각의 변수가 설정됩니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 변수를 수정할 플레이어입니다.
 * 플레이어가 다수인 경우,
 * 각각의 변수가 설정됩니다.
 * - `Type.IPlayer.`
 */
variable: string | number | any[],
/**
 * 수정할 배열의 인덱스입니다.
 * 인덱스가 배열의 끝을 벗어난 경우,
 * 해당 배열이 확장되며
 * 새 요소는 0의 값을 가집니다.
 * - `Type.Number.`
 */
index: string | number | any[],
/**
 * 변수값의 변경 방식입니다.
 * 일반적인 사칙연산,
 * 그리고 값의 추가 및 제거를 위한
 * ARRAY 연산 등의 옵션이 있습니다.
 * - `Type.Variable.`
 */
operation: string | number | any[],
/**
 * 수정에 사용되는 값입니다.
 * 산술연산의 경우 이것은
 * 두 피연산자 중 두 번째로,
 * 나머지 하나는 변수의
 * 현재 값으로 사용됩니다.
 * 배열 연산에서는
 * 이 값을 추가 또는 제거합니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * 한 팀 또는 두 팀 모두의 점수를 수정합니다.
 * 이 액션은 개별 전투 모드나 팀 점수가
 * 존재하지 않는 모드에서는 효과가 없습니다.
 */
declare const modifyTeamScore: (
/**
 * 점수를 변경할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * 점수 증감량입니다.
 * 양수인 경우 점수가 오르고
 * 음수인 경우 감소합니다.
 * - `Type.Number.`
 */
score: string | number | any[]
) => string;

/**
 * 경기 시간을 일시정지합니다.
 * 플레이어, 목표 로직, 게임 모드 진행 기준 등은
 * 일시정지의 영향을 받지 않습니다.
 */
declare const pauseMatchTime: (


) => string;

/**
 * 월드의 한 위치에 효과를 발생시킵니다.
 * 이 효과는 갱신되거나 제거할 필요 없도록
 * 짧게 유지되었다가 사라집니다.
 */
declare const playEffect: (
/**
 * 해당 효과를 보게 될 플레이어입니다.
 * - `Type.PlayersParam.`
 */
visibleTo: string | number | any[],
/**
 * 생성할 효과의 유형입니다.
 * - `Type.Play.`
 */
type: string | number | any[],
/**
 * 생성될 효과의 색상입니다.
 * 특정 팀을 선택한 경우,
 * 해당 팀이 보는 사람에게
 * 적인지 여부에 따라
 * 빨강 또는 파랑으로
 * 효과 색상이 설정됩니다.
 * - `Type.Color.`
 */
color: string | number | any[],
/**
 * 효과의 위치입니다.
 * 이 값이 플레이어인 경우
 * 해당 효과는 플레이어
 * 위치에서 발생하고,
 * 그 이외의 경우 이 값은
 * 월드 좌표로서 해석됩니다.
 * - `Type.Vector.`
 */
position: string | number | any[],
/**
 * 효과 반경(미터)입니다.
 * - `Type.Number.`
 */
radius: string | number | any[]
) => string;

/**
 * 지정된 플레이어의 스킨을 사용하여,
 * 지정된 영웅을 메모리에서
 * 허용하는 만큼 먼저 불러옵니다.
 * 빠르게 영웅을 바꿀 수 있으며,
 * 다음 영웅을 알고 있는 경우 유용합니다.
 */
declare const preloadHero: (
/**
 * 영웅을 미리 불러올 플레이어입니다.
 * 플레이어 당 한 번에 단 한 개의
 * PRELOAD HERO 액션만 활성화할 수 있습니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 지정된 플레이어가 미리 불러올 영웅입니다.
 * 배열에 여러 영웅을 지정한 경우,
 * 배열 초반에 지정된 영웅일수록
 * 우선순위가 가장 높습니다.
 * - `Type.Hero.`
 */
hero: string | number | any[]
) => string;

/**
 * 플레이어에 대해
 * 한 프레임 동안
 * 가상으로 버튼 하나를
 * 누르도록 강제합니다.
 */
declare const pressButton: (
/**
 * 가상 버튼 입력을
 * 강제할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 누를 버튼입니다.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * 플레이어가 사용할 수 있는 영웅 목록을
 * 게임 설정에 지정한 대로 복원합니다.
 * 플레이어의 현재 영웅을 더 이상 사용할 수 없게 되면
 * 플레이어는 강제로 다른 영웅을 선택하여
 * 적절한 생성 지점에서 부활합니다.
 */
declare const resetPlayerHeroAvailability: (
/**
 * 영웅 목록을 초기화할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어의 생존 여부와 관계 없이,
 * 플레이어를 적절한 생성 지점에서
 * 최대 생명력으로 부활시킵니다.
 */
declare const respawn: (
/**
 * 부활시킬 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 전환 없이 플레이어를
 * 사망한 자리에서 즉시 부활시킵니다.
 */
declare const resurrect: (
/**
 * 부활하게 될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어의 기술1 활성화 여부를 설정합니다.
 */
declare const setAbility1Enabled: (
/**
 * 기술 1 사용 여부를 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어가 기술 1을
 * 사용할 수 있는지 여부를 지정합니다.
 * TRUE, FALSE 등의 부울 값
 * 또는 COMPARE를 사용합니다.
 * - `Type.Bool.`
 */
enabled: string | number | any[]
) => string;

/**
 * 플레이어의 기술2 활성화 여부를 설정합니다.
 */
declare const setAbility2Enabled: (
/**
 * 기술 2 사용 여부를 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어가 기술 2을
 * 사용할 수 있는지 여부를 지정합니다.
 * TRUE, FALSE 등의 부울 값
 * 또는 COMPARE를 사용합니다.
 * - `Type.Bool.`
 */
enabled: string | number | any[]
) => string;

/**
 * 플레이어의 조준 속도를
 * 일반 조준 속도 대비
 * % 비율로 설정합니다.
 */
declare const setAimSpeed: (
/**
 * 조준 속도를 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 일반 조준 속도에 비례하도록
 * 설정할 플레이어의 조준 속도입니다.
 * - `Type.Number.`
 */
turnSpeedPercent: string | number | any[]
) => string;

/**
 * 플레이어가 주는 피해를
 * 순수 피해량 대비
 * % 비율로 설정합니다.
 */
declare const setDamageDealt: (
/**
 * 주는 피해량을 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 순수 피해량에 비례하도록
 * 설정할 플레이어의
 * 주는 피해량 비율입니다.
 * - `Type.Number.`
 */
damageDealtPercent: string | number | any[]
) => string;

/**
 * 플레이어가 받는 피해를
 * 순수 피해량 대비
 * % 비율로 설정합니다.
 */
declare const setDamageReceived: (
/**
 * 받는 피해량을 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 순수 피해량에 비례하도록
 * 설정할 플레이어의
 * 받는 피해량 비율입니다.
 * - `Type.Number.`
 */
damageReceivedPercent: string | number | any[]
) => string;

/**
 * 플레이어가 지정된 방향을
 * 바라보도록 설정합니다.
 */
declare const setFacing: (
/**
 * 바라보는 방향을
 * 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어가 바라보게
 * 되는 단위 방향입니다.
 * 이 값은 내부적으로 정규화됩니다.
 * - `Type.Vector.`
 */
direction: string | number | any[]
) => string;

/**
 * 게임 자체에 속한
 * 전역 변수에 값을 저장합니다.
 */
declare const setGlobalVariable: (
/**
 * 어느 전역 변수에
 * 값을 저장할지 지정합니다.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * 저장할 값입니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * 게임 자체에 종속된 전역 변수의
 * 배열을 찾거나 생성한 후,
 * 값 하나를 배열의
 * 특정 인덱스에 저장합니다.
 */
declare const setGlobalVariableAtIndex: (
/**
 * 어떤 전연 변수 값이
 * 수정할 배열인지를 지정합니다.
 * 변수값이 배열이 아닌 경우,
 * 해당 값은 빈 배열이 됩니다.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * 수정할 배열의 인덱스입니다.
 * 인덱스가 배열의 끝을 벗어난 경우,
 * 해당 배열이 확장되며
 * 새 요소는 0의 값을 가집니다.
 * - `Type.Number.`
 */
index: string | number | any[],
/**
 * ARRAY에 저장할 값입니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * 플레이어의 이동 중력을
 * 일반 이동 중력 대비
 * % 비율로 설정합니다.
 */
declare const setGravity: (
/**
 * 이동 중력을 설정할
 * 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 일반 이동 중력에 비례하도록
 * 설정할 플레이어의
 * 개인 이동 중력 비율입니다.
 * - `Type.Number.`
 */
gravityPercent: string | number | any[]
) => string;

/**
 * 플레이어가 주는 치유량을
 * 순수 치유량 대비
 * % 비율로 설정합니다.
 */
declare const setHealingDealt: (
/**
 * 이동 중력을 설정할
 * 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 일반 이동 중력에 비례하도록
 * 설정할 플레이어의
 * 개인 이동 중력 비율입니다.
 * - `Type.Number.`
 */
healingDealtPercent: string | number | any[]
) => string;

/**
 * 플레이어가 받는 치유량을
 * 순수 치유량 대비
 * % 비율로 설정합니다.
 */
declare const setHealingReceived: (
/**
 * 받는 치유량을 설정할
 * 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 받는 순수 치유량에
 * 비례하도록 설정할
 * 플레이어의 받는
 * 치유량 비율입니다.
 * - `Type.Number.`
 */
healingReceivedPercent: string | number | any[]
) => string;

/**
 * 플레이어를 다른
 * 모든 플레이어 또는
 * 적에게만 보이지 않게 합니다.
 */
declare const setInvisible: (
/**
 * 보이지 않게 될
 * 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어가 보이지 않게 할
 * 플레이어를 지정합니다.
 * - `Type.InvisibleTo.`
 */
invisibleTo: string | number | any[]
) => string;

/**
 * (화면 상단에 표시되는)
 * 현재 경기 시간을 설정합니다.
 * 이를 통해 경기 지속시간을
 * 조정하거나 영웅 선택 또는
 * 준비 시간을 변경할 수 있습니다.
 */
declare const setMatchTime: (
/**
 * 경기 시간(초)입니다.
 * - `Type.Number.`
 */
time: string | number | any[]
) => string;

/**
 * 플레이어의 최대
 * 생명력을 순수 생명력 대비
 * % 비율로 설정합니다.
 * 이 액션을 수행하면
 * 플레이어의 현재 생명력이
 * 새로운 최대 생명력 수치를
 * 넘지 않게 됩니다.
 */
declare const setMaxHealth: (
/**
 * 최대 생명력을
 * 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 순수 최대 생명력에
 * 비례하도록 설정할
 * 플레이어의 최대
 * 생명력 비율입니다.
 * - `Type.Number.`
 */
healthPercent: string | number | any[]
) => string;

/**
 * 플레이어의 이동 속도를
 * 순수 이동 속도 대비
 * % 비율로 설정합니다.
 */
declare const setMoveSpeed: (
/**
 * 이동 속도를 설정할
 * 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 순수 최대 생명력에
 * 비례하도록 설정할
 * 플레이어의 최대
 * 생명력 비율입니다.
 * - `Type.Number.`
 */
moveSpeedPercent: string | number | any[]
) => string;

/**
 * 일반적으로 지정된 플레이어에게
 * 목표를 알려주기 위해,
 * 화면 중앙 상단에 텍스트가
 * 표시되도록 설정합니다.
 */
declare const setObjectiveDescription: (
/**
 * 해당 메시지를
 * 보게 될 플레이어입니다.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * 표시할 메시지입니다.
 * - `Type.String.`
 */
header: string | number | any[],
/**
 * 이 액션의 입력 정보 중
 * 어떤 항목을 지속적으로
 * 재확인할 것인지 지정합니다.
 * 해당 메시지는 입력 정보의
 * 새로운 값을 계속 묻게 되며,
 * 재확인한 값을 사용합니다.
 * - `Type.ObjectiveDescriptionReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * 플레이어가 사용할 수 있는
 * 영웅 목록을 설정합니다.
 * 플레이어의 현재 영웅을
 * 더 이상 사용할 수 없게 되면
 * 플레이어는 강제로
 * 다른 영웅을 선택하여
 * 적절한 생성 지점에서 부활합니다.
 */
declare const setPlayerAllowedHeroes: (
/**
 * 영웅 목록을 설정할
 * 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 사용할 수 있는 영웅입니다.
 * 제공된 영웅이 없는 경우
 * 이 액션은 아무 효과가 없습니다.
 * - `Type.Hero.`
 */
hero: string | number | any[]
) => string;

/**
 * 플레이어의 점수
 * (처치수)를 설정합니다.
 * 이 액션은 개별 전투
 * 모드에서만 효과가 있습니다.
 */
declare const setPlayerScore: (
/**
 * 점수를 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 설정할 점수입니다.
 * - `Type.Number.`
 */
score: string | number | any[]
) => string;

/**
 * 지정된 플레이어에
 * 속한 플레이어 변수에
 * 값 하나를 저장합니다.
 */
declare const setPlayerVariable: (
/**
 * 변수를 설정할 플레이어입니다.
 * 플레이어가 다수인 경우,
 * 각각의 변수가 설정됩니다
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 값을 저장할 플레이어의
 * 변수를 지정합니다.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * 저장할 값입니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * 한 플레이어에 종속된
 * 플레이어 변수의 배열을
 * 찾거나 생성한 후,
 * 값 하나를 배열의
 * 특정 인덱스에 저장합니다.
 */
declare const setPlayerVariableAtIndex: (
/**
 * 변수를 수정할 플레이어입니다.
 * 플레이어가 다수인 경우,
 * 각각의 변수가 수정됩니다
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어 변수 값을
 * 수정할 배열에 지정합니다.
 * 변수값이 배열이 아닌 경우,
 * 해당 값은 빈 배열이 됩니다.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * 수정할 배열의 인덱스입니다.
 * 인덱스가 배열의 끝을 벗어난 경우,
 * 해당 배열이 확장되며
 * 새 요소는 0의 값을 가집니다.
 * - `Type.Number.`
 */
index: string | number | any[],
/**
 * 배열에 저장할 값입니다.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * 플레이어의 기본 발사
 * 활성화 여부를 설정합니다.
 */
declare const setPrimaryFireEnabled: (
/**
 * 기본 발사 사용 여부를
 * 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어의 기본 발사 사용여부입니다.
 * TRUE, FALSE 등의 부울 값
 * 또는 COMPARE를 사용합니다.
 * - `Type.Bool.`
 */
enabled: string | number | any[]
) => string;

/**
 * 플레이어의 투사체 중력을
 * 일반 투사체 중력의
 * 지정된 비율로 설정합니다.
 */
declare const setProjectileGravity: (
/**
 * 투사체 중력을
 * 설정할 플레이어입니다
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 일반 투사체 중력에
 * 비례하도록 설정할
 * 플레이어의 개인
 * 투사체 중력 비율입니다.
 * - `Type.Number.`
 */
projectileGravityPercent: string | number | any[]
) => string;

/**
 * 플레이어의 투사체 속도를
 * 일반 투사체 속도의
 * 지정된 비율로 설정합니다.
 */
declare const setProjectileSpeed: (
/**
 * 투사체 속도를 설정할
 * 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 일반 투사체 속도에
 * 비례하도록 설정할
 * 플레이어의 개인
 * 투사체 속도 비율입니다.
 * - `Type.Number.`
 */
projectileSpeedPercent: string | number | any[]
) => string;

/**
 * 플레이어의 사망에서
 * 부활 사이의 시간을 설정합니다.
 * 이 액션 실행 시점에서
 * 이미 사망한 플레이어의 경우
 * 변경사항이 다음
 * 사망 시부터 적용됩니다.
 */
declare const setRespawnMaxTime: (
/**
 * 최대 부활 시간을
 * 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 사망과 부활 사이의 시간(초)입니다.
 * - `Type.Number.`
 */
time: string | number | any[]
) => string;

/**
 * 플레이어의 보조 발사
 * 활성화 여부를 설정합니다.
 */
declare const setSecondaryFireEnabled: (
/**
 * 보조 발사 사용 여부를
 * 설정할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어의 보조 발사 사용여부입니다.
 * TRUE, FALSE 등의 부울 값
 * 또는 COMPARE를 사용합니다.
 * - `Type.Bool.`
 */
enabled: string | number | any[]
) => string;

/**
 * 모든 플레이어, 투사체,
 * 효과, 게임 모드 로직 등
 * 게임 전체를 대상으로 하여
 * 시뮬레이션 비율을 설정합니다.
 */
declare const setSlowMotion: (
/**
 * 정상 속도 대비
 * 시뮬레이션 비율입니다.
 * 최대 100%까지 설정 가능합니다.
 * - `Type.Number.`
 */
speedPercent: string | number | any[]
) => string;

/**
 * 지정된 상태를 플레이어에게 적용합니다.
 * 이 상태는 지정된 지속 시간 동안,
 * 또는 CLEAR STATUS 액션에 의해
 * 제거될 때까지 유지됩니다.
 */
declare const setStatus: (
/**
 * 상태를 적용할 대상 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 이 상태가 적용된 플레이어가
 * 사망하는 경우 도움을 기록한 것으로
 * 집계될 플레이어이를 지정합니다.
 * ASSISTER가 NULL이면
 * 집계될 플레이가 없음을 의미합니다.
 * - `Type.AssisterParam.`
 */
assister: string | number | any[],
/**
 * 플레이어에게 적용할 상태입니다.
 * 영웅 능력에 의해 적용되는
 * 상태와 유사하게 동작합니다.
 * - `Type.Status.`
 */
status: string | number | any[],
/**
 * 해당 상태의 지속 시간(초)입니다.
 * 상태가 CLEAR STATUS 액션 실행에 의해
 * 중지될 때 까지 지속되게 하려면
 * 9999등 매우 긴 시간으로 설정하십시오.
 * - `Type.Number.`
 */
duration: string | number | any[]
) => string;

/**
 * 한 팀 또는 두 팀
 * 모두의 점수를 설정합니다.
 * 이 액션은 개별
 * 전투 모드나 팀 점수가
 * 존재하지 않는
 * 모드에서는 효과가 없습니다.
 */
declare const setTeamScore: (
/**
 * 점수를 설정할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * 설정할 점수입니다.
 * - `Type.Number.`
 */
score: string | number | any[]
) => string;

/**
 * 플레이어의 궁극기
 * 활성화 여부를 설정합니다.
 */
declare const setUltimateAbilityEnabled: (
/**
 * 궁극기 사용에 있어
 * 영향을 받는 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어가 궁극기를
 * 사용할 수 있는지 여부를 지정합니다.
 * TRUE, FALSE 등의 부울 값
 * 또는 COMPARE를 사용합니다.
 * - `Type.Bool.`
 */
enabled: string | number | any[]
) => string;

/**
 * 플레이어의 궁극기 충전량을
 * 최대 충전량의 비율로 설정합니다.
 */
declare const setUltimateCharge: (
/**
 * 궁극기 사용에 있어
 * 영향을 받는 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 최대 충전량 비율입니다.
 * - `Type.Number.`
 */
chargePercent: string | number | any[]
) => string;

/**
 * 액션 목록에 있는
 * 지정된 수의 액션을 건너뜁니다.
 */
declare const skip: (
/**
 * 건너뛸 액션의 수입니다.
 * 이 액션은 제외한 개수입니다.
 * - `Type.Number.`
 */
numberOfActions: string | number | any[]
) => string;

/**
 * 이 액션의 조건이 TRUE일 때,
 * 액션 목록에 있는 지정된
 * 수만큼의 액션을 건너뜁니다.
 * 이 외의 경우 다음 액션으로 진행합니다.
 */
declare const skipIf: (
/**
 * 건너뛰기가 일어나는지
 * 여부를 지정합니다.
 * - `Type.Bool.`
 */
condition: string | number | any[],
/**
 * 건너뛸 액션의 수입니다.
 * 이 액션은 제외한 개수입니다.
 * - `Type.Number.`
 */
numberOfActions: string | number | any[]
) => string;

/**
 * 지정된 플레이어에게
 * 보이도록 작은 메시지를
 * 조준선 아래에 표시합니다.
 */
declare const smallMessage: (
/**
 * 해당 메시지를
 * 보게 될 플레이어입니다.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * 표시할 메시지입니다.
 * - `Type.String.`
 */
header: string | number | any[]
) => string;

/**
 * 플레이어를 지정된 방향으로
 * 가속하기 시작합니다.
 */
declare const startAccelerating: (
/**
 * 가속하기 시작할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 가속을 적용할 단위 방향입니다.
 * 이 값은 내부적으로 정규화됩니다.
 * - `Type.Vector.`
 */
direction: string | number | any[],
/**
 * 가속 비율(제곱초당 미터)입니다.
 * 중력이나 표면 마찰력을 이겨내려면
 * 이 값이 매우 높아야 할 수 있습니다.
 * - `Type.Number.`
 */
rate: string | number | any[],
/**
 * 플레이어의 가속이 중지되는 속력입니다.
 * 중력 및 표면 마찰력 때문에
 * 이 속도에 도달하기는 불가능할 수 있습니다.
 * - `Type.Number.`
 */
maxSpeed: string | number | any[],
/**
 * 방향이 플레이어의 월드 좌표
 * 또는 로컬 좌표 중 어느 쪽에 대해
 * 상대적인지 여부를 지정합니다.
 * - `Type.Relative.`
 */
relative: string | number | any[],
/**
 * 이 액션의 입력 정보 중
 * 어떤 항목을 지속적으로
 * 재확인할 것인지 지정합니다.
 * 해당 액션은 입력 정보의
 * 새로운 값을 계속 묻게 되며,
 * 재확인한 값을 사용합니다.
 * - `Type.StartAcceleratingReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * 카메라가 지정된 방향을
 * 바라보도록 하여 배치합니다.
 */
declare const startCamera: (
/**
 * 카메라를 해당 위치에
 * 배치할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 카메라 위치입니다.
 * 지속적으로 확인됩니다.
 * - `Type.Vector.`
 */
eyePosition: string | number | any[],
/**
 * 카메라가 바라보는 방향입니다.
 * 지속적으로 확인됩니다.
 * - `Type.Vector.`
 */
lookAtPosition: string | number | any[],
/**
 * 위치 변경 시 카메라 이동의
 * 블렌딩 속도를 설정합니다.
 * 0인 경우 블렌딩하지 않고
 * 위치만 즉시 변경한다는 뜻입니다.
 * - `Type.Number.`
 */
blendSpeed: string | number | any[]
) => string;

/**
 * DAMAGER가 RECEIVER에게
 * 주는 피해를 수정하기 시작합니다.
 * 이 DAMAGE MODIFICATION을 참조하려면
 * LAST DAMAGE MODIFICATION ID 값을 사용하십시오.
 * DAMAGE MODIFICATION이 너무 많은 경우
 * 이 액션은 실패할 수 있습니다.
 */
declare const startDamageModification: (
/**
 * (DAMAGER의 공격을 받는 경우)
 * 받는 피해를 수정할 플레이어입니다.
 * - `Type.PlayersParam.`
 */
receivers: string | number | any[],
/**
 * (RECEIVER를 공격하는 경우)
 * 주는 피해를 변경할 플레이어입니다.
 * - `Type.PlayersParam.`
 */
damagers: string | number | any[],
/**
 * DAMAGER의 공격을 받는 경우
 * RECEIVER에게 적용할 피해 비율입니다.
 * - `Type.Number.`
 */
damagePercent: string | number | any[],
/**
 * 이 액션의 입력 정보 중
 * 어떤 항목을 지속적으로
 * 재확인할 것인지 지정합니다.
 * 해당 액션은 입력 정보의
 * 새로운 값을 계속 묻게 되며,
 * 재확인한 값을 사용합니다.
 * - `Type.DamageModificationReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * DAMAGE OVER TIME (DOT)
 * 인스턴스를 시작합니다.
 * 이 DOT는 지정된 지속 시간 동안
 * 또는 스크립트에 의해
 * 중지될 때까지 유지됩니다.
 * 이 DAMAGE OVER TIME에
 * 대한 참조를 얻으려면
 * LAST DAMAGE OVER TIME ID
 * 값을 사용하십시오.
 */
declare const startDamageOverTime: (
/**
 * DAMAGE OVER TIME을
 * 적용할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 피해를 주는 행동을 한 것으로
 * 집계될 플레이어입니다.
 * DAMAGER가 NULL이면
 * 집계될 플레이어가
 * 없음을 의미합니다.
 * - `Type.AssisterParam.`
 */
damager: string | number | any[],
/**
 * DAMAGE OVER TIME의
 * 지속 시간(초)입니다.
 * DAMAGE OVER TIME이
 * 스크립트에 의해
 * 중지될 때까지 지속되게 하려면
 * 지속 시간을 매우 길게
 * 설정하십시오. (9999 등)
 * - `Type.Number.`
 */
duration: string | number | any[],
/**
 * DAMAGE OVER TIME의
 * 초당 피해량입니다.
 * - `Type.Number.`
 */
damagePerSecond: string | number | any[]
) => string;

/**
 * 플레이어를 지정된
 * 방향을 향해 회전시킵니다.
 */
declare const startFacing: (
/**
 * 회전시킬 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어가 궁극적으로
 * 바라보게 되는 단위 방향입니다.
 * 이 값은 내부적으로 정규화됩니다.
 * - `Type.Vector.`
 */
direction: string | number | any[],
/**
 * 초당 회전율(도)입니다.
 * - `Type.Number.`
 */
turnRate: string | number | any[],
/**
 * 방향이 플레이어의
 * 월드 좌표 또는 로컬 좌표 중
 * 어느 쪽에 대해 상대적인지
 * 여부를 지정합니다.
 * - `Type.Relative.`
 */
relative: string | number | any[],
/**
 * 이 액션의 입력 정보 중
 * 어떤 항목을 지속적으로
 * 재확인할 것인지 지정합니다.
 * 해당 액션은 입력 정보의
 * 새로운 값을 계속 묻게 되며,
 * 재확인한 값을 사용합니다.
 * - `Type.FacingReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * 플레이어를 대상으로 지정된 영웅을 강제 선택하도록 하며,
 * 필요시 현재 위치에 즉시 부활시킵니다.
 * 이 영웅은 STOP FORCING PLAYER TO BE HERO
 * 액션이 실행되기 전까지 해당 플레이어가
 * 유일하게 사용할 수 있는 영웅입니다.
 */
declare const startForcingPlayerToBeHero: (
/**
 * 지정된 영웅이 강제
 * 선택되는 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어에게 강제로
 * 설정된 영웅입니다.
 * - `Type.Hero.`
 */
hero: string | number | any[]
) => string;

/**
 * 지정된 게임 모드에서 원래 사용되는
 * 전투준비실인지와는 관계없이,
 * 팀을 지정된 전투준비실에 강제로 생성합니다.
 * 이 액션은 점령, 점령/호위,
 * 호위 전장에서만 효과가 있습니다.
 */
declare const startForcingSpawnRoom: (
/**
 * 전투준비실을
 * 강제할 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * 강제된 전투준비실의 번호입니다.
 * 0이 첫 번째 전투준비실이며,
 * 1이 두 번째, 2가 세 번째입니다.
 * 지정된 방이 존재하지 않는 경우,
 * 모든 플레이어는 일반
 * 전투준비실을 사용합니다.
 * - `Type.Number.`
 */
room: string | number | any[]
) => string;

/**
 * 플레이어의 최대 및
 * 최소 이동 수치를 정의합니다.
 * 강제 이동되거나 이동이
 * 제한될 수 있습니다.
 */
declare const startForcingThrottle: (
/**
 * 강제 이동되거나 이동이
 * 제한될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 전방 달리기의 최소값을 설정합니다.
 * 0이면 플레이어가 정지할 수 있지만,
 * 1일 경우 최대 속도로 강제 전방 이동합니다.
 * - `Type.Number.`
 */
minForward: string | number | any[],
/**
 * 전방 달리기의 최대값을 설정합니다.
 * 0이면 플레이어가 움직일 수 없지만,
 * 1일 경우 원하는 대로 전방 이동이 가능합니다.
 * - `Type.Number.`
 */
maxForward: string | number | any[],
/**
 * 후방 달리기의 최소값을 설정합니다.
 * 0이면 플레이어가 정지할 수 있지만,
 * 1일 경우 최대 속도로 강제 후방 이동합니다.
 * - `Type.Number.`
 */
minBackward: string | number | any[],
/**
 * 후방 달리기의 최대값을 설정합니다.
 * 0이면 플레이어가 움직일 수 없지만,
 * 1일 경우 원하는 대로 후방 이동이 가능합니다.
 * - `Type.Number.`
 */
maxBackward: string | number | any[],
/**
 * 측방 달리기의 최소값을 설정합니다.
 * 0이면 플레이어가 정지할 수 있지만,
 * 1일 경우 최대 속도로 강제 좌우 측방 이동합니다.
 * - `Type.Number.`
 */
minSideways: string | number | any[],
/**
 * 측방 달리기의 최대값을 설정합니다.
 * 0이면 플레이어가 움직일 수 없지만,
 * 1일 경우 원하는 대로 좌우 측방 이동이 가능합니다.
 * - `Type.Number.`
 */
maxSideways: string | number | any[]
) => string;

/**
 * HEAL OVER TIME 인스턴스를 시작합니다.
 * 이 HEAL OVER TIME은 지정된 지속 시간이 경과하거나
 * 스크립트에 의해 중지되기 전까지 유지됩니다.
 * 이 HEAL OVER TIME을 참조하려면
 * LAST HEAL OVER TIME ID 값을 사용하십시오.
 */
declare const startHealOverTime: (
/**
 * HEAL OVER TIME을
 * 적용할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 치유 행동을 한 것으로
 * 집계될 플레이어입니다.
 * HEALER가 NULL이면
 * 집계될 플레이어가
 * 없음을 의미합니다.
 * - `Type.AssisterParam.`
 */
healer: string | number | any[],
/**
 * HEAL OVER TIME의 지속 시간(초)입니다.
 * HEAL OVER TIME이 스크립트에 의해
 * 중지될 때까지 지속되게 하려면
 * 9999등 매우 긴 시간으로 설정하십시오.
 * - `Type.Number.`
 */
duration: string | number | any[],
/**
 * HEAL OVER TIME의 초당 치유량입니다.
 * - `Type.Number.`
 */
healingPerSecond: string | number | any[]
) => string;

/**
 * STOP HOLDING BUTTON
 * 액션에 의해 중지되기 전까지
 * 가상으로 버튼하나를 누르도록
 * 플레이어에게 강제합니다.
 */
declare const startHoldingButton: (
/**
 * 가상으로 버튼을
 * 누르게 될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 가상으로 눌리게 되는
 * 논리적 버튼입니다.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * 특정 방향으로 움직이기 시작할 때
 * 플레이어의 쓰로틀(방향 입력 값 조정)
 * 을 설정하거나 추가합니다.
 * 기존 방향의 쓰로틀은 취소합니다.
 */
declare const startThrottleInDirection: (
/**
 * 스로틀이 설정되거나 추가될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 스로틀이 설정되거나 추가될 단위 방향입니다.
 * 이 값은 내부적으로 정규화 됩니다.
 * - `Type.Vector.`
 */
direction: string | number | any[],
/**
 * 스로틀 정도(또는 스로틀에 변화할 정도)입니다.
 * VALUE 1은 완전한 스로틀을 의미합니다.
 * - `Type.Number.`
 */
magnitude: string | number | any[],
/**
 * 방향이 플레이어의 월드 좌표 또는 로컬 좌표 중
 * 어느 쪽에 대해 상대적인지 여부를 지정합니다.
 * - `Type.Relative.`
 */
relative: string | number | any[],
/**
 * 이미 존재하는 스로틀이 교체되거나 추가될 여부입니다.
 * - `Type.StartThrottleBehavior.`
 */
behavior: string | number | any[],
/**
 * 이 액션의 입력 정보 중 어떤 항목을 지속적으로
 * 재확인할 것인지 지정합니다. 해당 액션은 입력 정보의
 * 새로운 값을 계속 묻게 되며, 재확인한 값을 사용합니다.
 * - `Type.StartThrottleReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * 플레이어의 스로틀(방향 입력값 조정) 변환(비율 증감 및 회전)을 시작합니다.
 * 기존의 START TRANSFORMING THROTTLE 행동을 취소합니다.
 */
declare const startTransformingThrottle: (
/**
 * Player - 스로틀이 변환될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * X Axis Scalar - 플레이어의 스로틀 X축(왼쪽에서 오른쪽)이 새로운
 * RELATIVE DIRECTION으로 회전하기 전에 이 값으로 곱해집니다.
 * 이 값은 지속적으로 평가됩니다. (프레임마다 업데이트)
 * - `Type.Number.`
 */
xAxisScalar: string | number | any[],
/**
 * Y Axis Scalar - 플레이어의 스로틀 Y축(왼쪽에서 오른쪽)이 새로운
 * RELATIVE DIRECTION으로 회전하기 전에 이 값으로 곱해집니다.
 * 이 값은 지속적으로 평가됩니다. (프레임마다 업데이트)
 * - `Type.Number.`
 */
yAxisScalar: string | number | any[],
/**
 * Relative Direction - 축의 스칼라 값이 적용된 이후, 플레이어는
 * 스로틀을 변환시켜이 단위 방향 벡터에 상대적이게 합니다. 예를 들어,
 * 스로틀 카메라를 상대적이게 하려면, 카메라가 바라보고 있는 방향을 제공하면 됩니다.
 * 이 값은 지속적으로 평가되며(프레임마다 업데이트) 내부적으로 정규화됩니다.
 * - `Type.Vector.`
 */
relativeDirection: string | number | any[]
) => string;

/**
 * 플레이어를 대상으로
 * START ACCELERATING
 * 액션에 의해 시작된
 * 가속을 중지합니다.
 */
declare const stopAccelerating: (
/**
 * 가속을 중지하게 되는
 * 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * START DAMAGE MODIFICATION 액션으로
 * 시작된 모든 DAMAGE MODIFCATION을 중지합니다.
 */
declare const stopAllDamageModifications: (


) => string;

/**
 * 플레이어를 대상으로
 * START DAMAGE OVER TIME
 * 액션에 의해 시작된 모든
 * DAMAGE OVER TIME을 중지합니다.
 */
declare const stopAllDamageOverTime: (
/**
 * 스크립트에 의한
 * DAMAGE OVER TIME이
 * 중지되는 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어를 대상으로
 * START HEAL OVER TIME
 * 액션에 의해 시작된 모든
 * HEAL OVER TIME을 중지합니다.
 */
declare const stopAllHealOverTime: (
/**
 * 스크립트에 의한
 * HEAL OVER TIME이
 * 중지되는 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * START CAMERA 또는 한명 이상의 플레이어들의
 * 모든 이동 중인 카메라 위치를 정지시킵니다.
 */
declare const stopCamera: (
/**
 * 카메라를 기본 뷰로
 * 되돌릴 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 진행 중인 전역 변수 추적을 중지하고
 * 해당 변수의 현재 값을 그대로 유지합니다.
 */
declare const stopChasingGlobalVariable: (
/**
 * 수정을 중지할
 * 전역 변수를 지정합니다.
 * - `Type.Variable.`
 */
variable: string | number | any[]
) => string;

/**
 * 진행 중인 플레이어 변수 추적을 중지하고
 * 해당 변수의 현재 값을 그대로 유지합니다.
 */
declare const stopChasingPlayerVariable: (
/**
 * 변수 반경을 중지할
 * 플레이어입니다.
 * 플레이어가 다수인 경우,
 * 각각의 변수는
 * 변경되지 않습니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 수정을 중지할
 * 플레이어의 변수를
 * 지정합니다.
 * - `Type.Variable.`
 */
variable: string | number | any[]
) => string;

/**
 * START DAMAGE MODIFICATION 액션으로
 * 시작된 DAMAGE MODIFICATION 하나를 중지합니다.
 */
declare const stopDamageModification: (
/**
 * 중지할 DAMAGE MODIFICATION 인스턴스를 지정합니다.
 * 이 ID는 LAST DAMAGE MODIFICATION ID이거나,
 * 이전에 LAST DAMAGE MODIFICATION ID가
 * 저장되었던 변수일 수 있습니다.
 * - `Type.DamageModification.`
 */
damageModificationId: string | number | any[]
) => string;

/**
 * START DAMAGE OVER TIME 액션에 의해 시작된
 * DAMAGE OVER TIME 인스턴스를 중지합니다.
 */
declare const stopDamageOverTime: (
/**
 * 중지할 DAMAGE OVER TIME 인스턴스를 지정합니다.
 * 여기에 사용되는 ID는 LAST DAMAGE MODIFICATION ID이거나,
 * 이전에 LAST DAMAGE MODIFICATION ID가
 * 저장되었던 변수일 수 있습니다.
 * - `Type.DamageOverTime.`
 */
damageOverTimeId: string | number | any[]
) => string;

/**
 * 플레이어에 대해 START FACING
 * 액션에 의해 시작된 회전을 중지합니다.
 */
declare const stopFacing: (
/**
 * 회전을 멈출 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어에 대해 지정된 영웅
 * 강제 선택 지정을 중지합니다.
 * 이를 통해 플레이어가 부활하지는 않지만,
 * 이후부터 영웅 선택을 할 수 있게 됩니다.
 */
declare const stopForcingPlayerToBeHero: (
/**
 * 지정된 영웅 강제 선택이
 * 해제될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 지정된 팀에 대한
 * START FORCING SPAWN ROOM
 * 액션의 효과를 취소합니다.
 */
declare const stopForcingSpawnRoom: (
/**
 * 일반 전투실을 사용해
 * 플레이를 재개하게 될 팀입니다.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * 플레이어에 대해
 * START FORCING THROTTLE
 * 액션의 효과를 취소합니다.
 */
declare const stopForcingThrottle: (
/**
 * 이동 입력 정보가
 * 복원될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * START HEAL OVER TIME
 * 액션에 의해 시작된
 * HEAL OVER TIME
 * 인스턴스를 중지합니다.
 */
declare const stopHealOverTime: (
/**
 * 중지할 HEAL OVER TIME 인스턴스를 지정합니다.
 * 여기에 사용되는 ID는 LAST HEAL OVER TIME ID 또는
 * 예전에 LAST HEAL OVER TIME ID가 담긴 변수입니다.
 * - `Type.HealOverTimeId.`
 */
healOverTimeId: string | number | any[]
) => string;

/**
 * 플레이어를 대상으로 한
 * START HOLDING BUTTON
 * 액션의 효과를 취소합니다.
 */
declare const stopHoldingButton: (
/**
 * 더 이상 가상으로 버튼을
 * 누르지 않을 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 더 이상 가상으로
 * 눌리지 않을
 * 논리적 버튼입니다.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * START THROTTLE IN DIRECTION 으로
 * 인해 발생된 행위를 취소합니다.
 */
declare const stopThrottleInDirection: (
/**
 * 기본 스로틀 조작으로 복원될 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어를 대상으로 START TRANSFORMING THROTTLE
 * 액션에 의해 시작된 스로틀 변환을 중지합니다.
 */
declare const stopTransformingThrottle: (
/**
 * Player - 스로틀 변환을 멈출 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어를 지정 위치로
 * 순간이동시킵니다.
 */
declare const teleport: (
/**
 * 순간이동할
 * 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * 플레이어가 순간이동하게 될 위치입니다.
 * 플레이어가 설정되어 있으면
 * 해당 플레이어의 위치가 사용됩니다.
 * - `Type.Vector.`
 */
position: string | number | any[]
) => string;

/**
 * 일시정지된 경기시간을 재개합니다.
 */
declare const unpauseMatchTime: (


) => string;

/**
 * 액션 목록 실행을 일시정지합니다.
 * WAIT이 중지되지 않는 한,
 * 나머지 액션은 일시정지 해제 후 실행됩니다.
 */
declare const wait: (
/**
 * 일시정지의 지속시간입니다.
 * - `Type.Number.`
 */
time: string | number | any[],
/**
 * WAIT이 중지되는 조건 및 방법을 설정합니다.
 * 조건 목록이 무시되면 WAIT은 중지되지 않으며,
 * 그 외의 경우에는 조건 목록에 의해
 * 액션 목록의 중지 혹은 재시작 여부가 결정됩니다.
 * - `Type.WaitBehavior.`
 */
waitBehavior: string | number | any[]
) => string;



declare const index_d$2_abort: typeof abort;
declare const index_d$2_abortIf: typeof abortIf;
declare const index_d$2_abortIfConditionIsFalse: typeof abortIfConditionIsFalse;
declare const index_d$2_abortIfConditionIsTrue: typeof abortIfConditionIsTrue;
declare const index_d$2_allowButton: typeof allowButton;
declare const index_d$2_applyImpluse: typeof applyImpluse;
declare const index_d$2_bigMessage: typeof bigMessage;
declare const index_d$2_chaseGlobalVariableAtRate: typeof chaseGlobalVariableAtRate;
declare const index_d$2_chaseGlobalVariableOverTime: typeof chaseGlobalVariableOverTime;
declare const index_d$2_chasePlayerVariableAtRate: typeof chasePlayerVariableAtRate;
declare const index_d$2_chasePlayerVariableOverTime: typeof chasePlayerVariableOverTime;
declare const index_d$2_clearStatus: typeof clearStatus;
declare const index_d$2_communicate: typeof communicate;
declare const index_d$2_createBeamEffect: typeof createBeamEffect;
declare const index_d$2_createDummyBot: typeof createDummyBot;
declare const index_d$2_createEffect: typeof createEffect;
declare const index_d$2_createHudText: typeof createHudText;
declare const index_d$2_createIcon: typeof createIcon;
declare const index_d$2_createInWorldText: typeof createInWorldText;
declare const index_d$2_damage: typeof damage;
declare const index_d$2_declareMatchDraw: typeof declareMatchDraw;
declare const index_d$2_declarePlayerVictory: typeof declarePlayerVictory;
declare const index_d$2_declareRoundVictory: typeof declareRoundVictory;
declare const index_d$2_declareTeamVictory: typeof declareTeamVictory;
declare const index_d$2_destroyAllDummyBot: typeof destroyAllDummyBot;
declare const index_d$2_destroyAllEffects: typeof destroyAllEffects;
declare const index_d$2_destroyAllHudText: typeof destroyAllHudText;
declare const index_d$2_destroyAllIcons: typeof destroyAllIcons;
declare const index_d$2_destroyAllInWorldText: typeof destroyAllInWorldText;
declare const index_d$2_destroyDummyBot: typeof destroyDummyBot;
declare const index_d$2_destroyEffect: typeof destroyEffect;
declare const index_d$2_destroyHudText: typeof destroyHudText;
declare const index_d$2_destroyIcon: typeof destroyIcon;
declare const index_d$2_destroyInWorldText: typeof destroyInWorldText;
declare const index_d$2_disableBuiltInGameModeAnnouncer: typeof disableBuiltInGameModeAnnouncer;
declare const index_d$2_disableBuiltInGameModeCompletion: typeof disableBuiltInGameModeCompletion;
declare const index_d$2_disableBuiltInGameModeMusic: typeof disableBuiltInGameModeMusic;
declare const index_d$2_disableBuiltInGameModeRespawning: typeof disableBuiltInGameModeRespawning;
declare const index_d$2_disableBuiltInGameModeScoring: typeof disableBuiltInGameModeScoring;
declare const index_d$2_disableDeathSpectateAllPlayers: typeof disableDeathSpectateAllPlayers;
declare const index_d$2_disableDeathSpectateTargetHud: typeof disableDeathSpectateTargetHud;
declare const index_d$2_disallowButton: typeof disallowButton;
declare const index_d$2_enableBuiltInGameModeAnnouncer: typeof enableBuiltInGameModeAnnouncer;
declare const index_d$2_enableBuiltInGameModeCompletion: typeof enableBuiltInGameModeCompletion;
declare const index_d$2_enableBuiltInGameModeMusic: typeof enableBuiltInGameModeMusic;
declare const index_d$2_enableBuiltInGameModeRespawning: typeof enableBuiltInGameModeRespawning;
declare const index_d$2_enableBuiltInGameModeScoring: typeof enableBuiltInGameModeScoring;
declare const index_d$2_enableDeathSpectateAllPlayers: typeof enableDeathSpectateAllPlayers;
declare const index_d$2_enableDeathSpectateTargetHud: typeof enableDeathSpectateTargetHud;
declare const index_d$2_goToAssembleHeroes: typeof goToAssembleHeroes;
declare const index_d$2_heal: typeof heal;
declare const index_d$2_kill: typeof kill;
declare const index_d$2_loop: typeof loop;
declare const index_d$2_loopIf: typeof loopIf;
declare const index_d$2_loopIfConditionIsFalse: typeof loopIfConditionIsFalse;
declare const index_d$2_loopIfConditionIsTrue: typeof loopIfConditionIsTrue;
declare const index_d$2_modifyGlobalVariable: typeof modifyGlobalVariable;
declare const index_d$2_modifyGlobalVariableAtIndex: typeof modifyGlobalVariableAtIndex;
declare const index_d$2_modifyPlayerScore: typeof modifyPlayerScore;
declare const index_d$2_modifyPlayerVariable: typeof modifyPlayerVariable;
declare const index_d$2_modifyPlayerVariableAtIndex: typeof modifyPlayerVariableAtIndex;
declare const index_d$2_modifyTeamScore: typeof modifyTeamScore;
declare const index_d$2_pauseMatchTime: typeof pauseMatchTime;
declare const index_d$2_playEffect: typeof playEffect;
declare const index_d$2_preloadHero: typeof preloadHero;
declare const index_d$2_pressButton: typeof pressButton;
declare const index_d$2_resetPlayerHeroAvailability: typeof resetPlayerHeroAvailability;
declare const index_d$2_respawn: typeof respawn;
declare const index_d$2_resurrect: typeof resurrect;
declare const index_d$2_setAbility1Enabled: typeof setAbility1Enabled;
declare const index_d$2_setAbility2Enabled: typeof setAbility2Enabled;
declare const index_d$2_setAimSpeed: typeof setAimSpeed;
declare const index_d$2_setDamageDealt: typeof setDamageDealt;
declare const index_d$2_setDamageReceived: typeof setDamageReceived;
declare const index_d$2_setFacing: typeof setFacing;
declare const index_d$2_setGlobalVariable: typeof setGlobalVariable;
declare const index_d$2_setGlobalVariableAtIndex: typeof setGlobalVariableAtIndex;
declare const index_d$2_setGravity: typeof setGravity;
declare const index_d$2_setHealingDealt: typeof setHealingDealt;
declare const index_d$2_setHealingReceived: typeof setHealingReceived;
declare const index_d$2_setInvisible: typeof setInvisible;
declare const index_d$2_setMatchTime: typeof setMatchTime;
declare const index_d$2_setMaxHealth: typeof setMaxHealth;
declare const index_d$2_setMoveSpeed: typeof setMoveSpeed;
declare const index_d$2_setObjectiveDescription: typeof setObjectiveDescription;
declare const index_d$2_setPlayerAllowedHeroes: typeof setPlayerAllowedHeroes;
declare const index_d$2_setPlayerScore: typeof setPlayerScore;
declare const index_d$2_setPlayerVariable: typeof setPlayerVariable;
declare const index_d$2_setPlayerVariableAtIndex: typeof setPlayerVariableAtIndex;
declare const index_d$2_setPrimaryFireEnabled: typeof setPrimaryFireEnabled;
declare const index_d$2_setProjectileGravity: typeof setProjectileGravity;
declare const index_d$2_setProjectileSpeed: typeof setProjectileSpeed;
declare const index_d$2_setRespawnMaxTime: typeof setRespawnMaxTime;
declare const index_d$2_setSecondaryFireEnabled: typeof setSecondaryFireEnabled;
declare const index_d$2_setSlowMotion: typeof setSlowMotion;
declare const index_d$2_setStatus: typeof setStatus;
declare const index_d$2_setTeamScore: typeof setTeamScore;
declare const index_d$2_setUltimateAbilityEnabled: typeof setUltimateAbilityEnabled;
declare const index_d$2_setUltimateCharge: typeof setUltimateCharge;
declare const index_d$2_skip: typeof skip;
declare const index_d$2_skipIf: typeof skipIf;
declare const index_d$2_smallMessage: typeof smallMessage;
declare const index_d$2_startAccelerating: typeof startAccelerating;
declare const index_d$2_startCamera: typeof startCamera;
declare const index_d$2_startDamageModification: typeof startDamageModification;
declare const index_d$2_startDamageOverTime: typeof startDamageOverTime;
declare const index_d$2_startFacing: typeof startFacing;
declare const index_d$2_startForcingPlayerToBeHero: typeof startForcingPlayerToBeHero;
declare const index_d$2_startForcingSpawnRoom: typeof startForcingSpawnRoom;
declare const index_d$2_startForcingThrottle: typeof startForcingThrottle;
declare const index_d$2_startHealOverTime: typeof startHealOverTime;
declare const index_d$2_startHoldingButton: typeof startHoldingButton;
declare const index_d$2_startThrottleInDirection: typeof startThrottleInDirection;
declare const index_d$2_startTransformingThrottle: typeof startTransformingThrottle;
declare const index_d$2_stopAccelerating: typeof stopAccelerating;
declare const index_d$2_stopAllDamageModifications: typeof stopAllDamageModifications;
declare const index_d$2_stopAllDamageOverTime: typeof stopAllDamageOverTime;
declare const index_d$2_stopAllHealOverTime: typeof stopAllHealOverTime;
declare const index_d$2_stopCamera: typeof stopCamera;
declare const index_d$2_stopChasingGlobalVariable: typeof stopChasingGlobalVariable;
declare const index_d$2_stopChasingPlayerVariable: typeof stopChasingPlayerVariable;
declare const index_d$2_stopDamageModification: typeof stopDamageModification;
declare const index_d$2_stopDamageOverTime: typeof stopDamageOverTime;
declare const index_d$2_stopFacing: typeof stopFacing;
declare const index_d$2_stopForcingPlayerToBeHero: typeof stopForcingPlayerToBeHero;
declare const index_d$2_stopForcingSpawnRoom: typeof stopForcingSpawnRoom;
declare const index_d$2_stopForcingThrottle: typeof stopForcingThrottle;
declare const index_d$2_stopHealOverTime: typeof stopHealOverTime;
declare const index_d$2_stopHoldingButton: typeof stopHoldingButton;
declare const index_d$2_stopThrottleInDirection: typeof stopThrottleInDirection;
declare const index_d$2_stopTransformingThrottle: typeof stopTransformingThrottle;
declare const index_d$2_teleport: typeof teleport;
declare const index_d$2_unpauseMatchTime: typeof unpauseMatchTime;
declare const index_d$2_wait: typeof wait;
declare namespace index_d$2 {
  export {
    index_d$2_abort as abort,
    index_d$2_abortIf as abortIf,
    index_d$2_abortIfConditionIsFalse as abortIfConditionIsFalse,
    index_d$2_abortIfConditionIsTrue as abortIfConditionIsTrue,
    index_d$2_allowButton as allowButton,
    index_d$2_applyImpluse as applyImpluse,
    index_d$2_bigMessage as bigMessage,
    index_d$2_chaseGlobalVariableAtRate as chaseGlobalVariableAtRate,
    index_d$2_chaseGlobalVariableOverTime as chaseGlobalVariableOverTime,
    index_d$2_chasePlayerVariableAtRate as chasePlayerVariableAtRate,
    index_d$2_chasePlayerVariableOverTime as chasePlayerVariableOverTime,
    index_d$2_clearStatus as clearStatus,
    index_d$2_communicate as communicate,
    index_d$2_createBeamEffect as createBeamEffect,
    index_d$2_createDummyBot as createDummyBot,
    index_d$2_createEffect as createEffect,
    index_d$2_createHudText as createHudText,
    index_d$2_createIcon as createIcon,
    index_d$2_createInWorldText as createInWorldText,
    index_d$2_damage as damage,
    index_d$2_declareMatchDraw as declareMatchDraw,
    index_d$2_declarePlayerVictory as declarePlayerVictory,
    index_d$2_declareRoundVictory as declareRoundVictory,
    index_d$2_declareTeamVictory as declareTeamVictory,
    index_d$2_destroyAllDummyBot as destroyAllDummyBot,
    index_d$2_destroyAllEffects as destroyAllEffects,
    index_d$2_destroyAllHudText as destroyAllHudText,
    index_d$2_destroyAllIcons as destroyAllIcons,
    index_d$2_destroyAllInWorldText as destroyAllInWorldText,
    index_d$2_destroyDummyBot as destroyDummyBot,
    index_d$2_destroyEffect as destroyEffect,
    index_d$2_destroyHudText as destroyHudText,
    index_d$2_destroyIcon as destroyIcon,
    index_d$2_destroyInWorldText as destroyInWorldText,
    index_d$2_disableBuiltInGameModeAnnouncer as disableBuiltInGameModeAnnouncer,
    index_d$2_disableBuiltInGameModeCompletion as disableBuiltInGameModeCompletion,
    index_d$2_disableBuiltInGameModeMusic as disableBuiltInGameModeMusic,
    index_d$2_disableBuiltInGameModeRespawning as disableBuiltInGameModeRespawning,
    index_d$2_disableBuiltInGameModeScoring as disableBuiltInGameModeScoring,
    index_d$2_disableDeathSpectateAllPlayers as disableDeathSpectateAllPlayers,
    index_d$2_disableDeathSpectateTargetHud as disableDeathSpectateTargetHud,
    index_d$2_disallowButton as disallowButton,
    index_d$2_enableBuiltInGameModeAnnouncer as enableBuiltInGameModeAnnouncer,
    index_d$2_enableBuiltInGameModeCompletion as enableBuiltInGameModeCompletion,
    index_d$2_enableBuiltInGameModeMusic as enableBuiltInGameModeMusic,
    index_d$2_enableBuiltInGameModeRespawning as enableBuiltInGameModeRespawning,
    index_d$2_enableBuiltInGameModeScoring as enableBuiltInGameModeScoring,
    index_d$2_enableDeathSpectateAllPlayers as enableDeathSpectateAllPlayers,
    index_d$2_enableDeathSpectateTargetHud as enableDeathSpectateTargetHud,
    index_d$2_goToAssembleHeroes as goToAssembleHeroes,
    index_d$2_heal as heal,
    index_d$2_kill as kill,
    index_d$2_loop as loop,
    index_d$2_loopIf as loopIf,
    index_d$2_loopIfConditionIsFalse as loopIfConditionIsFalse,
    index_d$2_loopIfConditionIsTrue as loopIfConditionIsTrue,
    index_d$2_modifyGlobalVariable as modifyGlobalVariable,
    index_d$2_modifyGlobalVariableAtIndex as modifyGlobalVariableAtIndex,
    index_d$2_modifyPlayerScore as modifyPlayerScore,
    index_d$2_modifyPlayerVariable as modifyPlayerVariable,
    index_d$2_modifyPlayerVariableAtIndex as modifyPlayerVariableAtIndex,
    index_d$2_modifyTeamScore as modifyTeamScore,
    index_d$2_pauseMatchTime as pauseMatchTime,
    index_d$2_playEffect as playEffect,
    index_d$2_preloadHero as preloadHero,
    index_d$2_pressButton as pressButton,
    index_d$2_resetPlayerHeroAvailability as resetPlayerHeroAvailability,
    index_d$2_respawn as respawn,
    index_d$2_resurrect as resurrect,
    index_d$2_setAbility1Enabled as setAbility1Enabled,
    index_d$2_setAbility2Enabled as setAbility2Enabled,
    index_d$2_setAimSpeed as setAimSpeed,
    index_d$2_setDamageDealt as setDamageDealt,
    index_d$2_setDamageReceived as setDamageReceived,
    index_d$2_setFacing as setFacing,
    index_d$2_setGlobalVariable as setGlobalVariable,
    index_d$2_setGlobalVariableAtIndex as setGlobalVariableAtIndex,
    index_d$2_setGravity as setGravity,
    index_d$2_setHealingDealt as setHealingDealt,
    index_d$2_setHealingReceived as setHealingReceived,
    index_d$2_setInvisible as setInvisible,
    index_d$2_setMatchTime as setMatchTime,
    index_d$2_setMaxHealth as setMaxHealth,
    index_d$2_setMoveSpeed as setMoveSpeed,
    index_d$2_setObjectiveDescription as setObjectiveDescription,
    index_d$2_setPlayerAllowedHeroes as setPlayerAllowedHeroes,
    index_d$2_setPlayerScore as setPlayerScore,
    index_d$2_setPlayerVariable as setPlayerVariable,
    index_d$2_setPlayerVariableAtIndex as setPlayerVariableAtIndex,
    index_d$2_setPrimaryFireEnabled as setPrimaryFireEnabled,
    index_d$2_setProjectileGravity as setProjectileGravity,
    index_d$2_setProjectileSpeed as setProjectileSpeed,
    index_d$2_setRespawnMaxTime as setRespawnMaxTime,
    index_d$2_setSecondaryFireEnabled as setSecondaryFireEnabled,
    index_d$2_setSlowMotion as setSlowMotion,
    index_d$2_setStatus as setStatus,
    index_d$2_setTeamScore as setTeamScore,
    index_d$2_setUltimateAbilityEnabled as setUltimateAbilityEnabled,
    index_d$2_setUltimateCharge as setUltimateCharge,
    index_d$2_skip as skip,
    index_d$2_skipIf as skipIf,
    index_d$2_smallMessage as smallMessage,
    index_d$2_startAccelerating as startAccelerating,
    index_d$2_startCamera as startCamera,
    index_d$2_startDamageModification as startDamageModification,
    index_d$2_startDamageOverTime as startDamageOverTime,
    index_d$2_startFacing as startFacing,
    index_d$2_startForcingPlayerToBeHero as startForcingPlayerToBeHero,
    index_d$2_startForcingSpawnRoom as startForcingSpawnRoom,
    index_d$2_startForcingThrottle as startForcingThrottle,
    index_d$2_startHealOverTime as startHealOverTime,
    index_d$2_startHoldingButton as startHoldingButton,
    index_d$2_startThrottleInDirection as startThrottleInDirection,
    index_d$2_startTransformingThrottle as startTransformingThrottle,
    index_d$2_stopAccelerating as stopAccelerating,
    index_d$2_stopAllDamageModifications as stopAllDamageModifications,
    index_d$2_stopAllDamageOverTime as stopAllDamageOverTime,
    index_d$2_stopAllHealOverTime as stopAllHealOverTime,
    index_d$2_stopCamera as stopCamera,
    index_d$2_stopChasingGlobalVariable as stopChasingGlobalVariable,
    index_d$2_stopChasingPlayerVariable as stopChasingPlayerVariable,
    index_d$2_stopDamageModification as stopDamageModification,
    index_d$2_stopDamageOverTime as stopDamageOverTime,
    index_d$2_stopFacing as stopFacing,
    index_d$2_stopForcingPlayerToBeHero as stopForcingPlayerToBeHero,
    index_d$2_stopForcingSpawnRoom as stopForcingSpawnRoom,
    index_d$2_stopForcingThrottle as stopForcingThrottle,
    index_d$2_stopHealOverTime as stopHealOverTime,
    index_d$2_stopHoldingButton as stopHoldingButton,
    index_d$2_stopThrottleInDirection as stopThrottleInDirection,
    index_d$2_stopTransformingThrottle as stopTransformingThrottle,
    index_d$2_teleport as teleport,
    index_d$2_unpauseMatchTime as unpauseMatchTime,
    index_d$2_wait as wait,
  };
}

/**
 * 플레이어가 게임에 참여하면
 * 각 플레이어마다 이 Rule의 인스턴스가 생성됩니다.
 * 이 인스턴스는 해당 플레이어가 게임을 떠나거나,
 * 게임이 끝날 때까지 활성화되어 있습니다.
 * 각 인스턴스는 개별적으로 Condition과 Action을 추적하고 실행합니다.
 *
 * - 플레이어가 게임에 남아있는 한 인스턴스가 지속되므로
 *    Condition을 만족할 수도, 그렇지 않을 수도 있습니다.
 *    Condition을 처음 만족하면Action을 실행합니다.
 *
 * - Condition 목록을 만족하지 못했다가 만족한다면,
 *    Action을 다시 실행하려 할 것입니다.
 */
declare const onGoingEachPlayer: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;

/**
 * 게임 시작 시 이 Rule의 개별 인스턴스 하나를 생성합니다.
 * 이 인스턴스는 게임이 지속되는 동안 활성화되어 있습니다.
 *
 * - 이 인스턴스는 게임이 지속되는 동안 활성화되어 있으므로
 *    Condition 을 만족하거나 만족하지 않을 수 있습니다.
 *    Condition을 처음 만족할 때 Action을 실행 합니다.
 *
 * - Condition 목록을 만족하지 못했다가 만족한다면,
 *    Action을 다시 실행하려 할 것입니다.
 */
declare const onGoingGlobal: (


) => string;

/**
 * 플레이어 한 명이 피해를 입힐 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 *
 * - 플레이어가 적에게 피해를 주면 Condition을 확인합니다.
 *    모든 Condition을 만족하면Action이 실행되지만,
 *    하나라도 만족하지 않으면 실행되지 않습니다.
 */
declare const playerDealtDamage: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어 한 명이 결정타를 날릴 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 *
 * - 플레이어가 결정타로 피해를 입히면 Condition을 확인합니다.
 *    모든 Condition을 만족하면 Action이 실행되지만,
 *    하나라도 만족하지 않으면 실행되지 않습니다.
 */
declare const playerDealtFinalBlow: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;

/**
 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:0)
 */
declare const playerDealtHealing: (
/**
 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:1)
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:2)
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어 한 명이 사망할 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 *
 * - 플레이어가 사망하면 Condition을 확인합니다.
 *    모든 Condition을 만족할 때 Action이 실행되지만,
 *    하나라도 만족하지 않으면 Action이 실행되지 않습니다.
 */
declare const playerDied: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어 한 명이 처치를 달성할 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 *
 * - 플레이어 한 명이 누군가를 처치하면 Condition을 확인합니다.
 *    모든 Condition을 만족하면 Action이 실행되지만,
 *    하나라도 만족하지 않으면 실행되지 않습니다.
 */
declare const playerEarnedElimination: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;

/**
 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:0)
 */
declare const playerJoinedMatch: (
/**
 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:1)
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:2)
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * TODO: playerLeftMatch(Player Left Match)(OrderNum:0)
 */
declare const playerLeftMatch: (
/**
 * TODO: playerLeftMatch(Player Left Match)(OrderNum:1)
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * TODO: playerLeftMatch(Player Left Match)(OrderNum:2)
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:0)
 */
declare const playerReceivedHealing: (
/**
 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:1)
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:2)
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * 플레이어 한 명이 피해를 받을 때마다 Rule을 실행합니다.
 * 이 Rule은 특정 플레이어를 대상으로 한 번에 하나의 인스턴스만 활성화합니다.
 *
 * - 플레이어가 적에게서 피해를 받으면 Condition을 확인합니다.
 *    모든 Condition을 만족하면Action이 실행되지만,
 *    하나라도 만족하지 않으면 실행되지 않습니다.
 */
declare const playerTookDamage: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;



declare const index_d$3_onGoingEachPlayer: typeof onGoingEachPlayer;
declare const index_d$3_onGoingGlobal: typeof onGoingGlobal;
declare const index_d$3_playerDealtDamage: typeof playerDealtDamage;
declare const index_d$3_playerDealtFinalBlow: typeof playerDealtFinalBlow;
declare const index_d$3_playerDealtHealing: typeof playerDealtHealing;
declare const index_d$3_playerDied: typeof playerDied;
declare const index_d$3_playerEarnedElimination: typeof playerEarnedElimination;
declare const index_d$3_playerJoinedMatch: typeof playerJoinedMatch;
declare const index_d$3_playerLeftMatch: typeof playerLeftMatch;
declare const index_d$3_playerReceivedHealing: typeof playerReceivedHealing;
declare const index_d$3_playerTookDamage: typeof playerTookDamage;
declare namespace index_d$3 {
  export {
    index_d$3_onGoingEachPlayer as onGoingEachPlayer,
    index_d$3_onGoingGlobal as onGoingGlobal,
    index_d$3_playerDealtDamage as playerDealtDamage,
    index_d$3_playerDealtFinalBlow as playerDealtFinalBlow,
    index_d$3_playerDealtHealing as playerDealtHealing,
    index_d$3_playerDied as playerDied,
    index_d$3_playerEarnedElimination as playerEarnedElimination,
    index_d$3_playerJoinedMatch as playerJoinedMatch,
    index_d$3_playerLeftMatch as playerLeftMatch,
    index_d$3_playerReceivedHealing as playerReceivedHealing,
    index_d$3_playerTookDamage as playerTookDamage,
  };
}

/**
 * 이 규칙에 의해 현재 처리되고 있는
 * 이벤트의 HEALEE가 받는 치유량입니다.
 */
declare const eventHealing: (


) => string;

/**
 * 이 규칙으로 처리된 이벤트로 인해 치유를 받은 플레이어입니다.
 * HEALER 또는 EVENT PLAYER와 동일할 수 있습니다.
 */
declare const healee: (


) => string;

/**
 * 이 규칙으로 처리된 이벤트로 인해 치유를 한 플레이어입니다.
 * HEALEE 또는 EVENT PLAYER와 동일할 수 있습니다.
 */
declare const healer: (


) => string;

/**
 * 현재 사용자 지정 게임의 방장인 플레이어입니다.
 * 이 값은 현재 방장이 경기를 떠나면 변경됩니다.
 */
declare const hostPlayer: (


) => string;

/**
 * 플레이어의 DUMMY 봇 여부입니다.
 */
declare const isDummyBot: (
/**
 * 고려할 플레이어입니다.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;



declare const index_d$4_absoluteValue: typeof absoluteValue;
declare const index_d$4_add: typeof add;
declare const index_d$4_allDeadPlayers: typeof allDeadPlayers;
declare const index_d$4_allHeroes: typeof allHeroes;
declare const index_d$4_allLivingPlayers: typeof allLivingPlayers;
declare const index_d$4_allowedHeroes: typeof allowedHeroes;
declare const index_d$4_allPlayers: typeof allPlayers;
declare const index_d$4_allPlayersNotOnObjective: typeof allPlayersNotOnObjective;
declare const index_d$4_allPlayersOnObjective: typeof allPlayersOnObjective;
declare const index_d$4_altitudeOf: typeof altitudeOf;
declare const index_d$4_and: typeof and;
declare const index_d$4_angleBetweenVectors: typeof angleBetweenVectors;
declare const index_d$4_angleDifference: typeof angleDifference;
declare const index_d$4_appendToArray: typeof appendToArray;
declare const index_d$4_arccosineInDegrees: typeof arccosineInDegrees;
declare const index_d$4_arccosineInRadians: typeof arccosineInRadians;
declare const index_d$4_arcsineInDegrees: typeof arcsineInDegrees;
declare const index_d$4_arcsineInRadians: typeof arcsineInRadians;
declare const index_d$4_arctangentInDegrees: typeof arctangentInDegrees;
declare const index_d$4_arctangentInRadians: typeof arctangentInRadians;
declare const index_d$4_arrayContains: typeof arrayContains;
declare const index_d$4_arraySlice: typeof arraySlice;
declare const index_d$4_attacker: typeof attacker;
declare const index_d$4_backward: typeof backward;
declare const index_d$4_closestPlayerTo: typeof closestPlayerTo;
declare const index_d$4_compare: typeof compare;
declare const index_d$4_controlModeScoringPercentage: typeof controlModeScoringPercentage;
declare const index_d$4_controlModeScoringTeam: typeof controlModeScoringTeam;
declare const index_d$4_cosineFromDegrees: typeof cosineFromDegrees;
declare const index_d$4_cosineFromRadians: typeof cosineFromRadians;
declare const index_d$4_countOf: typeof countOf;
declare const index_d$4_crossProduct: typeof crossProduct;
declare const index_d$4_currentArrayElement: typeof currentArrayElement;
declare const index_d$4_directionFromAngles: typeof directionFromAngles;
declare const index_d$4_directionTowards: typeof directionTowards;
declare const index_d$4_distanceBetween: typeof distanceBetween;
declare const index_d$4_divide: typeof divide;
declare const index_d$4_dotProduct: typeof dotProduct;
declare const index_d$4_down: typeof down;
declare const index_d$4_emptyArray: typeof emptyArray;
declare const index_d$4_entityExists: typeof entityExists;
declare const index_d$4_eventDamage: typeof eventDamage;
declare const index_d$4_eventHealing: typeof eventHealing;
declare const index_d$4_eventPlayer: typeof eventPlayer;
declare const index_d$4_eventWasCriticalHit: typeof eventWasCriticalHit;
declare const index_d$4_eyePosition: typeof eyePosition;
declare const index_d$4_facingDirectionOf: typeof facingDirectionOf;
declare const index_d$4_False: typeof False;
declare const index_d$4_farthestPlayerFrom: typeof farthestPlayerFrom;
declare const index_d$4_filteredArray: typeof filteredArray;
declare const index_d$4_firstOf: typeof firstOf;
declare const index_d$4_flagPosition: typeof flagPosition;
declare const index_d$4_forward: typeof forward;
declare const index_d$4_globalVariable: typeof globalVariable;
declare const index_d$4_hasSpawned: typeof hasSpawned;
declare const index_d$4_hasStatus: typeof hasStatus;
declare const index_d$4_healee: typeof healee;
declare const index_d$4_healer: typeof healer;
declare const index_d$4_health: typeof health;
declare const index_d$4_hero: typeof hero;
declare const index_d$4_heroIconString: typeof heroIconString;
declare const index_d$4_heroOf: typeof heroOf;
declare const index_d$4_horizontalAngleFromDirection: typeof horizontalAngleFromDirection;
declare const index_d$4_horizontalAngleTowards: typeof horizontalAngleTowards;
declare const index_d$4_horizontalFacingAngleOf: typeof horizontalFacingAngleOf;
declare const index_d$4_horizontalSpeedOf: typeof horizontalSpeedOf;
declare const index_d$4_hostPlayer: typeof hostPlayer;
declare const index_d$4_indexOfArrayValue: typeof indexOfArrayValue;
declare const index_d$4_isAlive: typeof isAlive;
declare const index_d$4_isAssemblingHeroes: typeof isAssemblingHeroes;
declare const index_d$4_isBetweenRounds: typeof isBetweenRounds;
declare const index_d$4_isButtonHeld: typeof isButtonHeld;
declare const index_d$4_isCommunicating: typeof isCommunicating;
declare const index_d$4_isCommunicatingAny: typeof isCommunicatingAny;
declare const index_d$4_isCommunicatingAnyEmote: typeof isCommunicatingAnyEmote;
declare const index_d$4_isCommunicatingAnyVoiceLine: typeof isCommunicatingAnyVoiceLine;
declare const index_d$4_isControlModePointLocked: typeof isControlModePointLocked;
declare const index_d$4_isCrouching: typeof isCrouching;
declare const index_d$4_isCTFModeInSuddenDeath: typeof isCTFModeInSuddenDeath;
declare const index_d$4_isDead: typeof isDead;
declare const index_d$4_isDummyBot: typeof isDummyBot;
declare const index_d$4_isFiringPrimary: typeof isFiringPrimary;
declare const index_d$4_isFiringSecondary: typeof isFiringSecondary;
declare const index_d$4_isFlagAtBase: typeof isFlagAtBase;
declare const index_d$4_isFlagBeingCarried: typeof isFlagBeingCarried;
declare const index_d$4_isGameInProgress: typeof isGameInProgress;
declare const index_d$4_isHeroBeingPlayed: typeof isHeroBeingPlayed;
declare const index_d$4_isInAir: typeof isInAir;
declare const index_d$4_isInLineOfSight: typeof isInLineOfSight;
declare const index_d$4_isInSetup: typeof isInSetup;
declare const index_d$4_isInSpawnRoom: typeof isInSpawnRoom;
declare const index_d$4_isInViewAngle: typeof isInViewAngle;
declare const index_d$4_isMatchComplete: typeof isMatchComplete;
declare const index_d$4_isMoving: typeof isMoving;
declare const index_d$4_isObjectiveComplete: typeof isObjectiveComplete;
declare const index_d$4_isOnGround: typeof isOnGround;
declare const index_d$4_isOnObjective: typeof isOnObjective;
declare const index_d$4_isOnWall: typeof isOnWall;
declare const index_d$4_isPortraitOnFire: typeof isPortraitOnFire;
declare const index_d$4_isStanding: typeof isStanding;
declare const index_d$4_isTeamOnDefense: typeof isTeamOnDefense;
declare const index_d$4_isTeamOnOffense: typeof isTeamOnOffense;
declare const index_d$4_isTrueForAll: typeof isTrueForAll;
declare const index_d$4_isTrueForAny: typeof isTrueForAny;
declare const index_d$4_isUsingAbility1: typeof isUsingAbility1;
declare const index_d$4_isUsingAbility2: typeof isUsingAbility2;
declare const index_d$4_isUsingUltimate: typeof isUsingUltimate;
declare const index_d$4_isWaitingForPlayers: typeof isWaitingForPlayers;
declare const index_d$4_lastCreatedEntity: typeof lastCreatedEntity;
declare const index_d$4_lastDamageModificationId: typeof lastDamageModificationId;
declare const index_d$4_lastDamageOverTimeId: typeof lastDamageOverTimeId;
declare const index_d$4_lastHealOverTimeId: typeof lastHealOverTimeId;
declare const index_d$4_lastOf: typeof lastOf;
declare const index_d$4_lastTextId: typeof lastTextId;
declare const index_d$4_left: typeof left;
declare const index_d$4_localVectorOf: typeof localVectorOf;
declare const index_d$4_matchRound: typeof matchRound;
declare const index_d$4_matchTime: typeof matchTime;
declare const index_d$4_max: typeof max;
declare const index_d$4_maxHealth: typeof maxHealth;
declare const index_d$4_min: typeof min;
declare const index_d$4_modulo: typeof modulo;
declare const index_d$4_multiply: typeof multiply;
declare const index_d$4_nearestWalkablePosition: typeof nearestWalkablePosition;
declare const index_d$4_normalize: typeof normalize;
declare const index_d$4_normalizedHealth: typeof normalizedHealth;
declare const index_d$4_not: typeof not;
declare const index_d$4_Null: typeof Null;
declare const index_d$4_number: typeof number;
declare const index_d$4_numberOfDeadPlayers: typeof numberOfDeadPlayers;
declare const index_d$4_numberOfDeaths: typeof numberOfDeaths;
declare const index_d$4_numberOfEliminations: typeof numberOfEliminations;
declare const index_d$4_numberOfFinalBlows: typeof numberOfFinalBlows;
declare const index_d$4_numberOfHeroes: typeof numberOfHeroes;
declare const index_d$4_numberOfLivingPlayers: typeof numberOfLivingPlayers;
declare const index_d$4_numberOfPlayers: typeof numberOfPlayers;
declare const index_d$4_numberOfPlayersOnObjective: typeof numberOfPlayersOnObjective;
declare const index_d$4_objectiveIndex: typeof objectiveIndex;
declare const index_d$4_objectivePosition: typeof objectivePosition;
declare const index_d$4_oppositeTeamOf: typeof oppositeTeamOf;
declare const index_d$4_or: typeof or;
declare const index_d$4_payloadPosition: typeof payloadPosition;
declare const index_d$4_payloadProgressPercentage: typeof payloadProgressPercentage;
declare const index_d$4_playerCarryingFlag: typeof playerCarryingFlag;
declare const index_d$4_playerClosestToReticle: typeof playerClosestToReticle;
declare const index_d$4_playersInSlot: typeof playersInSlot;
declare const index_d$4_playersInViewAngle: typeof playersInViewAngle;
declare const index_d$4_playersOnHero: typeof playersOnHero;
declare const index_d$4_playersWithinRadius: typeof playersWithinRadius;
declare const index_d$4_playerVariable: typeof playerVariable;
declare const index_d$4_pointCapturePercentage: typeof pointCapturePercentage;
declare const index_d$4_positionOf: typeof positionOf;
declare const index_d$4_raiseToPower: typeof raiseToPower;
declare const index_d$4_randomInteger: typeof randomInteger;
declare const index_d$4_randomizedArray: typeof randomizedArray;
declare const index_d$4_randomReal: typeof randomReal;
declare const index_d$4_randomValueInArray: typeof randomValueInArray;
declare const index_d$4_rayCastHitNormal: typeof rayCastHitNormal;
declare const index_d$4_rayCastHitPlayer: typeof rayCastHitPlayer;
declare const index_d$4_rayCastHitPosition: typeof rayCastHitPosition;
declare const index_d$4_removeFromArray: typeof removeFromArray;
declare const index_d$4_right: typeof right;
declare const index_d$4_roundToInteger: typeof roundToInteger;
declare const index_d$4_scoreOf: typeof scoreOf;
declare const index_d$4_serverLoad: typeof serverLoad;
declare const index_d$4_serverLoadAverage: typeof serverLoadAverage;
declare const index_d$4_serverLoadPeak: typeof serverLoadPeak;
declare const index_d$4_sineFromDegrees: typeof sineFromDegrees;
declare const index_d$4_sineFromRadians: typeof sineFromRadians;
declare const index_d$4_slotOf: typeof slotOf;
declare const index_d$4_sortedArray: typeof sortedArray;
declare const index_d$4_speedOf: typeof speedOf;
declare const index_d$4_speedOfInDirection: typeof speedOfInDirection;
declare const index_d$4_squareRoot: typeof squareRoot;
declare const index_d$4_string: typeof string;
declare const index_d$4_subtract: typeof subtract;
declare const index_d$4_tangentFromDegrees: typeof tangentFromDegrees;
declare const index_d$4_tangentFromRadians: typeof tangentFromRadians;
declare const index_d$4_team: typeof team;
declare const index_d$4_teamOf: typeof teamOf;
declare const index_d$4_teamScore: typeof teamScore;
declare const index_d$4_throttleOf: typeof throttleOf;
declare const index_d$4_totalTimeElapsed: typeof totalTimeElapsed;
declare const index_d$4_True: typeof True;
declare const index_d$4_ultimateChargePercent: typeof ultimateChargePercent;
declare const index_d$4_up: typeof up;
declare const index_d$4_valueInArray: typeof valueInArray;
declare const index_d$4_vector: typeof vector;
declare const index_d$4_vectorTowards: typeof vectorTowards;
declare const index_d$4_velocityOf: typeof velocityOf;
declare const index_d$4_verticalAngleFromDirection: typeof verticalAngleFromDirection;
declare const index_d$4_verticalAngleTowards: typeof verticalAngleTowards;
declare const index_d$4_verticalFacingAngleOf: typeof verticalFacingAngleOf;
declare const index_d$4_verticalSpeedOf: typeof verticalSpeedOf;
declare const index_d$4_victim: typeof victim;
declare const index_d$4_worldVectorOf: typeof worldVectorOf;
declare const index_d$4_xComponentOf: typeof xComponentOf;
declare const index_d$4_yComponentOf: typeof yComponentOf;
declare const index_d$4_zComponentOf: typeof zComponentOf;
declare namespace index_d$4 {
  export {
    index_d$4_absoluteValue as absoluteValue,
    index_d$4_add as add,
    index_d$4_allDeadPlayers as allDeadPlayers,
    index_d$4_allHeroes as allHeroes,
    index_d$4_allLivingPlayers as allLivingPlayers,
    index_d$4_allowedHeroes as allowedHeroes,
    index_d$4_allPlayers as allPlayers,
    index_d$4_allPlayersNotOnObjective as allPlayersNotOnObjective,
    index_d$4_allPlayersOnObjective as allPlayersOnObjective,
    index_d$4_altitudeOf as altitudeOf,
    index_d$4_and as and,
    index_d$4_angleBetweenVectors as angleBetweenVectors,
    index_d$4_angleDifference as angleDifference,
    index_d$4_appendToArray as appendToArray,
    index_d$4_arccosineInDegrees as arccosineInDegrees,
    index_d$4_arccosineInRadians as arccosineInRadians,
    index_d$4_arcsineInDegrees as arcsineInDegrees,
    index_d$4_arcsineInRadians as arcsineInRadians,
    index_d$4_arctangentInDegrees as arctangentInDegrees,
    index_d$4_arctangentInRadians as arctangentInRadians,
    index_d$4_arrayContains as arrayContains,
    index_d$4_arraySlice as arraySlice,
    index_d$4_attacker as attacker,
    index_d$4_backward as backward,
    index_d$4_closestPlayerTo as closestPlayerTo,
    index_d$4_compare as compare,
    index_d$4_controlModeScoringPercentage as controlModeScoringPercentage,
    index_d$4_controlModeScoringTeam as controlModeScoringTeam,
    index_d$4_cosineFromDegrees as cosineFromDegrees,
    index_d$4_cosineFromRadians as cosineFromRadians,
    index_d$4_countOf as countOf,
    index_d$4_crossProduct as crossProduct,
    index_d$4_currentArrayElement as currentArrayElement,
    index_d$4_directionFromAngles as directionFromAngles,
    index_d$4_directionTowards as directionTowards,
    index_d$4_distanceBetween as distanceBetween,
    index_d$4_divide as divide,
    index_d$4_dotProduct as dotProduct,
    index_d$4_down as down,
    index_d$4_emptyArray as emptyArray,
    index_d$4_entityExists as entityExists,
    index_d$4_eventDamage as eventDamage,
    index_d$4_eventHealing as eventHealing,
    index_d$4_eventPlayer as eventPlayer,
    index_d$4_eventWasCriticalHit as eventWasCriticalHit,
    index_d$4_eyePosition as eyePosition,
    index_d$4_facingDirectionOf as facingDirectionOf,
    index_d$4_False as False,
    index_d$4_farthestPlayerFrom as farthestPlayerFrom,
    index_d$4_filteredArray as filteredArray,
    index_d$4_firstOf as firstOf,
    index_d$4_flagPosition as flagPosition,
    index_d$4_forward as forward,
    index_d$4_globalVariable as globalVariable,
    index_d$4_hasSpawned as hasSpawned,
    index_d$4_hasStatus as hasStatus,
    index_d$4_healee as healee,
    index_d$4_healer as healer,
    index_d$4_health as health,
    index_d$4_hero as hero,
    index_d$4_heroIconString as heroIconString,
    index_d$4_heroOf as heroOf,
    index_d$4_horizontalAngleFromDirection as horizontalAngleFromDirection,
    index_d$4_horizontalAngleTowards as horizontalAngleTowards,
    index_d$4_horizontalFacingAngleOf as horizontalFacingAngleOf,
    index_d$4_horizontalSpeedOf as horizontalSpeedOf,
    index_d$4_hostPlayer as hostPlayer,
    index_d$4_indexOfArrayValue as indexOfArrayValue,
    index_d$4_isAlive as isAlive,
    index_d$4_isAssemblingHeroes as isAssemblingHeroes,
    index_d$4_isBetweenRounds as isBetweenRounds,
    index_d$4_isButtonHeld as isButtonHeld,
    index_d$4_isCommunicating as isCommunicating,
    index_d$4_isCommunicatingAny as isCommunicatingAny,
    index_d$4_isCommunicatingAnyEmote as isCommunicatingAnyEmote,
    index_d$4_isCommunicatingAnyVoiceLine as isCommunicatingAnyVoiceLine,
    index_d$4_isControlModePointLocked as isControlModePointLocked,
    index_d$4_isCrouching as isCrouching,
    index_d$4_isCTFModeInSuddenDeath as isCTFModeInSuddenDeath,
    index_d$4_isDead as isDead,
    index_d$4_isDummyBot as isDummyBot,
    index_d$4_isFiringPrimary as isFiringPrimary,
    index_d$4_isFiringSecondary as isFiringSecondary,
    index_d$4_isFlagAtBase as isFlagAtBase,
    index_d$4_isFlagBeingCarried as isFlagBeingCarried,
    index_d$4_isGameInProgress as isGameInProgress,
    index_d$4_isHeroBeingPlayed as isHeroBeingPlayed,
    index_d$4_isInAir as isInAir,
    index_d$4_isInLineOfSight as isInLineOfSight,
    index_d$4_isInSetup as isInSetup,
    index_d$4_isInSpawnRoom as isInSpawnRoom,
    index_d$4_isInViewAngle as isInViewAngle,
    index_d$4_isMatchComplete as isMatchComplete,
    index_d$4_isMoving as isMoving,
    index_d$4_isObjectiveComplete as isObjectiveComplete,
    index_d$4_isOnGround as isOnGround,
    index_d$4_isOnObjective as isOnObjective,
    index_d$4_isOnWall as isOnWall,
    index_d$4_isPortraitOnFire as isPortraitOnFire,
    index_d$4_isStanding as isStanding,
    index_d$4_isTeamOnDefense as isTeamOnDefense,
    index_d$4_isTeamOnOffense as isTeamOnOffense,
    index_d$4_isTrueForAll as isTrueForAll,
    index_d$4_isTrueForAny as isTrueForAny,
    index_d$4_isUsingAbility1 as isUsingAbility1,
    index_d$4_isUsingAbility2 as isUsingAbility2,
    index_d$4_isUsingUltimate as isUsingUltimate,
    index_d$4_isWaitingForPlayers as isWaitingForPlayers,
    index_d$4_lastCreatedEntity as lastCreatedEntity,
    index_d$4_lastDamageModificationId as lastDamageModificationId,
    index_d$4_lastDamageOverTimeId as lastDamageOverTimeId,
    index_d$4_lastHealOverTimeId as lastHealOverTimeId,
    index_d$4_lastOf as lastOf,
    index_d$4_lastTextId as lastTextId,
    index_d$4_left as left,
    index_d$4_localVectorOf as localVectorOf,
    index_d$4_matchRound as matchRound,
    index_d$4_matchTime as matchTime,
    index_d$4_max as max,
    index_d$4_maxHealth as maxHealth,
    index_d$4_min as min,
    index_d$4_modulo as modulo,
    index_d$4_multiply as multiply,
    index_d$4_nearestWalkablePosition as nearestWalkablePosition,
    index_d$4_normalize as normalize,
    index_d$4_normalizedHealth as normalizedHealth,
    index_d$4_not as not,
    index_d$4_Null as Null,
    index_d$4_number as number,
    index_d$4_numberOfDeadPlayers as numberOfDeadPlayers,
    index_d$4_numberOfDeaths as numberOfDeaths,
    index_d$4_numberOfEliminations as numberOfEliminations,
    index_d$4_numberOfFinalBlows as numberOfFinalBlows,
    index_d$4_numberOfHeroes as numberOfHeroes,
    index_d$4_numberOfLivingPlayers as numberOfLivingPlayers,
    index_d$4_numberOfPlayers as numberOfPlayers,
    index_d$4_numberOfPlayersOnObjective as numberOfPlayersOnObjective,
    index_d$4_objectiveIndex as objectiveIndex,
    index_d$4_objectivePosition as objectivePosition,
    index_d$4_oppositeTeamOf as oppositeTeamOf,
    index_d$4_or as or,
    index_d$4_payloadPosition as payloadPosition,
    index_d$4_payloadProgressPercentage as payloadProgressPercentage,
    index_d$4_playerCarryingFlag as playerCarryingFlag,
    index_d$4_playerClosestToReticle as playerClosestToReticle,
    index_d$4_playersInSlot as playersInSlot,
    index_d$4_playersInViewAngle as playersInViewAngle,
    index_d$4_playersOnHero as playersOnHero,
    index_d$4_playersWithinRadius as playersWithinRadius,
    index_d$4_playerVariable as playerVariable,
    index_d$4_pointCapturePercentage as pointCapturePercentage,
    index_d$4_positionOf as positionOf,
    index_d$4_raiseToPower as raiseToPower,
    index_d$4_randomInteger as randomInteger,
    index_d$4_randomizedArray as randomizedArray,
    index_d$4_randomReal as randomReal,
    index_d$4_randomValueInArray as randomValueInArray,
    index_d$4_rayCastHitNormal as rayCastHitNormal,
    index_d$4_rayCastHitPlayer as rayCastHitPlayer,
    index_d$4_rayCastHitPosition as rayCastHitPosition,
    index_d$4_removeFromArray as removeFromArray,
    index_d$4_right as right,
    index_d$4_roundToInteger as roundToInteger,
    index_d$4_scoreOf as scoreOf,
    index_d$4_serverLoad as serverLoad,
    index_d$4_serverLoadAverage as serverLoadAverage,
    index_d$4_serverLoadPeak as serverLoadPeak,
    index_d$4_sineFromDegrees as sineFromDegrees,
    index_d$4_sineFromRadians as sineFromRadians,
    index_d$4_slotOf as slotOf,
    index_d$4_sortedArray as sortedArray,
    index_d$4_speedOf as speedOf,
    index_d$4_speedOfInDirection as speedOfInDirection,
    index_d$4_squareRoot as squareRoot,
    index_d$4_string as string,
    index_d$4_subtract as subtract,
    index_d$4_tangentFromDegrees as tangentFromDegrees,
    index_d$4_tangentFromRadians as tangentFromRadians,
    index_d$4_team as team,
    index_d$4_teamOf as teamOf,
    index_d$4_teamScore as teamScore,
    index_d$4_throttleOf as throttleOf,
    index_d$4_totalTimeElapsed as totalTimeElapsed,
    index_d$4_True as True,
    index_d$4_ultimateChargePercent as ultimateChargePercent,
    index_d$4_up as up,
    index_d$4_valueInArray as valueInArray,
    index_d$4_vector as vector,
    index_d$4_vectorTowards as vectorTowards,
    index_d$4_velocityOf as velocityOf,
    index_d$4_verticalAngleFromDirection as verticalAngleFromDirection,
    index_d$4_verticalAngleTowards as verticalAngleTowards,
    index_d$4_verticalFacingAngleOf as verticalFacingAngleOf,
    index_d$4_verticalSpeedOf as verticalSpeedOf,
    index_d$4_victim as victim,
    index_d$4_worldVectorOf as worldVectorOf,
    index_d$4_xComponentOf as xComponentOf,
    index_d$4_yComponentOf as yComponentOf,
    index_d$4_zComponentOf as zComponentOf,
  };
}



declare const match_d_flagPosition: typeof flagPosition;
declare const match_d_isAssemblingHeroes: typeof isAssemblingHeroes;
declare const match_d_isBetweenRounds: typeof isBetweenRounds;
declare const match_d_isControlModePointLocked: typeof isControlModePointLocked;
declare const match_d_isCTFModeInSuddenDeath: typeof isCTFModeInSuddenDeath;
declare const match_d_isFlagAtBase: typeof isFlagAtBase;
declare const match_d_isFlagBeingCarried: typeof isFlagBeingCarried;
declare const match_d_isGameInProgress: typeof isGameInProgress;
declare const match_d_isInSetup: typeof isInSetup;
declare const match_d_isMatchComplete: typeof isMatchComplete;
declare const match_d_isObjectiveComplete: typeof isObjectiveComplete;
declare const match_d_isWaitingForPlayers: typeof isWaitingForPlayers;
declare const match_d_matchRound: typeof matchRound;
declare const match_d_matchTime: typeof matchTime;
declare const match_d_objectiveIndex: typeof objectiveIndex;
declare const match_d_objectivePosition: typeof objectivePosition;
declare const match_d_payloadProgressPercentage: typeof payloadProgressPercentage;
declare const match_d_playerCarryingFlag: typeof playerCarryingFlag;
declare const match_d_payloadPosition: typeof payloadPosition;
declare const match_d_pointCapturePercentage: typeof pointCapturePercentage;
declare const match_d_totalTimeElapsed: typeof totalTimeElapsed;
declare namespace match_d {
  export {
    match_d_flagPosition as flagPosition,
    match_d_isAssemblingHeroes as isAssemblingHeroes,
    match_d_isBetweenRounds as isBetweenRounds,
    match_d_isControlModePointLocked as isControlModePointLocked,
    match_d_isCTFModeInSuddenDeath as isCTFModeInSuddenDeath,
    match_d_isFlagAtBase as isFlagAtBase,
    match_d_isFlagBeingCarried as isFlagBeingCarried,
    match_d_isGameInProgress as isGameInProgress,
    match_d_isInSetup as isInSetup,
    match_d_isMatchComplete as isMatchComplete,
    match_d_isObjectiveComplete as isObjectiveComplete,
    match_d_isWaitingForPlayers as isWaitingForPlayers,
    match_d_matchRound as matchRound,
    match_d_matchTime as matchTime,
    match_d_objectiveIndex as objectiveIndex,
    match_d_objectivePosition as objectivePosition,
    match_d_payloadProgressPercentage as payloadProgressPercentage,
    match_d_playerCarryingFlag as playerCarryingFlag,
    match_d_payloadPosition as payloadPosition,
    match_d_pointCapturePercentage as pointCapturePercentage,
    match_d_totalTimeElapsed as totalTimeElapsed,
  };
}



declare const level_d_lastCreatedEntity: typeof lastCreatedEntity;
declare const level_d_lastDamageModificationId: typeof lastDamageModificationId;
declare const level_d_lastDamageOverTimeId: typeof lastDamageOverTimeId;
declare const level_d_lastHealOverTimeId: typeof lastHealOverTimeId;
declare const level_d_lastTextId: typeof lastTextId;
declare const level_d_rayCastHitNormal: typeof rayCastHitNormal;
declare const level_d_rayCastHitPlayer: typeof rayCastHitPlayer;
declare const level_d_rayCastHitPosition: typeof rayCastHitPosition;
declare namespace level_d {
  export {
    level_d_lastCreatedEntity as lastCreatedEntity,
    level_d_lastDamageModificationId as lastDamageModificationId,
    level_d_lastDamageOverTimeId as lastDamageOverTimeId,
    level_d_lastHealOverTimeId as lastHealOverTimeId,
    level_d_lastTextId as lastTextId,
    level_d_rayCastHitNormal as rayCastHitNormal,
    level_d_rayCastHitPlayer as rayCastHitPlayer,
    level_d_rayCastHitPosition as rayCastHitPosition,
  };
}



declare const server_d_serverLoad: typeof serverLoad;
declare const server_d_serverLoadAverage: typeof serverLoadAverage;
declare const server_d_serverLoadPeak: typeof serverLoadPeak;
declare namespace server_d {
  export {
    server_d_serverLoad as serverLoad,
    server_d_serverLoadAverage as serverLoadAverage,
    server_d_serverLoadPeak as serverLoadPeak,
  };
}

/**
 * @param value Type `Type.Number.`
 */
declare const ceil: (value: string) => number;
/**
 * @param value Type `Type.Number.`
 */
declare const floor: (value: string) => number;
/**
 * @param value Type `Type.Number.`
 */
declare const round: (value: string) => number;
/**
 * @param value Type `Type.Number.`
 */
declare const sqrt: (value: string | number | any[]) => number;

declare const util_d_ceil: typeof ceil;
declare const util_d_floor: typeof floor;
declare const util_d_round: typeof round;
declare const util_d_sqrt: typeof sqrt;
declare const util_d_max: typeof max;
declare const util_d_min: typeof min;
declare const util_d_normalizedHealth: typeof normalizedHealth;
declare const util_d_randomInteger: typeof randomInteger;
declare const util_d_randomReal: typeof randomReal;
declare const util_d_randomValueInArray: typeof randomValueInArray;
declare const util_d_randomizedArray: typeof randomizedArray;
declare const util_d_roundToInteger: typeof roundToInteger;
declare const util_d_squareRoot: typeof squareRoot;
declare namespace util_d {
  export {
    util_d_ceil as ceil,
    util_d_floor as floor,
    util_d_round as round,
    util_d_sqrt as sqrt,
    util_d_max as max,
    util_d_min as min,
    util_d_normalizedHealth as normalizedHealth,
    util_d_randomInteger as randomInteger,
    util_d_randomReal as randomReal,
    util_d_randomValueInArray as randomValueInArray,
    util_d_randomizedArray as randomizedArray,
    util_d_roundToInteger as roundToInteger,
    util_d_squareRoot as squareRoot,
  };
}



declare namespace index_d$5 {
  export {
    index_d as Classes,
    index_d$3 as RuleEvent,
    index_d$4 as Value,
    index_d$2 as Action,
    index_d$1 as Type,
    level_d as Level,
    server_d as Server,
    match_d as Match,
    util_d as Util
  };
}

declare class Player$1 {
    player: string;
    /**
     * @param player `Type.Player.`
     */
    constructor(player?: string);
    /**
     * The player’s current height in meters above
     * a surface. Results in a 0 whenever the place
     * is on a surface.
     */
    altitudeOf(): number;
    /**
     * The player closest to a position, optionally
     * restricted by team.
     */
    closestPlayerTo(
    /**
     * Center - The position to which to measure
     * proximity. Can use most Value Syntax related
     * to reporting a position in the map.
     * - `Type.Vector.`
     */
    center: string, 
    /**
     * Team - You can specify any Team Syntax to
     * restrict which players is reported when
     * defining this value.
     * - `Type.Team.`
     */
    team: string): string;
    /**
     * The position of a player's first person
     * view (used for aiming)
     */
    eyePosition(): number;
    /**
     * The unit-length directional vector of a
     * player’s current facing relative to the
     * world. This value includes both horizontal
     * and vertical facing.
     */
    facingDirectionOf(): number;
    /**
     * The player farthest to a position, optionally
     * restricted by team.
     */
    farthestPlayerFrom(
    /**
     * Center - The position to which to measure
     * proximity. Can use most Value Syntax related
     * to reporting a position in the map.
     * - `Type.Vector.`
     */
    center: string, 
    /**
     * Team - You can specify any Team Syntax to
     * restrict which players is reported when
     * defining this value.
     * - `Type.Player.`
     */
    team: string): string;
    /**
     * Whether the specified player has the specified
     * status, either from the set status action
     * or from a non-scripted game mechanic.
     */
    hasStatus(
    /**
     * Status - The status to check for. Values
     * include Hacked, Burning, Knocked Down, Asleep,
     * Frozen, Unkillable, Invincible, Phased Out,
     * Rooted, or Stunned.
     * - `Type.Status.`
     */
    status: string): string;
    /**
     * The current health of a player including
     * armor and shields.
     */
    health(): number;
    /**
     * The Current Hero of a Player.
     */
    heroOf(): string;
    /**
     * The horizontal angle in degrees corresponding
     * to the specified direction vector.
     */
    horizontalAngleFromDirection(
    /**
     * Direction - The direction vector from which
     * to acquire a horizontal angle in degrees.
     * The vector is unitized before calculation
     * begins. Can use most Vector based Value
     * Syntax to retrieve this value.
     * - `Type.Vector.`
     */
    direction: string): number;
    /**
     * The directional angle in degrees of a player’s
     * current facing relative to the world. This
     * value increases as the player rotates to
     * the left (wrapping around at +/- 180).
     */
    horizontalFacingAngleOf(): number;
    /**
     * The current horizontal speed of a player
     * in meters per second. This measurement excludes
     * all vertical motion.
     */
    horizontalSpeedOf(): number;
    /**
     * Determines whether a player is alive. Returns
     * a Boolean value.
     */
    isAlive(): string;
    /**
     * Whether a player is holding a specific button.
     */
    isButtonHeld(
    /**
     * Button - The button to check. Designed by
     * any action inputs by ability but not directional
     * inputs. (i.e. Primary Fire, Secondary Fire,
     * Ultimate Ability, Jump, Crouch, etc.)
     * - `Type.Button.`
     */
    button: string): string;
    /**
     * Whether a player is using a specific communication
     * type (such as emote, using a voice line, etc.).
     */
    isCommunicating(
    /**
     * Type - The type of communication to consider.
     * The duration of emotes is exact, the duration
     * of voice lines is assumed to be 4 seconds,
     * and all other durations are assumed to be
     * 2 seconds. Any of the four emote slots,
     * four voice lines slots, or any standard
     * communication (Need healing, Ultimate Status,
     * etc.) can be designated.
     * - `Type.Communication.`
     */
    type: string): string;
    /**
     * Whether a player is using any communication
     * type (such as emoting, using a voice line, etc.)
     */
    isCommunicatingAny(): string;
    /**
     * Whether a player is using a emote.
     */
    isCommunicatingAnyEmote(): string;
    /**
     * Whether a player is using a voice line.
     * (The duration of a voice line is assumed
     * to be 4 seconds.)
     */
    isCommunicatingAnyVoiceLine(): string;
    /**
     * Whether a player is crouching.
     */
    isCrouching(): string;
    /**
     * Whether a player is dead.
     */
    isDead(): string;
    /**
     * Whether the specified player’s primary weapon
     * attack is being used.
     */
    isFiringPrimary(): string;
    /**
     * Whether the specified player’s secondary
     * weapon attack is being used.
     */
    isFiringSecondary(): string;
    /**
     * Whether a player is airborne.
     */
    isInAir(): string;
    /**
     * Whether a specific player is in the spawn
     * room (and is thus being healed and able
     * to change heroes).
     */
    isInSpawnRoom(): string;
    /**
     * Whether a specific player is moving (as
     * defined by having a non-zero constant speed).
     */
    isMoving(): string;
    /**
     * Whether a player is on the ground (or other
     * walkable surface).
     */
    isOnGround(): string;
    /**
     * Whether a specific player is currently occupying
     * a payload or capture point.
     */
    isOnObjective(): string;
    /**
     * Whether a player is on a wall (climbing or riding).
     */
    isOnWall(): string;
    /**
     * Whether a specific player’s portrait is on fire.
     */
    isPortraitOnFire(): string;
    /**
     * Whether a player is standing (defined as
     * both not moving and not in the air).
     */
    isStanding(): string;
    /**
     * Whether the specified player is using ability 1.
     */
    isUsingAbility1(): string;
    /**
     * Whether the specified player is using ability 2.
     */
    isUsingAbility2(): string;
    /**
     * Whether the specified player is using an
     * ultimate ability.
     */
    isUsingUltimate(): string;
    /**
     * The max health of a player, including armor and shields.
     */
    maxHealth(): number;
    /**
     * The number of deaths a specific player has
     * earned. This value only accumulates while
     * a game is in progress.
     */
    numberOfDeaths(): number;
    /**
     * The number of eliminations a specific player
     * has earned. This value only accumulates
     * while a game is in progress.
     */
    numberOfEliminations(): number;
    /**
     * The number of final blows a specific player
     * has earned. This value only accumulates
     * while a game is in progress.
     */
    numberOfFinalBlows(): number;
    /**
     * The player closest to the reticle of the
     * specified player, optionally restricted by team.
     */
    playerClosestToReticle(
    /**
     * Team - The team or teams on which to search
     * for the closest player. Can use most Team
     * based Value Syntax to provide this value.
     * - `Type.Team.`
     */
    team: string): string;
    /**
     * The players who are within a specific view
     * angle of a specific player’s reticle, optionally
     * restricted by team.
     */
    playersInViewAngle(
    /**
     * View Angle - The view angle to compare against
     * in degrees. Can use most Angle based Value
     * Syntax to provide this value.
     * - `Type.Team.`
     */
    team: string, 
    /**
     * Team - The team or teams on which to consider
     * players. Can use most Team based Value Syntax
     * to provide this value.
     * - `Type.Number.`
     */
    viewAngle: string): any[];
    /**
     * The current position of a player as a vector.
     */
    positionOf(): number;
    /**
     * The current score of a player. Results in
     * 0 if the game mode is not free-for-all.
     */
    scoreOf(): number;
    /**
     * The current speed of a player in meters per second.
     */
    speedOf(): number;
    /**
     * The current speed of a player in a specific
     * direction in meters per second.
     */
    speedOfInDirection(
    /**
     * Direction - The direction of travel in which
     * to measure the player’s speed. Can use most
     * Vector based Value Syntax to provide this value.
     * - `Type.Vector.`
     */
    direction: string): number;
    /**
     * The team of a player. If the game mode is
     * free-for-all, the team is considered to be all.
     */
    teamOf(): string;
    /**
     * The directional input of a player, represented
     * by a vector with a horizontal input on the
     * X component (positive to the left) and vertical
     * input on the Z component (positive upward).
     */
    throttleOf(): number;
    /**
     * The current ultimate ability charge percentage of a player.
     */
    ultimateChargePercent(): number;
    /**
     * The current velocity of a player as a vector.
     * If the player is on a surface, the Y component
     * of this velocity will be 0m even when traveling
     * up or down a slope.
     */
    velocityOf(): number;
    /**
     * The vertical angle in degrees from a player’s
     * current forward direction to the specified
     * position. The result is positive if the
     * position is below the player. Otherwise,
     * the result is zero or negative.
     */
    verticalAngleTowards(
    /**
     * Position - The player whose current facing
     * the angle begins. Can use most Player based
     * Value Syntax to provide this value.
     * - `Type.Vector.`
     */
    position: string): number;
    /**
     * The vertical angle in degrees, of a player’s
     * current facing relative to the world. This
     * value increases as the player looks down.
     */
    verticalFacingAngleOf(): number;
    /**
     * The current vertical speed of a player in
     * meters per second. This measurement excludes
     * all horizontal motion, including motion
     * while traveling up and down slopes.
     */
    verticalSpeedOf(): number;
}

declare class Vector$1 {
    vector: string | number;
    /**
     * @param vector `Type.Vector.`
     */
    constructor(vector: string | number);
    /**
     * The angle in degrees between two directional
     * vectors (no normalization required).
     */
    angleBetweenVectors(
    /**
     * Vector - One of two directional vectors
     * between which to measure the angle in degrees.
     * this vector does not need to be pre-normalized.
     * - `Type.Vector.`
     */
    vector1: string, 
    /**
     * Vector - One of two directional vectors
     * between which to measure the angle in degrees.
     * this vector does not need to be pre-normalized.
     * - `Type.Vector.`
     */
    vector2: string): number;
    /**
     * The vector in local coordinates corresponding
     * to the provided vector in world coordinates.
     */
    localVectorOf(
    /**
     * World Vector - The vector in world coordinates
     * that will be converted to local coordinates.
     * Can use most Vector based Value Syntax to
     * provide this data.
     * - `Type.Vector.`
     */
    worldVector: string, 
    /**
     * Local vector - The vector in local coordinates
     * that will be converted to world coordinates.
     * Can use most Vector based Value Syntax to
     * provide this value.
     * - `Type.Player.`
     */
    relativePlayer: string, 
    /**
     * Relative Player - The player to whom the
     * local vector is relative. Can use most Player
     * based Value Syntax to provide this value.
     * - `Type.Transformation.`
     */
    transformation: string): number;
    /**
     * The vector in the world coordinates corresponding
     * to the provided vector in local coordinates.
     */
    worldVectorOf(
    /**
     * Local vector - Specifies whether the vector
     * should receive a rotation and a translation
     * (usually applied to positions) or only a
     * rotation (usually applied to directions
     * and velocities). Can select rotation or
     * rotation and translation.
     * - `Type.Vector.`
     */
    localVector: string, 
    /**
     * Local vector - The vector in local coordinates
     * that will be converted to world coordinates.
     * Can use most Vector based Value Syntax to
     * provide this value.
     * - `Type.Player.`
     */
    relativePlayer: string, 
    /**
     * Relative Player - The player to whom the
     * local vector is relative. Can use most Player
     * based Value Syntax to provide this value.
     * - `Type.Transformation.`
     */
    transformation: string): number;
    /**
     * The difference between two angles, after
     * the angles are wrapped within +/- 180 of
     * each other, the result is positive if the
     * second angle is greater than the first angle,
     * otherwise the result is zero or negative.
     */
    angleDifference(
    /**
     * Angle - You can specify any Angle Syntax
     * to define both of the required values.
     * - `Type.Number.`
     */
    angle1: string, 
    /**
     * Angle - One of the two angles between which
     * to measure the resulting angle.
     * - `Type.Number.`
     */
    angle2: string): number;
    /**
     * Arccosine in degrees of the specified value.
     */
    arccosineInDegrees(
    /**
     * Value - Input value for the function.
     * - `Type.Number.`
     */
    value: string): number;
    /**
     * Arccosine in radians of the specified value
     */
    arccosineInRadians(
    /**
     * Value - Input value for the function.
     * - `Type.Number.`
     */
    value: string): number;
    /**
     * Arcsine in degrees of the specified value.
     */
    arcsineInDegrees(
    /**
     * Value - Input value for the function.
     * - `Type.Number.`
     */
    value: string): number;
    /**
     * Arcsine in radians of the specified value.
     */
    arcsineInRadians(
    /**
     * Value - Input value for the function.
     * - `Type.Number.`
     */
    value: string): number;
    /**
     * Arctangent in degrees of the specified numerator
     * and denominator(often referred to as atan2).
     */
    arctangentInDegrees(
    /**
     * Numerator - Numerator input for the function.
     * - `Type.Number.`
     */
    numerator: string, 
    /**
     * Denominator - Denominator input for the function.
     * - `Type.Number.`
     */
    denominator: string): number;
    /**
     * Arctangent in radians of the specified numerator
     * and denominator(often referred to as atan2).
     */
    arctangentInRadians(
    /**
     * Numerator - Numerator input for the function.
     * - `Type.Number.`
     */
    numerator: string, 
    /**
     * Denominator - Denominator input for the function.
     * - `Type.Number.`
     */
    denominator: string): number;
    /**
     * The cosine of a specified angle in degrees.
     * The cosine of the angle is equal to the
     * length of the adjacent side divided by the
     * length of the hypotenuse.
     */
    cosineFromDegrees(
    /**
     * Angle - Angle in degrees. Can use most Player
     * based Value Syntax to provide this value.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * The cosine of a specified angle in radians.
     * The cosine of the angle is equal to the
     * length of the adjacent side divided by the
     * length of the hypotenuse. A radian is a
     * unit of angle, equal to an angle at the
     * center of a circle whose arc is equal in
     * length to the radius.
     */
    cosineFromRadians(
    /**
     * Angle - Angle in radians. Can use most Player
     * based Value Syntax to provide this value.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * The cross product of the specified values.
     */
    crossProduct(
    /**
     * Value - You must specify the first Value
     * Syntax to compare to the second.
     * - `Type.Vector.`
     */
    value1: string, 
    /**
     * Value - You must specify the first Value
     * Syntax to compare to the second.
     * - `Type.Vector.`
     */
    value2: string): number;
    /**
     * The unit-length direction vector corresponding
     * to the specified angles.
     */
    directionFromAngles(
    /**
     * Horizontal Angle - The horizontal angle
     * in degrees used to construct the resulting
     * vector. Most angle based Value Syntax can be used here.
     * - `Type.Number.`
     */
    horizontalAngle: string, 
    /**
     * Vertical Angle - The vertical angle in degrees
     * used to construct the resulting vector.
     * Most angle based Value Syntax can be used here.
     * - `Type.Number.`
     */
    verticalAngle: string): number;
    /**
     * The unit-length direction vector from position to another.
     */
    directionTowards(
    /**
     * Start Pos - The position from which the
     * resulting direction vector will point. Most
     * positional based Value Syntax can be used here.
     * - `Type.Vector.`
     */
    startPos: string, 
    /**
     * End Pos - The position to which the resulting
     * direction vector will point. Most positional
     * based Value Syntax can be used here.
     * - `Type.Vector.`
     */
    endPos: string): number;
    /**
     * The distance between two positions in meters.
     */
    distanceBetween(
    /**
     * Start Pos - One of the two positions used
     * in the distance measurement. Most positional
     * based Value Syntax can be used here.
     * - `Type.Vector.`
     */
    startPos: string, 
    /**
     * End Pos - One of the two positions used
     * in the distance measurement. Most positional
     * based Value Syntax can be used here.
     * - `Type.Vector.`
     */
    endPos: string): number;
    /**
     * The dot product of the specified values.
     * The dot product tells you what amount of
     * one vector goes in the direction of another.
     */
    dotProduct(
    /**
     * Value - One of the two vector operands of
     * the dot product. Any positional based Syntax
     * may be used here.
     * - `Type.Vector.`
     */
    value1: string, 
    /**
     * Value - One of the two vector operands of
     * the dot product. Any positional based Syntax
     * may be used here.
     * - `Type.Vector.`
     */
    value2: string): number;
    /**
     * Shorthand for the direction vector(0, -1,
     * 0) which points down.
     */
    down(): number;
    /**
     * Shorthand for the direction vector(0, 0,
     * 1) which points forward.
     */
    forward(): number;
    /**
     * The horizontal angle in degrees from a player’s
     * current forward direction to the specified
     * position. The result is positive if the
     * position is on the player’s left, otherwise
     * the result is zero or negative.
     */
    horizontalAngleTowards(
    /**
     * Player - The player whose current facing
     * angle begins. Can use most player based
     * Value Syntax to retrieve this value.
     * - `Type.Player.`
     */
    player: string, 
    /**
     * Position - The player whose current facing
     * the angle begins. Can use most Player based
     * Value Syntax to provide this value.
     * - `Type.Vector.`
     */
    position: string): number;
    /**
     * Whether two positions have line of sight
     * with each other.
     */
    isInLineOfSight(
    /**
     * Start Pos - The start position for the line
     * of sight check. Most positional based Value
     * Syntax can be used here.
     * - `Type.Vector.`
     */
    startPos: string, 
    /**
     * End Pos - The end position for the line
     * of sight check. Most positional based Value
     * Syntax can be used here.
     * - `Type.Vector.`
     */
    endPos: string, 
    /**
     * Barriers - Defines how barriers affect line
     * of sight, when considering whether a barrier
     * belongs to an enemy, the allegiance of the
     * player provided to start pos (if any) is
     * used. Can be set to “Barriers do not block
     * LOS”, Enemy barriers block LOS", and “All
     * barriers block LOS”.
     * - `Type.Barrier.`
     */
    barriers: string): string;
    /**
     * Whether a location is within view of a player.
     */
    isInViewAngle(
    /**
     * Player - The player whose view to use for
     * the check. Can use most Player based Value
     * Syntax to provide this value.
     * - `Type.Player.`
     */
    player: string, 
    /**
     * Location - The location to test if it’s
     * within view. Most positional based Value
     * Syntax can be used here.
     * - `Type.Vector.`
     */
    location: string, 
    /**
     * Team - The team or teams on which to consider
     * players. Can use most Team based Value Syntax
     * to provide this value.
     * - `Type.Number.`
     */
    viewAngle: string): string;
    /**
     * Shorthand for the directional vector(1,
     * 0, 0), which points to the left.
     */
    left(): number;
    /**
     * The position closest to the specified position
     * that can be stood on and is accessible from a spawn point.
     */
    nearestWalkablePosition(
    /**
     * Position - The position from which to search
     * for the nearest walkable position. Can use
     * any Vector based Value syntax to divide with.
     * - `Type.Vector.`
     */
    position: string): number;
    /**
     * The unit-length normalization of a vector.
     */
    normalize(
    /**
     * Vector - The vector to normalize. Can use
     * any Vector based Value syntax to divide with.
     * - `Type.Vector.`
     */
    position: string): number;
    /**
     * An array containing all players within a
     * certain distance of a position, optionally
     * restricted by team and line of sight.
     */
    playersWithinRadius(
    /**
     * Center - The center position from which
     * to measure distance. Can use most Vector
     * based Value Syntax to provide this value.
     * - `Type.Vector.`
     */
    center: string, 
    /**
     * Radius - The radius in meters inside which
     * players must be in order to be included
     * in the resulting array. Can use most Number
     * based Value Syntax to provide this value.
     * - `Type.Number.`
     */
    radius: string, 
    /**
     * Team - The team or teams to which a player
     * must belong to be included in the resulting
     * array. Can use most Team based Value Syntax
     * to provide this value.
     * - `Type.Team.`
     */
    team: string, 
    /**
     * LOS Check - Specifies whether and how a
     * player must pass a line-of-sight check to
     * be included in the resulting array. You
     * can choose from Off, Surfaces, Surfaces
     * and Enemy Barriers, and Surfaces and All
     * Barriers. Off will result in the line of
     * sight is never blocked, allowing results
     * through walls. Surfaces will result in line
     * of sight is blocked by ceilings, walls,
     * floors, platforms, and any fixed object
     * that blocks projectiles. Surfaces and Enemy
     * Barriers will result in line of sight is
     * blocked by ceilings, walls, floors, platforms,
     * any fixed object that blocks projectiles,
     * and barriers created by the enemy team.
     * Surfaces and All Barriers will result in
     * line of sight is blocked by ceilings, walls,
     * floors, platforms, any fixed object that
     * blocks projectiles, and all barriers.
     * - `Type.LosCheck.`
     */
    losCheck: string): any[];
    /**
     * Shorthand for the directional vector (-1,
     * 0, 0), which points to the right.
     */
    right(): number;
    /**
     * Sine of the specified angle in degrees.
     * The sine is the ratio of the length of the
     * side that is opposite  that angle to the
     * length of the longest side of the triangle
     * (the hypotenuse).
     */
    sineFromDegrees(
    /**
     * Angle - Angle in degrees. Can use most Player
     * based Value Syntax to provide this value.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * Sine of the specified angle in radians.
     * The sine is the ratio of the length of the
     * side that is opposite  that angle to the
     * length of the longest side of the triangle
     * (the hypotenuse). A radian is a unit of
     * angle, equal to an angle at the center of
     * a circle whose arc is equal in length to the radius.
     */
    sineFromRadians(
    /**
     * Angle - Angle in radians. Can use most Player
     * based Value Syntax to provide this value.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * The slot number of the specified player.
     * In team games, each team has slots 0 through
     * 5. In free-for-all games, slots are numbers 0 through 11.
     */
    slotOf(
    /**
     * Player - The player whose slot number to
     * acquire. Can use most Player based Value
     * Syntax to provide this value.
     * - `Type.Player.`
     */
    player: string): number;
    /**
     * Tangent of the specified angle in degrees.
     */
    tangentFromDegrees(
    /**
     * Angle - Angle in degrees. Can use most Player
     * based Value Syntax to provide this value.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * Tangent of the specified angle in radians.
     */
    tangentFromRadians(
    /**
     * Angle - Angle in radians. Can use most Player
     * based Value Syntax to provide this value.
     * - `Type.Number.`
     */
    angle: string): number;
    /**
     * Shorthand for the directional vector(0,
     * 1, 0). Which points upward.
     */
    up(): number;
    /**
     * The vertical angle in degrees corresponding
     * to the specified direction vector.
     */
    verticalAngleFromDirection(
    /**
     * Direction - The direction vector from which
     * to acquire a vertical angle in degrees.
     * The vector is unitized before calculations
     * begins. Can use most Vector based Value
     * Syntax to provide this value.
     * - `Type.Vector.`
     */
    direction: string): number;
    /**
     * The X Component of the specified Vector,
     * usually representing a leftward amount.
     */
    xComponentOf(): number;
    /**
     * The Y Component of the specified Vector,
     * usually representing a upward amount.
     */
    yComponentOf(): number;
    /**
     * The Z Component of the specified Vector,
     * usually representing a forward amount.
     */
    zComponentOf(): number;
}

declare class Team$1 {
    team: string;
    /**
     * @param team `Type.Team.`
     */
    constructor(team: string);
    /**
     * The score percentage for the specified team
     * in the control mode.
     */
    controlModeScoringPercentage(): number;
    /**
     * Whether a specific hero is being played
     * (either on a team or in the match).
     */
    isHeroBeingPlayed(
    /**
     * Hero - The hero to check for play. Can use
     * most Hero based Value Syntax to provide this value.
     * - `Type.Hero.`
     */
    hero: string): string;
    /**
     * Whether the specified team is currently
     * on defense in a standard match.
     */
    isTeamOnDefense(): string;
    /**
     * Whether the specified team is currently
     * on offense in a standard match.
     */
    isTeamOnOffense(): string;
    /**
     * The number of dead players on a team or in the match.
     */
    numberOfDeadPlayers(): number;
    /**
     * The number of players playing a specific
     * hero on a team or in the match.
     */
    numberOfHeroes(
    /**
     * Hero - The hero to check for play. Can use
     * most Hero based Value Syntax to provide this value.
     * - `Type.Hero.`
     */
    hero: string): number;
    /**
     * The number of living players on a team or in the match.
     */
    numberOfLivingPlayers(): number;
    /**
     * The number of players on a team or in the match.
     */
    numberOfPlayers(): number;
    /**
     * The number of players occupying a payload
     * or a control point (either on a team or in the match).
     */
    numberOfPlayersOnObjective(): number;
    /**
     * The team opposite the specified team.
     */
    oppositeTeamOf(): string;
    /**
     * The player or array of players who occupy
     * a specific slot in the game.
     */
    playersInSlot(
    /**
     * Slot - The slot number from each to acquire
     * a player or players. In team games, each
     * team has slots 0 through 5. In free-for-all
     * games, slots are numbered 0 through 11.
     * Can use most Number based Value Syntax to
     * provide this value.
     * - `Type.Number.`
     */
    slot: string): any[];
    /**
     * The array of players playing a specific
     * hero on a team or in the match.
     */
    playersOnHero(
    /**
     * Hero - The hero to check for play. Can use
     * most Hero based Value Syntax to provide this value.
     * - `Type.Hero.`
     */
    hero: string): any[];
    /**
     * The current score for the specified team.
     * Results in a 0 in free-for-all game modes.
     */
    teamScore(): number;
    /**
     * The team that is currently accumulating
     * score percentage in control mode Results
     * in all if neither team is accumulating score.
     */
    static ControlModeScoringTeam(): string;
    /**
     * The team that is currently accumulating
     * score percentage in control mode Results
     * in all if neither team is accumulating score.
     */
    controlModeScoringTeam(): string;
}

declare class Event$1 {
    event: string;
    /**
     * @param event `Type.Event.`
     */
    constructor(event: string);
    /**
     * The amount of damage received by the victim
     * for the event currently being processed by this rule.
     */
    static EventDamage(): number;
    /**
     * The amount of damage received by the victim
     * for the event currently being processed by this rule.
     */
    eventDamage(): number;
    /**
     * The player executing the rule, as specified
     * by the event, may be the same as the attacker or victim.
     */
    static EventPlayer(): string;
    /**
     * The player executing the rule, as specified
     * by the event, may be the same as the attacker or victim.
     */
    eventPlayer(): string;
    /**
     * Whether the damage was a critical hit (such
     * as a headshot) for the event currently being
     * processed by this rule.
     */
    static EventWasCriticalHit(): string;
    /**
     * Whether the damage was a critical hit (such
     * as a headshot) for the event currently being
     * processed by this rule.
     */
    eventWasCriticalHit(): string;
}

declare class Entity$1 {
    entity: string;
    /**
     * @param entity `Type.Entity.`
     */
    constructor(entity: string);
    /**
     * Whether the specified player, icon entity,
     * or effect entity still exists. Useful for
     * determining if a player has left the match
     * or an entity has been destroyed.
     */
    entityExists(): string;
    /**
     * Whether an entity has spawned in the world.
     * Results in false for players who have not
     * chosen a hero yet.
     */
    hasSpawned(): string;
}

interface IRule$1 {
    /**
     * @description
     * You can annotate this rule.
     * Type `''`
     */
    description?: string;
    /**
     * @description
     * Please set event type.
     * - Type `RuleEvent.`
     */
    event: string;
    /**
     * @description
     * Write conditional expression
     * or reference the condition variable
     * -  Condition operator is must use one of the following:
     *    `==`, `!=`, `<`, `<=`, `>`, `>=`, `===`
     * - To view a list of conditional value functions, Type `Value.`
     */
    condition: boolean[];
    /**
     * @description
     * - Type `Action.`
     */
    action: string[];
}
declare class Rule$1 {
    static collectedCodes: string[];
    constructor(data: IRule$1);
}

declare const ruleCompare$1: (left: string, operatorToken: string, right: string) => string;

declare namespace compiler_d$1 {
  export {
    ruleCompare$1 as ruleCompare
  };
}



declare namespace index_d$6 {
  export {
    Player$1 as Player,
    Vector$1 as Vector,
    Team$1 as Team,
    Event$1 as Event,
    Entity$1 as Entity,
    Rule$1 as Rule,
    compiler_d$1 as Compiler
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$D: (str: "D.Va" | "Reaper" | "Tracer" | "Mercy" | "Hanzo" | "Torbjörn" | "Reinhardt" | "Pharah" | "Winston" | "Widowmaker" | "Bastion" | "Symmetra" | "Zenyatta" | "Genji" | "Roadhog" | "Mccree" | "Junkrat" | "Zarya" | "Soldier: 76" | "Lúcio" | "Mei" | "Sombra" | "Doomfist" | "Ana" | "Orisa" | "Brigitte" | "Moira" | "Wrecking Ball" | "Ashe" | "Baptiste" | "Sigma") => "D.Va" | "Reaper" | "Tracer" | "Mercy" | "Hanzo" | "Torbjörn" | "Reinhardt" | "Pharah" | "Winston" | "Widowmaker" | "Bastion" | "Symmetra" | "Zenyatta" | "Genji" | "Roadhog" | "Mccree" | "Junkrat" | "Zarya" | "Soldier: 76" | "Lúcio" | "Mei" | "Sombra" | "Doomfist" | "Ana" | "Orisa" | "Brigitte" | "Moira" | "Wrecking Ball" | "Ashe" | "Baptiste" | "Sigma";

declare namespace heroConstant_d$1 {
  export {
    Default$D as Default
  };
}

/**
 * @param num Type Any Number.
 * Then can see list of available number lists. */
declare const Default$E: (num: SlotRangeType) => SlotRangeType;

declare namespace slotRange_d$1 {
  export {
    Default$E as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$F: (str: TeamConstantType) => TeamConstantType;

declare namespace teamConstant_d$1 {
  export {
    Default$F as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$G: (str: VariableType) => VariableType;

declare namespace variable_d$1 {
  export {
    Default$G as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$H: (str: EventPlayerType) => EventPlayerType;

declare namespace eventPlayer_d$1 {
  export {
    Default$H as Default
  };
}

/**
 * Number - A real number constant. Can use
 * most Number based Value Syntax to provide this value.
 */
declare const number$1: (
/**
 * Number - A real number constant. Can use
 * most Number based Value Syntax to provide this value.
 */
number: number
) => number;

/**
 * The sum of two numbers or vectors. This
 * value will add the two specified values.
 */
declare const add$1: (
/**
 * Value - You can specify any Value Syntax
 * to define either addend.
 * - `Type.Add.`
 */
value1: string | number | any[],
/**
 * Value - The right-hand operand. may be any
 * value that results in a number or a vector.
 * - `Type.Add.`
 */
value2: string | number | any[]
) => number;

/**
 * The difference between two angles, after
 * the angles are wrapped within +/- 180 of
 * each other, the result is positive if the
 * second angle is greater than the first angle,
 * otherwise the result is zero or negative.
 */
declare const angleDifference$1: (
/**
 * Angle - You can specify any Angle Syntax
 * to define both of the required values.
 * - `Type.Number.`
 */
angle1: string | number | any[],
/**
 * Angle - One of the two angles between which
 * to measure the resulting angle.
 * - `Type.Number.`
 */
angle2: string | number | any[]
) => number;

/**
 * The angle in degrees between two directional
 * vectors (no normalization required).
 */
declare const angleBetweenVectors$1: (
/**
 * Vector - One of two directional vectors
 * between which to measure the angle in degrees.
 * this vector does not need to be pre-normalized.
 * - `Type.Vector.`
 */
vector1: string | number | any[],
/**
 * Vector - One of two directional vectors
 * between which to measure the angle in degrees.
 * this vector does not need to be pre-normalized.
 * - `Type.Vector.`
 */
vector2: string | number | any[]
) => number;

/**
 * The player’s current height in meters above
 * a surface. Results in a 0 whenever the place
 * is on a surface.
 */
declare const altitudeOf$1: (
/**
 * Player - You can specify any Player Syntax
 * to define the array.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The number of elements in the specified array.
 */
declare const countOf$1: (
/**
 * - `Type.Array.`
 */
array: string | number | any[]
) => number;

/**
 * Arccosine in degrees of the specified value.
 */
declare const arccosineInDegrees$1: (
/**
 * Value - Input value for the function.
 * - `Type.Number.`
 */
value: string | number | any[]
) => number;

/**
 * Arccosine in radians of the specified value
 */
declare const arccosineInRadians$1: (
/**
 * Value - Input value for the function.
 * - `Type.Number.`
 */
value: string | number | any[]
) => number;

/**
 * Arcsine in degrees of the specified value.
 */
declare const arcsineInDegrees$1: (
/**
 * Value - Input value for the function.
 * - `Type.Number.`
 */
value: string | number | any[]
) => number;

/**
 * Arcsine in radians of the specified value.
 */
declare const arcsineInRadians$1: (
/**
 * Value - Input value for the function.
 * - `Type.Number.`
 */
value: string | number | any[]
) => number;

/**
 * Arctangent in degrees of the specified numerator
 * and denominator(often referred to as atan2).
 */
declare const arctangentInDegrees$1: (
/**
 * Numerator - Numerator input for the function.
 * - `Type.Number.`
 */
numerator: string | number | any[],
/**
 * Denominator - Denominator input for the function.
 * - `Type.Number.`
 */
denominator: string | number | any[]
) => number;

/**
 * Arctangent in radians of the specified numerator
 * and denominator(often referred to as atan2).
 */
declare const arctangentInRadians$1: (
/**
 * Numerator - Numerator input for the function.
 * - `Type.Number.`
 */
numerator: string | number | any[],
/**
 * Denominator - Denominator input for the function.
 * - `Type.Number.`
 */
denominator: string | number | any[]
) => number;

/**
 * The cosine of a specified angle in degrees.
 * The cosine of the angle is equal to the
 * length of the adjacent side divided by the
 * length of the hypotenuse.
 */
declare const cosineFromDegrees$1: (
/**
 * Angle - Angle in degrees. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * The cosine of a specified angle in radians.
 * The cosine of the angle is equal to the
 * length of the adjacent side divided by the
 * length of the hypotenuse. A radian is a
 * unit of angle, equal to an angle at the
 * center of a circle whose arc is equal in
 * length to the radius.
 */
declare const cosineFromRadians$1: (
/**
 * Angle - Angle in radians. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * The score percentage for the specified team
 * in the control mode.
 */
declare const controlModeScoringPercentage$1: (
/**
 * Team - You can specify any Team Syntax to
 * define which team reported when defining this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * The current value of a global variable,
 * which is a variable which belongs to the
 * custom game itself.
 */
declare const globalVariable$1: (
/**
 * - `Type.Variable.`
 */
variable: string | number | any[]
) => any[];

/**
 * The current value of a player variable,
 * which is a variable that belongs to a specific player.
 */
declare const playerVariable$1: (
/**
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * - `Type.Variable.`
 */
variable: string | number | any[]
) => any[];

/**
 * The distance between two positions in meters.
 */
declare const distanceBetween$1: (
/**
 * Start Pos - One of the two positions used
 * in the distance measurement. Most positional
 * based Value Syntax can be used here.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * End Pos - One of the two positions used
 * in the distance measurement. Most positional
 * based Value Syntax can be used here.
 * - `Type.Vector.`
 */
endPos: string | number | any[]
) => number;

/**
 * The ratio of two numbers or vectors. A vector
 * divided by a number will yield a scaled
 * vector. Division by zero results in zero.
 */
declare const divide$1: (
/**
 * Value - The left-hand operand, may be any
 * value that results in a number or a vector.
 * Any Value Syntax may be used here.
 * - `Type.Divide.`
 */
value1: string | number | any[],
/**
 * Value - The right-hand operand, may be any
 * value that results in a number or a vector.
 * Any Value Syntax may be used here.
 * - `Type.Divide.`
 */
value2: string | number | any[]
) => number;

/**
 * The amount of damage received by the victim
 * for the event currently being processed by this rule.
 */
declare const eventDamage$1: (


) => number;

/**
 * The position of a player's first person
 * view (used for aiming)
 */
declare const eyePosition$1: (
/**
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The current health of a player including
 * armor and shields.
 */
declare const health$1: (
/**
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The horizontal angle in degrees corresponding
 * to the specified direction vector.
 */
declare const horizontalAngleFromDirection$1: (
/**
 * Direction - The direction vector from which
 * to acquire a horizontal angle in degrees.
 * The vector is unitized before calculation
 * begins. Can use most Vector based Value
 * Syntax to retrieve this value.
 * - `Type.Vector.`
 */
direction: string | number | any[]
) => number;

/**
 * The horizontal angle in degrees from a player’s
 * current forward direction to the specified
 * position. The result is positive if the
 * position is on the player’s left, otherwise
 * the result is zero or negative.
 */
declare const horizontalAngleTowards$1: (
/**
 * Player - The player whose current facing
 * angle begins. Can use most player based
 * Value Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Position - The player whose current facing
 * the angle begins. Can use most Player based
 * Value Syntax to provide this value.
 * - `Type.Vector.`
 */
position: string | number | any[]
) => number;

/**
 * The directional angle in degrees of a player’s
 * current facing relative to the world. This
 * value increases as the player rotates to
 * the left (wrapping around at +/- 180).
 */
declare const horizontalFacingAngleOf$1: (
/**
 * Player - The player whose facing direction
 * to acquire. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The current horizontal speed of a player
 * in meters per second. This measurement excludes
 * all vertical motion.
 */
declare const horizontalSpeedOf$1: (
/**
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The index of a value within an array or
 * -1 if no such value can be found.
 */
declare const indexOfArrayValue$1: (
/**
 * Array - The array in which to search for
 * the specified value. Can use most Array
 * based Value Syntax to retrieve this value.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * Value - The value for which to search. Can
 * use most Number based Value Syntax to retrive this value.
 * - `Type.Value.`
 */
value: string | number | any[]
) => number;

/**
 * An id representing the most recent start
 * damage modification action that was executed
 * by the event player (or executed at the global level).
 */
declare const lastDamageModificationId$1: (


) => number;

/**
 * An ID representing the most recent damage
 * over time action that was executed by the
 * event player (or executed at the global level).
 */
declare const lastDamageOverTimeId$1: (


) => number;

/**
 * An ID representing the most recent heal
 * over time action that was executed by the
 * event player (or executed at the global level).
 */
declare const lastHealOverTimeId$1: (


) => number;

/**
 * A reference to the last piece of text created
 * by the event player (or created at the global
 * level) via the create HUD text or create
 * in-world text action.
 */
declare const lastTextId$1: (


) => number;

/**
 * The current round of the match, counting
 * up from 1. This will return a numerical value
 */
declare const matchRound$1: (


) => number;

/**
 * The greater of the two numbers. This will
 * return a numerical value of two number values compared.
 */
declare const max$1: (
/**
 * - `Type.Number.`
 */
value1: string | number | any[],
/**
 * - `Type.Number.`
 */
value2: string | number | any[]
) => number;

/**
 * The max health of a player, including armor and shields.
 */
declare const maxHealth$1: (
/**
 * Player - The player whose max health to
 * compare. Can use any Player based Value
 * syntax to provide with.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The lesser of the two numbers. This will
 * return a numerical value of two number values compared.
 */
declare const min$1: (
/**
 * Value - The left-hand operand. May be any
 * value that results in a number. Can use
 * most Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
value1: string | number | any[],
/**
 * Value - The right-hand operand. May be any
 * value that results in a number. Can use
 * most Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
value2: string | number | any[]
) => number;

/**
 * The remainder of the left-hand operand divided
 * by the right-hand operand. Any number modulo
 * zero will result in zero. This will return
 * a numerical value of two number values compared.
 * For example 7 divided by 2 will result in
 * 1 for the Modulo.
 */
declare const modulo$1: (
/**
 * - `Type.Number.`
 */
value1: string | number | any[],
/**
 * - `Type.Number.`
 */
value2: string | number | any[]
) => number;

/**
 * The current health of a player. including
 * armor and shields, normalized between 0
 * and 1. (for example, 0 is no health, 0.5
 * is half health, 1 is full health, etc.)
 */
declare const normalizedHealth$1: (
/**
 * Player - The player whose normalized health to acquire.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The number of dead players on a team or in the match.
 */
declare const numberOfDeadPlayers$1: (
/**
 * Team - The team or teams on which to count
 * players. Can use most Team based Value Syntax
 * to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * The number of deaths a specific player has
 * earned. This value only accumulates while
 * a game is in progress.
 */
declare const numberOfDeaths$1: (
/**
 * Player - The player whose death count to
 * acquire. Can use most Player based Value
 * Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The number of eliminations a specific player
 * has earned. This value only accumulates
 * while a game is in progress.
 */
declare const numberOfEliminations$1: (
/**
 * Player - The player whose elimination count
 * to acquire. Can use most Player based Value
 * Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The number of final blows a specific player
 * has earned. This value only accumulates
 * while a game is in progress.
 */
declare const numberOfFinalBlows$1: (
/**
 * Player - The player whose final blow count
 * to acquire. Can use most Player based Value
 * Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The number of players playing a specific
 * hero on a team or in the match.
 */
declare const numberOfHeroes$1: (
/**
 * Hero - The hero to check for play. Can use
 * most Hero based Value Syntax to provide this value.
 * - `Type.Hero.`
 */
hero: string | number | any[],
/**
 * Team - The team or teams on which to check
 * for the hero being played. Can use most
 * Team based Value Syntax to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * The number of living players on a team or in the match.
 */
declare const numberOfLivingPlayers$1: (
/**
 * Team - The team or teams on which to count
 * players. Can use most Team based Value Syntax
 * to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * The number of players on a team or in the match.
 */
declare const numberOfPlayers$1: (
/**
 * Team - The team or teams on which to count
 * players. Can use most Team based Value Syntax
 * to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * The number of players occupying a payload
 * or a control point (either on a team or in the match).
 */
declare const numberOfPlayersOnObjective$1: (
/**
 * Team - The team or teams on which to count
 * players. Can use most Team based Value Syntax
 * to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * The control point, payload checkpoint, or
 * payload destination currently active (either
 * 0, 1, or 2). Valid in Assault, Assault/Escort
 * (Hybrid), Escort, and Control.
 */
declare const objectiveIndex$1: (


) => number;

/**
 * The current progress towards the destination
 * for the active payload (expressed as a percentage).
 */
declare const payloadProgressPercentage$1: (


) => number;

/**
 * The current progress towards capture for
 * the active control point (expressed as a percentage).
 */
declare const pointCapturePercentage$1: (


) => number;

/**
 * The left-hand operand raised to the power
 * of the right-hand operand. For example 2 ^ 3 = 8
 */
declare const raiseToPower$1: (
/**
 * Value - The left-hand operand. May be any
 * value that results in a number. Can use
 * most Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
value1: string | number | any[],
/**
 * Value - The right-hand operand. May be any
 * value that results in a number. Can use
 * most Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
value2: string | number | any[]
) => number;

/**
 * A random integer between the specified min
 * and max, inclusive.
 */
declare const randomInteger$1: (
/**
 * MIN - The smallest integer allowed. If a
 * real number is provided to this input, it
 * is rounded to the nearest integer. Can use
 * most Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
min: string | number | any[],
/**
 * MAX - The largest integer allowed. If a
 * real number is provided to this input, it
 * is rounded to the nearest integer. Can use
 * most Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
max: string | number | any[]
) => number;

/**
 * A random real number between the specified min and max.
 */
declare const randomReal$1: (
/**
 * MIN - The smallest real number allowed.
 * Can use most Number based Value Syntax to
 * provide this value.
 * - `Type.Number.`
 */
min: string | number | any[],
/**
 * MAX - The largest real number allowed. Can
 * use most Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
max: string | number | any[]
) => number;

/**
 * The integer to which the specified value rounds.
 */
declare const roundToInteger$1: (
/**
 * Value - The real number to round. Can use
 * most Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
value: string | number | any[],
/**
 * Rounding Type - Determines the direction
 * in which the value will be rounded. You
 * can round up, down, or to the nearest integer.
 * - `Type.Rounding.`
 */
roundingType: string | number | any[]
) => number;

/**
 * The current score of a player. Results in
 * 0 if the game mode is not free-for-all.
 */
declare const scoreOf$1: (
/**
 * Player - The player whose score to acquire.
 * Can use most Player based Value Syntax to
 * provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * Sine of the specified angle in degrees.
 * The sine is the ratio of the length of the
 * side that is opposite  that angle to the
 * length of the longest side of the triangle
 * (the hypotenuse).
 */
declare const sineFromDegrees$1: (
/**
 * Angle - Angle in degrees. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * Sine of the specified angle in radians.
 * The sine is the ratio of the length of the
 * side that is opposite  that angle to the
 * length of the longest side of the triangle
 * (the hypotenuse). A radian is a unit of
 * angle, equal to an angle at the center of
 * a circle whose arc is equal in length to the radius.
 */
declare const sineFromRadians$1: (
/**
 * Angle - Angle in radians. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * The slot number of the specified player.
 * In team games, each team has slots 0 through
 * 5. In free-for-all games, slots are numbers 0 through 11.
 */
declare const slotOf$1: (
/**
 * Player - The player whose slot number to
 * acquire. Can use most Player based Value
 * Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The current speed of a player in meters per second.
 */
declare const speedOf$1: (
/**
 * Player - The player whose velocity to acquire.
 * Can use most Player based Value Syntax to
 * provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The current speed of a player in a specific
 * direction in meters per second.
 */
declare const speedOfInDirection$1: (
/**
 * Player - The player whose velocity to acquire.
 * Can use most Player based Value Syntax to
 * provide this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Direction - The direction of travel in which
 * to measure the player’s speed. Can use most
 * Vector based Value Syntax to provide this value.
 * - `Type.Vector.`
 */
direction: string | number | any[]
) => number;

/**
 * The square root of the specified value.
 * For example the square root of 9 is 3.
 */
declare const squareRoot$1: (
/**
 * Value - The real number value whose square
 * root will be computed. Negative values result
 * in zero. Can use most Number based Value
 * Syntax to provide this value.
 * - `Type.Number.`
 */
value: string | number | any[]
) => number;

/**
 * The difference between two numbers or vectors.
 */
declare const subtract$1: (
/**
 * Value - The left-hand operand. May be any
 * value that results in a number or a vector.
 * Can use most Number based Value Syntax to
 * provide this value.
 * - `Type.Subtract.`
 */
value1: string | number | any[],
/**
 * Value - The right-hand operand. May be any
 * value that results in a number or a vector.
 * Can use most Number based Value Syntax to
 * provide this value.
 * - `Type.Subtract.`
 */
value2: string | number | any[]
) => number;

/**
 * Tangent of the specified angle in degrees.
 */
declare const tangentFromDegrees$1: (
/**
 * Angle - Angle in degrees. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * Tangent of the specified angle in radians.
 */
declare const tangentFromRadians$1: (
/**
 * Angle - Angle in radians. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Number.`
 */
angle: string | number | any[]
) => number;

/**
 * The current score for the specified team.
 * Results in a 0 in free-for-all game modes.
 */
declare const teamScore$1: (
/**
 * Team - The team whose score to acquire.
 * Can use most Team based Value Syntax to
 * provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * The current ultimate ability charge percentage of a player.
 */
declare const ultimateChargePercent$1: (
/**
 * Player - The player whose ultimate charge
 * percentage to acquire. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The vertical angle in degrees corresponding
 * to the specified direction vector.
 */
declare const verticalAngleFromDirection$1: (
/**
 * Direction - The direction vector from which
 * to acquire a vertical angle in degrees.
 * The vector is unitized before calculations
 * begins. Can use most Vector based Value
 * Syntax to provide this value.
 * - `Type.Vector.`
 */
direction: string | number | any[]
) => number;

/**
 * The vertical angle in degrees from a player’s
 * current forward direction to the specified
 * position. The result is positive if the
 * position is below the player. Otherwise,
 * the result is zero or negative.
 */
declare const verticalAngleTowards$1: (
/**
 * Position - The direction vector from which
 * to acquire a vertical angle in degrees.
 * The vector is unitized before calculations
 * begins. Can use most Vector based Value
 * Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Position - The player whose current facing
 * the angle begins. Can use most Player based
 * Value Syntax to provide this value.
 * - `Type.Vector.`
 */
position: string | number | any[]
) => number;

/**
 * The vertical angle in degrees, of a player’s
 * current facing relative to the world. This
 * value increases as the player looks down.
 */
declare const verticalFacingAngleOf$1: (
/**
 * Player - The player whose vertical facing
 * angle to acquire. Can use most Player based
 * Value Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The current vertical speed of a player in
 * meters per second. This measurement excludes
 * all horizontal motion, including motion
 * while traveling up and down slopes.
 */
declare const verticalSpeedOf$1: (
/**
 * Player - The player whose vertical speed
 * to acquire. Can use most Player based Value
 * Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * Provides a percentage representing the cpu
 * load of the current game instance. as this
 * number approaches or exceeds 100, It becomes
 * increasingly likely that the instance will
 * be shut down because it is consuming too many resources.
 */
declare const serverLoad$1: (


) => number;

/**
 * Provides a percentage representing the average
 * cpu load of the current game instance over
 * the last two seconds. as this number approaches
 * or exceeds 100, It becomes increasingly
 * likely that the instance will be shut down
 * because it is consuming too many resources.
 */
declare const serverLoadAverage$1: (


) => number;

/**
 * Provides a percentage representing the highest
 * cpu load of the current game instance over
 * the last two seconds. as this number approaches
 * or exceeds 100, It becomes increasingly
 * likely that the instance will be shut down
 * because it is consuming too many resources.
 */
declare const serverLoadPeak$1: (


) => number;



declare namespace number_d$1 {
  export {
    number$1 as number,
    add$1 as add,
    angleDifference$1 as angleDifference,
    angleBetweenVectors$1 as angleBetweenVectors,
    altitudeOf$1 as altitudeOf,
    countOf$1 as countOf,
    arccosineInDegrees$1 as arccosineInDegrees,
    arccosineInRadians$1 as arccosineInRadians,
    arcsineInDegrees$1 as arcsineInDegrees,
    arcsineInRadians$1 as arcsineInRadians,
    arctangentInDegrees$1 as arctangentInDegrees,
    arctangentInRadians$1 as arctangentInRadians,
    cosineFromDegrees$1 as cosineFromDegrees,
    cosineFromRadians$1 as cosineFromRadians,
    controlModeScoringPercentage$1 as controlModeScoringPercentage,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    distanceBetween$1 as distanceBetween,
    divide$1 as divide,
    eventDamage$1 as eventDamage,
    eyePosition$1 as eyePosition,
    health$1 as health,
    horizontalAngleFromDirection$1 as horizontalAngleFromDirection,
    horizontalAngleTowards$1 as horizontalAngleTowards,
    horizontalFacingAngleOf$1 as horizontalFacingAngleOf,
    horizontalSpeedOf$1 as horizontalSpeedOf,
    indexOfArrayValue$1 as indexOfArrayValue,
    lastDamageModificationId$1 as lastDamageModificationId,
    lastDamageOverTimeId$1 as lastDamageOverTimeId,
    lastHealOverTimeId$1 as lastHealOverTimeId,
    lastTextId$1 as lastTextId,
    matchRound$1 as matchRound,
    max$1 as max,
    maxHealth$1 as maxHealth,
    min$1 as min,
    modulo$1 as modulo,
    normalizedHealth$1 as normalizedHealth,
    numberOfDeadPlayers$1 as numberOfDeadPlayers,
    numberOfDeaths$1 as numberOfDeaths,
    numberOfEliminations$1 as numberOfEliminations,
    numberOfFinalBlows$1 as numberOfFinalBlows,
    numberOfHeroes$1 as numberOfHeroes,
    numberOfLivingPlayers$1 as numberOfLivingPlayers,
    numberOfPlayers$1 as numberOfPlayers,
    numberOfPlayersOnObjective$1 as numberOfPlayersOnObjective,
    objectiveIndex$1 as objectiveIndex,
    payloadProgressPercentage$1 as payloadProgressPercentage,
    pointCapturePercentage$1 as pointCapturePercentage,
    raiseToPower$1 as raiseToPower,
    randomInteger$1 as randomInteger,
    randomReal$1 as randomReal,
    roundToInteger$1 as roundToInteger,
    scoreOf$1 as scoreOf,
    sineFromDegrees$1 as sineFromDegrees,
    sineFromRadians$1 as sineFromRadians,
    slotOf$1 as slotOf,
    speedOf$1 as speedOf,
    speedOfInDirection$1 as speedOfInDirection,
    squareRoot$1 as squareRoot,
    subtract$1 as subtract,
    tangentFromDegrees$1 as tangentFromDegrees,
    tangentFromRadians$1 as tangentFromRadians,
    teamScore$1 as teamScore,
    ultimateChargePercent$1 as ultimateChargePercent,
    verticalAngleFromDirection$1 as verticalAngleFromDirection,
    verticalAngleTowards$1 as verticalAngleTowards,
    verticalFacingAngleOf$1 as verticalFacingAngleOf,
    verticalSpeedOf$1 as verticalSpeedOf,
    serverLoad$1 as serverLoad,
    serverLoadAverage$1 as serverLoadAverage,
    serverLoadPeak$1 as serverLoadPeak
  };
}

/**
 * A vector composed of three real numbers
 * (X, Y, Z) where X is left, Y is Up, and
 * Z is forward. Vectors are used for position,
 * direction, and velocity.
 */
declare const vector$1: (
/**
 * X - The X value of the Vector. Can use most
 * Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
x: string | number | any[],
/**
 * Y - The Y value of the vector. Can use most
 * Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
y: string | number | any[],
/**
 * Z - The Z value of the Vector. Can use most
 * Number based Value Syntax to provide this value.
 * - `Type.Number.`
 */
z: string | number | any[]
) => number;

/**
 * The vector in local coordinates corresponding
 * to the provided vector in world coordinates.
 */
declare const localVectorOf$1: (
/**
 * World Vector - The vector in world coordinates
 * that will be converted to local coordinates.
 * Can use most Vector based Value Syntax to
 * provide this data.
 * - `Type.Vector.`
 */
worldVector: string | number | any[],
/**
 * Local vector - The vector in local coordinates
 * that will be converted to world coordinates.
 * Can use most Vector based Value Syntax to
 * provide this value.
 * - `Type.Player.`
 */
relativePlayer: string | number | any[],
/**
 * Relative Player - The player to whom the
 * local vector is relative. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Transformation.`
 */
transformation: string | number | any[]
) => number;

/**
 * The vector in the world coordinates corresponding
 * to the provided vector in local coordinates.
 */
declare const worldVectorOf$1: (
/**
 * Local vector - Specifies whether the vector
 * should receive a rotation and a translation
 * (usually applied to positions) or only a
 * rotation (usually applied to directions
 * and velocities). Can select rotation or
 * rotation and translation.
 * - `Type.Vector.`
 */
localVector: string | number | any[],
/**
 * Local vector - The vector in local coordinates
 * that will be converted to world coordinates.
 * Can use most Vector based Value Syntax to
 * provide this value.
 * - `Type.Player.`
 */
relativePlayer: string | number | any[],
/**
 * Relative Player - The player to whom the
 * local vector is relative. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Transformation.`
 */
transformation: string | number | any[]
) => number;

/**
 * The displacement vector from one position to another.
 */
declare const vectorTowards$1: (
/**
 * Start Pos - The start position for the line
 * of sight check. Most positional based Value
 * Syntax can be used here.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * End Pos - The end position for the line
 * of sight check. Most positional based Value
 * Syntax can be used here.
 * - `Type.Vector.`
 */
endPos: string | number | any[]
) => number;

/**
 * Shorthand for the direction vector(0, 0,
 * -1) which points backwards.
 */
declare const backward$1: (


) => number;

/**
 * The cross product of the specified values.
 */
declare const crossProduct$1: (
/**
 * Value - You must specify the first Value
 * Syntax to compare to the second.
 * - `Type.Vector.`
 */
value1: string | number | any[],
/**
 * Value - You must specify the first Value
 * Syntax to compare to the second.
 * - `Type.Vector.`
 */
value2: string | number | any[]
) => number;

/**
 * The unit-length direction vector corresponding
 * to the specified angles.
 */
declare const directionFromAngles$1: (
/**
 * Horizontal Angle - The horizontal angle
 * in degrees used to construct the resulting
 * vector. Most angle based Value Syntax can be used here.
 * - `Type.Number.`
 */
horizontalAngle: string | number | any[],
/**
 * Vertical Angle - The vertical angle in degrees
 * used to construct the resulting vector.
 * Most angle based Value Syntax can be used here.
 * - `Type.Number.`
 */
verticalAngle: string | number | any[]
) => number;

/**
 * The unit-length direction vector from position to another.
 */
declare const directionTowards$1: (
/**
 * Start Pos - The position from which the
 * resulting direction vector will point. Most
 * positional based Value Syntax can be used here.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * End Pos - The position to which the resulting
 * direction vector will point. Most positional
 * based Value Syntax can be used here.
 * - `Type.Vector.`
 */
endPos: string | number | any[]
) => number;

/**
 * The dot product of the specified values.
 * The dot product tells you what amount of
 * one vector goes in the direction of another.
 */
declare const dotProduct$1: (
/**
 * Value - One of the two vector operands of
 * the dot product. Any positional based Syntax
 * may be used here.
 * - `Type.Vector.`
 */
value1: string | number | any[],
/**
 * Value - One of the two vector operands of
 * the dot product. Any positional based Syntax
 * may be used here.
 * - `Type.Vector.`
 */
value2: string | number | any[]
) => number;

/**
 * Shorthand for the direction vector(0, -1,
 * 0) which points down.
 */
declare const down$1: (


) => number;

/**
 * The unit-length directional vector of a
 * player’s current facing relative to the
 * world. This value includes both horizontal
 * and vertical facing.
 */
declare const facingDirectionOf$1: (
/**
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The position of a specific team’s flag in
 * Capture the Flag.
 */
declare const flagPosition$1: (
/**
 * Team - The team whose flag position to acquire.
 * - `Type.Team.`
 */
team: string | number | any[]
) => number;

/**
 * Shorthand for the direction vector(0, 0,
 * 1) which points forward.
 */
declare const forward$1: (


) => number;

/**
 * Shorthand for the directional vector(1,
 * 0, 0), which points to the left.
 */
declare const left$1: (


) => number;

/**
 * The position closest to the specified position
 * that can be stood on and is accessible from a spawn point.
 */
declare const nearestWalkablePosition$1: (
/**
 * Position - The position from which to search
 * for the nearest walkable position. Can use
 * any Vector based Value syntax to divide with.
 * - `Type.Vector.`
 */
position: string | number | any[]
) => number;

/**
 * The unit-length normalization of a vector.
 */
declare const normalize$1: (
/**
 * Vector - The vector to normalize. Can use
 * any Vector based Value syntax to divide with.
 * - `Type.Vector.`
 */
position: string | number | any[]
) => number;

/**
 * The position in the world of the specified
 * objective (either a control point, a payload
 * checkpoint, or a payload destination) Valid
 * in Assault, Assault/Escort (Hybrid), Escort, and Control.
 */
declare const objectivePosition$1: (
/**
 * Number - The index of the objective to consider,
 * starting at 0 and counting up. Each control
 * point, payload checkpoint, and payload destination
 * as its own index. Can use most Number based
 * Value Syntax to provide this value, but
 * must output in a integer of 0, 1, or 2.
 * - `Type.Number.`
 */
number: string | number | any[]
) => number;

/**
 * The position in the world of the active payload.
 */
declare const payloadPosition$1: (


) => number;

/**
 * The current position of a player as a vector.
 */
declare const positionOf$1: (
/**
 * Player - The player whose position to acquire.
 * Can use most Player based Value Syntax to
 * provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The surface normal at the ray cast hit position
 * (or from end pos to start pos if no hit occurs).
 */
declare const rayCastHitNormal$1: (
/**
 * Start POS - The start position for the ray
 * cast. If a player is provided. A position
 * 2 meters above the player’s feet is used.
 * Can use most Vector based Value Syntax to
 * provide this value.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * End POS - The end position for the ray cast.
 * If a player is provided. A position 2 meters
 * above the player’s feet is used. Can use
 * most Vector based Value Syntax to provide this value.
 * - `Type.Vector.`
 */
endPos: string | number | any[],
/**
 * Players to include - Which players can be
 * hit by this ray cast. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Array.`
 */
playersToInclude: string | number | any[],
/**
 * Players to exclude - Which players cannot
 * be hit by this ray cast. This list takes
 * precedence over players to include. Can
 * use most Player based Value Syntax to provide this value.
 * - `Type.Array.`
 */
playersToExclude: string | number | any[],
/**
 * Include player owned objects - Whether player
 * owned objects (such as barriers or turrets)
 * should be included in the ray cast. Can
 * use most Boolean based Value Syntax to provide this value.
 * - `Type.Bool.`
 */
IncludePlayerOwnedObjects: string | number | any[]
) => number;

/**
 * The player hit by the ray cast (or null
 * if no player is hit).
 */
declare const rayCastHitPlayer$1: (
/**
 * Start POS - The start position for the ray
 * cast. If a player is provided. A position
 * 2 meters above the player’s feet is used.
 * Can use most Vector based Value Syntax to
 * provide this value.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * End POS - The end position for the ray cast.
 * If a player is provided. A position 2 meters
 * above the player’s feet is used. Can use
 * most Vector based Value Syntax to provide this value.
 * - `Type.Vector.`
 */
endPos: string | number | any[],
/**
 * Players to include - Which players can be
 * hit by this ray cast. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Array.`
 */
playersToInclude: string | number | any[],
/**
 * Players to exclude - Which players cannot
 * be hit by this ray cast. This list takes
 * precedence over players to include. Can
 * use most Player based Value Syntax to provide this value.
 * - `Type.Array.`
 */
playersToExclude: string | number | any[],
/**
 * Include player owned objects - Whether player
 * owned objects (such as barriers or turrets)
 * should be included in the ray cast. Can
 * use most Boolean based Value Syntax to provide this value.
 * - `Type.Bool.`
 */
IncludePlayerOwnedObjects: string | number | any[]
) => number;

/**
 * The position where the ray cast hits a surface,
 * object, or player (or the end POS if no hit occurs).
 */
declare const rayCastHitPosition$1: (
/**
 * Start POS - The start position for the ray
 * cast. If a player is provided. A position
 * 2 meters above the player’s feet is used.
 * Can use most Vector based Value Syntax to
 * provide this value.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * End POS - The end position for the ray cast.
 * If a player is provided. A position 2 meters
 * above the player’s feet is used. Can use
 * most Vector based Value Syntax to provide this value.
 * - `Type.Vector.`
 */
endPos: string | number | any[],
/**
 * Players to include - Which players can be
 * hit by this ray cast. Can use most Player
 * based Value Syntax to provide this value.
 * - `Type.Array.`
 */
playersToInclude: string | number | any[],
/**
 * Players to exclude - Which players cannot
 * be hit by this ray cast. This list takes
 * precedence over players to include. Can
 * use most Player based Value Syntax to provide this value.
 * - `Type.Array.`
 */
playersToExclude: string | number | any[],
/**
 * Include player owned objects - Whether player
 * owned objects (such as barriers or turrets)
 * should be included in the ray cast. Can
 * use most Boolean based Value Syntax to provide this value.
 * - `Type.Bool.`
 */
IncludePlayerOwnedObjects: string | number | any[]
) => number;

/**
 * Shorthand for the directional vector (-1,
 * 0, 0), which points to the right.
 */
declare const right$1: (


) => number;

/**
 * The directional input of a player, represented
 * by a vector with a horizontal input on the
 * X component (positive to the left) and vertical
 * input on the Z component (positive upward).
 */
declare const throttleOf$1: (
/**
 * Player - The player whose directional input
 * to acquire. Can use most Player based Value
 * Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The total time seconds that have elapsed
 * since the game instance was created (including
 * setup time and transitions).
 */
declare const totalTimeElapsed$1: (


) => number;

/**
 * Shorthand for the directional vector(0,
 * 1, 0). Which points upward.
 */
declare const up$1: (


) => number;

/**
 * The current velocity of a player as a vector.
 * If the player is on a surface, the Y component
 * of this velocity will be 0m even when traveling
 * up or down a slope.
 */
declare const velocityOf$1: (
/**
 * Player - The player whose velocity to acquire.
 * Can use most Player based Value Syntax to
 * provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => number;

/**
 * The X Component of the specified Vector,
 * usually representing a leftward amount.
 */
declare const xComponentOf$1: (
/**
 * Value - The vector from which to acquire
 * the X component. Can use most Vector based
 * Value Syntax to provide this value.
 * - `Type.Vector.`
 */
vector: string | number | any[]
) => number;

/**
 * The Y Component of the specified Vector,
 * usually representing a upward amount.
 */
declare const yComponentOf$1: (
/**
 * Value - The vector from which to acquire
 * the Y component. Can use most Vector based
 * Value Syntax to provide this value.
 * - `Type.Vector.`
 */
vector: string | number | any[]
) => number;

/**
 * The Z Component of the specified Vector,
 * usually representing a forward amount.
 */
declare const zComponentOf$1: (
/**
 * Value - The vector from which to acquire
 * the Z component. Can use most Vector based
 * Value Syntax to provide this value.
 * - `Type.Vector.`
 */
vector: string | number | any[]
) => number;



declare namespace vector_d$1 {
  export {
    vector$1 as vector,
    localVectorOf$1 as localVectorOf,
    worldVectorOf$1 as worldVectorOf,
    vectorTowards$1 as vectorTowards,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    backward$1 as backward,
    crossProduct$1 as crossProduct,
    directionFromAngles$1 as directionFromAngles,
    directionTowards$1 as directionTowards,
    divide$1 as divide,
    dotProduct$1 as dotProduct,
    down$1 as down,
    facingDirectionOf$1 as facingDirectionOf,
    flagPosition$1 as flagPosition,
    forward$1 as forward,
    left$1 as left,
    nearestWalkablePosition$1 as nearestWalkablePosition,
    normalize$1 as normalize,
    objectivePosition$1 as objectivePosition,
    payloadPosition$1 as payloadPosition,
    positionOf$1 as positionOf,
    rayCastHitNormal$1 as rayCastHitNormal,
    rayCastHitPlayer$1 as rayCastHitPlayer,
    rayCastHitPosition$1 as rayCastHitPosition,
    right$1 as right,
    subtract$1 as subtract,
    throttleOf$1 as throttleOf,
    totalTimeElapsed$1 as totalTimeElapsed,
    up$1 as up,
    velocityOf$1 as velocityOf,
    xComponentOf$1 as xComponentOf,
    yComponentOf$1 as yComponentOf,
    zComponentOf$1 as zComponentOf
  };
}



declare namespace add_d$1 {
  export {
    number$1 as number,
    add$1 as add,
    angleDifference$1 as angleDifference,
    angleBetweenVectors$1 as angleBetweenVectors,
    altitudeOf$1 as altitudeOf,
    countOf$1 as countOf,
    arccosineInDegrees$1 as arccosineInDegrees,
    arccosineInRadians$1 as arccosineInRadians,
    arcsineInDegrees$1 as arcsineInDegrees,
    arcsineInRadians$1 as arcsineInRadians,
    arctangentInDegrees$1 as arctangentInDegrees,
    arctangentInRadians$1 as arctangentInRadians,
    cosineFromDegrees$1 as cosineFromDegrees,
    cosineFromRadians$1 as cosineFromRadians,
    controlModeScoringPercentage$1 as controlModeScoringPercentage,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    distanceBetween$1 as distanceBetween,
    divide$1 as divide,
    eventDamage$1 as eventDamage,
    eyePosition$1 as eyePosition,
    health$1 as health,
    horizontalAngleFromDirection$1 as horizontalAngleFromDirection,
    horizontalAngleTowards$1 as horizontalAngleTowards,
    horizontalFacingAngleOf$1 as horizontalFacingAngleOf,
    horizontalSpeedOf$1 as horizontalSpeedOf,
    indexOfArrayValue$1 as indexOfArrayValue,
    lastDamageModificationId$1 as lastDamageModificationId,
    lastDamageOverTimeId$1 as lastDamageOverTimeId,
    lastHealOverTimeId$1 as lastHealOverTimeId,
    lastTextId$1 as lastTextId,
    matchRound$1 as matchRound,
    max$1 as max,
    maxHealth$1 as maxHealth,
    min$1 as min,
    modulo$1 as modulo,
    normalizedHealth$1 as normalizedHealth,
    numberOfDeadPlayers$1 as numberOfDeadPlayers,
    numberOfDeaths$1 as numberOfDeaths,
    numberOfEliminations$1 as numberOfEliminations,
    numberOfFinalBlows$1 as numberOfFinalBlows,
    numberOfHeroes$1 as numberOfHeroes,
    numberOfLivingPlayers$1 as numberOfLivingPlayers,
    numberOfPlayers$1 as numberOfPlayers,
    numberOfPlayersOnObjective$1 as numberOfPlayersOnObjective,
    objectiveIndex$1 as objectiveIndex,
    payloadProgressPercentage$1 as payloadProgressPercentage,
    pointCapturePercentage$1 as pointCapturePercentage,
    raiseToPower$1 as raiseToPower,
    randomInteger$1 as randomInteger,
    randomReal$1 as randomReal,
    roundToInteger$1 as roundToInteger,
    scoreOf$1 as scoreOf,
    sineFromDegrees$1 as sineFromDegrees,
    sineFromRadians$1 as sineFromRadians,
    slotOf$1 as slotOf,
    speedOf$1 as speedOf,
    speedOfInDirection$1 as speedOfInDirection,
    squareRoot$1 as squareRoot,
    subtract$1 as subtract,
    tangentFromDegrees$1 as tangentFromDegrees,
    tangentFromRadians$1 as tangentFromRadians,
    teamScore$1 as teamScore,
    ultimateChargePercent$1 as ultimateChargePercent,
    verticalAngleFromDirection$1 as verticalAngleFromDirection,
    verticalAngleTowards$1 as verticalAngleTowards,
    verticalFacingAngleOf$1 as verticalFacingAngleOf,
    verticalSpeedOf$1 as verticalSpeedOf,
    serverLoad$1 as serverLoad,
    serverLoadAverage$1 as serverLoadAverage,
    serverLoadPeak$1 as serverLoadPeak,
    vector$1 as vector,
    localVectorOf$1 as localVectorOf,
    worldVectorOf$1 as worldVectorOf,
    vectorTowards$1 as vectorTowards,
    backward$1 as backward,
    crossProduct$1 as crossProduct,
    directionFromAngles$1 as directionFromAngles,
    directionTowards$1 as directionTowards,
    dotProduct$1 as dotProduct,
    down$1 as down,
    facingDirectionOf$1 as facingDirectionOf,
    flagPosition$1 as flagPosition,
    forward$1 as forward,
    left$1 as left,
    nearestWalkablePosition$1 as nearestWalkablePosition,
    normalize$1 as normalize,
    objectivePosition$1 as objectivePosition,
    payloadPosition$1 as payloadPosition,
    positionOf$1 as positionOf,
    rayCastHitNormal$1 as rayCastHitNormal,
    rayCastHitPlayer$1 as rayCastHitPlayer,
    rayCastHitPosition$1 as rayCastHitPosition,
    right$1 as right,
    throttleOf$1 as throttleOf,
    totalTimeElapsed$1 as totalTimeElapsed,
    up$1 as up,
    velocityOf$1 as velocityOf,
    xComponentOf$1 as xComponentOf,
    yComponentOf$1 as yComponentOf,
    zComponentOf$1 as zComponentOf
  };
}

/**
 * An array containing all dead players on
 * a team in a match. A player is defined as
 * being dead when they are eliminated but
 * have not yet respawned back into the game.
 */
declare const allDeadPlayers$1: (
/**
 * Team - You can specify any Team Syntax to
 * define the array.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * An array of all heroes in Overwatch. Not
 * to be confused with the All Players array
 */
declare const allHeroes$1: (


) => any[];

/**
 * An array containing all living players on
 * a team in a match. A player is defined as
 * being alive when they are spawned into the
 * game but have not yet been eliminated since spawning.
 */
declare const allLivingPlayers$1: (
/**
 * Team - You can specify any Team Syntax to
 * define the array.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * An array containing all players on a team in a match.
 */
declare const allPlayers$1: (
/**
 * Team - You can specify any Team Syntax to
 * define the array.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * An array containing all players occupying
 * neither a payload nor a control point (either
 * on a team or in a match).
 */
declare const allPlayersNotOnObjective$1: (
/**
 * Team - You can specify any Team Syntax to
 * define the array.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * An array containing all players occupying
 * either a payload or a control point (either
 * on a team or in a match).
 */
declare const allPlayersOnObjective$1: (
/**
 * Team - You can specify any Team Syntax to
 * define the array.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * The array of heroes from which the specified
 * player is currently allowed to select.
 */
declare const allowedHeroes$1: (
/**
 * Player - You can specify any Player Syntax
 * to define the array.
 * - `Type.Player.`
 */
player: string | number | any[]
) => any[];

/**
 * A copy of the specified array containing
 * only values from a specified index range.
 */
declare const arraySlice$1: (
/**
 * Array - You must specify the Array Syntax
 * you are comparing the value to.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * Start Index - The first index of the range.
 * Can use most Value Syntax to specify with.
 * - `Type.Number.`
 */
index: string | number | any[],
/**
 * Count - The number of elements in the resulting
 * array. The resulting array will contain
 * fewer elements if the specified range exceeds
 * the bounds of the array. Can use any Number-based
 * Value Syntax to specify with.
 * - `Type.Number.`
 */
count: string | number | any[]
) => any[];

/**
 * An array with no elements.
 */
declare const emptyArray$1: (


) => any[];

/**
 * A copy of the specified array with any values
 * that do not match the specified condition removed.
 */
declare const filteredArray$1: (
/**
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * - `Type.Bool.`
 */
condition: string | number | any[]
) => any[];

/**
 * The player or array of players who occupy
 * a specific slot in the game.
 */
declare const playersInSlot$1: (
/**
 * Slot - The slot number from each to acquire
 * a player or players. In team games, each
 * team has slots 0 through 5. In free-for-all
 * games, slots are numbered 0 through 11.
 * Can use most Number based Value Syntax to
 * provide this value.
 * - `Type.Number.`
 */
slot: string | number | any[],
/**
 * Team - The team or teams from which to acquire
 * a player or players. Can use most Team based
 * Value Syntax to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * The players who are within a specific view
 * angle of a specific player’s reticle, optionally
 * restricted by team.
 */
declare const playersInViewAngle$1: (
/**
 * Player - The player whose view to use for
 * the check. Can use most Player based Value
 * Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * View Angle - The view angle to compare against
 * in degrees. Can use most Angle based Value
 * Syntax to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * Team - The team or teams on which to consider
 * players. Can use most Team based Value Syntax
 * to provide this value.
 * - `Type.Number.`
 */
viewAngle: string | number | any[]
) => any[];

/**
 * The array of players playing a specific
 * hero on a team or in the match.
 */
declare const playersOnHero$1: (
/**
 * Hero - The hero to check for play. Can use
 * most Hero based Value Syntax to provide this value.
 * - `Type.Hero.`
 */
hero: string | number | any[],
/**
 * Team - The team or teams on which to check
 * for the hero being played. Can use most
 * Team based Value Syntax to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => any[];

/**
 * An array containing all players within a
 * certain distance of a position, optionally
 * restricted by team and line of sight.
 */
declare const playersWithinRadius$1: (
/**
 * Center - The center position from which
 * to measure distance. Can use most Vector
 * based Value Syntax to provide this value.
 * - `Type.Vector.`
 */
center: string | number | any[],
/**
 * Radius - The radius in meters inside which
 * players must be in order to be included
 * in the resulting array. Can use most Number
 * based Value Syntax to provide this value.
 * - `Type.Number.`
 */
radius: string | number | any[],
/**
 * Team - The team or teams to which a player
 * must belong to be included in the resulting
 * array. Can use most Team based Value Syntax
 * to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * LOS Check - Specifies whether and how a
 * player must pass a line-of-sight check to
 * be included in the resulting array. You
 * can choose from Off, Surfaces, Surfaces
 * and Enemy Barriers, and Surfaces and All
 * Barriers. Off will result in the line of
 * sight is never blocked, allowing results
 * through walls. Surfaces will result in line
 * of sight is blocked by ceilings, walls,
 * floors, platforms, and any fixed object
 * that blocks projectiles. Surfaces and Enemy
 * Barriers will result in line of sight is
 * blocked by ceilings, walls, floors, platforms,
 * any fixed object that blocks projectiles,
 * and barriers created by the enemy team.
 * Surfaces and All Barriers will result in
 * line of sight is blocked by ceilings, walls,
 * floors, platforms, any fixed object that
 * blocks projectiles, and all barriers.
 * - `Type.LosCheck.`
 */
losCheck: string | number | any[]
) => any[];

/**
 * A copy of the specified array with the values
 * in a random order
 */
declare const randomizedArray$1: (
/**
 * Array - The array whose copy will be randomized.
 * Can use most Array based Value Syntax to
 * provide this value.
 * - `Type.Array.`
 */
array: string | number | any[]
) => any[];

/**
 * A copy of an array with one or more values
 * removed (if found).
 */
declare const removeFromArray$1: (
/**
 * Array - The array from which to remove values.
 * Can use most Array based Value Syntax to
 * provide this value.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * Value - The value to remove from the array
 * (if found), if this value itself an array,
 * each matching element is removed. Can use
 * most Array based or Number based Value Syntax
 * to provide this value.
 * - `Type.Value.`
 */
value: string | number | any[]
) => any[];

/**
 * A copy of the specified array with the values
 * sorted according to the value rank that
 * is evaluated for each element.
 */
declare const sortedArray$1: (
/**
 * Array - The array whose copy will be sorted.
 * Can use most Array based Value Syntax to
 * provide this value.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * Value Rank - The value that is evaluated
 * for each element of the copied array. The
 * array is sorted by this rank in ascending
 * order. Use the current array element value
 * to reference the element of the array currently
 * being considered. Can use most Number based
 * Value Syntax to provide this value.
 * - `Type.Value.`
 */
valueRank: string | number | any[]
) => any[];



declare namespace array_d$1 {
  export {
    allDeadPlayers$1 as allDeadPlayers,
    allHeroes$1 as allHeroes,
    allLivingPlayers$1 as allLivingPlayers,
    allPlayers$1 as allPlayers,
    allPlayersNotOnObjective$1 as allPlayersNotOnObjective,
    allPlayersOnObjective$1 as allPlayersOnObjective,
    allowedHeroes$1 as allowedHeroes,
    arraySlice$1 as arraySlice,
    emptyArray$1 as emptyArray,
    filteredArray$1 as filteredArray,
    playersInSlot$1 as playersInSlot,
    playersInViewAngle$1 as playersInViewAngle,
    playersOnHero$1 as playersOnHero,
    playersWithinRadius$1 as playersWithinRadius,
    randomizedArray$1 as randomizedArray,
    removeFromArray$1 as removeFromArray,
    sortedArray$1 as sortedArray,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable
  };
}

/**
 * The absence of a player, used when no player
 * is desired for a particular input, equivalent
 * to the real number 0 for the purposes of
 * comparison and debugging.
 */
declare const Null$1: (


) => string;

/**
 * The player executing the rule, as specified
 * by the event, may be the same as the attacker or victim.
 */
declare const eventPlayer$1: (


) => string;

/**
 * The player that received damage for the
 * event currently being processed by this
 * rule. May be the same as the attacker or
 * the event player.
 */
declare const victim$1: (


) => string;

/**
 * The player that dealt damage for the event
 * currently being processed by this rule.
 * May be the same as the victim or the event player.
 */
declare const attacker$1: (


) => string;

/**
 * The player closest to a position, optionally
 * restricted by team.
 */
declare const closestPlayerTo$1: (
/**
 * Center - The position to which to measure
 * proximity. Can use most Value Syntax related
 * to reporting a position in the map.
 * - `Type.Vector.`
 */
center: string | number | any[],
/**
 * Team - You can specify any Team Syntax to
 * restrict which players is reported when
 * defining this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * The player farthest to a position, optionally
 * restricted by team.
 */
declare const farthestPlayerFrom$1: (
/**
 * Center - The position to which to measure
 * proximity. Can use most Value Syntax related
 * to reporting a position in the map.
 * - `Type.Vector.`
 */
center: string | number | any[],
/**
 * Team - You can specify any Team Syntax to
 * restrict which players is reported when
 * defining this value.
 * - `Type.Player.`
 */
team: string | number | any[]
) => string;

/**
 * The player carrying a particular team’s
 * flag in capture the flag. Results in null
 * if no player is carrying the flag.
 */
declare const playerCarryingFlag$1: (
/**
 * Team - The team whose whose flag to check.
 * Can use most Team based Value Syntax to
 * provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * The player closest to the reticle of the
 * specified player, optionally restricted by team.
 */
declare const playerClosestToReticle$1: (
/**
 * Player - The player from whose reticle to
 * search for the closest player. Can use most
 * Player based Value Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Team - The team or teams on which to search
 * for the closest player. Can use most Team
 * based Value Syntax to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;



declare namespace player_d$1 {
  export {
    eventPlayer$1 as eventPlayer,
    victim$1 as victim,
    attacker$1 as attacker,
    closestPlayerTo$1 as closestPlayerTo,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    farthestPlayerFrom$1 as farthestPlayerFrom,
    playerCarryingFlag$1 as playerCarryingFlag,
    playerClosestToReticle$1 as playerClosestToReticle
  };
}



declare namespace assisterParam_d$1 {
  export {
    Null$1 as Null,
    eventPlayer$1 as eventPlayer,
    victim$1 as victim,
    attacker$1 as attacker,
    closestPlayerTo$1 as closestPlayerTo,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    farthestPlayerFrom$1 as farthestPlayerFrom,
    playerCarryingFlag$1 as playerCarryingFlag,
    playerClosestToReticle$1 as playerClosestToReticle
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$I: (str: ValueBarrierType) => ValueBarrierType;

declare namespace barrier_d$1 {
  export {
    Default$I as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$J: (str: ValueBeamType) => ValueBeamType;

declare namespace beam_d$1 {
  export {
    Default$J as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$K: (str: ValueBeamReevaluationType) => ValueBeamReevaluationType;

declare namespace beamReevaluation_d$1 {
  export {
    Default$K as Default
  };
}

/**
 * The Boolean value of false.
 */
declare const False$1: (


) => string;

/**
 * The Boolean value of true.
 */
declare const True$1: (


) => string;

/**
 * Whether the input is false (or the equivalent to false)
 */
declare const not$1: (
/**
 * Value - When this input is false (or equivalent
 * to false), then the not value is true. Otherwise,
 * the not value is false. Can use most Boolean-based
 * Value Syntax to provide this value.
 * - `Type.Bool.`
 */
value: string | number | any[]
) => string;

/**
 * Whether either of the two inputs are true
 * (or equivalent to true).
 */
declare const or$1: (
/**
 * Value - One of the two inputs considered.
 * If either one is true (or equivalent to
 * true), then the OR value is true. Can use
 * most Boolean based Value Syntax to provide this value.
 * - `Type.Value.`
 */
value1: string | number | any[],
/**
 * Value - One of the two inputs considered.
 * If either one is true (or equivalent to
 * true), then the OR value is true. Can use
 * most Boolean based Value Syntax to provide this value.
 * - `Type.Value.`
 */
value2: string | number | any[]
) => string;

/**
 * Whether both of the two inputs are true
 * or equivalent to true.
 */
declare const and$1: (
/**
 * Value - You can specify any Value Syntax
 * to define both of the required values.
 * - `Type.Value.`
 */
value1: string | number | any[],
/**
 * Value - One of the two inputs considered.
 * if both are true (or equivalent to true),
 * then the and value is true.
 * - `Type.Value.`
 */
value2: string | number | any[]
) => string;

/**
 * Whether the specified array contains the
 * specified value.
 */
declare const arrayContains$1: (
/**
 * Array - The array in which to search for
 * the specified value. Can use most Array
 * based Value Syntax to retrieve this value.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * Value - The value for which to search. Can
 * use most Number based Value Syntax to retrive this value.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * Whether the comparison of the two inputs is true.
 */
declare const compare$1: (
/**
 * Value - The left hand side of the comparison.
 * This may be any value type if the operation
 * is == or =!, otherwise real numbers are
 * expected. Can use most Value Syntax for the comparison.
 * - `Type.Value.`
 */
value1: string | number | any[],
/**
 * - `Type.Operator.`
 */
operator: string | number | any[],
/**
 * Condition - One of the standard conditions
 * to use for comparison. See the Condition
 * section for details.
 * - `Type.Value.`
 */
value2: string | number | any[]
) => string;

/**
 * Whether the specified player, icon entity,
 * or effect entity still exists. Useful for
 * determining if a player has left the match
 * or an entity has been destroyed.
 */
declare const entityExists$1: (
/**
 * Entity - The player, icon entity, or effect
 * entity whose existance to check.
 * - `Type.Entity.`
 */
entity: string | number | any[]
) => string;

/**
 * Whether the damage was a critical hit (such
 * as a headshot) for the event currently being
 * processed by this rule.
 */
declare const eventWasCriticalHit$1: (


) => string;

/**
 * Whether an entity has spawned in the world.
 * Results in false for players who have not
 * chosen a hero yet.
 */
declare const hasSpawned$1: (
/**
 * - `Type.Entity.`
 */
entity: string | number | any[]
) => string;

/**
 * Whether the specified player has the specified
 * status, either from the set status action
 * or from a non-scripted game mechanic.
 */
declare const hasStatus$1: (
/**
 * Player - The player whose status to check.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Status - The status to check for. Values
 * include Hacked, Burning, Knocked Down, Asleep,
 * Frozen, Unkillable, Invincible, Phased Out,
 * Rooted, or Stunned.
 * - `Type.Status.`
 */
status: string | number | any[]
) => string;

/**
 * Determines whether a player is alive. Returns
 * a Boolean value.
 */
declare const isAlive$1: (
/**
 * Player - The player whose life to check.
 * Can use most player based Value Syntax to
 * retrive this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether the match is currently in its assemble heroes phase.
 */
declare const isAssemblingHeroes$1: (


) => string;

/**
 * Whether the match is between rounds.
 */
declare const isBetweenRounds$1: (


) => string;

/**
 * Whether a player is holding a specific button.
 */
declare const isButtonHeld$1: (
/**
 * Player - The player whose button to check.
 * Can use most player based Value Syntax to
 * retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Button - The button to check. Designed by
 * any action inputs by ability but not directional
 * inputs. (i.e. Primary Fire, Secondary Fire,
 * Ultimate Ability, Jump, Crouch, etc.)
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * Whether a player is using a specific communication
 * type (such as emote, using a voice line, etc.).
 */
declare const isCommunicating$1: (
/**
 * Player - The player whose communication
 * status to check. Can use most player based
 * Value Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Type - The type of communication to consider.
 * The duration of emotes is exact, the duration
 * of voice lines is assumed to be 4 seconds,
 * and all other durations are assumed to be
 * 2 seconds. Any of the four emote slots,
 * four voice lines slots, or any standard
 * communication (Need healing, Ultimate Status,
 * etc.) can be designated.
 * - `Type.Communication.`
 */
type: string | number | any[]
) => string;

/**
 * Whether a player is using any communication
 * type (such as emoting, using a voice line, etc.)
 */
declare const isCommunicatingAny$1: (
/**
 * Player - The player whose communication
 * status to check. Can use most player based
 * Value Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether a player is using a emote.
 */
declare const isCommunicatingAnyEmote$1: (
/**
 * Player - The player whose emoting status
 * to check. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether a player is using a voice line.
 * (The duration of a voice line is assumed
 * to be 4 seconds.)
 */
declare const isCommunicatingAnyVoiceLine$1: (
/**
 * Player - The player whose voice line status
 * to check. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether the point is locked in control mode.
 */
declare const isControlModePointLocked$1: (


) => string;

/**
 * Whether a player is crouching.
 */
declare const isCrouching$1: (
/**
 * Player - The player whose crouching status
 * to check. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether the current game of capture the
 * flag is in sudden death.
 */
declare const isCTFModeInSuddenDeath$1: (


) => string;

/**
 * Whether a player is dead.
 */
declare const isDead$1: (
/**
 * Player - The player whose death to check.
 * Can use most player based Value Syntax to
 * retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether the specified player’s primary weapon
 * attack is being used.
 */
declare const isFiringPrimary$1: (
/**
 * Player - The player whose primary weapon
 * attack to check. Can use most player based
 * Value Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether the specified player’s secondary
 * weapon attack is being used.
 */
declare const isFiringSecondary$1: (
/**
 * Player - The player whose secondary weapon
 * attack to check. Can use most player based
 * Value Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether a specific team’s flag is at its
 * base in capture the flag.
 */
declare const isFlagAtBase$1: (
/**
 * Team - The team whose whose flag to check.
 * Can use most Team based Value Syntax to
 * provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * Whether a specific team's flag is being
 * is being carried by a member of the opposing
 * team in capture the flag.
 */
declare const isFlagBeingCarried$1: (
/**
 * Team - The team whose whose flag to check.
 * Can use most Team based Value Syntax to
 * provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * Whether the main phase of the match is in
 * progress (during which time combat and scoring are allowed).
 */
declare const isGameInProgress$1: (


) => string;

/**
 * Whether a specific hero is being played
 * (either on a team or in the match).
 */
declare const isHeroBeingPlayed$1: (
/**
 * Hero - The hero to check for play. Can use
 * most Hero based Value Syntax to provide this value.
 * - `Type.Hero.`
 */
hero: string | number | any[],
/**
 * Team - The team or teams on which to check
 * for the hero being played. Can use most
 * Team based Value Syntax to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * Whether a player is airborne.
 */
declare const isInAir$1: (
/**
 * Player - The player whose airborne status
 * to check. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether two positions have line of sight
 * with each other.
 */
declare const isInLineOfSight$1: (
/**
 * Start Pos - The start position for the line
 * of sight check. Most positional based Value
 * Syntax can be used here.
 * - `Type.Vector.`
 */
startPos: string | number | any[],
/**
 * End Pos - The end position for the line
 * of sight check. Most positional based Value
 * Syntax can be used here.
 * - `Type.Vector.`
 */
endPos: string | number | any[],
/**
 * Barriers - Defines how barriers affect line
 * of sight, when considering whether a barrier
 * belongs to an enemy, the allegiance of the
 * player provided to start pos (if any) is
 * used. Can be set to “Barriers do not block
 * LOS”, Enemy barriers block LOS", and “All
 * barriers block LOS”.
 * - `Type.Barrier.`
 */
barriers: string | number | any[]
) => string;

/**
 * Whether the match is currently in its setup phase.
 */
declare const isInSetup$1: (


) => string;

/**
 * Whether a specific player is in the spawn
 * room (and is thus being healed and able
 * to change heroes).
 */
declare const isInSpawnRoom$1: (
/**
 * Player - The player whose spawn room status
 * to check. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether a location is within view of a player.
 */
declare const isInViewAngle$1: (
/**
 * Player - The player whose view to use for
 * the check. Can use most Player based Value
 * Syntax to provide this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Location - The location to test if it’s
 * within view. Most positional based Value
 * Syntax can be used here.
 * - `Type.Vector.`
 */
location: string | number | any[],
/**
 * Team - The team or teams on which to consider
 * players. Can use most Team based Value Syntax
 * to provide this value.
 * - `Type.Number.`
 */
viewAngle: string | number | any[]
) => string;

/**
 * Whether the match has finished.
 */
declare const isMatchComplete$1: (


) => string;

/**
 * Whether a specific player is moving (as
 * defined by having a non-zero constant speed).
 */
declare const isMoving$1: (
/**
 * Player - The player whose moving status
 * status to check. Can use most player based
 * Value Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether the specified objective has been
 * completed Results in false if the game mode
 * is not assault, escort, or assault/escort (hybrid).
 */
declare const isObjectiveComplete$1: (
/**
 * Number - The index of the objective to consider,
 * starting at 0 and counting up. Each control
 * point, payload checkpoint, and payload destination
 * has its own index. Can use most number based
 * Value Syntax to retrieve this value. Value
 * must be in the form of an integer (whole number).
 * - `Type.Number.`
 */
number: string | number | any[]
) => string;

/**
 * Whether a player is on the ground (or other
 * walkable surface).
 */
declare const isOnGround$1: (
/**
 * Player - The player whose ground status
 * to check. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether a specific player is currently occupying
 * a payload or capture point.
 */
declare const isOnObjective$1: (
/**
 * Player - The player whose objective status
 * to check. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether a player is on a wall (climbing or riding).
 */
declare const isOnWall$1: (
/**
 * Player - The player whose wall status to
 * check. Can use most player based Value Syntax
 * to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether a specific player’s portrait is on fire.
 */
declare const isPortraitOnFire$1: (
/**
 * Player - The player whose portrait to check.
 * Can use most player based Value Syntax to
 * retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether a player is standing (defined as
 * both not moving and not in the air).
 */
declare const isStanding$1: (
/**
 * Player - The player whose standing status
 * to check. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether the specified team is currently
 * on defense in a standard match.
 */
declare const isTeamOnDefense$1: (
/**
 * Team - The team whose role to check. Can
 * use most Team Based Value Syntax to retrieve this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * Whether the specified team is currently
 * on offense in a standard match.
 */
declare const isTeamOnOffense$1: (
/**
 * Team - The team whose role to check. Can
 * use most Team Based Value Syntax to retrieve this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * Whether the specified condition evaluates
 * to true for every value in the specified array.
 */
declare const isTrueForAll$1: (
/**
 * Array - The array whose values will be considered.
 * Can use most Array Based Value Syntax to
 * retrieve this value.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * Condition - The condition that is evaluated
 * for each element of the specified array,
 * Use the current array element value to reference
 * the element of the array currently being
 * considered. Can use most Comparative based
 * Value Syntax to retrieve this value.
 * - `Type.Bool.`
 */
condition: string | number | any[]
) => string;

/**
 * Whether the specified condition evaluates
 * to true for any value in the specified array.
 */
declare const isTrueForAny$1: (
/**
 * Array - The array whose values will be considered.
 * Can use most Array Based Value Syntax to
 * retrieve this value.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * Condition - The condition that is evaluated
 * for each element of the specified array,
 * Use the current array element value to reference
 * the element of the array currently being
 * considered. Can use most Comparative based
 * Value Syntax to retrieve this value.
 * - `Type.Bool.`
 */
condition: string | number | any[]
) => string;

/**
 * Whether the specified player is using ability 1.
 */
declare const isUsingAbility1$1: (
/**
 * Player - The player whose ability 1 usage
 * to check. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether the specified player is using ability 2.
 */
declare const isUsingAbility2$1: (
/**
 * Player - The player whose ability 2 usage
 * to check. Can use most player based Value
 * Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether the specified player is using an
 * ultimate ability.
 */
declare const isUsingUltimate$1: (
/**
 * Player - The player whose ultimate ability
 * usage to check. Can use most player based
 * Value Syntax to retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Whether the match is waiting for players
 * to join before starting.
 */
declare const isWaitingForPlayers$1: (


) => string;



declare namespace bool_d$1 {
  export {
    False$1 as False,
    True$1 as True,
    not$1 as not,
    or$1 as or,
    and$1 as and,
    arrayContains$1 as arrayContains,
    compare$1 as compare,
    entityExists$1 as entityExists,
    eventWasCriticalHit$1 as eventWasCriticalHit,
    hasSpawned$1 as hasSpawned,
    hasStatus$1 as hasStatus,
    isAlive$1 as isAlive,
    isAssemblingHeroes$1 as isAssemblingHeroes,
    isBetweenRounds$1 as isBetweenRounds,
    isButtonHeld$1 as isButtonHeld,
    isCommunicating$1 as isCommunicating,
    isCommunicatingAny$1 as isCommunicatingAny,
    isCommunicatingAnyEmote$1 as isCommunicatingAnyEmote,
    isCommunicatingAnyVoiceLine$1 as isCommunicatingAnyVoiceLine,
    isControlModePointLocked$1 as isControlModePointLocked,
    isCrouching$1 as isCrouching,
    isCTFModeInSuddenDeath$1 as isCTFModeInSuddenDeath,
    isDead$1 as isDead,
    isFiringPrimary$1 as isFiringPrimary,
    isFiringSecondary$1 as isFiringSecondary,
    isFlagAtBase$1 as isFlagAtBase,
    isFlagBeingCarried$1 as isFlagBeingCarried,
    isGameInProgress$1 as isGameInProgress,
    isHeroBeingPlayed$1 as isHeroBeingPlayed,
    isInAir$1 as isInAir,
    isInLineOfSight$1 as isInLineOfSight,
    isInSetup$1 as isInSetup,
    isInSpawnRoom$1 as isInSpawnRoom,
    isInViewAngle$1 as isInViewAngle,
    isMatchComplete$1 as isMatchComplete,
    isMoving$1 as isMoving,
    isObjectiveComplete$1 as isObjectiveComplete,
    isOnGround$1 as isOnGround,
    isOnObjective$1 as isOnObjective,
    isOnWall$1 as isOnWall,
    isPortraitOnFire$1 as isPortraitOnFire,
    isStanding$1 as isStanding,
    isTeamOnDefense$1 as isTeamOnDefense,
    isTeamOnOffense$1 as isTeamOnOffense,
    isTrueForAll$1 as isTrueForAll,
    isTrueForAny$1 as isTrueForAny,
    isUsingAbility1$1 as isUsingAbility1,
    isUsingAbility2$1 as isUsingAbility2,
    isUsingUltimate$1 as isUsingUltimate,
    isWaitingForPlayers$1 as isWaitingForPlayers
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$L: (str: ValueButtonType) => ValueButtonType;

declare namespace button_d$1 {
  export {
    Default$L as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$M: (str: ValueClippingType) => ValueClippingType;

declare namespace clipping_d$1 {
  export {
    Default$M as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$N: (str: ValueColorType) => ValueColorType;

declare namespace color_d$1 {
  export {
    Default$N as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$O: (str: ValueCommunicationType) => ValueCommunicationType;

declare namespace communication_d$1 {
  export {
    Default$O as Default
  };
}



declare namespace damageModificationId_d$1 {
  export {
    lastDamageModificationId$1 as lastDamageModificationId,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$P: (str: ValueDamageModificationReevaluationType) => ValueDamageModificationReevaluationType;

declare namespace damageModificationReevaluation_d$1 {
  export {
    Default$P as Default
  };
}



declare namespace damageOverTimeId_d$1 {
  export {
    lastDamageOverTimeId$1 as lastDamageOverTimeId,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable
  };
}



declare namespace destinationParam_d$1 {
  export {
    number$1 as number,
    add$1 as add,
    angleDifference$1 as angleDifference,
    angleBetweenVectors$1 as angleBetweenVectors,
    altitudeOf$1 as altitudeOf,
    countOf$1 as countOf,
    arccosineInDegrees$1 as arccosineInDegrees,
    arccosineInRadians$1 as arccosineInRadians,
    arcsineInDegrees$1 as arcsineInDegrees,
    arcsineInRadians$1 as arcsineInRadians,
    arctangentInDegrees$1 as arctangentInDegrees,
    arctangentInRadians$1 as arctangentInRadians,
    cosineFromDegrees$1 as cosineFromDegrees,
    cosineFromRadians$1 as cosineFromRadians,
    controlModeScoringPercentage$1 as controlModeScoringPercentage,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    distanceBetween$1 as distanceBetween,
    divide$1 as divide,
    eventDamage$1 as eventDamage,
    eyePosition$1 as eyePosition,
    health$1 as health,
    horizontalAngleFromDirection$1 as horizontalAngleFromDirection,
    horizontalAngleTowards$1 as horizontalAngleTowards,
    horizontalFacingAngleOf$1 as horizontalFacingAngleOf,
    horizontalSpeedOf$1 as horizontalSpeedOf,
    indexOfArrayValue$1 as indexOfArrayValue,
    lastDamageModificationId$1 as lastDamageModificationId,
    lastDamageOverTimeId$1 as lastDamageOverTimeId,
    lastHealOverTimeId$1 as lastHealOverTimeId,
    lastTextId$1 as lastTextId,
    matchRound$1 as matchRound,
    max$1 as max,
    maxHealth$1 as maxHealth,
    min$1 as min,
    modulo$1 as modulo,
    normalizedHealth$1 as normalizedHealth,
    numberOfDeadPlayers$1 as numberOfDeadPlayers,
    numberOfDeaths$1 as numberOfDeaths,
    numberOfEliminations$1 as numberOfEliminations,
    numberOfFinalBlows$1 as numberOfFinalBlows,
    numberOfHeroes$1 as numberOfHeroes,
    numberOfLivingPlayers$1 as numberOfLivingPlayers,
    numberOfPlayers$1 as numberOfPlayers,
    numberOfPlayersOnObjective$1 as numberOfPlayersOnObjective,
    objectiveIndex$1 as objectiveIndex,
    payloadProgressPercentage$1 as payloadProgressPercentage,
    pointCapturePercentage$1 as pointCapturePercentage,
    raiseToPower$1 as raiseToPower,
    randomInteger$1 as randomInteger,
    randomReal$1 as randomReal,
    roundToInteger$1 as roundToInteger,
    scoreOf$1 as scoreOf,
    sineFromDegrees$1 as sineFromDegrees,
    sineFromRadians$1 as sineFromRadians,
    slotOf$1 as slotOf,
    speedOf$1 as speedOf,
    speedOfInDirection$1 as speedOfInDirection,
    squareRoot$1 as squareRoot,
    subtract$1 as subtract,
    tangentFromDegrees$1 as tangentFromDegrees,
    tangentFromRadians$1 as tangentFromRadians,
    teamScore$1 as teamScore,
    ultimateChargePercent$1 as ultimateChargePercent,
    verticalAngleFromDirection$1 as verticalAngleFromDirection,
    verticalAngleTowards$1 as verticalAngleTowards,
    verticalFacingAngleOf$1 as verticalFacingAngleOf,
    verticalSpeedOf$1 as verticalSpeedOf,
    serverLoad$1 as serverLoad,
    serverLoadAverage$1 as serverLoadAverage,
    serverLoadPeak$1 as serverLoadPeak,
    vector$1 as vector,
    localVectorOf$1 as localVectorOf,
    worldVectorOf$1 as worldVectorOf,
    vectorTowards$1 as vectorTowards,
    backward$1 as backward,
    crossProduct$1 as crossProduct,
    directionFromAngles$1 as directionFromAngles,
    directionTowards$1 as directionTowards,
    dotProduct$1 as dotProduct,
    down$1 as down,
    facingDirectionOf$1 as facingDirectionOf,
    flagPosition$1 as flagPosition,
    forward$1 as forward,
    left$1 as left,
    nearestWalkablePosition$1 as nearestWalkablePosition,
    normalize$1 as normalize,
    objectivePosition$1 as objectivePosition,
    payloadPosition$1 as payloadPosition,
    positionOf$1 as positionOf,
    rayCastHitNormal$1 as rayCastHitNormal,
    rayCastHitPlayer$1 as rayCastHitPlayer,
    rayCastHitPosition$1 as rayCastHitPosition,
    right$1 as right,
    throttleOf$1 as throttleOf,
    totalTimeElapsed$1 as totalTimeElapsed,
    up$1 as up,
    velocityOf$1 as velocityOf,
    xComponentOf$1 as xComponentOf,
    yComponentOf$1 as yComponentOf,
    zComponentOf$1 as zComponentOf
  };
}



declare namespace divide_d$1 {
  export {
    number$1 as number,
    add$1 as add,
    angleDifference$1 as angleDifference,
    angleBetweenVectors$1 as angleBetweenVectors,
    altitudeOf$1 as altitudeOf,
    countOf$1 as countOf,
    arccosineInDegrees$1 as arccosineInDegrees,
    arccosineInRadians$1 as arccosineInRadians,
    arcsineInDegrees$1 as arcsineInDegrees,
    arcsineInRadians$1 as arcsineInRadians,
    arctangentInDegrees$1 as arctangentInDegrees,
    arctangentInRadians$1 as arctangentInRadians,
    cosineFromDegrees$1 as cosineFromDegrees,
    cosineFromRadians$1 as cosineFromRadians,
    controlModeScoringPercentage$1 as controlModeScoringPercentage,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    distanceBetween$1 as distanceBetween,
    divide$1 as divide,
    eventDamage$1 as eventDamage,
    eyePosition$1 as eyePosition,
    health$1 as health,
    horizontalAngleFromDirection$1 as horizontalAngleFromDirection,
    horizontalAngleTowards$1 as horizontalAngleTowards,
    horizontalFacingAngleOf$1 as horizontalFacingAngleOf,
    horizontalSpeedOf$1 as horizontalSpeedOf,
    indexOfArrayValue$1 as indexOfArrayValue,
    lastDamageModificationId$1 as lastDamageModificationId,
    lastDamageOverTimeId$1 as lastDamageOverTimeId,
    lastHealOverTimeId$1 as lastHealOverTimeId,
    lastTextId$1 as lastTextId,
    matchRound$1 as matchRound,
    max$1 as max,
    maxHealth$1 as maxHealth,
    min$1 as min,
    modulo$1 as modulo,
    normalizedHealth$1 as normalizedHealth,
    numberOfDeadPlayers$1 as numberOfDeadPlayers,
    numberOfDeaths$1 as numberOfDeaths,
    numberOfEliminations$1 as numberOfEliminations,
    numberOfFinalBlows$1 as numberOfFinalBlows,
    numberOfHeroes$1 as numberOfHeroes,
    numberOfLivingPlayers$1 as numberOfLivingPlayers,
    numberOfPlayers$1 as numberOfPlayers,
    numberOfPlayersOnObjective$1 as numberOfPlayersOnObjective,
    objectiveIndex$1 as objectiveIndex,
    payloadProgressPercentage$1 as payloadProgressPercentage,
    pointCapturePercentage$1 as pointCapturePercentage,
    raiseToPower$1 as raiseToPower,
    randomInteger$1 as randomInteger,
    randomReal$1 as randomReal,
    roundToInteger$1 as roundToInteger,
    scoreOf$1 as scoreOf,
    sineFromDegrees$1 as sineFromDegrees,
    sineFromRadians$1 as sineFromRadians,
    slotOf$1 as slotOf,
    speedOf$1 as speedOf,
    speedOfInDirection$1 as speedOfInDirection,
    squareRoot$1 as squareRoot,
    subtract$1 as subtract,
    tangentFromDegrees$1 as tangentFromDegrees,
    tangentFromRadians$1 as tangentFromRadians,
    teamScore$1 as teamScore,
    ultimateChargePercent$1 as ultimateChargePercent,
    verticalAngleFromDirection$1 as verticalAngleFromDirection,
    verticalAngleTowards$1 as verticalAngleTowards,
    verticalFacingAngleOf$1 as verticalFacingAngleOf,
    verticalSpeedOf$1 as verticalSpeedOf,
    serverLoad$1 as serverLoad,
    serverLoadAverage$1 as serverLoadAverage,
    serverLoadPeak$1 as serverLoadPeak,
    vector$1 as vector,
    localVectorOf$1 as localVectorOf,
    worldVectorOf$1 as worldVectorOf,
    vectorTowards$1 as vectorTowards,
    backward$1 as backward,
    crossProduct$1 as crossProduct,
    directionFromAngles$1 as directionFromAngles,
    directionTowards$1 as directionTowards,
    dotProduct$1 as dotProduct,
    down$1 as down,
    facingDirectionOf$1 as facingDirectionOf,
    flagPosition$1 as flagPosition,
    forward$1 as forward,
    left$1 as left,
    nearestWalkablePosition$1 as nearestWalkablePosition,
    normalize$1 as normalize,
    objectivePosition$1 as objectivePosition,
    payloadPosition$1 as payloadPosition,
    positionOf$1 as positionOf,
    rayCastHitNormal$1 as rayCastHitNormal,
    rayCastHitPlayer$1 as rayCastHitPlayer,
    rayCastHitPosition$1 as rayCastHitPosition,
    right$1 as right,
    throttleOf$1 as throttleOf,
    totalTimeElapsed$1 as totalTimeElapsed,
    up$1 as up,
    velocityOf$1 as velocityOf,
    xComponentOf$1 as xComponentOf,
    yComponentOf$1 as yComponentOf,
    zComponentOf$1 as zComponentOf
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$Q: (str: ValueEffectType) => ValueEffectType;

declare namespace effect_d$1 {
  export {
    Default$Q as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$R: (str: ValueEffectReevaluationType) => ValueEffectReevaluationType;

declare namespace effectReevaluation_d$1 {
  export {
    Default$R as Default
  };
}

/**
 * A reference to the last effect or icon entity
 * created by the event player (or created
 * at the global level).
 */
declare const lastCreatedEntity$1: (


) => string;



declare namespace entity_d$1 {
  export {
    eventPlayer$1 as eventPlayer,
    victim$1 as victim,
    attacker$1 as attacker,
    closestPlayerTo$1 as closestPlayerTo,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    farthestPlayerFrom$1 as farthestPlayerFrom,
    playerCarryingFlag$1 as playerCarryingFlag,
    playerClosestToReticle$1 as playerClosestToReticle,
    lastCreatedEntity$1 as lastCreatedEntity
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$S: (str: ValueFacingReevaluationType) => ValueFacingReevaluationType;

declare namespace facingReevaluation_d$1 {
  export {
    Default$S as Default
  };
}



declare namespace healOverTimeId_d$1 {
  export {
    lastHealOverTimeId$1 as lastHealOverTimeId,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable
  };
}

/**
 * A hero constant. Specifies one of the available
 * heroes by name in the game.
 */
declare const hero$1: (
/**
 * - `Type.HeroConstant.`
 */
hero: string | number | any[]
) => string;

/**
 * The Current Hero of a Player.
 */
declare const heroOf$1: (
/**
 * Player - The player whose hero to acquire.
 * Can use most player based Value Syntax to
 * retrieve this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;



declare namespace hero_d$1 {
  export {
    hero$1 as hero,
    heroOf$1 as heroOf
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$T: (str: ValueObjectiveDescriptionReevaluationType) => ValueObjectiveDescriptionReevaluationType;

declare namespace hudTextReevaluation_d$1 {
  export {
    Default$T as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$U: (str: ValueIconType) => ValueIconType;

declare namespace icon_d$1 {
  export {
    Default$U as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$V: (str: ValueIconReevaluationType) => ValueIconReevaluationType;

declare namespace iconReevaluation_d$1 {
  export {
    Default$V as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$W: (str: ValueInvisibleToType) => ValueInvisibleToType;

declare namespace invisibleTo_d$1 {
  export {
    Default$W as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$X: (str: ValueInWorldTextReevaluationType) => ValueInWorldTextReevaluationType;

declare namespace inWorldTextReevaluation_d$1 {
  export {
    Default$X as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$Y: (str: ValueLocationType) => ValueLocationType;

declare namespace location_d$1 {
  export {
    Default$Y as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$Z: (str: ValueLosCheckType) => ValueLosCheckType;

declare namespace losCheck_d$1 {
  export {
    Default$Z as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$_: (str: ValueMotionType) => ValueMotionType;

declare namespace motion_d$1 {
  export {
    Default$_ as Default
  };
}



declare namespace multiply_d$1 {
  export {
    number$1 as number,
    add$1 as add,
    angleDifference$1 as angleDifference,
    angleBetweenVectors$1 as angleBetweenVectors,
    altitudeOf$1 as altitudeOf,
    countOf$1 as countOf,
    arccosineInDegrees$1 as arccosineInDegrees,
    arccosineInRadians$1 as arccosineInRadians,
    arcsineInDegrees$1 as arcsineInDegrees,
    arcsineInRadians$1 as arcsineInRadians,
    arctangentInDegrees$1 as arctangentInDegrees,
    arctangentInRadians$1 as arctangentInRadians,
    cosineFromDegrees$1 as cosineFromDegrees,
    cosineFromRadians$1 as cosineFromRadians,
    controlModeScoringPercentage$1 as controlModeScoringPercentage,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    distanceBetween$1 as distanceBetween,
    divide$1 as divide,
    eventDamage$1 as eventDamage,
    eyePosition$1 as eyePosition,
    health$1 as health,
    horizontalAngleFromDirection$1 as horizontalAngleFromDirection,
    horizontalAngleTowards$1 as horizontalAngleTowards,
    horizontalFacingAngleOf$1 as horizontalFacingAngleOf,
    horizontalSpeedOf$1 as horizontalSpeedOf,
    indexOfArrayValue$1 as indexOfArrayValue,
    lastDamageModificationId$1 as lastDamageModificationId,
    lastDamageOverTimeId$1 as lastDamageOverTimeId,
    lastHealOverTimeId$1 as lastHealOverTimeId,
    lastTextId$1 as lastTextId,
    matchRound$1 as matchRound,
    max$1 as max,
    maxHealth$1 as maxHealth,
    min$1 as min,
    modulo$1 as modulo,
    normalizedHealth$1 as normalizedHealth,
    numberOfDeadPlayers$1 as numberOfDeadPlayers,
    numberOfDeaths$1 as numberOfDeaths,
    numberOfEliminations$1 as numberOfEliminations,
    numberOfFinalBlows$1 as numberOfFinalBlows,
    numberOfHeroes$1 as numberOfHeroes,
    numberOfLivingPlayers$1 as numberOfLivingPlayers,
    numberOfPlayers$1 as numberOfPlayers,
    numberOfPlayersOnObjective$1 as numberOfPlayersOnObjective,
    objectiveIndex$1 as objectiveIndex,
    payloadProgressPercentage$1 as payloadProgressPercentage,
    pointCapturePercentage$1 as pointCapturePercentage,
    raiseToPower$1 as raiseToPower,
    randomInteger$1 as randomInteger,
    randomReal$1 as randomReal,
    roundToInteger$1 as roundToInteger,
    scoreOf$1 as scoreOf,
    sineFromDegrees$1 as sineFromDegrees,
    sineFromRadians$1 as sineFromRadians,
    slotOf$1 as slotOf,
    speedOf$1 as speedOf,
    speedOfInDirection$1 as speedOfInDirection,
    squareRoot$1 as squareRoot,
    subtract$1 as subtract,
    tangentFromDegrees$1 as tangentFromDegrees,
    tangentFromRadians$1 as tangentFromRadians,
    teamScore$1 as teamScore,
    ultimateChargePercent$1 as ultimateChargePercent,
    verticalAngleFromDirection$1 as verticalAngleFromDirection,
    verticalAngleTowards$1 as verticalAngleTowards,
    verticalFacingAngleOf$1 as verticalFacingAngleOf,
    verticalSpeedOf$1 as verticalSpeedOf,
    serverLoad$1 as serverLoad,
    serverLoadAverage$1 as serverLoadAverage,
    serverLoadPeak$1 as serverLoadPeak,
    vector$1 as vector,
    localVectorOf$1 as localVectorOf,
    worldVectorOf$1 as worldVectorOf,
    vectorTowards$1 as vectorTowards,
    backward$1 as backward,
    crossProduct$1 as crossProduct,
    directionFromAngles$1 as directionFromAngles,
    directionTowards$1 as directionTowards,
    dotProduct$1 as dotProduct,
    down$1 as down,
    facingDirectionOf$1 as facingDirectionOf,
    flagPosition$1 as flagPosition,
    forward$1 as forward,
    left$1 as left,
    nearestWalkablePosition$1 as nearestWalkablePosition,
    normalize$1 as normalize,
    objectivePosition$1 as objectivePosition,
    payloadPosition$1 as payloadPosition,
    positionOf$1 as positionOf,
    rayCastHitNormal$1 as rayCastHitNormal,
    rayCastHitPlayer$1 as rayCastHitPlayer,
    rayCastHitPosition$1 as rayCastHitPosition,
    right$1 as right,
    throttleOf$1 as throttleOf,
    totalTimeElapsed$1 as totalTimeElapsed,
    up$1 as up,
    velocityOf$1 as velocityOf,
    xComponentOf$1 as xComponentOf,
    yComponentOf$1 as yComponentOf,
    zComponentOf$1 as zComponentOf
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$$: (str: ValueObjectiveDescriptionReevaluationType) => ValueObjectiveDescriptionReevaluationType;

declare namespace objectiveDescriptionReevaluation_d$1 {
  export {
    Default$$ as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$10: (str: ValueOperatorType) => ValueOperatorType;

declare namespace operator_d$1 {
  export {
    Default$10 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$11: (str: ValuePlayEffect) => ValuePlayEffect;

declare namespace playEffect_d$1 {
  export {
    Default$11 as Default
  };
}



declare namespace playersParam_d$1 {
  export {
    eventPlayer$1 as eventPlayer,
    victim$1 as victim,
    attacker$1 as attacker,
    closestPlayerTo$1 as closestPlayerTo,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    farthestPlayerFrom$1 as farthestPlayerFrom,
    playerCarryingFlag$1 as playerCarryingFlag,
    playerClosestToReticle$1 as playerClosestToReticle,
    allDeadPlayers$1 as allDeadPlayers,
    allHeroes$1 as allHeroes,
    allLivingPlayers$1 as allLivingPlayers,
    allPlayers$1 as allPlayers,
    allPlayersNotOnObjective$1 as allPlayersNotOnObjective,
    allPlayersOnObjective$1 as allPlayersOnObjective,
    allowedHeroes$1 as allowedHeroes,
    arraySlice$1 as arraySlice,
    emptyArray$1 as emptyArray,
    filteredArray$1 as filteredArray,
    playersInSlot$1 as playersInSlot,
    playersInViewAngle$1 as playersInViewAngle,
    playersOnHero$1 as playersOnHero,
    playersWithinRadius$1 as playersWithinRadius,
    randomizedArray$1 as randomizedArray,
    removeFromArray$1 as removeFromArray,
    sortedArray$1 as sortedArray
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$12: (str: ValueReevaluationType) => ValueReevaluationType;

declare namespace reevaluation_d$1 {
  export {
    Default$12 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$13: (str: ValueRelativeType) => ValueRelativeType;

declare namespace relative_d$1 {
  export {
    Default$13 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$14: (str: ValueRoundingType) => ValueRoundingType;

declare namespace roundingType_d$1 {
  export {
    Default$14 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$15: (str: ValueSpectatorsType) => ValueSpectatorsType;

declare namespace spectators_d$1 {
  export {
    Default$15 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$16: (str: ValueStartAcceleratingReevaluationType) => ValueStartAcceleratingReevaluationType;

declare namespace startAcceleratingReevaluation_d$1 {
  export {
    Default$16 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$17: (str: ValueStartThrottleBehaviorType) => ValueStartThrottleBehaviorType;

declare namespace startThrottleBehavior_d$1 {
  export {
    Default$17 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$18: (str: ValueStartThrottleReevaluationType) => ValueStartThrottleReevaluationType;

declare namespace startThrottleReevaluation_d$1 {
  export {
    Default$18 as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$19: (str: ValueStatusType) => ValueStatusType;

declare namespace status_d$1 {
  export {
    Default$19 as Default
  };
}

/**
 * Converts a hero parameter into a string
 * that shows up as an icon.
 */
declare const heroIconString$1: (
/**
 * - `Type.Hero.`
 */
value: string | number | any[]
) => string;

/**
 * Text formed from a selection of strings
 * and specified values.
 */
declare const string$1: (
/**
 * String - How the string will be structured
 * using a series of text and phrases.
 * - `Type.Text.`
 */
string: string | number | any[],
/**
 * {0} - The first value in the string.
 * - `Type.StringParam.`
 */
_0: string | number | any[],
/**
 * {1} - The second value in the string.
 * - `Type.StringParam.`
 */
_1: string | number | any[],
/**
 * {2} - The third value in the string.
 * - `Type.StringParam.`
 */
_2: string | number | any[]
) => string;



declare namespace string_d$1 {
  export {
    heroIconString$1 as heroIconString,
    string$1 as string
  };
}



declare namespace stringParam_d$1 {
  export {
    heroIconString$1 as heroIconString,
    string$1 as string,
    Null$1 as Null
  };
}



declare namespace subtract_d$1 {
  export {
    number$1 as number,
    add$1 as add,
    angleDifference$1 as angleDifference,
    angleBetweenVectors$1 as angleBetweenVectors,
    altitudeOf$1 as altitudeOf,
    countOf$1 as countOf,
    arccosineInDegrees$1 as arccosineInDegrees,
    arccosineInRadians$1 as arccosineInRadians,
    arcsineInDegrees$1 as arcsineInDegrees,
    arcsineInRadians$1 as arcsineInRadians,
    arctangentInDegrees$1 as arctangentInDegrees,
    arctangentInRadians$1 as arctangentInRadians,
    cosineFromDegrees$1 as cosineFromDegrees,
    cosineFromRadians$1 as cosineFromRadians,
    controlModeScoringPercentage$1 as controlModeScoringPercentage,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable,
    distanceBetween$1 as distanceBetween,
    divide$1 as divide,
    eventDamage$1 as eventDamage,
    eyePosition$1 as eyePosition,
    health$1 as health,
    horizontalAngleFromDirection$1 as horizontalAngleFromDirection,
    horizontalAngleTowards$1 as horizontalAngleTowards,
    horizontalFacingAngleOf$1 as horizontalFacingAngleOf,
    horizontalSpeedOf$1 as horizontalSpeedOf,
    indexOfArrayValue$1 as indexOfArrayValue,
    lastDamageModificationId$1 as lastDamageModificationId,
    lastDamageOverTimeId$1 as lastDamageOverTimeId,
    lastHealOverTimeId$1 as lastHealOverTimeId,
    lastTextId$1 as lastTextId,
    matchRound$1 as matchRound,
    max$1 as max,
    maxHealth$1 as maxHealth,
    min$1 as min,
    modulo$1 as modulo,
    normalizedHealth$1 as normalizedHealth,
    numberOfDeadPlayers$1 as numberOfDeadPlayers,
    numberOfDeaths$1 as numberOfDeaths,
    numberOfEliminations$1 as numberOfEliminations,
    numberOfFinalBlows$1 as numberOfFinalBlows,
    numberOfHeroes$1 as numberOfHeroes,
    numberOfLivingPlayers$1 as numberOfLivingPlayers,
    numberOfPlayers$1 as numberOfPlayers,
    numberOfPlayersOnObjective$1 as numberOfPlayersOnObjective,
    objectiveIndex$1 as objectiveIndex,
    payloadProgressPercentage$1 as payloadProgressPercentage,
    pointCapturePercentage$1 as pointCapturePercentage,
    raiseToPower$1 as raiseToPower,
    randomInteger$1 as randomInteger,
    randomReal$1 as randomReal,
    roundToInteger$1 as roundToInteger,
    scoreOf$1 as scoreOf,
    sineFromDegrees$1 as sineFromDegrees,
    sineFromRadians$1 as sineFromRadians,
    slotOf$1 as slotOf,
    speedOf$1 as speedOf,
    speedOfInDirection$1 as speedOfInDirection,
    squareRoot$1 as squareRoot,
    subtract$1 as subtract,
    tangentFromDegrees$1 as tangentFromDegrees,
    tangentFromRadians$1 as tangentFromRadians,
    teamScore$1 as teamScore,
    ultimateChargePercent$1 as ultimateChargePercent,
    verticalAngleFromDirection$1 as verticalAngleFromDirection,
    verticalAngleTowards$1 as verticalAngleTowards,
    verticalFacingAngleOf$1 as verticalFacingAngleOf,
    verticalSpeedOf$1 as verticalSpeedOf,
    serverLoad$1 as serverLoad,
    serverLoadAverage$1 as serverLoadAverage,
    serverLoadPeak$1 as serverLoadPeak,
    vector$1 as vector,
    localVectorOf$1 as localVectorOf,
    worldVectorOf$1 as worldVectorOf,
    vectorTowards$1 as vectorTowards,
    backward$1 as backward,
    crossProduct$1 as crossProduct,
    directionFromAngles$1 as directionFromAngles,
    directionTowards$1 as directionTowards,
    dotProduct$1 as dotProduct,
    down$1 as down,
    facingDirectionOf$1 as facingDirectionOf,
    flagPosition$1 as flagPosition,
    forward$1 as forward,
    left$1 as left,
    nearestWalkablePosition$1 as nearestWalkablePosition,
    normalize$1 as normalize,
    objectivePosition$1 as objectivePosition,
    payloadPosition$1 as payloadPosition,
    positionOf$1 as positionOf,
    rayCastHitNormal$1 as rayCastHitNormal,
    rayCastHitPlayer$1 as rayCastHitPlayer,
    rayCastHitPosition$1 as rayCastHitPosition,
    right$1 as right,
    throttleOf$1 as throttleOf,
    totalTimeElapsed$1 as totalTimeElapsed,
    up$1 as up,
    velocityOf$1 as velocityOf,
    xComponentOf$1 as xComponentOf,
    yComponentOf$1 as yComponentOf,
    zComponentOf$1 as zComponentOf
  };
}

/**
 * A team constant. The all option represents
 * both teams in a team or all players in a
 * free-for-all game.
 */
declare const team$1: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[]
) => string;

/**
 * The team that is currently accumulating
 * score percentage in control mode Results
 * in all if neither team is accumulating score.
 */
declare const controlModeScoringTeam$1: (


) => string;

/**
 * The team opposite the specified team.
 */
declare const oppositeTeamOf$1: (
/**
 * Team - The team whose opposite to acquire.
 * If all, the result will be all. Can use
 * most Team based Value Syntax to provide this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * The team of a player. If the game mode is
 * free-for-all, the team is considered to be all.
 */
declare const teamOf$1: (
/**
 * Player - The player whose team to acquire.
 * Can use most Player based Value Syntax to
 * provide this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;



declare namespace team_d$1 {
  export {
    team$1 as team,
    controlModeScoringTeam$1 as controlModeScoringTeam,
    oppositeTeamOf$1 as oppositeTeamOf,
    teamOf$1 as teamOf
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$1a: (str: "" | "Up" | "Down" | "White" | "Yellow" | "Green" | "Purple" | "Red" | "Blue" | "None" | "Primary Fire" | "Secondary Fire" | "Ability 1" | "Ability 2" | "Interact" | "Jump" | "Crouch" | "Hacked" | "Burning" | "Frozen" | "Stunned" | "Min" | "Max" | "Club" | "Diamond" | "Heart" | "No" | "Position" | "Spade" | "Stop" | "Warning" | "Left" | "Right" | "Sphere" | "Cloud" | "Pick" | "Hello" | "Thanks" | "----------" | "-> {0}" | "!" | "!!" | "!!!" | "#{0}" | "({0})" | "*" | "..." | "?" | "??" | "???" | "{0} - {1}" | "{0} - {1} - {2}" | "{0} ->" | "{0} -> {1}" | "{0} * {1}" | "{0} / {1}" | "{0} : {1} : {2}" | "{0} {1}" | "{0} {1} {2}" | "{0} + {1}" | "{0} <-" | "{0} <- {1}" | "{0} <->" | "{0} <-> {1}" | "{0} < {1}" | "{0} > {1}" | "{0} and {1}" | "{0} m" | "{0} m/s" | "{0} sec" | "{0} vs {1}" | "{0}!" | "{0}!!" | "{0}!!!" | "{0}%" | "{0}, {1}" | "{0}, {1}, and {2}" | "{0}:" | "{0}: {1}" | "{0}: {1} and {2}" | "{0}:{1}" | "{0}?" | "{0}??" | "{0}???" | "<- {0}" | "<-> {0}" | "Abilities" | "Ability" | "Agility" | "Alert" | "Alive" | "Allies" | "Ally" | "Ammunition" | "Angle" | "Attack" | "Attacked" | "Attacking" | "Attempt" | "Attempts" | "Average" | "Avoid" | "Avoided" | "Avoiding" | "Backward" | "Bad" | "Ban" | "Banned" | "Banning" | "Best" | "Better" | "Bid" | "Bids" | "Block" | "Blocked" | "Blocking" | "Bonus" | "Bonuses" | "Boss" | "Bosses" | "Bought" | "Build" | "Building" | "Built" | "Burn" | "Burnt" | "Buy" | "Buying" | "Capture" | "Captured" | "Capturing" | "Caution" | "Center" | "Cahllenge Accepted" | "Charisma" | "Chase" | "Chased" | "Chasing" | "Checkpoint" | "Checkpoints" | "Clouds" | "Clubs" | "Combo" | "Come Here" | "Condiition" | "Congratulations" | "Connect" | "Connected" | "Connecting" | "Constitution" | "Control Point" | "Control Points" | "Cooldown" | "Cooldowns" | "Corrupt" | "Corrupted" | "Corrupting" | "Credit" | "Credits" | "Critical" | "Crouched" | "Crouching" | "Current" | "Current Allies" | "Current Ally" | "Current Attempt" | "Current Checkpoint" | "Current Enemies" | "Current Enemy" | "Current Form" | "Current Game" | "Current Hero" | "Current Heroes" | "Current Hostage" | "Current Hostages" | "Current Level" | "Current Mission" | "Current Object" | "Current Objective" | "Current Objects" | "Current Phase" | "Current Player" | "Current Players" | "Current Round" | "Current Target" | "Current Targets" | "Current Upgrade" | "Damage" | "Damaged" | "Damaging" | "Danger" | "Dead" | "Deal" | "Dealing" | "Dealt" | "Deck" | "Decks" | "Defeat" | "Defend" | "Defended" | "Defending" | "Defense" | "Deliver" | "Delivered" | "Delivering" | "Depth" | "Destabilize" | "Destabilized" | "Destabilizing" | "Destroy" | "Destroyed" | "Destroying" | "Detect" | "Detected" | "Detecting" | "Dexterity" | "Diamonds" | "Die" | "Discard" | "Discarded" | "Discarding" | "Disconnect" | "Disconnected" | "Disconnecting" | "Distance" | "Distances" | "Dodge" | "Dodged" | "Dodging" | "Dome" | "Domes" | "Download" | "Downloaded" | "Downloading" | "Draw" | "Drawing" | "Drawn" | "Drop" | "Dropped" | "Dropping" | "Dying" | "East" | "Eliminate" | "Eliminated" | "Eliminating" | "Elimination" | "Eliminations" | "Enemiies" | "Enemy" | "Enterance" | "Escort" | "Escorted" | "Escorting" | "Excellent" | "Exit" | "Experience" | "Extreme" | "Face" | "Faces" | "Facing" | "Failed" | "Failing" | "Failure" | "Fall" | "Fallen" | "Failling" | "Far" | "Fast" | "Faster" | "Fastest" | "Fault" | "Faults" | "Final" | "Final Allies" | "Final Ally" | "Final Attempt" | "Final Checkpoint" | "Final Enemies" | "Final Enemy" | "Final Form" | "Final Game" | "Final Hero" | "Final Heroes" | "Final Hostage" | "Final Hostages" | "Final Item" | "Final Level" | "Final Mission" | "Final Object" | "Final Objective" | "Final Objects" | "Final Phase" | "Final Player" | "Final Players" | "Final Round" | "Final Target" | "Final Targets" | "Final Time" | "Final Upgrade" | "Find" | "Finding" | "Finish" | "Finished" | "Finishing" | "Flown" | "Fly" | "Flying" | "Fold" | "Folded" | "Folding" | "Form" | "Forms" | "Forward" | "Found" | "Freeze" | "Freezing" | "Game" | "Games" | "Games Lost" | "Games Won" | "Gg" | "Go" | "Goal" | "Goals" | "Going" | "Good" | "Good Luck" | "Goodbye" | "Guilt" | "Hack" | "Hacking" | "Hand" | "Hands" | "Heal" | "Healed" | "Healer" | "Healers" | "Healing" | "Hearts" | "Height" | "Help" | "Here" | "Hero" | "Heroes" | "Hidden" | "Hide" | "Hiding" | "High Score" | "High Scores" | "Hit" | "Hitting" | "Hmmm" | "Hostage" | "Hostages" | "Huh" | "Hunt" | "Hunted" | "Hunter" | "Hunters" | "Hunting" | "I Give Up" | "I Tried" | "In View" | "Income" | "Incoming" | "Initial" | "Initial Allies" | "Initial Ally" | "Initial Attempt" | "Initial Checkpoint" | "Initial Enemies" | "Initial Enemy" | "Initial Form" | "Initial Game" | "Initial Hero" | "Initial Heroes" | "Initial Hostage" | "Initial Level" | "Initial Mission" | "Initial Object" | "Initial Objective" | "Initial Objects" | "Initial Phase" | "Initial Player" | "Initial Players" | "Initial Round" | "Initial Target" | "Initial Targets" | "Initial Upgrade" | "Innocent" | "Inside" | "Intelligence" | "Invisible" | "Item" | "Items" | "Join" | "Joined" | "Joining" | "Jumping" | "Kill" | "Kills" | "Killstreak" | "Killstreaks" | "Leader" | "Leaders" | "Least" | "Less" | "Level" | "Level Down" | "Levels" | "Life" | "Limited" | "Lives" | "Load" | "Loaded" | "Loading" | "Lock" | "Locked" | "Locking" | "Loser" | "Losers" | "Loss" | "Losses" | "Mild" | "Mission" | "Mission Aborted" | "Mission Accomplished" | "Mission Failed" | "Missions" | "Moderate" | "Money" | "Monster" | "Monsters" | "More" | "Most" | "My Mistake" | "Near" | "New High Score" | "New Record" | "Next" | "Next Allies" | "Next Ally" | "Next Attempt" | "Next Checkpoint" | "Next Enemies" | "Next Enemy" | "Next Form" | "Next Game" | "Next Hero" | "Next Heroes" | "Next Hostage" | "Next Hostages" | "Next Level" | "Next Mission" | "Next Object" | "Next Objective" | "Next Objects" | "Next Phase" | "Next Player" | "Next Players" | "Next Round" | "Next Target" | "Next Targets" | "Next Upgrade" | "Nice Try" | "No Thanks" | "Normal" | "North" | "Northeast" | "Northwest" | "Not Today" | "Object" | "Objective" | "Objectives" | "Objects" | "Obtain" | "Obtained" | "Obtaining" | "Off" | "On" | "Oof" | "Oops" | "Optimal" | "Optimize" | "Optimized" | "Optimizing" | "Out Of View" | "Outgoing" | "Outside" | "Over" | "Overtime" | "Participant" | "Participants" | "Payload" | "Payloads" | "Phase" | "Phases" | "Picked" | "Picking" | "Pile" | "Piles" | "Play" | "Played" | "Player" | "Players" | "Point" | "Points" | "Points Earned" | "Points Lost" | "Power" | "Power-up" | "Power-ups" | "Price" | "Projectile" | "Projectiles" | "Protect" | "Protected" | "Protecting" | "Purified" | "Purify" | "Purifying" | "Raise" | "Raised" | "Rank" | "Rank A" | "Rank B" | "Rank C" | "Rank D" | "Rank E" | "Rank F" | "Rank S" | "Reach" | "Reached" | "Reaching" | "Ready" | "Record" | "Records" | "Recover" | "Recovered" | "Recovering" | "Remain" | "Remaining" | "Rescue" | "Rescued" | "Rescuing" | "Resource" | "Resources" | "Resurrect" | "Resurrected" | "Resurrecting" | "Reveal" | "Revealed" | "Revealing" | "Reverse" | "Reversed" | "Reversing" | "Round" | "Round {0}" | "Rounds" | "Rounds Lost" | "Rounds Won" | "Run" | "Running" | "Safe" | "Save" | "Saved" | "Saving" | "Score" | "Scores" | "Secure" | "Secured" | "Securing" | "Select" | "Selected" | "Selecting" | "Sell" | "Selling" | "Server Load" | "Server Load Average" | "Server Load Peak" | "Sever" | "Severe" | "Severed" | "Severing" | "Shop" | "Shops" | "Shuffle" | "Shuffled" | "Shuffling" | "Sink" | "Sinking" | "Skip" | "Skipped" | "Skipping" | "Sleep" | "Sleeping" | "Slept" | "Slow" | "Slower" | "Slowest" | "Sold" | "Sorry" | "South" | "Southeast" | "Southwest" | "Spades" | "Sparklers" | "Spawn" | "Spawned" | "Spaning" | "Speed" | "Speeds" | "Spheres" | "Stabilize" | "Stabilized" | "Stabilizing" | "Stable" | "Star" | "Stars" | "Start" | "Started" | "Starting" | "Status" | "Stay" | "Stay Away" | "Stayed" | "Staying" | "Stopped" | "Stopping" | "Stun" | "Stunning" | "Suboptimal" | "Success" | "Sudden Death" | "Sunk" | "Superb" | "Survive" | "Survived" | "Surviving" | "Target" | "Targets" | "Team" | "Teammate" | "Teammates" | "Teams" | "Terrible" | "Thank You" | "That Was Awesome" | "Threat" | "Threat Level" | "Threat Levels" | "Threats" | "Tiebreker" | "Time" | "Times" | "Total" | "Trade" | "Traded" | "Trading" | "Traitor" | "Traitors" | "Transfer" | "Transferred" | "Transferring" | "Try Again" | "Turret" | "Turrets" | "Ugh" | "Ultimate Ability" | "Under" | "Unknown" | "Unlimited" | "Unlock" | "Unlocked" | "Unlocking" | "Unsafe" | "Unstable" | "Upgrade" | "Upgraders" | "Upload" | "Uploaded" | "Uploading" | "Use Ability 1" | "Use Ability 2" | "Use Ultimate Abiility" | "Victory" | "Visible" | "Vortex" | "Vortices" | "Wait" | "Waiting" | "Wall" | "Walls" | "Welcome" | "Well Played" | "West" | "Wild" | "Win" | "Winner" | "Winners" | "Wins" | "Wisdom" | "Worse" | "Worst" | "Wow" | "Yes" | "You" | "You Lose" | "You Win" | "Zone" | "Zones" | "¡{0}!" | "¿{0}?" | "{0} !{1}" | "{0} <{1}" | "{0} ={1}" | "{0} >{1}") => "" | "Up" | "Down" | "White" | "Yellow" | "Green" | "Purple" | "Red" | "Blue" | "None" | "Primary Fire" | "Secondary Fire" | "Ability 1" | "Ability 2" | "Interact" | "Jump" | "Crouch" | "Hacked" | "Burning" | "Frozen" | "Stunned" | "Min" | "Max" | "Club" | "Diamond" | "Heart" | "No" | "Position" | "Spade" | "Stop" | "Warning" | "Left" | "Right" | "Sphere" | "Cloud" | "Pick" | "Hello" | "Thanks" | "----------" | "-> {0}" | "!" | "!!" | "!!!" | "#{0}" | "({0})" | "*" | "..." | "?" | "??" | "???" | "{0} - {1}" | "{0} - {1} - {2}" | "{0} ->" | "{0} -> {1}" | "{0} * {1}" | "{0} / {1}" | "{0} : {1} : {2}" | "{0} {1}" | "{0} {1} {2}" | "{0} + {1}" | "{0} <-" | "{0} <- {1}" | "{0} <->" | "{0} <-> {1}" | "{0} < {1}" | "{0} > {1}" | "{0} and {1}" | "{0} m" | "{0} m/s" | "{0} sec" | "{0} vs {1}" | "{0}!" | "{0}!!" | "{0}!!!" | "{0}%" | "{0}, {1}" | "{0}, {1}, and {2}" | "{0}:" | "{0}: {1}" | "{0}: {1} and {2}" | "{0}:{1}" | "{0}?" | "{0}??" | "{0}???" | "<- {0}" | "<-> {0}" | "Abilities" | "Ability" | "Agility" | "Alert" | "Alive" | "Allies" | "Ally" | "Ammunition" | "Angle" | "Attack" | "Attacked" | "Attacking" | "Attempt" | "Attempts" | "Average" | "Avoid" | "Avoided" | "Avoiding" | "Backward" | "Bad" | "Ban" | "Banned" | "Banning" | "Best" | "Better" | "Bid" | "Bids" | "Block" | "Blocked" | "Blocking" | "Bonus" | "Bonuses" | "Boss" | "Bosses" | "Bought" | "Build" | "Building" | "Built" | "Burn" | "Burnt" | "Buy" | "Buying" | "Capture" | "Captured" | "Capturing" | "Caution" | "Center" | "Cahllenge Accepted" | "Charisma" | "Chase" | "Chased" | "Chasing" | "Checkpoint" | "Checkpoints" | "Clouds" | "Clubs" | "Combo" | "Come Here" | "Condiition" | "Congratulations" | "Connect" | "Connected" | "Connecting" | "Constitution" | "Control Point" | "Control Points" | "Cooldown" | "Cooldowns" | "Corrupt" | "Corrupted" | "Corrupting" | "Credit" | "Credits" | "Critical" | "Crouched" | "Crouching" | "Current" | "Current Allies" | "Current Ally" | "Current Attempt" | "Current Checkpoint" | "Current Enemies" | "Current Enemy" | "Current Form" | "Current Game" | "Current Hero" | "Current Heroes" | "Current Hostage" | "Current Hostages" | "Current Level" | "Current Mission" | "Current Object" | "Current Objective" | "Current Objects" | "Current Phase" | "Current Player" | "Current Players" | "Current Round" | "Current Target" | "Current Targets" | "Current Upgrade" | "Damage" | "Damaged" | "Damaging" | "Danger" | "Dead" | "Deal" | "Dealing" | "Dealt" | "Deck" | "Decks" | "Defeat" | "Defend" | "Defended" | "Defending" | "Defense" | "Deliver" | "Delivered" | "Delivering" | "Depth" | "Destabilize" | "Destabilized" | "Destabilizing" | "Destroy" | "Destroyed" | "Destroying" | "Detect" | "Detected" | "Detecting" | "Dexterity" | "Diamonds" | "Die" | "Discard" | "Discarded" | "Discarding" | "Disconnect" | "Disconnected" | "Disconnecting" | "Distance" | "Distances" | "Dodge" | "Dodged" | "Dodging" | "Dome" | "Domes" | "Download" | "Downloaded" | "Downloading" | "Draw" | "Drawing" | "Drawn" | "Drop" | "Dropped" | "Dropping" | "Dying" | "East" | "Eliminate" | "Eliminated" | "Eliminating" | "Elimination" | "Eliminations" | "Enemiies" | "Enemy" | "Enterance" | "Escort" | "Escorted" | "Escorting" | "Excellent" | "Exit" | "Experience" | "Extreme" | "Face" | "Faces" | "Facing" | "Failed" | "Failing" | "Failure" | "Fall" | "Fallen" | "Failling" | "Far" | "Fast" | "Faster" | "Fastest" | "Fault" | "Faults" | "Final" | "Final Allies" | "Final Ally" | "Final Attempt" | "Final Checkpoint" | "Final Enemies" | "Final Enemy" | "Final Form" | "Final Game" | "Final Hero" | "Final Heroes" | "Final Hostage" | "Final Hostages" | "Final Item" | "Final Level" | "Final Mission" | "Final Object" | "Final Objective" | "Final Objects" | "Final Phase" | "Final Player" | "Final Players" | "Final Round" | "Final Target" | "Final Targets" | "Final Time" | "Final Upgrade" | "Find" | "Finding" | "Finish" | "Finished" | "Finishing" | "Flown" | "Fly" | "Flying" | "Fold" | "Folded" | "Folding" | "Form" | "Forms" | "Forward" | "Found" | "Freeze" | "Freezing" | "Game" | "Games" | "Games Lost" | "Games Won" | "Gg" | "Go" | "Goal" | "Goals" | "Going" | "Good" | "Good Luck" | "Goodbye" | "Guilt" | "Hack" | "Hacking" | "Hand" | "Hands" | "Heal" | "Healed" | "Healer" | "Healers" | "Healing" | "Hearts" | "Height" | "Help" | "Here" | "Hero" | "Heroes" | "Hidden" | "Hide" | "Hiding" | "High Score" | "High Scores" | "Hit" | "Hitting" | "Hmmm" | "Hostage" | "Hostages" | "Huh" | "Hunt" | "Hunted" | "Hunter" | "Hunters" | "Hunting" | "I Give Up" | "I Tried" | "In View" | "Income" | "Incoming" | "Initial" | "Initial Allies" | "Initial Ally" | "Initial Attempt" | "Initial Checkpoint" | "Initial Enemies" | "Initial Enemy" | "Initial Form" | "Initial Game" | "Initial Hero" | "Initial Heroes" | "Initial Hostage" | "Initial Level" | "Initial Mission" | "Initial Object" | "Initial Objective" | "Initial Objects" | "Initial Phase" | "Initial Player" | "Initial Players" | "Initial Round" | "Initial Target" | "Initial Targets" | "Initial Upgrade" | "Innocent" | "Inside" | "Intelligence" | "Invisible" | "Item" | "Items" | "Join" | "Joined" | "Joining" | "Jumping" | "Kill" | "Kills" | "Killstreak" | "Killstreaks" | "Leader" | "Leaders" | "Least" | "Less" | "Level" | "Level Down" | "Levels" | "Life" | "Limited" | "Lives" | "Load" | "Loaded" | "Loading" | "Lock" | "Locked" | "Locking" | "Loser" | "Losers" | "Loss" | "Losses" | "Mild" | "Mission" | "Mission Aborted" | "Mission Accomplished" | "Mission Failed" | "Missions" | "Moderate" | "Money" | "Monster" | "Monsters" | "More" | "Most" | "My Mistake" | "Near" | "New High Score" | "New Record" | "Next" | "Next Allies" | "Next Ally" | "Next Attempt" | "Next Checkpoint" | "Next Enemies" | "Next Enemy" | "Next Form" | "Next Game" | "Next Hero" | "Next Heroes" | "Next Hostage" | "Next Hostages" | "Next Level" | "Next Mission" | "Next Object" | "Next Objective" | "Next Objects" | "Next Phase" | "Next Player" | "Next Players" | "Next Round" | "Next Target" | "Next Targets" | "Next Upgrade" | "Nice Try" | "No Thanks" | "Normal" | "North" | "Northeast" | "Northwest" | "Not Today" | "Object" | "Objective" | "Objectives" | "Objects" | "Obtain" | "Obtained" | "Obtaining" | "Off" | "On" | "Oof" | "Oops" | "Optimal" | "Optimize" | "Optimized" | "Optimizing" | "Out Of View" | "Outgoing" | "Outside" | "Over" | "Overtime" | "Participant" | "Participants" | "Payload" | "Payloads" | "Phase" | "Phases" | "Picked" | "Picking" | "Pile" | "Piles" | "Play" | "Played" | "Player" | "Players" | "Point" | "Points" | "Points Earned" | "Points Lost" | "Power" | "Power-up" | "Power-ups" | "Price" | "Projectile" | "Projectiles" | "Protect" | "Protected" | "Protecting" | "Purified" | "Purify" | "Purifying" | "Raise" | "Raised" | "Rank" | "Rank A" | "Rank B" | "Rank C" | "Rank D" | "Rank E" | "Rank F" | "Rank S" | "Reach" | "Reached" | "Reaching" | "Ready" | "Record" | "Records" | "Recover" | "Recovered" | "Recovering" | "Remain" | "Remaining" | "Rescue" | "Rescued" | "Rescuing" | "Resource" | "Resources" | "Resurrect" | "Resurrected" | "Resurrecting" | "Reveal" | "Revealed" | "Revealing" | "Reverse" | "Reversed" | "Reversing" | "Round" | "Round {0}" | "Rounds" | "Rounds Lost" | "Rounds Won" | "Run" | "Running" | "Safe" | "Save" | "Saved" | "Saving" | "Score" | "Scores" | "Secure" | "Secured" | "Securing" | "Select" | "Selected" | "Selecting" | "Sell" | "Selling" | "Server Load" | "Server Load Average" | "Server Load Peak" | "Sever" | "Severe" | "Severed" | "Severing" | "Shop" | "Shops" | "Shuffle" | "Shuffled" | "Shuffling" | "Sink" | "Sinking" | "Skip" | "Skipped" | "Skipping" | "Sleep" | "Sleeping" | "Slept" | "Slow" | "Slower" | "Slowest" | "Sold" | "Sorry" | "South" | "Southeast" | "Southwest" | "Spades" | "Sparklers" | "Spawn" | "Spawned" | "Spaning" | "Speed" | "Speeds" | "Spheres" | "Stabilize" | "Stabilized" | "Stabilizing" | "Stable" | "Star" | "Stars" | "Start" | "Started" | "Starting" | "Status" | "Stay" | "Stay Away" | "Stayed" | "Staying" | "Stopped" | "Stopping" | "Stun" | "Stunning" | "Suboptimal" | "Success" | "Sudden Death" | "Sunk" | "Superb" | "Survive" | "Survived" | "Surviving" | "Target" | "Targets" | "Team" | "Teammate" | "Teammates" | "Teams" | "Terrible" | "Thank You" | "That Was Awesome" | "Threat" | "Threat Level" | "Threat Levels" | "Threats" | "Tiebreker" | "Time" | "Times" | "Total" | "Trade" | "Traded" | "Trading" | "Traitor" | "Traitors" | "Transfer" | "Transferred" | "Transferring" | "Try Again" | "Turret" | "Turrets" | "Ugh" | "Ultimate Ability" | "Under" | "Unknown" | "Unlimited" | "Unlock" | "Unlocked" | "Unlocking" | "Unsafe" | "Unstable" | "Upgrade" | "Upgraders" | "Upload" | "Uploaded" | "Uploading" | "Use Ability 1" | "Use Ability 2" | "Use Ultimate Abiility" | "Victory" | "Visible" | "Vortex" | "Vortices" | "Wait" | "Waiting" | "Wall" | "Walls" | "Welcome" | "Well Played" | "West" | "Wild" | "Win" | "Winner" | "Winners" | "Wins" | "Wisdom" | "Worse" | "Worst" | "Wow" | "Yes" | "You" | "You Lose" | "You Win" | "Zone" | "Zones" | "¡{0}!" | "¿{0}?" | "{0} !{1}" | "{0} <{1}" | "{0} ={1}" | "{0} >{1}";

declare namespace text_d$1 {
  export {
    Default$1a as Default
  };
}



declare namespace textId_d$1 {
  export {
    lastTextId$1 as lastTextId,
    globalVariable$1 as globalVariable,
    playerVariable$1 as playerVariable
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$1b: (str: ValueTransformationType) => ValueTransformationType;

declare namespace transformation_d$1 {
  export {
    Default$1b as Default
  };
}

/**
 * The absolute value is a measure of how far
 * the number is from zero. If you think of
 * a number line, with zero in the center,
 * all you’re really doing is asking how far
 * away you are from this zero point. For example
 * the Absolute Value of 4 is 4 and the absolute
 * value of -6 is 6.
 */
declare const absoluteValue$1: (
/**
 * Value - You can specify any Value Syntax
 * to define the Absolute Value.
 * - `Type.Number.`
 */
value: string | number | any[]
) => string;

/**
 * A copy of an array with one or more values
 * appended to the end.
 */
declare const appendToArray$1: (
/**
 * Array - You must specify the Array Syntax
 * you are adding the value to.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * Value - You must specify the Value Syntax
 * that you are adding to the array.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * The current array element being considered.
 * Only meaningful during the evaluation of
 * values such as filtered array and sorted array.
 */
declare const currentArrayElement$1: (


) => string;

/**
 * The value at the started of the specified
 * array. Results in a 0 if the specified array is empty.
 */
declare const firstOf$1: (
/**
 * Array - The array from which the value is
 * created. Can use most Array based Value
 * Syntax to provide this data.
 * - `Type.Array.`
 */
array: string | number | any[]
) => string;

/**
 * The value at the end of the specified array.
 * Results in a 0 if the specified array is empty.
 */
declare const lastOf$1: (
/**
 * Array - The array from which the value is
 * created. Can use most Array based Value
 * Syntax to provide this data.
 * - `Type.Array.`
 */
array: string | number | any[]
) => string;

/**
 * The amount of time in seconds remaining
 * in the current game mode phase. This will
 * return a numerical value.
 */
declare const matchTime$1: (


) => string;

/**
 * The product of two numbers or vectors. A
 * vector multiplied by a number will yield
 * a scaled vector.
 */
declare const multiply$1: (
/**
 * Value - The left-hand operand. May be any
 * value that results in a number. Can use
 * most Number based Value Syntax to provide this value.
 * - `Type.Multiply.`
 */
value1: string | number | any[],
/**
 * Value - The right-hand operand. May be any
 * value that results in a number. Can use
 * most Number based Value Syntax to provide this value.
 * - `Type.Multiply.`
 */
value2: string | number | any[]
) => string;

/**
 * A random value from the specified array.
 */
declare const randomValueInArray$1: (
/**
 * Array - The array from which to randomly
 * take a value. If a non-array value is provided,
 * the result is simply the provided value.
 * Can use most Array based Value Syntax to
 * provide this value.
 * - `Type.Value.`
 */
array: string | number | any[]
) => string;

/**
 * The value found at a specific element of
 * an array. Results in a 0 if the element does not exist.
 */
declare const valueInArray$1: (
/**
 * Array - The array whose element to acquire.
 * Can use most Array based Value Syntax to
 * provide this value.
 * - `Type.Array.`
 */
array: string | number | any[],
/**
 * Index - The index whose element to acquire.
 * Can use most Number based Value Syntax to
 * provide this value.
 * - `Type.Number.`
 */
index: string | number | any[]
) => string;



declare namespace value_d$1 {
  export {
    absoluteValue$1 as absoluteValue,
    add$1 as add,
    allDeadPlayers$1 as allDeadPlayers,
    allHeroes$1 as allHeroes,
    allLivingPlayers$1 as allLivingPlayers,
    allPlayers$1 as allPlayers,
    allPlayersNotOnObjective$1 as allPlayersNotOnObjective,
    allPlayersOnObjective$1 as allPlayersOnObjective,
    allowedHeroes$1 as allowedHeroes,
    altitudeOf$1 as altitudeOf,
    and$1 as and,
    angleBetweenVectors$1 as angleBetweenVectors,
    angleDifference$1 as angleDifference,
    appendToArray$1 as appendToArray,
    arccosineInDegrees$1 as arccosineInDegrees,
    arccosineInRadians$1 as arccosineInRadians,
    arcsineInDegrees$1 as arcsineInDegrees,
    arcsineInRadians$1 as arcsineInRadians,
    arctangentInDegrees$1 as arctangentInDegrees,
    arctangentInRadians$1 as arctangentInRadians,
    arrayContains$1 as arrayContains,
    arraySlice$1 as arraySlice,
    attacker$1 as attacker,
    backward$1 as backward,
    closestPlayerTo$1 as closestPlayerTo,
    compare$1 as compare,
    controlModeScoringPercentage$1 as controlModeScoringPercentage,
    controlModeScoringTeam$1 as controlModeScoringTeam,
    cosineFromDegrees$1 as cosineFromDegrees,
    cosineFromRadians$1 as cosineFromRadians,
    countOf$1 as countOf,
    crossProduct$1 as crossProduct,
    currentArrayElement$1 as currentArrayElement,
    directionFromAngles$1 as directionFromAngles,
    directionTowards$1 as directionTowards,
    distanceBetween$1 as distanceBetween,
    divide$1 as divide,
    dotProduct$1 as dotProduct,
    down$1 as down,
    emptyArray$1 as emptyArray,
    entityExists$1 as entityExists,
    eventDamage$1 as eventDamage,
    eventPlayer$1 as eventPlayer,
    eventWasCriticalHit$1 as eventWasCriticalHit,
    eyePosition$1 as eyePosition,
    facingDirectionOf$1 as facingDirectionOf,
    False$1 as False,
    farthestPlayerFrom$1 as farthestPlayerFrom,
    filteredArray$1 as filteredArray,
    firstOf$1 as firstOf,
    flagPosition$1 as flagPosition,
    forward$1 as forward,
    globalVariable$1 as globalVariable,
    hasSpawned$1 as hasSpawned,
    hasStatus$1 as hasStatus,
    health$1 as health,
    hero$1 as hero,
    heroIconString$1 as heroIconString,
    heroOf$1 as heroOf,
    horizontalAngleFromDirection$1 as horizontalAngleFromDirection,
    horizontalAngleTowards$1 as horizontalAngleTowards,
    horizontalFacingAngleOf$1 as horizontalFacingAngleOf,
    horizontalSpeedOf$1 as horizontalSpeedOf,
    indexOfArrayValue$1 as indexOfArrayValue,
    isAlive$1 as isAlive,
    isAssemblingHeroes$1 as isAssemblingHeroes,
    isBetweenRounds$1 as isBetweenRounds,
    isButtonHeld$1 as isButtonHeld,
    isCommunicating$1 as isCommunicating,
    isCommunicatingAny$1 as isCommunicatingAny,
    isCommunicatingAnyEmote$1 as isCommunicatingAnyEmote,
    isCommunicatingAnyVoiceLine$1 as isCommunicatingAnyVoiceLine,
    isControlModePointLocked$1 as isControlModePointLocked,
    isCrouching$1 as isCrouching,
    isCTFModeInSuddenDeath$1 as isCTFModeInSuddenDeath,
    isDead$1 as isDead,
    isFiringPrimary$1 as isFiringPrimary,
    isFiringSecondary$1 as isFiringSecondary,
    isFlagAtBase$1 as isFlagAtBase,
    isFlagBeingCarried$1 as isFlagBeingCarried,
    isGameInProgress$1 as isGameInProgress,
    isHeroBeingPlayed$1 as isHeroBeingPlayed,
    isInAir$1 as isInAir,
    isInLineOfSight$1 as isInLineOfSight,
    isInSetup$1 as isInSetup,
    isInSpawnRoom$1 as isInSpawnRoom,
    isInViewAngle$1 as isInViewAngle,
    isMatchComplete$1 as isMatchComplete,
    isMoving$1 as isMoving,
    isObjectiveComplete$1 as isObjectiveComplete,
    isOnGround$1 as isOnGround,
    isOnObjective$1 as isOnObjective,
    isOnWall$1 as isOnWall,
    isPortraitOnFire$1 as isPortraitOnFire,
    isStanding$1 as isStanding,
    isTeamOnDefense$1 as isTeamOnDefense,
    isTeamOnOffense$1 as isTeamOnOffense,
    isTrueForAll$1 as isTrueForAll,
    isTrueForAny$1 as isTrueForAny,
    isUsingAbility1$1 as isUsingAbility1,
    isUsingAbility2$1 as isUsingAbility2,
    isUsingUltimate$1 as isUsingUltimate,
    isWaitingForPlayers$1 as isWaitingForPlayers,
    lastCreatedEntity$1 as lastCreatedEntity,
    lastDamageModificationId$1 as lastDamageModificationId,
    lastDamageOverTimeId$1 as lastDamageOverTimeId,
    lastHealOverTimeId$1 as lastHealOverTimeId,
    lastOf$1 as lastOf,
    lastTextId$1 as lastTextId,
    left$1 as left,
    localVectorOf$1 as localVectorOf,
    matchRound$1 as matchRound,
    matchTime$1 as matchTime,
    max$1 as max,
    maxHealth$1 as maxHealth,
    min$1 as min,
    modulo$1 as modulo,
    multiply$1 as multiply,
    nearestWalkablePosition$1 as nearestWalkablePosition,
    normalize$1 as normalize,
    normalizedHealth$1 as normalizedHealth,
    not$1 as not,
    Null$1 as Null,
    number$1 as number,
    numberOfDeadPlayers$1 as numberOfDeadPlayers,
    numberOfDeaths$1 as numberOfDeaths,
    numberOfEliminations$1 as numberOfEliminations,
    numberOfFinalBlows$1 as numberOfFinalBlows,
    numberOfHeroes$1 as numberOfHeroes,
    numberOfLivingPlayers$1 as numberOfLivingPlayers,
    numberOfPlayers$1 as numberOfPlayers,
    numberOfPlayersOnObjective$1 as numberOfPlayersOnObjective,
    objectiveIndex$1 as objectiveIndex,
    objectivePosition$1 as objectivePosition,
    oppositeTeamOf$1 as oppositeTeamOf,
    or$1 as or,
    payloadPosition$1 as payloadPosition,
    payloadProgressPercentage$1 as payloadProgressPercentage,
    playerCarryingFlag$1 as playerCarryingFlag,
    playerClosestToReticle$1 as playerClosestToReticle,
    playerVariable$1 as playerVariable,
    playersInSlot$1 as playersInSlot,
    playersInViewAngle$1 as playersInViewAngle,
    playersOnHero$1 as playersOnHero,
    playersWithinRadius$1 as playersWithinRadius,
    pointCapturePercentage$1 as pointCapturePercentage,
    positionOf$1 as positionOf,
    raiseToPower$1 as raiseToPower,
    randomInteger$1 as randomInteger,
    randomReal$1 as randomReal,
    randomValueInArray$1 as randomValueInArray,
    randomizedArray$1 as randomizedArray,
    rayCastHitNormal$1 as rayCastHitNormal,
    rayCastHitPlayer$1 as rayCastHitPlayer,
    rayCastHitPosition$1 as rayCastHitPosition,
    removeFromArray$1 as removeFromArray,
    right$1 as right,
    roundToInteger$1 as roundToInteger,
    scoreOf$1 as scoreOf,
    sineFromDegrees$1 as sineFromDegrees,
    sineFromRadians$1 as sineFromRadians,
    slotOf$1 as slotOf,
    sortedArray$1 as sortedArray,
    speedOf$1 as speedOf,
    speedOfInDirection$1 as speedOfInDirection,
    squareRoot$1 as squareRoot,
    string$1 as string,
    subtract$1 as subtract,
    tangentFromDegrees$1 as tangentFromDegrees,
    tangentFromRadians$1 as tangentFromRadians,
    team$1 as team,
    teamOf$1 as teamOf,
    teamScore$1 as teamScore,
    throttleOf$1 as throttleOf,
    totalTimeElapsed$1 as totalTimeElapsed,
    True$1 as True,
    ultimateChargePercent$1 as ultimateChargePercent,
    up$1 as up,
    valueInArray$1 as valueInArray,
    vector$1 as vector,
    vectorTowards$1 as vectorTowards,
    velocityOf$1 as velocityOf,
    verticalAngleFromDirection$1 as verticalAngleFromDirection,
    verticalAngleTowards$1 as verticalAngleTowards,
    verticalFacingAngleOf$1 as verticalFacingAngleOf,
    verticalSpeedOf$1 as verticalSpeedOf,
    victim$1 as victim,
    worldVectorOf$1 as worldVectorOf,
    xComponentOf$1 as xComponentOf,
    yComponentOf$1 as yComponentOf,
    zComponentOf$1 as zComponentOf
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$1c: (str: ValueVariableOperation) => ValueVariableOperation;

declare namespace variableOperation_d$1 {
  export {
    Default$1c as Default
  };
}

/**
 * @param str Type '
 * Then can see list of available string lists.
 */
declare const Default$1d: (str: ValueWaitBehaviorType) => ValueWaitBehaviorType;

declare namespace waitBehavior_d$1 {
  export {
    Default$1d as Default
  };
}



declare namespace index_d$7 {
  export {
    heroConstant_d$1 as HeroConstant,
    slotRange_d$1 as SlotRange,
    teamConstant_d$1 as TeamConstant,
    variable_d$1 as Variable,
    eventPlayer_d$1 as EventPlayer,
    add_d$1 as Add,
    array_d$1 as Array,
    assisterParam_d$1 as AssisterParam,
    barrier_d$1 as Barrier,
    beam_d$1 as Beam,
    beamReevaluation_d$1 as BeamReevaluation,
    bool_d$1 as Bool,
    button_d$1 as Button,
    clipping_d$1 as Clipping,
    color_d$1 as Color,
    communication_d$1 as Communication,
    damageModificationId_d$1 as DamageModificationId,
    damageModificationReevaluation_d$1 as DamageModificationReevaluation,
    damageOverTimeId_d$1 as DamageOverTimeId,
    destinationParam_d$1 as DestinationParam,
    divide_d$1 as Divide,
    effect_d$1 as Effect,
    effectReevaluation_d$1 as EffectReevaluation,
    entity_d$1 as Entity,
    facingReevaluation_d$1 as FacingReevaluation,
    healOverTimeId_d$1 as HealOverTimeId,
    hero_d$1 as Hero,
    hudTextReevaluation_d$1 as HudTextReevaluation,
    icon_d$1 as Icon,
    iconReevaluation_d$1 as IconReevaluation,
    invisibleTo_d$1 as InvisibleTo,
    inWorldTextReevaluation_d$1 as InWorldTextReevaluation,
    location_d$1 as Location,
    losCheck_d$1 as LosCheck,
    motion_d$1 as Motion,
    multiply_d$1 as Multiply,
    number_d$1 as Number,
    objectiveDescriptionReevaluation_d$1 as ObjectiveDescriptionReevaluation,
    operator_d$1 as Operator,
    playEffect_d$1 as PlayEffect,
    player_d$1 as Player,
    playersParam_d$1 as PlayersParam,
    reevaluation_d$1 as Reevaluation,
    relative_d$1 as Relative,
    roundingType_d$1 as RoundingType,
    spectators_d$1 as Spectators,
    startAcceleratingReevaluation_d$1 as StartAcceleratingReevaluation,
    startThrottleBehavior_d$1 as StartThrottleBehavior,
    startThrottleReevaluation_d$1 as StartThrottleReevaluation,
    status_d$1 as Status,
    string_d$1 as String,
    stringParam_d$1 as StringParam,
    subtract_d$1 as Subtract,
    team_d$1 as Team,
    text_d$1 as Text,
    textId_d$1 as TextId,
    transformation_d$1 as Transformation,
    value_d$1 as Value,
    variableOperation_d$1 as VariableOperation,
    vector_d$1 as Vector,
    waitBehavior_d$1 as WaitBehavior
  };
}

/**
 * Stops execution of the action list.
 */
declare const abort$1: (


) => string;

/**
 * Stops execution of the action list if the
 * action’s condition evaluates to true, if
 * it does not, the execution continues with
 * the next action.
 */
declare const abortIf$1: (
/**
 * Condition - Specifies whether the execution
 * is stopped. Can use most Boolean based Value Syntax.
 * - `Type.Bool.`
 */
condition: string | number | any[]
) => string;

/**
 * Stops execution of the action list if at
 * least one condition in the condition list
 * is false. If all conditions are true, execution
 * continues with the next action.
 */
declare const abortIfConditionIsFalse$1: (


) => string;

/**
 * Stops execution of the action list if all
 * conditions in the condition list is true.
 * If any are false, execution continues with
 * the next action.
 */
declare const abortIfConditionIsTrue$1: (


) => string;

/**
 * Undoes the effect of the disallow button
 * action for one or more players.
 */
declare const allowButton$1: (
/**
 * Player - The player or players whose button
 * is being reenabled. Can use most Player
 * based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Button - The logical button that is being reenabled.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * Applies an instantaneous change in velocity
 * to the movement of one or more players.
 */
declare const applyImpluse$1: (
/**
 * Player - The player or players whose velocity
 * will be changed. Can use most Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Direction - The unit direction in which
 * the impulse will be applied. This value
 * is normalized internally. Can use most Vector
 * based Value Syntax.
 * - `Type.Vector.`
 */
direction: string | number | any[],
/**
 * Speed - The magnitude of the change to the
 * velocities of the player or players. Can
 * use most Number based Value Syntax.
 * - `Type.Number.`
 */
speed: string | number | any[],
/**
 * Relative - Specifies whether the direction
 * is relative to world coordinates or the
 * local coordinates of the player or players.
 * - `Type.Relative.`
 */
relative: string | number | any[],
/**
 * To World - Relative to the world’s coordinate system.
 * - `Type.Motion.`
 */
motion: string | number | any[]
) => string;

/**
 * Displays a large message above the reticle
 * that is visible to specific players.
 */
declare const bigMessage$1: (
/**
 * Visible to - One or more players who will
 * see the message. Can use most Value Syntax
 * to select multiple players to specify.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * Header - The message to be displayed. Can
 * use most String based Value Syntax to specify.
 * - `Type.String.`
 */
header: string | number | any[]
) => string;

/**
 * Gradually modifies the value of a global
 * variable at a specific rate. (A global variable
 * is a variable that belongs to the game itself.)
 */
declare const chaseGlobalVariableAtRate$1: (
/**
 * Variable - The variable the action will
 * manipulate. Can use most Variable based Value Syntax.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * Destination - The value that the global
 * variable will eventually reach. The type
 * of this value may be either a number or
 * a vector, through the variable’s existing
 * value must be of the same type before the
 * chase begins. Can use most Number or Vector
 * based Value Syntax to specify.
 * - `Type.DestinationParam.`
 */
destination: string | number | any[],
/**
 * Player - The player whose variable will
 * gradually change. If multiple players are
 * provided, each of their variables will change independently.
 * - `Type.Number.`
 */
rate: string | number | any[],
/**
 * Visible to - One or more players who will
 * be able to see the icon. Can use most Value
 * Syntax to select one or multiple players.
 * - `Type.Reevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Gradually modifies the value of a global
 * variable over time. (A global variable is
 * a variable that belongs to the game itself.)
 */
declare const chaseGlobalVariableOverTime$1: (
/**
 * Variable - The variable the action will
 * manipulate. Can use most Variable based Value Syntax.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * Destination - The value that the global
 * variable will eventually reach. The type
 * of this value may be either a number or
 * a vector, through the variable’s existing
 * value must be of the same type before the
 * chase begins. Can use most Number or Vector
 * based Value Syntax to specify.
 * - `Type.DestinationParam.`
 */
destination: string | number | any[],
/**
 * Destination - The value that the player
 * variable will eventually reach. The type
 * of this value may be either a number or
 * a vector, through the variable’s existing
 * value must be of the same type before the
 * chase begins. Can use most Number or Vector
 * based Value Syntax to specify.
 * - `Type.Number.`
 */
duration: string | number | any[],
/**
 * Visible to - One or more players who will
 * be able to see the icon. Can use most Value
 * Syntax to select one or multiple players.
 * - `Type.Reevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Gradually modifies the value of a player
 * variable at a specific rate. (A player variable
 * is a variable that belongs to a specific player.)
 */
declare const chasePlayerVariableAtRate$1: (
/**
 * Player - The player whose variable will
 * gradually change. If multiple players are
 * provided, each of their variables will change independently.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Rate - The amount of change that will happen
 * to the variable’s value each second. Can
 * use most Number based Value Syntax to specify.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * Variable - The variable the action will
 * manipulate. Can use most Variable based Value Syntax.
 * - `Type.DestinationParam.`
 */
destination: string | number | any[],
/**
 * Player - The player whose variable will
 * gradually change. If multiple players are
 * provided, each of their variables will change independently.
 * - `Type.Number.`
 */
rate: string | number | any[],
/**
 * Visible to - One or more players who will
 * be able to see the icon. Can use most Value
 * Syntax to select one or multiple players.
 * - `Type.Reevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Gradually modifies the value of a player
 * variable over time. (A player variable is
 * a variable that belongs to a specific player.)
 */
declare const chasePlayerVariableOverTime$1: (
/**
 * Player - The player whose variable will
 * gradually change. If multiple players are
 * provided, each of their variables will change independently.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Reevaluation - Specifies which of this action’s
 * inputs will be continuously reevaluated.
 * This action will keep asking for and using
 * new values from reevaluated inputs. You
 * can specify a Destination and Duration or nothing.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * Variable - The variable the action will
 * manipulate. Can use most Variable based Value Syntax.
 * - `Type.DestinationParam.`
 */
destination: string | number | any[],
/**
 * Destination - The value that the player
 * variable will eventually reach. The type
 * of this value may be either a number or
 * a vector, through the variable’s existing
 * value must be of the same type before the
 * chase begins. Can use most Number or Vector
 * based Value Syntax to specify.
 * - `Type.Number.`
 */
duration: string | number | any[],
/**
 * Visible to - One or more players who will
 * be able to see the icon. Can use most Value
 * Syntax to select one or multiple players.
 * - `Type.Reevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Clears a status that was applied from a
 * set status action from one or more players.
 */
declare const clearStatus$1: (
/**
 * Player - The player or players from whom
 * the status will be removed. Can use most
 * Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Status - The Status to be removed from the
 * player or players. Values include Hacked,
 * Burning, Knocked Down, Asleep, Frozen, Unkillable,
 * Invincible, Phased Out, Rooted, or Stunned.
 * - `Type.Status.`
 */
status: string | number | any[]
) => string;

/**
 * Causes one or more players to use an emote,
 * voice line, or other equipped communication.
 */
declare const communicate$1: (
/**
 * Player - The player or players to perform
 * the communication. Can use most Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Type - The type of communication. Can use
 * any equipped emote, equipped voice line,
 * or any other communication effect.
 * - `Type.Communication.`
 */
type: string | number | any[]
) => string;

/**
 * Creates an in-world beam effect entity.
 * This effect entity will persist until destroyed.
 * To obtain a reference to this entity,
 * use the last created entity value.
 * This action will fail if too many entities have been created.
 */
declare const createBeamEffect$1: (
/**
 * One or more players who will be able to see the effect.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * The type of effect to be created.
 * - `Type.Beam.`
 */
beamType: string | number | any[],
/**
 * The effect's start position. If this value is a player,
 * then the effect will move along with the player.
 * therwise, the value is interpreted as a position in the world.
 * - `Type.Vector.`
 */
startPosition: string | number | any[],
/**
 * The effect's end position. If this value is a player,
 * then the effect will move along with the player.
 * Otherwise, the value is interpreted as a position in the world.
 * - `Type.Vector.`
 */
endPosition: string | number | any[],
/**
 * The color of the beam effect to be created.
 * If a particular team is chosen, The effect will either
 * be red or blue, depending on whether the team hostile to viewer.
 * Does not apply to sound effects. Only the 'Good'
 * and 'Bad' beam effects can have color applied.
 * - `Type.Color.`
 */
color: string | number | any[],
/**
 * Specifies which of this action's inputs will be
 * continuously reevaluated. The effect will keep asking
 * for and using new values from reevaluated inputs.
 * - `Type.BeamReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Adds a new bot to the specified slot on the
 * specified team so long as the slot is available.
 * This bot will only move, fire or use
 * abilities if executing workshop actions.
 */
declare const createDummyBot$1: (
/**
 * The hero that the bot will be. If more than
 * one hero is provided, One will be chosen at random.
 * - `Type.Hero.`
 */
hero: string | number | any[],
/**
 * The team on which to create the bot, The 'All'
 * option only works in free-for-all game modes, will the
 * 'Team' options only work in team-based game modes.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * The player slot which will receive the bot
 * (-1 for first available slot).
 * Up to 6 bots may be added to each team,
 * or 12 bots to the free-for-all team,
 * regardless of lobby settings.
 * - `Type.SlotRange.`
 */
slot: string | number | any[],
/**
 * The initial position where the bot will appear.
 * - `Type.Vector.`
 */
position: string | number | any[],
/**
 * The initial direction that the bot will face.
 * - `Type.Vector.`
 */
facing: string | number | any[]
) => string;

/**
 * Creates an in-world effect entity. This
 * effect entity will persist until destroyed,
 * to obtain a reference to this entity, use
 * the last created entity value. This action
 * will fail if too many entities have been created.
 */
declare const createEffect$1: (
/**
 * Visible to - One or more players who will
 * be able to see the effect. Can use most
 * Value Syntax to select one or multiple players.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * Color - The color of the effect to be created.
 * IF a particular team is chosen, the effect
 * will either be red or blue, depending on
 * whether the team is hostile to the viewer.
 * Does not apply to sound effects. (Sphere,
 * Light Shaft, Orb, Ring, Cloud, Sparkles,
 * Good Aura, Bad Aura, Energy Sound, Pick-Up
 * Sound, Good Aura Sound, Bad Aura Sound,
 * Sparkles Sound, Smoke Sound, Decal Sound, Beacon Sound)
 * - `Type.Effect.`
 */
type: string | number | any[],
/**
 * Position - The effect’s position. If this
 * value is a player, then the effect will
 * move along with the player, otherwise, the
 * value is interpreted as a position in the
 * world. Can use most Player or Vector based
 * Value Syntax. (Sphere, Light Shaft, Orb,
 * Ring, Cloud, Sparkles, Good Aura, Bad Aura,
 * Energy Sound, Pick-Up Sound, Good Aura Sound,
 * Bad Aura Sound, Sparkles Sound, Smoke Sound,
 * Decal Sound, Beacon Sound)
 * - `Type.Color.`
 */
color: string | number | any[],
/**
 * Radius - The effect’s radius in meters.
 * Sound effects have their volume affected
 * instead. (Sphere, Light Shaft, Orb, Ring,
 * Cloud, Sparkles, Good Aura, Bad Aura, Energy
 * Sound, Pick-Up Sound, Good Aura Sound, Bad
 * Aura Sound, Sparkles Sound, Smoke Sound,
 * Decal Sound, Beacon Sound)
 * - `Type.Vector.`
 */
position: string | number | any[],
/**
 * Reevaluation - Specifies which of this action’s
 * inputs will be continuously reevaluated,
 * the effect will keep asking for and using
 * new values from reevaluated inputs.
 * - `Type.Number.`
 */
radius: string | number | any[],
/**
 * Visible to - One or more players who will
 * be able to see the icon. Can use most Value
 * Syntax to select one or multiple players.
 * - `Type.EffectReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Creates HUD text visible to specific players
 * at specific location on the screen. This
 * text will persist until destroyed. To obtain
 * a reference to this text, use the last text
 * ID value. This action will fail if too many
 * text elements have been created.
 */
declare const createHudText$1: (
/**
 * Header - The header text to be displayed
 * (can be blank). Can use most String based
 * Value Syntax to populate.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * Subheader - The subheader text to be displayed
 * (can be blank). Can use most String based
 * Value Syntax to populate.
 * - `Type.String.`
 */
header: string | number | any[],
/**
 * Text - The body text to be displayed (can
 * be blank). Can use most String based Value
 * Syntax to populate.
 * - `Type.StringParam.`
 */
subHeader: string | number | any[],
/**
 * Location - The location on the screen where
 * text will appear. You can choose left, top, or right.
 * - `Type.StringParam.`
 */
text: string | number | any[],
/**
 * Sort Order - The Sort Order of the text
 * relative to other text in the same location.
 * Text with a higher sort order will come
 * after text with a lower sort order. Can
 * use most Number based Value Syntax.
 * - `Type.Location.`
 */
location: string | number | any[],
/**
 * Header Color - The color of the Header text
 * to be created. If a particular team is chosen,
 * the effect will either be red or blue.
 * - `Type.Number.`
 */
sortOrder: string | number | any[],
/**
 * Subheader Color - The color of the Subheader
 * text to be created. If a particular team
 * is chosen, the effect will either be red or blue.
 * - `Type.Color.`
 */
headerColor: string | number | any[],
/**
 * Text Color - The color of the body text
 * to be created. If a particular team is chosen,
 * the effect will either be red or blue.
 * - `Type.Color.`
 */
subHeaderColor: string | number | any[],
/**
 * Reevaluation - Specifies which of this action’s
 * inputs will be continuously reevaluated,
 * the text will keep asking for and using
 * new values from reevaluated inputs.
 * - `Type.Color.`
 */
textColor: string | number | any[],
/**
 * Visible to - One or more players who will
 * be able to see the icon. Can use most Value
 * Syntax to select one or multiple players.
 * - `Type.HudTextReevaluation.`
 */
reevaluation: string | number | any[],
/**
 * Whether spectators can see the text or not.
 * - `Type.Spectators.`
 */
spectators: string | number | any[]
) => string;

/**
 * Creates an in-world entity. This icon entity
 * will persist until destroyed. To obtain
 * a reference to this entity, use the last
 * created entity value. This action will fail
 * if too many entities have been created.
 */
declare const createIcon$1: (
/**
 * Position - The icon’s position. If this
 * value is a player, then the icon will appear
 * above the player’s head, otherwise, the
 * value is interpreted as a position in the
 * world. Can use most Player or Vector based Value Syntax.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * Icon - The icon to be created. (Arrow: Down,
 * Arrow: Left, Arrow: Right, Arrow: Up, Asterisk,
 * Bolt, Checkmark, Circle, Club, Diamond,
 * Dizzy, Exclamation Mark, Eye, Fire, Flag,
 * Halo, Happy, Heart, Moon, No, Plus, Poison,
 * Poison 2, Question Mark, Radioactive, Recycle,
 * Ring Thick, Ring Thin, Sad, Skull, Spade,
 * Spiral, Stop, Trashcan, Warning, X)
 * - `Type.Vector.`
 */
position: string | number | any[],
/**
 * Reevaluation - Specifies which of this action’s
 * inputs will be continously reevaluated,
 * the icon will keep asking for and using
 * new values from reevaluated inputs. (Arrow:
 * Down, Arrow: Left, Arrow: Right, Arrow:
 * Up, Asterisk, Bolt, Checkmark, Circle, Club,
 * Diamond, Dizzy, Exclamation Mark, Eye, Fire,
 * Flag, Halo, Happy, Heart, Moon, No, Plus,
 * Poison, Poison 2, Question Mark, Radioactive,
 * Recycle, Ring Thick, Ring Thin, Sad, Skull,
 * Spade, Spiral, Stop, Trashcan, Warning,
 * X, Visible to and position, Position, Visible to, None)
 * - `Type.Icon.`
 */
icon: string | number | any[],
/**
 * Visible to - One or more players who will
 * be able to see the icon. Can use most Value
 * Syntax to select one or multiple players.
 * - `Type.IconReevaluation.`
 */
reevaluation: string | number | any[],
/**
 * Icon Color - The color of the icon to be
 * created. IF a particular team is chosen,
 * the icon will either be red or blue, depending
 * on whether the team is hostile to the viewer.
 * (Arrow: Down, Arrow: Left, Arrow: Right,
 * Arrow: Up, Asterisk, Bolt, Checkmark, Circle,
 * Club, Diamond, Dizzy, Exclamation Mark,
 * Eye, Fire, Flag, Halo, Happy, Heart, Moon,
 * No, Plus, Poison, Poison 2, Question Mark,
 * Radioactive, Recycle, Ring Thick, Ring Thin,
 * Sad, Skull, Spade, Spiral, Stop, Trashcan,
 * Warning, X, Visible to and position, Position,
 * Visible to, None)
 * - `Type.Color.`
 */
iconColor: string | number | any[],
/**
 * Show when offscreen - Should this icon still
 * appear even when it is behind you? Can use
 * most Boolean based Value Syntax to specify.
 * - `Type.Bool.`
 */
showWhenOffscreen: string | number | any[]
) => string;

/**
 * Creates in-world text visible to specific
 * players at specific position in the world.
 * This text will persist until destroyed.
 * To obtain a reference to this text, use
 * the last text ID value. This action will
 * fail if too many text elements have been created.
 */
declare const createInWorldText$1: (
/**
 * Visible to - One or more players who will
 * see the HUD text. Can use most Value Syntax
 * to select one or multiple players.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * Header - The header text to be displayed
 * (can be blank). Can use most String based
 * Value Syntax to populate.
 * - `Type.String.`
 */
header: string | number | any[],
/**
 * Position - The text’s position. If this
 * value is a player, then the text will appear
 * above the player’s head. Otherwise, the
 * value is interpreted as a position in the
 * world. Can use most Player or Vector based Value Syntax.
 * - `Type.Vector.`
 */
position: string | number | any[],
/**
 * Scale - The text’s scale. Can use most Number
 * based Value Syntax.
 * - `Type.Number.`
 */
scale: string | number | any[],
/**
 * Clipping - Specifies whether the text can
 * be seen through walls or is instead clipped.
 * - `Type.Clipping.`
 */
clipping: string | number | any[],
/**
 * Clip Against Surfaces - The text may be
 * partially or completely obscured by walls,
 * floors, ceilings, players, or other solid objects.
 * - `Type.InWorldTextReevaluation.`
 */
reevaluation: string | number | any[],
/**
 * Specifies the color of the in-world text to use.
 * - `Type.Color.`
 */
textColor: string | number | any[],
/**
 * Whether spectators can see the text or not.
 * - `Type.Spectators.`
 */
spectators: string | number | any[]
) => string;

/**
 * Applies instantaneous damage to one or more
 * players, possibly killing the players.
 */
declare const damage$1: (
/**
 * Player - The player or players who will
 * receive damage. Can use most Player based
 * Value Syntax to select one or multiple players.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Damager - The player who will receive credit
 * for the damage. A damager of null indicates
 * no player will receive credit. Can use most
 * Player based Value Syntax for this value.
 * - `Type.Player.`
 */
damager: string | number | any[],
/**
 * Amount - The amount of damage to apply.
 * This amount may be modified by buffs, debuffs,
 * or armor. Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
amount: string | number | any[]
) => string;

/**
 * Instantly ends the match in a draw. This
 * action has no effect in free-for-all modes.
 */
declare const declareMatchDraw$1: (


) => string;

/**
 * Instantly ends the match with the specific
 * player as the winner. This action only has
 * an effect in free-for-all modes.
 */
declare const declarePlayerVictory$1: (
/**
 * Player - The winning player. Can use most
 * Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Declare a team as the current round winner.
 * This only works in the control and elimination game modes.
 */
declare const declareRoundVictory$1: (
/**
 * Team - Round winning team. Can use most
 * Team based Value Syntax for this value.
 * - `Type.Team.`
 */
roundWinningTeam: string | number | any[]
) => string;

/**
 * Instantly ends the match with the specified
 * team as the winner. This action has no effect
 * in free-for-all modes.
 */
declare const declareTeamVictory$1: (
/**
 * Team - The winning team. Can use most Team
 * based Value Syntax for this value.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * Removes all dummy bots from the match.
 */
declare const destroyAllDummyBot$1: (


) => string;

/**
 * Destroys all effect entities created by create effect.
 */
declare const destroyAllEffects$1: (


) => string;

/**
 * Destroys all hud text that was created by
 * the create hud text action.
 */
declare const destroyAllHudText$1: (


) => string;

/**
 * Destroys all icon entities created by create icon.
 */
declare const destroyAllIcons$1: (


) => string;

/**
 * Destroys all in-world text created by the
 * create in-world effect.
 */
declare const destroyAllInWorldText$1: (


) => string;

/**
 * Removes the specified dummy bot from the match.
 */
declare const destroyDummyBot$1: (
/**
 * The team to remove the dummy bot from. The 'All'
 * option only works in free-for-all game modes,
 * while the 'team' options only work in team-based game modes.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * The slot to remove the dummy bot from.
 * - `Type.SlotRange.`
 */
slot: string | number | any[]
) => string;

/**
 * Destroys an effect entity that was created
 * by create effect.
 */
declare const destroyEffect$1: (
/**
 * Entity - Specifies which effect entity to
 * destroy. This entity may be the last created
 * entity or a variable into which last created
 * entity was earlier stored.
 * - `Type.Entity.`
 */
entity: string | number | any[]
) => string;

/**
 * Destroys hud text that was created by create hud text.
 */
declare const destroyHudText$1: (
/**
 * Text ID - Specifies which hud text to destroy.
 * This ID may be last text ID or a variable
 * into which last text ID was earlier stored.
 * - `Type.Text.`
 */
textId: string | number | any[]
) => string;

/**
 * Destroys an icon entity that was created by create icon.
 */
declare const destroyIcon$1: (
/**
 * Text ID - Specifies which icon to destroy.
 * This ID may be last text ID or a variable
 * into which last create entity was earlier stored.
 * - `Type.Entity.`
 */
entity: string | number | any[]
) => string;

/**
 * Destroys in-world text that was created
 * by create in-world text.
 */
declare const destroyInWorldText$1: (
/**
 * Text Id - A Reference to the last piece
 * of text created by the event player (or
 * created at the global level) via the create
 * hud text or create in-world text action.
 * - `Type.Text.`
 */
textId: string | number | any[]
) => string;

/**
 * Disables game mode announcements from the
 * announcer until reenabled or the match ends.
 */
declare const disableBuiltInGameModeAnnouncer$1: (


) => string;

/**
 * Disables completion of the match from the
 * game mode itself, only allowing the match
 * to be completed by scripting commands.
 */
declare const disableBuiltInGameModeCompletion$1: (


) => string;

/**
 * Disables all game-mode music until reenabled
 * or the match ends.
 */
declare const disableBuiltInGameModeMusic$1: (


) => string;

/**
 * Disables automatic respawning for one or
 * more players, only allowing respawning by
 * scripting commands.
 */
declare const disableBuiltInGameModeRespawning$1: (
/**
 * Player - The player or players whose respawning
 * is affected. Can use most Player based Value
 * Syntax for this value.
 * - `Type.PlayersParam.`
 */
players: string | number | any[]
) => string;

/**
 * Disables changes to player and team scores
 * from the game mode itself, only allowing
 * scores to be changed by scripting commands.
 */
declare const disableBuiltInGameModeScoring$1: (


) => string;

/**
 * Undoes the effect of the enable death spectate
 * all players action for one or more players.
 */
declare const disableDeathSpectateAllPlayers$1: (
/**
 * Player - The player or players whose default
 * death spectate behavior is restored. Can
 * use most Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Undoes the effect of the enable death spectate
 * target hud action for one or more players.
 */
declare const disableDeathSpectateTargetHud$1: (
/**
 * Player - The player or players who will
 * revert to seeing their own HUD while death
 * spectating. Can use most Player based Value
 * Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Disables a logical button for one or more
 * players such that pressing it has no effect.
 */
declare const disallowButton$1: (
/**
 * Player - The player executing this rule,
 * as specified by the event. May be the same
 * as the attacker or victim. Can use most
 * Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Button - The logical button that is being disabled.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * Undoes the effect of the disable built-in
 * game mode announcer action.
 */
declare const enableBuiltInGameModeAnnouncer$1: (


) => string;

/**
 * Undoes the effect of the disable built-in
 * game mode completion action.
 */
declare const enableBuiltInGameModeCompletion$1: (


) => string;

/**
 * Undoes the effect of the disable built-in
 * game mode music action.
 */
declare const enableBuiltInGameModeMusic$1: (


) => string;

/**
 * Undoes the effect of the disable built-in
 * game mode respawning for one or more players.
 */
declare const enableBuiltInGameModeRespawning$1: (
/**
 * Player - The player or players whose respawning
 * is affected. Can use most Player based Value
 * Syntax for this value.
 * - `Type.PlayersParam.`
 */
players: string | number | any[]
) => string;

/**
 * Undoes the effect of the disable built-in
 * game mode scoring action.
 */
declare const enableBuiltInGameModeScoring$1: (


) => string;

/**
 * Allows one or more players to spectate all
 * players when dead, as opposed to only allies.
 */
declare const enableDeathSpectateAllPlayers$1: (
/**
 * Player - The player or players who will
 * be allowed to spectate all players. Can
 * use most Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Allows one or more players to see their
 * target’s HUD when dead instead of their
 * own while death spectating.
 */
declare const enableDeathSpectateTargetHud$1: (
/**
 * Player - The player or players who will
 * begin seeing their spectate’s target’s hud
 * while death spectating. Can use most Player
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Go to the assemble heroes phase of the game
 * mode. Only works if a game is in progress.
 */
declare const goToAssembleHeroes$1: (


) => string;

/**
 * Provides an instantaneous heal to one or
 * more players. This heal will not resurrect dead players.
 */
declare const heal$1: (
/**
 * Player - The player or players whose health
 * will be restored. Can use most Player based
 * Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Player - One or more players who will receive
 * the heal over time. Can use most Player
 * based Value Syntax.
 * - `Type.AssisterParam.`
 */
healer: string | number | any[],
/**
 * Amount - The amount of healing to apply.
 * This amount may be modified by buffs or
 * debuffs, healing is capped by each player’s
 * max health. Can use most Number based Value
 * Syntax for this value.
 * - `Type.Number.`
 */
amount: string | number | any[]
) => string;

/**
 * Instantly kills one or more players.
 */
declare const kill$1: (
/**
 * Player - The player or players who will
 * be killed. Can use most Player based Value
 * Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Killer - The player who will receive credit
 * for the kill. A killer of null indicates
 * no player will receive credit. Can use most
 * Player based Value Syntax for this value.
 * - `Type.AssisterParam.`
 */
killer: string | number | any[]
) => string;

/**
 * Restarts the action list from the beginning.
 * To prevent an infinite loop, a wait action
 * must execute between the start of the action
 * list and this action.
 */
declare const loop$1: (


) => string;

/**
 * Restarts the action list from the beginning
 * if this action’s condition evaluates to
 * true. If it does not, execution continues
 * with the next action. To prevent an infinite
 * loop, a wait action must execute between
 * the start of the action list and this action.
 */
declare const loopIf$1: (
/**
 * Condition - Specifies whether the loop will
 * occur. Can use most Conditional based Value
 * Syntax for this value.
 * - `Type.Bool.`
 */
condition: string | number | any[]
) => string;

/**
 * Restarts the action list from the beginning
 * if at least one condition in the condition
 * list is false. If all conditions are true,
 * execution continues with the next action.
 * To prevent an infinite loop, a wait action
 * must execute between the start of the action
 * list and this action.
 */
declare const loopIfConditionIsFalse$1: (


) => string;

/**
 * Restarts the action list from the beginning
 * if all conditions in the condition list
 * is true. If any are false, execution continues
 * with the next action. To prevent an infinite
 * loop, a wait action must execute between
 * the start of the action list and this action.
 */
declare const loopIfConditionIsTrue$1: (


) => string;

/**
 * Modifies the value of a global variable,
 * which is a variable that belongs to the game itself.
 */
declare const modifyGlobalVariable$1: (
/**
 * Variable - Variable specified by a single
 * alphabetic letter (A through Z).
 * - `Type.IGlobal.`
 */
variable: string | number | any[],
/**
 * Variable - Variable specified by a single
 * alphabetic letter (A through Z).
 * - `Type.Variable.`
 */
operation: string | number | any[],
/**
 * Index - The index of the array to modify.
 * If the index is beyond the end of the array,
 * the array is extended with new elements
 * given a value of 0.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * Modifies the value of a global variable
 * at an index, which is a variable that belongs
 * to the game itself.
 */
declare const modifyGlobalVariableAtIndex$1: (
/**
 * Variable - Variable specified by a single
 * alphabetic letter (A through Z).
 * - `Type.IGlobal.`
 */
variable: string | number | any[],
/**
 * Player - The player or players whose variable
 * will be set. If multiple players are provided,
 * each of their variables will be set. Can
 * use most Player based Value Syntax for this value.
 * - `Type.Number.`
 */
index: string | number | any[],
/**
 * Variable - Variable specified by a single
 * alphabetic letter (A through Z).
 * - `Type.Variable.`
 */
operation: string | number | any[],
/**
 * Index - The index of the array to modify.
 * If the index is beyond the end of the array,
 * the array is extended with new elements
 * given a value of 0.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * Modifies the score (kill count) of one or
 * more players. This action only has an effect
 * in free-for-all modes.
 */
declare const modifyPlayerScore$1: (
/**
 * Player - The player whose score will change.
 * Can use most Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Team - The team whose score will be changed.
 * Can use most Player based Value Syntax for this value.
 * - `Type.Number.`
 */
score: string | number | any[]
) => string;

/**
 * Modifies the value of a player variable,
 * which is a variable that belongs to a specific player.
 */
declare const modifyPlayerVariable$1: (
/**
 * Variable - Variable specified by a single
 * alphabetic letter (A through Z).
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Operation - The way in which the variable’s
 * value will be changed. Options include standard
 * arithmetic operations as well as array operations
 * for appending and removing values.
 * - `Type.IPlayer.`
 */
variable: string | number | any[],
/**
 * Variable - Variable specified by a single
 * alphabetic letter (A through Z).
 * - `Type.Variable.`
 */
operation: string | number | any[],
/**
 * Value - The value used for the modification.
 * For arithmetic operations, this is the second
 * of two operands, with the other being the
 * variable’s existing value. For array operations,
 * this is the value to append or remove. Various
 * Value Syntax can be used.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * Modifies the value of a player variable
 * at an index, which is a variable that belongs
 * to a specific player.
 */
declare const modifyPlayerVariableAtIndex$1: (
/**
 * Operation - The way in which the variable’s
 * value will be changed. Options include standard
 * arithmetic operations as well as array operations
 * for appending and removing values.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Value - The value used for the modification.
 * For arithmetic operations, this is the second
 * of two operands, with the other being the
 * variable’s existing value. For array operations,
 * this is the value to append or remove. Various
 * Value Syntax can be used.
 * - `Type.IPlayer.`
 */
variable: string | number | any[],
/**
 * Player - The player or players whose variable
 * will be set. If multiple players are provided,
 * each of their variables will be set. Can
 * use most Player based Value Syntax for this value.
 * - `Type.Number.`
 */
index: string | number | any[],
/**
 * Variable - Variable specified by a single
 * alphabetic letter (A through Z).
 * - `Type.Variable.`
 */
operation: string | number | any[],
/**
 * Index - The index of the array to modify.
 * If the index is beyond the end of the array,
 * the array is extended with new elements
 * given a value of 0.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * Modifies the score of one or both teams.
 * This action has not effect in free-for-all
 * modes or modes without a team score.
 */
declare const modifyTeamScore$1: (
/**
 * Score - The amount the score will increase
 * or decrease. If positive, the score will
 * increase. If negative, the score will decrease.
 * Can use most Number based Value Syntax for this value.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * Team - The team whose score will be changed.
 * Can use most Player based Value Syntax for this value.
 * - `Type.Number.`
 */
score: string | number | any[]
) => string;

/**
 * Pauses the match time, players, objective
 * logic, and game mode advancement criteria
 * are unaffected by the pause.
 */
declare const pauseMatchTime$1: (


) => string;

/**
 * Plays an effect at a position in the world.
 * The lifetime of this effect is short, so
 * it does not need to be updated or destroyed.
 */
declare const playEffect$1: (
/**
 * Visible to - One or more players who will
 * be able to see the effect. Can use most
 * Value Syntax to select one or multiple players.
 * - `Type.PlayersParam.`
 */
visibleTo: string | number | any[],
/**
 * Type - The type of the effect to be created.
 * (Good Explosion, Bad Explosion, Ring Explosion,
 * Good Pickup Effect, Bad Pickup Effect, Debuff
 * Impact Sound, Buff Impact Sound, Ring Explosion
 * Sound, Buff Explosion Sound, Explosion Sound)
 * - `Type.Play.`
 */
type: string | number | any[],
/**
 * Color - The color of the effect to be created.
 * IF a particular team is chosen, the effect
 * will either be red or blue, depending on
 * whether the team is hostile to the viewer.
 * (Good Explosion, Bad Explosion, Ring Explosion,
 * Good Pickup Effect, Bad Pickup Effect, Debuff
 * Impact Sound, Buff Impact Sound, Ring Explosion
 * Sound, Buff Explosion Sound, Explosion Sound)
 * - `Type.Color.`
 */
color: string | number | any[],
/**
 * Position - The effect’s position. If this
 * value is a player, then the effect will
 * move along with the player, otherwise, the
 * value is interpreted as a position in the
 * world. Can use most Player or Vector based
 * Value Syntax. (Good Explosion, Bad Explosion,
 * Ring Explosion, Good Pickup Effect, Bad
 * Pickup Effect, Debuff Impact Sound, Buff
 * Impact Sound, Ring Explosion Sound, Buff
 * Explosion Sound, Explosion Sound)
 * - `Type.Vector.`
 */
position: string | number | any[],
/**
 * Radius - The effect’s radius in meters.
 * Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
radius: string | number | any[]
) => string;

/**
 * Preemptively loads the specified hero or
 * heroes into memory using the skins of the
 * specified player or players, available memory
 * permitting. Useful whenever rapid hero changing
 * is possible and the next hero is known.
 */
declare const preloadHero$1: (
/**
 * Player - The player or players who will
 * begin preloading a hero or heroes. Only
 * one preload hero action will be active at
 * a time for a given player. Can use most
 * Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Hero - The hero or heroes to begin preloading
 * for the specified player or players. When
 * multiple heroes are specified in an array,
 * the Heroes towards the beginning of the
 * array are prioritized. Can use most Hero
 * based Value Syntax for this value.
 * - `Type.Hero.`
 */
hero: string | number | any[]
) => string;

/**
 * Forces one or more players to press a button
 * virtually for a single frame.
 */
declare const pressButton$1: (
/**
 * Player - The player or players for whom
 * virtual button input will be forced. Can
 * use most Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Button - The button to be pressed.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * Restores the list of heroes available to
 * one or more players to the list specified
 * by the game settings. If a player’s current
 * hero becomes unavailable, the player is
 * forced to choose a different hero and respawn
 * at an appropriate spawn location.
 */
declare const resetPlayerHeroAvailability$1: (
/**
 * Player - The player or players whose hero
 * list is being reset. Can use most Player
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Respawns one or more players at an appropriate
 * spawn location with full health, even if
 * they were already alive.
 */
declare const respawn$1: (
/**
 * Player - The player or players to respawn.
 * Can use most Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Instantly resurrects one or more players
 * at the location they died with no transition.
 */
declare const resurrect$1: (
/**
 * Player - The player or players who will
 * be resurrected. Can use most Player based
 * Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Enables or disables ability 1 for one or more players.
 */
declare const setAbility1Enabled$1: (
/**
 * Player - The player or players whose access
 * to ability 1 is affected. Can use most Player
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Enabled - Specifies whether the player or
 * players are able to use ability 1. Expects
 * a Boolean Value such as True, False, or
 * Compare. Can use most Boolean based Value Syntax.
 * - `Type.Bool.`
 */
enabled: string | number | any[]
) => string;

/**
 * Enables or disables ability 2 for one or more players.
 */
declare const setAbility2Enabled$1: (
/**
 * Player - The player or players whose access
 * to ability 2 is affected. Expects a Boolean
 * Value such as True, False, or Compare. Can
 * use most Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Enabled - Specifies whether the player or
 * players are able to use ability 2. Can use
 * most Boolean based Value Syntax.
 * - `Type.Bool.`
 */
enabled: string | number | any[]
) => string;

/**
 * Sets the aim speed of one or more players
 * to a percentage of their normal aim speed.
 */
declare const setAimSpeed$1: (
/**
 * Player - The player or players whose aim
 * will be set. Can use most Player based Value
 * Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Turn Speed Percent - The percentage of normal
 * aim speed to which the player or players
 * will set their aim speed. Can use most Number
 * based Value Syntax.
 * - `Type.Number.`
 */
turnSpeedPercent: string | number | any[]
) => string;

/**
 * Sets the damage dealt to one or more players
 * of a percentage of their raw damage dealt.
 * NOTE: Negative values do not heal enemies.
 * Damage values of 0 or lower will not trigger script events.
 */
declare const setDamageDealt$1: (
/**
 * Player - The player or players whose damage
 * dealt will be set. Can use most Player based
 * Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Damage Dealt Percent - The percentage of
 * raw damage dealt to which the player or
 * players will set their damage dealt. Can
 * use most Number based Value Syntax.
 * - `Type.Number.`
 */
damageDealtPercent: string | number | any[]
) => string;

/**
 * Sets the damage received of one or more
 * players to a percentage of their raw damage
 * received. NOTE: Negative values do not heal
 * enemies. Damage values of 0 or lower will
 * not trigger script events.
 */
declare const setDamageReceived$1: (
/**
 * Player - The player or players whose damage
 * received will be set. Can use most Player
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Damage Received Percent - The percentage
 * of raw damage received to which the player
 * or players will set their damage received.
 * Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
damageReceivedPercent: string | number | any[]
) => string;

/**
 * Sets the facing of one or more players to
 * the specified direction.
 */
declare const setFacing$1: (
/**
 * Player - The player or players whose facing
 * will be set. Can use most Player based Value
 * Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Direction - The unit direction in which
 * the player or players will face. This value
 * is normalized internally. Can use most Vector
 * based Value Syntax.
 * - `Type.Vector.`
 */
direction: string | number | any[]
) => string;

/**
 * Stores a value into a global variable, which
 * a variable that belongs to the game itself.
 */
declare const setGlobalVariable$1: (
/**
 * Variable - Specifies which Global Variable
 * to store the value into. Specified by a
 * single alphabetic letter (A through Z).
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * Player - The player or players whose variable
 * will be set. If multiple players are provided,
 * each of their variables will be set. Can
 * use most Player based Value Syntax for this value.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * Finds or creates an array on a global variable,
 * which is a variable that belongs to the
 * game itself, then stores a value in the
 * array at the specified index.
 */
declare const setGlobalVariableAtIndex$1: (
/**
 * Index - The index of the array to modify.
 * If the index is beyond the end of the array,
 * the array is extended with the new elements
 * given a value of zero. Can use most Number
 * based Value Syntax with this value.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * Player - The player or players whose variable
 * will be set. If multiple players are provided,
 * each of their variables will be set. Can
 * use most Player based Value Syntax for this value.
 * - `Type.Number.`
 */
index: string | number | any[],
/**
 * Value - The value that will be stored into
 * the array. Nearly any Value syntax can be
 * used, however it is most common with Number based syntax.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * Sets the movement gravity for one or more
 * players to a percentage of regular movement gravity.
 */
declare const setGravity$1: (
/**
 * Player - The player or players whose healing
 * dealt will be set. Can use most Player based
 * Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Healing Dealt Percent - The percentage of
 * raw healing dealt to which the player or
 * players will set their healing dealt. Can
 * use most Number based Value Syntax.
 * - `Type.Number.`
 */
gravityPercent: string | number | any[]
) => string;

/**
 * Sets the healing dealt to one or more players
 * of a percentage of their raw damage dealt.
 * NOTE: Negative values do not damage enemies.
 * Healing values of 0 or lower will not trigger script events.
 */
declare const setHealingDealt$1: (
/**
 * Player - The player or players whose healing
 * dealt will be set. Can use most Player based
 * Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Healing Dealt Percent - The percentage of
 * raw healing dealt to which the player or
 * players will set their healing dealt. Can
 * use most Number based Value Syntax.
 * - `Type.Number.`
 */
healingDealtPercent: string | number | any[]
) => string;

/**
 * Sets the healing received of one or more
 * players to a percentage of their raw healing
 * received. NOTE: Negative values do not damage
 * enemies. Healing values of 0 or lower will
 * not trigger script events.
 */
declare const setHealingReceived$1: (
/**
 * Player - The player or players whose healing
 * received will be set. Can use most Player
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Healing Received Percent - The percentage
 * of raw healing received to which the player
 * or players will set their healing received.
 * Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
healingReceivedPercent: string | number | any[]
) => string;

/**
 * Causes one or more players to become invisible
 * to either all other players or just enemies.
 */
declare const setInvisible$1: (
/**
 * Player - The player or players who will
 * become invisible. Can use most Player based
 * Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Invisible to - Specifies for whom the player
 * or players will be invisible. Can be set
 * to All, Enemies, or None.
 * - `Type.InvisibleTo.`
 */
invisibleTo: string | number | any[]
) => string;

/**
 * Sets the current match time (which is visible
 * at the top of the screen). This can be used
 * to shorten or extend the duration of a match
 * or to change the duration of assemble heroes or setup.
 */
declare const setMatchTime$1: (
/**
 * Time - The match time in seconds. Can use
 * most Number based Value Syntax for this value.
 * - `Type.Number.`
 */
time: string | number | any[]
) => string;

/**
 * Sets the max health of one or more players
 * as a percentage of their raw max health.
 * This action will ensure that a player’s
 * current health will not exceed the new max health.
 */
declare const setMaxHealth$1: (
/**
 * Player - The player or players whose max
 * health will be set. Can use most Player
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Player - The player or players whose move
 * speed will be set. Can use most Player based
 * Value Syntax for this value.
 * - `Type.Number.`
 */
healthPercent: string | number | any[]
) => string;

/**
 * Sets the move speed of one or more players
 * to a percentage of their raw move speed.
 */
declare const setMoveSpeed$1: (
/**
 * Health Percent - The percentage of raw move
 * speed to which the player or players will
 * set their move speed. Can use most Number
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Player - The player or players whose move
 * speed will be set. Can use most Player based
 * Value Syntax for this value.
 * - `Type.Number.`
 */
moveSpeedPercent: string | number | any[]
) => string;

/**
 * Sets the text at the top center of the screen
 * that normally describes the objective to
 * a message visible to specific players.
 */
declare const setObjectiveDescription$1: (
/**
 * Visible to - One or more players who will
 * see the message. Can use most Player based Value Syntax.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * Header - The message to be displayed. Can
 * use most String based Value Syntax to specify.
 * - `Type.String.`
 */
header: string | number | any[],
/**
 * Reevaluation - Specifies which of this action’s
 * inputs will be continously reevaluated.
 * The message will keep asking for and using
 * new values from reevaluated inputs. Can
 * choose “Visible to and String” or “String”
 * - `Type.ObjectiveDescriptionReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Sets the list of heroes available to one
 * or more players. If a player’s current hero
 * becomes unavailable, the player is forced
 * to choose a different hero and respawn at
 * an appropriate spawn location.
 */
declare const setPlayerAllowedHeroes$1: (
/**
 * Player - The player or players whose hero
 * list is being set. Can use most Player based
 * Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Hero - The hero or heroes that will be available.
 * If no heroes are provided, the action has
 * no effect. Can use most Hero based Value
 * Syntax for this value including compatible Arrays.
 * - `Type.Hero.`
 */
hero: string | number | any[]
) => string;

/**
 * Sets the score (kill count) of one or more
 * players. This action only has an effect
 * in free-for-all modes.
 */
declare const setPlayerScore$1: (
/**
 * Player - The player or players whose score
 * will be set. Can use most Player based Value
 * Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Team - The team or teams whose score will
 * be set. Can use most Team based Value Syntax for this value.
 * - `Type.Number.`
 */
score: string | number | any[]
) => string;

/**
 * Stores a value into a player variable, which
 * is a variable that belongs to a specific player.
 */
declare const setPlayerVariable$1: (
/**
 * Variable - Specifies which Player Variable
 * to store the value into. Specified by a
 * single alphabetic letter (A through Z).
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Value - The value that will be stored. Nearly
 * any Value syntax can be used, however it
 * is most common with Number based syntax.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * Player - The player or players whose variable
 * will be set. If multiple players are provided,
 * each of their variables will be set. Can
 * use most Player based Value Syntax for this value.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * Finds or creates an array on a player variable,
 * which is a variable that belongs to a specific
 * player, then stores a value in the array
 * at the specified index.
 */
declare const setPlayerVariableAtIndex$1: (
/**
 * Variable - Specifies which player variable’s
 * value is the array to modify, if the variable’s
 * value is not an array, then its value becomes
 * an empty array. Specified by a single alphabetic
 * letter (A through Z).
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Index - The index of the array to modify.
 * If the index is beyond the end of the array,
 * the array is extended with the new elements
 * given a value of zero. Can use most Number
 * based Value Syntax with this value.
 * - `Type.Variable.`
 */
variable: string | number | any[],
/**
 * Player - The player or players whose variable
 * will be set. If multiple players are provided,
 * each of their variables will be set. Can
 * use most Player based Value Syntax for this value.
 * - `Type.Number.`
 */
index: string | number | any[],
/**
 * Value - The value that will be stored into
 * the array. Nearly any Value syntax can be
 * used, however it is most common with Number based syntax.
 * - `Type.Value.`
 */
value: string | number | any[]
) => string;

/**
 * Enables or disables primary fire for one
 * or more players.
 */
declare const setPrimaryFireEnabled$1: (
/**
 * Player - The player or players whose access
 * to primary fire is affected. Can use most
 * Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Enabled - Specifies whether the player or
 * players are able to use primary fire. Expects
 * a Boolean Value such as True, False, or
 * Compare. Can use most Boolean based Value Syntax.
 * - `Type.Bool.`
 */
enabled: string | number | any[]
) => string;

/**
 * Sets the projectile gravity for one or more
 * players to a percentage of regular projectile gravity.
 */
declare const setProjectileGravity$1: (
/**
 * Player - The player or players whose projectile
 * gravity will be set. Can use most Player
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Projectile Gravity Percent - The percentage
 * of the regular projectile gravity to which
 * the player or players will set their personal
 * projectile gravity. Can use most Number
 * based Value Syntax for this value.
 * - `Type.Number.`
 */
projectileGravityPercent: string | number | any[]
) => string;

/**
 * Sets the projectile speed for one or more
 * players to a percentage of regular projectile speed.
 */
declare const setProjectileSpeed$1: (
/**
 * Player - The player or players whose projectile
 * speed will be set. Can use most Player based
 * Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Projectile Speed Percent - The percentage
 * of the regular projectile speed to which
 * the player or players will set their personal
 * projectile speed. Can use most Number based
 * Value Syntax for this value.
 * - `Type.Number.`
 */
projectileSpeedPercent: string | number | any[]
) => string;

/**
 * Sets the duration between death and respawn
 * for one or more players that are already
 * dead when this action is executed, the change
 * takes effect on their next death.
 */
declare const setRespawnMaxTime$1: (
/**
 * Player - The player or players whose respawn
 * max time will is being defined. Can use
 * most Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Time - The duration between death and respawn
 * in seconds. Can use most Number based Value
 * Syntax for this value.
 * - `Type.Number.`
 */
time: string | number | any[]
) => string;

/**
 * Enables or disables secondary fire for one
 * or more players.
 */
declare const setSecondaryFireEnabled$1: (
/**
 * Player - The player or players whose access
 * to secondary fire is affected. Can use most
 * Player based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Enabled - Specifies whether the player or
 * players are able to use secondary fire.
 * Expects a Boolean Value such as True, False,
 * or Compare. Can use most Boolean based Value Syntax.
 * - `Type.Bool.`
 */
enabled: string | number | any[]
) => string;

/**
 * Sets the simulation rate for the entire
 * game, including all players, projectiles,
 * effects, and game mode logic.
 */
declare const setSlowMotion$1: (
/**
 * Speed Percent - The simulation rate as a
 * percentage of normal speed. Only rates up
 * to 100% are allowed. Can use most Number
 * based Value Syntax for this value.
 * - `Type.Number.`
 */
speedPercent: string | number | any[]
) => string;

/**
 * Applies a status to one or more players.
 * This status will remain in effect for the
 * specified duration or until it is cleared
 * by the clear status action.
 */
declare const setStatus$1: (
/**
 * Player - The player or players to whom the
 * status will be applied. Can use most Player
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Assister - Specifies a player to be awarded
 * assist credit should the affected player
 * or players be killed while the status is
 * in effect. An assister of null indicates
 * no player will receive credit. Can use most
 * Player based Value Syntax for this value.
 * - `Type.AssisterParam.`
 */
assister: string | number | any[],
/**
 * Status - The Status to be applied from the
 * player or players. These behave similarly
 * to statuses applied from hero abilities.
 * Values include Hacked, Burning, Knocked
 * Down, Asleep, Frozen, Unkillable, Invincible,
 * Phased Out, Rooted, or Stunned.
 * - `Type.Status.`
 */
status: string | number | any[],
/**
 * Duration - The duration of the status effect
 * in seconds. To have a status that lasts
 * until a clear status action is executed,
 * proivide an arbitrarily long duration such
 * as 9999. Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
duration: string | number | any[]
) => string;

/**
 * Sets the score for one or both teams. This
 * action has no effect in free-for-all modes
 * or modes without a team score.
 */
declare const setTeamScore$1: (
/**
 * Score - The score that will be set. Can
 * use most Number based Value Syntax for this value.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * Team - The team or teams whose score will
 * be set. Can use most Team based Value Syntax for this value.
 * - `Type.Number.`
 */
score: string | number | any[]
) => string;

/**
 * Enables or disables the ultimate ability
 * of one or more players.
 */
declare const setUltimateAbilityEnabled$1: (
/**
 * Player - The player or players whose ultimate
 * charge will be set. Can use most Player
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Enabled - Specifies whether the player or
 * players are able to use their ultimate ability.
 * Expects a Boolean Value such as True, False,
 * or Compare. Can use most Boolean based Value Syntax.
 * - `Type.Bool.`
 */
enabled: string | number | any[]
) => string;

/**
 * Sets the ultimate charge or one or more
 * players as a percentage of maximum charge.
 */
declare const setUltimateCharge$1: (
/**
 * Player - The player or players whose ultimate
 * charge will be set. Can use most Player
 * based Value Syntax for this value.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Charge Percent - The percentage of maximum
 * charge. Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
chargePercent: string | number | any[]
) => string;

/**
 * Skips execution of a certain number of actions
 * in the action list.
 */
declare const skip$1: (
/**
 * Condition - Specifies whether the loop will
 * occur. Can use most Conditional based Value
 * Syntax for this value.
 * - `Type.Number.`
 */
numberOfActions: string | number | any[]
) => string;

/**
 * Skips execution of a certain number of actions
 * in the action list if this action’s condition
 * evaluates to true. If it does not, execution
 * continues with the next action.
 */
declare const skipIf$1: (
/**
 * Number of actions - The number of action
 * to skip, not including this action. Can
 * use most Number based Value Syntax.
 * - `Type.Bool.`
 */
condition: string | number | any[],
/**
 * Condition - Specifies whether the loop will
 * occur. Can use most Conditional based Value
 * Syntax for this value.
 * - `Type.Number.`
 */
numberOfActions: string | number | any[]
) => string;

/**
 * Displays a small message beneath the reticle
 * that is visible to specific players.
 */
declare const smallMessage$1: (
/**
 * Visible to - One or more players who will
 * see the message. Can use most Player based Value Syntax.
 * - `Type.Player.`
 */
visibleTo: string | number | any[],
/**
 * Header - The message to be displayed. Can
 * use most String based Value Syntax to specify.
 * - `Type.String.`
 */
header: string | number | any[]
) => string;

/**
 * Starts accelerating one or more players
 * in a specified location.
 */
declare const startAccelerating$1: (
/**
 * Player - The player or players that will
 * begin accelerating. Can use most Player
 * based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Direction - The unit direction in which
 * the acceleration will be applied. This value
 * is normalized internally. Can use most Vector
 * based Value Syntax to specify.
 * - `Type.Vector.`
 */
direction: string | number | any[],
/**
 * Rate - The rate of acceleration in meters
 * per second squared. This value may need
 * to be quite high in order to overcome gravity
 * and/or surface friction. Can use most Number
 * based Value Syntax.
 * - `Type.Number.`
 */
rate: string | number | any[],
/**
 * Max Speed - The speed at which acceleration
 * will stop for the player or players. It
 * may not be possible to reach this speed
 * due to gravity and/or surface friction.
 * Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
maxSpeed: string | number | any[],
/**
 * Relative - Specifies whether direction is
 * relavtive to the world coordinates or the
 * local coordinates of the player or players.
 * - `Type.Relative.`
 */
relative: string | number | any[],
/**
 * Player - The player or players who will
 * start turning. Can use most Player based Value Syntax.
 * - `Type.StartAcceleratingReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Places your camera at a location, facing a direction.
 */
declare const startCamera$1: (
/**
 * Player - The player executing this rule.
 * As specified by the event, may be the same
 * as the attacker or the victim. Can use most
 * Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Eye Position - The position of the camrea,
 * reevaluates continously. Can use most Vector
 * based Value Syntax to specify.
 * - `Type.Vector.`
 */
eyePosition: string | number | any[],
/**
 * Look at position - Where the camera looks
 * at, reevaluates continously. Can use most
 * Vector based Value Syntax to specify.
 * - `Type.Vector.`
 */
lookAtPosition: string | number | any[],
/**
 * Blend Speed - How fast to blend the camera
 * movement as positions change. 0 means do
 * not blend at all and just change positions
 * instantly. Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
blendSpeed: string | number | any[]
) => string;

/**
 * Starts modifying how much damage one or
 * more receivers will receive from one or
 * more damagers. A reference to this damage
 * modification can be obtained from the last
 * damage modification ID value. This action
 * will fail if too many damage modifications
 * have been started.
 */
declare const startDamageModification$1: (
/**
 * Damagers - The player or players whose outgoing
 * damage will be modified (when attacking
 * the receivers). Can use most Player based Value Syntax.
 * - `Type.PlayersParam.`
 */
receivers: string | number | any[],
/**
 * Damage Percent - The percentage of damage
 * that will apply to receivers when attacked
 * by damagers. Can use most Number based Value
 * Syntax to specify.
 * - `Type.PlayersParam.`
 */
damagers: string | number | any[],
/**
 * Reevaluation - Specifies which of this action’s
 * inputs will be continously reevaluated.
 * This action will keep asking for and using
 * new values from reevaluated inputs. Can
 * choose from “Receivers, Damagers, and Damage
 * Percent”, “Receivers and Damagers”, or “None”.
 * - `Type.Number.`
 */
damagePercent: string | number | any[],
/**
 * Player - The player or players who will
 * start turning. Can use most Player based Value Syntax.
 * - `Type.DamageModificationReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Starts an instance of damage over time,
 * this DOT will persist for the specified
 * duration or until stopped by script. To
 * obtain a reference to this DOT, use the
 * last damage over time to value.
 */
declare const startDamageOverTime$1: (
/**
 * Receivers - One or more players who will
 * receive the damage over time. Can use most
 * Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Damager - The player who will receive credit
 * for the damage. A damager of null indicates
 * no player will receive credit. Can use most
 * Player based Value Syntax.
 * - `Type.AssisterParam.`
 */
damager: string | number | any[],
/**
 * Duration - The duration of the damage over
 * time in seconds. To have a DOT that lasts
 * until stopped by script, provide an arbitrarily
 * long duration such as 9999. Can use most
 * Number based Value Syntax to specify.
 * - `Type.Number.`
 */
duration: string | number | any[],
/**
 * Damage Per Second - The damage per second
 * for the damage over time. Can use most Number
 * based Value Syntax to specify.
 * - `Type.Number.`
 */
damagePerSecond: string | number | any[]
) => string;

/**
 * Starts turning one or more players to face
 * the specified direction.
 */
declare const startFacing$1: (
/**
 * Direction - The unit direction in which
 * the player or players will eventually face.
 * Can use most Vector based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Turn Rate - The turn rate in degrees per
 * second. Can use most Number based Value
 * Syntax to specify.
 * - `Type.Vector.`
 */
direction: string | number | any[],
/**
 * Relative - Specifies whether direction is
 * relative to the world coordinates or the
 * local coordinates of the player or players.
 * - `Type.Number.`
 */
turnRate: string | number | any[],
/**
 * Reevaluation - Specifies which of this actions
 * inputs will be continously reevaluated.
 * This action will keep asking for and using
 * new values from reevaluated inputs. You
 * can choose from “Direction and Turn Rate” or “None”.
 * - `Type.Relative.`
 */
relative: string | number | any[],
/**
 * Player - The player or players who will
 * start turning. Can use most Player based Value Syntax.
 * - `Type.FacingReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Starts forcing one or more players to be
 * a specified hero and, if necessary, respawns
 * them immediately in their current locaiton.
 * This will be the only hero available to
 * the player or players until, the stop forcing
 * player to be hero action is executed.
 */
declare const startForcingPlayerToBeHero$1: (
/**
 * Player - The player or players who will
 * be forced to be a specified hero. Can use
 * most Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Hero - The hero that the player or players
 * will be forced to be. Can use most Hero
 * based Value Syntax.
 * - `Type.Hero.`
 */
hero: string | number | any[]
) => string;

/**
 * Forces a team to spawn in a particular spawn
 * room, regardless of the sapwn room normally
 * used by the game mode. This action only
 * has an effect in Assault, Hybrid, and Payload Maps.
 */
declare const startForcingSpawnRoom$1: (
/**
 * Team - The team whose spawn room will be
 * forced. Can use most Team based Value Syntax.
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * Room - The number of the spawn room to be
 * forced. 0 is the first spawn room, 1 is
 * the second, and 2 is the third. If this
 * specified spawn room does not exist. Players
 * will use the normal spawn room. Can use
 * most Number based Value Syntax.
 * - `Type.Number.`
 */
room: string | number | any[]
) => string;

/**
 * Defines minimum and maximum movement input
 * values for one or more players. Possibly
 * forcing or preventing movement.
 */
declare const startForcingThrottle$1: (
/**
 * Player - The player or players whose movement
 * whill be forced or limited. Can use most
 * Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Min Forward - Sets the minimum run forward
 * amount. 0 allows the player or players to
 * stop while 1 forces full forward movement.
 * Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
minForward: string | number | any[],
/**
 * Max Forward - Sets the maximum run forward
 * amount. 0 allows the player or players to
 * stop while 1 forces full forward movement.
 * Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
maxForward: string | number | any[],
/**
 * Min Backward - Sets the minimum run backward
 * amount. 0 allows the player or players to
 * stop while 1 forces full forward movement.
 * Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
minBackward: string | number | any[],
/**
 * Max Backward - Sets the maximum run backward
 * amount. 0 allows the player or players to
 * stop while 1 forces full forward movement.
 * Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
maxBackward: string | number | any[],
/**
 * Min Sideways - Sets the minimum run sideways
 * amount. 0 allows the player or players to
 * stop while 1 forces full forward movement.
 * Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
minSideways: string | number | any[],
/**
 * Max Forward - Sets the maximum run sideways
 * amount. 0 allows the player or players to
 * stop while 1 forces full forward movement.
 * Can use most Number based Value Syntax.
 * - `Type.Number.`
 */
maxSideways: string | number | any[]
) => string;

/**
 * Starts an instance of damage over time,
 * this HOT will persist for the specified
 * duration or until stopped by script. To
 * obtain a reference to this HOT, use the
 * last damage over time to value.
 */
declare const startHealOverTime$1: (
/**
 * Healer - The player who will receive credit
 * for the heal. A damager of null indicates
 * no player will receive credit. Can use most
 * Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Player - One or more players who will receive
 * the heal over time. Can use most Player
 * based Value Syntax.
 * - `Type.AssisterParam.`
 */
healer: string | number | any[],
/**
 * Duration - The duration of the heal over
 * time in seconds. To have a HOT that lasts
 * until stopped by script, provide an arbitrarily
 * long duration such as 9999. Can use most
 * Number based Value Syntax to specify.
 * - `Type.Number.`
 */
duration: string | number | any[],
/**
 * Damage Per Second - The heal per second
 * for the heal over time. Can use most Number
 * based Value Syntax to specify.
 * - `Type.Number.`
 */
healingPerSecond: string | number | any[]
) => string;

/**
 * Forces one or more players to hold a button
 * virtually until stopped by the stop holding button action.
 */
declare const startHoldingButton$1: (
/**
 * Player - The player or players who are holding
 * a button virtually. Can use most Player
 * based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Button - The logical button that is being held virtually.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * Sets or adds to the throttle (directional input control)
 * of a player or players such that they begin moving
 * in a particular direction.
 * Any previous throttle in directon is cancelled.
 */
declare const startThrottleInDirection$1: (
/**
 * The player or players whose throttle will be set or added to.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * The unit direction in which the throttle will be
 * set or added to. This value is normalized internally.
 * - `Type.Vector.`
 */
direction: string | number | any[],
/**
 * The amount of throttle (or change to throttle).
 * A value of 1 denotes full throttle.
 * - `Type.Number.`
 */
magnitude: string | number | any[],
/**
 * Specifies whether direction is relative to world
 * coordinates or the local coordinates of the player or players.
 * - `Type.Relative.`
 */
relative: string | number | any[],
/**
 * Specifies whether preexisting
 * throttle is replaced or added to.
 * - `Type.StartThrottleBehavior.`
 */
behavior: string | number | any[],
/**
 * Specifies which of this action's inputs will be
 * continuously reevaluated. This action will keep asking
 * for and using new values from reevaluated inputs.
 * - `Type.StartThrottleReevaluation.`
 */
reevaluation: string | number | any[]
) => string;

/**
 * Starts transforming (scaling and rotating)
 * the throttle (directional input control)
 * of a player or players. cancels any existing
 * start transforming throttle behavior.
 */
declare const startTransformingThrottle$1: (
/**
 * Player - The player or players whose
 * throttle will be transformed.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * X Axis Scalar - The player or players will
 * have their x axis (left to right)
 * multiplied by this value before the throttle
 * is rotated to its new relative direction.
 * This Value is evaluated continuously
 * (meaning it updates every frame).
 * - `Type.Number.`
 */
xAxisScalar: string | number | any[],
/**
 * Y Axis Scalar - The player or players will
 * have their y axis (left to right)
 * multiplied by this value before the throttle
 * is rotated to its new relative direction.
 * This Value is evaluated continuously
 * (meaning it updates every frame).
 * - `Type.Number.`
 */
yAxisScalar: string | number | any[],
/**
 * Relative Direction - After the axis scalars
 * are applied, the player or players will
 * have their throttle transformed so that it is
 * relative to this unit direction vector.
 * for example, to make the throttle camera relative,
 * provide the direction that the camera is facing.
 * this value is evaluated continuously
 * (meaning it updates every frame)
 * and normalized internally.
 * - `Type.Vector.`
 */
relativeDirection: string | number | any[]
) => string;

/**
 * Stops the acceleration started by the start
 * accelerating action for one or more players.
 */
declare const stopAccelerating$1: (
/**
 * Player - The player or players who will
 * stop accelerating. Can use most Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Stops the all damage modifications that
 * were started using the start damage modification action.
 */
declare const stopAllDamageModifications$1: (


) => string;

/**
 * Stops all damage over time started by the
 * start damage over time or one or more players.
 */
declare const stopAllDamageOverTime$1: (
/**
 * Player - The player or players whose scripted
 * damage over time will stop. Can use most
 * Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Stops all heal over time started by the
 * start heal over time or one or more players.
 */
declare const stopAllHealOverTime$1: (
/**
 * Player - The player or players whose scripted
 * heal over time will stop. Can use most Player
 * based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Stops all forced camera positions started
 * by the start camera or one or more players.
 */
declare const stopCamera$1: (
/**
 * Player - The player or players whose forced
 * camera positions will stop. Can use most
 * Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Stops an in-progress chase of a global variable,
 * leaving it at its current value.
 */
declare const stopChasingGlobalVariable$1: (
/**
 * Variable - Specifies which global variable
 * to stop modifying. Specified by a single
 * alphabetic letter (A through Z).
 * - `Type.Variable.`
 */
variable: string | number | any[]
) => string;

/**
 * Stops an in-progress chase of a player variable,
 * leaving it at its current value.
 */
declare const stopChasingPlayerVariable$1: (
/**
 * Player - The player whose variable will
 * stop changing. If multiple players are provided,
 * each of their variables will stop changing.
 * Can use most Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Variable - Specifies which player variable
 * to stop modifying. Specified by a single
 * alphabetic letter (A through Z).
 * - `Type.Variable.`
 */
variable: string | number | any[]
) => string;

/**
 * Stops a damage modification that was started
 * by the start damage modification action
 */
declare const stopDamageModification$1: (
/**
 * Damage modification ID - Specifies which
 * damage modification instance to stop, this
 * ID may be the last damage modification ID
 * or a variable into which last damage modification
 * ID was earlier stored. Can use most Number
 * based Value Syntax.
 * - `Type.DamageModification.`
 */
damageModificationId: string | number | any[]
) => string;

/**
 * Stops an instance of damage over time that
 * was started by the start damage over time action
 */
declare const stopDamageOverTime$1: (
/**
 * Damage Over Time ID - Specifies which damage
 * over time instance to stop, this ID may
 * be the last damage over time ID or a variable
 * into which last damage over time ID was
 * earlier stored. Can use most Number based Value Syntax.
 * - `Type.DamageOverTime.`
 */
damageOverTimeId: string | number | any[]
) => string;

/**
 * Stops the turning started by the start facing
 * action for or one or more players.
 */
declare const stopFacing$1: (
/**
 * Player - The player or players who will
 * stop turning. Can use most Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Stops forcing one or more players to be
 * a specified hero. This will not respawn
 * the player or players, but it will restore
 * their availablity the next time they go
 * to select a hero.
 */
declare const stopForcingPlayerToBeHero$1: (
/**
 * Player - The player or players who will
 * no longer be forced to be a specific hero.
 * Can use most Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Undoes the effect of start forcing spawn
 * room action for the specified team.
 */
declare const stopForcingSpawnRoom$1: (
/**
 * Team - The team that will resume using their
 * normal spawn room. Can use most Team based Value Syntax.
 * - `Type.Team.`
 */
team: string | number | any[]
) => string;

/**
 * Undoes the effect of start forcing throttle
 * action for one or more players
 */
declare const stopForcingThrottle$1: (
/**
 * Player - The player or players whose movement
 * inout will be restored. Can use most Player
 * based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Stops an instance of heal over time that
 * was started by the start heal over time action
 */
declare const stopHealOverTime$1: (
/**
 * Heal Over Time ID - Specifies which heal
 * over time instance to stop, this ID may
 * be the last heal over time ID or a variable
 * into which last heal over time ID was earlier
 * stored. Can use most Number based Value Syntax.
 * - `Type.HealOverTimeId.`
 */
healOverTimeId: string | number | any[]
) => string;

/**
 * Undoes the effect of the start holding button
 * action for one or more players.
 */
declare const stopHoldingButton$1: (
/**
 * Player - The player or players who are no
 * longer holding a button virtually. Can use
 * most Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * The logical button that is no longer being held virtually.
 * - `Type.Button.`
 */
button: string | number | any[]
) => string;

/**
 * Cancels the behavior caused by start throttle in direction.
 */
declare const stopThrottleInDirection$1: (
/**
 * The player or players whose
 * default throttle control will be restored.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Stops the throttle transform started by start
 * transforming throttle for one or more players.
 */
declare const stopTransformingThrottle$1: (
/**
 * Player - The player or players whose
 * throttle will stop being transformed.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * Teleports one or more players to the specified location.
 */
declare const teleport$1: (
/**
 * Player - The player or players to teleport.
 * Can use most Player based Value Syntax.
 * - `Type.Player.`
 */
player: string | number | any[],
/**
 * Position - The position to which the player
 * or players will teleport. If a player is
 * providedm the position of the player is
 * used. Can use most Vector based Value Syntax.
 * - `Type.Vector.`
 */
position: string | number | any[]
) => string;

/**
 * Unpauses the match time.
 */
declare const unpauseMatchTime$1: (


) => string;

/**
 * Pauses the execution of the action list,
 * unless the wait is interrupted. The remainder
 * of the actions will execute after the pause.
 */
declare const wait$1: (
/**
 * Time - The duration of the pause. A minimum
 * value of 0.250 seconds is required. Can
 * use most Number based Value Syntax.
 * - `Type.Number.`
 */
time: string | number | any[],
/**
 * Wait Behavior - Specifies if and how the
 * wait can be interrupted. If the condition
 * list is ignored, the wait will not be interrupted,
 * otherwise, the condition list will determine
 * if and when the action list will abort or restart.
 * - `Type.WaitBehavior.`
 */
waitBehavior: string | number | any[]
) => string;



declare namespace index_d$8 {
  export {
    abort$1 as abort,
    abortIf$1 as abortIf,
    abortIfConditionIsFalse$1 as abortIfConditionIsFalse,
    abortIfConditionIsTrue$1 as abortIfConditionIsTrue,
    allowButton$1 as allowButton,
    applyImpluse$1 as applyImpluse,
    bigMessage$1 as bigMessage,
    chaseGlobalVariableAtRate$1 as chaseGlobalVariableAtRate,
    chaseGlobalVariableOverTime$1 as chaseGlobalVariableOverTime,
    chasePlayerVariableAtRate$1 as chasePlayerVariableAtRate,
    chasePlayerVariableOverTime$1 as chasePlayerVariableOverTime,
    clearStatus$1 as clearStatus,
    communicate$1 as communicate,
    createBeamEffect$1 as createBeamEffect,
    createDummyBot$1 as createDummyBot,
    createEffect$1 as createEffect,
    createHudText$1 as createHudText,
    createIcon$1 as createIcon,
    createInWorldText$1 as createInWorldText,
    damage$1 as damage,
    declareMatchDraw$1 as declareMatchDraw,
    declarePlayerVictory$1 as declarePlayerVictory,
    declareRoundVictory$1 as declareRoundVictory,
    declareTeamVictory$1 as declareTeamVictory,
    destroyAllDummyBot$1 as destroyAllDummyBot,
    destroyAllEffects$1 as destroyAllEffects,
    destroyAllHudText$1 as destroyAllHudText,
    destroyAllIcons$1 as destroyAllIcons,
    destroyAllInWorldText$1 as destroyAllInWorldText,
    destroyDummyBot$1 as destroyDummyBot,
    destroyEffect$1 as destroyEffect,
    destroyHudText$1 as destroyHudText,
    destroyIcon$1 as destroyIcon,
    destroyInWorldText$1 as destroyInWorldText,
    disableBuiltInGameModeAnnouncer$1 as disableBuiltInGameModeAnnouncer,
    disableBuiltInGameModeCompletion$1 as disableBuiltInGameModeCompletion,
    disableBuiltInGameModeMusic$1 as disableBuiltInGameModeMusic,
    disableBuiltInGameModeRespawning$1 as disableBuiltInGameModeRespawning,
    disableBuiltInGameModeScoring$1 as disableBuiltInGameModeScoring,
    disableDeathSpectateAllPlayers$1 as disableDeathSpectateAllPlayers,
    disableDeathSpectateTargetHud$1 as disableDeathSpectateTargetHud,
    disallowButton$1 as disallowButton,
    enableBuiltInGameModeAnnouncer$1 as enableBuiltInGameModeAnnouncer,
    enableBuiltInGameModeCompletion$1 as enableBuiltInGameModeCompletion,
    enableBuiltInGameModeMusic$1 as enableBuiltInGameModeMusic,
    enableBuiltInGameModeRespawning$1 as enableBuiltInGameModeRespawning,
    enableBuiltInGameModeScoring$1 as enableBuiltInGameModeScoring,
    enableDeathSpectateAllPlayers$1 as enableDeathSpectateAllPlayers,
    enableDeathSpectateTargetHud$1 as enableDeathSpectateTargetHud,
    goToAssembleHeroes$1 as goToAssembleHeroes,
    heal$1 as heal,
    kill$1 as kill,
    loop$1 as loop,
    loopIf$1 as loopIf,
    loopIfConditionIsFalse$1 as loopIfConditionIsFalse,
    loopIfConditionIsTrue$1 as loopIfConditionIsTrue,
    modifyGlobalVariable$1 as modifyGlobalVariable,
    modifyGlobalVariableAtIndex$1 as modifyGlobalVariableAtIndex,
    modifyPlayerScore$1 as modifyPlayerScore,
    modifyPlayerVariable$1 as modifyPlayerVariable,
    modifyPlayerVariableAtIndex$1 as modifyPlayerVariableAtIndex,
    modifyTeamScore$1 as modifyTeamScore,
    pauseMatchTime$1 as pauseMatchTime,
    playEffect$1 as playEffect,
    preloadHero$1 as preloadHero,
    pressButton$1 as pressButton,
    resetPlayerHeroAvailability$1 as resetPlayerHeroAvailability,
    respawn$1 as respawn,
    resurrect$1 as resurrect,
    setAbility1Enabled$1 as setAbility1Enabled,
    setAbility2Enabled$1 as setAbility2Enabled,
    setAimSpeed$1 as setAimSpeed,
    setDamageDealt$1 as setDamageDealt,
    setDamageReceived$1 as setDamageReceived,
    setFacing$1 as setFacing,
    setGlobalVariable$1 as setGlobalVariable,
    setGlobalVariableAtIndex$1 as setGlobalVariableAtIndex,
    setGravity$1 as setGravity,
    setHealingDealt$1 as setHealingDealt,
    setHealingReceived$1 as setHealingReceived,
    setInvisible$1 as setInvisible,
    setMatchTime$1 as setMatchTime,
    setMaxHealth$1 as setMaxHealth,
    setMoveSpeed$1 as setMoveSpeed,
    setObjectiveDescription$1 as setObjectiveDescription,
    setPlayerAllowedHeroes$1 as setPlayerAllowedHeroes,
    setPlayerScore$1 as setPlayerScore,
    setPlayerVariable$1 as setPlayerVariable,
    setPlayerVariableAtIndex$1 as setPlayerVariableAtIndex,
    setPrimaryFireEnabled$1 as setPrimaryFireEnabled,
    setProjectileGravity$1 as setProjectileGravity,
    setProjectileSpeed$1 as setProjectileSpeed,
    setRespawnMaxTime$1 as setRespawnMaxTime,
    setSecondaryFireEnabled$1 as setSecondaryFireEnabled,
    setSlowMotion$1 as setSlowMotion,
    setStatus$1 as setStatus,
    setTeamScore$1 as setTeamScore,
    setUltimateAbilityEnabled$1 as setUltimateAbilityEnabled,
    setUltimateCharge$1 as setUltimateCharge,
    skip$1 as skip,
    skipIf$1 as skipIf,
    smallMessage$1 as smallMessage,
    startAccelerating$1 as startAccelerating,
    startCamera$1 as startCamera,
    startDamageModification$1 as startDamageModification,
    startDamageOverTime$1 as startDamageOverTime,
    startFacing$1 as startFacing,
    startForcingPlayerToBeHero$1 as startForcingPlayerToBeHero,
    startForcingSpawnRoom$1 as startForcingSpawnRoom,
    startForcingThrottle$1 as startForcingThrottle,
    startHealOverTime$1 as startHealOverTime,
    startHoldingButton$1 as startHoldingButton,
    startThrottleInDirection$1 as startThrottleInDirection,
    startTransformingThrottle$1 as startTransformingThrottle,
    stopAccelerating$1 as stopAccelerating,
    stopAllDamageModifications$1 as stopAllDamageModifications,
    stopAllDamageOverTime$1 as stopAllDamageOverTime,
    stopAllHealOverTime$1 as stopAllHealOverTime,
    stopCamera$1 as stopCamera,
    stopChasingGlobalVariable$1 as stopChasingGlobalVariable,
    stopChasingPlayerVariable$1 as stopChasingPlayerVariable,
    stopDamageModification$1 as stopDamageModification,
    stopDamageOverTime$1 as stopDamageOverTime,
    stopFacing$1 as stopFacing,
    stopForcingPlayerToBeHero$1 as stopForcingPlayerToBeHero,
    stopForcingSpawnRoom$1 as stopForcingSpawnRoom,
    stopForcingThrottle$1 as stopForcingThrottle,
    stopHealOverTime$1 as stopHealOverTime,
    stopHoldingButton$1 as stopHoldingButton,
    stopThrottleInDirection$1 as stopThrottleInDirection,
    stopTransformingThrottle$1 as stopTransformingThrottle,
    teleport$1 as teleport,
    unpauseMatchTime$1 as unpauseMatchTime,
    wait$1 as wait
  };
}

/**
 * The ONGOING - EACH PLAYER event attribute
 * will affect the specified players in the
 * game environment.
 */
declare const onGoingEachPlayer$1: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;

/**
 * The ONGOING - GLOBAL event attribute will
 * affect all entities in the game environment.
 */
declare const onGoingGlobal$1: (


) => string;

/**
 * The PLAYER DEALT DAMAGE event attribute
 * will affect the specified players who successfully
 * dealt damage against another player in the
 * game environment.
 */
declare const playerDealtDamage$1: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;

/**
 * The PLAYER DEALT FINAL BLOW event attribute
 * will affect the specified players who successfully
 * dealt the lethal damage against another
 * player in the game environment.
 */
declare const playerDealtFinalBlow$1: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;

/**
 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:0)
 */
declare const playerDealtHealing$1: (
/**
 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:1)
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * TODO: playerDealtHealing(Player Dealt Healing)(OrderNum:2)
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * The PLAYER DIED event attribute will affect
 * the specified players who died in the game environment.
 */
declare const playerDied$1: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;

/**
 * The PLAYER EARNED ELIMINATION event attribute
 * will affect the specified players who successfully
 * score an elimination in the game environment.
 */
declare const playerEarnedElimination$1: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;

/**
 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:0)
 */
declare const playerJoinedMatch$1: (
/**
 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:1)
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * TODO: playerJoinedMatch(Player Joined Match)(OrderNum:2)
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * TODO: playerLeftMatch(Player Left Match)(OrderNum:0)
 */
declare const playerLeftMatch$1: (
/**
 * TODO: playerLeftMatch(Player Left Match)(OrderNum:1)
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * TODO: playerLeftMatch(Player Left Match)(OrderNum:2)
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:0)
 */
declare const playerReceivedHealing$1: (
/**
 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:1)
 * - `Type.Team.`
 */
team: string | number | any[],
/**
 * TODO: playerReceivedHealing(Player Received Healing)(OrderNum:2)
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;

/**
 * The PLAYER TOOK DAMAGE event attribute will
 * affect the specified players who received
 * damage in the game environment.
 */
declare const playerTookDamage$1: (
/**
 * - `Type.TeamConstant.`
 */
team: string | number | any[],
/**
 * - `Type.EventPlayer.`
 */
player: string | number | any[]
) => string;



declare namespace index_d$9 {
  export {
    onGoingEachPlayer$1 as onGoingEachPlayer,
    onGoingGlobal$1 as onGoingGlobal,
    playerDealtDamage$1 as playerDealtDamage,
    playerDealtFinalBlow$1 as playerDealtFinalBlow,
    playerDealtHealing$1 as playerDealtHealing,
    playerDied$1 as playerDied,
    playerEarnedElimination$1 as playerEarnedElimination,
    playerJoinedMatch$1 as playerJoinedMatch,
    playerLeftMatch$1 as playerLeftMatch,
    playerReceivedHealing$1 as playerReceivedHealing,
    playerTookDamage$1 as playerTookDamage
  };
}

/**
 * The amount of healing received by the healee
 * for the event currently being processed by this rule.
 */
declare const eventHealing$1: (


) => string;

/**
 * The player that received the healing for the event
 * currently being processed by this rule. may be the
 * same as the healer or the event player.
 */
declare const healee$1: (


) => string;

/**
 * The player that dealt the healing for the event
 * currently being processed by this rule. may be the
 * same as the healee or the event player.
 */
declare const healer$1: (


) => string;

/**
 * The player that is currently the host of the
 * custom game. this value will change if the
 * current host player leaves the match.
 */
declare const hostPlayer$1: (


) => string;

/**
 * Whether a player is a dummy bot.
 */
declare const isDummyBot$1: (
/**
 * Player to consider.
 * - `Type.Player.`
 */
player: string | number | any[]
) => string;



declare namespace index_d$a {
  export {
    absoluteValue$1 as absoluteValue,
    add$1 as add,
    allDeadPlayers$1 as allDeadPlayers,
    allHeroes$1 as allHeroes,
    allLivingPlayers$1 as allLivingPlayers,
    allowedHeroes$1 as allowedHeroes,
    allPlayers$1 as allPlayers,
    allPlayersNotOnObjective$1 as allPlayersNotOnObjective,
    allPlayersOnObjective$1 as allPlayersOnObjective,
    altitudeOf$1 as altitudeOf,
    and$1 as and,
    angleBetweenVectors$1 as angleBetweenVectors,
    angleDifference$1 as angleDifference,
    appendToArray$1 as appendToArray,
    arccosineInDegrees$1 as arccosineInDegrees,
    arccosineInRadians$1 as arccosineInRadians,
    arcsineInDegrees$1 as arcsineInDegrees,
    arcsineInRadians$1 as arcsineInRadians,
    arctangentInDegrees$1 as arctangentInDegrees,
    arctangentInRadians$1 as arctangentInRadians,
    arrayContains$1 as arrayContains,
    arraySlice$1 as arraySlice,
    attacker$1 as attacker,
    backward$1 as backward,
    closestPlayerTo$1 as closestPlayerTo,
    compare$1 as compare,
    controlModeScoringPercentage$1 as controlModeScoringPercentage,
    controlModeScoringTeam$1 as controlModeScoringTeam,
    cosineFromDegrees$1 as cosineFromDegrees,
    cosineFromRadians$1 as cosineFromRadians,
    countOf$1 as countOf,
    crossProduct$1 as crossProduct,
    currentArrayElement$1 as currentArrayElement,
    directionFromAngles$1 as directionFromAngles,
    directionTowards$1 as directionTowards,
    distanceBetween$1 as distanceBetween,
    divide$1 as divide,
    dotProduct$1 as dotProduct,
    down$1 as down,
    emptyArray$1 as emptyArray,
    entityExists$1 as entityExists,
    eventDamage$1 as eventDamage,
    eventHealing$1 as eventHealing,
    eventPlayer$1 as eventPlayer,
    eventWasCriticalHit$1 as eventWasCriticalHit,
    eyePosition$1 as eyePosition,
    facingDirectionOf$1 as facingDirectionOf,
    False$1 as False,
    farthestPlayerFrom$1 as farthestPlayerFrom,
    filteredArray$1 as filteredArray,
    firstOf$1 as firstOf,
    flagPosition$1 as flagPosition,
    forward$1 as forward,
    globalVariable$1 as globalVariable,
    hasSpawned$1 as hasSpawned,
    hasStatus$1 as hasStatus,
    healee$1 as healee,
    healer$1 as healer,
    health$1 as health,
    hero$1 as hero,
    heroIconString$1 as heroIconString,
    heroOf$1 as heroOf,
    horizontalAngleFromDirection$1 as horizontalAngleFromDirection,
    horizontalAngleTowards$1 as horizontalAngleTowards,
    horizontalFacingAngleOf$1 as horizontalFacingAngleOf,
    horizontalSpeedOf$1 as horizontalSpeedOf,
    hostPlayer$1 as hostPlayer,
    indexOfArrayValue$1 as indexOfArrayValue,
    isAlive$1 as isAlive,
    isAssemblingHeroes$1 as isAssemblingHeroes,
    isBetweenRounds$1 as isBetweenRounds,
    isButtonHeld$1 as isButtonHeld,
    isCommunicating$1 as isCommunicating,
    isCommunicatingAny$1 as isCommunicatingAny,
    isCommunicatingAnyEmote$1 as isCommunicatingAnyEmote,
    isCommunicatingAnyVoiceLine$1 as isCommunicatingAnyVoiceLine,
    isControlModePointLocked$1 as isControlModePointLocked,
    isCrouching$1 as isCrouching,
    isCTFModeInSuddenDeath$1 as isCTFModeInSuddenDeath,
    isDead$1 as isDead,
    isDummyBot$1 as isDummyBot,
    isFiringPrimary$1 as isFiringPrimary,
    isFiringSecondary$1 as isFiringSecondary,
    isFlagAtBase$1 as isFlagAtBase,
    isFlagBeingCarried$1 as isFlagBeingCarried,
    isGameInProgress$1 as isGameInProgress,
    isHeroBeingPlayed$1 as isHeroBeingPlayed,
    isInAir$1 as isInAir,
    isInLineOfSight$1 as isInLineOfSight,
    isInSetup$1 as isInSetup,
    isInSpawnRoom$1 as isInSpawnRoom,
    isInViewAngle$1 as isInViewAngle,
    isMatchComplete$1 as isMatchComplete,
    isMoving$1 as isMoving,
    isObjectiveComplete$1 as isObjectiveComplete,
    isOnGround$1 as isOnGround,
    isOnObjective$1 as isOnObjective,
    isOnWall$1 as isOnWall,
    isPortraitOnFire$1 as isPortraitOnFire,
    isStanding$1 as isStanding,
    isTeamOnDefense$1 as isTeamOnDefense,
    isTeamOnOffense$1 as isTeamOnOffense,
    isTrueForAll$1 as isTrueForAll,
    isTrueForAny$1 as isTrueForAny,
    isUsingAbility1$1 as isUsingAbility1,
    isUsingAbility2$1 as isUsingAbility2,
    isUsingUltimate$1 as isUsingUltimate,
    isWaitingForPlayers$1 as isWaitingForPlayers,
    lastCreatedEntity$1 as lastCreatedEntity,
    lastDamageModificationId$1 as lastDamageModificationId,
    lastDamageOverTimeId$1 as lastDamageOverTimeId,
    lastHealOverTimeId$1 as lastHealOverTimeId,
    lastOf$1 as lastOf,
    lastTextId$1 as lastTextId,
    left$1 as left,
    localVectorOf$1 as localVectorOf,
    matchRound$1 as matchRound,
    matchTime$1 as matchTime,
    max$1 as max,
    maxHealth$1 as maxHealth,
    min$1 as min,
    modulo$1 as modulo,
    multiply$1 as multiply,
    nearestWalkablePosition$1 as nearestWalkablePosition,
    normalize$1 as normalize,
    normalizedHealth$1 as normalizedHealth,
    not$1 as not,
    Null$1 as Null,
    number$1 as number,
    numberOfDeadPlayers$1 as numberOfDeadPlayers,
    numberOfDeaths$1 as numberOfDeaths,
    numberOfEliminations$1 as numberOfEliminations,
    numberOfFinalBlows$1 as numberOfFinalBlows,
    numberOfHeroes$1 as numberOfHeroes,
    numberOfLivingPlayers$1 as numberOfLivingPlayers,
    numberOfPlayers$1 as numberOfPlayers,
    numberOfPlayersOnObjective$1 as numberOfPlayersOnObjective,
    objectiveIndex$1 as objectiveIndex,
    objectivePosition$1 as objectivePosition,
    oppositeTeamOf$1 as oppositeTeamOf,
    or$1 as or,
    payloadPosition$1 as payloadPosition,
    payloadProgressPercentage$1 as payloadProgressPercentage,
    playerCarryingFlag$1 as playerCarryingFlag,
    playerClosestToReticle$1 as playerClosestToReticle,
    playersInSlot$1 as playersInSlot,
    playersInViewAngle$1 as playersInViewAngle,
    playersOnHero$1 as playersOnHero,
    playersWithinRadius$1 as playersWithinRadius,
    playerVariable$1 as playerVariable,
    pointCapturePercentage$1 as pointCapturePercentage,
    positionOf$1 as positionOf,
    raiseToPower$1 as raiseToPower,
    randomInteger$1 as randomInteger,
    randomizedArray$1 as randomizedArray,
    randomReal$1 as randomReal,
    randomValueInArray$1 as randomValueInArray,
    rayCastHitNormal$1 as rayCastHitNormal,
    rayCastHitPlayer$1 as rayCastHitPlayer,
    rayCastHitPosition$1 as rayCastHitPosition,
    removeFromArray$1 as removeFromArray,
    right$1 as right,
    roundToInteger$1 as roundToInteger,
    scoreOf$1 as scoreOf,
    serverLoad$1 as serverLoad,
    serverLoadAverage$1 as serverLoadAverage,
    serverLoadPeak$1 as serverLoadPeak,
    sineFromDegrees$1 as sineFromDegrees,
    sineFromRadians$1 as sineFromRadians,
    slotOf$1 as slotOf,
    sortedArray$1 as sortedArray,
    speedOf$1 as speedOf,
    speedOfInDirection$1 as speedOfInDirection,
    squareRoot$1 as squareRoot,
    string$1 as string,
    subtract$1 as subtract,
    tangentFromDegrees$1 as tangentFromDegrees,
    tangentFromRadians$1 as tangentFromRadians,
    team$1 as team,
    teamOf$1 as teamOf,
    teamScore$1 as teamScore,
    throttleOf$1 as throttleOf,
    totalTimeElapsed$1 as totalTimeElapsed,
    True$1 as True,
    ultimateChargePercent$1 as ultimateChargePercent,
    up$1 as up,
    valueInArray$1 as valueInArray,
    vector$1 as vector,
    vectorTowards$1 as vectorTowards,
    velocityOf$1 as velocityOf,
    verticalAngleFromDirection$1 as verticalAngleFromDirection,
    verticalAngleTowards$1 as verticalAngleTowards,
    verticalFacingAngleOf$1 as verticalFacingAngleOf,
    verticalSpeedOf$1 as verticalSpeedOf,
    victim$1 as victim,
    worldVectorOf$1 as worldVectorOf,
    xComponentOf$1 as xComponentOf,
    yComponentOf$1 as yComponentOf,
    zComponentOf$1 as zComponentOf
  };
}



declare namespace match_d$1 {
  export {
    flagPosition$1 as flagPosition,
    isAssemblingHeroes$1 as isAssemblingHeroes,
    isBetweenRounds$1 as isBetweenRounds,
    isControlModePointLocked$1 as isControlModePointLocked,
    isCTFModeInSuddenDeath$1 as isCTFModeInSuddenDeath,
    isFlagAtBase$1 as isFlagAtBase,
    isFlagBeingCarried$1 as isFlagBeingCarried,
    isGameInProgress$1 as isGameInProgress,
    isInSetup$1 as isInSetup,
    isMatchComplete$1 as isMatchComplete,
    isObjectiveComplete$1 as isObjectiveComplete,
    isWaitingForPlayers$1 as isWaitingForPlayers,
    matchRound$1 as matchRound,
    matchTime$1 as matchTime,
    objectiveIndex$1 as objectiveIndex,
    objectivePosition$1 as objectivePosition,
    payloadProgressPercentage$1 as payloadProgressPercentage,
    playerCarryingFlag$1 as playerCarryingFlag,
    payloadPosition$1 as payloadPosition,
    pointCapturePercentage$1 as pointCapturePercentage,
    totalTimeElapsed$1 as totalTimeElapsed
  };
}



declare namespace level_d$1 {
  export {
    lastCreatedEntity$1 as lastCreatedEntity,
    lastDamageModificationId$1 as lastDamageModificationId,
    lastDamageOverTimeId$1 as lastDamageOverTimeId,
    lastHealOverTimeId$1 as lastHealOverTimeId,
    lastTextId$1 as lastTextId,
    rayCastHitNormal$1 as rayCastHitNormal,
    rayCastHitPlayer$1 as rayCastHitPlayer,
    rayCastHitPosition$1 as rayCastHitPosition
  };
}



declare namespace server_d$1 {
  export {
    serverLoad$1 as serverLoad,
    serverLoadAverage$1 as serverLoadAverage,
    serverLoadPeak$1 as serverLoadPeak
  };
}

/**
 * @param value Type `Type.Number.`
 */
declare const ceil$1: (value: string) => number;
/**
 * @param value Type `Type.Number.`
 */
declare const floor$1: (value: string) => number;
/**
 * @param value Type `Type.Number.`
 */
declare const round$1: (value: string) => number;
/**
 * @param value Type `Type.Number.`
 */
declare const sqrt$1: (value: string | number | any[]) => number;

declare namespace util_d$1 {
  export {
    ceil$1 as ceil,
    floor$1 as floor,
    round$1 as round,
    sqrt$1 as sqrt,
    max$1 as max,
    min$1 as min,
    normalizedHealth$1 as normalizedHealth,
    randomInteger$1 as randomInteger,
    randomReal$1 as randomReal,
    randomValueInArray$1 as randomValueInArray,
    randomizedArray$1 as randomizedArray,
    roundToInteger$1 as roundToInteger,
    squareRoot$1 as squareRoot
  };
}



declare namespace index_d$b {
  export {
    index_d$6 as Classes,
    index_d$9 as RuleEvent,
    index_d$a as Value,
    index_d$8 as Action,
    index_d$7 as Type,
    level_d$1 as Level,
    server_d$1 as Server,
    match_d$1 as Match,
    util_d$1 as Util
  };
}

export { index_d$b as eng, index_d$5 as kor };
