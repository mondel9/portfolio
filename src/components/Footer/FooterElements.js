import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';


export const FooterContainer = styled.footer`
  background: var(--bg);
  padding: 2rem;
`

export const FooterText = styled.p`
  font-size: 1rem;
  padding: .5rem;
`
export const Icon = styled.a`
  display: inline-block;
  color: var(--accent);
  font-size: 1.8rem;
  padding: 0.5rem;
  text-decoration: none;
  cursor: pointer;
`
export const ScrollIcon = styled(LinkS)`
  color: var(--accent);
  font-size: 1.8rem;
  padding: 0.5rem;
  text-decoration: none;
  cursor: pointer;
`