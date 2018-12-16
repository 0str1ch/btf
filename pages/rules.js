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
          <h1>There are rules to this shit, so we wrote you a manual.</h1>
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
              We don't condone any form of bigotry, discrimination, or
              harassment on our servers, during our streams, or in real life.
              Ever. If you enagage in any forms of the aforementioned behaviors,
              including sharing racist memes or doxxing someone on the server,
              expect to be permanently banned immediately. There are no
              exceptions to this rule.
            </li>
            <li>
              BTF and it’s members can and will enfore these all of these rules,
              and may ban or kick repeated offenders without warning. If your
              infraction is not serious and is considered annoying but harmless
              in nature, you may challenge your first ban with a rather
              gentlemanly Trial By Combat in a game of our choosing. If you
              lose, you'll be banned for the appropriate amount of time. If you
              win your Trial By Combat, you may or may not be banned for an
              acceptable amount of time in relation to the gravity of your
              infraction(s).{" "}
              <strong>
                There is no appealing bans related to bigotry, discrimination,
                or harassment. You have been warned. Twice, now, by our count.
              </strong>
            </li>
            <li>
              Please do not speak over each other when in voice channels on our
              Discord or TeamSpeak server. BTF members always have priority
              speaking privileges over our guests. Remember to follow this rule,
              otherwise you will be kicked from the server/channel. Repeat
              offenders will be punished according to our Ban Policy below.
            </li>
            <li>
              Spamming chat with text, jokes, or memes is NOT allowed unless
              given explicit permission by a BTF member or channel owner. Memes
              are dank and all, but no one wants to see every single one you
              have ever saved.
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
