export default function isFormDisabled(formData) {
    return (
      formData.additionalIngredients.length > 10 ||
      formData.size === '' ||
      formData.doughTickness === 'Hamur Kalınlığı' ||
      formData.clientName.length < 3
    );
  }