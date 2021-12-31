const { Client } = require('@notionhq/client');
import { blockToString } from './helpers'

const notion = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

/**
 * @func getMainPage
 * Call Notion's blog
 */
export const getMainPage = async (block_id = 'ed98d521dd4a4e1ab37fe7aee00768e6') => {
  const list = []
  const block = await notion.blocks.children.list({
    block_id
  });
  const database = await notion.databases.query({
    database_id: block.results[0].id
  })
  database.results.forEach((x) => {
    list.push({
      component: x.properties.component.title[0].plain_text,
      content: x.properties.value.rich_text[0].plain_text
    })
  })
  return list.reverse()
}