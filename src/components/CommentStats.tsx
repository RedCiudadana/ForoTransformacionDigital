import React from 'react';
import { MessageSquare, Users, TrendingUp, Award, Loader2 } from 'lucide-react';
import { useCommentStats } from '../hooks/useComments';

interface CommentStatsProps {
  lawId: string;
  articleId?: string;
}

const CommentStats: React.FC<CommentStatsProps> = ({ lawId, articleId }) => {
  const { stats, loading } = useCommentStats(lawId, articleId);

  if (loading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
          <span className="ml-2 text-gray-600">Cargando estadísticas...</span>
        </div>
      </div>
    );
  }

  const statItems = [
    {
      label: 'Comentarios',
      value: stats.totalComments,
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      label: 'Participantes',
      value: stats.uniqueParticipants,
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      label: 'Expertos',
      value: stats.expertComments,
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      label: 'Destacados',
      value: stats.highlightedComments,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Estadísticas de Participación
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statItems.map((item, index) => {
          const IconComponent = item.icon;
          
          return (
            <div key={index} className="text-center">
              <div className={`${item.bgColor} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2`}>
                <IconComponent className={`h-6 w-6 ${item.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {item.value}
              </div>
              <div className="text-sm text-gray-600">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>

      {stats.totalComments > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-lg font-semibold text-gray-900">
                {Math.round((stats.expertComments / stats.totalComments) * 100)}%
              </div>
              <div className="text-sm text-gray-600">
                Comentarios de expertos
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900">
                {Math.round((stats.highlightedComments / stats.totalComments) * 100)}%
              </div>
              <div className="text-sm text-gray-600">
                Comentarios destacados
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentStats;