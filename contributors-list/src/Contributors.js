import React from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { GITHUB_API_URL, OWNER_REPO_GITHUB, REPO_GITHUB } from './helpers/configs'

const Contributors = () => {
  const [rows, setRows] = React.useState([])
  React.useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(`${GITHUB_API_URL}repos/${OWNER_REPO_GITHUB}/${REPO_GITHUB}/contributors`)
        setRows(response.data)
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, [])

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles()

  return(
      <div>
        <h1 style={{'textAlign':'center'}}> List of Contributors</h1>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell >Contributor</TableCell>
                <TableCell >Avatar</TableCell>
                <TableCell >Role</TableCell>
                <TableCell >Repos</TableCell>
                <TableCell >Contributions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                  <TableRow key={row.login}>
                    <TableCell >{row.login}</TableCell>
                    <TableCell >{row.avatar_url}</TableCell>
                    <TableCell >{row.type}</TableCell>
                    <TableCell >{row.repos_url}</TableCell>
                    <TableCell >{row.contributions}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  )
}

export default Contributors;
