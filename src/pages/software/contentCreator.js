function addContent(type){
    var json;
    switch (type) {
      default:
        return(<>
                <h1 className="middle">{type}</h1>
                <span className="middle">No content availible.</span>
            </>
        );
    }
      
}
  
export default addContent;