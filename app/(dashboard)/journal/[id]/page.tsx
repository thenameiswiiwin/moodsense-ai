interface EntryPageProp {
  params: {
    id: string
  }
}

const EntryPage = ({ params }: EntryPageProp) => {
  return <div>{params.id}</div>
}

export default EntryPage
