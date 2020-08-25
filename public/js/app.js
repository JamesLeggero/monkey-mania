$( ()=>{


    
    // const $exploreSubmit = $('#explore-submit')
    const $displaySection = $('#display-section')
    const $exploreSelect = $('#explore-select')


    const testFunc = ()=>{
        event.preventDefault()
        // console.log('test')
        
        $displaySection.append(`<h1>hello</h1>`)
        const selectedValue = $exploreSelect.val()
        console.log(selectedValue)
        
        // return selectedValue
        // localStorage.setItem('selectedValue', selectedValue)
        
        // $.ajax({
        //     type: 'GET',
        //     url: '/explore?data=selectedValue',
        //     success: success
        // })

        
    }

    


    // $exploreSubmit.on('click', testFunc)
    $exploreSelect.on('change', testFunc)

})
