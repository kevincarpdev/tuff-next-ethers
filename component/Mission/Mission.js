
import React from "react";
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
        <h3 className={s.header}>Our Roadmap</h3>
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
            <VerticalTimeline lineColor={'#ED6E70'}>
              <VerticalTimelineElement
                className={cn(s.timelineDiv, 'vertical-timeline-element--work')}
                contentStyle={{ background: 'rgba(185,79,79,.6901960784313725)', color: '#fff' }}
                date="25% Sold"
                iconStyle={{ background: 'rgb(255,255,255)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">We launch exclusive giveaways for Tuff Guys holders.</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={cn(s.timelineDiv, 'vertical-timeline-element--work')}
                contentStyle={{ background: 'rgba(185,79,79,.6901960784313725)', color: '#fff' }}
                date="50% Sold"
                iconStyle={{ background: 'rgb(255,255,255)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">We release limited merch for all the tuff guys (and gals) that own Tuff Guys.</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={cn(s.timelineDiv, 'vertical-timeline-element--work')}
                contentStyle={{ background: 'rgba(185,79,79,.6901960784313725)', color: '#fff' }}
                date="75% Sold"
                iconStyle={{ background: 'rgb(255,255,255)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">Time for AIRDROPS!</h3>
                <p>
                  We will begin to airdrop our holders equipment that they can use in the Metaverse.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={cn(s.timelineDiv, 'vertical-timeline-element--work')}
                contentStyle={{ background: 'rgba(185,79,79,.6901960784313725)', color: '#fff' }}
                date="90% Sold"
                iconStyle={{ background: 'rgb(255,255,255)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">As a treat for early supporters, not only will we ramp up existing giveaways for rare Tuff Guys, but we will begin to actively reward the most contributive and committed among the community.</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className={cn(s.timelineDiv, 'vertical-timeline-element--work')}
                contentStyle={{ background: 'rgba(185,79,79,.6901960784313725)', color: '#fff' }}
                date="100% Sold"
                iconStyle={{ background: 'rgb(255,255,255)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">We begin to develop our COMIC STRIPS featuring your own tuff guys and using them to spread mental health awareness. These will be airdropped to every single Tuff Guy holder. This will kick off the 2nd generation of Tuff guys and our roadmap will keep up with MONTHLY updates.</h3>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
              />
            </VerticalTimeline>
          </div>
        </div>
      </section>
    </>
  );
}
