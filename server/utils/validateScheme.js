export default function getErrors(error) {
    let errorArray = [];
    if (error) {
      if (error.errors['title']) {
        errorArray.push(`title: ${error.errors['title'].message}`);
      }
      if (error.errors['year']) {
        errorArray.push(`year: ${error.errors['year'].message}`);
      }
    } else {
      console.log('No Errors Movie Saved Succefully')
    }
    return errorArray;
  };