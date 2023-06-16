import { FC } from 'react'
import { Container } from '../../shared/ui/Container/Container'
import { HeaderH2 } from '../../shared/ui/Headers/HeaderH2'
import { Button } from '../../shared/ui/Button__green/Button';
import c from "./Examples.module.css"
export const Examples: FC = () => {
  return (
    <Container>
      <HeaderH2>Примеры работ</HeaderH2>
      <div className={c.center}><Button width="200px" margin="40px auto"><a href="https://widget.sonline.su/ru/services/?placeid=999963927" target="_blank">онлайн запись</a></Button>
      </div>
    </Container>
  )
} 