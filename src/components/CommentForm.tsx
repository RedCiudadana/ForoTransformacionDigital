import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Send, User, Mail, Tag, Loader2, Shield } from 'lucide-react';
import { useRecaptcha } from './RecaptchaProvider';

interface CommentFormProps {
  onSubmit: (data: {
    author_name: string;
    author_email?: string;
    content: string;
    is_expert?: boolean;
    tags?: string[];
    recaptcha_token: string;
  }) => Promise<void>;
  isGeneral?: boolean;
  loading?: boolean;
}

const CommentForm: React.FC<CommentFormProps> = ({ 
  onSubmit,
  isGeneral = false,
  loading = false
}) => {
  const { siteKey } = useRecaptcha();
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  
  const [formData, setFormData] = useState({
    author_name: '',
    author_email: '',
    content: '',
    tags: '',
    is_expert: false
  });
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaError, setRecaptchaError] = useState<string | null>(null);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
    setRecaptchaError(null);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
    setRecaptchaError('El captcha ha expirado. Por favor, complétalo nuevamente.');
  };

  const handleRecaptchaError = () => {
    setRecaptchaToken(null);
    setRecaptchaError('Error al cargar el captcha. Por favor, recarga la página.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.content.trim() || !formData.author_name.trim()) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }

    if (!recaptchaToken) {
      setRecaptchaError('Por favor, completa la verificación de seguridad.');
      return;
    }

    setIsSubmitting(true);
    setRecaptchaError(null);

    try {
      const tags = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      await onSubmit({
        author_name: formData.author_name,
        author_email: formData.author_email || undefined,
        content: formData.content,
        is_expert: formData.is_expert,
        tags: tags.length > 0 ? tags : undefined,
        recaptcha_token: recaptchaToken
      });

      // Reset form but keep email for convenience
      setFormData(prev => ({
        author_name: '',
        author_email: prev.author_email,
        content: '',
        tags: '',
        is_expert: false
      }));
      setShowAdvanced(false);
      setRecaptchaToken(null);
      
      // Reset reCAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('Error al enviar el comentario. Por favor, inténtalo de nuevo.');
      
      // Reset reCAPTCHA on error
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = formData.content.trim() && 
                     formData.author_name.trim() && 
                     formData.content.length >= 10 && 
                     recaptchaToken &&
                     !isSubmitting && 
                     !loading;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 rounded-full p-2 mr-3">
          <Send className="h-5 w-5 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          {isGeneral ? 'Comentario General' : 'Comentar Artículo'}
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="author_name" className="block text-sm font-medium text-gray-700 mb-1">
              <User className="h-4 w-4 inline mr-1" />
              Nombre completo *
            </label>
            <input
              type="text"
              id="author_name"
              value={formData.author_name}
              onChange={(e) => handleInputChange('author_name', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tu nombre completo"
              required
              disabled={isSubmitting || loading}
            />
          </div>

          <div>
            <label htmlFor="author_email" className="block text-sm font-medium text-gray-700 mb-1">
              <Mail className="h-4 w-4 inline mr-1" />
              Correo electrónico (opcional)
            </label>
            <input
              type="email"
              id="author_email"
              value={formData.author_email}
              onChange={(e) => handleInputChange('author_email', e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="tu@email.com"
              disabled={isSubmitting || loading}
            />
            <p className="text-xs text-gray-500 mt-1">
              Para recibir actualizaciones sobre tu comentario
            </p>
          </div>
        </div>

        {/* Comment Content */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
            Tu comentario *
          </label>
          <textarea
            id="content"
            rows={5}
            value={formData.content}
            onChange={(e) => handleInputChange('content', e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder={
              isGeneral
                ? 'Comparte tu opinión general sobre esta iniciativa de ley...'
                : 'Comparte tu opinión sobre este artículo específico...'
            }
            required
            disabled={isSubmitting || loading}
          />
          <div className="flex justify-between items-center mt-1">
            <p className="text-xs text-gray-500">
              Mínimo 10 caracteres. Sé constructivo y específico.
            </p>
            <span className={`text-xs ${
              formData.content.length < 10 ? 'text-red-500' : 'text-green-600'
            }`}>
              {formData.content.length} caracteres
            </span>
          </div>
        </div>

        {/* Advanced Options */}
        <div>
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            disabled={isSubmitting || loading}
          >
            {showAdvanced ? 'Ocultar opciones avanzadas' : 'Mostrar opciones avanzadas'}
          </button>
        </div>

        {showAdvanced && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                <Tag className="h-4 w-4 inline mr-1" />
                Etiquetas (opcional)
              </label>
              <input
                type="text"
                id="tags"
                value={formData.tags}
                onChange={(e) => handleInputChange('tags', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="definiciones, sectores-prioritarios, implementacion"
                disabled={isSubmitting || loading}
              />
              <p className="text-xs text-gray-500 mt-1">
                Separa las etiquetas con comas. Ayudan a categorizar tu comentario.
              </p>
            </div>

            {/* Expert Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_expert"
                checked={formData.is_expert}
                onChange={(e) => handleInputChange('is_expert', e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                disabled={isSubmitting || loading}
              />
              <label htmlFor="is_expert" className="ml-2 text-sm text-gray-700">
                Soy experto en esta materia (académico, profesional del sector, etc.)
              </label>
            </div>
          </div>
        )}

        {/* reCAPTCHA */}
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center mb-3">
            <Shield className="h-5 w-5 text-blue-600 mr-2" />
            <h4 className="font-medium text-gray-900">Verificación de seguridad *</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Para prevenir spam y proteger la calidad del diálogo, por favor completa la verificación:
          </p>
          
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={siteKey}
              onChange={handleRecaptchaChange}
              onExpired={handleRecaptchaExpired}
              onError={handleRecaptchaError}
              theme="light"
              size="normal"
            />
          </div>
          
          {recaptchaError && (
            <div className="mt-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-2">
              {recaptchaError}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between pt-4">
          <div className="text-xs text-gray-500">
            <p>Tu comentario será público y contribuirá al análisis legislativo.</p>
            <p>Al enviar, aceptas que tu comentario sea revisado por moderadores.</p>
          </div>
          
          <button
            type="submit"
            disabled={!isFormValid}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Enviar Comentario
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;