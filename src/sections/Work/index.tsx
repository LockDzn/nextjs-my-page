import { OnViewAnimation } from '../../animations/OnViewAnimation'

import { Section } from '../../components/Section'

import {
  Container,
  Description,
  Image,
  ImageArea,
  Information,
  Link,
  Links,
  Split,
  Title,
  Type,
} from './styles'
import { FaArrowRight, FaGithub } from 'react-icons/fa'

interface WorkSectionProps {
  reverse?: boolean
  workData: {
    title: string
    description: string
    imageURL: string
    type: string
    demoURL: string
    githubURL: string
  }
}

export function WorkSection({ reverse = false, workData }: WorkSectionProps) {
  return (
    <Section>
      <Container className={`${reverse ? 'reverse' : ''}`}>
        <Split>
          <ImageArea>
            <OnViewAnimation style={{ width: '100%', height: '100%' }}>
              <Image
                src={workData.imageURL}
                alt=""
                whileHover={{ scale: 1.2 }}
              />
            </OnViewAnimation>
          </ImageArea>
          <Information>
            <OnViewAnimation aimateDelay={1.2}>
              <Type>{workData.type}</Type>
              <Title>{workData.title}</Title>
              <Description>{workData.description}</Description>
              <Links>
                {workData.githubURL.trim() && (
                  <Link href={workData.githubURL} target="_blank">
                    On Github
                    <FaGithub size={18} />
                  </Link>
                )}
                {workData.demoURL.trim() && (
                  <Link
                    href={workData.demoURL}
                    target="_blank"
                    className="outline"
                  >
                    Demo
                    <FaArrowRight size={18} />
                  </Link>
                )}
              </Links>
            </OnViewAnimation>
          </Information>
        </Split>
      </Container>
    </Section>
  )
}
