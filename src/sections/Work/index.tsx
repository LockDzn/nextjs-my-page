import { OnViewAnimation } from '../../animations/OnViewAnimation'

import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

import {
  Container,
  Description,
  Image,
  ImageArea,
  Information,
  Links,
  Split,
  Title,
  Type,
} from './styles'


interface WorkSectionProps {
  reverse?: boolean
  workData: {
    title: string
    description: string
    imageURL: string
    type: string
    links: {
      text: string
      url: string
    }[]
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
                {workData.links.map((link, index) => (
                  <Button key={index} link={link.url}>{link.text}</Button>
                ))}
              </Links>
            </OnViewAnimation>
          </Information>
        </Split>
      </Container>
    </Section>
  )
}
