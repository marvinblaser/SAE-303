let enterButton = document.querySelector(".enter-button");
let enter = document.querySelector(".enter");
let prison = document.querySelector(".prison");
let sign = document.querySelector(".sign");
let signTextTop = document.querySelector(".sign-text-top");
let signTextBot = document.querySelector(".sign-text-bottom");
let mexicanHat = document.querySelector(".hat");
let blackScreen = document.querySelector(".blackscreen");
let div = document.createElement("div");
let flex = document.querySelector(".flex");
let choose = document.querySelector(".choose");
let cross = document.querySelector(".cross");
let popup = document.querySelector(".cross").parentElement;

enterButton.addEventListener("click", () => {
  enterButton.remove();
  choose.style.left = "0%";
  prison.style.left = "100%";
  sign.style.top = "-100%";
  signTextTop.style.top = "-70%";
  signTextBot.style.top = "-60%";
  mexicanHat.style.top = "-60%";
  blackScreen.style.opacity = ".6";
  choose.style.zIndex = "100";
  setTimeout(() => {
    enter.remove();
  }, 2000);
  div.setAttribute("id", "map");
  flex.appendChild(div);
  let el = document.querySelector("#map");
  if (el !== null) {
    var map = L.map("map").setView([-4.881896, -77.355051], 3);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    //         attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    //     }).addTo(map);
    var mexique = L.polygon(
      [
        [32.534355, -117.123803],
        [32.71926382410679, -114.71927706347788],
        [32.4938720318368, -114.81330797832311],
        [31.33183138753677, -111.07462654543818],
        [31.33316201483736, -108.20687472715598],
        [31.783293638825782, -108.20687472715598],
        [31.766783188599014, -106.48615034817573],
        [28.980595511012, -103.20894738755896],
        [29.84553522275402, -102.33359104941972],
        [29.231728871140014, -100.77885367272468],
        [26.45962070486059, -99.06733610255677],
        [25.955580013346058, -97.15984318661158],
        [21.516582308882807, -97.63250392298711],
        [18.214748067372884, -94.57171202538794],
        [18.875424220977504, -91.26652090443645],
        [21.046106111592685, -90.21334738350468],
        [21.51096663598248, -86.97991990695984],
        [18.121982634166134, -87.8483261998348],
        [18.49035653255993, -88.53196515201857],
        [17.91113364244502, -89.23408083263975],
        [17.823205644658856, -90.95241657731786],
        [17.241800991795344, -91.46976497356503],
        [16.126792322069075, -90.49049836638288],
        [16.109041870682812, -91.74691590012603],
        [15.30865146887214, -92.1903573826236],
        [14.523075834135676, -92.26426429637321],
        [16.268738557012263, -94.62928545188447],
        [15.718132856226548, -96.66172557999838],
        [18.38518689708915, -103.44268478868383],
        [20.285448186186223, -105.69684545586775],
        [21.76858390489179, -105.5490316233],
        [25.174427299032274, -108.39444774803171],
        [31.195830868915703, -113.27230391414889],
        [31.70023600949531, -114.73196546070342],
        [23.185602450305243, -109.46609785604467],
        [22.896556341076906, -110.14973680822843],
        [24.755669618081047, -112.21913039321713],
        [26.05743134590288, -112.29303730696672],
        [27.819815104058495, -115.08302330101401],
        [27.852492545062116, -114.10375669383184],
        [29.730697533402243, -115.78513898163519],
      ],
      { color: "#006341" }
    ).addTo(map);

    var guatemala = L.polygon(
      [
        [18.121982634166134, -87.8483261998348],
        [18.49035653255993, -88.53196515201857],
        [17.91113364244502, -89.23408083263975],
        [17.823205644658856, -90.95241657731786],
        [17.241800991795344, -91.46976497356503],
        [16.126792322069075, -90.49049836638288],
        [16.109041870682812, -91.74691590012603],
        [15.30865146887214, -92.1903573826236],
        [14.523075834135676, -92.26426429637321],
        [13.96239336204369, -91.36068424609057],
        [13.922045489141938, -90.64471101914134],
        [13.733662577333547, -90.13198180500352],
        [14.22224275654983, -89.55458409328743],
        [14.405749691600477, -89.52686900063134],
        [14.432591754371119, -89.36057844469475],
        [14.71423699289572, -89.1342385213366],
        [15.017827364229275, -89.15733443188336],
        [15.075817872984786, -89.12961933922725],
        [15.73044372481869, -88.25197473845078],
        [15.988158147813815, -88.88018354375889],
        [16.98031207299765, -88.24273643069016],
      ],
      { color: "#4997D0" }
    ).addTo(map);

    var elsalvador = L.polygon(
      [
        [13.733662577333547, -90.13198180500352],
        [14.22224275654983, -89.55458409328743],
        [14.405749691600477, -89.52686900063134],
        [14.432591754371119, -89.36057844469475],
        [14.386389815186817, -89.10330148087745],
        [13.8653397943026, -88.47944679753034],
        [13.988978936347257, -88.17405196563004],
        [13.89070705906931, -88.00747296641173],
        [13.897048441506723, -87.80169890855377],
        [13.770187891255196, -87.7233087901415],
        [13.522612261822788, -87.78210137810093],
        [13.500381277775375, -87.72820817247145],
        [13.451148161550728, -87.7314744273581],
        [13.409848065487548, -87.81639705441057],
        [13.29067347077282, -87.79026701531751],
        [13.163489343592587, -87.9045859363497],
        [13.28113696197192, -88.87139738435222],
        [13.5259303482708, -89.8207999248783],
      ],
      { color: "#0047AB" }
    ).addTo(map);

    var honduras = L.polygon(
      [
        [14.432591754371119, -89.36057844469475],
        [14.386389815186817, -89.10330148087745],
        [13.8653397943026, -88.47944679753034],
        [13.988978936347257, -88.17405196563004],
        [13.89070705906931, -88.00747296641173],
        [13.897048441506723, -87.80169890855377],
        [13.770187891255196, -87.7233087901415],
        [13.522612261822788, -87.78210137810093],
        [13.500381277775375, -87.72820817247145],
        [13.451148161550728, -87.7314744273581],
        [13.409848065487548, -87.81639705441057],
        [13.281257214265086, -87.53308007627076],
        [12.989878113173086, -87.3135025329113],
        [12.993662938951784, -87.05325754502128],
        [13.156355664926517, -86.92507717785155],
        [13.3057108958836, -86.80078106423242],
        [13.273578900038162, -86.75611214840055],
        [13.368072604027288, -86.71144323081286],
        [13.7683117285428, -86.75999640019532],
        [13.7683117285428, -86.36768679158496],
        [14.069927120710226, -86.07442564851483],
        [13.830552049899365, -85.74814835026463],
        [13.977599262257744, -85.7442640937292],
        [14.256353120825173, -85.20241072342083],
        [14.301524193194801, -85.15191542609526],
        [14.378670409535248, -85.22183199000602],
        [14.818454899886117, -84.81592749396856],
        [14.61746600426058, -84.47022892796535],
        [15.009878332684298, -83.12433507038035],
        [15.820558449755941, -84.32456941822959],
        [15.977456349183075, -85.05869334069308],
        [15.882121262893476, -85.47232881611158],
        [16.012837967567425, -85.91513372087972],
        [15.811125169882551, -86.47058197861517],
        [15.833547685471759, -87.36007604498491],
        [15.725149197237677, -88.2340330938694],
        [15.066056240477115, -89.15071693371321],
        [14.867174602512447, -89.22063349762398],
        [14.585425402902372, -89.15848544081443],
      ],
      { color: "#00bce4" }
    ).addTo(map);

    var nicaragua = L.polygon(
      [
        [12.989878113173086, -87.3135025329113],
        [12.993662938951784, -87.05325754502128],
        [13.156355664926517, -86.92507717785155],
        [13.3057108958836, -86.80078106423242],
        [13.273578900038162, -86.75611214840055],
        [13.368072604027288, -86.71144323081286],
        [13.7683117285428, -86.75999640019532],
        [13.7683117285428, -86.36768679158496],
        [14.069927120710226, -86.07442564851483],
        [13.830552049899365, -85.74814835026463],
        [13.977599262257744, -85.7442640937292],
        [14.256353120825173, -85.20241072342083],
        [14.301524193194801, -85.15191542609526],
        [14.378670409535248, -85.22183199000602],
        [14.818454899886117, -84.81592749396856],
        [14.61746600426058, -84.47022892796535],
        [15.009878332684298, -83.12433507038035],
        [14.259009020802345, -83.21065301254103],
        [12.39952849460336, -83.56800433919601],
        [11.586448920504703, -83.66899493151155],
        [11.355489753625097, -83.86046541294006],
        [10.93247457977379, -83.66449011974203],
        [10.797751092626088, -83.6710226295153],
        [10.707901810129952, -83.90619298135296],
        [11.079958672888985, -84.70315917369166],
        [10.93247457977379, -84.92526450598278],
        [11.220960896396026, -85.58504799308287],
        [11.05431457668452, -85.68956814945517],
        [12.920122645296082, -87.68198363030196],
        [13.028340243484088, -87.58399598370295],
      ],
      { color: "#0067c6" }
    ).addTo(map);

    var costarica = L.polygon(
      [
        [11.05431457668452, -85.68956814945517],
        [11.220960896396026, -85.58504799308287],
        [10.93247457977379, -84.92526450598278],
        [11.079958672888985, -84.70315917369166],
        [10.707901810129952, -83.90619298135296],
        [10.797751092626088, -83.6710226295153],
        [10.93247457977379, -83.66449011974203],
        [9.560361797512897, -82.59141735952187],
        [9.483051668272017, -82.66980747680108],
        [9.61833287457102, -82.8723152797724],
        [9.083341384779764, -82.89844531886546],
        [8.915587024972453, -82.72860006476049],
        [8.780036778042824, -82.89844531886546],
        [8.63152015949646, -82.83312022113279],
        [8.431253267060722, -82.90497782863874],
        [8.353702597645013, -83.04216053387736],
        [8.043347147593003, -82.91804284818527],
        [8.463561462948427, -83.61048888415169],
        [9.031732953349831, -83.66928147211111],
        [9.57251254984395, -84.61055575034045],
        [9.775603992664609, -84.63946952064349],
        [10.17128132018175, -85.12287524386534],
        [10.103760812365753, -85.23066165512424],
        [9.814227703418403, -84.90076991157422],
        [9.582418483552217, -85.10981022431879],
        [9.807790730572345, -85.34498057615646],
        [9.888243880070263, -85.66507355504659],
        [10.258072416847371, -85.85125008358474],
        [10.367331049340095, -85.86758135801792],
        [10.60499701764894, -85.6454760257268],
        [10.900215986233412, -85.90024390688426],
      ],
      { color: "#EF3340" }
    ).addTo(map);

    var panama = L.polygon(
      [
        [9.560361797512897, -82.59141735952187],
        [9.483051668272017, -82.66980747680108],
        [9.61833287457102, -82.8723152797724],
        [9.083341384779764, -82.89844531886546],
        [8.915587024972453, -82.72860006476049],
        [8.780036778042824, -82.89844531886546],
        [8.63152015949646, -82.83312022113279],
        [8.431253267060722, -82.90497782863874],
        [8.353702597645013, -83.04216053387736],
        [8.043347147593003, -82.91804284818527],
        [8.034513692253952, -82.86976228666684],
        [8.277707539822568, -82.85616739923975],
        [8.324791108821575, -82.69788406705291],
        [8.274824689124546, -82.48619224854532],
        [8.217163254594103, -82.09776689206872],
        [8.09989254912093, -81.72973386751465],
        [7.7632722421318245, -81.57047947194015],
        [7.7325915890096635, -81.54809927951274],
        [7.593396941862026, -81.2182075359627],
        [7.874975799102911, -81.07122606606417],
        [7.217672469508128, -80.88504953752603],
        [7.311633480414881, -80.32651994637679],
        [7.425008360144539, -80.29385739751045],
        [7.46063444910929, -79.99662820282674],
        [7.752010461138227, -80.15014218249854],
        [8.20809146704015, -80.48330018093522],
        [8.592605017633028, -79.75165908632918],
        [8.973502780872682, -79.4936249502851],
        [8.928332085341763, -78.91549783535086],
        [8.337382133613023, -78.39616330837603],
        [8.418167136123634, -78.12833040767205],
        [8.081992529817938, -78.42229334746912],
        [7.638721099277289, -78.26551310975184],
        [7.224153148947378, -77.89969256244882],
        [7.444441116786468, -77.80823742562306],
        [7.441202381375073, -77.72984730834385],
        [7.684040468738534, -77.72984730834385],
        [7.52863981129645, -77.57959958355868],
        [7.76171955002167, -77.35749425126757],
        [7.881446632584298, -77.32809795728785],
        [7.926739770702682, -77.17131772272943],
        [8.479552460715206, -77.4097543294537],
        [8.666878353666375, -77.3705592708141],
        [9.257735949008458, -78.12213741659075],
        [9.43499504730223, -78.57941310071952],
        [9.45432692290793, -79.04975380439483],
        [9.554190930466076, -78.96483117734233],
        [9.615383445212581, -79.55928956670975],
        [9.370547645265388, -79.87938254559988],
        [9.131988836187777, -80.42811337072276],
        [8.883589171699814, -80.81679770223222],
        [8.809358992086942, -81.52557501263182],
        [9.15778675539909, -81.87506428628453],
      ],
      { color: "#072357" }
    ).addTo(map);

    var uruguay = L.polygon(
      [
        [-30.192418350278164, -57.639051057204576],
        [-33.118638425070614, -58.374696091726065],
        [-34.22328147147286, -58.342711525007736],
        [-34.92118918755207, -56.24772240495743],
        [-34.947410429239625, -55.03230886966106],
        [-34.59271746857745, -54.02479501803381],
        [-33.7326034561987, -53.41708825038562],
        [-33.09184595401727, -53.497049667181436],
        [-32.78314637023197, -53.12922714992069],
        [-30.881121601402555, -55.59203878723175],
        [-31.00456800588343, -55.87989988769668],
        [-30.081773972808588, -56.95138287276059],
        [-30.27532015555797, -57.25523625658468],
      ],
      { color: "#FFCD00" }
    ).addTo(map);

    var republique_dominicaine = L.polygon(
      [
        [19.746300336596214, -71.75600941824887],
        [18.067004120827637, -71.77200170160802],
        [17.625545125764326, -71.42017146770644],
        [18.218975911510245, -71.0523489504457],
        [18.12780868353779, -68.71747558000794],
        [18.52252085771833, -68.33366077938803],
        [19.21862086204576, -69.7249894316352],
        [19.59571049482268, -69.93288911530432],
        [20.017003752386234, -70.84444926677659],
      ],
      { color: "#CE1126" }
    ).addTo(map);

    var venezuela = L.polygon(
      [
        [11.869195927156062, -71.34540434572244],
        [9.202114948678714, -73.36313552435784],
        [9.110080666318499, -72.77272898761873],
        [7.079740042592545, -72.10463738025608],
        [6.925528927467916, -70.16251061466694],
        [6.098682116204295, -69.46428304153534],
        [6.229755774915271, -67.50871664917364],
        [6.011281831918054, -67.42082602479783],
        [5.278772657296351, -67.87126547472384],
        [3.712610873053736, -67.58562094550248],
        [3.756462867423277, -67.49773032112667],
        [3.2630069103143584, -67.35490805651598],
        [2.824174752630258, -67.88225180277082],
        [2.1107301609721416, -67.12419516752949],
        [1.2651576719348419, -66.87150962244904],
        [0.7551162104731343, -66.31331657494242],
        [1.0036789581746313, -65.6529934746421],
        [0.6852051748950553, -65.59861392520561],
        [1.438615500099, -64.37895831641563],
        [1.86570476984, -64.07598654098372],
        [1.9666388752066215, -63.827394314988304],
        [2.1684884575706453, -63.384589412433975],
        [2.4556889146401732, -63.369052398309265],
        [2.463450264883861, -64.02937549860957],
        [2.898009538482755, -64.07598653303904],
        [3.1152281850709382, -64.21581966016147],
        [3.4952511209114574, -64.1381345895379],
        [4.247071554724713, -64.79068918277585],
        [3.6890821329940118, -62.809719881874926],
        [4.0533683094409225, -62.71649775309988],
        [4.262565805788495, -61.57452721493346],
        [4.8123989484184015, -60.712222931011894],
        [5.199342003773512, -60.75883397338602],
        [5.94931822298949, -61.41138856662397],
        [6.253565577426872, -61.142425019983335],
        [6.71252868157582, -61.142425019983335],
        [6.969361051026049, -60.38949836445582],
        [7.1252266904327035, -60.28787636186928],
        [7.193974166014686, -60.43569018381332],
        [7.148143666311599, -60.54193136833561],
        [7.2993667092393215, -60.62507664317914],
        [7.52381542252903, -60.71746028189417],
        [7.839678279718278, -60.50035873091385],
        [8.059268249176768, -60.001487074504325],
        [8.287881081342876, -59.79824306933125],
        [8.530065617286589, -59.98762952869706],
        [8.653383914755453, -60.597361544216284],
        [9.314944285310972, -60.782128829224334],
        [9.820539560924349, -61.451910209908334],
        [10.02984171639701, -62.26026704866488],
        [10.484376540160493, -62.77761542546906],
        [10.684162403656885, -61.88149412993324],
        [10.725011589670423, -61.92768594929075],
        [10.656926572626487, -64.25113447071585],
        [10.12080066664037, -64.73152940604183],
        [10.599777543892671, -66.22416581009054],
        [10.54577850994677, -68.16874590358634],
        [11.009855769978538, -68.32255449624401],
        [11.182350848743722, -68.41044512061981],
        [11.505501404745907, -69.25639238023695],
        [11.440900623833267, -69.64091386188112],
        [12.150681016256735, -69.92655839110249],
        [11.98952936337238, -70.25614823251175],
        [11.580850242626815, -70.1902302642299],
        [11.591612708067045, -69.84965409477364],
        [11.440900623833267, -69.95951737524341],
        [10.988286745910015, -71.45365798963212],
        [11.13923663913431, -71.82719314322931],
      ],
      { color: "#003DA5" }
    ).addTo(map);

    var chili = L.polygon(
      [
        [-22.848544414398255, -67.17246713460153],
        [-22.980096264798984, -66.99668588584993],
        [-24.017822549728734, -67.30430307116524],
        [-24.36857026975011, -68.26011361125214],
        [-24.798160059714533, -68.58970345266142],
        [-25.08704720204632, -68.3699768917219],
        [-25.146732207429558, -68.50181282828564],
        [-26.48183850606389, -68.57871712461446],
        [-26.972462783469627, -68.31504525148704],
        [-27.158343270003563, -68.85337532578885],
        [-29.15355787433396, -69.82017221748596],
        [-30.39219949048444, -70.16372002805915],
        [-31.86836115675478, -70.50341053457082],
        [-34.25505016778665, -69.9808097553221],
        [-38.86975930467816, -71.39183186597425],
        [-42.12733802691713, -71.99282276211026],
        [-44.26058242925112, -71.8099124839916],
        [-44.50335626423583, -71.13053147096828],
        [-44.782228849729634, -71.26118166578046],
        [-44.76367904996757, -72.0450828346535],
        [-45.29920417141086, -71.4440919385175],
        [-47.831614350147035, -72.43703341909003],
        [-49.26716562467841, -73.19480454900066],
        [-50.8109678472384, -73.2993247048504],
        [-50.67244834305404, -72.36571108711502],
        [-51.89806682538662, -71.92150042475362],
        [-52.315333860265724, -68.4984653206746],
        [-54.858149056311504, -68.5768554375619],
        [-55.14290773157859, -66.3558021257549],
        [-55.80541847711691, -67.58314717417528],
        [-54.82406103328198, -71.56062279010185],
        [-53.84638537979527, -73.36107704883902],
        [-52.16787897406791, -74.93159890699458],
        [-48.97772253458215, -75.59676110574283],
        [-47.05443075156228, -74.33659535380178],
        [-46.829407264241006, -75.54509143896912],
        [-43.9920507420569, -74.29265004161388],
        [-40.71315104190347, -73.87390292321534],
        [-39.38444321004447, -73.3026138647726],
        [-37.246976087268465, -73.67614901836978],
        [-37.246976087268465, -73.2147232403968],
        [-33.632031746158816, -71.7425552622839],
        [-30.33403758916285, -71.72058260618995],
        [-25.501826237553683, -70.68786776540485],
        [-20.898879532322013, -70.27038729961976],
        [-18.395222775221338, -70.40222323618347],
        [-17.53828431228136, -69.50134433633144],
        [-19.372339191230854, -68.44665684382177],
        [-20.15810165683574, -68.66638340476128],
        [-22.775202586101923, -67.89734044147298],
        [-22.87646227185653, -67.85339512928508],
      ],
      { color: "#003DA5" }
    ).addTo(map);

    var argentine = L.polygon(
      [
        [-22.848544414398255, -67.17246713460153],
        [-22.980096264798984, -66.99668588584993],
        [-24.017822549728734, -67.30430307116524],
        [-24.36857026975011, -68.26011361125214],
        [-24.798160059714533, -68.58970345266142],
        [-25.08704720204632, -68.3699768917219],
        [-25.146732207429558, -68.50181282828564],
        [-26.48183850606389, -68.57871712461446],
        [-26.972462783469627, -68.31504525148704],
        [-27.158343270003563, -68.85337532578885],
        [-29.15355787433396, -69.82017221748596],
        [-30.39219949048444, -70.16372002805915],
        [-31.86836115675478, -70.50341053457082],
        [-34.25505016778665, -69.9808097553221],
        [-38.86975930467816, -71.39183186597425],
        [-42.12733802691713, -71.99282276211026],
        [-44.26058242925112, -71.8099124839916],
        [-44.50335626423583, -71.13053147096828],
        [-44.782228849729634, -71.26118166578046],
        [-44.76367904996757, -72.0450828346535],
        [-45.29920417141086, -71.4440919385175],
        [-47.831614350147035, -72.43703341909003],
        [-49.26716562467841, -73.19480454900066],
        [-50.8109678472384, -73.2993247048504],
        [-50.67244834305404, -72.36571108711502],
        [-51.89806682538662, -71.92150042475362],
        [-52.315333860265724, -68.4984653206746],
        [-54.858149056311504, -68.5768554375619],
        [-55.14290773157859, -66.3558021257549],
        [-54.92199460388814, -65.33419107251395],
        [-54.6734553144383, -65.15128079977688],
        [-53.78762540076206, -67.65976454017067],
        [-52.18332686722007, -68.13010524149449],
        [-51.06407352687682, -69.1622417805107],
        [-50.23570494895876, -68.60044594281834],
        [-50.05988927772338, -67.98639002720111],
        [-49.32461318973227, -67.59443944276458],
        [-48.02195979078369, -65.93518195361847],
        [-47.060655917652625, -65.89598689517481],
        [-46.9983181064208, -66.78440821989761],
        [-46.54194421371652, -67.45072421343971],
        [-45.900157565875205, -67.52911433032702],
        [-45.223265720913055, -66.58843292767935],
        [-44.95577281879001, -65.63468650555046],
        [-43.85066018681634, -65.27091718021498],
        [-42.94887503357515, -64.30410573860486],
        [-42.76690804752983, -64.97042173214696],
        [-42.66131368693928, -64.26491068016121],
        [-42.872322714942065, -64.04280534898051],
        [-42.786087717815235, -63.67698480350643],
        [-42.111266980785224, -63.75537492039373],
        [-42.15002394828428, -64.97042173214696],
        [-40.809118025591665, -64.98348675162818],
        [-41.17399413654709, -63.5071395502506],
        [-40.85854358468701, -62.292092738497345],
        [-39.056087254282666, -61.86094709561716],
        [-38.728484492491326, -59.18659464332786],
        [-38.083202783393965, -57.55520816023298],
        [-36.37616456499816, -56.70067238337376],
        [-36.25723375242399, -57.120171764741],
        [-35.89935426096153, -57.37653249779877],
        [-35.45763003732054, -57.120171764741],
        [-34.42606628672016, -58.55121456191177],
        [-34.14363945266673, -58.320255465124205],
        [-33.159312442358825, -58.40340073996773],
        [-30.18793591628704, -57.627378168790926],
        [-27.542525805331394, -54.76785489880821],
        [-27.135379610991297, -53.81232853013836],
        [-26.733683544115095, -53.734643459514785],
        [-26.170315305409147, -53.641421374766516],
        [-25.625226806002555, -53.94439315019842],
        [-25.59019960517861, -54.612484757561084],
        [-26.30271050577927, -54.65132729287287],
        [-27.003947208817763, -55.33495591436025],
        [-27.252846215498117, -55.58354814035566],
        [-27.34259002520428, -56.104038113533555],
        [-27.59761666412413, -56.33709332540425],
        [-27.26665767613379, -58.582191866425305],
        [-25.44042954428564, -57.57567190369046],
        [-22.09241904192557, -62.75726613557848],
        [-22.020419389921752, -63.95361626136001],
        [-22.83902190854454, -64.38865265685199],
        [-22.207542078578165, -64.59063384047326],
        [-22.121208620503005, -65.80252094220089],
        [-21.80420116930142, -66.23755733769285],
      ],
      { color: "#6CACE4" }
    ).addTo(map);

    argentine.addEventListener("click", () => {
      document.querySelector(".popup-ar").classList.toggle("display-none");
    });
    document.querySelectorAll(".ar").forEach((ar) => {
      ar.addEventListener("click", function () {
        document.querySelector(".popup-ar").classList.toggle("display-none");
      });
    });

    chili.addEventListener("click", () => {
      document.querySelector(".popup-cl").classList.toggle("display-none");
    });
    document.querySelectorAll(".cl").forEach((cl) => {
      cl.addEventListener("click", function () {
        document.querySelector(".popup-cl").classList.toggle("display-none");
      });
    });

    costarica.addEventListener("click", () => {
      document.querySelector(".popup-cr").classList.toggle("display-none");
    });
    document.querySelectorAll(".cr").forEach((cr) => {
      cr.addEventListener("click", function () {
        document.querySelector(".popup-cr").classList.toggle("display-none");
      });
    });

    document.querySelectorAll(".cross").forEach((cross) => {
      cross.addEventListener("click", function () {
        cross.parentElement.classList.toggle("display-none");
      });
    });
    // Fonction pour créer un graphique en barres SVG
    // function createBarChart(data) {
    //     const svgWidth = 300, svgHeight = 300;
    //     const barPadding = 10;
    //     const barWidth = (svgWidth / data.length);
    //     const tooltip = document.getElementById("tooltip");

    //     // Créer un élément SVG
    //     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    //     svg.setAttribute("width", svgWidth);
    //     svg.setAttribute("height", svgHeight);

    //     // Créer des barres pour le graphique
    //     data.forEach((item, index) => {
    //         const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    //         const barHeight = item.taux * 20; // Ajuster cette valeur selon l'échelle souhaitée

    //         bar.setAttribute("y", svgHeight - barHeight);
    //         bar.setAttribute("height", barHeight);
    //         bar.setAttribute("width", barWidth - barPadding);
    //         bar.setAttribute("transform", `translate(${[barWidth * index, 0]})`);
    //         bar.setAttribute("fill", "blue");

    //         // Ajouter l'événement de survol
    //         bar.addEventListener("mouseover", function(event) {
    //             tooltip.style.display = "block";
    //             tooltip.textContent = `En ${item.annee}, le taux de criminalité était de ${item.taux}`;
    //             tooltip.style.left = `${event.pageX}px`;
    //             tooltip.style.top = `${event.pageY}px`;
    //         });
    //         bar.addEventListener("mouseout", function() {
    //             tooltip.style.display = "none";
    //         });

    //         svg.appendChild(bar);
    //     });

    //     // Ajouter le SVG à l'élément DOM souhaité
    //     document.getElementById("bar-chart").appendChild(svg);
    // }

    // // Fonction pour charger les données depuis un fichier JSON
    // function loadData() {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'js/data.json', true);
    //     xhr.onload = function() {
    //         if (this.status === 200) {
    //             const crimeData = JSON.parse(this.responseText);
    //             const countryDataAr = crimeData["Argentine"];
    //             // const countryDataCl = crimeData["Chili"];
    //             // const countryDataCr = crimeData["Costa Rica"];
    //             createBarChart(countryDataAr);
    //         }
    //     };
    //     xhr.send();
    // }

    // // Appel de la fonction pour charger les données
    // loadData();

    // Function to draw a line chart using SVG elements
    function drawLineChart(countryData) {
      var svgNS = "http://www.w3.org/2000/svg";
      var chartWidth = 600;
      var chartHeight = 400;
      var padding = 50;

      // Calculate scales
      var xScale = (chartWidth - 2 * padding) / (countryData.length - 1);
      var yMax = Math.max(...countryData.map((data) => data.taux));
      var yScale = (chartHeight - 2 * padding) / yMax;

      // Create SVG element
      var svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("width", chartWidth);
      svg.setAttribute("height", chartHeight);
      svg.setAttribute("viewBox", `0 0 ${chartWidth} ${chartHeight}`);
      svg.setAttribute("style", "border: 1px solid #ccc");

      // Draw lines
      for (var i = 0; i < countryData.length - 1; i++) {
        var line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", padding + i * xScale);
        line.setAttribute(
          "y1",
          chartHeight - padding - countryData[i].taux * yScale
        );
        line.setAttribute("x2", padding + (i + 1) * xScale);
        line.setAttribute(
          "y2",
          chartHeight - padding - countryData[i + 1].taux * yScale
        );
        line.setAttribute("stroke", "black");
        svg.appendChild(line);
      }

      // Draw axes
      var xAxis = document.createElementNS(svgNS, "line");
      xAxis.setAttribute("x1", padding);
      xAxis.setAttribute("y1", chartHeight - padding);
      xAxis.setAttribute("x2", chartWidth - padding);
      xAxis.setAttribute("y2", chartHeight - padding);
      xAxis.setAttribute("stroke", "black");
      svg.appendChild(xAxis);

      var yAxis = document.createElementNS(svgNS, "line");
      yAxis.setAttribute("x1", padding);
      yAxis.setAttribute("y1", padding);
      yAxis.setAttribute("x2", padding);
      yAxis.setAttribute("y2", chartHeight - padding);
      yAxis.setAttribute("stroke", "black");
      svg.appendChild(yAxis);

      // Return the SVG element
      return svg;
    }

    // Function to open the popup and update the chart
    function openPopup(country) {
    // Open the popup modal (this will depend on your specific implementation)
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
    
    // Fetch the crime data from the JSON file and update the chart
    fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        var countryData = data[country];
        if (countryData) {
            var svgChart = drawLineChart(countryData);
            var chartContainer = document.getElementById('chartContainer');
            chartContainer.innerHTML = '';
            chartContainer.appendChild(svgChart);
        }
    })
    .catch(error => console.error('Error fetching crime data:', error));
    }

    // Function to open the popup and update the chart
    function openPopup(country) {
      // Open the popup modal (this will depend on your specific implementation)
      var popup = document.getElementById("popup");
      popup.style.display = "block";
    }

    // Event listeners for each country button
    document.querySelectorAll("[data-country]").forEach(function (button) {
      button.addEventListener("click", function () {
        var country = this.getAttribute("data-country");
        openPopup(country);
      });
    });

    // Close the popup modal
    document.getElementById("closePopup").addEventListener("click", function () {
        document.getElementById("popup").style.display = "none";
      });

    // Assume crimeData is an object containing country names as keys and arrays of data as values
    // This would be filled with the actual crime data in your implementation
    var crimeData = {
      
    };
  }
});
