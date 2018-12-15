import Container from "../components/Container";
import React from "react";
import Layout from "../components/Layout";
import Meta from "../components/Meta";

export default () => (
  <Layout>
    <Meta />
    <Container padding>
      <section className="intro">
        <article>
          <h1>There are rules to this shit.</h1>
          <h3>Basic Rules</h3>
          <ul>
            <li>
              If you threaten the safety of anyone on this server, you will be
              permabanned instantly. This includes swatting, death threats,
              exposing someones identity, or anything else illegal.
            </li>
            <li>
              Excessive hot mic activity will be met with a swift kick from the
              channel or server.
            </li>
            <li>
              This is the Internet. Your feelings do not matter. That being
              said, We don't condone any form of Racism. None. Any Hard R or
              Racist memes will result in an instant BAN.
            </li>
            <li>
              BTF and it’s permanent members can and will follow up the "BAN
              POLICY" with repeated offenders without warning. You may challenge
              this ban with a rather gentlemanly Trial By Combat. If you lose,
              it’s back to the original ban. If you win, you may or may not be
              banned for an acceptable amount of time in relation to the gravity
              of your crime.
            </li>
            <li>
              Please do not speak over each other, BTF members have priority
              talk over the guests. Remember this otherwise you will get a swift
              kick from the server/channel, repeat offenders will be followed up
              by the "BAN POLICY"
            </li>
            <li>
              No chat spam, please. Memes are dank and all, but no one wants to
              see all 746 memes you liked today.
            </li>
          </ul>

          <h3>VIP Policy</h3>
          <ul>
            <li>
              You need to get to know BTF members to become VIP on our servers.
            </li>
            <li>
              You need to be active on our TeamSpeak and/or Discord quite often.
            </li>
            <li>Do not bug BTF members about getting VIP privileges.</li>
            <li>
              Don’t abuse your power once you recieve VIP status. BTF members
              can and will remove all of your server priveleges until they are
              sure you can act like an adult.
            </li>
          </ul>

          <h3>BTF Recruitment Policy</h3>
          <ul>
            <li>
              Don't bug, bother, or in any way pressure VIPs or members about
              joining BTF.
            </li>
            <li>
              These things take time, do not expect to become BTF overnight.
            </li>
            <li>VIP Members don't get privilege over non-VIP's.</li>
          </ul>

          <h3>Streaming/Content Policy</h3>
          <ul>
            <li>
              If someone's blue dot on TeamSpeak is orange, then they are
              streaming. Please be respectful.
            </li>
            <li>
              If you consistently hot mic on stream, expect a swift mute or kick
              from the channel.
            </li>
            <li>
              Understand that YOU ARE NOT IMPORTANT, the streamer is, in the
              context of content creation. Keep chat to a minimum and don’t
              cause a scene, or otherwise you will be kicked and/or eventually
              banned.
            </li>
          </ul>

          <h3>Ban Policy</h3>
          <ul>
            <li>
              First offense is a written warning. Failure to listen to this
              warning will result in a 60 minute or less ban from all of our
              servers.
            </li>
            <li>Your second offense earns you a 24 hour or less ban.</li>
            <li>
              Your third offense means you'll be banned for up to 30 days.
            </li>
            <li>
              If you even make it to a fourth offense, your server tags and BTF
              credentials will be revoked for up to one year.
            </li>
            <li>
              If, after four offenses, you continue to act in a manner that goes
              against our rules, you will be permanently banned from all of our
              servers. NO EXCEPTIONS. NO TAKE-BACKS. YOU'RE OUTTA HERE, CHIEF!
            </li>
          </ul>
        </article>
      </section>
    </Container>
  </Layout>
);