import db from "../db.js"
import { nanoid } from 'nanoid'

const create = async (data: {}) => {
  const id = nanoid(10)
  data = { ...data, id }
  console.log(`Creating character: ${JSON.stringify(data)}`)
  await db('characters').insert({ id, data: JSON.stringify(data) })
  return data
}

const update = async (id: string, data: {}) => {
  console.log(`Updating character: ${JSON.stringify(data)}`)
  await db('characters').update({ data: JSON.stringify(data) }).where({ id })
  return data
}

const get = async (id: string) => {
  const { data } = await db('characters').select(['data']).where({ id }).first()
  console.log(`Fetching character: ${JSON.stringify(data)}`)
  return data
}

export default {
  create,
  update,
  get
}
