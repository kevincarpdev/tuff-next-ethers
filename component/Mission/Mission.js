
import React from "react";
import s from "./Mission.module.css";
import cn from "classnames";
import Image from 'next/image'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Roadmap from "../../public/img/roadmap.png";

export default function Utility() {
  return (
    <>
      <section id="mission" className={cn(s.root, 'off-white')}>
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
