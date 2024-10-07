import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  Platform,
  Linking,
} from "react-native";

import ImageModal from "react-native-image-modal";

export default function ModernComputer() {
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
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header2}>The Modern Computer</Text>
        <View styles={styles.imageStyle1}>
          <ImageModal
            resizeMode="contain"
            imageBackgroundColor="#000000"
            style={{
              width: 250,
              height: 250,
            }}
            source={modernComputerArticlePictures[0]}
          />
        </View>
        <Text style={styles.paragraph}>
          The principle of the modern computer was proposed by Alan Turing in
          his seminal 1936 paper, On Computable Numbers. Turing proposed a
          simple device that he called "Universal Computing machine" and that is
          now known as a universal Turing machine. He proved that such a machine
          is capable of computing anything that is computable by executing
          instructions (program) stored on tape, allowing the machine to be
          programmable. The fundamental concept of Turing's design is the stored
          program, where all the instructions for computing are stored in
          memory. Von Neumann acknowledged that the central concept of the
          modern computer was due to this paper. Turing machines are to this day
          a central object of study in theory of computation. Except for the
          limitations imposed by their finite memory stores, modern computers
          are said to be Turing-complete, which is to say, they have algorithm
          execution capability equivalent to a universal Turing machine.
        </Text>
        <Text style={styles.header3}>Stored programs</Text>
        <ImageModal
          resizeMode="contain"
          imageBackgroundColor="#000000"
          style={{
            width: 250,
            height: 250,
          }}
          source={modernComputerArticlePictures[1]}
        />
        <Text style={styles.paragraph}>
          Early computing machines had fixed programs. Changing its function
          required the re-wiring and re-structuring of the machine. With the
          proposal of the stored-program computer this changed. A stored-program
          computer includes by design an instruction set and can store in memory
          a set of instructions (a program) that details the computation. The
          theoretical basis for the stored-program computer was laid out by Alan
          Turing in his 1936 paper. In 1945, Turing joined the National Physical
          Laboratory and began work on developing an electronic stored-program
          digital computer. His 1945 report "Proposed Electronic Calculator" was
          the first specification for such a device. John von Neumann at the
          University of Pennsylvania also circulated his First Draft of a Report
          on the EDVAC in 1945.
        </Text>
        <Text style={styles.paragraph}>
          The Manchester Baby was the world's first stored-program computer. It
          was built at the University of Manchester in England by Frederic C.
          Williams, Tom Kilburn and Geoff Tootill, and ran its first program on
          21 June 1948.[60] It was designed as a testbed for the Williams tube,
          the first random-access digital storage device. Although the computer
          was described as "small and primitive" by a 1998 retrospective, it was
          the first working machine to contain all of the elements essential to
          a modern electronic computer. As soon as the Baby had demonstrated the
          feasibility of its design, a project began at the university to
          develop it into a practically useful computer, the Manchester Mark 1.
        </Text>
        <Text style={styles.paragraph}>
          The Mark 1 in turn quickly became the prototype for the Ferranti Mark
          1, the world's first commercially available general-purpose computer.
          Built by Ferranti, it was delivered to the University of Manchester in
          February 1951. At least seven of these later machines were delivered
          between 1953 and 1957, one of them to Shell labs in Amsterdam. In
          October 1947 the directors of British catering company J. Lyons &
          Company decided to take an active role in promoting the commercial
          development of computers. Lyons's LEO I computer, modelled closely on
          the Cambridge EDSAC of 1949, became operational in April 1951 and ran
          the world's first routine office computer job.
        </Text>
        <Text style={styles.header3}>Transistors</Text>
        <ImageModal
          resizeMode="contain"
          imageBackgroundColor="#000000"
          style={{
            width: 250,
            height: 250,
          }}
          source={modernComputerArticlePictures[3]}
        />
        <Text style={styles.paragraph}>
          The concept of a field-effect transistor was proposed by Julius Edgar
          Lilienfeld in 1925. John Bardeen and Walter Brattain, while working
          under William Shockley at{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() =>
              Linking.openURL("https://www.bell-labs.com/about/history/")
            }
          >
            Bell Labs
          </Text>
          , built the first working transistor, the point-contact transistor, in
          1947, which was followed by Shockley's bipolar junction transistor in
          1948. From 1955 onwards, transistors replaced vacuum tubes in computer
          designs, giving rise to the "second generation" of computers. Compared
          to vacuum tubes, transistors have many advantages: they are smaller,
          and require less power than vacuum tubes, so give off less heat.
          Junction transistors were much more reliable than vacuum tubes and had
          longer, indefinite, service life. Transistorized computers could
          contain tens of thousands of binary logic circuits in a relatively
          compact space. However, early junction transistors were relatively
          bulky devices that were difficult to manufacture on a mass-production
          basis, which limited them to a number of specialized applications.
        </Text>
        <Text style={styles.paragraph}>
          At the{" "}
          <Text
            style={{ color: "blue" }}
            onPress={() => Linking.openURL("https://www.manchester.ac.uk/")}
          >
            University of Manchester
          </Text>
          , a team under the leadership of Tom Kilburn designed and built a
          machine using the newly developed transistors instead of valves. Their
          first transistorized computer and the first in the world, was
          operational by 1953, and a second version was completed there in April
          1955. However, the machine did make use of valves to generate its 125
          kHz clock waveforms and in the circuitry to read and write on its
          magnetic drum memory, so it was not the first completely
          transistorized computer. That distinction goes to the Harwell CADET of
          1955, built by the electronics division of the Atomic Energy Research
          Establishment at Harwell.
        </Text>
        <Text style={styles.header3}>Integrated circuits</Text>
        <Text style={styles.paragraph}>
          Integrated circuits are typically packaged in plastic, metal, or
          ceramic cases to protect the IC from damage and for ease of assembly.
          The next great advance in computing power came with the advent of the
          integrated circuit (IC). The idea of the integrated circuit was first
          conceived by a radar scientist working for the Royal Radar
          Establishment of the Ministry of Defence, Geoffrey W.A. Dummer. Dummer
          presented the first public description of an integrated circuit at the
          Symposium on Progress in Quality Electronic Components in Washington,
          D.C., on 7 May 1952.
        </Text>
        <Text style={styles.paragraph}>
          The first working ICs were invented by Jack Kilby at Texas Instruments
          and Robert Noyce at Fairchild Semiconductor. Kilby recorded his
          initial ideas concerning the integrated circuit in July 1958,
          successfully demonstrating the first working integrated example on 12
          September 1958. In his patent application of 6 February 1959, Kilby
          described his new device as "a body of semiconductor material ...
          wherein all the components of the electronic circuit are completely
          integrated". However, Kilby's invention was a hybrid integrated
          circuit (hybrid IC), rather than a monolithic integrated circuit (IC)
          chip. Kilby's IC had external wire connections, which made it
          difficult to mass-produce.
        </Text>
        <Text style={styles.paragraph}>
          Noyce also came up with his own idea of an integrated circuit half a
          year later than Kilby. Noyce's invention was the first true monolithic
          IC chip. His chip solved many practical problems that Kilby's had not.
          Produced at Fairchild Semiconductor, it was made of silicon, whereas
          Kilby's chip was made of germanium. Noyce's monolithic IC was
          fabricated using the planar process, developed by his colleague Jean
          Hoerni in early 1959. In turn, the planar process was based on Carl
          Frosch and Lincoln Derick work on semiconductor surface passivation by
          silicon dioxide.
        </Text>
        <Text style={styles.paragraph}>
          Modern monolithic ICs are predominantly MOS
          (metal–oxide–semiconductor) integrated circuits, built from MOSFETs
          (MOS transistors). The earliest experimental MOS IC to be fabricated
          was a 16-transistor chip built by Fred Heiman and Steven Hofstein at
          RCA in 1962. General Microelectronics later introduced the first
          commercial MOS IC in 1964, developed by Robert Norman. Following the
          development of the self-aligned gate (silicon-gate) MOS transistor by
          Robert Kerwin, Donald Klein and John Sarace at Bell Labs in 1967, the
          first silicon-gate MOS IC with self-aligned gates was developed by
          Federico Faggin at Fairchild Semiconductor in 1968. The MOSFET has
          since become the most critical device component in modern ICs.
        </Text>
        <Text style={styles.header3}>Mobile computers</Text>
        <View styles={styles.imageStyle2}>
          <ImageModal
            resizeMode="contain"
            imageBackgroundColor="#000000"
            style={{
              width: 250,
              height: 250,
            }}
            source={modernComputerArticlePictures[4]}
          />
        </View>
        <Text style={styles.paragraph}>
          The first mobile computers were heavy and ran from mains power. The 50
          lb (23 kg) IBM 5100 was an early example. Later portables such as the
          Osborne 1 and Compaq Portable were considerably lighter but still
          needed to be plugged in. The first laptops, such as the Grid Compass,
          removed this requirement by incorporating batteries – and with the
          continued miniaturization of computing resources and advancements in
          portable battery life, portable computers grew in popularity in the
          2000s. The same developments allowed manufacturers to integrate
          computing resources into cellular mobile phones by the early 2000s.
        </Text>
        <Text style={styles.paragraph}>
          These smartphones and tablets run on a variety of operating systems
          and recently became the dominant computing device on the market. These
          are powered by System on a Chip (SoCs), which are complete computers
          on a microchip the size of a coin.
        </Text>
      </ScrollView>
    </View>
  );
}

const backgroundColor = "#FFEFD3";
const textColor = "#001f54";
const bottomPadding = 20;
const boldText = "CourierPrimeBold";
const regText = "CourierPrimeRegular";

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
    color: textColor,
    paddingBottom: bottomPadding,
    fontFamily: regText,
  },
  // imageContainer1: {
  //   width: 100,
  //   aspectRatio: 1.5,

  // },
  // imageStyle1: {
  //   flex: 0,
  //   width: "100%",
  //   height: "100%",
  //   resizeMode: 'contain',
  // },
});
