import React, { useState } from 'react';
import "../../public/css/ContactForm.css";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    sex: 'Mme',
    last_name: '',
    first_name: '',
    email: '',
    phone: '',
    visit_requested: false,
    callback_requested: false,
    more_photos_requested: false,
    message: '',
  });

  const [selectedDay, setSelectedDay] = useState('Lundi');
  const [selectedHour, setSelectedHour] = useState('7h');
  const [selectedMinute, setSelectedMinute] = useState('0');
  const [availabilities, setAvailabilities] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Add new availability
  const addAvailability = () => {
    const newAvailability = {
      day: selectedDay,
      hour: selectedHour,
      minutes: selectedMinute,
    };

    const exists = availabilities.some(
      (a) =>
        a.day === newAvailability.day &&
        a.hour === newAvailability.hour &&
        a.minutes === newAvailability.minutes
    );

    if (!exists) {
      setAvailabilities((prev) => [...prev, newAvailability]);
    }
  };

  // Remove availability by index
  const removeAvailability = (indexToRemove) => {
    setAvailabilities((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const submissionData = {
        sex: formData.sex,
        last_name: formData.last_name,
        first_name: formData.first_name,
        email: formData.email,
        phone: formData.phone,
        visit_requested: formData.visit_requested,
        callback_requested: formData.callback_requested,
        more_photos_requested: formData.more_photos_requested,
        message: formData.message,
        availability: availabilities
          .map(
            (a) =>
              `${a.day} à ${a.hour}${a.minutes !== '0' ? `:${a.minutes}` : ''}`
          )
          .join(', '),
      };

      console.log('Sending data:', submissionData);

      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json(); 

      if (!response.ok) {
        throw new Error(result.message || "Erreur lors de l'envoi du formulaire");
      }

      toast.success('Votre message a été envoyé avec succès !');
      console.log('Données sauvegardées:', result);

      // Reset form after success
      setFormData({
        sex: 'Mme',
        last_name: '',
        first_name: '',
        email: '',
        phone: '',
        visit_requested: false,
        callback_requested: false,
        more_photos_requested: false,
        message: '',
      });
      setAvailabilities([]);
    } catch (error) {
      console.error('Erreur:', error);
      toast.error('Erreur lors de l’envoi du formulaire.');
      setSubmitMessage(`Erreur: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-background">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />

      <div className="form-container-wrapper">
        <h1 className="main-title-h1">CONTACTEZ L'AGENCE</h1>

        {/* Inline message (optional backup to toast) */}
        {submitMessage && (
          <div
            className={`submit-message ${
              submitMessage.includes('Erreur') ? 'error' : 'success'
            }`}
          >
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="form-grid-layout">
          <div className="form-col">
            <section className="contact-section">
              <h2 className="section-headline">VOS COORDONNÉES</h2>
              <div className="radio-style-group">
                <label className="custom-radio-label">
                  <input
                    type="radio"
                    name="sex"
                    value="Mme"
                    checked={formData.sex === 'Mme'}
                    onChange={handleInputChange}
                  />
                  <span className="radio-visual"></span>
                  Mme
                </label>
                <label className="custom-radio-label">
                  <input
                    type="radio"
                    name="sex"
                    value="M"
                    checked={formData.sex === 'M'}
                    onChange={handleInputChange}
                  />
                  <span className="radio-visual"></span>
                  M
                </label>
              </div>

              <div className="two-col-grid">
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  placeholder="Nom"
                  className="input-field"
                  required
                />
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder="Prénom"
                  className="input-field"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Adresse mail"
                  className="input-field full-span"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Téléphone"
                  className="input-field full-span"
                />
              </div>
            </section>

            <section className="availability-section">
              <h2 className="section-headline">DISPONIBILITÉS POUR UNE VISITE</h2>
              <div className="availability-picker">
                <select
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                  className="select-field"
                >
                  <option>Lundi</option>
                  <option>Mardi</option>
                  <option>Mercredi</option>
                  <option>Jeudi</option>
                  <option>Vendredi</option>
                  <option>Samedi</option>
                </select>
                <select
                  value={selectedHour}
                  onChange={(e) => setSelectedHour(e.target.value)}
                  className="select-field"
                >
                  {Array.from({ length: 12 }, (_, i) => `${i + 7}h`).map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
                <select
                  value={selectedMinute}
                  onChange={(e) => setSelectedMinute(e.target.value)}
                  className="select-field"
                >
                  <option>0</option>
                  <option>15</option>
                  <option>30</option>
                  <option>45</option>
                </select>
                <button
                  type="button"
                  onClick={addAvailability}
                  className="styled-button purple-button add-availability-btn"
                >
                  AJOUTER DISPO
                </button>
              </div>

              <div className="tags-container">
                {availabilities.map((availability, index) => (
                  <div key={index} className="availability-tag-item">
                    <span>{`${availability.day} à ${availability.hour}${
                      availability.minutes !== '0' ? `:${availability.minutes}` : ''
                    }`}</span>
                    <button
                      type="button"
                      onClick={() => removeAvailability(index)}
                      aria-label="Supprimer cette disponibilité"
                    >
                      &times;
                    </button>
                  </div>
                ))}

                {availabilities.length === 0 && (
                  <div className="no-availability-message">
                    Aucune disponibilité ajoutée
                  </div>
                )}
              </div>
            </section>
          </div>

          <div className="form-col">
            <section className="message-area-section">
              <h2 className="section-headline">VOTRE MESSAGE</h2>
              <div className="checkbox-style-group">
                <label className="custom-checkbox-label">
                  <input
                    type="checkbox"
                    name="visit_requested"
                    checked={formData.visit_requested}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-visual"></span>
                  Demande de visite
                </label>
                <label className="custom-checkbox-label">
                  <input
                    type="checkbox"
                    name="callback_requested"
                    checked={formData.callback_requested}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-visual"></span>
                  Être rappelée
                </label>
                <label className="custom-checkbox-label">
                  <input
                    type="checkbox"
                    name="more_photos_requested"
                    checked={formData.more_photos_requested}
                    onChange={handleInputChange}
                  />
                  <span className="checkbox-visual"></span>
                  Plus de photos
                </label>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Votre message"
                className="message-textarea-field"
                rows="6"
              ></textarea>
            </section>

            <div className="submit-container">
              <button
                type="submit"
                className="styled-button yellow-button submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'ENVOI EN COURS...' : 'ENVOYER'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
