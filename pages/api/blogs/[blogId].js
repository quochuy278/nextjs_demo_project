const handler =  (req,res) => {
    if (req.method === 'GET'){
        
        const params = req.query.blogId
        res.status(200).json({message: 'This is my parmas: ' + params})

    }
    else if (req.method === 'PUT') {

    }
    else if (req.method === 'DELETE') {

    }
}

export default handler