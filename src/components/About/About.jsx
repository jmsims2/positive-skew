import React from "react";
import Helmet from "react-helmet";
import SEO from "../../components/SEO/SEO";
import config from "../../../data/SiteConfig";
import MainHeader from "../../layouts/MainHeader/MainHeader";
import MainNav from "../../layouts/MainNav/MainNav";
import BlogLogo from "../../components/BlogLogo/BlogLogo";
import MenuButton from "../../components/MenuButton/MenuButton";
import Drawer from "../../layouts/Drawer/Drawer";
import Navigation from "../../components/Navigation/Navigation";
import SiteWrapper from "../../layouts/SiteWrapper/SiteWrapper";
import MainContent from "../../layouts/MainContent/MainContent";
import PostHeader from "../../layouts/PostHeader/PostHeader";
import PostFormatting from "../../layouts/PostFormatting/PostFormatting";
import PostDate from "../../components/PostDate/PostDate";
import PostFooter from "../../layouts/PostFooter/PostFooter";
import AuthorImage from "../../components/AuthorImage/AuthorImage";
import AuthorInfo from "../../components/AuthorInfo/AuthorInfo";
import PostShare from "../../components/PostShare/PostShare";
import GhostSubscribe from "../../components/GhostSubscribe/GhostSubscribe";
import ReadNext from "../../components/ReadNext/ReadNext";
import PostTags from "../../components/PostTags/PostTags";
import Footer from "../../components/Footer/Footer";
import AuthorModel from "../../models/author-model";
import Disqus from "../../components/Disqus/Disqus";

class About extends React.Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const className = "post";
    const authorData = {
      id: "jeffsims",
      name: "Jeff Sims",
      image: "https://github.com/jmsims2.png?size=150",
      url: "https://positiveskew.io",
      location: "Ann Arbor, MI",
      bio: "I really like JavaScript.",
      socialUrls: [
        "https://github.com/jmsims2",
        "https://twitter.com/jmsims2",
        "mailto:jmsims2@gmail.com"
      ]
    };

    return (
      <Drawer className="post-template" isOpen={this.state.menuOpen}>
        <Helmet>
          <title>{`${"Hi, I'm Jeff Sims."} | ${config.siteTitle}`}</title>
        </Helmet>

        {/* The blog navigation links */}
        <Navigation config={config} onClose={this.handleOnClose} />

        <SiteWrapper>
          <MainHeader className="post-head">
            <MainNav>
              <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
              <MenuButton
                navigation={config.siteNavigation}
                onClick={this.handleOnClick}
              />
            </MainNav>
          </MainHeader>
          <MainContent>
            <PostFormatting className={className}>
              <PostHeader>
                <h1 className="post-title">Hi, I'm Jeff Sims</h1>
              </PostHeader>

              <section className="post-content">
                <p>
                  I am a self-taught, remote JavaScript developer currently
                  living in Ann Arbor, MI. I started to enjoy writing code after
                  I graduated college. My first job involved a lot of SQL for
                  data analysis and database marketing. I loved the thrill of
                  constructing the perfect query or the anxiety of updating data
                  in bulk (don't forget the where clause!).
                </p>
                <p>
                  In 2011, I started working for the Detroit Red Wings as their
                  CRM and Analytics Manager. During the course of my job I was
                  able to utilize JavaScript to customize the front-end of
                  Microsoft Dynamics and Qualtrics survery tool. I was hooked! I
                  started reading everything I could and began developing
                  personal web applications. One such app was a found change
                  tracker: my wife and I loved walking around Detroit and seeing
                  who could find the most change. I built an app that had a form
                  to put in how much change and the app would grab your location
                  when you submit the form and the data would get displayed on a
                  map.
                </p>
                <p>
                  After 2 years at the Wings, my dream job at the Detroit Lions
                  opened up. It was a similar role with greater responsibility.
                  I jumped at the chance to take it. While there, I was able to
                  work on several interesting projects and continue to grow as a
                  developer. I was very lucky in that the VP of Technology was
                  extremely encouraging and would give my development projects
                  to work on for him. One project was a personalized URL for all
                  of the Detroit Lions Season Ticket Holders. Each season ticket
                  holder would get their URL and the page would display their
                  invoice for renewing season tickets, along with information on
                  their benefits, who their account rep was, among other things.
                  I developed the project from scratch, on my own, using the
                  Foundation framework on the frontend and Node.js on the
                  backend. I stored the data in a mongo database and deployed
                  the app to Heroku. Not bad for a self-taught developer!
                </p>
                <p>
                  My coding itch was not going away and ultimately I decided to
                  leave the Detroit Lions so I could pursue becoming an engineer
                  full-time. I was able to join StoneTimberRiver, who I had
                  worked with when I was with the Red Wings. While there, I
                  redeveloped one of the core products to manage sponsorship
                  inventory, developed a tool for our clients to manage
                  campaigns in bulk and was the lead developer on our latest
                  product, Discovery. Discovery is a custom frontend for
                  Microsoft Dynamics or Salesforce originally written in
                  Angularjs and currently being ported to React. The server is
                  written in Nodejs and hits either the Dynamics or Salesforce
                  api and then serializes and standardizes the data before
                  returning it to the frontend. In August 2018, StoneTimberRiver
                  was bought by SSB. I'm still employed by SSB and was recently
                  promoted to Senior Software Engineer.
                </p>
                <p>
                  When I'm not busy with my day job or hacking on a personal
                  project, I'm probably chasing my young daughter around or
                  hiking with her and my wife. I've lived in Detroit, MI,
                  Boulder, CO, Grand Lake, CO and Ann Arbor, MI. Currently
                  trying to figure out a way back to Colorado!
                </p>
              </section>

              <PostFooter>
                <AuthorImage author={authorData} />
                <AuthorInfo prefix="/author" author={authorData} />
                <GhostSubscribe />
              </PostFooter>
            </PostFormatting>
          </MainContent>

          {/* The tiny footer at the very bottom */}
          <Footer
            copyright={config.copyright}
            promoteGatsby={config.promoteGatsby}
          />
        </SiteWrapper>
      </Drawer>
    );
  }
}

export default About;
