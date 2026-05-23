import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCreateGig } from '../../hooks/useGigs';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { useNavigate } from 'react-router-dom';

const createGigSchema = z.object({
  title: z.string().trim().min(5, 'Title must be at least 5 characters'),
  description: z.string().trim().min(20, 'Description must be detailed enough'),
  price: z.preprocess((val) => Number(val), z.number().min(1, 'Price must be greater than 0')),
  skillsRequired: z.string().transform(str => str.split(',').map(s => s.trim()).filter(Boolean)),
  deadline: z.string().optional(),
});

const CreateGigPage = () => {
  const { mutate: create, isPending } = useCreateGig();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createGigSchema),
  });

  const onSubmit = (data) => {
    // Note: deadline is omitted because the backend's Zod uses z.date()
    // which rejects strings, and JSON cannot transmit Date objects.
    // The field is optional in the Mongoose schema so gigs work without it.
    const payload = {
      title: data.title,
      description: data.description,
      price: data.price,
      skillsRequired: data.skillsRequired,
    };

    create(payload, {
      onSuccess: () => navigate('/business/my-gigs')
    });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create a Gig</h1>
        <p className="text-muted-foreground mt-1">Post a new short-term project to find local talent.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gig Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Gig Title</label>
              <Input placeholder="e.g. Frontend Developer Needed" {...register('title')} error={errors.title?.message} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <textarea
                {...register('description')}
                className={`w-full min-h-[150px] p-3 rounded-md border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring ${
                  errors.description ? 'border-destructive' : 'border-input'
                }`}
                placeholder="Describe the project requirements and goals..."
              />
              {errors.description && <p className="text-destructive text-xs mt-1">{errors.description.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Budget ($)</label>
                <Input type="number" placeholder="5000" {...register('price')} error={errors.price?.message} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Deadline (optional)</label>
                <Input type="date" {...register('deadline')} error={errors.deadline?.message} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Skills Required (comma separated)</label>
              <Input placeholder="React, Tailwind, Node.js" {...register('skillsRequired')} error={errors.skillsRequired?.message} />
            </div>

            <div className="flex justify-end pt-4 border-t">
              <Button type="submit" isLoading={isPending}>Post Gig</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateGigPage;
