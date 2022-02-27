import { Button } from "@mui/material"

const FormDelete = (props) => {
    
    return (
    <form onSubmit={props.onDelete}>
         <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{
                      backgroundColor: "#d29681",
                      color: "#057389",
                    }}
                  >
                    Delete Blog
                  </Button>
    </form>
        )
}

export default FormDelete