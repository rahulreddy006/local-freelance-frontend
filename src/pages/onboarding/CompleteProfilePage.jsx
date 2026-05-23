import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { completeProfile } from '../../api/auth.api';
import { useAuth } from '../../hooks/useAuth';
import { toast } from '../../utils/toast';
import { useNavigate } from 'react-router-dom';
import { ROLES } from '../../utils/constants';
import Button from '../../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import { motion } from 'framer-motion';
import { Briefcase, UserRound } from 'lucide-react';
import { cn } from '../../utils/cn';

const CompleteProfilePage = () => {
  const { user, updateAuthTokens } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const { mutate: completeOnboarding, isPending } = useMutation({
    mutationFn: completeProfile,
    onSuccess: (response) => {
      toast.success(response.message || 'Profile completed successfully!');
      
      // Extract new tokens from API response
      const { accessToken, refreshToken, user: updatedUser } = response.data || response;
      
      // Update auth tokens atomically with new user state
      // CRITICAL: Must use NEW tokens from response, not old localStorage tokens
      if (accessToken && refreshToken && updatedUser) {
        updateAuthTokens(accessToken, refreshToken, updatedUser);
      } else {
        // Backend MUST send tokens — if missing, fail loudly
        toast.error('Incomplete onboarding response from server');
        throw new Error('Onboarding response missing tokens or user data');
      }
      
      if (selectedRole === ROLES.BUSINESS) {
        navigate('/business/dashboard',{replace: true});
      } else {
        navigate('/student/dashboard',{replace: true});
      }
    },
    onError: (error) => {
      const message = error?.response?.data?.message || 'Failed to complete profile';
      toast.error(message);
    },
  });

  const handleSubmit = () => {
    if (!selectedRole) {
      toast.error('Please select a role');
      return;
    }
    completeOnboarding({ role: selectedRole });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Card className="p-2 border-2 border-primary/20 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Complete Your Profile</CardTitle>
            <CardDescription className="text-lg mt-2">
              Welcome, {user?.name}! How will you be using LocalFreelance?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <button
                type="button"
                onClick={() => setSelectedRole(ROLES.STUDENT)}
                className={cn(
                  "flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all",
                  selectedRole === ROLES.STUDENT 
                    ? "border-primary bg-primary/5 shadow-md" 
                    : "border-border hover:border-primary/50 hover:bg-muted"
                )}
              >
                <div className={cn("p-4 rounded-full mb-4", selectedRole === ROLES.STUDENT ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>
                  <UserRound className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">I'm a Student</h3>
                <p className="text-center text-sm text-muted-foreground">
                  I want to find local freelance gigs and gain experience.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole(ROLES.BUSINESS)}
                className={cn(
                  "flex flex-col items-center justify-center p-8 rounded-xl border-2 transition-all",
                  selectedRole === ROLES.BUSINESS 
                    ? "border-primary bg-primary/5 shadow-md" 
                    : "border-border hover:border-primary/50 hover:bg-muted"
                )}
              >
                <div className={cn("p-4 rounded-full mb-4", selectedRole === ROLES.BUSINESS ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">I'm a Business</h3>
                <p className="text-center text-sm text-muted-foreground">
                  I want to hire local talent for short-term projects.
                </p>
              </button>
            </div>

            <Button 
              className="w-full text-lg h-12" 
              size="lg" 
              onClick={handleSubmit}
              disabled={!selectedRole}
              isLoading={isPending}
            >
              Continue to Dashboard
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default CompleteProfilePage;
