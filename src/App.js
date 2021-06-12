import marked from 'marked'
import React, { useState } from 'react'
import { Grid, TextField, Typography } from '@material-ui/core'
import useStyles from './styles'

const App = () => {
    const [markdown, setMarkdown] = useState('')
    const classes = useStyles()

    return (
        <Grid container spacing={2} className={classes.container}>
            <Grid item xs={6}>
                <Typography variant='h4' style={{ marginBottom: '20px' }}>Markdown Input</Typography>
                <TextField 
                    multiline
                    variant='outlined'
                    fullWidth
                    onChange={(e) => setMarkdown(e.target.value)}
                    className={classes.inputTextArea}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h4' style={{ marginBottom: '20px' }}>Markdown Output</Typography>
                <div className={classes.output} dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
            </Grid>
        </Grid>
    )
}

export default App
