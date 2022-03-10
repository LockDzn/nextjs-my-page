import { FaArrowRight, FaGithub } from "react-icons/fa"
import { Link } from "./styles"

interface Props {
  link: string
  children?: React.ReactNode
}

export function Button({ link, children }: Props) {

  if (link.includes('github.com')) {
    return (
      <div>
        <Link href={link} target="_blank">
          {children}
          <FaGithub size={18} />
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link
        href={link}
        target="_blank"
        className="outline"
      >
        {children}
        <FaArrowRight size={18} />
      </Link>
    </div>
  )
}