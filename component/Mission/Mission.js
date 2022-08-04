
import React, { useState } from "react";
import s from "./Mission.module.css";
import cn from "classnames";
import Image from 'next/image'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Roadmap from "../../public/img/roadmap.png";
import Community from "../../public/img/mission1.png";
import MentalHealth from "../../public/img/mission2.png";
import Charity from "../../public/img/mission3.png";

export default function Utility() {

  const [enabled, setEnabled] = useState(true)
  const toggleClass = " transform translate-x-6";

  return (
    <>
      <section id="mission" className={cn(s.root, 'off-white')}>
        <div className={cn(s.ourMission, 'container')}>
          
          <h2 className={s.ourMissionHeader}>Our Tuff Mission</h2>
          <div className={cn(s.contentRow)}>
            <div className={s.contentColumn}>
              <div className={cn(s.content, s.community)}>
                <Image
                  src={Community}
                  alt="Community"
                  quality="85"
                  layout="fixed"
                  width={70}
                  height={61}
                  placeholder="blur"
                  className={s.contentImage}
                  loading="lazy"
                />
              </div>
              <h4 className={cn(s.contentTitle, s.communityTitle)}>Community</h4>
              <p>Our community drives everything here at Tuff Guys, We are creating a community that believes in our goals and contributes a positive impact towards our mission. Come over to our Discord and tune into our weekly Mental Health seminars for Free!</p>
            </div>
            <div className={s.contentColumn}>
              <div className={cn(s.content, s.mentalHealth)}>
                <Image
                  src={MentalHealth}
                  alt="Mental Health"
                  quality="85"
                  layout="fixed"
                  width={64}
                  height={45}
                  placeholder="blur"
                  className={s.contentImage}
                  loading="lazy"
                />
              </div>
              <h4 className={cn(s.contentTitle, s.mentalHealthTitle)}>Mental Health</h4>
              <p>Mental health is a big concern in our society and we hope to shine a light on the situation with our community.</p>
            </div>
            <div className={s.contentColumn}>
              <div className={cn(s.content, s.charity)}>
                <Image
                  src={Charity}
                  alt="Charity"
                  quality="85"
                  layout="fixed"
                  width={74}
                  height={45}
                  placeholder="blur"
                  className={s.contentImage}
                  loading="lazy"
                />
              </div>
              <h4 className={cn(s.contentTitle, s.charityTitle)}>Charity</h4>
              <p>Our team here at Tuff Guys will be donating to various charities focusing on Mental Health. The Charities will be selected with our discord community.</p>
            </div>
          </div>
        </div>
        <div className={s.gridWrapper}>
          <div className={s.imageWrapper}>
            <Image
              src={Roadmap}
              alt="Roadmap"
              quality="85"
              layout="fixed"
              width={313}
              height={250}
              placeholder="blur"
              className={s.roadmapImage}
              loading="lazy"
            />
          </div>

          <div className={s.roadmapWrapper}>
            <div className={s.roadmapHeader}>
              <h2 className={s.roadmapHeaderHeadline}>Our Roadmap</h2>
              <div className={s.toggleDiv}>
                <h3 className={cn(s.toggleStateHeader, enabled ? null : 'active')}>Roadmap</h3>
                <div
                  className={s.toggleSwitch}
                  onClick={() => {
                    setEnabled(!enabled);
                  }}
                >
                  <div className={cn(s.toggleKnob, enabled ? null : toggleClass)} />
                </div>
                <h3 className={cn(s.toggleStateHeader, enabled ? 'active' : null)}>Donations</h3>
              </div>
            </div>
           

            {enabled ? (
              <>
                <h3 className={s.header}>Tuffs Metaverse Journey</h3>
                <VerticalTimeline lineColor={'#ED6E70'}>
                  <VerticalTimelineElement
                    className={cn(s.timelineDiv, 'vertical-timeline-element--work')}
                    contentStyle={{ color: '#fff' }}
                    date="25%"
                    iconStyle={{ background: '#ED6E70', color: '#fff' }}
                  >
                    <p>We launch exclusive giveaways for Tuff Guys holders.</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className={cn(s.timelineDiv, 'vertical-timeline-element--work')}
                    contentStyle={{ color: '#fff' }}
                    date="50%"
                    iconStyle={{ background: '#ED6E70', color: '#fff' }}
                  >
                    <p>We release limited merch for all the tuff guys (and gals) that own Tuff Guys.</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className={cn(s.timelineDiv, 'vertical-timeline-element--work')}
                    contentStyle={{ color: '#fff' }}
                    date="75%"
                    iconStyle={{ background: '#ED6E70', color: '#fff' }}
                  >
                    <p>
                      Time for AIRDROPS!
                      We will begin to airdrop our holders equipment that they can use in the Metaverse.
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className={cn(s.timelineDiv, 'vertical-timeline-element--work')}
                    contentStyle={{ color: '#fff' }}
                    date="90%"
                    iconStyle={{ background: '#ED6E70', color: '#fff' }}
                  >
                    <p>As a treat for early supporters, not only will we ramp up existing giveaways for rare Tuff Guys, but we will begin to actively reward the most contributive and committed among the community.</p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                    className={cn(s.timelineDiv, 'vertical-timeline-element--work')}
                    contentStyle={{ color: '#fff' }}
                    date="100%"
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                  >
                    <p>We begin to develop our COMIC STRIPS featuring your own tuff guys and using them to spread mental health awareness. These will be airdropped to every single Tuff Guy holder. This will kick off the 2nd generation of Tuff guys and our roadmap will keep up with MONTHLY updates.</p>
                  </VerticalTimelineElement>

                </VerticalTimeline>
              </>
              
            ) : (
                <>
                <div className={s.switchContent}>
                    <h3 className={s.header}>Mental Health Roadmap</h3>
                    <p>Our primary aim with Tuff Guys is to create a strong contribution towards mental health and shining a light on the situation. Mental health awareness is something that impacts all of us, and we are partnering up with a number of leading foundations to help drive awareness.</p>
                    <p>We plan to donate a total of 55 Ethereum to respective charities that the entire Tuff Guys community will decide together on. We will break up the pool of donations into Ten total tiers:</p>
                </div>
                  
                 <VerticalTimeline lineColor={'#ED6E70'}>
                    <VerticalTimelineElement
                      className={cn(s.timelineDiv, s.donationsDiv, 'donations')}
                      contentStyle={{ color: '#fff' }}
                      date="10%"
                      iconStyle={{ background: '#ED6E70', color: '#fff' }}
                    >
                      <h2>1ETH</h2>
                      <h3 className={s.donations}>Will be donated to charity of communities choice.</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className={cn(s.timelineDiv, s.donationsDiv, 'donations')}
                      contentStyle={{ color: '#fff' }}
                      date="20%"
                      iconStyle={{ background: '#ED6E70', color: '#fff' }}
                    >
                      <h2>2ETH</h2>
                      <h3>Will be donated to charity of communities choice.</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className={cn(s.timelineDiv, s.donationsDiv, 'donations')}
                      contentStyle={{ color: '#fff' }}
                      date="30%"
                      iconStyle={{ background: '#ED6E70', color: '#fff' }}
                    >
                      <h2>3ETH</h2>
                      <h3>Will be donated to charity of communities choice.</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className={cn(s.timelineDiv, s.donationsDiv, 'donations')}
                      contentStyle={{ color: '#fff' }}
                      date="40%"
                      iconStyle={{ background: '#ED6E70', color: '#fff' }}
                    >
                      <h2>4ETH</h2>
                      <h3>Will be donated to charity of communities choice.</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className={cn(s.timelineDiv, s.donationsDiv, 'donations')}
                      contentStyle={{ color: '#fff' }}
                      date="50%"
                      iconStyle={{ background: '#ED6E70', color: '#fff' }}
                    >
                      <h2>5ETH</h2>
                      <h3>Will be donated to charity of communities choice.</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className={cn(s.timelineDiv, s.donationsDiv, 'donations')}
                      contentStyle={{ color: '#fff' }}
                      date="60%"
                      iconStyle={{ background: '#ED6E70', color: '#fff' }}
                    >
                      <h2>6ETH</h2>
                      <h3>Will be donated to charity of communities choice.</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className={cn(s.timelineDiv, s.donationsDiv, 'donations')}
                      contentStyle={{ color: '#fff' }}
                      date="70%"
                      iconStyle={{ background: '#ED6E70', color: '#fff' }}
                    >
                      <h2>7ETH</h2>
                      <h3>Will be donated to charity of communities choice.</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className={cn(s.timelineDiv, s.donationsDiv, 'donations')}
                      contentStyle={{ color: '#fff' }}
                      date="80%"
                      iconStyle={{ background: '#ED6E70', color: '#fff' }}
                    >
                      <h2>8ETH</h2>
                      <h3>Will be donated to charity of communities choice.</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className={cn(s.timelineDiv, s.donationsDiv, 'donations')}
                      contentStyle={{ color: '#fff' }}
                      date="90%"
                      iconStyle={{ background: '#ED6E70', color: '#fff' }}
                    >
                      <h2>9ETH</h2>
                      <h3>Will be donated to charity of communities choice.</h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className={cn(s.timelineDiv, s.donationsDiv, 'donations')}
                      contentStyle={{ color: '#fff' }}
                      date="100%"
                      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    >
                      <h2>10ETH</h2>
                      <h3>Will be donated to charity of communities choice.</h3>
                    </VerticalTimelineElement>

                  </VerticalTimeline>
                </>
            )
            }
            
          </div>
        </div>
      </section>
    </>
  );
}
