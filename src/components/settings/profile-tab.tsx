import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Camera,
  Save,
  Loader2,
  Check,
  GraduationCap,
  MailIcon,
  X,
} from "lucide-react";
import { profileSchema, type ProfileFormValues } from "@/lib/schema";
import { User } from "@/generated/prisma/client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { UserAvatar } from "../global/user-avatar";

interface ProfileTabProps {
  user: User;
  isSaving: boolean;
  savedSection: string | null;
  handleSave: (section: string) => Promise<void>;
}

export function ProfileTab({
  user,
  isSaving,
  savedSection,
  handleSave,
}: ProfileTabProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user.name?.split(" ")[0] || "",
      lastName: user.name?.split(" ")[1] || "",
      email: user.email || "",
      image: user.image || "",
      university: user.university || "",
      major: "",
      graduationYear: "",
    },
  });

  const onProfileSubmit = async (data: ProfileFormValues) => {
    setStatus(null);
    setError(null);

    const { error } = await authClient.updateUser({
      name: `${data.firstName} ${data.lastName}`,
      image: data.image,
      university: data.university,
    });

    if (error) {
      setError(error.message || "Failed to update profile");
    } else {
      setStatus("Profile updated");
      toast.success("Profile updated successfully");
      router.refresh();
    }
  };

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        profileForm.setValue("image", base64, { shouldDirty: true });
      };
      reader.readAsDataURL(file);
    }
  }

  const imagePreview = profileForm.watch("image");

  return (
    <Card
      className="opacity-0 animate-[fade-in-up_0.5s_ease-out_forwards]"
      style={{ animationDelay: "150ms" }}
    >
      <CardHeader>
        {!user.emailVerified && (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800/50 dark:bg-yellow-950/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MailIcon className="size-5 text-yellow-600 dark:text-yellow-400" />
                <span className="text-yellow-800 dark:text-yellow-200">
                  Please verify your email address to access all features.
                </span>
              </div>
              <Button size="sm" asChild>
                <Link href={`/${user.id}/verify-email`}>Verify Email</Link>
              </Button>
            </div>
          </div>
        )}
        <CardTitle className="flex items-center gap-2">
          {/* <User className="w-5 h-5 text-primary" /> */}
          Profile Information
        </CardTitle>
        <CardDescription>
          Update your personal details and university info
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...profileForm}>
          <form
            onSubmit={profileForm.handleSubmit(onProfileSubmit)}
            className="space-y-6"
          >
            {/* Avatar Section */}
            <div className="flex items-center gap-6">
              <div className="relative group">
                {imagePreview && (
                  <div className="relative size-16">
                    <UserAvatar
                      name={user.name}
                      image={imagePreview}
                      className="size-16"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      className="absolute -top-2 -right-2 size-6 rounded-full"
                      onClick={() => profileForm.setValue("image", "")}
                      aria-label="Remove image"
                    >
                      <X className="size-4" />
                    </Button>
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-medium text-foreground">Profile Photo</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  JPG, PNG or GIF. Max 2MB.
                </p>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <Button
                  type="button"
                  onClick={() =>
                    document.getElementById("image-upload")?.click()
                  }
                  variant="outline"
                  size="sm"
                >
                  Change Photo
                </Button>
              </div>
            </div>

            <Separator />

            {/* Name Fields */}
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={profileForm.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      {...field}
                      className="transition-all duration-200 focus:scale-[1.01]"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={profileForm.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      {...field}
                      className="transition-all duration-200 focus:scale-[1.01]"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={profileForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input
                    {...field}
                    type="email"
                    readOnly
                    className="transition-all duration-200 focus:scale-[1.01]"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            {/* University Info */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                Academic Information
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                  control={profileForm.control}
                  name="university"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>University</FormLabel>
                      <Input
                        {...field}
                        className="transition-all duration-200 focus:scale-[1.01]"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={profileForm.control}
                  name="major"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Major</FormLabel>
                      <Input
                        {...field}
                        className="transition-all duration-200 focus:scale-[1.01]"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={profileForm.control}
                name="graduationYear"
                render={({ field }) => (
                  <FormItem className="max-w-xs">
                    <FormLabel>Graduation Year</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {["2024", "2025", "2026", "2027", "2028"].map(
                          (year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          )
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isSaving}
                className="min-w-[120px]"
              >
                {isSaving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : savedSection === "profile" ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Saved
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
