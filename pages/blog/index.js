import { Container, Grid } from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  const middle = 150

  return (
    <Container style={{ maxWidth: 600 }}>
      <Grid container direction="column" alignItems="center">
        <Grid justifyContent="center" alignItems="center">
          <Image src="/second.png" alt="me" width={middle} height={middle} />
        </Grid>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Grid>
            <Link href="#">
              <a>Build a Next.js/Notion website</a>
            </Link>
          </Grid>
          <Grid>12/02</Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Blog