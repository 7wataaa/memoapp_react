import React from 'react'
import Header from '../components/Header'
import MemoCard from '../components/MemoCard'
import { Add } from '@material-ui/icons'
import { Fab, makeStyles, ThemeProvider, CssBaseline, Typography, Grid } from '@material-ui/core'


const useHomePageStyles = makeStyles((theme) => ({
  offset: {
    ...theme.mixins.toolbar,
    //flexGrow: 1,
  },
  fab: {
    margin: '0px',
    top: 'auto',
    right: '50px',
    bottom: '25px',
    left: 'auto',
    position: 'fixed',
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}))

function HomePage() {
  const classes = useHomePageStyles()

  return <>

    <Header />

    <div className={classes.offset} />

    <Body />

    <Fab className={classes.fab} variant="extended">
      <Add className={classes.extendedIcon} /> New Memo
      </Fab>
  </>
}

interface MemoCardProps {
  id: string,
  title: string,
  tags: string[],
  content: string,
}

function Body() {
  const memoinfoMock = [
    {
      id: '0',
      title: 'Title',
      tags: ['#tag1', '#tag2'],
      content: `
      content1,content1,content1,content1,content1,content1,content1,content1,content1,content1,
      content1,content1,content1,content1,content1,
      content1,content1,content1,content1,content1,
      content1,content1,content1,content1,content1,
      content1,content1,content1,content1,content1,
      content1,content1,content1,content1,content1,
      content1,content1,content1,content1,content1,
      content1,content1,content1,content1,content1,
      `,
    } as MemoCardProps, {
      id: '1',
      title: 'Title',
      tags: ['#tag1', '#tag2'],
      content: 'content2'
    } as MemoCardProps, {
      id: '2',
      title: 'Title',
      tags: ['#tag1', '#tag2'],
      content: 'content3'
    } as MemoCardProps, {
      id: '3',
      title: 'Title',
      tags: ['#tag1', '#tag2'],
      content: 'content4'
    } as MemoCardProps, {
      id: '4',
      title: 'Title',
      tags: ['#tag1', '#tag2'],
      content: 'content5'
    } as MemoCardProps, {
      id: '5',
      title: 'Title',
      tags: ['#tag1', '#tag2'],
      content: 'content6'
    } as MemoCardProps, {
      id: '6',
      title: 'Title',
      tags: ['#tag1', '#tag2'],
      content: 'content7'
    } as MemoCardProps,
  ]

  return <Memos memoinfos={memoinfoMock} />
}

const useMemoStyle = makeStyles((theme) => ({
  gridContainer: {
    margin: '40px',
    display: 'grid',
    gridGap: '20px',
    gridAutoRows: '251px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(239px, 0.3fr))',
    justifyContent: 'center',
  }
}))


/**
 * @param {MemoCardProps} memoinfo このリストに入ってる情報でMemoCardたちを作る
 */
function Memos(props: { memoinfos: MemoCardProps[] }) {
  const classes = useMemoStyle()

  const cards = props.memoinfos.map((e) => {
    return <MemoCard key={e.id} title={e.title} tags={e.tags} content={e.content} />
  })

  return <div className={classes.gridContainer}>
    {cards}
  </div>
}

export default HomePage