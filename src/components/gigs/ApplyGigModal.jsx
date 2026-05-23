import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useApplyGig } from '../../hooks/useApplications';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const applySchema = z.object({
  proposal: z.string().min(20, 'Proposal must be at least 20 characters long').max(1000, 'Proposal is too long'),
});

const ApplyGigModal = ({ isOpen, onClose, gigId, gigTitle }) => {
  const { mutate: apply, isPending } = useApplyGig();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(applySchema),
  });

  const onSubmit = (data) => {
    apply({ gigId, proposal: data.proposal }, {
      onSuccess: () => {
        reset();
        onClose();
      }
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Apply to: ${gigTitle}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-foreground">Why are you a good fit?</label>
          <textarea
            {...register('proposal')}
            className={`w-full min-h-[150px] p-3 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring ${
              errors.proposal ? 'border-destructive' : 'border-input'
            }`}
            placeholder="I have experience with React and Tailwind..."
          />
          {errors.proposal && (
            <p className="text-destructive text-xs mt-1">{errors.proposal.message}</p>
          )}
        </div>
        
        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" isLoading={isPending}>
            Submit Application
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ApplyGigModal;
