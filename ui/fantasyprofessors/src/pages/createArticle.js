import React, { useState, useContext, useRef, useEffect } from "react";
import { TextField, Button, CircularProgress, Alert, AlertTitle, Box, Typography, Modal } from '@mui/material'
import secrets from "../secrets";
import { AuthContext } from "../context/authenticationContext";

const CreateArticle = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [file, setFile] = useState()
    const [open, setOpen] = useState(false)
    const [imageLink, setImageLink] = useState()
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const auth = useContext(AuthContext)

   
    const filePickerRef = useRef()

    const handleImagePicked = event => {
        if(event.target.files && event.target.files.length === 1) {
            setFile(event.target.files[0])
            return
        } else {
            setError('Error uploading image.')
        }
    }

    useEffect(() => {
        if(!file) {
            return
        }
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setImageLink(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }, [file])
    

    const handleImage = props => {
        filePickerRef.current.click()
    }

    const handleSubmit = async event => {
        event.preventDefault()
        const date = new Date().toISOString()
        setIsLoading(true)
        try {
            if(!event.target.image.value) {
                throw new Error('No image uploaded!')
            }
            const formData = new FormData()
            formData.append('title', event.target.title.value)
            formData.append('author', event.target.author.value)
            formData.append('date', date)
            formData.append('image', file)
            formData.append('teaser', event.target.teaser.value)
            formData.append('body', event.target.body.value)
            formData.append('tags', event.target.tags.value)

            
            const response = await fetch(`${secrets.API_URL}/articles/create`, {
                method: "POST",
                body: formData, 
                headers: {
                    "Authorization": "Bearer " + auth.token
                }               
            })
            
            const responseData = await response.json()
            if(!response.ok) {
                throw new Error(responseData.message)
            } else {
                event.target.title.value = ""
                event.target.author.value = ""
                event.target.image.value = ""
                event.target.teaser.value = ""
                event.target.body.value = ""
                event.target.tags.value = ""
            }
            setIsSuccess(true)
        } catch (e) {
            setError(e.message || "Error creating article.")
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div>
            {isSuccess && <Alert severity="success"><AlertTitle>Success</AlertTitle>Successfully created article.</Alert>}
            {error && <Alert severity="error"><AlertTitle>Error</AlertTitle>{error}</Alert>}
            <h2 style={{textAlign: 'center'}}>Create Article</h2>

            <form onSubmit={handleSubmit}>
                <Box sx={{width: window.innerWidth > 800 ? '50%' : '100%', margin: 'auto', mt: 1}}>
                    <TextField margin="normal" required id="title" label="Article Title" autoFocus type={"text"} fullWidth />
                    <TextField margin="normal" required id="author" label="Author" type={"text"} fullWidth />
                    <div style={{display: 'flex', alignItems: 'left', flexWrap: 'wrap'}}>
                        <Button variant="outlined" component="label">
                            Upload Image
                            <input id="image" hidden required accept=".jpg,.png,.jpeg" type={"file"} ref={filePickerRef} onChange={handleImagePicked} />
                        </Button>
                        {file && (
                            <>
                                
                                <Button variant="contained" onClick={handleOpen}>View Image</Button>
                                <Modal open={open} onClose={handleClose}>
                                    <Box sx={{position: 'absolute', boxShadow: 24}}>
                                        <img src={imageLink} alt="" style={{maxHeight: '800px'}}/>
                                    </Box>
                                </Modal>
                                <Typography style={{display: 'block', verticalAlign: 'center'}}>  {file.name}</Typography>
                            </>
                        )}
                    </div>
                    <TextField margin="normal" required id="tags" label="Tags (separate with a comma & no space)" type={"text"} fullWidth />
                    <TextField margin="normal" required id="teaser" label="Teaser" type={"text"} fullWidth multiline rows={2} />
                    <TextField margin="normal" required id="body" label="Body" type={"text"} fullWidth multiline rows={10} />
                    <Button type="submit" variant="contained" fullWidth>Submit</Button>
                </Box>
            </form>

            {isLoading && <CircularProgress style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>}
        </div>
    )
}

export default CreateArticle