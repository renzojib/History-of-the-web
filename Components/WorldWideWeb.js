import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Image,
    View,
  } from 'react-native';

export default function WorldWideWeb() {

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

    return (
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.header2}>
              The World Wide Web
            </Text>
            <View  style={styles.imageContainer1}>
              <Image source={modernComputerArticlePictures[4]} style={styles.imageStyle1}/>
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
        </View>
      )
}

const backgroundColor = '#FFEFD3'
const textColor = "#001f54"
const bottomPadding = 20
const boldText = "CourierPrimeBold"
const regText = 'CourierPrimeRegular'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: backgroundColor,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  header2: {
    fontSize: 30,
    color: textColor,
    paddingBottom: bottomPadding,
    fontFamily: boldText,
  },
  header3: {
    fontSize: 22,
    color: textColor,
    paddingBottom: bottomPadding,
    fontFamily: boldText,
  },
  paragraph: {
    fontSize: 18,
    fontFamily: regText,   
    color: textColor,
    paddingBottom: bottomPadding,
  },
  imageContainer1: {
    width: "100%",
    height: 250,
    paddingBottom: bottomPadding,
  },
  imageStyle1: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 30,
  },
})