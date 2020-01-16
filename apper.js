const ClickHouse = require('@apla/clickhouse')

const dockerIP = 'http://192.168.99.100:8123'
const ch = new ClickHouse({ 
  host: dockerIP, 
  port: '8123', 
  // user: 'default',
  // password: '',
  queryOptions: {
    profile: "web",
    database: "test",
  },
})
 
const stream = ch.query("SHOW databases", (err, data) => {
  console.log(err)
  console.log(data)
})
stream.pipe(process.stdout)
 
// promise interface, not recommended for selects
// (requires 'util.promisify' for node < 8, Promise shim for node < 4)
// await ch.querying("CREATE DATABASE test")