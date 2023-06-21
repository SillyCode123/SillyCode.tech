function addContent(type){
    switch (type) {
    //TODO hier noch für android und so die dann einlesen.
      default:
        return(<>
                <h1 className="middle">{type}</h1>
                <span className="middle">No content availible.</span>
            </>
        );
    }
      
}

export default addContent;