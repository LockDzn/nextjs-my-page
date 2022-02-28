import { motion } from 'framer-motion'
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaTwitch,
  FaEnvelope,
} from 'react-icons/fa'

import { Section } from '../../components/Section'
import { GradientText } from '../../components/GradientText'
import { OnViewAnimation } from '../../animations/OnViewAnimation'

import {
  Container,
  LeftSide,
  Header,
  Social,
  IconLink,
  Description,
  Name,
  RightSide,
  Blackrole,
} from './styles'

export function InitialSection() {
  return (
    <Section>
      <Container>
        <LeftSide>
          <OnViewAnimation aimateDelay={0.2}>
            <Header>
              <Name whileHover={{ letterSpacing: '10px' }}>Ryan Souza</Name>
              <GradientText size={20} text="Web developer & UX/UI Designer" />
            </Header>
            <Description>
              Developer specialized in creating interfaces so that users have
              the best experience.
            </Description>
            <Social>
              <IconLink
                whileHover={{ scale: 1.5, rotate: 10 }}
                href="https://twitter.com/nuLoki_"
              >
                <FaTwitter size={28} />
              </IconLink>
              <IconLink
                whileHover={{ scale: 1.5, rotate: 10 }}
                href="https://github.com/LockDzn"
              >
                <FaGithub size={28} />
              </IconLink>
              <IconLink
                whileHover={{ scale: 1.5, rotate: 10 }}
                href="https://www.linkedin.com/in/ryanssouza/"
              >
                <FaLinkedin size={28} />
              </IconLink>
              <IconLink
                whileHover={{ scale: 1.5, rotate: 10 }}
                href="https://www.twitch.tv/nuloki_"
              >
                <FaTwitch size={28} />
              </IconLink>
              <IconLink
                whileHover={{ scale: 1.5, rotate: 10 }}
                href="mailto:eu.ryansouza@gmail.com"
              >
                <FaEnvelope size={28} />
              </IconLink>
            </Social>
          </OnViewAnimation>
        </LeftSide>
        <RightSide>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
            }}
          >
            <Blackrole
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 8,
              }}
            />
          </motion.div>
        </RightSide>
      </Container>
    </Section>
  )
}
