import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image,
    View,
  } from 'react-native';

  export default function Main() {
    const articleToDisplay = 2

    const modernComputerArticlePictures = [
      require("../assets/ArticleImages/computer.jpg"),
      require("../assets/ArticleImages/Colossus-1943.jpg"),
      require("../assets/ArticleImages/eniac-1946.jpg"),
      require("../assets/ArticleImages/ic.jpg"),
      require("../assets/ArticleImages/Internet_Key_Layers.png"),
      require("../assets/ArticleImages/kaypro-II-1982.jpg"),
      require("../assets/ArticleImages/next-computer-First_Web_Server.jpg"),
      require("../assets/ArticleImages/slash.png"),
      require("../assets/ArticleImages/Surface_Web_n_Deep_Web.jpg"),
    ]

    {if (articleToDisplay === 1) {
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.header2}>
              The Modern Computer
            </Text>
            <View  styles={styles.imageStyle1}>
              <Image source={modernComputerArticlePictures[0]}/>
            </View>
            <Text style={styles.paragraph}>
              The principle of the modern computer was proposed by Alan Turing in his seminal 1936 paper, 
              On Computable Numbers. Turing proposed a simple device that he called "Universal Computing 
              machine" and that is now known as a universal Turing machine. He proved that such a machine 
              is capable of computing anything that is computable by executing instructions (program) 
              stored on tape, allowing the machine to be programmable. The fundamental concept of Turing's 
              design is the stored program, where all the instructions for computing are stored in memory. 
              Von Neumann acknowledged that the central concept of the modern computer was due to this 
              paper. Turing machines are to this day a central object of study in theory of computation. 
              Except for the limitations imposed by their finite memory stores, modern computers are said 
              to be Turing-complete, which is to say, they have algorithm execution capability equivalent 
              to a universal Turing machine.
            </Text>
            <Text style={styles.header3}>
              Stored programs
            </Text>
            <Image source={modernComputerArticlePictures[1]} styles={styles.imageStyle2}/>
            <Text style={styles.paragraph}>
              Early computing machines had fixed programs. Changing its function required the re-wiring and 
              re-structuring of the machine. With the proposal of the stored-program computer this changed. 
              A stored-program computer includes by design an instruction set and can store in memory a 
              set of instructions (a program) that details the computation. The theoretical basis for the 
              stored-program computer was laid out by Alan Turing in his 1936 paper. In 1945, Turing joined 
              the National Physical Laboratory and began work on developing an electronic stored-program 
              digital computer. His 1945 report "Proposed Electronic Calculator" was the first 
              specification for such a device. John von Neumann at the University of Pennsylvania also 
              circulated his First Draft of a Report on the EDVAC in 1945.
            </Text>
            <Text style={styles.paragraph}>
              The Manchester Baby was the world's first stored-program computer. It was built at the 
              University of Manchester in England by Frederic C. Williams, Tom Kilburn and Geoff Tootill, 
              and ran its first program on 21 June 1948.[60] It was designed as a testbed for the Williams 
              tube, the first random-access digital storage device. Although the computer was described 
              as "small and primitive" by a 1998 retrospective, it was the first working machine to contain 
              all of the elements essential to a modern electronic computer. As soon as the Baby had 
              demonstrated the feasibility of its design, a project began at the university to develop 
              it into a practically useful computer, the Manchester Mark 1.
            </Text>
            <Text style={styles.paragraph}>
              The Mark 1 in turn quickly became the prototype for the Ferranti Mark 1, the world's first 
              commercially available general-purpose computer. Built by Ferranti, it was delivered to the 
              University of Manchester in February 1951. At least seven of these later machines were 
              delivered between 1953 and 1957, one of them to Shell labs in Amsterdam. In October 1947 
              the directors of British catering company J. Lyons & Company decided to take an active 
              role in promoting the commercial development of computers. Lyons's LEO I computer, modelled 
              closely on the Cambridge EDSAC of 1949, became operational in April 1951 and ran the world's 
              first routine office computer job.
            </Text>
            <Text style={styles.header3}>
              Transistors
            </Text>
            <Image source={modernComputerArticlePictures[3]} styles={styles.imageStyle1}/>
            <Text style={styles.paragraph}>
              The concept of a field-effect transistor was proposed by Julius Edgar Lilienfeld in 1925. 
              John Bardeen and Walter Brattain, while working under William Shockley at Bell Labs, built 
              the first working transistor, the point-contact transistor, in 1947, which was followed by 
              Shockley's bipolar junction transistor in 1948. From 1955 onwards, transistors replaced vacuum 
              tubes in computer designs, giving rise to the "second generation" of computers. Compared to 
              vacuum tubes, transistors have many advantages: they are smaller, and require less power than 
              vacuum tubes, so give off less heat. Junction transistors were much more reliable than vacuum 
              tubes and had longer, indefinite, service life. Transistorized computers could contain tens of 
              thousands of binary logic circuits in a relatively compact space. However, early junction 
              transistors were relatively bulky devices that were difficult to manufacture on a mass-production 
              basis, which limited them to a number of specialized applications.
            </Text>
            <Text style={styles.paragraph}>
              At the University of Manchester, a team under the leadership of Tom Kilburn designed and built a 
              machine using the newly developed transistors instead of valves. Their first transistorized 
              computer and the first in the world, was operational by 1953, and a second version was completed 
              there in April 1955. However, the machine did make use of valves to generate its 125 kHz clock 
              waveforms and in the circuitry to read and write on its magnetic drum memory, so it was not the 
              first completely transistorized computer. That distinction goes to the Harwell CADET of 1955, 
              built by the electronics division of the Atomic Energy Research Establishment at Harwell.              
            </Text>
            <Text style={styles.header3}>
              Integrated circuits
            </Text>
            <Text style={styles.paragraph}>
              Integrated circuits are typically packaged in plastic, metal, or ceramic cases to 
              protect the IC from damage and for ease of assembly. The next great advance in computing 
              power came with the advent of the integrated circuit (IC). The idea of the integrated 
              circuit was first conceived by a radar scientist working for the Royal Radar Establishment 
              of the Ministry of Defence, Geoffrey W.A. Dummer. Dummer presented the first public 
              description of an integrated circuit at the Symposium on Progress in Quality Electronic 
              Components in Washington, D.C., on 7 May 1952.
            </Text>
            <Text style={styles.paragraph}>
              The first working ICs were invented by Jack Kilby at Texas Instruments and Robert 
              Noyce at Fairchild Semiconductor. Kilby recorded his initial ideas concerning the integrated 
              circuit in July 1958, successfully demonstrating the first working integrated example on 12 
              September 1958. In his patent application of 6 February 1959, Kilby described his new device 
              as "a body of semiconductor material ... wherein all the components of the electronic circuit 
              are completely integrated". However, Kilby's invention was a hybrid integrated circuit 
              (hybrid IC), rather than a monolithic integrated circuit (IC) chip. Kilby's IC had external 
              wire connections, which made it difficult to mass-produce.
            </Text>
            <Text style={styles.paragraph}>
              Noyce also came up with his own idea of an integrated circuit half a year later than 
              Kilby. Noyce's invention was the first true monolithic IC chip. His chip solved many practical 
              problems that Kilby's had not. Produced at Fairchild Semiconductor, it was made of silicon, 
              whereas Kilby's chip was made of germanium. Noyce's monolithic IC was fabricated using the 
              planar process, developed by his colleague Jean Hoerni in early 1959. In turn, the planar 
              process was based on Carl Frosch and Lincoln Derick work on semiconductor surface passivation 
              by silicon dioxide.
            </Text>
            <Text style={styles.paragraph}>
              Modern monolithic ICs are predominantly MOS (metal–oxide–semiconductor) integrated 
              circuits, built from MOSFETs (MOS transistors). The earliest experimental MOS IC to be fabricated 
              was a 16-transistor chip built by Fred Heiman and Steven Hofstein at RCA in 1962. General 
              Microelectronics later introduced the first commercial MOS IC in 1964, developed by Robert Norman. 
              Following the development of the self-aligned gate (silicon-gate) MOS transistor by Robert Kerwin, 
              Donald Klein and John Sarace at Bell Labs in 1967, the first silicon-gate MOS IC with self-aligned 
              gates was developed by Federico Faggin at Fairchild Semiconductor in 1968. The MOSFET has since 
              become the most critical device component in modern ICs.
            </Text>
            <Text style={styles.header3}>
              Mobile computers
            </Text>
            <View styles={styles.imageStyle2}>
              <Image source={modernComputerArticlePictures[4]} />
            </View>
            <Text style={styles.paragraph}>
              The first mobile computers were heavy and ran from mains power. The 50 lb (23 kg) IBM 5100 
              was an early example. Later portables such as the Osborne 1 and Compaq Portable were considerably 
              lighter but still needed to be plugged in. The first laptops, such as the Grid Compass, removed this 
              requirement by incorporating batteries – and with the continued miniaturization of computing 
              resources and advancements in portable battery life, portable computers grew in popularity in the 
              2000s. The same developments allowed manufacturers to integrate computing resources into cellular 
              mobile phones by the early 2000s.
            </Text>
            <Text style={styles.paragraph}>
              These smartphones and tablets run on a variety of operating systems and recently became the 
              dominant computing device on the market. These are powered by System on a Chip (SoCs), which are 
              complete computers on a microchip the size of a coin.
            </Text>
          </ScrollView>
        </SafeAreaView>
      )
    }
    else {
      return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.header2}>
              The World Wide Web
            </Text>
            <View  styles={styles.imageStyle1}>
              <Image source={modernComputerArticlePictures[4]}/>
            </View>
            <Text style={styles.paragraph}>
              The Web was invented by English computer scientist Tim Berners-Lee while at CERN in 1989 and opened 
              to the public in 1991. It was conceived as a "universal linked information system". Documents and 
              other media content are made available to the network through web servers and can be accessed by 
              programs such as web browsers. Servers and resources on the World Wide Web are identified and 
              located through character strings called uniform resource locators (URLs).
            </Text>
            <Text style={styles.paragraph}>
              The original and still very common document type is a web page formatted in Hypertext Markup Language 
              (HTML). This markup language supports plain text, images, embedded video and audio contents, and 
              scripts (short programs) that implement complex user interaction. The HTML language also supports 
              hyperlinks (embedded URLs) which provide immediate access to other web resources. Web navigation, or 
              web surfing, is the common practice of following such hyperlinks across multiple websites. Web 
              applications are web pages that function as application software. The information in the Web is 
              transferred across the Internet using HTTP. Multiple web resources with a common theme and usually a 
              common domain name make up a website. A single web server may provide multiple websites, while some 
              websites, especially the most popular ones, may be provided by multiple servers. Website content is 
              provided by a myriad of companies, organizations, government agencies, and individual users; and 
              comprises an enormous amount of educational, entertainment, commercial, and government information.
            </Text>
            <Text style={styles.paragraph}>
              The Web has become the world's dominant information systems platform. It is the primary tool that 
              billions of people worldwide use to interact with the Internet.
            </Text>
            <Text style={styles.header3}>
              History
            </Text>
            <View  style={styles.imageContainer1}>
              <Image source={modernComputerArticlePictures[6]} style={styles.imageStyle1}/>
            </View>
            <Text style={styles.paragraph}>
              The Web was invented by English computer scientist Tim Berners-Lee while working at CERN. He was 
              motivated by the problem of storing, updating, and finding documents and data files in that large 
              and constantly changing organization, as well as distributing them to collaborators outside CERN. 
              In his design, Berners-Lee dismissed the common tree structure approach, used for instance in the 
              existing CERNDOC documentation system and in the Unix filesystem, as well as approaches that relied 
              in tagging files with keywords, as in the VAX/NOTES system. Instead he adopted concepts he had put 
              into practice with his private ENQUIRE system (1980) built at CERN. When he became aware of Ted Nelson's 
              hypertext model (1965), in which documents can be linked in unconstrained ways through hyperlinks 
              associated with "hot spots" embedded in the text, it helped to confirm the validity of his concept.
            </Text>
            <Text style={styles.paragraph}>
              The model was later popularized by Apple's HyperCard system. Unlike Hypercard, Berners-Lee's new 
              system from the outset was meant to support links between multiple databases on independent computers, 
              and to allow simultaneous access by many users from any computer on the Internet. He also specified 
              that the system should eventually handle other media besides text, such as graphics, speech, and video. 
              Links could refer to mutable data files, or even fire up programs on their server computer. He also 
              conceived "gateways" that would allow access through the new system to documents organized in other ways 
              (such as traditional computer file systems or the Usenet). Finally, he insisted that the system should be 
              decentralized, without any central control or coordination over the creation of links.
            </Text>
            <Text style={styles.paragraph}>
              Berners-Lee submitted a proposal to CERN in May 1989, without giving the system a name. He got a working 
              system implemented by the end of 1990, including a browser called WorldWideWeb (which became the name of 
              the project and of the network) and an HTTP server running at CERN. As part of that development he 
              defined the first version of the HTTP protocol, the basic URL syntax, and implicitly made HTML the primary 
              document format. The technology was released outside CERN to other research institutions starting in January 
              1991, and then to the whole Internet on 23 August 1991. The Web was a success at CERN, and began to spread 
              to other scientific and academic institutions. Within the next two years, there were 50 websites created.
            </Text>
            <Text style={styles.paragraph}>
              CERN made the Web protocol and code available royalty free in 1993, enabling its widespread use. After the 
              NCSA released the Mosaic web browser later that year, the Web's popularity grew rapidly as thousands of 
              websites sprang up in less than a year. Mosaic was a graphical browser that could display inline images and 
              submit forms that were processed by the HTTPd server. Marc Andreessen and Jim Clark founded Netscape the 
              following year and released the Navigator browser, which introduced Java and JavaScript to the Web. It 
              quickly became the dominant browser. Netscape became a public company in 1995 which triggered a frenzy for 
              the Web and started the dot-com bubble. Microsoft responded by developing its own browser, Internet Explorer, 
              starting the browser wars. By bundling it with Windows, it became the dominant browser for 14 years.
            </Text>
            <Text style={styles.paragraph}>
              Berners-Lee founded the World Wide Web Consortium (W3C) which created XML in 1996 and recommended replacing 
              HTML with stricter XHTML. In the meantime, developers began exploiting an IE feature called XMLHttpRequest to 
              make Ajax applications and launched the Web 2.0 revolution. Mozilla, Opera, and Apple rejected XHTML and 
              created the WHATWG which developed HTML5. In 2009, the W3C conceded and abandoned XHTML. In 2019, it ceded 
              control of the HTML specification to the WHATWG.
            </Text>
            <Text style={styles.paragraph}>
              The World Wide Web has been central to the development of the Information Age and is the primary tool 
              billions of people use to interact on the Internet.
            </Text>
          </ScrollView>
        </SafeAreaView>
      )
    }
  
  
  
  
  }
}

const backgroundColor = '#FFEFD3'
const textColor = "#001f54"
const bottomPadding = 20

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: backgroundColor,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  header2: {
    fontSize: 30,
    fontWeight: "bold",
    color: textColor,
    paddingBottom: bottomPadding,
  },
  header3: {
    fontSize: 22,
    fontWeight: "bold",
    color: textColor,
    paddingBottom: bottomPadding,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: "normal",
    color: textColor,
    borderBottomColor: "blue",
    paddingBottom: bottomPadding,    
  },
  imageContainer1: {
    width: 100,
    aspectRatio: 1.5,

  },
  imageStyle1: {
    flex: 0,
    width: "100%",
    height: "100%", 
    resizeMode: 'cover',
  },
  imageStyle1: {
    flex: 0,
    width: '100%',
    height: '100%',
  }
});