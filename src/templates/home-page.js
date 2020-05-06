import React from "react"
import { connect } from "react-redux"
import { Button, Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import {
  App,
  EmailForm,
  Icons,
  Image,
  ImageLink,
  PageSection,
  Profile,
} from "../components"
import { sections, WHITEPAPER_URL } from "../constants"
import { actions, actionTypes } from "../redux"

export const HomePageTemplate = ({
  hero = {},
  images = {},
  signupMailingList = () => {},
  ajaxRequestStates = {},
  partners_section: partnersSection = {},
  supporters_section: supportersSection = {},
}) => {
  const handleSignupDiscord = ({ email }) => {
    signupMailingList({ email, discordSignup: true })
  }

  return (
    <div className="main-content">
      <PageSection id={sections.HOME}>
        <Row>
          <Col xs={12} sm={7}>
            <h1>{hero.title}</h1>
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: hero.body }}
            />
          </Col>
          <Col xs={12} sm={5} className="col-circles">
            <Image imageData={images.textureCircle1} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.DISCORD}>
        <Row className="discord-signup">
          <Col xs={12} sm={7}>
            <EmailForm
              label="Discord Email"
              placeholder="you@example.com"
              onSubmit={handleSignupDiscord}
              requestStates={ajaxRequestStates}
              request={actionTypes.SIGNUP_MAILING_LIST}
            >
              <h3>
                Join our community on
                <span className="discord-logo">Discord</span>
              </h3>
            </EmailForm>
          </Col>
          <Col xs={12} sm={5} className="col-circles">
            <div>
              <Image imageData={images.textureCircle2} />
            </div>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.GITHUB}>
        <Row>
          <Col xs={12} md={12}>
            <h3>
              View the
              <a
                className="github-logo"
                href="https://github.com/keep-network"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              Repository
              <Button
                href="https://github.com/keep-network"
                color="primary"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icons.ArrowRight />
              </Button>
            </h3>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.MAILING_LIST}>
        <Row>
          <Col sm={12} md={{ size: 8, offset: 2 }}>
            <EmailForm
              label="Email"
              placeholder="you@example.com"
              onSubmit={signupMailingList}
              requestStates={ajaxRequestStates}
              request={actionTypes.SIGNUP_MAILING_LIST}
            >
              <h3>Join our mailing list</h3>
            </EmailForm>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.LEARN}>
        <div className="col">
          <h2 className="h1">Find out how to use Keep</h2>
        </div>
        <div className="col">
          <div>
            <Icons.Book />
            <h4>Whitepaper</h4>
            <Button
              href={WHITEPAPER_URL}
              color="primary"
              download="Keep Whitepaper"
              rel="noopener noreferrer"
              target="_blank"
              size="lg"
            >
              Download
            </Button>
          </div>
          <div>
            <Icons.Strategy />
            <h4>Business Primer</h4>
            <Button
              href="/KeepBusinessPrimer.pdf"
              color="primary"
              download="Keep Business Primer"
              rel="noopener noreferrer"
              target="_blank"
              size="lg"
            >
              Download
            </Button>
          </div>
        </div>
      </PageSection>
      <PageSection
        id={sections.DEFINITION}
        additionalClassNames={["blurb", "blurb-desktop"]}
      >
        <div className="blurb-panel">
          <div className="blurb-icon">
            <Icons.CastleGate />
          </div>
          <div className="blurb-text">
            <p>
              Keep: <span>(n.)</span>
            </p>
            <p>
              The strongest or central tower of a castle, acting as a final
              refuge
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection id={sections.USES}>
        <h2 className="h1">Keep Applications</h2>
        <div className="use-case">
          <Icons.Signing />
          <h4>Decentralized Signing</h4>
        </div>
        <div className="use-case">
          <Icons.Switch />
          <h4>Dead Man Switch</h4>
        </div>
        <div className="use-case">
          <Icons.Wallet />
          <h4>Custodial Wallets</h4>
        </div>
        <div className="use-case">
          <Icons.Cart />
          <h4>Marketplaces for Digital Goods</h4>
        </div>
        <div className="use-case">
          <Icons.BlockchainStorage />
          <h4>Blockchain Storage Encryption</h4>
        </div>
        <div className="use-case">
          <a
            href={WHITEPAPER_URL}
            download="Keep Whitepaper"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icons.Book color="#48dbb4" />
            <h4>Learn More in the Whitepaper</h4>
          </a>
        </div>
        <div className="blurb-panel blurb-mobile">
          <div className="blurb-icon">
            <Icons.CastleGate />
          </div>
          <div className="blurb-text">
            <p>
              Keep: <span>(n.)</span>
            </p>
            <p>
              The strongest or central tower of a castle, acting as a final
              refuge
            </p>
          </div>
        </div>
        <div className="blurb-panel blurb-mobile">
          <div className="blurb-icon">
            <Icons.Axe />
          </div>
          <div className="blurb-text">
            <p>
              Keeps provide a bridge between the world of public blockchains and
              private data. It enables a new wave of ground-up innovation for
              blockchain developers.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection id={sections.TEAM} collapsible>
        <h2>Our Team</h2>
        <Profile
          name="Matt Luongo"
          title="Project Lead"
          imagePath="/img/headshots/matt"
          imageMaxRes={3}
          twitter="https://twitter.com/mhluongo"
          linkedin="https://www.linkedin.com/in/mattluongo"
          github="https://github.com/mhluongo"
          keybase="http://keybase.io/mhluongo"
        />
        <Profile
          name="Corbin Pon"
          title="Developer & Ops"
          imagePath="/img/headshots/corbin"
          imageMaxRes={3}
          twitter="https://twitter.com/CorbinPon"
          linkedin="https://www.linkedin.com/in/corbinpon"
          github="https://github.com/clp16"
          keybase="http://keybase.io/corbinpon"
        />
        <Profile
          name="Antonio Salazar Cardozo"
          title="Head of Engineering"
          imagePath="/img/headshots/antonio"
          imageType="png"
          imageMaxRes={3}
          twitter="https://twitter.com/lightfiend"
          linkedin="https://www.linkedin.com/in/lightfiend"
          github="https://github.com/Shadowfiend"
          keybase="http://keybase.io/shadowfiend"
        />
        <Profile
          name="Carolyn Reckhow"
          title="Head of Business Strategy"
          imagePath="/img/headshots/carolyn"
          imageType="jpg"
          imageMaxRes={2}
          twitter="https://twitter.com/CReckhow"
          linkedin="https://www.linkedin.com/in/carolyn-reckhow-73345a1a"
          github="https://github.com/creckhow"
          keybase="http://keybase.io/carolynreckhow"
        />
        <Profile
          name="Michael Gluzman"
          title="Head of Design"
          imagePath="/img/headshots/michael"
          imageType="png"
          imageMaxRes={3}
          twitter="https://twitter.com/gluzman"
          linkedin="https://www.linkedin.com/in/michaelgluzman/"
          github="https://github.com/gluzman"
          keybase="http://keybase.io/gluzzz"
        />
        <Profile
          name="Piotr Dyraga"
          title="Tech Lead"
          imagePath="/img/headshots/piotr"
          imageMaxRes={3}
          imageType="jpg"
          twitter="https://twitter.com/piotrdyraga?lang=en"
          linkedin="https://www.linkedin.com/in/piotrdyraga/"
          github="https://github.com/pdyraga"
        />
        <Profile
          name="Promethea Raschke"
          title="Protocol Designer"
          imagePath="/img/headshots/promethea"
          imageType="png"
          imageMaxRes={3}
          github="https://github.com/eth-r"
        />
        <Profile
          name="Sloan Thompson"
          title="Head of DevOps"
          imagePath="/img/headshots/sloanThompson"
          imageType="jpg"
          imageMaxRes={3}
          twitter="https://twitter.com/SloanThompson"
          linkedin="https://www.linkedin.com/in/sloansthompson/"
          github="https://github.com/sthompson22"
          keybase="http://keybase.io/fekta"
        />
        <Profile
          name="Nik Grinkevich"
          title="Developer"
          imagePath="/img/headshots/nik"
          imageMaxRes={3}
          twitter="https://twitter.com/ngrinkevich"
          linkedin="https://www.linkedin.com/in/nikgrinkevich"
          github="https://github.com/ngrinkevich"
          keybase="https://keybase.io/nikgrinkevich"
        />
        <Profile
          name="Jakub Nowakowski"
          title="Developer"
          imagePath="/img/headshots/jakub"
          imageMaxRes={3}
          imageType="jpg"
          twitter="https://twitter.com/jnowakow8"
          linkedin="https://www.linkedin.com/in/jnowakowski8/"
          github="https://github.com/nkuba"
        />
        <Profile
          name="Nicholas Evans"
          title="Developer"
          imagePath="/img/headshots/nicholas"
          imageType="png"
          imageMaxRes={3}
          twitter="https://twitter.com/NicholasEvans14"
          github="https://github.com/NicholasDotSol"
          keybase="http://keybase.io/evansnicholaskb"
        />
        <Profile
          name="Dmitry Paremski"
          title="Developer"
          imagePath="/img/headshots/dmitryParemski"
          imageType="jpg"
          imageMaxRes={3}
          twitter="https://twitter.com/dmitry_paremski"
          linkedin="https://www.linkedin.com/in/paremski/"
          github="https://github.com/dimpar"
          keybase="http://keybase.io/dparemski"
        />
        <Profile
          name="Liam Zebedee"
          title="Developer"
          imagePath="/img/headshots/liamZebedee"
          imageMaxRes={3}
          twitter="https://twitter.com/liamzebedee"
          linkedin="https://www.linkedin.com/in/liamedwardsplayne/"
          github="https://github.com/liamzebedee"
          keybase="https://keybase.io/liamzebedee"
        />
        <Profile
          name="Erin Ng"
          title="Developer"
          imagePath="/img/headshots/erin"
          imageMaxRes={3}
          linkedin="https://www.linkedin.com/in/erinng/"
          github="https://github.com/ironng"
          keybase="http://keybase.io/ironng"
        />
        <Profile
          name="Laura Wallendal"
          title="General Manager"
          imagePath="/img/headshots/laura"
          imageMaxRes={3}
          twitter="https://twitter.com/LauraWallendal"
          linkedin="https://www.linkedin.com/in/laurawallendal"
          keybase="http://keybase.io/lwallendal"
        />
      </PageSection>
      <PageSection
        id={sections.DESCRIPTION}
        additionalClassNames={["blurb", "blurb-desktop"]}
      >
        <div className="blurb-panel">
          <div className="blurb-icon">
            <Icons.Axe />
          </div>
          <div className="blurb-text">
            <p>
              Keeps provide a bridge between the world of public blockchains and
              private data. It enables a new wave of ground-up innovation for
              blockchain developers.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection id={sections.ADVISORS} collapsible>
        <h2>Our Advisors</h2>
        <Profile
          name="Brayton Williams"
          title="Boost VC"
          imagePath="/img/headshots/brayton"
          imageMaxRes={3}
          twitter="https://twitter.com/BraytonKey"
          linkedin="https://www.linkedin.com/in/braytonwilliams"
        />
        <Profile
          name="John Packel"
          title="Hard Core Decentralization Developer"
          imagePath="/img/headshots/john"
          imageMaxRes={3}
          twitter="https://twitter.com/jpackel"
          linkedin="https://www.linkedin.com/in/johnpackel"
        />
        <Profile
          name="James Prestwich"
          title="Summa, formerly Storj Labs"
          imagePath="/img/headshots/jamesPrestwich"
          imageMaxRes={3}
          linkedin="https://www.linkedin.com/in/prestwich"
        />
        <Profile
          name="Axel Blikstad"
          title="International Finance"
          imagePath="/img/headshots/axel"
          imageMaxRes={3}
          linkedin="https://www.linkedin.com/in/axel-blikstad-77534814"
        />
        <Profile
          name="Joseph Urgo"
          title="district0x"
          imagePath="/img/headshots/josephUrgo"
          imageMaxRes={3}
          twitter="https://twitter.com/jfurgo?lang=en"
          linkedin="https://www.linkedin.com/in/joseph-urgo-a8b77983/"
        />
        <Profile
          name="Luis Cuende"
          title="Aragon"
          imagePath="/img/headshots/luisCuende"
          imageMaxRes={3}
          twitter="https://twitter.com/licuende?lang=en"
          linkedin="https://www.linkedin.com/in/luisivancuende/"
        />
      </PageSection>
      <PageSection id={sections.PARTNERS} convex>
        <h2>{partnersSection.title}</h2>
        <Row>
          {partnersSection.partners.map((partner, i) => (
            <ImageLink
              key={`partner-${i}`}
              url={partner.url}
              label={partner.name}
              image={partner.logo}
            />
          ))}
        </Row>
      </PageSection>
      <PageSection id={sections.SUPPORTERS} convex>
        <h2>{supportersSection.title}</h2>
        <Row>
          {supportersSection.supporters.map((supporter, i) => (
            <ImageLink
              key={`supporter-${i}`}
              url={supporter.url}
              label={supporter.name}
              image={supporter.logo}
            />
          ))}
        </Row>
      </PageSection>
    </div>
  )
}

HomePageTemplate.propTypes = {
  hero: PropTypes.object,
  images: PropTypes.object,
  signupMailingList: PropTypes.func,
  ajaxRequestStates: PropTypes.object,
  partners_section: PropTypes.object,
  supporters_section: PropTypes.object,
}

const mapStateToProps = (state) => ({
  ajaxRequestStates: state.ajaxRequestStates,
})

export const ConnectedHomePage = connect(mapStateToProps, {
  signupMailingList: actions.signupMailingList,
})(HomePageTemplate)

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data
  const images = {
    textureCircle1: data.textureCircle1,
    textureCircle2: data.textureCircle2,
  }
  return (
    <App>
      <ConnectedHomePage {...post.frontmatter} images={images} />
    </App>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    textureCircle1: PropTypes.object,
    textureCircle2: PropTypes.object,
  }),
}

export default HomePage

export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hero {
          title
          body
        }
        partners_section {
          title
          partners {
            name
            url
            logo {
              image {
                childImageSharp {
                  fluid(maxWidth: 315, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
        supporters_section {
          title
          supporters {
            name
            url
            logo {
              image {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              alt
            }
          }
        }
      }
    }
    textureCircle1: file(relativePath: { regex: "/texture-circle.png/" }) {
      childImageSharp {
        fluid(maxWidth: 574, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    textureCircle2: file(relativePath: { regex: "/texture-circle-2.png/" }) {
      childImageSharp {
        fluid(maxWidth: 604, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
