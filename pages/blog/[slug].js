const Slug = ({ data, slug }) => {
  return (
    <div>
      <p>{data}</p>
      <p>{slug}</p>
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      data: 'data',
      slug: params.slug
    }
  }
}

export default Slug